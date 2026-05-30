# GetOutputsNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoutputsnum`  |  **DocID**: `697a10019f2046af9500b3d9c779ba3e`  |  **NodeID**: `00020177579544980084306b8c4b0ddf`

---

# GetOutputsNum

  #### 函数功能

获取算子在网络中的实际输出个数。

   #### 函数原型

```
size_t GetOutputsNum() const
```
   #### 参数说明

无

   #### 返回值

算子的实际输出个数。

   #### 约束说明

无

   #### 调用示例

```
size_t index = compute_node_info->GetOutputsNum();
```

---
*Updated: 2026-04-20 01:43:58*
