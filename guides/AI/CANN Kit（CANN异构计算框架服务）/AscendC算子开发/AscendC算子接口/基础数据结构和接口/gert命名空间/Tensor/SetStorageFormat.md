# SetStorageFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setsorageformat`  |  **DocID**: `ab96840256404bc98e3a84a79d91d282`  |  **NodeID**: `000201775795449800993c155cd20837`

---

# SetStorageFormat

  #### 函数功能

设置运行时Tensor的format。

   #### 函数原型

```
void SetStorageFormat(const ge::Format storage_format)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | storage_format  | 输入  运行时format。

 关于ge::Format类型的定义，请参见[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)。

  
  

    #### 返回值

无

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
*Updated: 2026-04-20 01:44:02*
