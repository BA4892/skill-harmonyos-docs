# GetFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensordesc-getformat`  |  **DocID**: `39d293bc78df4db78c615c5f7a06d30c`  |  **NodeID**: `00020177579544980078348feab3e634`

---

# GetFormat

  #### 函数功能

获取TensorDesc所描述的Tensor的Format。

   #### 函数原型

```
Format GetFormat() const;
```
   #### 参数说明

无

   #### 返回值

 
| 类型  | 描述  
  | [Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)  | TensorDesc所描述的Tensor的format信息。  
  

    #### 异常处理

无

   #### 约束说明

由于返回的Format信息为值拷贝，因此修改返回的Format信息，不影响TensorDesc中已有的Format信息。

---
*Updated: 2026-04-20 01:43:57*
