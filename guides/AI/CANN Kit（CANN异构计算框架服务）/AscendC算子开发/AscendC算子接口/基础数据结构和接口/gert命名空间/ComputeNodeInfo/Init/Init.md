# Init

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-computenodeinfo-init`  |  **DocID**: `d4ed9400ff234b058d78c8d2a4f20b45`  |  **NodeID**: `0002017757954498010213db697b7126`

---

# Init

  #### 函数功能

初始化ComputeNodeInfo类。

   #### 函数原型

```
void Init(const size_t ir_inputs_num, const size_t inputs_num, const size_t outputs_num, const ge::char_t *node_name, const ge::char_t *node_type);
void Init(const size_t ir_inputs_num, const size_t ir_outputs_num, const size_t inputs_num, const size_t outputs_num, const size_t attr_size, const ge::char_t *node_name, const ge::char_t *node_type);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_inputs_num  | 输入  | 算子原型输入的个数。  
 | inputs_num  | 输入  | 算子实际输入个数。  
 | outputs_num  | 输入  | 算子实际输出个数。  
 | node_name  | 输入  | 节点名称。  
 | node_type  | 输入  | 节点类型（算子原型名称）。  
 | ir_outputs_num  | 输入  | 算子原型输出的个数。  
 | attr_size  | 输入  | 属性个数。  
  

    #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
auto ir_input_num = node->GetOpDesc()->GetIrInputs().size();
auto ir_output_num = node->GetOpDesc()->GetIrOutputs().size();
auto inputs_num = node->GetInDataNodesAndAnchors().size();
auto outputs_num = node->GetOutDataNodesAndAnchors().size();
GE_ASSERT_SUCCESS(ComputeNodeInfo::Init(ir_input_num, inputs_num,outputs_num, node_name, node_type));
```

---
*Updated: 2026-04-20 01:44:02*
