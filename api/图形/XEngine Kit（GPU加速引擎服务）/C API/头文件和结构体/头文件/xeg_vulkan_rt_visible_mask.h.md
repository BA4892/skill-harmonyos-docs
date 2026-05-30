# xeg_vulkan_rt_visible_mask.h

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-vulkan-rt-visible-mask-8h`  |  **DocID**: `90737a4a246347a5bf9b8963ec97cad0`

---

# xeg_vulkan_rt_visible_mask.h

  #### 概述

XEngine RT VisibleMask特性接口。使用此头文件中的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_RT_SHADOW_AO_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rt_shadow_ao_extension_name)扩展可用。

 **引用文件**：<xengine/xeg_vulkan_rt_visible_mask.h>

 **库：** libxengine.so

 **系统能力：** SystemCapability.Graphic.XEngine

 **起始版本：** 6.0.0(20)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [XEG_RTShadowAOCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaocreateinfo) 此结构体描述创建支持光线追踪阴影和环境光遮蔽效果[XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask)实例的初始化信息。当结构体中的信息变化时，需要创建新的[XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask)对象。  struct  [XEG_RTShadowParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowparameters) 光线追踪阴影（Shadow）算法参数。  struct  [XEG_RTAOParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtaoparameters) 光线追踪环境光遮蔽（AO）算法参数。  struct  [XEG_RTShadowAODenoiserParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaodenoiserparameters) 光线追踪阴影和环境光遮蔽算法去噪参数。  struct  [XEG_RTShadowAODescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaodescription) 此结构体描述光线追踪阴影和环境光遮蔽算法渲染命令的输入信息。       #### [h2]类型定义

 名称 描述   VK_DEFINE_HANDLE([XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask)) [XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask)的句柄。表示光线追踪VisibleMask特性实例，支持阴影和环境光遮蔽效果。  typedef enum [XEG_DenoiseQualityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_denoisequalitymode) XEG_DenoiseQualityMode 去噪质量模式枚举。  typedef enum [XEG_TraversalMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_traversalmode) XEG_TraversalMode 遍历模式枚举。  typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateRTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_creatertvisiblemask)) (VkDevice device, const void *pCreateInfo, [XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask) *pRTVisibleMask) 创建[XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask)对象的函数指针定义。  typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CmdRenderRTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_cmdrenderrtvisiblemask)) (VkCommandBuffer commandBuffer, [XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask) rtVisibleMask, const void *pDescription) 录制光线追踪VisibleMask渲染命令的函数指针定义。  typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroyRTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_destroyrtvisiblemask)) ([XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask) rtVisibleMask) 销毁[XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask)对象的函数指针定义。       #### [h2]枚举

 名称 描述   [XEG_DenoiseQualityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_denoisequalitymode) { XEG_DENOISE_QUALITY_MODE_NONE = 0, XEG_DENOISE_QUALITY_MODE_QUALITY = 1, XEG_DENOISE_QUALITY_MODE_BALANCED = 2, XEG_DENOISE_QUALITY_MODE_PERFORMANCES = 3 } 去噪质量模式枚举。  [XEG_TraversalMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_traversalmode) { XEG_TRAVERSAL_MODE_DEFAULT = 0, XEG_TRAVERSAL_MODE_PERFORMANCES = 1 } 遍历模式枚举。       #### [h2]函数

 名称 描述   VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateRTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_creatertvisiblemask) (VkDevice device, const void *pCreateInfo, [XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask) *pRTVisibleMask) 创建[XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask)对象。  VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CmdRenderRTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmdrenderrtvisiblemask) (VkCommandBuffer commandBuffer, [XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask) rtVisibleMask, const void *pDescription) 录制光线追踪VisibleMask渲染命令。  VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyRTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_destroyrtvisiblemask) ([XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask) rtVisibleMask) 销毁[XEG_RTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtvisiblemask)对象。

---
*Updated: 2026-04-22 06:40:38*
