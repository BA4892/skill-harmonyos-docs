# GetExtendInfo

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getextendinfo`  |  **DocID**: `f458f6b419b340cbb76bd836c10390e5`  |  **NodeID**: `000201775795449800986d83a47b0843`

---

# GetExtendInfo

  #### 函数功能

获取本kernel的扩展信息。

   #### 函数原型

```
const KernelExtendInfo *GetExtendInfo() const
```
   #### 参数说明

无

   #### 返回值

本kernel的扩展信息。

 关于KernelExtendInfo类型的定义，请参见[内部关联接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-internal-associated-apis)KernelExtendInfo类。

   #### 约束说明

无

   #### 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
auto extend_info = extend_context->GetExtendInfo();
```

---
*Updated: 2026-04-20 01:44:01*
