# SetPlacement

> **分区**: Guides  |  **Slug**: `cannkit-tensor-setplacement`  |  **DocID**: `2eafe71201944aafbab2c69519f70ca9`

---

# SetPlacement

  #### 函数功能

设置Tensor的数据存放的位置。

   #### 函数原型

```
graphStatus SetPlacement(const ge::Placement &placement);
```
   #### 参数说明

 参数名 输入/输出 描述   placement 输入 需设置的数据地址的值。       #### 返回值

 类型 描述   graphStatus 设置成功返回GRAPH_SUCCESS，否则，返回GRAPH_FAILED。       #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-22 06:33:48*
