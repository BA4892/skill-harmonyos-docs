# Reset

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-reset`  |  **DocID**: `51c11b57b33a4d9ebe756d445ea572f6`  |  **NodeID**: `0002017757954498011430c5dc5548e4`

---

# Reset

  #### 功能说明

完成TbufPool资源的释放与eventId等变量的初始化操作。

   #### 函数原型

```
__aicore__ inline void Reset()
```
   #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

切换TBufPool资源池时调用该接口，调用后对应资源池及资源池分配的Buffer不能继续使用。

   #### 返回值

无

   #### 调用示例

参考[InitBufPool](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-initbufpool)。

---
*Updated: 2026-04-20 01:44:11*
