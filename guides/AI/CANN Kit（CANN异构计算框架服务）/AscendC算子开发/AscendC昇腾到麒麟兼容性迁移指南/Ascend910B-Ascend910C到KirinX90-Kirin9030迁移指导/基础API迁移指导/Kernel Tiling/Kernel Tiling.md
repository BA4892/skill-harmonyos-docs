# Kernel Tiling

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-basic-kernel-tiling`  |  **DocID**: `e77d10b7062a41269138566bd16122c1`  |  **NodeID**: `000201775795449800526fcd5f3313a8`

---

# Kernel Tiling

 KirinX90/Kirin9030处理器不支持如下Kernel Tiling接口。

 **表1** Kernel Tiling兼容说明

  
| 基础API  | 兼容说明  
  | KERNEL_TASK_TYPE_DEFAULT、KERNEL_TASK_TYPE  不支持。

 KirinX90/Kirin9030 AI处理器为耦合架构(AI Core: 1 * AIC + 1 * AIV)，下发Task执行时，会将整个AI Core启动。当算子配置MIX_AIC_1_2时，需要关注AIV核个数的差异对算子功能的影响。

---
*Updated: 2026-04-20 01:43:49*
