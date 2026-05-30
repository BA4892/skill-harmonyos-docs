# GetBaseAddr

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getbaseaddr`  |  **DocID**: `f50f8ded3ccc44c18be45d2adc284a2d`  |  **NodeID**: `0002017757954498011719be7c9675b8`

---

# GetBaseAddr

  #### 功能说明

根据传入的logicPos（逻辑抽象位置），获取该位置的基础地址，只在CPU调试场景下此接口生效，在CPU调试中通常用于将Tensor地址由CPU地址转换为NPU地址。

   #### 函数原型

```
inline uint8_t* GetBaseAddr(int8_t logicPos)
```
   #### 参数说明

 
| 参数名称  | 输入/输出  | 含义  
  | logicPos  | 输入  | 逻辑位置类型。该类型具体说明请参考[TPosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tposition)。  
  

    #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

NA

   #### 返回值

逻辑位置对应的基地址。

   #### 调用示例

```
auto absAddr = GetTPipePtr()->GetBaseAddr(static_cast<int8_t>(pos));
```

---
*Updated: 2026-04-20 01:44:14*
