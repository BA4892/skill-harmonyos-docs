# ScalarGetSFFValue

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-scalargetsffvalue`  |  **DocID**: `1c2e1158ae2a493798b88e585bcb623c`  |  **NodeID**: `000201775795449800778f0239a03ca5`

---

# ScalarGetSFFValue

  #### 功能说明

获取一个uint64_t类型数字的二进制中第一个0或1出现的位置，如果没找到则返回-1。

   #### 函数原型

```
template <int countValue>  
__aicore__ inline int64_t ScalarGetSFFValue(uint64_t valueIn)
```
   #### 参数说明

**表1** 参数说明

  
| 参数名  | 输入/输出  | 描述  
  | valueIn  | 输入  | 输入数据，数据类型是uint64_t。  
 | countValue  | 输入  | 获取到第一个0或1的位置。数据类型是int，值为0或1。  
  

    #### 返回值

int64_t类型的数，valueIn中第一个0或1出现的位置。

   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 约束说明

无。

   #### 调用示例

```
uint64_t valueIn = 28;
// 输出数据(oneCount): 2
int64_t oneCount = AscendC::ScalarGetSFFValue<1>(valueIn);
```

---
*Updated: 2026-04-20 01:43:56*
