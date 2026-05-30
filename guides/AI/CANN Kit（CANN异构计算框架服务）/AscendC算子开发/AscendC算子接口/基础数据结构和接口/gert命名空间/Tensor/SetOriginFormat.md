# SetOriginFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensor-setoriginformat`  |  **DocID**: `8db4fd4224e44f1cb7bb0d0a5f2174f7`  |  **NodeID**: `000201775795449801006b94196968b7`

---

# SetOriginFormat

  #### 函数功能

设置Tensor的原始format。

   #### 函数原型

```
void SetOriginFormat(const ge::Format origin_format)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | origin_format  | 输入  原始format。

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
auto fmt = t.GetOriginFormat(); // ge::FORMAT_NHWC
```

---
*Updated: 2026-04-20 01:44:02*
