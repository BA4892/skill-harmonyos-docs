# SuperKernel

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-basic-superkernel`  |  **DocID**: `0bf9d42054934b9b811714d6c1786a93`  |  **NodeID**: `0002017757954498005287eef4e61aad`

---

# SuperKernel

 KirinX90/Kirin9030处理器不支持SuperKernel，所以如下接口在Kirin平台不生效。

 **表1** KirinX90/Kirin9030任务间同步API

  
| 基础API  | 兼容说明  
  | SetNextTaskStart、WaitPreTaskEnd  不生效。

 KirinX90/Kirin9030不支持SuperKernel特性，所以任务间同步API不生效。算子代码无需进行修改。

---
*Updated: 2026-04-20 01:43:49*
