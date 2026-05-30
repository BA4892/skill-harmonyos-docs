# CountBitsCntSameAsSignBit

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-countbitscntsameassignbit`  |  **DocID**: `b61ded903e884d8f83daa3b0d75a3e5b`  |  **NodeID**: `0002017757954498007382ac8ef3577f`

---

# CountBitsCntSameAsSignBit

  #### 功能说明

计算一个uint64_t类型数字的二进制中，从最高数值位开始与符号位相同的连续比特位的个数。

 当输入是-1（比特位全1）或者0（比特位全0）时，返回-1。

   #### 函数原型

```
__aicore__ inline int64_t CountBitsCntSameAsSignBit(int64_t valueIn)
```
   #### 参数说明

**表1** 参数说明

  
| 参数名  | 输入/输出  | 描述  
  | valueIn  | 输入  | 输入数据，数据类型int64_t。  
  

    #### 返回值

返回从最高数值位开始和符号位相同的连续比特位的个数。

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 约束说明

无

   #### 调用示例

```
int64_t valueIn = 0x0f00000000000000;
// 输出数据(ans): 3
int64_t ans = AscendC::CountBitsCntSameAsSignBit(valueIn);
```

---
*Updated: 2026-04-20 01:43:55*
