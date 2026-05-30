# XEG_RTShadowAOCreateInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `xengine-kit-xeg-rtshadowaocreateinfo`

**DocID**: `c538042c5a784afca37ece343903d37d`

**NodeID**: `000201775795874920326a8c8d9de9ec`

---

XEG_RTShadowAOCreateInfo

概述

此结构体描述创建支持光线追踪阴影和环境光遮蔽效果
XEG_RTVisibleMask
实例的初始化信息。当结构体中的信息变化时，需要创建新的
XEG_RTVisibleMask
对象。

起始版本：
 6.0.0(20)

相关模块： 

XEngine

所在头文件：

xeg_vulkan_rt_visible_mask.h

汇总

[h2]成员变量

名称

描述

XEG_StructureType 
sType

识别此结构的
XEG_StructureType
值，必须是XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO。

const void * 
pNext

指向扩展结构的指针。

VkExtent2D 
rtInputGbufferSize

输入的GBuffer深度和法线图像的尺寸，深度图像和法线图像的尺寸必须相同。

VkExtent2D 
rtShadowAOSize

输出的阴影和环境光遮蔽图像的尺寸，必须与rtInputGbufferSize等比例。

bool 
enableRTShadow

是否开启光线追踪阴影效果，true为开启，false为不开启。阴影与环境光遮蔽效果至少需要开启一个。

bool 
enableRTAO

是否开启光线追踪环境光遮蔽效果，true为开启，false为不开启。阴影与环境光遮蔽效果至少需要开启一个。

XEG_TraversalMode 
traversalMode

遍历模式，光线追踪阴影和环境光遮蔽使用相同的遍历模式设置。

XEG_DenoiseQualityMode 
denoiseMode

去噪质量模式，光线追踪阴影和环境光遮蔽使用相同的质量设置。

bool 
aoOnlyInShadow

仅在开启光线追踪阴影效果时生效，如果设置为true，将只计算处于阴影区域的像素的环境光遮蔽值。如果设置为false则计算所有像素。

bool 
reverseZ

场景是否开启了深度翻转，即远平面处的深度为0。深度翻转可以获取更高精度的深度值，建议开启。true表示已开启，false表示未开启。

结构体成员变量说明

[h2]aoOnlyInShadow

bool XEG_RTShadowAOCreateInfo::aoOnlyInShadow

描述

仅在开启光线追踪阴影效果时生效，如果设置为true，将只计算处于阴影区域的像素的环境光遮蔽值。如果设置为false则计算所有像素。

[h2]denoiseMode

XEG_DenoiseQualityMode XEG_RTShadowAOCreateInfo::denoiseMode

描述

去噪质量模式，光线追踪阴影和环境光遮蔽使用相同的质量设置。

[h2]enableRTAO

bool XEG_RTShadowAOCreateInfo::enableRTAO

描述

是否开启光线追踪环境光遮蔽效果，true为开启，false为不开启。阴影与环境光遮蔽效果至少需要开启一个。

[h2]enableRTShadow

bool XEG_RTShadowAOCreateInfo::enableRTShadow

描述

是否开启光线追踪阴影效果，true为开启，false为不开启。阴影与环境光遮蔽效果至少需要开启一个。

[h2]pNext

const void* XEG_RTShadowAOCreateInfo::pNext

描述

指向扩展结构的指针。

[h2]reverseZ

bool XEG_RTShadowAOCreateInfo::reverseZ

描述

场景是否开启了深度翻转，即远平面处的深度为0。深度翻转可以获取更高精度的深度值，建议开启。true表示已开启，false表示未开启。

[h2]rtInputGbufferSize

VkExtent2D XEG_RTShadowAOCreateInfo::rtInputGbufferSize

描述

输入的GBuffer深度和法线图像的尺寸，深度图像和法线图像的尺寸必须相同。

[h2]rtShadowAOSize

VkExtent2D XEG_RTShadowAOCreateInfo::rtShadowAOSize

描述

输出的阴影和环境光遮蔽图像的尺寸，必须与rtInputGbufferSize等比例。

[h2]sType

XEG_StructureType XEG_RTShadowAOCreateInfo::sType

描述

识别此结构的
XEG_StructureType
值，必须是XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO。

[h2]traversalMode

XEG_TraversalMode XEG_RTShadowAOCreateInfo::traversalMode

描述

遍历模式，光线追踪阴影和环境光遮蔽使用相同的遍历模式设置。

---
*2026-04-22T15:55:04.036Z*