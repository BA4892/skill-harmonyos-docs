# Tanh

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-math-tanh`  |  **DocID**: `a9953556bbd14d5bb8530d77082ab6c3`  |  **NodeID**: `00020177579544980063174ceb77e01a`

---

# Tanh

  #### 功能说明

按元素做逻辑回归Tanh，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数 ：

 

 

   #### 函数原型

```
template <typename T, bool isReuseSource = false>
__aicore__ inline void Tanh(const LocalTensor<T>& dstTensor, const LocalTensor<T>& srcTensor, const uint32_t calCount)
```
   #### 参数说明

**表1** 模板参数说明

  
| 参数名  | 描述  
  | T  | 操作数的数据类型。支持的数据类型为：half/float。  
 | isReuseSource  | 是否允许修改源操作数。该参数预留，传入默认值false即可。  
  

  **表2** 接口参数说明

  
| 参数名  | 输入/输出  | 描述  
  | dstTensor  | 输出  目的操作数。

 类型为[LocalTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-localtensor)，支持的TPosition为VECIN/VECCALC/VECOUT。

  
 | srcTensor  | 输入  源操作数。

 类型为[LocalTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-localtensor)，支持的TPosition为VECIN/VECCALC/VECOUT。

  
 | calCount  | 输入  | 实际计算数据元素个数。  
  

    #### 返回值

无

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 约束说明

操作数地址偏移对齐要求请参见[通用约束](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-general-constraints)。

  输入输出操作数参与计算的数据长度要求32B对齐。

  
   #### 调用示例

```
AscendC::TPipe pipe;
// calCount为实际计算数据元素个数
// 其它处理省略
AscendC::Tanh<T, false>(yLocal, xLocal, calCount);
```

---
*Updated: 2026-04-20 01:43:51*
