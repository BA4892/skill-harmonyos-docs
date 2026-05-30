# GetPlatformInfo

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getplatforminfo`  |  **DocID**: `476e84d272a74e6693560b072cc8134e`  |  **NodeID**: `000201775795449800001fafa3bcd492`

---

# GetPlatformInfo

  #### 函数功能

获取fe::PlatFormInfos指针。

   #### 函数原型

```
fe::PlatFormInfos *GetPlatformInfo() const
```
   #### 参数说明

无

   #### 返回值

fe::PlatFormInfos指针。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto platform_info = context->GetPlatformInfo();
  // ...
}
```

---
*Updated: 2026-04-20 01:44:02*
