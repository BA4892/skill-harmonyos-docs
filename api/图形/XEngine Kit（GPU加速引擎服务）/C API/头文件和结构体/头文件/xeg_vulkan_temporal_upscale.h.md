# xeg_vulkan_temporal_upscale.h

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-vulkan-temporal-upscale-8h`  |  **DocID**: `c66330a834564acaa83060bd48f09644`

---

# xeg_vulkan_temporal_upscale.h

  #### 概述

XEngine时域AI超分特性接口，推荐超分倍率为[1.25, 2.0]。使用此头文件中的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_TEMPORAL_UPSCALE_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporal_upscale_extension_name)扩展可用。

 **引用文件**：<xengine/xeg_vulkan_temporal_upscale.h>

 **库：** libxengine.so

 **系统能力：** SystemCapability.Graphic.XEngine

 **起始版本：** 5.0.0(12)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [XEG_TemporalUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo) 此结构体描述创建[XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale)对象。  struct  [XEG_TemporalUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription) 此结构体描述下发时域AI超分渲染命令时的输入信息。       #### [h2]类型定义

 名称 描述   VK_DEFINE_HANDLE([XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale)) [XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale)的句柄。  typedef struct [XEG_TemporalUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo) XEG_TemporalUpscaleCreateInfo 此结构体描述创建[XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale)对象。  typedef struct [XEG_TemporalUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription) XEG_TemporalUpscaleDescription 此结构体描述下发时域AI超分渲染命令时的输入信息。  typedef VkResult(VKAPI_ATTR * [PFN_HMS_XEG_CreateTemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_createtemporalupscale)) (VkDevice device, [XEG_TemporalUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo) *pTemporalUpscaleInfo, [XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale) *pTemporalUpscale) 创建[XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale)对象的函数指针定义。  typedef void(VKAPI_ATTR * [PFN_HMS_XEG_CmdRenderTemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_cmdrendertemporalupscale)) (VkCommandBuffer commandBuffer, [XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale) temporalUpscale, [XEG_TemporalUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription) *pDescription) 录制时域AI超分渲染命令的函数指针定义。  typedef void(VKAPI_ATTR * [PFN_HMS_XEG_DestroyTemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_destroytemporalupscale)) ([XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale) temporalUpscale) 销毁[XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale)对象的函数指针定义。       #### [h2]函数

 名称 描述   VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateTemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_createtemporalupscale) (VkDevice device, [XEG_TemporalUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo) *pTemporalUpscaleInfo, [XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale) *pTemporalUpscale) 创建[XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale)对象。  VKAPI_ATTR void VKAPI_CALL [HMS_XEG_CmdRenderTemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmdrendertemporalupscale) (VkCommandBuffer commandBuffer, [XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale) temporalUpscale, [XEG_TemporalUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription) *pDescription) 录制时域AI超分渲染命令。  VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyTemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_destroytemporalupscale) ([XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale) temporalUpscale) 销毁[XEG_TemporalUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_temporalupscale)对象。

---
*Updated: 2026-04-22 06:40:38*
