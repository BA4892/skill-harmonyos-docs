# Mins

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-scalar-binocular-mins`  |  **DocID**: `13e69298579b4b21a85ac80b2078d0cc`  |  **NodeID**: `00020177579544980113228546bb9309`

---

# Mins

  #### 功能说明

源操作数矢量内每个元素与标量相比，如果比标量大，则取标量值，比标量的值小，则取源操作数。

 

   #### 函数原型

tensor前n个数据计算：

 ```
template <typename T, bool isSetMask = true> 
__aicore__ inline void Mins(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const T& scalarValue, const int32_t& calCount)
```
   #### 参数说明

**表1** 模板参数说明

  
| 参数名  | 描述  
  | T  | 操作数数据类型。  
 | U  | scalarValue数据类型。  
 | isSetMask  是否在接口内部设置mask模式和mask值。

 - true，表示在接口内部设置。

 - false，表示在接口外部设置。

  
  

  **表2** 参数说明

  
| **参数名称**  | **类型**  | **说明**  
  | dstLocal  | 输出  目的操作数。

 类型为[LocalTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-localtensor)，支持的TPosition为VECIN/VECCALC/VECOUT。

 LocalTensor的起始地址需要32字节对齐。

 Kirin9020系列处理器，支持的数据类型为：

 前n个tensor：int16_t、int32_t、half、float32_t

 KirinX90系列处理器，支持的数据类型为：

 前n个tensor：int16_t、int32_t、half、float32_t

  
 | srcLocal  | 输入  源操作数。

 类型为[LocalTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-localtensor)，支持的TPosition为VECIN/VECCALC/VECOUT。

 LocalTensor的起始地址需要32字节对齐。

 数据类型需要与目的操作数保持一致。

 Kirin9020系列处理器，支持的数据类型为：

 前n个tensor：int16_t、int32_t、half、float32_t

 KirinX90系列处理器，支持的数据类型为：

 前n个tensor：int16_t、int32_t、half、float32_t

  
 | scalarValue  | 输入  源操作数，数据类型需要与目的操作数Tensor中元素的数据类型保持一致

 Kirin9020系列处理器，支持的数据类型为：

 前n个tensor：int16_t、int32_t、half、float32_t

 KirinX90系列处理器，支持的数据类型为：

 前n个tensor：int16_t、int32_t、half、float32_t

  
 | calCount  | 输入  | 输入数据元素个数。  
  

    #### 返回值

无

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

操作数地址偏移对齐要求请参见[通用约束](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-general-constraints)。

   #### 调用示例

本样例中只展示Compute流程中的部分代码。如果开发者需要运行样例代码，请将该代码段拷贝并替换标量双目指令样例模板[更多样例](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocularinstructions)中的Compute函数即可。

 tensor前n个数据计算样例：

 ```
int16_t scalar = 2;
AscendC::Mins(dstLocal, srcLocal, scalar, 512);
```
 结果示例如下。

 ```
输入数据(src0Local): [1 2 3 ... 512]
输入数据 scalar = 2
输出数据(dstLocal): [1 2 2 ... 2]
```

---
*Updated: 2026-04-20 01:44:11*
