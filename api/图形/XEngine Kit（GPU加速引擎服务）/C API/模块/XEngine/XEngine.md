# XEngine

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `xengine-kit-xengine`

**DocID**: `721cb8d9e31c4a69a729aefbb97fee5d`

**NodeID**: `0002017757958749200631d8096f67ca`

---

XEngine

概述

提供XEngine图形相关能力接口。

系统能力：
 SystemCapability.Graphic.XEngine

起始版本：
 5.0.0(12)

汇总

[h2]文件

名称

描述

xeg_extension_defs.h

提供XEngine扩展特性宏定义信息。

xeg_gles_adaptive_vrs.h

XEngine VRS特性接口。使用此头文件的接口前需要通过
HMS_XEG_GetString
接口查询
XEG_ADAPTIVE_VRS_EXTENSION_NAME
扩展可用。

xeg_gles_extension.h

XEngine扩展特性查询接口（OpenGL ES）。

xeg_gles_neural_upscale.h

XEngine空域AI超分特性OpenGL ES接口，推荐超分倍率为[1.0, 1.5]。使用此头文件中的接口前需要通过
HMS_XEG_GetString
接口查询
XEG_NEURAL_UPSCALE_EXTENSION_NAME
扩展可用。

xeg_gles_spatial_upscale.h

XEngine空域GPU超分特性OpenGL ES接口。使用此头文件的接口前需要通过
HMS_XEG_GetString
接口查询
XEG_SPATIAL_UPSCALE_EXTENSION_NAME
扩展可用。

xeg_gles_temporal_upscale.h

XEngine时域AI超分特性OpenGL ES接口。推荐超分倍率为[1.25, 2.0]，使用此头文件中的接口前需要通过
HMS_XEG_GetString
接口查询
XEG_TEMPORAL_UPSCALE_EXTENSION_NAME
扩展可用。

xeg_vulkan_adaptive_vrs.h

XEngine Adaptive VRS特性Vulkan接口。使用此头文件的接口前需要通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询
XEG_ADAPTIVE_VRS_EXTENSION_NAME
扩展可用。

xeg_vulkan_common.h

包含XEngine中Vulkan相关的通用类型定义。

xeg_vulkan_extension.h

XEngine 扩展特性查询接口（Vulkan）。

xeg_vulkan_hps.h

XEngine 高性能着色器接口。使用此头文件中的接口前需要通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询
XEG_HPS_RADIX_SORT_EXTENSION_NAME
扩展可用。

xeg_vulkan_rt_reflection.h

XEngine RT Reflection特性接口。使用此头文件中的接口前需要通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询 
XEG_RT_REFLECTION_EXTENSION_NAME
扩展可用。

xeg_vulkan_rt_visible_mask.h

XEngine RT VisibleMask特性接口。使用此头文件中的接口前需要通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询
XEG_RT_SHADOW_AO_EXTENSION_NAME
扩展可用。

xeg_vulkan_rtgi.h

XEngine光线追踪全局光照特性Vulkan接口，提供动态漫反射全局光照（DDGI）及神经网络全局光照（NNGI）两种特性。使用此头文件的接口前，需要先调用
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询扩展
XEG_RTGI_EXTENSION_NAME
可用。

xeg_vulkan_spatial_upscale.h

XEngine空域GPU超分特性Vulkan接口。使用此头文件的接口前需要通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询
XEG_SPATIAL_UPSCALE_EXTENSION_NAME
扩展可用。

xeg_vulkan_temporal_upscale.h

XEngine时域AI超分特性接口，推荐超分倍率为[1.25, 2.0]。使用此头文件中的接口前需要通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询
XEG_TEMPORAL_UPSCALE_EXTENSION_NAME
扩展可用。

[h2]结构体

名称

描述

struct 
XEG_AdaptiveVRSCreateInfo

此结构体描述创建
XEG_AdaptiveVRS
对象的参数信息，当结构体中的信息变化时，需要创建新的
XEG_AdaptiveVRS
对象。

struct 
XEG_AdaptiveVRSDescription

此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。

struct 
XEG_ExtensionProperties

此结构体描述通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询到的XEngine扩展特性集合。

struct 
XEG_HPSCreateInfo

此结构体描述创建
XEG_HPS
对象的信息。

struct 
XEG_HPSRadixSort

此结构体描述HPS基数排序扩展结构信息。

struct 
XEG_HPSRadixSortDescription

此结构体描述使用
XEG_HPS_RADIX_SORT_EXTENSION_NAME
扩展进行排序时所需的信息。

struct 
XEG_RTReflectionCreateInfo

此结构体描述创建
XEG_RTReflection
对象的信息。当结构体中的信息变化时，需要创建新的
XEG_RTReflection
对象。

struct 
XEG_RTReflectionDescription

此结构体描述下发光线求交命令时的输入信息。

struct 
XEG_RTShadowAOCreateInfo

此结构体描述创建支持光线追踪阴影和环境光遮蔽效果
XEG_RTVisibleMask
实例的初始化信息。当结构体中的信息变化时，需要创建新的
XEG_RTVisibleMask
对象。

struct 
XEG_RTShadowParameters

光线追踪阴影（Shadow）算法参数。

struct 
XEG_RTAOParameters

光线追踪环境光遮蔽（AO）算法参数。

struct 
XEG_RTShadowAODenoiserParameters

光线追踪阴影和环境光遮蔽算法去噪参数。

struct 
XEG_RTShadowAODescription

此结构体描述光线追踪阴影和环境光遮蔽算法渲染命令的输入信息。

struct 
XEG_DDGIVolumeEntryParameters

此结构体描述每一个DDGI体积的必要参数。

struct 
XEG_DDGICreateInfo

此结构体描述创建具有DDGI特性的
XEG_RTGI
对象的信息，当结构体中的信息变化时，需要创建新的
XEG_RTGI
对象。

struct 
XEG_DDGIDescription

此结构体描述更新DDGI探针辐照度及渲染输出GI图像所需的信息。

struct 
XEG_NNGICreateInfo

此结构体描述创建具有NNGI特性的
XEG_RTGI
对象的信息，当结构体中的信息变化时，需要创建新的
XEG_RTGI
对象。

struct 
XEG_NNGIDescription

此结构体描述更新NNGI用于计算光线追踪全局光照的所需的信息。

struct 
XEG_SpatialUpscaleCreateInfo

此结构体描述创建
XEG_SpatialUpscale
对象的信息，当结构体中的信息变化时，需要创建新的
XEG_SpatialUpscale
对象。

struct 
XEG_SpatialUpscaleDescription

此结构体描述下发空域GPU超分渲染命令时需要的图像信息。

struct 
XEG_TemporalUpscaleCreateInfo

此结构体描述创建
XEG_TemporalUpscale
对象的信息。当结构体中的信息变化时，需要创建新的
XEG_TemporalUpscale
对象。

struct 
XEG_TemporalUpscaleDescription

此结构体描述下发时域AI超分渲染命令时的输入信息。

[h2]宏定义

名称

描述

XEG_spatial_upscale
 1

XEngine空域GPU超分扩展特性宏定义。

XEG_SPATIAL_UPSCALE_VERSION
 1

XEngine空域GPU超分扩展特性版本号。

XEG_SPATIAL_UPSCALE_EXTENSION_NAME
 "XEG_spatial_upscale"

XEngine空域GPU超分扩展特性名称。

XEG_neural_upscale
 1

XEngine空域AI超分扩展特性宏定义。

XEG_NEURAL_UPSCALE_VERSION
 1

XEngine空域AI超分扩展特性版本号。

XEG_NEURAL_UPSCALE_EXTENSION_NAME
 "XEG_neural_upscale"

XEngine空域AI超分扩展特性名称。

XEG_temporal_upscale
 1

XEngine时域AI超分扩展特性宏定义。

XEG_TEMPORAL_UPSCALE_VERSION
 1

XEngine时域AI超分扩展特性版本号。

XEG_TEMPORAL_UPSCALE_EXTENSION_NAME
 "XEG_temporal_upscale"

XEngine时域AI超分扩展特性名称。

XEG_adaptive_vrs
 1

XEngine自适应VRS扩展特性宏定义。

XEG_ADAPTIVE_VRS_VERSION
 1

XEngine自适应VRS扩展特性版本号。

XEG_ADAPTIVE_VRS_EXTENSION_NAME
 "XEG_adaptive_vrs"

XEngine自适应VRS扩展特性名称。

XEG_RTGI_EXTENSION_NAME
 "XEG_rtgi"

XEngine光线追踪全局光照扩展特性名称。

XEG_RT_SHADOW_AO_EXTENSION_NAME
 "XEG_rt_shadow_ao"

XEngine光线追踪阴影和环境光遮蔽扩展特性名称。

XEG_RT_REFLECTION_EXTENSION_NAME
 "XEG_rt_reflection"

XEngine光线追踪反射扩展特性名称。

XEG_HPS_RADIX_SORT_EXTENSION_NAME
 "XEG_hps_radix_sort"

XEngine 高性能基数排序扩展特性名称。

XEG_ADAPTIVE_VRS_INPUT_SIZE
 0x1U

用于设置
HMS_XEG_AdaptiveVRSParameter
接口的INPUT_SIZE参数，表示上一帧渲染管线最终渲染的图像宽度和高度。

XEG_ADAPTIVE_VRS_INPUT_REGION
 0x2U

用于设置
HMS_XEG_AdaptiveVRSParameter
接口的INPUT_REGION参数，表示上一帧渲染管线最终渲染的图像区域。

XEG_ADAPTIVE_VRS_TEXEL_SIZE
 0x3U

用于设置
HMS_XEG_AdaptiveVRSParameter
接口的TEXEL_SIZE参数。

XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY
 0x4U

用于设置
HMS_XEG_AdaptiveVRSParameter
接口的ERROR_SENSITIVITY参数，表示控制生成着色率图像的阈值。该值越大，平均着色率越小，即性能会越好但画质会劣化。建议取值范围为[0, 1]。

XEG_ADAPTIVE_VRS_FLIP
 0x5U

用于设置
HMS_XEG_AdaptiveVRSParameter
接口的FLIP参数，该参数用于控制是否执行图像上下翻转。

XEG_EXTENSIONS
 0x01U

作为
HMS_XEG_GetString
接口的入参，以获取XEngine支持的OpenGL ES扩展特性。

XEG_NEURAL_UPSCALE_SCISSOR
 0x1U

用于通过
HMS_XEG_NeuralUpscaleParameter
接口设置超分的裁剪窗口参数，裁剪窗口用于确定对输入图像采样的区域。

XEG_NEURAL_UPSCALE_SHARPNESS
 0x2U

用于通过
HMS_XEG_NeuralUpscaleParameter
接口设置超分的锐化度参数，锐化度的建议取值范围为[0, 1]。

XEG_NEURAL_UPSCALE_INPUT_HANDLE
 0x4U

用于通过
HMS_XEG_NeuralUpscaleParameter
接口设置与超分输入纹理关联的OH_NativeBuffer handle。

XEG_SPATIAL_UPSCALE_SCISSOR
 0x1U

用于设置
HMS_XEG_SpatialUpscaleParameter
接口的SCISSOR参数。

XEG_SPATIAL_UPSCALE_SHARPNESS
 0x2U

用于设置
HMS_XEG_SpatialUpscaleParameter
接口的SHARPNESS参数。

XEG_TEMPORAL_UPSCALE_INPUT_SIZE
 0x1U

用于通过
HMS_XEG_TemporalUpscaleParameter
接口设置超分输入纹理的真实宽高。

