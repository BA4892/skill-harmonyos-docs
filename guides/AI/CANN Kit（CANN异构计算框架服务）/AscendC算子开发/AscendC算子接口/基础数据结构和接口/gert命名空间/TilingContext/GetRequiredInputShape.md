# GetRequiredInputShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getrequiredinputshape`  |  **DocID**: `c36d437e8ea948f2a14b22d832c25e0d`  |  **NodeID**: `00020177579544980081937fc7d339ea`

---

# GetRequiredInputShape

  #### 函数功能

根据算子原型定义中的输入索引获取对应的必选输入shape指针。

   #### 函数原型

```
const StorageShape *GetRequiredInputShape(const size_t ir_index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_index  | 输入  | 必选输入在算子IR原型定义中的索引，从0开始计数。  
  

    #### 返回值

指定的输入shape指针，shape中包含了原始shape与运行时shape。关于StorageShape类型的定义，请参见[StorageShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-storageshape-introduction)。

 当输入ir_index非法时，返回空指针。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus InferShape4ConcatD(TilingContext* context) {
  auto in_shape = context->GetRequiredInputShape(0);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:58*
