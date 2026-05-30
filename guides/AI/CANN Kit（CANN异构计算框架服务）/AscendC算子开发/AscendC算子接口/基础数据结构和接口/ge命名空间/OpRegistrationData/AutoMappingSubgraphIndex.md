# AutoMappingSubgraphIndex

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-automappingsubgraphindex`  |  **DocID**: `26bf015d17364dc4af56745288cb92a1`  |  **NodeID**: `000201775795449801058ade4c968265`

---

# AutoMappingSubgraphIndex

  #### 函数功能

设置子图的输入输出和主图对应父节点输入输出的对应关系。

   #### 函数原型

```
Status AutoMappingSubgraphIndex(const ge::Graph &graph,
const std::function<int32_t(int32_t data_index)> &input,
const std::function<int32_t(int32_t netoutput_index)> &output)
Status AutoMappingSubgraphIndex(const ge::Graph &graph,
const std::function<Status(int32_t data_index, int32_t &parent_input_index)> &input,
const std::function<Status(int32_t netoutput_index, int32_t &parent_output_index)> &output)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | graph  | 输入  | 子图对象  
 | input  | 输入  | 输入对应关系函数  
 | output  | 输入  | 输出对应关系函数  
  

    #### 约束说明

无

---
*Updated: 2026-04-20 01:44:04*
