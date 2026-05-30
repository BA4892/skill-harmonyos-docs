# ImageEffect_DataValue

> **分区**: API参考  |  **Slug**: `capi-imageeffect-imageeffect-datavalue`  |  **DocID**: `c880424528914b5bba32066bad92380f`

---

# ImageEffect_DataValue

 ```
typedef union ImageEffect_DataValue {...} ImageEffect_DataValue
```
  #### 概述

数据值联合体。

 **起始版本：** 12

 **相关模块：** [ImageEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect)

 **所在头文件：** [image_effect_filter.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   int32_t int32Value 整型值，对应[EFFECT_DATA_TYPE_INT32](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_datatype)。  float floatValue 单精度浮点值，对应[EFFECT_DATA_TYPE_FLOAT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_datatype)。  double doubleValue 双精度浮点值，对应[EFFECT_DATA_TYPE_DOUBLE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_datatype)。  char charValue 字节值，对应[EFFECT_DATA_TYPE_CHAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_datatype)。  long longValue 长整型值，对应[EFFECT_DATA_TYPE_LONG](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_datatype)。  bool boolValue 布尔值，对应[EFFECT_DATA_TYPE_BOOL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_datatype)。  void *ptrValue 指针值，对应[EFFECT_DATA_TYPE_PTR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_datatype)。

---
*Updated: 2026-04-22 06:41:20*
