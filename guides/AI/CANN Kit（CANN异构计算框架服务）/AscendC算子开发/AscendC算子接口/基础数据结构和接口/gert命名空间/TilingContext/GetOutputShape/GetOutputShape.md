# GetOutputShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoutputshape`  |  **DocID**: `f8352ea95aef4d958427b02a96119397`  |  **NodeID**: `00020177579544980085132a95802797`

---

# GetOutputShape

  #### 函数功能

根据算子输出索引获取对应的输出shape指针。这里的输出索引是指算子实例化后实际的索引，不是原型定义中的索引。

   #### 函数原型

```
const StorageShape *GetOutputShape(size_t index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | index  | 输入  | 算子输出索引，从0开始计数。  
  

    #### 返回值

指定的输出shape指针，index非法时，返回空指针。

 关于StorageShape类型的定义，请参见[StorageShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-storageshape-introduction)。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus Tiling4ConcatD(TilingContext* context) {
  auto out_shape = context->GetOutputShape(0);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:58*
