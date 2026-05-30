# GetOriginFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-ge-tensor-getoriginformat`  |  **DocID**: `47c19ef5d55840ad8ab9888a2738cb95`  |  **NodeID**: `000201775795449801005b93f80856be`

---

# GetOriginFormat

  #### 函数功能

获取Tensor的原始format。

   #### 函数原型

```
ge::Format GetOriginFormat() const
```
   #### 参数说明

无

   #### 返回值

原始format。

 关于ge::Format类型的定义，请参见[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)。

   #### 约束说明

无

   #### 调用示例

```
Tensor t = {{}, {}, {}, {}, nullptr};
t.SetOriginFormat(ge::FORMAT_NHWC);
t.SetStorageFormat(ge::FORMAT_NC1HWC0);
auto fmt = t.GetOriginFormat(); // ge::FORMAT_NHWC
```

---
*Updated: 2026-04-20 01:44:02*
