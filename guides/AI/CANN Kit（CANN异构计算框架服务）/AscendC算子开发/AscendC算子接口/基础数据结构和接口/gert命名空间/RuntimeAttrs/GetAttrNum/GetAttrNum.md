# GetAttrNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getattrnum`  |  **DocID**: `a150eacd6cbf464fb47e7a5c4f7dcfe2`  |  **NodeID**: `00020177579544980094455b7d52cd6b`

---

# GetAttrNum

  #### 函数功能

获取属性的数量。

   #### 函数原型

```
size_t GetAttrNum() const
```
   #### 参数说明

无

   #### 返回值

属性的数量。

   #### 约束说明

无

   #### 调用示例

```
const RuntimeAttrs * runtime_attrs = kernel_context->GetAttrs();
size_t attr_num = runtime_attrs->GetAttrNum();
```

---
*Updated: 2026-04-20 01:44:00*
