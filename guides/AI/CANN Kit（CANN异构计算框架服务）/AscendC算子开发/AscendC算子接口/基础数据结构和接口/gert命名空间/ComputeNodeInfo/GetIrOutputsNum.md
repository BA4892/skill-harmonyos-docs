# GetIrOutputsNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getiroutputsnum`  |  **DocID**: `4181002f2813409b95e34943e0e72d6a`  |  **NodeID**: `000201775795449800875ec3add6a078`

---

# GetIrOutputsNum

  #### 函数功能

获取算子IR原型定义中的输出个数。

   #### 函数原型

```
size_t GetIrOutputsNum() const
```
   #### 参数说明

无

   #### 返回值

IR原型中定义的输出个数，size_t类型。

   #### 约束说明

无

   #### 调用示例

```
size_t index = compute_node_info->GetIrOutputsNum();
```

---
*Updated: 2026-04-20 01:43:59*
