# InferOutDataTypeSameWithFirstInput

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-inferoutdatatypesamewithfirstinput`  |  **DocID**: `a65d9fdabce74f728f0660e4ff04d17f`  |  **NodeID**: `00020177579544980091181f11252fa9`

---

# InferOutDataTypeSameWithFirstInput

  #### 函数功能

注册一种datatype推导规则，该规则将算子第一个输入的datatype作为所有输出的datatype。

   #### 函数原型

```
OpImplRegisterV2 &InferOutDataTypeSameWithFirstInput();
```
   #### 参数说明

无

   #### 返回值

返回算子的OpImplRegisterV2对象，该对象新增注册了算子datatype推导规则。

   #### 约束说明

注册此规则，可以不用再注册自定义推导规则。若同时注册了InferDataType和InferOutDataTypeByFirstInput，将使能最后注册的规则。

  若算子无输入或第一个输入datatype为未定义（DT_UNDEFINED），推导将报错。

---
*Updated: 2026-04-20 01:43:59*
