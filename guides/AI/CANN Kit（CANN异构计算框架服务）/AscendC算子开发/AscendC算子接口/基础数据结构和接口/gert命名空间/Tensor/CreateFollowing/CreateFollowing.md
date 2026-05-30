# CreateFollowing

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-createfollowing`  |  **DocID**: `cb981e03b50943fdab5aa38263c49871`  |  **NodeID**: `0002017757954498009271a6dce5f544`

---

# CreateFollowing

  #### 函数功能

创建一个指定数据类型以及大小的Tensor，其数据在Tensor对象后连续排布。

   #### 函数原型

传入元素个数和数据类型，创建Tensor

  static std::unique_ptr<uint8_t[]> CreateFollowing(const int64_t shape_size, const ge::DataType dt, size_t &total_size)  传入数据类型和Tensor长度，创建Tensor

  ```
static std::unique_ptr<uint8_t[]> CreateFollowing(const ge::DataType dt, const size_t tensor_size, size_t &total_size)
```
  
   #### 参数说明

**表1** 参数说明（传入元素个数和数据类型，创建Tensor）

  
| 参数  | 输入/输出  | 说明  
  | shape_size  | 输入  | 元素个数。  
 | dt  | 输入  | 数据类型，[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)类型。  
 | total_size  | 输出  | 创建出的Tensor在内存中的长度。包含Tensor对象的长度和Tensor数据的长度。  
  

  **表2** 参数说明（传入数据类型和Tensor长度，创建Tensor）

  
| 参数  | 输入/输出  | 说明  
  | dt  | 输入  | 数据类型，[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)类型。  
 | tensor_size  | 输入  | Tensor数据的长度。单位为字节。  
 | total_size  | 输出  | 创建出的Tensor在内存中的长度。和tensor_size参数不同，total_size包含Tensor对象的长度和Tensor数据的长度。单位为字节。  
  

    #### 返回值

创建的Tensor指针。

   #### 约束说明

无

   #### 调用示例

```
size_t total_size;
auto tensor_holder = Tensor::CreateFollowing(shape_size, tensor_desc.GetDataType(), total_size);
```

---
*Updated: 2026-04-20 01:44:00*
