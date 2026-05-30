# SetNodeName

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setnodename`  |  **DocID**: `40cf3d3ee4a24cf9a75b8b2eb53e2279`  |  **NodeID**: `000201775795449801012ce2771114ba`

---

# SetNodeName

  #### 函数功能

设置该ComputeNodeInfo对应的算子的名称。

   #### 函数原型

```
void SetNodeName(const ge::char_t *node_name)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | node_name  | 输入  | 算子的名称。  
  

    #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
compute_node_info->SetNodeName("Conv2d");
```

---
*Updated: 2026-04-20 01:44:02*
