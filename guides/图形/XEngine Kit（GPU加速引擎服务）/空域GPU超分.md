# 空域GPU超分

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `xengine-kit-gpu-spatial-upscaling`  |  **DocID**: `79a108702aa146d380956d0c249092fb`  |  **NodeID**: `000201775795491975902f011b5937c9`

---

# 空域GPU超分

 XEngine Kit提供空域GPU超分能力，其基于单帧输入图像，使用空间邻域信息实现超采样，开销较小同时收益可观，建议使用超分倍率为[1.2, 1.5]。

  #### 约束与限制

支持的设备类型：Phone，从5.0.2(14)版本开始，新增支持Tablet、PC/2in1设备，从5.1.0(18)版本开始新增支持TV设备。

  可通过以下方式查询相关扩展特性是否支持：

  
对于OpenGL ES，使用[HMS_XEG_GetString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_getstring)扩展特性查询接口进行查询。

  对于Vulkan，使用[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)扩展特性查询接口进行查询。

  
  如查询结果包含[XEG_SPATIAL_UPSCALE_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatial_upscale_extension_name)，则表示支持该特性，若查询结果未包含，则表示不支持该特性。

  
   #### 接口说明

以下接口为OpenGL ES和Vulkan空域GPU超分设置接口，如需使用更丰富的设置和查询接口，具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)。

  
| 接口名  | 描述  
  | const GLubyte * HMS_XEG_GetString (GLenum name)  | XEngine OpenGL ES扩展特性查询接口。  
 | GL_APICALL void GL_APIENTRY HMS_XEG_SpatialUpscaleParameter (GLenum pname, GLvoid *param)  | 设置空域GPU超分输入参数。  
 | GL_APICALL void GL_APIENTRY HMS_XEG_RenderSpatialUpscale (GLuint inputTexture)  | 执行空域GPU超分渲染命令。  
 | VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, XEG_ExtensionProperties *pProperties)  | XEngine Vulkan扩展特性查询接口。  
 | VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateSpatialUpscale (VkDevice device, const XEG_SpatialUpscaleCreateInfo *pXegSpatialUpscaleCreateInfo, XEG_SpatialUpscale *pXegSpatialUpscale)  | 创建XEG_SpatialUpscale对象。  
 | VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdRenderSpatialUpscale (VkCommandBuffer commandBuffer, XEG_SpatialUpscale xegSpatialUpscale, XEG_SpatialUpscaleDescription *pXegSpatialUpscaleDescription)  | 执行空域GPU超分渲染命令。  
 | VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroySpatialUpscale (XEG_SpatialUpscale xegSpatialUpscale)  | 销毁XEG_SpatialUpscale对象。  
  

    #### 业务流程

下面是基于GLES图形API平台集成空域GPU超分的主要业务流程

  

  
 
- 用户在进入游戏初始化场景时调用HMS_XEG_GetString接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含空域GPU超分时代表可以使用此特性。
- 调用HMS_XEG_SpatialUpscaleParameter接口配置超分参数。
- 当游戏运行时，游戏渲染待超分的当前帧纹理。
- 当待超分纹理渲染完成时，调用HMS_XEG_RenderSpatialUpscale接口对待超分的纹理超分。
- 当超分渲染完成时，游戏渲染剩下的纹理，如UI等。
- 当前帧已全部渲染完成，进行送显。
- 当游戏退出时，超分资源会自行释放。

 
下面是基于Vulkan图形API平台集成空域GPU超分的主要业务流程

  

  
 
- 用户在进入游戏初始化场景时调用HMS_XEG_EnumerateDeviceExtensionProperties接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含空域GPU超分时代表可以使用此特性。
- 此时调用HMS_XEG_CreateSpatialUpscale接口创建超分实例。
- 当游戏运行时，游戏渲染待超分的当前帧纹理。
- 当待超分纹理渲染完成时，调用HMS_XEG_CmdRenderSpatialUpscale接口对待超分的纹理超分。
- 当超分渲染完成时，游戏渲染剩下的纹理，如UI等。
- 当前帧已全部渲染完成，进行送显。
- 当游戏退出时，调用HMS_XEG_DestroySpatialUpscale接口销毁超分实例。

   #### 开发步骤

本章以OpenGL ES和Vulkan图像API集成为例，说明XEngine集成操作过程。

   #### [h2]配置项目

