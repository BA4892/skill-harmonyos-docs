# GetNodeType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getnodetype`  |  **DocID**: `61b0d9631730414e9d1610affaee4a8b`  |  **NodeID**: `0002017757954498009413316e6836bd`

---

# GetNodeType

  #### 函数功能

获取算子的类型。

   #### 函数原型

```
const char *GetNodeType() const
```
   #### 参数说明

无

   #### 返回值

算子的类型。

   #### 约束说明

无

   #### 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
auto node_type = extend_context->GetNodeType();
```

---
*Updated: 2026-04-20 01:44:00*
