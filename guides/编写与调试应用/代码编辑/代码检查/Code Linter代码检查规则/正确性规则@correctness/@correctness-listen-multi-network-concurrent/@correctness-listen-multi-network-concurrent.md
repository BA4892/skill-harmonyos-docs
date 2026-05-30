# @correctness/listen-multi-network-concurrent

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_listen-multi-network-concurrent`  |  **DocID**: `534570dad7af4367bb234759ef224959`  |  **NodeID**: `000201775790122558420570ca4134a1`

---

# @correctness/listen-multi-network-concurrent

 建议应用订阅连接迁移通知，可在WiFi/蜂窝连接切换前后获取切换状态通知。

 该规则仅在联网类应用检查整个工程时才生效。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@correctness/listen-multi-network-concurrent": "suggestion"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
// With the ohos.permission.GET_NETWORK_INFO permission configured
import { netHandover } from '@kit.NetworkBoostKit';
import { BusinessError } from '@kit.BasicServicesKit';
try {
  netHandover.on('handoverChange', (info: netHandover.HandoverInfo) => {
    if (info.handoverStart) {
      console.info('handover start');
    } else if (info.handoverComplete) {
      console.info('handover complete');
    }
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
try {
  netHandover.off('handoverChange');
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
  #### 反例

```
// With the ohos.permission.GET_NETWORK_INFO permission configured
// The `on(type: 'handoverChange', callback: Callback<HandoverInfo>)` function is not called.
```
  #### 规则集

plugin:@correctness/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
