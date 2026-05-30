# Expand（输出新shape）

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-expand-output-a-new-shape`  |  **DocID**: `eee03651c79d4e29a3efc45d970a2eb3`  |  **NodeID**: `000201775795449800863f496c8c47b1`

---

# Expand（输出新shape）

  #### 函数功能

对shape做补维，并将补维后的结果写入指定的输出shape对象。

   #### 函数原型

```
ge::graphStatus Expand(const Shape &shape, Shape &out_shape) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | shape  | 输入  | 输入shape，补维前shape。  
 | out_shape  | 输出  | 输出shape，补维后shape。  
  

    #### 返回值

补维成功返回ge::GRAPH_SUCCESS。

 失败则返回ge::GRAPH_FAILED。

 关于ge::graphStatus类型的定义，请参见[ge::graphStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gegraphstatus)。

   #### 约束说明

无

   #### 调用示例

```
Shape origin_shape({3, 256, 256}); // 设置原始shape 3x256x256
Shape out_shape;
ExpandDimsType type1("1000");
ExpandDimsType type2("10000");
ExpandDimsType type3("1001");
auto ret = type1.Expand(origin_shape, out_shape); // ret = ge::GRAPH_SUCCESS, out_shape = 1,3,256,256
ret = type2.Expand(origin_shape, out_shape); // ret = ge::GRAPH_FAILED
ret = type3.Expand(origin_shape, out_shape); // ret = ge::GRAPH_SUCCESS, out_shape = 1,3,256,1,256
```

---
*Updated: 2026-04-20 01:43:58*
