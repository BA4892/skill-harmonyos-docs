# GetInstanceStart

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getinstancestart`  |  **DocID**: `d1b2d575e46145f0bd12d958acc4b280`  |  **NodeID**: `00020177579544980076601a691aa879`

---

# GetInstanceStart

  #### 函数功能

获取算子某个IR输入在实际输入中的起始序号（index）。

   #### 函数原型

```
uint32_t GetInstanceStart() const
```
   #### 参数说明

无

   #### 返回值

算子某个IR输入在实际输入中的起始序号（index）。

   #### 约束说明

无

   #### 调用示例

```
AnchorInstanceInfo anchor_0(0, 10); // IR定义的第1个输入是动态输入，且有10个实际输入
AnchorInstanceInfo anchor_1(10, 1); // IR定义的第2个输入是必选输入，且有1个实际输入，排在实际输入的第10个
auto input_num_1 = anchor_1.GetInstanceStart(); // input_num_1 = 10
```

---
*Updated: 2026-04-20 01:43:55*
