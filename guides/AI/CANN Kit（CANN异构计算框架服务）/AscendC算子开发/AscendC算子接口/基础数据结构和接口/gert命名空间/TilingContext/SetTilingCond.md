# SetTilingCond

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-settilingcond`  |  **DocID**: `c11c5442c4b2489bb38210fa639c0bee`  |  **NodeID**: `000201775795449800948df4861da61e`

---

# SetTilingCond

  #### 函数功能

设置tiling cond。

   #### 函数原型

```
ge::graphStatus SetTilingCond(int32_t tiling_cond);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | tiling_cond  | 输入  | 需要设置的tiling cond。  
  

    #### 返回值

设置成功时返回“ge::GRAPH_SUCCESS”。

 关于graphStatus的定义，请参见[ge::graphStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gegraphstatus)。

   #### 约束说明

当前支持的Kirin9020和KirinX90系列处理器是分离架构。

   #### 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto ret = context->SetTilingCond(10);
  // ...
}
```

---
*Updated: 2026-04-20 01:44:00*