XEG_TEMPORAL_UPSCALE_JITTER_NUM
 0x2U

用于通过
HMS_XEG_TemporalUpscaleParameter
接口设置相机抖动的周期数，取值范围为[4, 16]，推荐8。

XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED
 0x3U

用于通过
HMS_XEG_TemporalUpscaleParameter
接口设置是否存在深度反转。true表示存在深度反转，false表示不存在深度反转。

XEG_TEMPORAL_UPSCALE_RESET_HISTORY
 0x4U

用于通过
HMS_XEG_TemporalUpscaleParameter
接口设置是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，并且当前帧开始使用超分的情况下建议设置为true。

XEG_TEMPORAL_UPSCALE_STEADY_LEVEL
 0x5U

用于通过
HMS_XEG_TemporalUpscaleParameter
接口设置画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。取值范围为[0.0, 1.0]，值越大越偏向历史帧。

XEG_MAX_EXTENSION_NAME_SIZE
 256

XEngine扩展特性名称支持的最大长度。

[h2]类型定义

名称

描述

typedef void(GL_APIENTRYP 
PFN_HMS_XEG_ADAPTIVEVRSPARAMETER
) (GLenum pname, GLvoid *param)

设置自适应VRS输入参数的函数指针定义。

typedef void(GL_APIENTRYP 
PFN_HMS_XEG_DISPATCHADAPTIVEVRS
) (GLfloat *reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)

计算着色率图像的函数指针定义。

typedef void(GL_APIENTRYP 
PFN_HMS_XEG_APPLYADAPTIVEVRS
) (GLuint shadingRateImage)

将着色率图像应用到渲染目标中的函数指针定义。

typedef const GLubyte *(GL_APIENTRYP 
PFN_HMS_XEG_GETSTRING
) (GLenum name)

XEngine OpenGL ES扩展特性查询接口函数指针定义。

typedef void(GL_APIENTRYP 
PFN_HMS_XEG_NEURALUPSCALEPARAMETER
) (GLenum pname, GLvoid *param)

设置空域AI超分输入参数的函数指针定义。

typedef void(GL_APIENTRYP 
PFN_HMS_XEG_RENDERNEURALUPSCALE
) (GLuint inputTexture)

执行空域AI超分渲染命令的函数指针定义。

typedef void(GL_APIENTRYP 
PFN_HMS_XEG_SPATIALUPSCALEPARAMETER
) (GLenum pname, GLvoid *param)

设置空域GPU超分输入参数的函数指针定义。

typedef void(GL_APIENTRYP 
PFN_HMS_XEG_RENDERSPATIALUPSCALE
) (GLuint inputTexture)

执行空域GPU超分渲染命令的函数指针定义。

typedef void(GL_APIENTRYP 
PFN_HMS_XEG_TemporalUpscaleParameter
) (GLenum pname, GLvoid *param)

设置时域AI超分输入参数的函数指针定义。

typedef void(GL_APIENTRYP 
PFN_HMS_XEG_RenderTemporalUpscale
) (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY)

执行时域AI超分渲染命令的函数指针定义。

VK_DEFINE_HANDLE(
XEG_AdaptiveVRS
)

XEG_AdaptiveVRS
的句柄。

typedef struct 
XEG_AdaptiveVRSCreateInfo

XEG_AdaptiveVRSCreateInfo

此结构体描述创建
XEG_AdaptiveVRS
对象的参数信息，当结构体中的信息变化时，需要创建新的
XEG_AdaptiveVRS
对象。

typedef struct 
XEG_AdaptiveVRSDescription

XEG_AdaptiveVRSDescription

此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。

typedef VkResult(VKAPI_PTR * 
PFN_HMS_XEG_CreateAdaptiveVRS
) (VkDevice device, const 
XEG_AdaptiveVRSCreateInfo
 *pXegAdaptiveVRSCreateInfo, 
XEG_AdaptiveVRS
 *pXegAdaptiveVRS)

创建
XEG_AdaptiveVRS
对象的函数指针定义。

typedef void(VKAPI_PTR * 
PFN_HMS_XEG_CmdDispatchAdaptiveVRS
) (VkCommandBuffer commandBuffer, 
XEG_AdaptiveVRS
 xegAdaptiveVRS, 
XEG_AdaptiveVRSDescription
 *pXegAdaptiveVRSDescription)

执行计算自适应可变着色率命令的函数指针定义。

typedef void(VKAPI_PTR * 
PFN_HMS_XEG_DestroyAdaptiveVRS
) (
XEG_AdaptiveVRS
 xegAdaptiveVRS)

销毁
XEG_AdaptiveVRS
对象的函数指针定义。

typedef enum 
XEG_StructureType
 XEG_StructureType

XEngine结构体类型的枚举。

typedef VkResult(VKAPI_PTR * 
PFN_HMS_XEG_CmdSetSynchronization
) (VkCommandBuffer commandBuffer, const void *xegHandle)

设置同步信号，等待渲染结果写入指定图像的函数指针定义。使用RTGI特性时，为等待GI渲染结果到写入指定图像。

typedef struct 
XEG_ExtensionProperties

XEG_ExtensionProperties

此结构体描述通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询到的XEngine扩展特性集合。

typedef VkResult(VKAPI_PTR * 
PFN_HMS_XEG_EnumerateDeviceExtensionProperties
) (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, 
XEG_ExtensionProperties
 *pProperties)

XEngine Vulkan扩展特性查询接口函数指针定义。

VK_DEFINE_HANDLE(
XEG_HPS
)

XEG_HPS
的句柄。

typedef struct 
XEG_HPSCreateInfo

XEG_HPSCreateInfo

此结构体描述创建
XEG_HPS
对象的信息。

typedef struct 
XEG_HPSRadixSort

XEG_HPSRadixSort

此结构体描述HPS基数排序扩展结构信息。

typedef struct 
XEG_HPSRadixSortDescription

XEG_HPSRadixSortDescription

此结构体描述使用
XEG_HPS_RADIX_SORT_EXTENSION_NAME
扩展进行排序时所需的信息。

typedef VkResult(VKAPI_PTR * 
PFN_HMS_XEG_CreateHPS
) (VkDevice device, const 
XEG_HPSCreateInfo
 *pCreateInfo, 
XEG_HPS
 *pHps)

创建
XEG_HPS
对象的函数指针定义。

typedef void(VKAPI_PTR * 
PFN_HMS_XEG_DestroyHPS
) (
XEG_HPS
 hps)

销毁
XEG_HPS
对象的函数指针定义。

typedef VkResult(VKAPI_PTR * 
PFN_HMS_XEG_CmdRadixSortHPS
) (VkCommandBuffer commandBuffer, 
XEG_HPS
 hps, const 
XEG_HPSRadixSortDescription
 *pDescription)

录制HPS排序命令的函数指针定义，使用此接口前需要通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询是否支持
XEG_HPS_RADIX_SORT_EXTENSION_NAME
扩展。

VK_DEFINE_HANDLE(
XEG_RTReflection
)

XEG_RTReflection
的句柄。

typedef struct 
XEG_RTReflectionCreateInfo

XEG_RTReflectionCreateInfo

此结构体描述创建
XEG_RTReflection
对象的信息。当结构体中的信息变化时，需要创建新的
XEG_RTReflection
对象。

typedef struct 
XEG_RTReflectionDescription

XEG_RTReflectionDescription

此结构体描述下发光线求交命令时的输入信息。

typedef VkResult(VKAPI_ATTR * 
PFN_HMS_XEG_CreateRTReflection
) (VkDevice device, const void *pCreateInfo, 
XEG_RTReflection
 *pRtReflection)

创建
XEG_RTReflection
对象的函数指针定义。

typedef VkResult VKAPI_ATTR * 
PFN_HMS_XEG_CmdRenderRTReflection
(VkCommandBuffer commandBuffer, 
XEG_RTReflection
 rtReflection, const void *pDescription)

录制计算RT反射命中信息命令的函数指针定义。

typedef void VKAPI_ATTR * 
PFN_HMS_XEG_DestroyRTReflection
(
XEG_RTReflection
 rtReflection)

销毁
XEG_RTReflection
对象的函数指针定义。

VK_DEFINE_HANDLE(
XEG_RTVisibleMask
)

XEG_RTVisibleMask
的句柄。表示光线追踪VisibleMask特性实例，支持阴影和环境光遮蔽效果。

typedef enum 
XEG_DenoiseQualityMode
 XEG_DenoiseQualityMode

去噪质量模式枚举。

typedef enum 
XEG_TraversalMode
 XEG_TraversalMode

遍历模式枚举。

typedef VkResult(VKAPI_PTR * 
PFN_HMS_XEG_CreateRTVisibleMask
) (VkDevice device, const void *pCreateInfo, 
XEG_RTVisibleMask
 *pRTVisibleMask)

创建
XEG_RTVisibleMask
对象的函数指针定义。

typedef VkResult(VKAPI_PTR * 
PFN_HMS_XEG_CmdRenderRTVisibleMask
) (VkCommandBuffer commandBuffer, 
XEG_RTVisibleMask
 rtVisibleMask, const void *pDescription)

录制光线追踪VisibleMask渲染命令的函数指针定义。

typedef void(VKAPI_PTR * 
PFN_HMS_XEG_DestroyRTVisibleMask
) (
XEG_RTVisibleMask
 rtVisibleMask)

销毁
XEG_RTVisibleMask
对象的函数指针定义。

VK_DEFINE_HANDLE(
XEG_RTGI
)

XEG_RTGI
的句柄。

typedef enum 
XEG_RTGIQualityMode
 XEG_RTGIQualityMode

输出图像质量模式的枚举。

typedef VkResult(VKAPI_PTR * 
PFN_HMS_XEG_CreateRTGI
) (VkDevice device, const void *pCreateInfo, 
XEG_RTGI
 *pRtGI)

创建
XEG_RTGI
对象的函数指针定义。

typedef void(VKAPI_PTR * 
PFN_HMS_XEG_DestroyRTGI
) (
XEG_RTGI
 rtGI)

销毁
XEG_RTGI
对象的函数指针定义。

typedef VkResult(VKAPI_PTR * 
PFN_HMS_XEG_CmdRenderRTGI
) (VkCommandBuffer commandBuffer, 
XEG_RTGI
 rtGI, const void *pDescription)

执行渲染命令的函数指针定义。

VK_DEFINE_HANDLE(
XEG_SpatialUpscale
)

XEG_SpatialUpscale
的句柄。

typedef struct 
XEG_SpatialUpscaleCreateInfo

XEG_SpatialUpscaleCreateInfo

此结构体描述创建
XEG_SpatialUpscale
对象的信息，当结构体中的信息变化时，需要创建新的
XEG_SpatialUpscale
对象。

typedef struct 
XEG_SpatialUpscaleDescription

XEG_SpatialUpscaleDescription

此结构体描述下发空域GPU超分渲染命令时需要的图像信息。

typedef VkResult(VKAPI_PTR * 
PFN_HMS_XEG_CreateSpatialUpscale
) (VkDevice device, const 
XEG_SpatialUpscaleCreateInfo
 *pXegSpatialUpscaleCreateInfo, 
XEG_SpatialUpscale
 *pXegSpatialUpscale)

创建
XEG_SpatialUpscale
对象的函数指针定义。

typedef void(VKAPI_PTR * 
PFN_HMS_XEG_CmdRenderSpatialUpscale
) (VkCommandBuffer commandBuffer, 
XEG_SpatialUpscale
 xegSpatialUpscale, 
XEG_SpatialUpscaleDescription
 *pXegSpatialUpscaleDescription)

