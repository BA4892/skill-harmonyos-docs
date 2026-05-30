# SetOutputHandleShapesAndTypes

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setoutputhandleshapesandtypes`  |  **DocID**: `6d73b6c0b6c145dcbce1a934f43545b7`  |  **NodeID**: `00020177579544980073149edea90000`

---

# SetOutputHandleShapesAndTypes

  #### 函数功能

在推理上下文中，设置算子输出句柄的[ShapeAndType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shapeandtype-construction-and-destructor)。

   #### 函数原型

```
void SetOutputHandleShapesAndTypes(const std::vector<std::vector<ShapeAndType>> &shapes_and_types)
void SetOutputHandleShapesAndTypes(std::vector<std::vector<ShapeAndType>> &&shapes_and_types)
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | shapes_and_types  | 输入  | 算子输出句柄的[ShapeAndType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shapeandtype-construction-and-destructor)。  
  

    #### 返回值

无

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:55*
