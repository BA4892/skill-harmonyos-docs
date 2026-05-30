# GetKernelName

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getkernelname`  |  **DocID**: `2e1bb9c76d7a42e383f2f6ea2980e1a4`  |  **NodeID**: `000201775795449800968791228d360d`

---

# GetKernelName

  #### 函数功能

获取当前内核的名称。

   #### 函数原型

```
const char *GetKernelName() const
```
   #### 参数说明

无

   #### 返回值

当前内核的名称。

   #### 约束说明

无

   #### 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
auto kernel_name = extend_context->GetKernelName();
```

---
*Updated: 2026-04-20 01:44:01*