执行空域GPU超分渲染命令的函数指针定义。

typedef void(VKAPI_PTR * 
PFN_HMS_XEG_DestroySpatialUpscale
) (
XEG_SpatialUpscale
 xegSpatialUpscale)

销毁
XEG_SpatialUpscale
对象的函数指针定义。

VK_DEFINE_HANDLE(
XEG_TemporalUpscale
)

XEG_TemporalUpscale
的句柄。

typedef struct 
XEG_TemporalUpscaleCreateInfo

XEG_TemporalUpscaleCreateInfo

此结构体描述创建
XEG_TemporalUpscale
对象的信息。当结构体中的信息变化时，需要创建新的
XEG_TemporalUpscale
对象。

typedef struct 
XEG_TemporalUpscaleDescription

XEG_TemporalUpscaleDescription

此结构体描述下发时域AI超分渲染命令时的输入信息。

typedef VkResult(VKAPI_ATTR * 
PFN_HMS_XEG_CreateTemporalUpscale
) (VkDevice device, 
XEG_TemporalUpscaleCreateInfo
 *pTemporalUpscaleInfo, 
XEG_TemporalUpscale
 *pTemporalUpscale)

创建
XEG_TemporalUpscale
对象的函数指针定义。

typedef void(VKAPI_ATTR * 
PFN_HMS_XEG_CmdRenderTemporalUpscale
) (VkCommandBuffer commandBuffer, 
XEG_TemporalUpscale
 temporalUpscale, 
XEG_TemporalUpscaleDescription
 *pDescription)

录制时域AI超分渲染命令的函数指针定义。

typedef void(VKAPI_ATTR * 
PFN_HMS_XEG_DestroyTemporalUpscale
) (
XEG_TemporalUpscale
 temporalUpscale)

销毁
XEG_TemporalUpscale
对象的函数指针定义。

[h2]枚举

名称

描述

XEG_StructureType
 {

XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO = 0, XEG_STRUCTURE_TYPE_RT_SHADOWAO_DESCRIPTION = 1, XEG_STRUCTURE_TYPE_RT_REFLECTION_CREATE_INFO = 2, XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION = 3,

XEG_STRUCTURE_TYPE_NNGI_CREATE_INFO = 4, XEG_STRUCTURE_TYPE_NNGI_DESCRIPTION = 5, XEG_STRUCTURE_TYPE_DDGI_CREATE_INFO = 6, XEG_STRUCTURE_TYPE_DDGI_DESCRIPTION = 7,

XEG_STRUCTURE_TYPE_HPS_CREATE_INFO = 1001, XEG_STRUCTURE_TYPE_HPS_RADIX_SORT = 1002, XEG_STRUCTURE_TYPE_HPS_RADIX_SORT_DESCRIPTION = 1003

}

XEngine结构体类型的枚举。

XEG_DenoiseQualityMode
 { XEG_DENOISE_QUALITY_MODE_NONE = 0, XEG_DENOISE_QUALITY_MODE_QUALITY = 1, XEG_DENOISE_QUALITY_MODE_BALANCED = 2, XEG_DENOISE_QUALITY_MODE_PERFORMANCES = 3 }

去噪质量模式枚举。

XEG_TraversalMode
 { XEG_TRAVERSAL_MODE_DEFAULT = 0, XEG_TRAVERSAL_MODE_PERFORMANCES = 1 }

遍历模式枚举。

XEG_RTGIQualityMode
 { XEG_RTGI_QUALITY_MODE_QUALITY = 0, XEG_RTGI_QUALITY_MODE_BALANCED = 1, XEG_RTGI_QUALITY_MODE_PERFORMANCE = 2 }

输出图像质量模式的枚举。

[h2]函数

名称

描述

GL_APICALL void GL_APIENTRY 
HMS_XEG_AdaptiveVRSParameter
 (GLenum pname, GLvoid *param)

设置自适应VRS的参数。

GL_APICALL void GL_APIENTRY 
HMS_XEG_DispatchAdaptiveVRS
 (GLfloat *reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)

计算着色率图像。

GL_APICALL void GL_APIENTRY 
HMS_XEG_ApplyAdaptiveVRS
 (GLuint shadingRateImage)

将着色率图像应用到渲染目标中。

const GLubyte * 
HMS_XEG_GetString
 (GLenum name)

XEngine OpenGL ES扩展特性查询接口。

GL_APICALL void GL_APIENTRY 
HMS_XEG_NeuralUpscaleParameter
 (GLenum pname, GLvoid *param)

设置空域AI超分输入参数。

GL_APICALL void GL_APIENTRY 
HMS_XEG_RenderNeuralUpscale
 (GLuint inputTexture)

执行空域AI超分渲染命令。

GL_APICALL void GL_APIENTRY 
HMS_XEG_SpatialUpscaleParameter
 (GLenum pname, GLvoid *param)

设置空域GPU超分输入参数。

GL_APICALL void GL_APIENTRY 
HMS_XEG_RenderSpatialUpscale
 (GLuint inputTexture)

执行空域GPU超分渲染命令。

GL_APICALL void GL_APIENTRY 
HMS_XEG_TemporalUpscaleParameter
 (GLenum pname, const GLvoid *param)

设置时域AI超分输入参数。

GL_APICALL void GL_APIENTRY 
HMS_XEG_RenderTemporalUpscale
 (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY)

执行时域AI超分渲染命令。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CreateAdaptiveVRS
 (VkDevice device, 
XEG_AdaptiveVRSCreateInfo
 *pXegAdaptiveVRSCreateInfo, 
XEG_AdaptiveVRS
 *pXegAdaptiveVRS)

创建
XEG_AdaptiveVRS
对象。

VKAPI_ATTR void VKAPI_CALL 
HMS_XEG_CmdDispatchAdaptiveVRS
 (VkCommandBuffer commandBuffer, 
XEG_AdaptiveVRS
 xegAdaptiveVRS, 
XEG_AdaptiveVRSDescription
 *pXegAdaptiveVRSDescription)

执行计算自适应可变着色率命令。

VKAPI_ATTR void VKAPI_CALL 
HMS_XEG_DestroyAdaptiveVRS
 (
XEG_AdaptiveVRS
 xegAdaptiveVRS)

销毁
XEG_AdaptiveVRS
对象。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CmdSetSynchronization
 (VkCommandBuffer commandBuffer, const void *xegHandle)

设置同步信号，等待渲染结果写入指定图像。使用RTGI特性时，为等待GI渲染结果写入指定图像。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_EnumerateDeviceExtensionProperties
 (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, 
XEG_ExtensionProperties
 *pProperties)

XEngine Vulkan扩展特性查询接口。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CreateHPS
 (VkDevice device, const 
XEG_HPSCreateInfo
 *pCreateInfo, 
XEG_HPS
 *pHps)

创建
XEG_HPS
对象。

VKAPI_ATTR void VKAPI_CALL 
HMS_XEG_DestroyHPS
 (
XEG_HPS
 hps)

销毁
XEG_HPS
对象。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CmdRadixSortHPS
 (VkCommandBuffer commandBuffer, 
XEG_HPS
 hps, const 
XEG_HPSRadixSortDescription
 *pDescription)

录制HPS排序命令，使用此接口前需要通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询是否支持
XEG_HPS_RADIX_SORT_EXTENSION_NAME
扩展。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CreateRTReflection
 (VkDevice device, const void *pCreateInfo, 
XEG_RTReflection
 *pRtReflection)

创建
XEG_RTReflection
对象。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CmdRenderRTReflection
 (VkCommandBuffer commandBuffer, 
XEG_RTReflection
 rtReflection, const void *pDescription)

录制计算RT反射命中信息命令。

VKAPI_ATTR void VKAPI_CALL 
HMS_XEG_DestroyRTReflection
 (
XEG_RTReflection
 rtReflection)

销毁
XEG_RTReflection
对象。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CreateRTVisibleMask
 (VkDevice device, const void *pCreateInfo, 
XEG_RTVisibleMask
 *pRTVisibleMask)

创建
XEG_RTVisibleMask
对象。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CmdRenderRTVisibleMask
 (VkCommandBuffer commandBuffer, 
XEG_RTVisibleMask
 rtVisibleMask, const void *pDescription)

录制光线追踪VisibleMask渲染命令。

VKAPI_ATTR void VKAPI_CALL 
HMS_XEG_DestroyRTVisibleMask
 (
XEG_RTVisibleMask
 rtVisibleMask)

销毁
XEG_RTVisibleMask
对象。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CreateRTGI
 (VkDevice device, const void *pCreateInfo, 
XEG_RTGI
 *pRtGI)

创建
XEG_RTGI
对象。

VKAPI_ATTR void VKAPI_CALL 
HMS_XEG_DestroyRTGI
 (
XEG_RTGI
 rtGI)

销毁
XEG_RTGI
对象。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CmdRenderRTGI
 (VkCommandBuffer commandBuffer, 
XEG_RTGI
 rtGI, const void *pDescription)

执行渲染命令。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CreateSpatialUpscale
 (VkDevice device, const 
XEG_SpatialUpscaleCreateInfo
 *pXegSpatialUpscaleCreateInfo, 
XEG_SpatialUpscale
 *pXegSpatialUpscale)

创建
XEG_SpatialUpscale
对象。

VKAPI_ATTR void VKAPI_CALL 
HMS_XEG_CmdRenderSpatialUpscale
 (VkCommandBuffer commandBuffer, 
XEG_SpatialUpscale
 xegSpatialUpscale, 
XEG_SpatialUpscaleDescription
 *pXegSpatialUpscaleDescription)

执行空域GPU超分渲染命令。

VKAPI_ATTR void VKAPI_CALL 
HMS_XEG_DestroySpatialUpscale
 (
XEG_SpatialUpscale
 xegSpatialUpscale)

销毁
XEG_SpatialUpscale
对象。

VKAPI_ATTR VkResult VKAPI_CALL 
HMS_XEG_CreateTemporalUpscale
 (VkDevice device, 
XEG_TemporalUpscaleCreateInfo
 *pTemporalUpscaleInfo, 
XEG_TemporalUpscale
 *pTemporalUpscale)

创建
XEG_TemporalUpscale
对象。

VKAPI_ATTR void VKAPI_CALL 
HMS_XEG_CmdRenderTemporalUpscale
 (VkCommandBuffer commandBuffer, 
XEG_TemporalUpscale
 temporalUpscale, 
XEG_TemporalUpscaleDescription
 *pDescription)

录制时域AI超分渲染命令。

VKAPI_ATTR void VKAPI_CALL 
HMS_XEG_DestroyTemporalUpscale
 (
XEG_TemporalUpscale
 temporalUpscale)

销毁
XEG_TemporalUpscale
对象。

宏定义说明

[h2]XEG_adaptive_vrs

#define XEG_adaptive_vrs 1

描述

XEngine自适应VRS扩展特性宏定义。

起始版本：
 5.0.0(12)

[h2]XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY

#define XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY 0x4U

描述

用于设置
HMS_XEG_AdaptiveVRSParameter
接口的ERROR_SENSITIVITY参数，表示控制生成着色率图像的阈值。该值越大，平均着色率越小，即性能会越好但画质会劣化。建议取值范围为[0, 1]。

使用此宏定义时通过
HMS_XEG_AdaptiveVRSParameter
接口设置ERROR_SENSITIVITY参数，向接口传递的param必须是GLfloat指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为0.5。

起始版本：
 5.0.0(12)

[h2]XEG_ADAPTIVE_VRS_EXTENSION_NAME

