# GetAttrs

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getattrs`  |  **DocID**: `2b64e0e135a94e82a587a63a43fd8803`  |  **NodeID**: `000201775795449800919b4ecd067e8f`

---

# GetAttrs

  #### 函数功能

获取算子的属性值，仅在算子IR原型定义中的属性值会被返回，其他属性值被丢弃。

   #### 函数原型

```
const RuntimeAttrs *GetAttrs() const
```
   #### 参数说明

无

   #### 返回值

所有IR原型定义的属性值，为const类型的对象，属性值按照IR原型定义的顺序依次保存。

   #### 约束说明

无

   #### 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
auto rt_attrs = extend_context->GetAttrs();
```

---
*Updated: 2026-04-20 01:43:59*
