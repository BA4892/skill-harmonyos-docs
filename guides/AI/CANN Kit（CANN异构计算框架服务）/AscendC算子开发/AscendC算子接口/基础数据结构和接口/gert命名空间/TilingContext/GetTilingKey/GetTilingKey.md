# GetTilingKey

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-gettilingkey`  |  **DocID**: `d1a2af8f3dfe4eecbd18b69945ace9e4`  |  **NodeID**: `00020177579544980090766235f0cbcf`

---

# GetTilingKey

  #### 函数功能

获取tiling key。

   #### 函数原型

```
uint64_t GetTilingKey() const;
```
   #### 参数说明

无

   #### 返回值

返回tiling key。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto tiling_key = context->GetTilingKey();
  // ...
}
```

---
*Updated: 2026-04-20 01:43:59*