#define XEG_ADAPTIVE_VRS_EXTENSION_NAME "XEG_adaptive_vrs"

描述

XEngine自适应VRS扩展特性名称。

起始版本：
 5.0.0(12)

[h2]XEG_ADAPTIVE_VRS_FLIP

#define XEG_ADAPTIVE_VRS_FLIP 0x5U

描述

用于设置
HMS_XEG_AdaptiveVRSParameter
接口的FLIP参数，该参数用于控制是否执行图像上下翻转。

使用此宏定义时通过
HMS_XEG_AdaptiveVRSParameter
接口设置FLIP参数，向接口传递的param必须是GLboolean指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为false。true表示执行上下翻转，false表示不执行上下翻转。

起始版本：
 5.0.0(12)

[h2]XEG_ADAPTIVE_VRS_INPUT_REGION

#define XEG_ADAPTIVE_VRS_INPUT_REGION 0x2U

描述

用于设置
HMS_XEG_AdaptiveVRSParameter
接口的INPUT_REGION参数，表示上一帧渲染管线最终渲染的图像区域。

使用此宏定义时通过
HMS_XEG_AdaptiveVRSParameter
接口设置INPUT_REGION参数，向接口传递的param必须是长度为4的GLuint类型数组，依次为渲染图像区域左下角的坐标和渲染图像区域的宽高，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为[0, 0, INPUT_SIZE[0], INPUT_SIZE[1]]。

起始版本：
 5.0.0(12)

[h2]XEG_ADAPTIVE_VRS_INPUT_SIZE

#define XEG_ADAPTIVE_VRS_INPUT_SIZE 0x1U

描述

用于设置
HMS_XEG_AdaptiveVRSParameter
接口的INPUT_SIZE参数，表示上一帧渲染管线最终渲染的图像宽度和高度。

使用此宏定义时通过
HMS_XEG_AdaptiveVRSParameter
接口设置INPUT_SIZE参数，向接口传递的param必须是长度为2的GLsizei类型数组，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 必填参数，且需要保证和
HMS_XEG_DispatchAdaptiveVRS
的inputColorImage宽高相同。

起始版本：
 5.0.0(12)

[h2]XEG_ADAPTIVE_VRS_TEXEL_SIZE

#define XEG_ADAPTIVE_VRS_TEXEL_SIZE 0x3U

描述

用于设置
HMS_XEG_AdaptiveVRSParameter
接口的TEXEL_SIZE参数。

使用此宏定义时通过
HMS_XEG_AdaptiveVRSParameter
接口设置TEXEL_SIZE参数，向接口传递的param必须是长度为2的GLsizei类型数组，依次为TEXEL_WIDTH和TEXEL_HEIGHT，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为[8, 8]，支持[8, 8]和[16, 16]。

起始版本：
 5.0.0(12)

[h2]XEG_ADAPTIVE_VRS_VERSION

#define XEG_ADAPTIVE_VRS_VERSION 1

描述

XEngine自适应VRS扩展特性版本号。

起始版本：
 5.0.0(12)

[h2]XEG_EXTENSIONS

#define XEG_EXTENSIONS 0x01U

描述

作为
HMS_XEG_GetString
接口的入参，以获取XEngine支持的OpenGL ES扩展特性。

起始版本：
 5.0.0(12)

[h2]XEG_HPS_RADIX_SORT_EXTENSION_NAME

#define XEG_HPS_RADIX_SORT_EXTENSION_NAME "XEG_hps_radix_sort"

描述

XEngine 高性能基数排序扩展特性名称。

起始版本：
 6.0.0(20)

[h2]XEG_MAX_EXTENSION_NAME_SIZE

#define XEG_MAX_EXTENSION_NAME_SIZE 256

描述

XEngine扩展特性名称支持的最大长度。

起始版本：
 5.0.0(12)

[h2]XEG_neural_upscale

#define XEG_neural_upscale 1

描述

XEngine空域AI超分扩展特性宏定义。

起始版本：
 5.0.0(12)

[h2]XEG_NEURAL_UPSCALE_EXTENSION_NAME

#define XEG_NEURAL_UPSCALE_EXTENSION_NAME "XEG_neural_upscale"

描述

XEngine空域AI超分扩展特性名称。

起始版本：
 5.0.0(12)

[h2]XEG_NEURAL_UPSCALE_INPUT_HANDLE

#define XEG_NEURAL_UPSCALE_INPUT_HANDLE 0x4U

描述

用于通过
HMS_XEG_NeuralUpscaleParameter
接口设置与超分输入纹理关联的OH_NativeBuffer handle。

使用此宏定义设置超分输入参数时，向接口传递的param值必须是与向
HMS_XEG_RenderNeuralUpscale
接口传递的inputTexture纹理参数对应的合法的OH_NativeBuffer handle，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 必选参数。

起始版本：
 5.0.0(12)

[h2]XEG_NEURAL_UPSCALE_SCISSOR

#define XEG_NEURAL_UPSCALE_SCISSOR 0x1U

描述

用于通过
HMS_XEG_NeuralUpscaleParameter
接口设置超分的裁剪窗口参数，裁剪窗口用于确定对输入图像采样的区域。

使用此宏定义设置裁剪窗口参数时，向接口传递的param值必须是长度为4的无符号整数数组，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。数组中的值依次为：x， y， width， height，其中x、y确定裁剪窗口的左下角，width、height分别确定裁剪窗口的宽和高。 可选参数，不设置裁剪窗口参数时的默认值为（0， 0， 输入纹理的宽， 输入纹理的高）。

起始版本：
 5.0.0(12)

[h2]XEG_NEURAL_UPSCALE_SHARPNESS

#define XEG_NEURAL_UPSCALE_SHARPNESS 0x2U

描述

用于通过
HMS_XEG_NeuralUpscaleParameter
接口设置超分的锐化度参数，锐化度的建议取值范围为[0, 1]。

使用此宏定义设置超分的锐化度参数时，向接口传递的param值必须是指向一个float值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，不设置锐化度参数时的默认值为0.2。

起始版本：
 5.0.0(12)

[h2]XEG_NEURAL_UPSCALE_VERSION

#define XEG_NEURAL_UPSCALE_VERSION 1

描述

XEngine空域AI超分扩展特性版本号。

起始版本：
 5.0.0(12)

[h2]XEG_RT_REFLECTION_EXTENSION_NAME

#define XEG_RT_REFLECTION_EXTENSION_NAME "XEG_rt_reflection"

描述

XEngine光线追踪反射扩展特性名称。

起始版本：
 6.0.0(20)

[h2]XEG_RT_SHADOW_AO_EXTENSION_NAME

#define XEG_RT_SHADOW_AO_EXTENSION_NAME "XEG_rt_shadow_ao"

描述

XEngine光线追踪阴影和环境光遮蔽扩展特性名称。

起始版本：
 6.0.0(20)

[h2]XEG_RTGI_EXTENSION_NAME

#define XEG_RTGI_EXTENSION_NAME "XEG_rtgi"

描述

XEngine光线追踪全局光照扩展特性名称。

起始版本：
 6.0.0(20)

[h2]XEG_spatial_upscale

#define XEG_spatial_upscale 1

描述

XEngine空域GPU超分扩展特性宏定义。

起始版本：
 5.0.0(12)

[h2]XEG_SPATIAL_UPSCALE_EXTENSION_NAME

#define XEG_SPATIAL_UPSCALE_EXTENSION_NAME "XEG_spatial_upscale"

描述

XEngine空域GPU超分扩展特性名称。

起始版本：
 5.0.0(12)

[h2]XEG_SPATIAL_UPSCALE_SCISSOR

#define XEG_SPATIAL_UPSCALE_SCISSOR 0x1U

描述

用于设置
HMS_XEG_SpatialUpscaleParameter
接口的SCISSOR参数。

使用此宏定义时通过
HMS_XEG_SpatialUpscaleParameter
接口设置SCISSOR参数，向接口传递的param值必须是指向长度为4的无符号整数数组的指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 SCISSOR四个值依次为裁剪窗口的左下角点的x与y的值和裁剪窗口的宽高。

起始版本：
 5.0.0(12)

[h2]XEG_SPATIAL_UPSCALE_SHARPNESS

#define XEG_SPATIAL_UPSCALE_SHARPNESS 0x2U

描述

用于设置
HMS_XEG_SpatialUpscaleParameter
接口的SHARPNESS参数。

使用此宏定义时通过
HMS_XEG_SpatialUpscaleParameter
接口设置SHARPNESS参数，向接口传递的param值必须是指向float类型的指针。SHARPNESS参数建议取值范围为[0, 1]，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 SHARPNESS参数越大锐化效果越强，不同风格图像锐化值需要调整，否则会导致过度锐化现象，如出现大量噪点。

起始版本：
 5.0.0(12)

[h2]XEG_SPATIAL_UPSCALE_VERSION

#define XEG_SPATIAL_UPSCALE_VERSION 1

描述

XEngine空域GPU超分扩展特性版本号。

起始版本：
 5.0.0(12)

[h2]XEG_temporal_upscale

#define XEG_temporal_upscale 1

描述

XEngine时域AI超分扩展特性宏定义。

起始版本：
 5.0.0(12)

[h2]XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED

#define XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED 0x3U

描述

用于通过
HMS_XEG_TemporalUpscaleParameter
接口设置是否存在深度反转。true表示存在深度反转，false表示不存在深度反转。

使用此宏定义设置是否存在深度反转时，向接口传递的param值必须是指向一个GLboolean值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。必选参数。

起始版本：
 6.0.0(20)

[h2]XEG_TEMPORAL_UPSCALE_EXTENSION_NAME

#define XEG_TEMPORAL_UPSCALE_EXTENSION_NAME "XEG_temporal_upscale"

描述

XEngine时域AI超分扩展特性名称。

起始版本：
 5.0.0(12)

[h2]XEG_TEMPORAL_UPSCALE_INPUT_SIZE

#define XEG_TEMPORAL_UPSCALE_INPUT_SIZE 0x1U

描述

用于通过
HMS_XEG_TemporalUpscaleParameter
接口设置超分输入纹理的真实宽高。

使用此宏定义设置输入宽高时，向接口传递的param值必须是长度为2的无符号整数数组，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。数组中的值依次为：width, height。width和height分别确定输入纹理的宽和高。必选参数。

起始版本：
 6.0.0(20)

[h2]XEG_TEMPORAL_UPSCALE_JITTER_NUM

#define XEG_TEMPORAL_UPSCALE_JITTER_NUM 0x2U

描述

用于通过
HMS_XEG_TemporalUpscaleParameter
接口设置相机抖动的周期数，取值范围为[4, 16]，推荐8。

使用此宏定义设置相机抖动的周期数时，向接口传递的param值必须是指向一个GLuint值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。必选参数。

起始版本：
 6.0.0(20)

[h2]XEG_TEMPORAL_UPSCALE_RESET_HISTORY

#define XEG_TEMPORAL_UPSCALE_RESET_HISTORY 0x4U

描述

用于通过
HMS_XEG_TemporalUpscaleParameter
接口设置是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，并且当前帧开始使用超分的情况下建议设置为true。

使用此宏定义设置是否重置历史帧数据时，向接口传递的param值必须是指向一个GLboolean值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。必选参数。

起始版本：
 6.0.0(20)

[h2]XEG_TEMPORAL_UPSCALE_STEADY_LEVEL

#define XEG_TEMPORAL_UPSCALE_STEADY_LEVEL 0x5U

描述

用于通过
HMS_XEG_TemporalUpscaleParameter
接口设置画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。取值范围为[0.0, 1.0]，值越大越偏向历史帧。

