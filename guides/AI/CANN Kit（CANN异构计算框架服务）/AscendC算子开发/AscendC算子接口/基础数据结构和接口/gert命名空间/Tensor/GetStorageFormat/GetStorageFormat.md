# GetStorageFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensor-getstorageformat`  |  **DocID**: `5bc2e9e96cfd45f89dcc3a03618e645f`  |  **NodeID**: `000201775795449800983c25dc92742c`

---

# GetStorageFormat

  #### 函数功能

获取运行时Tensor的format。

   #### 函数原型

```
ge::Format GetStorageFormat() const
```
   #### 参数说明

无

   #### 返回值

返回运行时format。

 关于ge::Format类型的定义，请参见[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)。

   #### 约束说明

无

   #### 调用示例

```
Tensor t = {{}, {}, {}, {}, nullptr};
t.SetOriginFormat(ge::FORMAT_NHWC);
t.SetStorageFormat(ge::FORMAT_NC1HWC0);
auto fmt = t.GetStorageFormat(); // ge::FORMAT_NC1HWC0
```

---
*Updated: 2026-04-20 01:44:01*
