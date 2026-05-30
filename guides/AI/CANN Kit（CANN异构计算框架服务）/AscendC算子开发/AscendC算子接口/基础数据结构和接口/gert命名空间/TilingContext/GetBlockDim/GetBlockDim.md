# GetBlockDim

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getblockdim`  |  **DocID**: `8d18cbfe0756496d80de9d42e8d00dce`  |  **NodeID**: `000201775795449800936992e8d51b35`

---

# GetBlockDim

  #### 函数功能

获取blockDim，即参与计算的Vector或者Cube核数。blockDim的详细概念和设置方式请参考[SetBlockDim](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setblockdim)。

   #### 函数原型

```
uint32_t GetBlockDim() const;
```
   #### 参数说明

无

   #### 返回值

返回blockDim。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto block_dim = context->GetBlockDim();
  // ...
}
```

---
*Updated: 2026-04-20 01:44:00*