使用此宏定义设置平衡程度时，向接口传递的param值必须是指向一个GLfloat值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。可选参数，默认值是0.5。

起始版本：
 6.0.0(20)

[h2]XEG_TEMPORAL_UPSCALE_VERSION

#define XEG_TEMPORAL_UPSCALE_VERSION 1

描述

XEngine时域AI超分扩展特性版本号。

起始版本：
 5.0.0(12)

类型定义说明

[h2]PFN_HMS_XEG_ADAPTIVEVRSPARAMETER

typedef void(GL_APIENTRYP PFN_HMS_XEG_ADAPTIVEVRSPARAMETER) (GLenum pname, GLvoid *param)

描述

设置自适应VRS输入参数的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

pname

输入参数的枚举名，取值范围是
XEG_ADAPTIVE_VRS_INPUT_SIZE
、
XEG_ADAPTIVE_VRS_INPUT_REGION
、
XEG_ADAPTIVE_VRS_TEXEL_SIZE
、
XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY
、
XEG_ADAPTIVE_VRS_FLIP
。

param

输入参数值，取值详见输入参数枚举名的说明。

[h2]PFN_HMS_XEG_APPLYADAPTIVEVRS

typedef void(GL_APIENTRYP PFN_HMS_XEG_APPLYADAPTIVEVRS) (GLuint shadingRateImage)

描述

将着色率图像应用到渲染目标中的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

shadingRateImage

计算得到的着色率图像，传入0表示关闭自适应VRS。

[h2]PFN_HMS_XEG_CmdDispatchAdaptiveVRS

typedef void(VKAPI_PTR * PFN_HMS_XEG_CmdDispatchAdaptiveVRS) (VkCommandBuffer commandBuffer, XEG_AdaptiveVRS xegAdaptiveVRS, XEG_AdaptiveVRSDescription *pXegAdaptiveVRSDescription)

描述

执行计算自适应可变着色率命令的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

commandBuffer

当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。

xegAdaptiveVRS

已创建的
XEG_AdaptiveVRS
对象。

pXegAdaptiveVRSDescription

下发命令的参数结构体
XEG_AdaptiveVRSDescription
的指针，不允许为空。

[h2]PFN_HMS_XEG_CmdRadixSortHPS

typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CmdRadixSortHPS) (VkCommandBuffer commandBuffer, XEG_HPS hps, const XEG_HPSRadixSortDescription *pDescription)

描述

录制HPS排序命令的函数指针定义，使用此接口前需要通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询是否支持
XEG_HPS_RADIX_SORT_EXTENSION_NAME
扩展。

起始版本：
 6.0.0(20)

参数:

名称

描述

commandBuffer

Vulkan命令缓冲对象。

hps

已创建的
XEG_HPS
对象。

pDescription

XEG_HPS_RADIX_SORT_EXTENSION_NAME
扩展输入信息结构体
XEG_HPSRadixSortDescription
的指针，不允许为空。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]PFN_HMS_XEG_CmdRenderRTGI

typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CmdRenderRTGI) (VkCommandBuffer commandBuffer, XEG_RTGI rtGI, const void *pDescription)

描述

执行渲染命令的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

commandBuffer

当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。

rtGI

已创建的
XEG_RTGI
对象。

pDescription

执行渲染命令的信息结构体的指针，若使用DDGI渲染，为结构体
XEG_DDGIDescription
的指针，若使用NNGI渲染，为结构体
XEG_NNGIDescription
的指针，不允许为空。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]PFN_HMS_XEG_CmdRenderRTReflection

typedef VkResult VKAPI_ATTR* PFN_HMS_XEG_CmdRenderRTReflection(VkCommandBuffer commandBuffer, XEG_RTReflection rtReflection, const void *pDescription)

描述

录制计算RT反射命中信息命令的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

commandBuffer

Vulkan命令缓冲对象，需要是Primary类型。

rtReflection

已创建的
XEG_RTReflection
对象。

pDescription

反射渲染输入信息结构体
XEG_RTReflectionDescription
的指针，不允许为空。

[h2]PFN_HMS_XEG_CmdRenderRTVisibleMask

typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CmdRenderRTVisibleMask) (VkCommandBuffer commandBuffer, XEG_RTVisibleMask rtVisibleMask, const void *pDescription)

描述

录制光线追踪VisibleMask渲染命令的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

commandBuffer

Vulkan命令缓冲对象。

rtVisibleMask

已创建的
XEG_RTVisibleMask
对象。

pDescription

执行渲染命令的输入参数结构体指针，当前仅支持
XEG_RTShadowAODescription
类型的指针，不允许为空。

返回：

VkResult类型的错误码，值为VK_SUCCESS时表示执行成功。

[h2]PFN_HMS_XEG_CmdRenderSpatialUpscale

typedef void(VKAPI_PTR * PFN_HMS_XEG_CmdRenderSpatialUpscale) (VkCommandBuffer commandBuffer, XEG_SpatialUpscale xegSpatialUpscale, XEG_SpatialUpscaleDescription *pXegSpatialUpscaleDescription)

描述

执行空域GPU超分渲染命令的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

commandBuffer

当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行超分。

xegSpatialUpscale

已创建的
XEG_SpatialUpscale
对象。

pXegSpatialUpscaleDescription

渲染命令的参数结构体
XEG_SpatialUpscaleDescription
的指针，不允许为空。

[h2]PFN_HMS_XEG_CmdRenderTemporalUpscale

typedef void(VKAPI_ATTR * PFN_HMS_XEG_CmdRenderTemporalUpscale) (VkCommandBuffer commandBuffer, XEG_TemporalUpscale temporalUpscale, XEG_TemporalUpscaleDescription *pDescription)

描述

录制时域AI超分渲染命令的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

commandBuffer

Vulkan命令缓冲对象，需要是Primary类型。

temporalUpscale

已创建的
XEG_TemporalUpscale
对象。

pDescription

超分渲染输入信息结构体
XEG_TemporalUpscaleDescription
的指针，不允许为空。

[h2]PFN_HMS_XEG_CmdSetSynchronization

typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CmdSetSynchronization) (VkCommandBuffer commandBuffer, const void *xegHandle)

描述

设置同步信号，等待渲染结果写入指定图像的函数指针定义。使用RTGI特性时，为等待GI渲染结果到写入指定图像。

起始版本：
 6.0.0(20)

参数:

名称

描述

commandBuffer

当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。

xegHandle

已创建句柄对象。使用RTGI特性时，为已创建的
XEG_RTGI
对象。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]PFN_HMS_XEG_CreateAdaptiveVRS

typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CreateAdaptiveVRS) (VkDevice device, const XEG_AdaptiveVRSCreateInfo *pXegAdaptiveVRSCreateInfo, XEG_AdaptiveVRS *pXegAdaptiveVRS)

描述

创建
XEG_AdaptiveVRS
对象的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pXegAdaptiveVRSCreateInfo

结构体
XEG_AdaptiveVRSCreateInfo
的指针，不允许为空。

pXegAdaptiveVRS

指向句柄的指针，创建的
XEG_AdaptiveVRS
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]PFN_HMS_XEG_CreateHPS

typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CreateHPS) (VkDevice device, const XEG_HPSCreateInfo *pCreateInfo, XEG_HPS *pHps)

描述

创建
XEG_HPS
对象的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pCreateInfo

XEG_HPS
实例句柄创建信息结构体的指针。不允许为空。

pHps

指向HPS实例句柄的指针，创建的
XEG_HPS
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]PFN_HMS_XEG_CreateRTGI

typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CreateRTGI) (VkDevice device, const void *pCreateInfo, XEG_RTGI *pRtGI)

描述

创建
XEG_RTGI
对象的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pCreateInfo

创建
XEG_RTGI
对象的信息结构体的指针，若创建DDGI句柄，为结构体
XEG_DDGICreateInfo
的指针，若创建NNGI句柄，为结构体
XEG_NNGICreateInfo
的指针，不允许为空。

pRtGI

指向句柄的指针，创建的
XEG_RTGI
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]PFN_HMS_XEG_CreateRTReflection

typedef VkResult(VKAPI_ATTR * PFN_HMS_XEG_CreateRTReflection) (VkDevice device, const void *pCreateInfo, XEG_RTReflection *pRtReflection)

描述

创建
XEG_RTReflection
对象的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pCreateInfo

反射实例句柄创建信息结构体的指针，当前仅支持
XEG_RTReflectionCreateInfo
类型的指针，不允许为空。

pRtReflection

指向反射实例句柄的指针，创建的
XEG_RTReflection
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]PFN_HMS_XEG_CreateRTVisibleMask

typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CreateRTVisibleMask) (VkDevice device, const void *pCreateInfo, XEG_RTVisibleMask *pRTVisibleMask)

描述

创建
XEG_RTVisibleMask
对象的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pCreateInfo

创建VisibleMask实例句柄所需描述信息的结构体的指针，当前仅支持
XEG_RTShadowAOCreateInfo
类型的指针，不允许为空。

pRTVisibleMask

指向VisibleMask实例句柄的指针，创建的
XEG_RTVisibleMask
在此句柄中返回。

返回：

VkResult类型的错误码，值为VK_SUCCESS时表示创建成功。

[h2]PFN_HMS_XEG_CreateSpatialUpscale

typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CreateSpatialUpscale) (VkDevice device, const XEG_SpatialUpscaleCreateInfo *pXegSpatialUpscaleCreateInfo, XEG_SpatialUpscale *pXegSpatialUpscale)

描述

创建
XEG_SpatialUpscale
对象的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pXegSpatialUpscaleCreateInfo

结构体
XEG_SpatialUpscaleCreateInfo
的指针，不允许为空。

pXegSpatialUpscale

指向句柄的指针，创建的
XEG_SpatialUpscale
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]PFN_HMS_XEG_CreateTemporalUpscale

typedef VkResult(VKAPI_ATTR * PFN_HMS_XEG_CreateTemporalUpscale) (VkDevice device, XEG_TemporalUpscaleCreateInfo *pTemporalUpscaleInfo, XEG_TemporalUpscale *pTemporalUpscale)

描述

创建
XEG_TemporalUpscale
对象的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pTemporalUpscaleInfo

超分实例句柄创建信息结构体
XEG_TemporalUpscaleCreateInfo
的指针，不允许为空。

pTemporalUpscale

指向句柄的指针，创建的
XEG_TemporalUpscale
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]PFN_HMS_XEG_DestroyAdaptiveVRS

typedef void(VKAPI_PTR * PFN_HMS_XEG_DestroyAdaptiveVRS) (XEG_AdaptiveVRS xegAdaptiveVRS)

描述

销毁
XEG_AdaptiveVRS
对象的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

xegAdaptiveVRS

已创建的
XEG_AdaptiveVRS
对象。

[h2]PFN_HMS_XEG_DestroyHPS

typedef void(VKAPI_PTR * PFN_HMS_XEG_DestroyHPS) (XEG_HPS hps)

描述

销毁
XEG_HPS
对象的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

hps

需要销毁的
XEG_HPS
对象。

[h2]PFN_HMS_XEG_DestroyRTGI

typedef void(VKAPI_PTR * PFN_HMS_XEG_DestroyRTGI) (XEG_RTGI rtGI)

描述

销毁
XEG_RTGI
对象的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

rtGI

已创建的
XEG_RTGI
对象。

[h2]PFN_HMS_XEG_DestroyRTReflection

typedef void VKAPI_ATTR* PFN_HMS_XEG_DestroyRTReflection(XEG_RTReflection rtReflection)

