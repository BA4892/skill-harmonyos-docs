# GetAddr

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getaddr`  |  **DocID**: `13458e9875084f63adb154551c7f7604`  |  **NodeID**: `0002017757954498006965deaac5ef7f`

---

# GetAddr

  #### 函数功能

获取tensor数据地址。若存在manager函数，则由manager函数给出地址。

   #### 函数原型

```
TensorAddress GetAddr() const
```
   #### 参数说明

无

   #### 返回值

tensor地址。

   #### 约束说明

无

   #### 调用示例

```
auto addr0 = reinterpret_cast<void *>(0x10);
TensorData td(addr, nullptr);
auto addr1 = td.GetAddr(); // 0x10
```

---
*Updated: 2026-04-20 01:43:55*
