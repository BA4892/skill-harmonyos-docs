# xeg_vulkan_rt_reflection.h

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-vulkan-rt-reflection-8h`  |  **DocID**: `2c8cbbd46bd74da7bb9b35b83d1f1622`

---

# xeg_vulkan_rt_reflection.h

  #### 概述

XEngine RT Reflection特性接口。使用此头文件中的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询 [XEG_RT_REFLECTION_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rt_reflection_extension_name)扩展可用。

 **引用文件**：<xengine/xeg_vulkan_rt_reflection.h>

 **库：** libxengine.so

 **系统能力：** SystemCapability.Graphic.XEngine

 **起始版本：** 6.0.0(20)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [XEG_RTReflectionCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectioncreateinfo) 此结构体描述创建[XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection)对象。  struct  [XEG_RTReflectionDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectiondescription) 此结构体描述下发光线求交命令时的输入信息。       #### [h2]类型定义

 名称 描述   VK_DEFINE_HANDLE([XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection)) [XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection)的句柄。  typedef struct [XEG_RTReflectionCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectioncreateinfo) XEG_RTReflectionCreateInfo 此结构体描述创建[XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection)对象。  typedef struct [XEG_RTReflectionDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectiondescription) XEG_RTReflectionDescription 此结构体描述下发光线求交命令时的输入信息。  typedef VkResult(VKAPI_ATTR * [PFN_HMS_XEG_CreateRTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_creatertreflection)) (VkDevice device, const void *pCreateInfo, [XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection) *pRtReflection) 创建[XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection)对象的函数指针定义。  typedef VkResult (VKAPI_ATTR *[PFN_HMS_XEG_CmdRenderRTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_cmdrenderrtreflection))(VkCommandBuffer commandBuffer, [XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection) rtReflection, const void *pDescription) 录制计算RT反射命中信息命令的函数指针定义。  typedef void (VKAPI_ATTR *[PFN_HMS_XEG_DestroyRTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_destroyrtreflection))([XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection) rtReflection) 销毁[XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection)对象的函数指针定义。       #### [h2]函数

 名称 描述   VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateRTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_creatertreflection) (VkDevice device, const void *pCreateInfo, [XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection) *pRtReflection) 创建[XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection)对象。  VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CmdRenderRTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmdrenderrtreflection) (VkCommandBuffer commandBuffer, [XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection) rtReflection, const void *pDescription) 录制计算RT反射命中信息命令。  VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyRTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_destroyrtreflection) ([XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection) rtReflection) 销毁[XEG_RTReflection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_rtreflection)对象。

---
*Updated: 2026-04-22 06:40:38*
