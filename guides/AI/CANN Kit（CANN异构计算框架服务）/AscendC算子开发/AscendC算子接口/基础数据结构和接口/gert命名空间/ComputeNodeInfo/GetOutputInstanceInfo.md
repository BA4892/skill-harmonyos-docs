# GetOutputInstanceInfo

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoutputinstanceinfo`  |  **DocID**: `57549d54d5f24940b6640ed78a081665`  |  **NodeID**: `00020177579544980091835cf25e966a`

---

# GetOutputInstanceInfo

  #### 函数功能

根据算子IR原型中的输出索引，获取对应的实例化对象。

   #### 函数原型

```
const AnchorInstanceInfo *GetOutputInstanceInfo(const size_t ir_index) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_index  | 输入  | 算子IR原型定义中的输出索引，从0开始计数。  
  

    #### 返回值

返回const类型的实例化对象的地址。

   #### 约束说明

无

   #### 调用示例

```
for (size_t i = 0; i < ir_outputs.size(); ++i) {
  auto ins_info = compute_node_info.GetOutputInstanceInfo(i);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:59*
