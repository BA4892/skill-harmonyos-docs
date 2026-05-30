# AddChangedResourceKey

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-addchangedresourcekey`  |  **DocID**: `2c3d993287c44d20aefc7998b458c1e8`  |  **NodeID**: `000201775795449800946718ac400bcd`

---

# AddChangedResourceKey

  #### 函数功能

在写类型的资源算子（如stack push）推导过程中，若资源shape变化了，调用该接口通知框架。

 框架依据变化的资源key，触发对应读算子（如stack pop）的重新推导。

   #### 函数原型

```
graphStatus AddChangedResourceKey(const ge::AscendString &key)
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | key  | 输入  | 资源唯一标识。  
  

    #### 返回值

graphStatus：GRAPH_SUCCESS，代表成功；GRAPH_FAILED，代表失败。

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:00*
