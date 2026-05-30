# GetShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensordesc-getshape`  |  **DocID**: `53278e3326d8498a83f6e02b24cf0a0f`  |  **NodeID**: `0002017757954498009302fae3af220a`

---

# GetShape

  #### 函数功能

获取TensorDesc所描述Tensor的Shape。

   #### 函数原型

```
Shape GetShape() const;
```
   #### 参数说明

无

   #### 返回值

 
| 类型  | 描述  
  | [Shape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shape-construction-and-destructor)  | TensorDesc描述的shape。  
  

    #### 异常处理

无

   #### 约束说明

由于返回的Shape信息为值拷贝，因此修改返回的Shape信息，不影响TensorDesc中已有的Shape信息。

---
*Updated: 2026-04-20 01:44:00*
