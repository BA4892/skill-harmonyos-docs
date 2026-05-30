# GetInputShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getinputshape`  |  **DocID**: `aa16d6f2174d40a4b9a109449902f411`  |  **NodeID**: `0002017757954498006175367073345c`

---

# GetInputShape

  #### 函数功能

根据算子输入索引获取对应的输入shape指针。这里的输入索引是指算子实例化后实际的索引，不是原型定义中的索引。

   #### 函数原型

```
const StorageShape *GetInputShape(const size_t index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | index  | 输入  | 算子输入索引，从0开始计数。  
  

    #### 返回值

指定的输入shape指针，输入shape中包含了原始shape与运行时shape信息。关于StorageShape类型的定义，请参见[StorageShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-storageshape-introduction)。

 当输入index非法时返回空指针。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus TilingForMul(TilingContext *context) {
  auto input_shape_0 = *context->GetInputShape(0);
  auto input_shape_1 = *context->GetInputShape(1);
  auto output_shape = context->GetOutputShape(0);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:52*
