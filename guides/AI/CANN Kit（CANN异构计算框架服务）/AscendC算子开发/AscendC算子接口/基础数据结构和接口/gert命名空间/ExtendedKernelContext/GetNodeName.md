# GetNodeName

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getnodename`  |  **DocID**: `151f39070c8b4f5aafee175650b8dc93`  |  **NodeID**: `00020177579544980094758edaa123d9`

---

# GetNodeName

  #### 函数功能

获取算子的名称。

   #### 函数原型

```
const char *GetNodeName() const
```
   #### 参数说明

无

   #### 返回值

算子的名称。

   #### 约束说明

无

   #### 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
auto node_name = extend_context->GetNodeName();
```

---
*Updated: 2026-04-20 01:44:00*
