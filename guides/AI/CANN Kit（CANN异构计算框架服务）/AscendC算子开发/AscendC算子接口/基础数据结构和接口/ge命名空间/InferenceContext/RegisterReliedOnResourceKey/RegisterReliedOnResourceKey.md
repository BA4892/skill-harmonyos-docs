# RegisterReliedOnResourceKey

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-registerreliedonresourcekey`  |  **DocID**: `441e5978e371483f8d1192469a5fd77d`  |  **NodeID**: `000201775795449800929bcd605f4101`

---

# RegisterReliedOnResourceKey

  #### 函数功能

注册依赖的资源。

 一般由读类型的算子调用，如stack pop。因读类型算子的shape依赖资源算子，调用该接口注册依赖的资源标识。

 若资源算子shape变化可触发读类型算子的重新推导。

   #### 函数原型

```
graphStatus RegisterReliedOnResourceKey(const ge::AscendString &key)
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | key  | 输入  | 资源的唯一标识。  
  

    #### 返回值

graphStatus：GRAPH_SUCCESS，代表成功；GRAPH_FAILED，代表失败。

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:00*
