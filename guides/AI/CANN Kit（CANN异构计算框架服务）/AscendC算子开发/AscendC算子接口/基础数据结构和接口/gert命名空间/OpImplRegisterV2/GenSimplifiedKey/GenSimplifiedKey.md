# GenSimplifiedKey

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-gensimplifiedkey`  |  **DocID**: `8254704aadc24abd9a6504e65fcba7db`  |  **NodeID**: `0002017757954498009142489cef0cb4`

---

# GenSimplifiedKey

  #### 函数功能

注册生成二进制简化匹配key的函数。

   #### 函数原型

```
OpImplRegisterV2 &GenSimplifiedKey(GenSimplifiedKeyKernelFunc gen_simplifiedkey_func);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | gen_simplifiedkey_func  | 输入  要注册的自定义GenSimplifiedKey函数，类型为GenSimplifiedKeyKernelFunc。

 GenSimplifiedKeyKernelFunc类型定义如下。

 using GenSimplifiedKeyKernelFunc = UINT32 (*)(TilingContext *, ge::char_t *);

  
  

    #### 返回值

返回算子的OpImplRegisterV2对象，该对象新增注册了生成二进制简化匹配key函数。

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:59*
