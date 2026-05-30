# GetWorkspaceNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getworkspacenum`  |  **DocID**: `a83876c39b9d4accb34404acf7847ab5`  |  **NodeID**: `0002017757954498009942c7b0809fb2`

---

# GetWorkspaceNum

  #### 函数功能

获取workspace个数。

   #### 函数原型

```
size_t GetWorkspaceNum() const;
```
   #### 参数说明

无

   #### 返回值

workspace的个数。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto ws_num = context->GetWorkspaceNum();
  // ...
}
```

---
*Updated: 2026-04-20 01:44:02*
