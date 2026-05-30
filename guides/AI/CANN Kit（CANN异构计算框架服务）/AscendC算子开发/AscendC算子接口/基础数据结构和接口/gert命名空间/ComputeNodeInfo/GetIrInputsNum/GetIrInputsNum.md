# GetIrInputsNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getirinputsnum`  |  **DocID**: `0852704af1474da88c5ac42c5b4336a9`  |  **NodeID**: `00020177579544980078453aecb7f965`

---

# GetIrInputsNum

  #### 函数功能

获取算子IR原型定义中的输入个数。

   #### 函数原型

```
size_t GetIrInputsNum() const
```
   #### 参数说明

无

   #### 返回值

IR原型中定义的输入个数，size_t类型。

   #### 约束说明

无

   #### 调用示例

```
size_t index = compute_node_info->GetIrInputsNum();
```

---
*Updated: 2026-04-20 01:43:56*
