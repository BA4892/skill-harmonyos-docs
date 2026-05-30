# 使用意图框架调试助手Agent进行联调时，小艺拉起应用后，出现闪退情况，应该如何处理？

> **分区**: 指南  |  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  |  **Slug**: `intents-frequently-asked-questions-three`  |  **DocID**: `60e4552eb8094cd8b9c808c17e719013`  |  **NodeID**: `000201775795449800340a74956940ac`

---

# 使用意图框架调试助手Agent进行联调时，小艺拉起应用后，出现闪退情况，应该如何处理？

 出现此现象时，优先排查接入意图框架的代码是否被混淆。接入意图框架的代码文件不可被混淆。关于混淆的详细内容请参考[应用代码混淆](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-app-code-ob#section13780943192313)。若排查后问题依然存在，请检查应用的业务代码是否有其他异常引发应用闪退。

---
*Updated: 2026-04-20 01:43:27*
