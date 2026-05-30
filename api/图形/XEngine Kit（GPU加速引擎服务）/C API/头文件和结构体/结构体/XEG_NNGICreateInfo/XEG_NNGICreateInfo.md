# XEG_NNGICreateInfo

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-nngicreateinfo`  |  **DocID**: `e0914eb8ac9f441b8582f1880df44965`

---

# XEG_NNGICreateInfo

  #### 概述

此结构体描述创建具有NNGI特性的[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象。

 **起始版本：** 6.0.0(20)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

 **所在头文件：** [xeg_vulkan_rtgi.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rtgi-8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   XEG_StructureType [sType](#stype) 识别此结构的[XEG_StructureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_structuretype)值，必须是XEG_STRUCTURE_TYPE_NNGI_CREATE_INFO。  const void * [pNext](#pnext) 指向扩展结构的指针。  XEG_RTGIQualityMode [qualityMode](#qualitymode) 输出图像的质量模式，必须为[XEG_RTGIQualityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgiqualitymode)中的枚举值。  VkExtent2D [inferenceInputSize](#inferenceinputsize) 推理输入图像的分辨率，必须与[XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription)中的推理输入图像的分辨率保持一致。  VkExtent2D [inferenceOutputSize](#inferenceoutputsize) 推理输出图像的分辨率，必须与[XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription)中的推理输出图像的分辨率保持一致，推荐使用（640，368）。  VkExtent2D [trainingSize](#trainingsize) 训练图像的分辨率，必须与[XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription)中的训练输入和输出图像的分辨率保持一致，推荐使用（64，32）。       #### 结构体成员变量说明

  #### [h2]inferenceInputSize

VkExtent2D XEG_NNGICreateInfo::inferenceInputSize **描述**

 推理输入图像的分辨率，必须与[XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription)中的推理输入图像的分辨率保持一致。

   #### [h2]inferenceOutputSize

VkExtent2D XEG_NNGICreateInfo::inferenceOutputSize **描述**

 推理输出图像的分辨率，必须与[XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription)中的推理输出图像的分辨率保持一致，推荐使用（640，368）。

   #### [h2]pNext

const void* XEG_NNGICreateInfo::pNext **描述**

 指向扩展结构的指针。

   #### [h2]qualityMode

XEG_RTGIQualityMode XEG_NNGICreateInfo::qualityMode **描述**

 输出图像的质量模式，必须为[XEG_RTGIQualityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgiqualitymode)中的枚举值。

   #### [h2]sType

XEG_StructureType XEG_NNGICreateInfo::sType **描述**

 识别此结构的[XEG_StructureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_structuretype)值，必须是XEG_STRUCTURE_TYPE_NNGI_CREATE_INFO。

   #### [h2]trainingSize

VkExtent2D XEG_NNGICreateInfo::trainingSize **描述**

 训练图像的分辨率，必须与[XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription)中的训练输入和输出图像的分辨率保持一致，推荐使用（64，32）。

---
*Updated: 2026-04-22 06:40:38*
