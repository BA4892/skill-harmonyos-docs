# GetTilingData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-gettilingdata`  |  **DocID**: `f1acf911820f42048d08b54a613c425a`  |  **NodeID**: `0002017757954498009641cdfaef5bf0`

---

# GetTilingData

  #### 函数功能

获取有类型的tiling data指针。

   #### 函数原型

```
template<typename T>  T *GetTilingData();
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | T  | 输出  | tiling data类型，sizeof(T)不可以大于编译结果中指定的最大tiling data长度。  
  

    #### 返回值

tiling data指针，失败时返回空指针。

   #### 约束说明

sizeof(T)不可以大于编译结果中指定的最大tiling data长度。

   #### 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto tiling_data = context->GetTilingData<int64_t>();
  // ...
}
```

---
*Updated: 2026-04-20 01:44:01*
