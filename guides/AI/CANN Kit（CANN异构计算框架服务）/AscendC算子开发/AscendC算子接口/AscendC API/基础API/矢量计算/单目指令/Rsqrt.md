# Rsqrt

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-rsqrt`  |  **DocID**: `86fe146a149d47469230d80477b45258`  |  **NodeID**: `0002017757954498011492b9c39848c5`

---

# Rsqrt

  #### 函数功能

按元素做开方后取倒数，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数：

 

   #### 函数原型

tensor前n个数据计算：

 ```
template <typename T>
__aicore__ inline void Rsqrt(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const int32_t& calCount)
```
   #### 参数说明

**表1** 模板参数说明

  
| 参数名  | 描述  
  | T  | 操作数数据类型。  
  

  **表2** 参数说明

  
| 参数名  | 输入/输出  | 描述  
  | dstLocal  | 输出  目的操作数。

 类型为[LocalTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-localtensor)，支持的TPosition为VECIN/VECCALC/VECOUT。

 LocalTensor的起始地址需要32字节对齐。

 Kirin9020系列处理器，支持的数据类型为：half/float

 KirinX90系列处理器，支持的数据类型为：half/float

  
 | srcLocal  | 输入  源操作数。

 类型为[LocalTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-localtensor)，支持的TPosition为VECIN/VECCALC/VECOUT。

 LocalTensor的起始地址需要32字节对齐。

 源操作数的数据类型需要与目的操作数保持一致。

 Kirin9020系列处理器，支持的数据类型为：half/float

 KirinX90系列处理器，支持的数据类型为：half/float

  
 | calCount  | 输入  | 输入数据元素个数。  
  

    #### 返回值

无

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 约束说明

操作数地址偏移对齐要求请参见[通用约束](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-general-constraints)。

  如果srcLocal中的数值为非正数，可能会产生未知结果。

  使用Rsqrt时，half的算子结果对比误差不满足双千分之一的要求，float的算子结果对比误差不满足双万分之一的要求，如果需要高精度，建议使用Div和Sqrt替代实现。

  
   #### 调用示例

本样例中只展示Compute流程中的部分代码。本样例的srcLocal和dstLocal均为half类型，占16位bit。

 如果开发者需要运行样例代码，请将该代码段拷贝并替换[样例模板](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-more#样例模板)中Compute函数的部分代码即可。

 tensor前n个数据计算样例：

 AscendC::Rsqrt(dstLocal, srcLocal, 512); 结果示例如下。

 ```
输入数据(srcLocal): [0.8335 2.2 2.672 ... 2.312 5.36]
输出数据(dstLocal):
[1.094 0.676 0.6113 ... 0.6562 0.4316]
```

---
*Updated: 2026-04-20 01:44:12*
