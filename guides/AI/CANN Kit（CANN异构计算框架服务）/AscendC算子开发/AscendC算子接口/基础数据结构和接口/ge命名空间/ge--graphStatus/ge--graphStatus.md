# ge::graphStatus

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-gegraphstatus`  |  **DocID**: `de921812be8c4e8d8e9ab94bcdd5301e`  |  **NodeID**: `00020177579544980057467e39c69576`

---

# ge::graphStatus

 graphStatus类型即uint32_t类型，其不同的状态说明如下。

  
| 状态  | 值  | 说明  
  | ge::GRAPH_SUCCESS  | 0  | 对应函数执行成功。  
 | ge::GRAPH_FAILED  | 0xFFFFFFFF  | 对应函数执行失败。  
 | ge::GRAPH_PARAM_INVALID  | 50331649  | 对应函数执行失败，执行时存在参数无法通过校验的情况。  
 | ge::GRAPH_NOT_CHANGED  | 1343242304  | 不符合常量折叠的条件时的错误码。  
 | ge::GRAPH_NODE_WITHOUT_CONST_INPUT  | 50331648  | 检测到网络中的某个算子的输入没有const数据的场景。

---
*Updated: 2026-04-20 01:43:50*