编译HAP时，Native层so编译需要依赖NDK中的libxengine.so。

 
头文件引用

  按需引用XEngine的头文件，如使用OpenGL ES空域GPU超分。

  ```
#include <cstring>
#include <cstdlib>
#include <xengine/xeg_gles_extension.h>
#include <xengine/xeg_gles_spatial_upscale.h>
```
  按需引用XEngine的头文件，如使用Vulkan空域GPU超分。

  ```
#include <string>
#include <vector>
#include <algorithm>
#include <xengine/xeg_vulkan_extension.h>
#include <xengine/xeg_vulkan_spatial_upscale.h>
```
  编写CMakeLists.txt

  按需引用XEngine的CMakeLists，如使用OpenGL ES空域GPU超分功能，CMakeLists.txt部分示例代码如下，完整示例代码请参见[Demo（GPU加速引擎-GLES）](https://gitcode.com/harmonyos_samples/xengine-samplecode-gles-demo-cpp)。

  ```
find_library(
    # Sets the name of the path variable.
    xengine-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    xengine
)
find_library(
    # Sets the name of the path variable.
    EGL-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    EGL
)
find_library(
    # Sets the name of the path variable.
    GLES-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    GLESv3
)

target_link_libraries(nativerender PUBLIC
${EGL-lib} ${GLES-lib} ${xengine-lib})
```
  按需引用XEngine的CMakeLists，如使用Vulkan空域GPU超分功能，CMakeLists.txt部分示例代码如下，完整示例代码请参见[Demo（GPU加速引擎-Vulkan）](https://gitcode.com/harmonyos_samples/xengine-samplecode-vulkan-demo-cpp)。

  ```
find_library(
    # Sets the name of the path variable.
    xengine-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    xengine
)
find_library(
    # Sets the name of the path variable.
    Vulkan-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    vulkan
)

target_link_libraries(nativerender PUBLIC
${Vulkan-lib} ${xengine-lib})
```
  
   #### [h2]集成XEngine空域GPU超分（OpenGL ES）

使用EGL和OpenGL ES图形API搭建图像渲染管线并集成空域GPU超分在Native层实现，渲染结果通过[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件显示到屏幕。

 本节阐述OpenGL ES图形API的空域GPU超分的使用，详细代码请参见[Demo（GPU加速引擎-GLES）](https://gitcode.com/harmonyos_samples/xengine-samplecode-gles-demo-cpp)。

 在调用XEngine Kit能力前，需要先通过[Syscap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap#判断-api-是否可以使用)查询您的目标设备是否支持SystemCapability.Graphic.XEngine系统能力。

 
调用[HMS_XEG_GetString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_getstring)接口，获取XEngine支持的扩展信息，只有在支持XEG_SPATIAL_UPSCALE_EXTENSION_NAME扩展时才可以使用空域GPU超分的相关接口。

  ```
// 查询XEngine支持的GLES扩展信息
const char* extensions = (const char*)HMS_XEG_GetString(XEG_EXTENSIONS);
// 检查是否支持空域GPU超分
if (!strstr(extensions, XEG_SPATIAL_UPSCALE_EXTENSION_NAME)) {
    exit(1); // return error
}
```
  调用[HMS_XEG_SpatialUpscaleParameter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_spatialupscaleparameter)接口，对空域GPU超分的参数赋值。

  ```
// m_sharpness为用户自定义超分锐化参数，此处以参数为0.3f为例
float m_sharpness = 0.3f;
// m_renderWidth与m_renderHeight分别为用户自定义的渲染宽度与渲染高度，此处以800*600分辨率为例
uint32_t m_renderWidth = 800;
uint32_t m_renderHeight = 600;
HMS_XEG_SpatialUpscaleParameter(XEG_SPATIAL_UPSCALE_SHARPNESS, &m_sharpness);
// upscaleScissor为超分输入图像的采样区域
int upscaleScissor[4] = {0, 0, static_cast<int>(m_renderWidth), static_cast<int>(m_renderHeight)};
HMS_XEG_SpatialUpscaleParameter(XEG_SPATIAL_UPSCALE_SCISSOR, upscaleScissor);
```
  调用[HMS_XEG_RenderSpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_renderspatialupscale)接口进行超分。

  ```
// upscaleFBO为用户自定义创建的framebuffer
unsigned int upscaleFBO;
glBindFramebuffer(GL_FRAMEBUFFER, upscaleFBO);
// m_upscaleWidth和m_upscaleHeight分别为用户自定义超分宽度和超分高度，此处以超分至1200*900分辨率为例
uint32_t m_upscaleWidth = 1200;
uint32_t m_upscaleHeight = 900;
glViewport(0, 0, m_upscaleWidth, m_upscaleHeight);
glScissor(0, 0, m_upscaleWidth, m_upscaleHeight);
// upscaleColorBuffer为纹理附件，用户可自定义
unsigned int upscaleColorBuffer;
HMS_XEG_RenderSpatialUpscale(upscaleColorBuffer);
```
  upscaleFBO是已创建完成的framebuffer，并绑定纹理，超分接口调用后绘制到纹理上。

  
   #### [h2]集成XEngine空域GPU超分（Vulkan）

使用Vulkan图形API搭建图像渲染管线并集成空域GPU超分在Native层实现，渲染结果通过[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件显示到屏幕。

 本节阐述Vulkan图形API的空域GPU超分使用，详细代码请参见[Demo（GPU加速引擎-Vulkan）](https://gitcode.com/harmonyos_samples/xengine-samplecode-vulkan-demo-cpp)。

 在调用XEngine Kit���力前，需要先通过[Syscap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap#判断-api-是否可以使用)查询您的目标设备是否支持SystemCapability.Graphic.XEngine系统能力。

 
调用[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口，获取XEngine支持的扩展信息，只有在支持XEG_SPATIAL_UPSCALE_EXTENSION_NAME扩展时才可以使用空域GPU超分的相关接口。

  ```
// physicalDevice为Vulkan物理设备，用户需进行初始化
VkPhysicalDevice physicalDevice;
// 查询XEngine支持的Vulkan扩展列表
std::vector<std::string> supportedExtensions;
uint32_t pPropertyCount;
HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &pPropertyCount, nullptr);
if (pPropertyCount > 0) {
    std::vector<XEG_ExtensionProperties> pProperties(pPropertyCount);
    if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &pPropertyCount, &pProperties.front()) == VK_SUCCESS) {
        for (auto ext : pProperties) {
             supportedExtensions.push_back(ext.extensionName);
         }
    }
}
// 查询是否支持空域GPU超分
if (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_SPATIAL_UPSCALE_EXTENSION_NAME) == supportedExtensions.end()) {
    exit(1); // return error
}
```
  声明实例句柄。

  XEG_SpatialUpscale xegSpatialUpscale;  调用[HMS_XEG_CreateSpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_createspatialupscale)接口，创建超分实例。

  ```
// 渲染宽高和超分后宽高均为用户自定义参数，此处以将800*600分辨率超分至1200*900分辨率为例
uint32_t m_renderWidth = 800;
uint32_t m_renderHeight = 600;
uint32_t m_upscaleWidth = 1200;
uint32_t m_upscaleHeight = 900;
// Vulkan逻辑设备，用户需进行初始化
VkDevice device;
// VkRect2D为Vulkan指定的二维区域结构
// srcRect2D为超分输入纹理区域，用户可自定义
VkRect2D srcRect2D;
// srcRect2D.offset.x和srcRect2D.offset.y为原点偏移量
srcRect2D.offset.x = 0;
srcRect2D.offset.y = 0;
// srcRect2D.extent.width与srcRect2D.extent.height为输入纹理宽高
srcRect2D.extent.width = m_renderWidth;
srcRect2D.extent.height = m_renderHeight;
// dstRect2D为超分输出纹理区域，用户可自定义
VkRect2D dstRect2D;
// dstRect2D.offset.x和dstRect2D.offset.y为原点偏移量
dstRect2D.offset.x = 0;
dstRect2D.offset.y = 0;
// dstRect2D.extent.width与dstRect2D.extent.height为超分纹理宽高
dstRect2D.extent.width = m_upscaleWidth;
dstRect2D.extent.height = m_upscaleHeight;
XEG_SpatialUpscaleCreateInfo createInfo;
createInfo.format = VK_FORMAT_R8G8B8A8_UNORM;
// sharpness为用户自定义超分锐化参数，此处以参数为0.3f为例
createInfo.sharpness = 0.3f;
createInfo.outputSize = dstRect2D.extent;
createInfo.inputRegion = srcRect2D;
createInfo.outputRegion = dstRect2D;
createInfo.inputSize = srcRect2D.extent;
HMS_XEG_CreateSpatialUpscale(device, &createInfo, &xegSpatialUpscale);
```
  调用[HMS_XEG_CmdRenderSpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmdrenderspatialupscale)接口下发超分，每帧都需要调用。

  ```
// inputImageView为用户创建的超分输入图像的VkImageView
VkImageView inputImageView = VK_NULL_HANDLE;
// outputImageView为用户创建的超分输出图像的VkImageView
VkImageView outputImageView = VK_NULL_HANDLE;
// cmdBuff为命令缓冲区，用户需进行初始化
VkCommandBuffer cmdBuff = VK_NULL_HANDLE ;
XEG_SpatialUpscaleDescription xegDescription;
xegDescription.inputImage = inputImageView;
xegDescription.outputImage = outputImageView;
HMS_XEG_CmdRenderSpatialUpscale(cmdBuff, xegSpatialUpscale, &xegDescription);
```
  调用[HMS_XEG_DestroySpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_destroyspatialupscale)接口销毁实例。

  ```
HMS_XEG_DestroySpatialUpscale(xegSpatialUpscale);
```

---
*Updated: 2026-04-20 01:44:33*