描述

销毁
XEG_RTReflection
对象的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

rtReflection

需要销毁的
XEG_RTReflection
对象。

[h2]PFN_HMS_XEG_DestroyRTVisibleMask

typedef void(VKAPI_PTR * PFN_HMS_XEG_DestroyRTVisibleMask) (XEG_RTVisibleMask rtVisibleMask)

描述

销毁
XEG_RTVisibleMask
对象的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

rtVisibleMask

需要销毁的
XEG_RTVisibleMask
对象。

[h2]PFN_HMS_XEG_DestroySpatialUpscale

typedef void(VKAPI_PTR * PFN_HMS_XEG_DestroySpatialUpscale) (XEG_SpatialUpscale xegSpatialUpscale)

描述

销毁
XEG_SpatialUpscale
对象的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

xegSpatialUpscale

已创建的
XEG_SpatialUpscale
对象。

[h2]PFN_HMS_XEG_DestroyTemporalUpscale

typedef void(VKAPI_ATTR * PFN_HMS_XEG_DestroyTemporalUpscale) (XEG_TemporalUpscale temporalUpscale)

描述

销毁
XEG_TemporalUpscale
对象的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

temporalUpscale

需要销毁的
XEG_TemporalUpscale
对象。

[h2]PFN_HMS_XEG_DISPATCHADAPTIVEVRS

typedef void(GL_APIENTRYP PFN_HMS_XEG_DISPATCHADAPTIVEVRS) (GLfloat *reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)

描述

计算着色率图像的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

reprojectionMatrix

当前帧和上一帧进行计算的结果矩阵的指针，计算公式为：（上一帧投影矩阵* 上一帧的观察矩阵）* （（当前帧的投影矩阵* 当前帧的观察矩阵）的逆矩阵），矩阵必须是4*4列主序的矩阵。可选参数，非空时画质较优。

inputColorImage

上一帧渲染管线最终渲染结果颜色附件纹理ID。

inputDepthImage

当前帧渲染管线最终渲染结果深度附件纹理ID。

shadingRateImage

用于生成着色率图信息的纹理ID，需用户创建并输入。

纹理类型需要是GL_TEXTURE_2D且mipLevels为1。

[h2]PFN_HMS_XEG_EnumerateDeviceExtensionProperties

typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_EnumerateDeviceExtensionProperties) (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, XEG_ExtensionProperties *pProperties)

描述

XEngine Vulkan扩展特性查询接口函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

physicalDevice

当前使用的Vulkan物理设备。

pPropertyCount

查询或传入扩展特性的数量，当
pProperties
为nullptr时返回当前支持的XEngine扩展特性数量。 当传入的
propertyCount
大于或等于真实支持的XEngine扩展特性数量时，通过
pProperties
返回查询信息，返回结果为VK_SUCCESS。 当传入的
propertyCount
小于真实支持的XEngine扩展特性数量时，通过
pProperties
返回查询信息，但返回结果为VK_INCOMPLETE。

pProperties

查询到的XEngine扩展特性，通过结构体
XEG_ExtensionProperties
指针返回。

返回：

返回VkResult类型错误码，查询成功时返回值为VK_SUCCESS。 当
pProperties
不为nullptr且传入的
propertyCount
小于实际支持的XEngine扩展特性数量时返回值为VK_INCOMPLETE，表示查询特性不完整。

[h2]PFN_HMS_XEG_GETSTRING

typedef const GLubyte *(GL_APIENTRYP PFN_HMS_XEG_GETSTRING) (GLenum name)

描述

XEngine OpenGL ES扩展特性查询接口函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

name

输入参数的枚举名，取值范围为
XEG_EXTENSIONS
。

返回：

当参数为
XEG_EXTENSIONS
时，返回XEngine支持的空格分隔的扩展列表，注意扩展名不包含空格字符。查询结果异常则返回空。

[h2]PFN_HMS_XEG_NEURALUPSCALEPARAMETER

typedef void(GL_APIENTRYP PFN_HMS_XEG_NEURALUPSCALEPARAMETER) (GLenum pname, GLvoid *param)

描述

设置空域AI超分输入参数的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

pname

输入参数的枚举名，取值范围为
XEG_NEURAL_UPSCALE_SCISSOR
、
XEG_NEURAL_UPSCALE_SHARPNESS
、
XEG_NEURAL_UPSCALE_INPUT_HANDLE
。

param

输入参数的值，取值详见输入参数枚举名的说明。

[h2]PFN_HMS_XEG_RENDERNEURALUPSCALE

typedef void(GL_APIENTRYP PFN_HMS_XEG_RENDERNEURALUPSCALE) (GLuint inputTexture)

描述

执行空域AI超分渲染命令的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

inputTexture

超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1，纹理的宽度取值范围是[448, 1728]，否则可能会引起AI推理结果错误。此输入纹理必须是由OH_NativeBuffer创建的，并需要在调用此接口前将OH_NativeBuffer对应的handle设置为超分的输入参数，详见接口
HMS_XEG_NeuralUpscaleParameter
。

[h2]PFN_HMS_XEG_RENDERSPATIALUPSCALE

typedef void(GL_APIENTRYP PFN_HMS_XEG_RENDERSPATIALUPSCALE) (GLuint inputTexture)

描述

执行空域GPU超分渲染命令的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

inputTexture

超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1。此纹理必须在调用此接口前创建好，否则会导致渲染失败，如黑屏问题。

[h2]PFN_HMS_XEG_RenderTemporalUpscale

typedef void(GL_APIENTRYP PFN_HMS_XEG_RenderTemporalUpscale) (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY)

描述

执行时域AI超分渲染命令的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

inputTexture

超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1，支持的最大尺寸为2048 * 1024。

depthTexture

深度纹理。

motionVectorTexture

运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。

dynamicMaskTexture

物体的动态遮罩图像，格式需要是GL_RED或其兼容格式。R通道的合法值为0.0，0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。

jitterX

相机在X方向上的抖动。

jitterY

相机在Y方向上的抖动。

[h2]PFN_HMS_XEG_SPATIALUPSCALEPARAMETER

typedef void(GL_APIENTRYP PFN_HMS_XEG_SPATIALUPSCALEPARAMETER) (GLenum pname, GLvoid *param)

描述

设置空域GPU超分输入参数的函数指针定义。

起始版本：
 5.0.0(12)

参数:

名称

描述

pname

输入参数的枚举名，取值范围为
XEG_SPATIAL_UPSCALE_SCISSOR
、
XEG_SPATIAL_UPSCALE_SHARPNESS
。

param

输入参数值，取值详见输入参数枚举名的说明。

[h2]PFN_HMS_XEG_TemporalUpscaleParameter

typedef void(GL_APIENTRYP PFN_HMS_XEG_TemporalUpscaleParameter) (GLenum pname, GLvoid *param)

描述

设置时域AI超分输入参数的函数指针定义。

起始版本：
 6.0.0(20)

参数:

名称

描述

pname

输入参数的枚举名，取值范围为 
XEG_TEMPORAL_UPSCALE_INPUT_SIZE
、
XEG_TEMPORAL_UPSCALE_JITTER_NUM
、
XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED
、
XEG_TEMPORAL_UPSCALE_RESET_HISTORY
、
XEG_TEMPORAL_UPSCALE_STEADY_LEVEL
。

param

输入参数的值，取值详见输入参数枚举名的说明。

[h2]XEG_AdaptiveVRS

VK_DEFINE_HANDLE(XEG_AdaptiveVRS)

描述

XEG_AdaptiveVRS
的句柄。

起始版本：
 5.0.0(12)

[h2]XEG_AdaptiveVRSCreateInfo

typedef struct 
XEG_AdaptiveVRSCreateInfo
 XEG_AdaptiveVRSCreateInfo

描述

此结构体描述创建
XEG_AdaptiveVRS
对象的参数信息，当结构体中的信息变化时，需要创建新的
XEG_AdaptiveVRS
对象。

起始版本：
 5.0.0(12)

[h2]XEG_AdaptiveVRSDescription

typedef struct 
XEG_AdaptiveVRSDescription
 XEG_AdaptiveVRSDescription

描述

此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。

起始版本：
 5.0.0(12)

[h2]XEG_DenoiseQualityMode

typedef enum 
XEG_DenoiseQualityMode
 XEG_DenoiseQualityMode

描述

去噪质量模式枚举。

起始版本：
 6.0.0(20)

[h2]XEG_ExtensionProperties

typedef struct 
XEG_ExtensionProperties
 XEG_ExtensionProperties

描述

此结构体描述通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询到的XEngine扩展特性集合。

起始版本：
 5.0.0(12)

[h2]XEG_HPS

VK_DEFINE_HANDLE(XEG_HPS)

描述

XEG_HPS
的句柄。

起始版本：
 6.0.0(20)

[h2]XEG_HPSCreateInfo

typedef struct 
XEG_HPSCreateInfo
 XEG_HPSCreateInfo

描述

此结构体描述创建
XEG_HPS
对象的信息。

起始版本：
 6.0.0(20)

[h2]XEG_HPSRadixSort

typedef struct 
XEG_HPSRadixSort
 XEG_HPSRadixSort

描述

此结构体描述HPS基数排序扩展结构信息。

起始版本：
 6.0.0(20)

[h2]XEG_HPSRadixSortDescription

typedef struct 
XEG_HPSRadixSortDescription
 XEG_HPSRadixSortDescription

描述

此结构体描述使用
XEG_HPS_RADIX_SORT_EXTENSION_NAME
扩展进行排序时所需的信息。

起始版本：
 6.0.0(20)

[h2]XEG_RTGI

VK_DEFINE_HANDLE(XEG_RTGI)

描述

XEG_RTGI
的句柄。

起始版本：
 6.0.0(20)

[h2]XEG_RTGIQualityMode

typedef enum 
XEG_RTGIQualityMode
 XEG_RTGIQualityMode

描述

输出图像质量模式的枚举。

起始版本：
 6.0.0(20)

[h2]XEG_RTReflection

VK_DEFINE_HANDLE(XEG_RTReflection)

描述

XEG_RTReflection
的句柄。

起始版本：
 6.0.0(20)

[h2]XEG_RTReflectionCreateInfo

typedef struct 
XEG_RTReflectionCreateInfo
 XEG_RTReflectionCreateInfo

描述

此结构体描述创建
XEG_RTReflection
对象的信息。当结构体中的信息变化时，需要创建新的
XEG_RTReflection
对象。

起始版本：
 6.0.0(20)

[h2]XEG_RTReflectionDescription

typedef struct 
XEG_RTReflectionDescription
 XEG_RTReflectionDescription

描述

此结构体描述下发光线求交命令时的输入信息。

起始版本：
 6.0.0(20)

[h2]XEG_RTVisibleMask

VK_DEFINE_HANDLE(XEG_RTVisibleMask)

描述

XEG_RTVisibleMask
的句柄。表示光线追踪VisibleMask特性实例，支持阴影和环境光遮蔽效果。

起始版本：
 6.0.0(20)

[h2]XEG_SpatialUpscale

VK_DEFINE_HANDLE(XEG_SpatialUpscale)

描述

XEG_SpatialUpscale
的句柄。

起始版本：
 5.0.0(12)

[h2]XEG_SpatialUpscaleCreateInfo

typedef struct 
XEG_SpatialUpscaleCreateInfo
 XEG_SpatialUpscaleCreateInfo

描述

此结构体描述创建
XEG_SpatialUpscale
对象的信息，当结构体中的信息变化时，需要创建新的
XEG_SpatialUpscale
对象。

