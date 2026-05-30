# SetTilingKey

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-settilingkey`  |  **DocID**: `0172d27c4650402ebf2ae9b1165cdd41`  |  **NodeID**: `000201775795449800871db598cb4a9e`

---

# SetTilingKey

  #### 函数功能

设置TilingKey。

 不同的kernel实现分支可以通过TilingKey来标识，host侧设置TilingKey后，可以选择对应的分支。例如，一个算子在不同的shape下，有不同的算法逻辑，kernel侧可以通过TilingKey来选择不同的算法逻辑，在host侧Tiling算法也有差异，host/kernel侧通过相同的TilingKey进行关联。

   #### 函数原型

```
ge::graphStatus SetTilingKey(const uint64_t tiling_key);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | tiling_key  | 输入  | 需要设置的tiling key。  
  

    #### 返回值

成功时返回“ge::GRAPH_SUCCESS”。

 关于graphStatus定义，请参见[ge::graphStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gegraphstatus)。

   #### 约束说明

tiling_key的取值范围在uint64_t数据类型范围内，但不可以取值为UINT64_MAX。

   #### 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto ret = context->SetTilingKey(20);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:59*
