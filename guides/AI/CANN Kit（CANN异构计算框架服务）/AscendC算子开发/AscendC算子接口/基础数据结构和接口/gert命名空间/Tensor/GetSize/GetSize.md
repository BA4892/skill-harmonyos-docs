# GetSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-ge-tensor-getsize`  |  **DocID**: `a23e4767d7894dd8ab98997387ff3ebc`  |  **NodeID**: `0002017757954498008310f36c34359a`

---

# GetSize

  #### 函数功能

获取Tensor数据的内存大小。

   #### 函数原型

```
size_t GetSize() const
```
   #### 参数说明

无

   #### 返回值

内存大小，单位是字节。

   #### 约束说明

无

   #### 调用示例

```
StorageShape sh({1, 2, 3}, {1, 2, 3});
Tensor t = {sh, {}, {}, ge::DT_FLOAT, nullptr};
auto td_size = t.GetSize(); // 1*2*3*sizeof(float) = 24;
```

---
*Updated: 2026-04-20 01:43:58*
