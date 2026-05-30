# GetWorkspaceSizes

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getworkspacesizes`  |  **DocID**: `d3b768b6c7f7455ea42a51544cc2f529`  |  **NodeID**: `0002017757954498009884d2327a1049`

---

# GetWorkspaceSizes

  #### 函数功能

获取workspace sizes指针。

   #### 函数原型

```
size_t *GetWorkspaceSizes(const size_t workspace_count);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | workspace_count  | 输入  | workspace的个数，传入的workspace个数不可以超过编译时指定的最大workspace个数。  
  

    #### 返回值

workspace sizes指针。

   #### 约束说明

传入的workspace个数不可以超过编译时指定的最大workspace个数。

 当前Kirin9020支持的最大的workspace是8个。

 当前KirinX90支持的最大的workspace是8个。

   #### 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto ws = context->GetWorkspaceSizes(5);
  // ...
}
```

---
*Updated: 2026-04-20 01:44:01*
