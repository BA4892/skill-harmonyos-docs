# Monitor script for document scraping progress
# Run this in background to keep track of progress

$logFile = "C:\Users\admin\.codeartsdoer\skills\skill-harmonyos-docs\_scrape_progress.json"
$target = 9084
$checkInterval = 60  # seconds

Write-Host "开始监控抓取进度..."
Write-Host ""

while ($true) {
    if (Test-Path $logFile) {
        $progress = Get-Content $logFile -Raw | ConvertFrom-Json
        $pct = [Math]::Round($progress.processed / $target * 100, 1)
        
        Write-Host "$(Get-Date -Format 'HH:mm:ss') - $($progress.processed)/$target ($pct%) | 成功: $($progress.success) | 失败: $($progress.failed)"
        
        if ($progress.processed -ge $target) {
            Write-Host ""
            Write-Host "抓取完成!"
            break
        }
    } else {
        Write-Host "$(Get-Date -Format 'HH:mm:ss') - 进度文件不存在"
    }
    
    # Check if node process is still running
    $nodeProcs = Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object { $_.Id -ne $PID }
    if (-not $nodeProcs) {
        Write-Host ""
        Write-Host "Node 进程已结束!"
        
        # Auto-restart if not complete
        $progress = Get-Content $logFile -Raw | ConvertFrom-Json
        if ($progress.processed -lt $target) {
            Write-Host "自动重启抓取进程..."
            node "C:\Users\admin\.codeartsdoer\skills\skill-harmonyos-docs\_scrape_missing.js" 1000 200
        }
    }
    
    Start-Sleep -Seconds $checkInterval
}
