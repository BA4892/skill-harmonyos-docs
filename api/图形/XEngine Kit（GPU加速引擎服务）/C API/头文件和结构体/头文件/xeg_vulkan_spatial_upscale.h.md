# xeg_vulkan_spatial_upscale.h

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-vulkan-spatial-upscale-8h`  |  **DocID**: `2d6e782d2c6c4ad89c93def206ec75d7`

---

# xeg_vulkan_spatial_upscale.h

  #### 概述

XEngine空域GPU超分特性Vulkan接口。使用此头文件的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_SPATIAL_UPSCALE_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatial_upscale_extension_name)扩展可用。

 **引用文件**：<xengine/xeg_vulkan_spatial_upscale.h>

 **库：** libxengine.so

 **系统能力：** SystemCapability.Graphic.XEngine

 **起始版本：** 5.0.0(12)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [XEG_SpatialUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo) 此结构体描述创建[XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale)对象。  struct  [XEG_SpatialUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscaledescription) 此结构体描述下发空域GPU超分渲染命令时需要的图像信息。       #### [h2]类型定义

 名称 描述   VK_DEFINE_HANDLE([XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale)) [XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale)的句柄。  typedef struct [XEG_SpatialUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo) XEG_SpatialUpscaleCreateInfo 此结构体描述创建[XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale)对象。  typedef struct [XEG_SpatialUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscaledescription) XEG_SpatialUpscaleDescription 此结构体描述下发空域GPU超分渲染命令时需要的图像信息。  typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateSpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_createspatialupscale)) (VkDevice device, const [XEG_SpatialUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo) *pXegSpatialUpscaleCreateInfo, [XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale) *pXegSpatialUpscale) 创建[XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale)对象的函数指针定义。  typedef void(VKAPI_PTR * [PFN_HMS_XEG_CmdRenderSpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_cmdrenderspatialupscale)) (VkCommandBuffer commandBuffer, [XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale) xegSpatialUpscale, [XEG_SpatialUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscaledescription) *pXegSpatialUpscaleDescription) 执行空域GPU超分渲染命令的函数指针定义。  typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroySpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_destroyspatialupscale)) ([XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale) xegSpatialUpscale) 销毁[XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale)对象的函数指针定义。       #### [h2]函数

 名称 描述   VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateSpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_createspatialupscale) (VkDevice device, const [XEG_SpatialUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo) *pXegSpatialUpscaleCreateInfo, [XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale) *pXegSpatialUpscale) 创建[XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale)对象。  VKAPI_ATTR void VKAPI_CALL [HMS_XEG_CmdRenderSpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmdrenderspatialupscale) (VkCommandBuffer commandBuffer, [XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale) xegSpatialUpscale, [XEG_SpatialUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscaledescription) *pXegSpatialUpscaleDescription) 执行空域GPU超分渲染命令。  VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroySpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_destroyspatialupscale) ([XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale) xegSpatialUpscale) 销毁[XEG_SpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatialupscale)对象。

---
*Updated: 2026-04-22 06:40:38*
