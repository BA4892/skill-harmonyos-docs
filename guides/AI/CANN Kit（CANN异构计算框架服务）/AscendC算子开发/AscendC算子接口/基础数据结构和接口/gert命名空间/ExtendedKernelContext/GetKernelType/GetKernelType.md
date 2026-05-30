# GetKernelType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getkerneltype`  |  **DocID**: `a631c0117c4b40dbb95488f65fbd2e85`  |  **NodeID**: `00020177579544980097955425954f69`

---

# GetKernelType

  #### 函数功能

获取当前内核的类型。

   #### 函数原型

```
const char *GetKernelType() const
```
   #### 参数说明

无

   #### 返回值

当前内核的类型。

   #### 约束说明

无

   #### 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
auto kernel_type = extend_context->GetKernelType();
```

---
*Updated: 2026-04-20 01:44:01*
