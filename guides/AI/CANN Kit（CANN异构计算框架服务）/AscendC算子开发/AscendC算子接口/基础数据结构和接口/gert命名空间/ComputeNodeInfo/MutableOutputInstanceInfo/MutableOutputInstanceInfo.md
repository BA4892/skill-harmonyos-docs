# MutableOutputInstanceInfo

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-mutableoutputinstanceinfo`  |  **DocID**: `b4681a6d6b2649ddbb2cfae8e450b54f`  |  **NodeID**: `0002017757954498009755912d280420`

---

# MutableOutputInstanceInfo

  #### 函数功能

根据算子IR原型中的输出索引，获取对应的实例化对象。

   #### 函数原型

```
AnchorInstanceInfo *MutableOutputInstanceInfo(const size_t ir_index)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_index  | 输出  | 算子IR原型定义中的输出索引，从0开始计数。  
  

    #### 返回值

返回的实例化对象的地址。返回对象为非const。

   #### 约束说明

无

   #### 调用示例

```
for (size_t i = 0; i < ir_outputs.size(); ++i) {
  auto ins_info = compute_node_info.MutableOutputInstanceInfo(i);
  // ...
}
```

---
*Updated: 2026-04-20 01:44:01*
