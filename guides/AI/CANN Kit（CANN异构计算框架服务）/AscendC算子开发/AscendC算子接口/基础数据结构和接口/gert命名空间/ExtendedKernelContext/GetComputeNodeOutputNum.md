# GetComputeNodeOutputNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getcomputenodeoutputnum`  |  **DocID**: `0794956604964ed19f9211ba2e2fed2b`  |  **NodeID**: `0002017757954498008979a56893675a`

---

# GetComputeNodeOutputNum

  #### 函数功能

获取算子的输出个数。

   #### 函数原型

```
size_t GetComputeNodeOutputNum() const;
```
   #### 参数说明

无

   #### 返回值

算子的输出个数。

   #### 约束说明

无

   #### 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
for (size_t idx = 0; idx < extend_context->GetComputeNodeOutputNum(); ++idx) {
  auto input_td = extend_context->GetOutputDesc(idx);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:59*
