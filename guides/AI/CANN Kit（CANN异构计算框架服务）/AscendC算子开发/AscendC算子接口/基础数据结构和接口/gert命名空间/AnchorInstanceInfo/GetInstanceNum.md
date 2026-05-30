# GetInstanceNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getinstancenum`  |  **DocID**: `98450e4da61543b5a6da61d7862a1753`  |  **NodeID**: `0002017757954498007080495c4619e4`

---

# GetInstanceNum

  #### 函数功能

获取IR定义某个输入对应的实际输入个数。

   #### 函数原型

```
uint32_t GetInstanceNum() const
```
   #### 参数说明

无

   #### 返回值

IR定义某个输入对应的实际输入个数。

   #### 约束说明

无

   #### 调用示例

```
// IR定义的第一个输入是动态输入，且有10个实际输入
AnchorInstanceInfo anchor_0(0, 10);
auto input_num_0 = anchor_0.GetInstanceNum(); // input_num_0 = 10
```

---
*Updated: 2026-04-20 01:43:54*
