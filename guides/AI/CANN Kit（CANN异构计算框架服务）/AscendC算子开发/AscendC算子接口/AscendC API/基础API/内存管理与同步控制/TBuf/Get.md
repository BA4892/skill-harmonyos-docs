# Get

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tbuf-get`  |  **DocID**: `d48bdd3189ee416e859a7b5c47d29b35`  |  **NodeID**: `000201775795449801119ea6e83b7ca3`

---

# Get

  #### 功能说明

从TBuf上获取指定长度的Tensor，或者获取全部长度的Tensor。

   #### 函数原型

获取全部长度的Tensor

  LocalTensor<T> Get<T>()  获取指定长度的Tensor

  ```
LocalTensor<T> Get<T>(uint32_t len)
```
  
   #### 参数说明

**表1** 参数说明

  
| 参数名称  | 输入/输出  | 含义  
  | len  | 输入  | 需要获取的Tensor元素个数。  
  

    #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

len的数值是Tensor中元素的个数，len*sizeof(T)不能超过TBuf初始化时的长度。

   #### 返回值

无

   #### 调用示例

```
// 为TBuf初始化分配内存，分配内存长度为1024Bytes
AscendC::TPipe pipe;
AscendC::TBuf<AscendC::TPosition::VECCALC> calcBuf; // 模板参数为TPosition中的VECCALC类型
uint32_t byteLen = 1024;
pipe.InitBuffer(calcBuf, byteLen);
// 从calcBuf获取Tensor,Tensor为pipe分配的所有内存大小，为1024Bytes
AscendC::LocalTensor<int32_t> tempTensor1 = calcBuf.Get<int32_t>();
// 从calcBuf获取Tensor,Tensor为128个int32_t类型元素的内存大小，为512Bytes
AscendC::LocalTensor<int32_t> tempTensor1 = calcBuf.Get<int32_t>(128);
/* 在相对复杂计算场景，可以使用TBuf作为临时变量，存储中间计算结果，避免复杂的出队，入队过程。
 * 下面代码来源于某种距离计算的API中,C矩阵需要除以A矩阵和B矩阵的点乘结果。在该算法中所有矩阵均提前转换成向量。
 */
auto normADotB = calcBuf.Get<int32_t>(); // 存储A矩阵和B矩阵点乘后的结果
auto normB = qidVecIn.AllocTensor<DTypeOut>();
// ...
normB= qidVecIn.DeQue<DTypeOut>(); // 获取B矩阵
for(int i = 0; i < tiling.baseM; i++) {
   AscendC::Muls(normADotB[i * tiling.baseN], normB, normA.GetValue(i), tiling.baseN); // A矩阵和B矩阵均转换为向量后做数乘，normADotB作为临时变量存储结果。
}
qidVecIn.FreeTensor(normB);
// ...
for(int i = 0; i < tiling.baseM; i++) {
   AscendC::Mul(baseCVecFloat[i * tiling.baseN], baseCVecFloat[i * tiling.baseN], normADotB[i * tiling.baseN], tiling.baseN); // 通过计算获取C矩阵，并除以normADotB
}
```

---
*Updated: 2026-04-20 01:44:10*
