# SetResourceContext

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setresourcecontext`  |  **DocID**: `b8ed00ea0a9a459a969c63de33a4f964`  |  **NodeID**: `000201775795449800928b3a6de62e20`

---

# SetResourceContext

  #### 函数功能

为标识为key的资源，设置资源上下文对象，并交由资源上下文管理器管理。

 此接口一般由写类型的资源类算子调用，如stack push等。

   #### 函数原型

```
graphStatus SetResourceContext(const ge::AscendString &key, ResourceContext *resource_context)
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | key  | 输入  | 资源唯一标识。  
 | resource_context  | 输入  | 资源上下文对象指针，可参见[GetResourceContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getresourcecontext)接口的[返回值](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getresourcecontext#返回值)。  
  

    #### 返回值

graphStatus：GRAPH_SUCCESS，代表成功；GRAPH_FAILED，代表失败。

   #### 约束说明

若使用[Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-create)接口创建InferenceContext时未传入resource context管理器指针，则该接口返回失败。

---
*Updated: 2026-04-20 01:44:00*
