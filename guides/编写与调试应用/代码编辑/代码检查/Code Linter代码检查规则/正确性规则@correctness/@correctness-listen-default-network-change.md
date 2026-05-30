# @correctness/listen-default-network-change

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_listen-default-network-change`  |  **DocID**: `879b28f4d6444ac1a72ffa89538a8a45`  |  **NodeID**: `0002017757901225584171d87d87c8a4`

---

# @correctness/listen-default-network-change

 建议应用监听默认网络的变化，关闭原有网络的数据传输，并使用新网络建立数据传输。

 该规则仅在联网类应用检查整个工程时才生效。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@correctness/listen-default-network-change": "suggestion"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
// With the ohos.permission.GET_NETWORK_INFO permission configured
import connection from '@ohos.net.connection';
export function test() {
  const defaultNet = connection.getDefaultNetSync();
  const netCapabilities = connection.getNetCapabilitiesSync(defaultNet);
  let bearerTypes = netCapabilities.bearerTypes;
  const netConnection = connection.createNetConnection();
  netConnection.on('netCapabilitiesChange', (netCap: connection.NetCapabilityInfo) => {
    const newBearTypes = netCap.netCap.bearerTypes;
    if (newBearTypes !== bearerTypes) {
      bearerTypes = newBearTypes;
    }
  });
}
```
  #### 反例

```
// With the ohos.permission.GET_NETWORK_INFO permission configured
// import connection from '@ohos.net.connection';
// The `on(type: 'netCapabilitiesChange', callback: Callback<connection.NetCapabilityInfo>)`, `getDefaultNet`/`getDefaultNetSync` and `getNetCapabilities`/`getNetCapabilitiesSync` functions are not called.
```
  #### 规则集

plugin:@correctness/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
