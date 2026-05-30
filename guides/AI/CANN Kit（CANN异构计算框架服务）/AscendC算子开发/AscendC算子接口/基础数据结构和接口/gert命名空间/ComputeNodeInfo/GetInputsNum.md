# GetInputsNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getinputsnum`  |  **DocID**: `63a47673b0f443a0bafad030408fcb47`  |  **NodeID**: `0002017757954498008144681bcc1399`

---

# GetInputsNum

  #### 函数功能

获取算子在网络中的实际输入个数。

   #### 函数原型

```
size_t GetInputsNum() const
```
   #### 参数说明

无

   #### 返回值

算子的实际输入个数。

   #### 约束说明

无

   #### 调用示例

```
size_t index = compute_node_info->GetInputsNum();
```

---
*Updated: 2026-04-20 01:43:57*
