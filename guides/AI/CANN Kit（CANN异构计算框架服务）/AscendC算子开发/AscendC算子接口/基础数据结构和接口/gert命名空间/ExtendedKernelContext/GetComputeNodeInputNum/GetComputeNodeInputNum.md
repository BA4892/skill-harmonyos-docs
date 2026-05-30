# GetComputeNodeInputNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getcomputenodeinputnum`  |  **DocID**: `0043109882fe44c08bfece31a7d10060`  |  **NodeID**: `0002017757954498008681e6cc732742`

---

# GetComputeNodeInputNum

  #### 函数功能

获取算子的输入个数。

   #### 函数原型

```
size_t GetComputeNodeInputNum() const
```
   #### 参数说明

无

   #### 返回值

算子的输入个数。

   #### 约束说明

无

   #### 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
for (size_t idx = 0; idx < extend_context->GetComputeNodeInputNum(); ++idx) {
  auto input_td = extend_context->GetInputDesc(idx);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:59*
