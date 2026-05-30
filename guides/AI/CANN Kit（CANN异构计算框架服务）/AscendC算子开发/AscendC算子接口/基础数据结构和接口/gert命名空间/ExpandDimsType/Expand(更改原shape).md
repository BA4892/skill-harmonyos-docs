# Expand(更改原shape)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-expand-change-the-original-shape`  |  **DocID**: `cc291f73f95045118dec7ac847eb1b88`  |  **NodeID**: `00020177579544980087256d7e4e9c66`

---

# Expand(更改原shape)

  #### 函数功能

对shape做补维，并将补维后的结果直接更新到原shape对象。

   #### 函数原型

```
ge::graphStatus Expand(Shape &shape) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | shape  | 既是输入，又是输出  | 需要进行补维操作的shape对象。  
  

    #### 返回值

补维成功返回ge::GRAPH_SUCCESS。

 关于ge::graphStatus类型的定义，请参见[ge::graphStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gegraphstatus)。

   #### 约束说明

无

   #### 调用示例

```
Shape shape({3, 256, 256}); // 设置原始shape 3,256,256
ExpandDimsType type1("1000");
auto ret = type1.Expand(shape); // ret = ge::GRAPH_SUCCESS, shape = 1,3,256,256
```

---
*Updated: 2026-04-20 01:43:59*