起始版本：
 5.0.0(12)

[h2]XEG_SpatialUpscaleDescription

typedef struct 
XEG_SpatialUpscaleDescription
 XEG_SpatialUpscaleDescription

描述

此结构体描述下发空域GPU超分渲染命令时需要的图像信息。

起始版本：
 5.0.0(12)

[h2]XEG_StructureType

typedef enum 
XEG_StructureType
 XEG_StructureType

描述

XEngine结构体类型的枚举。

起始版本：
 6.0.0(20)

[h2]XEG_TemporalUpscale

VK_DEFINE_HANDLE(XEG_TemporalUpscale)

描述

XEG_TemporalUpscale
的句柄。

起始版本：
 5.0.0(12)

[h2]XEG_TemporalUpscaleCreateInfo

typedef struct 
XEG_TemporalUpscaleCreateInfo
 XEG_TemporalUpscaleCreateInfo

描述

此结构体描述创建
XEG_TemporalUpscale
对象的信息。当结构体中的信息变化时，需要创建新的
XEG_TemporalUpscale
对象。

起始版本：
 5.0.0(12)

[h2]XEG_TemporalUpscaleDescription

typedef struct 
XEG_TemporalUpscaleDescription
 XEG_TemporalUpscaleDescription

描述

此结构体描述下发时域AI超分渲染命令时的输入信息。

起始版本：
 5.0.0(12)

[h2]XEG_TraversalMode

typedef enum 
XEG_TraversalMode
 XEG_TraversalMode

描述

遍历模式枚举。

起始版本：
 6.0.0(20)

枚举类型说明

[h2]XEG_DenoiseQualityMode

enum XEG_DenoiseQualityMode

描述

去噪质量模式枚举。

起始版本：
 6.0.0(20)

枚举值

描述

XEG_DENOISE_QUALITY_MODE_NONE

不进行去噪。

XEG_DENOISE_QUALITY_MODE_QUALITY

生成高质量的无噪声结果，但速度可能较慢。

XEG_DENOISE_QUALITY_MODE_BALANCED

生成较高质量的无噪声结果，速度适中。

XEG_DENOISE_QUALITY_MODE_PERFORMANCES

高性能地生成无噪声结果。

[h2]XEG_RTGIQualityMode

enum XEG_RTGIQualityMode

描述

输出图像质量模式的枚举。

起始版本：
 6.0.0(20)

枚举值

描述

XEG_RTGI_QUALITY_MODE_QUALITY

质量模式。

XEG_RTGI_QUALITY_MODE_BALANCED

平衡模式。

XEG_RTGI_QUALITY_MODE_PERFORMANCE

性能模式。

[h2]XEG_StructureType

enum XEG_StructureType

描述

XEngine结构体类型的枚举。

起始版本：
 6.0.0(20)

枚举值

描述

XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO

结构体
XEG_RTShadowAOCreateInfo
的类型。

XEG_STRUCTURE_TYPE_RT_SHADOWAO_DESCRIPTION

结构体
XEG_RTShadowAODescription
的类型。

XEG_STRUCTURE_TYPE_RT_REFLECTION_CREATE_INFO

结构体
XEG_RTReflectionCreateInfo
的类型。

XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION

结构体
XEG_RTReflectionDescription
的类型。

XEG_STRUCTURE_TYPE_NNGI_CREATE_INFO

结构体
XEG_NNGICreateInfo
的类型。

XEG_STRUCTURE_TYPE_NNGI_DESCRIPTION

结构体
XEG_NNGIDescription
的类型。

XEG_STRUCTURE_TYPE_DDGI_CREATE_INFO

结构体
XEG_DDGICreateInfo
的类型。

XEG_STRUCTURE_TYPE_DDGI_DESCRIPTION

结构体
XEG_DDGIDescription
的类型。

XEG_STRUCTURE_TYPE_HPS_CREATE_INFO

结构体
XEG_HPSCreateInfo
的类型。

XEG_STRUCTURE_TYPE_HPS_RADIX_SORT

结构体
XEG_HPSRadixSort
的类型。

XEG_STRUCTURE_TYPE_HPS_RADIX_SORT_DESCRIPTION

结构体
XEG_HPSRadixSortDescription
的类型。

[h2]XEG_TraversalMode

enum XEG_TraversalMode

描述

遍历模式枚举。

起始版本：
 6.0.0(20)

枚举值

描述

XEG_TRAVERSAL_MODE_DEFAULT

逐像素进行光线追踪场景遍历。

XEG_TRAVERSAL_MODE_PERFORMANCES

通过算法进行场景遍历，性能更好，画质可能有细微的差别。

函数说明

[h2]HMS_XEG_AdaptiveVRSParameter()

GL_APICALL void GL_APIENTRY HMS_XEG_AdaptiveVRSParameter (GLenum pname, GLvoid * param)

描述

设置自适应VRS的参数。

起始版本：
 5.0.0(12)

参数:

名称

描述

pname

输入参数的枚举名，取值范围是
XEG_ADAPTIVE_VRS_INPUT_SIZE
、
XEG_ADAPTIVE_VRS_INPUT_REGION
、
XEG_ADAPTIVE_VRS_TEXEL_SIZE
、
XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY
、
XEG_ADAPTIVE_VRS_FLIP
。

param

输入参数值，取值详见输入参数枚举名的说明。

[h2]HMS_XEG_ApplyAdaptiveVRS()

GL_APICALL void GL_APIENTRY HMS_XEG_ApplyAdaptiveVRS (GLuint shadingRateImage)

描述

将着色率图像应用到渲染目标中。

起始版本：
 5.0.0(12)

参数:

名称

描述

shadingRateImage

计算得到的着色率图像，传入0表示关闭自适应VRS。

[h2]HMS_XEG_CmdDispatchAdaptiveVRS()

VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdDispatchAdaptiveVRS (VkCommandBuffer commandBuffer, XEG_AdaptiveVRS xegAdaptiveVRS, XEG_AdaptiveVRSDescription * pXegAdaptiveVRSDescription)

描述

执行计算自适应可变着色率命令。

起始版本：
 5.0.0(12)

参数:

名称

描述

commandBuffer

当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。

xegAdaptiveVRS

已创建的
XEG_AdaptiveVRS
对象。

pXegAdaptiveVRSDescription

下发命令的参数结构体
XEG_AdaptiveVRSDescription
的指针，不允许为空。

[h2]HMS_XEG_CmdRadixSortHPS()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRadixSortHPS (VkCommandBuffer commandBuffer, XEG_HPS hps, const XEG_HPSRadixSortDescription * pDescription)

描述

录制HPS排序命令，使用此接口前需要通过
HMS_XEG_EnumerateDeviceExtensionProperties
接口查询是否支持
XEG_HPS_RADIX_SORT_EXTENSION_NAME
扩展。

起始版��：
 6.0.0(20)

参数:

名称

描述

commandBuffer

Vulkan命令缓冲对象。

hps

已创建的
XEG_HPS
对象。

pDescription

XEG_HPS_RADIX_SORT_EXTENSION_NAME
扩展输入信息结构体
XEG_HPSRadixSortDescription
的指针，不允许为空。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]HMS_XEG_CmdRenderRTGI()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTGI (VkCommandBuffer commandBuffer, XEG_RTGI rtGI, const void * pDescription)

描述

执行渲染命令。

起始版本：
 6.0.0(20)

参数:

名称

描述

commandBuffer

当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。

rtGI

已创建的
XEG_RTGI
对象。

pDescription

执行渲染命令的信息结构体的指针，若使用DDGI渲染，为结构体
XEG_DDGIDescription
的指针，若使用NNGI渲染，为结构体
XEG_NNGIDescription
的指针，不允许为空。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]HMS_XEG_CmdRenderRTReflection()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTReflection (VkCommandBuffer commandBuffer, XEG_RTReflection rtReflection, const void * pDescription)

描述

录制计算RT反射命中信息命令。

起始版本：
 6.0.0(20)

参数:

名称

描述

commandBuffer

Vulkan命令缓冲对象，需要是Primary类型。

rtReflection

已创建的
XEG_RTReflection
对象。

pDescription

反射渲染输入信息结构体
XEG_RTReflectionDescription
的指针，不允许为空。

[h2]HMS_XEG_CmdRenderRTVisibleMask()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTVisibleMask (VkCommandBuffer commandBuffer, XEG_RTVisibleMask rtVisibleMask, const void * pDescription)

描述

录制光线追踪VisibleMask渲染命令。

起始版本：
 6.0.0(20)

参数:

名称

描述

commandBuffer

Vulkan命令缓冲对象。

rtVisibleMask

已创建的
XEG_RTVisibleMask
对象。

pDescription

执行渲染命令的输入参数结构体指针，当前仅支持
XEG_RTShadowAODescription
类型的指针，不允许为空。

返回：

VkResult类型的错误码，值为VK_SUCCESS时表示执行成功。

[h2]HMS_XEG_CmdRenderSpatialUpscale()

VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdRenderSpatialUpscale (VkCommandBuffer commandBuffer, XEG_SpatialUpscale xegSpatialUpscale, XEG_SpatialUpscaleDescription * pXegSpatialUpscaleDescription)

描述

执行空域GPU超分渲染命令。

起始版本：
 5.0.0(12)

参数:

名称

描述

commandBuffer

当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行超分。

xegSpatialUpscale

已创建的
XEG_SpatialUpscale
对象。

pXegSpatialUpscaleDescription

渲染命令的参数结构体
XEG_SpatialUpscaleDescription
的指针，不允许为空。

[h2]HMS_XEG_CmdRenderTemporalUpscale()

VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdRenderTemporalUpscale (VkCommandBuffer commandBuffer, XEG_TemporalUpscale temporalUpscale, XEG_TemporalUpscaleDescription * pDescription)

描述

录制时域AI超分渲染命令。

起始版本：
 5.0.0(12)

参数:

名称

描述

commandBuffer

Vulkan命令缓冲对象，需要是Primary类型。

temporalUpscale

已创建的
XEG_TemporalUpscale
对象。

pDescription

超分渲染输入信息结构体
XEG_TemporalUpscaleDescription
的指针，不允许为空。

[h2]HMS_XEG_CmdSetSynchronization()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdSetSynchronization (VkCommandBuffer commandBuffer, const void * xegHandle )

描述

设置同步信号，等待渲染结果写入指定图像。使用RTGI特性时，为等待GI渲染结果写入指定图像。

起始版本：
 6.0.0(20)

参数:

名称

描述

commandBuffer

当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。

xegHandle

已创建句柄对象。使用RTGI特性时，为已创建的
XEG_RTGI
对象。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]HMS_XEG_CreateAdaptiveVRS()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateAdaptiveVRS (VkDevice device, XEG_AdaptiveVRSCreateInfo * pXegAdaptiveVRSCreateInfo, XEG_AdaptiveVRS * pXegAdaptiveVRS)

描述

创建
XEG_AdaptiveVRS
对象。

起始版本：
 5.0.0(12)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pXegAdaptiveVRSCreateInfo

结构体
XEG_AdaptiveVRSCreateInfo
的指针，不允许为空。

pXegAdaptiveVRS

指向句柄的指针，创建的
XEG_AdaptiveVRS
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]HMS_XEG_CreateHPS()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateHPS (VkDevice device, const XEG_HPSCreateInfo * pCreateInfo, XEG_HPS * pHps )

描述

创建
XEG_HPS
对象。

起始版本：
 6.0.0(20)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pCreateInfo

XEG_HPS
实例句柄创建信息结构体的指针。不允许为空。

