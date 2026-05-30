# 后台CPU占用峰值

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-peak-background-cpu-usage-0420`  |  **DocID**: `1d40851434d143ad863a532659d8bfbb`  |  **NodeID**: `0002017757901225583617bdd249d002`

---

# 后台CPU占用峰值

 #### 规则详情

应用/元服务后台CPU占用峰值：应用/元服务切换到后台等待3min后，开始采集3min内CPU Load < 5%。

  #### 检测逻辑

- 执行hdc shell。
- 执行hidumper --cpuusage <进程pid>命令，获取总的cpu使用率。

 

  #### 计算逻辑

执行多轮测试，取最大值为cpu占用峰值，cpu占用率须小于5%。

---
*Updated: 2026-04-22 01:08:42*
