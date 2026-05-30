# xeg_vulkan_rtgi.h

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-vulkan-rtgi-8h`  |  **DocID**: `b173b2e300c8435481f15bcb7aee5064`

---

# xeg_vulkan_rtgi.h

  #### 概述

XEngine光线追踪全局光照特性Vulkan接口，提供动态漫反射全局光照（DDGI）及神经网络全局光照（NNGI）两种特性。使用此头文件的接口前，需要先调用[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询扩展[XEG_RTGI_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi_extension_name)可用。

 **引用文件**：<xengine/xeg_vulkan_rtgi.h>

 **库：** libxengine.so

 **系统能力：** SystemCapability.Graphic.XEngine

 **起始版本：** 6.0.0(20)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [XEG_DDGIVolumeEntryParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgivolumeentryparameters) 此结构体描述每一个DDGI体积的必要参数。  struct  [XEG_DDGICreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgicreateinfo) 此结构体描述创建具有DDGI特性的[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象。  struct  [XEG_DDGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgidescription) 此结构体描述更新DDGI探针辐照度及渲染输出GI图像所需的信息。  struct  [XEG_NNGICreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngicreateinfo) 此结构体描述创建具有NNGI特性的[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象。  struct  [XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription) 此结构体描述更新NNGI用于计算光线追踪全局光照的所需的信息。       #### [h2]类型定义

 名称 描述   VK_DEFINE_HANDLE([XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)) [XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)的句柄。  typedef enum [XEG_RTGIQualityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgiqualitymode) XEG_RTGIQualityMode 输出图像质量模式的枚举。  typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateRTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_creatertgi)) (VkDevice device, const void *pCreateInfo, [XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi) *pRtGI) 创建[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象的函数指针定义。  typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroyRTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_destroyrtgi)) ([XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi) rtGI) 销毁[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象的函数指针定义。  typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CmdRenderRTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_cmdrenderrtgi)) (VkCommandBuffer commandBuffer, [XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi) rtGI, const void *pDescription) 执行渲染命令的函数指针定义。       #### [h2]枚举

 名称 描述   [XEG_RTGIQualityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgiqualitymode) { XEG_RTGI_QUALITY_MODE_QUALITY = 0, XEG_RTGI_QUALITY_MODE_BALANCED = 1, XEG_RTGI_QUALITY_MODE_PERFORMANCE = 2 } 输出图像质量模式的枚举。       #### [h2]函数

 名称 描述   VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateRTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_creatertgi) (VkDevice device, const void *pCreateInfo, [XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi) *pRtGI) 创建[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象。  VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyRTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_destroyrtgi) ([XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi) rtGI) 销毁[XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi)对象。  VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CmdRenderRTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmdrenderrtgi) (VkCommandBuffer commandBuffer, [XEG_RTGI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtgi) rtGI, const void *pDescription) 执行渲染命令。

---
*Updated: 2026-04-22 06:40:38*
