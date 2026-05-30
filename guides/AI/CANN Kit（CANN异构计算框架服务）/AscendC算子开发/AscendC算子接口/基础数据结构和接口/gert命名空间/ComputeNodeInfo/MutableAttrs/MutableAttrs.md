# MutableAttrs

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-mutableattrs`  |  **DocID**: `f02ce0daf854401eb997a2688cbf3ac1`  |  **NodeID**: `000201775795449801004ed7ae8e2d8b`

---

# MutableAttrs

  #### 函数功能

获取算子的属性值，仅在算子IR原型定义和调用IMPL_OP宏注册的属性值会被返回，其他属性值被丢弃。

 本方法与[GetAttrs](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-computenodeinfo-getattrs)的区别在于可以返回非const的属性对象。

   #### 函数原型

```
RuntimeAttrs *MutableAttrs()
```
   #### 参数说明

无

   #### 返回值

所有IR原型定义过的属性值以及通过IMPL_OP宏注册的属性值，属性值按照IR原型定义的顺序依次保存。返回对象为非const。

   #### 约束说明

无

   #### 调用示例

```
auto ret = bg::CreateComputeNodeInfo(node, buffer_pool);
ASSERT_NE(ret, nullptr);
auto compute_node_info = reinterpret_cast<ComputeNodeInfo *>(ret.get());
auto attrs = compute_node_info->MutableAttrs();
```

---
*Updated: 2026-04-20 01:44:02*
