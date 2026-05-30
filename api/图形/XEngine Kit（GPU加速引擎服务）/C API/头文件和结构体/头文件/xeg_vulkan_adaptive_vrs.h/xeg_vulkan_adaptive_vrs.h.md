# xeg_vulkan_adaptive_vrs.h

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-vulkan-adaptive-vrs-8h`  |  **DocID**: `fc1ae14325024493bd4cd5790d8104cc`

---

# xeg_vulkan_adaptive_vrs.h

  #### 概述

XEngine Adaptive VRS特性Vulkan接口。使用此头文件的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_ADAPTIVE_VRS_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptive_vrs_extension_name)扩展可用。

 **引用文件**：<xengine/xeg_vulkan_adaptive_vrs.h>

 **库：** libxengine.so

 **系统能力：** SystemCapability.Graphic.XEngine

 **起始版本：** 5.0.0(12)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [XEG_AdaptiveVRSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo) 此结构体描述创建[XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)对象的参数信息，当结构体中的信息变化时，需要创建新的[XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)对象。  struct  [XEG_AdaptiveVRSDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription) 此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。       #### [h2]类型定义

 名称 描述   VK_DEFINE_HANDLE([XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)) [XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)的句柄。  typedef struct [XEG_AdaptiveVRSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo) XEG_AdaptiveVRSCreateInfo 此结构体描述创建[XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)对象的参数信息，当结构体中的信息变化时，需要创建新的[XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)对象。  typedef struct [XEG_AdaptiveVRSDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription) XEG_AdaptiveVRSDescription 此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。  typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_createadaptivevrs)) (VkDevice device, const [XEG_AdaptiveVRSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo) *pXegAdaptiveVRSCreateInfo, [XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs) *pXegAdaptiveVRS) 创建[XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)对象的函数指针定义。  typedef void(VKAPI_PTR * [PFN_HMS_XEG_CmdDispatchAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_cmddispatchadaptivevrs)) (VkCommandBuffer commandBuffer, [XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs) xegAdaptiveVRS, [XEG_AdaptiveVRSDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription) *pXegAdaptiveVRSDescription) 执行计算自适应可变着色率命令的函数指针定义。  typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroyAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_destroyadaptivevrs)) ([XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs) xegAdaptiveVRS) 销毁[XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)对象的函数指针定义。       #### [h2]函数

 名称 描述   VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_createadaptivevrs) (VkDevice device, [XEG_AdaptiveVRSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo) *pXegAdaptiveVRSCreateInfo, [XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs) *pXegAdaptiveVRS) 创建[XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)对象。  VKAPI_ATTR void VKAPI_CALL [HMS_XEG_CmdDispatchAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmddispatchadaptivevrs) (VkCommandBuffer commandBuffer, [XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs) xegAdaptiveVRS, [XEG_AdaptiveVRSDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription) *pXegAdaptiveVRSDescription) 执行计算自适应可变着色率命令。  VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_destroyadaptivevrs) ([XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs) xegAdaptiveVRS) 销毁[XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)对象。

---
*Updated: 2026-04-22 06:40:38*