pHps

指向HPS实例句柄的指针，创建的
XEG_HPS
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]HMS_XEG_CreateRTGI()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTGI (VkDevice device, const void * pCreateInfo, XEG_RTGI * pRtGI )

描述

创建
XEG_RTGI
对象。

起始版本：
 6.0.0(20)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pCreateInfo

创建
XEG_RTGI
对象的信息结构体的指针，若创建DDGI句柄，为结构体
XEG_DDGICreateInfo
的指针，若创建NNGI句柄，为结构体
XEG_NNGICreateInfo
的指针，不允许为空。

pRtGI

指向句柄的指针，创建的
XEG_RTGI
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]HMS_XEG_CreateRTReflection()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTReflection (VkDevice device, const void * pCreateInfo, XEG_RTReflection * pRtReflection )

描述

创建
XEG_RTReflection
对象。

起始版本：
 6.0.0(20)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pCreateInfo

反射实例句柄创建信息结构体的指针，当前仅支持
XEG_RTReflectionCreateInfo
类型的指针，不允许为空。

pRtReflection

指向反射实例句柄的指针，创建的
XEG_RTReflection
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]HMS_XEG_CreateRTVisibleMask()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTVisibleMask (VkDevice device, const void * pCreateInfo, XEG_RTVisibleMask * pRTVisibleMask )

描述

创建
XEG_RTVisibleMask
对象。

起始版本：
 6.0.0(20)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pCreateInfo

创建VisibleMask实例句柄所需描述信息的结构体的指针，当前仅支持
XEG_RTShadowAOCreateInfo
类型的指针，不允许为空。

pRTVisibleMask

指向VisibleMask实例句柄的指针，创建的
XEG_RTVisibleMask
在此句柄中返回。

返回：

VkResult类型的错误码，值为VK_SUCCESS时表示创建成功。

[h2]HMS_XEG_CreateSpatialUpscale()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateSpatialUpscale (VkDevice device, const XEG_SpatialUpscaleCreateInfo * pXegSpatialUpscaleCreateInfo, XEG_SpatialUpscale * pXegSpatialUpscale)

描述

创建
XEG_SpatialUpscale
对象。

起始版本：
 5.0.0(12)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pXegSpatialUpscaleCreateInfo

结构体
XEG_SpatialUpscaleCreateInfo
的指针，不允许为空。

pXegSpatialUpscale

指向句柄的指针，创建的
XEG_SpatialUpscale
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]HMS_XEG_CreateTemporalUpscale()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateTemporalUpscale (VkDevice device, XEG_TemporalUpscaleCreateInfo * pTemporalUpscaleInfo, XEG_TemporalUpscale * pTemporalUpscale)

描述

创建
XEG_TemporalUpscale
对象。

起始版本：
 5.0.0(12)

参数:

名称

描述

device

必须是当前使用的VkDevice。

pTemporalUpscaleInfo

超分实例句柄创建信息结构体
XEG_TemporalUpscaleCreateInfo
的指针，不允许为空。

pTemporalUpscale

指向句柄的指针，创建的
XEG_TemporalUpscale
在此句柄中返回。

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

[h2]HMS_XEG_DestroyAdaptiveVRS()

VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyAdaptiveVRS (XEG_AdaptiveVRS xegAdaptiveVRS)

描述

销毁
XEG_AdaptiveVRS
对象。

起始版本：
 5.0.0(12)

参数:

名称

描述

xegAdaptiveVRS

已创建的
XEG_AdaptiveVRS
对象。

[h2]HMS_XEG_DestroyHPS()

VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyHPS (XEG_HPS hps)

描述

销毁
XEG_HPS
对象。

起始版本：
 6.0.0(20)

参数:

名称

描述

hps

需要销毁的
XEG_HPS
对象。

[h2]HMS_XEG_DestroyRTGI()

VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTGI (XEG_RTGI rtGI)

描述

销毁
XEG_RTGI
对象。

起始版本：
 6.0.0(20)

参数:

名称

描述

rtGI

已创建的
XEG_RTGI
对象。

[h2]HMS_XEG_DestroyRTReflection()

VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTReflection (XEG_RTReflection rtReflection)

描述

销毁
XEG_RTReflection
对象。

起始版本：
 6.0.0(20)

参数:

名称

描述

rtReflection

需要销毁的
XEG_RTReflection
对象。

[h2]HMS_XEG_DestroyRTVisibleMask()

VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTVisibleMask (XEG_RTVisibleMask rtVisibleMask)

描述

销毁
XEG_RTVisibleMask
对象。

起始版本：
 6.0.0(20)

参数:

名称

描述

rtVisibleMask

需要销毁的
XEG_RTVisibleMask
对象。

[h2]HMS_XEG_DestroySpatialUpscale()

VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroySpatialUpscale (XEG_SpatialUpscale xegSpatialUpscale)

描述

销毁
XEG_SpatialUpscale
对象。

起始版本：
 5.0.0(12)

参数:

名称

描述

xegSpatialUpscale

已创建的
XEG_SpatialUpscale
对象。

[h2]HMS_XEG_DestroyTemporalUpscale()

VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyTemporalUpscale (XEG_TemporalUpscale temporalUpscale)

描述

销毁
XEG_TemporalUpscale
对象。

起始版本：
 5.0.0(12)

参数:

名称

描述

temporalUpscale

需要销毁的
XEG_TemporalUpscale
对象。

[h2]HMS_XEG_DispatchAdaptiveVRS()

GL_APICALL void GL_APIENTRY HMS_XEG_DispatchAdaptiveVRS (GLfloat * reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)

描述

计算着色率图像。

起始版本：
 5.0.0(12)

参数:

名称

描述

reprojectionMatrix

当前帧和上一帧进行计算的结果矩阵的指针，计算公式为：（上一帧投影矩阵* 上一帧的观察矩阵）* （（当前帧的投影矩阵* 当前帧的观察矩阵）的逆矩阵），矩阵必须是4*4列主序的矩阵。可选参数，非空时画质较优。

inputColorImage

上一帧渲染管线最终渲染结果颜色附件纹理ID。

inputDepthImage

当前帧渲染管线最终渲染结果深度附件纹理ID。

shadingRateImage

用于生成着色率图信息的纹理ID，需用户创建并输入。

纹理类型需要是GL_TEXTURE_2D且mipLevels为1。

[h2]HMS_XEG_EnumerateDeviceExtensionProperties()

VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32_t * pPropertyCount, XEG_ExtensionProperties * pProperties)

描述

XEngine Vulkan扩展特性查询接口。

起始版本：
 5.0.0(12)

参数:

名称

描述

physicalDevice

当前使用的Vulkan物理设备。

pPropertyCount

查询或传入扩展特性的数量，当
pProperties
为nullptr时返回当前支持的XEngine扩展特性数量。 当传入的
propertyCount
大于或等于真实支持的XEngine扩展特性数量时，通过
pProperties
返回查询信息，返回结果为VK_SUCCESS。 当传入的
propertyCount
小于真实支持的XEngine扩展特性数量时，通过
pProperties
返回查询信息，但返回结果为VK_INCOMPLETE。

pProperties

查询到的XEngine扩展特性，通过结构体
XEG_ExtensionProperties
指针返回。

返回：

返回VkResult类型错误码，查询成功时返回值为VK_SUCCESS。 当
pProperties
不为nullptr且传入的
propertyCount
小于实际支持的XEngine扩展特性数量时返回值为VK_INCOMPLETE，表示查询特性不完整。

[h2]HMS_XEG_GetString()

const GLubyte* HMS_XEG_GetString (GLenum name)

描述

XEngine OpenGL ES扩展特性查询接口。

起始版本：
 5.0.0(12)

参数:

名称

描述

name

输入参数的枚举名，取值范围为
XEG_EXTENSIONS
。

返回：

当参数为
XEG_EXTENSIONS
时，返回XEngine支持的空格分隔的扩展列表，注意扩展名不包含空格字符。查询结果异常则返回空。

[h2]HMS_XEG_NeuralUpscaleParameter()

GL_APICALL void GL_APIENTRY HMS_XEG_NeuralUpscaleParameter (GLenum pname, GLvoid * param)

描述

设置空域AI超分输入参数。

起始版本：
 5.0.0(12)

参数:

名称

描述

pname

输入参数的枚举名，取值范围为
XEG_NEURAL_UPSCALE_SCISSOR
、
XEG_NEURAL_UPSCALE_SHARPNESS
、
XEG_NEURAL_UPSCALE_INPUT_HANDLE
。

param

输入参数值，取值详见输入参数枚举名的说明。

[h2]HMS_XEG_RenderNeuralUpscale()

GL_APICALL void GL_APIENTRY HMS_XEG_RenderNeuralUpscale (GLuint inputTexture)

描述

执行空域AI超分渲染命令。

起始版本：
 5.0.0(12)

参数:

名称

描述

inputTexture

超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1，纹理的宽度取值范围是[448, 1728]，否则可能会引起AI推理结果错误。此输入纹理必须是由OH_NativeBuffer创建的，并需要在调用此接口前将OH_NativeBuffer对应的handle设置为超分的输入参数，详见接口
HMS_XEG_NeuralUpscaleParameter
。

[h2]HMS_XEG_RenderSpatialUpscale()

GL_APICALL void GL_APIENTRY HMS_XEG_RenderSpatialUpscale (GLuint inputTexture)

描述

执行空域GPU超分渲染命令。

起始版本：
 5.0.0(12)

参数:

名称

描述

inputTexture

超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1。此纹理必须在调用此接口前创建好，否则会导致渲染失败，如黑屏问题。

[h2]HMS_XEG_RenderTemporalUpscale()

GL_APICALL void GL_APIENTRY HMS_XEG_RenderTemporalUpscale (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY )

描述

执行时域AI超分渲染命令。

起始版本：
 6.0.0(20)

参数:

名称

描述

inputTexture

超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1，支持的最大尺寸为2048 * 1024。

depthTexture

深度纹理。

motionVectorTexture

运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。

dynamicMaskTexture

物体的动态遮罩图像，格式需要是GL_RED或其兼容格式。R通道的合法值为0.0，0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。

jitterX

相机在X方向上的抖动。

jitterY

相机在Y方向上的抖动。

[h2]HMS_XEG_SpatialUpscaleParameter()

GL_APICALL void GL_APIENTRY HMS_XEG_SpatialUpscaleParameter (GLenum pname, GLvoid * param)

描述

设置空域GPU超分输入参数。

起始版本：
 5.0.0(12)

参数:

名称

描述

pname

输入参数的枚举名，取值范围为
XEG_SPATIAL_UPSCALE_SCISSOR
、
XEG_SPATIAL_UPSCALE_SHARPNESS
。

param

输入参数值，取值详见输入参数枚举名的说明。

[h2]HMS_XEG_TemporalUpscaleParameter()

GL_APICALL void GL_APIENTRY HMS_XEG_TemporalUpscaleParameter (GLenum pname, const GLvoid * param)

描述

设置时域AI超分输入参数。

起始版本：
 6.0.0(20)

参数:

名称

描述

pname

输入参数的枚举名，取值范围为
XEG_TEMPORAL_UPSCALE_INPUT_SIZE
、
XEG_TEMPORAL_UPSCALE_JITTER_NUM
、
XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED
、
XEG_TEMPORAL_UPSCALE_RESET_HISTORY
、
XEG_TEMPORAL_UPSCALE_STEADY_LEVEL
。

param

输入参数的值，取值详见输入参数枚举名的说明。

---
*2026-04-22T15:54:00.167Z*