# GetRawTilingData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getrawtilingdata`  |  **DocID**: `21aaec2d2c38455facf17fbb3c7cc916`  |  **NodeID**: `00020177579544980098182481e21d28`

---

# GetRawTilingData

  #### 函数功能

获取无类型的tiling data指针。

   #### 函数原型

```
TilingData *GetRawTilingData();
```
   #### 参数说明

无

   #### 返回值

tiling data指针，失败时返回空指针。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto tiling_data = context->GetRawTilingData();
  // ...
}
```

---
*Updated: 2026-04-20 01:44:01*
