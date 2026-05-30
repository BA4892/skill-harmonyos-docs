# GetTensorDesc

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-gettensordesc`  |  **DocID**: `35cdd871e93f4b3589cb936991a6b449`  |  **NodeID**: `00020177579544980097706302501632`

---

# GetTensorDesc

  #### 函数功能

获取Tensor的描述符。

   #### 函数原型

```
TensorDesc GetTensorDesc() const;
```
   #### 参数说明

无

   #### 返回值

 
| 类型  | 描述  
  | [TensorDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordesc-construction-and-destructor)  | 返回当前Tensor的描述符。  
  

    #### 异常处理

无

   #### 约束说明

修改返回的TensorDesc信息，不影响Tensor对象中已有的TensorDesc信息。

---
*Updated: 2026-04-20 01:44:01*
