# GetTilingCond

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-gettilingcond`  |  **DocID**: `2cdc7303c5f14a44b6010cf00591ef15`  |  **NodeID**: `000201775795449800962789bd66e4cb`

---

# GetTilingCond

  #### 函数功能

获取tiling cond。

   #### 函数原型

```
int32_t GetTilingCond() const;
```
   #### 参数说明

无

   #### 返回值

tiling cond:

 若返回值大于等于0，代表此tiling cond为有效的tiling cond。

 若返回值为-1，代表此tiling cond为无效的tiling cond。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto tiling_cond = context->GetTilingCond();
  // ...
}
```

---
*Updated: 2026-04-20 01:44:01*
