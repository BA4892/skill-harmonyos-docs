# SetPlacement

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setplacement`  |  **DocID**: `8b1a24b153f049a1aa09d138df0b964f`  |  **NodeID**: `0002017757954498008533cde3a81ab7`

---

# SetPlacement

  #### 函数功能

设置tensor的placement。

   #### 函数原型

```
void SetPlacement(const TensorPlacement placement)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | placement  | 输入  tensor的placement。

 关于TensorPlacement类型的定义，请参见[TensorPlacement](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensorplacement)。

  
  

    #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
auto addr = reinterpret_cast<void *>(0x10);
TensorData td(addr, nullptr);
auto td_place = td.SetPlacement(kOnHost);
```

---
*Updated: 2026-04-20 01:43:58*
