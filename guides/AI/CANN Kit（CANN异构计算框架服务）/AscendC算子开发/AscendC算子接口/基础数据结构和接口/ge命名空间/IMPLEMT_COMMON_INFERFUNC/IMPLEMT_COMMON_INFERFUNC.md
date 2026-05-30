# IMPLEMT_COMMON_INFERFUNC

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-implemt-common-inferfunc`  |  **DocID**: `d4c35a8af8094adb9c18ccd409eb1d48`  |  **NodeID**: `0002017757954498005813ad9de69d88`

---

# IMPLEMT_COMMON_INFERFUNC

  #### 函数功能

封装算子的Common_InferShape函数。

 与[IMPLEMT_INFERFUNC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-implemt-inferfunc)的区别是，此函数自动生成的一个类型为Operator类的对象op，可直接调用[Operator](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-construction-and-destructor)接口进行InferShape的实现。若InferShape方法具有通用性，可被多个算子的原型实现调用，可选择此接口实现。

   #### 函数原型

```
IMPLEMT_COMMON_INFERFUNC(func_name)
```
   #### 约束说明

无

   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | func_name  | 输入  | InferShape函数名，开发者自定义。  
  

    #### 返回值

无

---
*Updated: 2026-04-20 01:43:50*
