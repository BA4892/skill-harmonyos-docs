# ImageEffect_FilterDelegate

> **分区**: API参考  |  **Slug**: `capi-imageeffect-imageeffect-filterdelegate`  |  **DocID**: `9f50b26800ec4cbd89ac98304b1fdd14`

---

# ImageEffect_FilterDelegate

 ```
typedef struct ImageEffect_FilterDelegate {...} ImageEffect_FilterDelegate
```
  #### 概述

自定义滤镜回调函数结构体。

 **起始版本：** 12

 **相关模块：** [ImageEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect)

 **所在头文件：** [image_effect_filter.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [OH_EffectFilterDelegate_SetValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#oh_effectfilterdelegate_setvalue) setValue 参数设置函数指针。  [OH_EffectFilterDelegate_Render](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#oh_effectfilterdelegate_render) render 滤镜渲染函数指针。  [OH_EffectFilterDelegate_Save](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#oh_effectfilterdelegate_save) save 序列化效果器函数指针。  [OH_EffectFilterDelegate_Restore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#oh_effectfilterdelegate_restore) restore 反序列化效果器函数指针。

---
*Updated: 2026-04-22 06:41:21*
