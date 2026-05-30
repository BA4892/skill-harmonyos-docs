# SetShapeRange

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setshaperange`  |  **DocID**: `2d8e67e97a6a4a82ad09d25fd639c505`  |  **NodeID**: `000201775795449801043d1dfa92cd1b`

---

# SetShapeRange

  #### 函数功能

设置shape的变化范围。

   #### 函数原型

```
graphStatus SetShapeRange(const std::vector<std::pair<int64_t,int64_t>> &range);
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | range  | 输入  shape代表的变化范围。vector中的每一个元素为一个pair，pair的第一个值为该维度上的dim最小值，第二个值为该维度上dim的最大值。举例如下。

 该tensor的shape为{1, 1, -1, 2}，第三个轴的最大值为100，则range可设置为{{1, 1}, {1, 1}, {1, 100}, {2, 2}}。

  
  

    #### 返回值

 
| 类型  | 描述  
  | graphStatus  | 函数执行结果。若成功，则该值为GRAPH_SUCCESS(即0)，其他值则为执行失败。  
  

    #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:03*
