# 自定义界面扫码如何连续扫码（customScan.rescan）

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scan-faq-10`  |  **DocID**: `879177e7e3f64915be363e6d2721e077`  |  **NodeID**: `00020177579552692876768a8e57622e`

---

# 自定义界面扫码如何连续扫码（customScan.rescan）

       **问题现象**

    自定义界面扫码扫到码值后，如何连续扫码？

    **解决措施**

    customScan.[rescan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-customscan-api#customscanrescan)可以重新触发一次扫码，必须在customScan.[start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-customscan-api#customscanstart-1)(viewControl, callback)方法Callback接口回调中有效，Promise方式无效。

    示例：

    ```
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { customScan, scanBarcode } from '@kit.ScanKit';

@Entry
@Component
struct Index {
  private callback: AsyncCallback<Array<scanBarcode.ScanResult>> =
    (err: BusinessError, data: Array<scanBarcode.ScanResult>) => {
      if (err) {
        hilog.error(0x0001, '[Scan Sample]',
          `Failed to get ScanResult by callback. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      hilog.info(0x0001, '[Scan Sample]',
        `Succeeded in getting ScanResult by callback, result is ${JSON.stringify(data)}`);
      try {
        // 重新触发扫码：不需要重启相机并重新触发一次扫码，可以在start接口的Callback异步回调中，调用rescan接口。
        customScan.rescan();
      } catch (err) {
        hilog.error(0x0001, '[Scan Sample]', `Failed to rescan. Code: ${err.code}, message: ${err.message}`);
      }
    }

  build() {
  }
}
```

---
*Updated: 2026-04-20 01:45:33*
