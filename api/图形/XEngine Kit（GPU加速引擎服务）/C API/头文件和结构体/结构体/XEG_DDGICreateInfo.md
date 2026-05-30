# XEG_DDGICreateInfo

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-ddgicreateinfo`  |  **DocID**: `7efa993b9afe47e298587a2635f5bfb1`

---

# XEG_DDGICreateInfo

  #### 概述

此结构体描述创建具有DDGI特性的[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象。

 **起始版本：** 6.0.0(20)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

 **所在头文件：** [xeg_vulkan_rtgi.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rtgi-8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   XEG_StructureType [sType](#stype) 识别此结构的[XEG_StructureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_structuretype)值，必须是XEG_STRUCTURE_TYPE_DDGI_CREATE_INFO。  const void * [pNext](#pnext) 指向扩展结构的指针。  XEG_RTGIQualityMode [qualityMode](#qualitymode) 输出图像的质量模式，必须为[XEG_RTGIQualityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgiqualitymode)中的枚举值。  uint32_t [numberVolume](#numbervolume) 需要同时渲染的最大体积数量，范围为[1, 9]。  VkExtent2D [scaledView](#scaledview) 渲染宽高缩小倍率，建议范围为[1, 4]，必须不小于1。  VkExtent2D [viewSize](#viewsize) 输出GI图像的渲染宽高。  bool [enableCloud](#enablecloud) 是否开启端云模式，true为开启，false为关闭。       #### 结构体成员变量说明

  #### [h2]enableCloud

bool XEG_DDGICreateInfo::enableCloud **描述**

 是否开启端云模式，true为开启，false为关闭。

   #### [h2]numberVolume

uint32_t XEG_DDGICreateInfo::numberVolume **描述**

 需要同时渲染的最大体积数量，范围为[1, 9]。

   #### [h2]pNext

const void* XEG_DDGICreateInfo::pNext **描述**

 指向扩展结构的指针。

   #### [h2]qualityMode

XEG_RTGIQualityMode XEG_DDGICreateInfo::qualityMode **描述**

 输出图像的质量模式，必须为[XEG_RTGIQualityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgiqualitymode)中的枚举值。

   #### [h2]scaledView

VkExtent2D XEG_DDGICreateInfo::scaledView **描述**

 渲染宽高缩小倍率，建议范围为[1, 4]，必须不小于1。

   #### [h2]sType

XEG_StructureType XEG_DDGICreateInfo::sType **描述**

 识别此结构的[XEG_StructureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_structuretype)值，必须是XEG_STRUCTURE_TYPE_DDGI_CREATE_INFO。

   #### [h2]viewSize

VkExtent2D XEG_DDGICreateInfo::viewSize **描述**

 输出GI图像的渲染宽高。

---
*Updated: 2026-04-22 06:40:37*
