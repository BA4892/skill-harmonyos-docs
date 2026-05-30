# MutableOutputTdInfo

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-mutableoutputtdinfo`  |  **DocID**: `674c75b573c543398a7da48a8b52f7c7`  |  **NodeID**: `000201775795449800992d46e1bb1b13`

---

# MutableOutputTdInfo

  #### 函数功能

获取算子的输出Tensor描述，注意，编译时无法确定的shape信息不在Tensor描述中（由于编译时无法确定shape，因此该Tensor描述里不包含shape信息）。

   #### 函数原型

```
CompileTimeTensorDesc *MutableOutputTdInfo(const size_t index)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | index  | 输入  | 算子输出对应的索引，从0开始计数。  
  

    #### 返回值

Tensor描述，返回对象为非const。

   #### 约束说明

无

   #### 调用示例

```
for (size_t i = 0; i < node->GetAllOutDataAnchorsSize(); ++i) {
    auto td = compute_node_info.MutableOutputTdInfo(i);
    // ...
}
```

---
*Updated: 2026-04-20 01:44:02*
