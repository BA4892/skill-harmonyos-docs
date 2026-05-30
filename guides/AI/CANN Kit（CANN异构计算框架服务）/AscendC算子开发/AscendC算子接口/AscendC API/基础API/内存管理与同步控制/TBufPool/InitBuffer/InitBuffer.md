# InitBuffer

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-initbuffer`  |  **DocID**: `918a800c40a44bc79ff0dca0a4b49645`  |  **NodeID**: `0002017757954498011302b5c1d6ead5`

---

# InitBuffer

  #### 功能说明

调用TBufPool::InitBuffer接口为TQue/TBuf进行内存分配。

   #### 函数原型

```
template <class T> __aicore__ inline bool InitBuffer(T& que, uint8_t num, uint32_t len);
template <TPosition pos> __aicore__ inline bool InitBuffer(TBuf<pos>& buf, uint32_t len);
```
   #### 参数说明

**表1** InitBuffer(T& que, uint8_t num, uint32_t len) 原型定义参数说明

  
| 参数名称  | 输入/输出  | 含义  
  | que  | 输入  | 需要分配内存的TQue对象。  
 | num  | 输入  | 分配内存块的个数。  
 | len  | 输入  | 每个内存块的大小，单位为Byte，非32Bytes对齐会自动向上补齐至32Bytes对齐。  
  

  **表2** InitBuffer(TBuf<pos>& buf, uint32_t len)原型定义参数说明

  
| 参数名称  | 输入/输出  | 含义  
  | buf  | 输入  | 需要分配内存的TBuf对象。  
 | len  | 输入  | 为TBuf分配的内存大小，单位为Byte，非32Bytes对齐会自动向上补齐至32Bytes对齐。  
  

    #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

声明TBufPool时，可以通过bufIDSize指定可分配Buffer的最大数量，默认上限为4，最大为16。TQue或TBuf的物理内存需要和TBufPool一致。

   #### 返回值

无

   #### 调用示例

参考[InitBufPool](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-initbufpool)。

---
*Updated: 2026-04-20 01:44:11*
