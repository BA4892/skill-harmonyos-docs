# 自适应VRS

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `xengine-kit-adaptive-vrs`  |  **DocID**: `914f0540ecaa47d0ac73f3d10a492117`  |  **NodeID**: `0002017757954919759160c8ff06ce75`

---

# 自适应VRS

 XEngine Kit提供自适应VRS功能，其通过合理分配画面的计算资源，视觉无损降低渲染频次，使不同的渲染图像使用不同的渲染速率，能够有效提高渲染性能。

  #### 约束与限制

支持的设备类型：Phone，从5.0.2(14)版本开始，新增支持Tablet、PC/2in1设备，从5.1.0(18)版本开始新增支持TV设备。

  可通过以下方式查询相关扩展特性是否支持：

  对于OpenGL ES，使用[HMS_XEG_GetString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_getstring)扩展特性查询接口进行查询，如查询结果包含[XEG_ADAPTIVE_VRS_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptive_vrs_extension_name)，则表示支持该特性，若查询结果未包含，则表示不支持该特性。

  
   #### 接口说明

以下接口为自适应VRS设置接口，如需使用更丰富的设置和查询接口，具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)。

  
| 接口名  | 描述  
  | const GLubyte * HMS_XEG_GetString (GLenum name)  | XEngine OpenGL ES扩展特性查询接口。  
 | GL_APICALL void GL_APIENTRY HMS_XEG_AdaptiveVRSParameter (GLenum pname, GLvoid * param)  | 设置自适应VRS的参数。  
 | GL_APICALL void GL_APIENTRY HMS_XEG_DispatchAdaptiveVRS (GLfloat * reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)  | 计算着色率图像。  
 | GL_APICALL void GL_APIENTRY HMS_XEG_ApplyAdaptiveVRS (GLuint shadingRateImage)  | 将着色率图像应用到渲染目标中。  
 | VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32_t * pPropertyCount, XEG_ExtensionProperties * pProperties)  | XEngine Vulkan扩展特性查询接口。  
 | VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateAdaptiveVRS (VkDevice device, XEG_AdaptiveVRSCreateInfo * pXegAdaptiveVRSCreateInfo, XEG_AdaptiveVRS * pXegAdaptiveVRS)  | 创建XEG_AdaptiveVRS对象。  
 | VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdDispatchAdaptiveVRS (VkCommandBuffer commandBuffer, XEG_AdaptiveVRS xegAdaptiveVRS, XEG_AdaptiveVRSDescription * pXegAdaptiveVRSDescription)  | 执行计算自适应可变着色率命令。  
 | VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyAdaptiveVRS (XEG_AdaptiveVRS xegAdaptiveVRS)  | 销毁XEG_AdaptiveVRS对象。  
  

    #### 业务流程

下面是基于GLES图形API平台集成自适应VRS的主要业务流程

  

  
 
- 用户在进入游戏初始化场景时调用HMS_XEG_GetString接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含自适应VRS时代表可以使用此特性。
- 此时调用HMS_XEG_AdaptiveVRSParameter接口配置超分参数。
- 当游戏运行时，游戏渲染当前帧纹理。
- 在使用自适应VRS特性的阶段前，调用HMS_XEG_DispatchAdaptiveVRS接口计算着色率图。
- 调用HMS_XEG_ApplyAdaptiveVRS将着色率图像应用到渲染目标中。
- 游戏渲染剩下的纹理，如UI等。
- 当前帧已全部渲染完成，进行送显。
- 当游戏退出时，超分资源会自行释放。

 
下面是基于Vulkan图形API平台集成自适应VRS的主要业务流程

  

  
 
- 用户在进入游戏初始化场景时调用HMS_XEG_EnumerateDeviceExtensionProperties接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含自适应VRS时代表可以使用此特性。
- 此时调用HMS_XEG_CreateAdaptiveVRS接口创建自适应VRS实例。
- 使用自适应VRS特性时，需要创建能够支持VRS的vulkan资源。
- 当游戏运行时，游戏渲染当前帧纹理。
- 调用HMS_XEG_CmdDispatchAdaptiveVRS计算着色率图。
- 将着色率图像应用到渲染目标中。
- 渲染剩下的游戏纹理，如UI等。
- 当前帧已全部渲染完成，进行送显。
- 当游戏退出时，调用HMS_XEG_DestroyAdaptiveVRS接口销毁自适应VRS实例。

   #### 开发步骤

本章以OpenGL ES和Vulkan图像API集成为例，说明XEngine集成操作过程。

   #### [h2]配置项目

编译HAP时，Native层so编译需要依赖NDK中的libxengine.so。

 
头文件引用

  按需引用XEngine的头文件，如使用OpenGL ES自适应VRS功能。

  ```
#include <cstring>
#include <cstdlib>
#include <xengine/xeg_gles_extension.h>
#include <xengine/xeg_gles_adaptive_vrs.h>
```
  按需引用XEngine的头文件，如使用Vulkan自适应VRS功能。

  ```
#include <string>
#include <vector>
#include <algorithm>
#include <xengine/xeg_vulkan_extension.h>
#include <xengine/xeg_vulkan_adaptive_vrs.h>
```
  编写CMakeLists.txt

  按需引用XEngine的CMakeLists，如使用OpenGL ES自适应VRS功能，CMakeLists.txt部分示例代码如下，完整示例代码请参见[Demo（GPU加速引擎-GLES）](https://gitcode.com/harmonyos_samples/xengine-samplecode-gles-demo-cpp)。

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
  按需引用XEngine的CMakeLists，如使用Vulkan自适应VRS功能，CMakeLists.txt部分示例代码如下，完整示例代码请参见[Demo（GPU加速引擎-Vulkan）](https://gitcode.com/harmonyos_samples/xengine-samplecode-vulkan-demo-cpp)。

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
  
   #### [h2]集成自适应VRS功能（OpenGL ES）

自适应VRS功能OpenGL ES版本的着色率纹理创建和绑定由特性提供的接口实现。

 在调用XEngine Kit能力前，需要先通过[Syscap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap#判断-api-是否可以使用)查询您的目标设备是否支持SystemCapability.Graphic.XEngine系统能力。

 
调用[HMS_XEG_GetString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_getstring)接口，获取XEngine支持的扩展信息，只有在支持[XEG_ADAPTIVE_VRS_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptive_vrs_extension_name)扩展时才可以使用自适应VRS的相关接口。

  ```
// 查询XEngine支持的GLES扩展信息
const char* extensions = (const char*)HMS_XEG_GetString(XEG_EXTENSIONS);
// 查询是否支持自适应VRS
if (!strstr(extensions, XEG_ADAPTIVE_VRS_EXTENSION_NAME)) {
    exit(1); // return error
}
```
  调用[HMS_XEG_AdaptiveVRSParameter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_adaptivevrsparameter)接口，对自适应VRS的参数赋值。

  ```
// renderWidth与renderHeight分别为用户自定义的渲染宽度与渲染高度，此处以800*600分辨率为例
uint32_t renderWidth = 800;
uint32_t renderHeight = 600;
// inputSize为上一帧渲染管线最终渲染的图像尺寸，用户可自定义
GLsizei inputSize[2] = {static_cast<GLsizei>(renderWidth), static_cast<GLsizei>(renderHeight)};
HMS_XEG_AdaptiveVRSParameter(XEG_ADAPTIVE_VRS_INPUT_SIZE, inputSize);
// inputRegion为上一帧渲染管线最终渲染的图像区域，用户可自定义
GLuint inputRegion[4] = {0, 0, renderWidth, renderHeight};
HMS_XEG_AdaptiveVRSParameter(XEG_ADAPTIVE_VRS_INPUT_REGION, inputRegion);
// texelSizes为渲染的分片大小，用户可自定义，当前支持[8, 8]和[16, 16]两种规格
GLsizei texelSizes[2] = {8, 8};
HMS_XEG_AdaptiveVRSParameter(XEG_ADAPTIVE_VRS_TEXEL_SIZE, texelSizes);
// sensitivity为控制生成着色率图像的阈值，用户可自定义，建议取值范围为[0, 1]
GLfloat sensitivity = 0.15;
HMS_XEG_AdaptiveVRSParameter(XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY, &sensitivity);
// flip为判断是否执行图像上下翻转，为true表示不进行图像上下翻转，false则表示进行图像上下翻转，此处以false为例
GLboolean flip = false;
HMS_XEG_AdaptiveVRSParameter(XEG_ADAPTIVE_VRS_FLIP, &flip);
```
  调用[HMS_XEG_DispatchAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_dispatchadaptivevrs)接口计算着色率图像。

  ```
// inputColorImage为用户自定义上一帧渲染管线最终渲染结果颜色附件纹理
GLuint inputColorImage;
// inputDepthImage为用户自定义当前帧渲染管线最终渲染结果深度附件纹理
GLuint inputDepthImage;
// outputShadingRateImage为用户可自定义生成着色率图像信息的纹理
GLuint outputShadingRateImage;
// reprojectionMatrix为用户根据投影矩阵和观察矩阵计算得来的重投影矩阵
float *reprojectionMatrix = nullptr;
HMS_XEG_DispatchAdaptiveVRS(reprojectionMatrix, inputColorImage, inputDepthImage, outputShadingRateImage);
```
  调用[HMS_XEG_ApplyAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_applyadaptivevrs)接口，将着色率图像应用到渲染目标中。

  ```
HMS_XEG_ApplyAdaptiveVRS(outputShadingRateImage);
```
  
   #### [h2]集成自适应VRS功能（Vulkan）

在调用XEngine Kit能力前，需要先通过[Syscap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap#判断-api-是否可以使用)查询您的目标设备是否支持SystemCapability.Graphic.XEngine系统能力。

 
调用[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口，获取XEngine支持的扩展信息，只有在支持[XEG_ADAPTIVE_VRS_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptive_vrs_extension_name)扩展时才可以使用自适应VRS的相关接口。

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
// 查询是否支持自适应VRS
if (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_ADAPTIVE_VRS_EXTENSION_NAME) == supportedExtensions.end()) {
   exit(1); // return error
}
```
  声明实例句柄。

  XEG_AdaptiveVRS xeg_adaptiveVRS;  调用[HMS_XEG_CreateAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_createadaptivevrs)接口，定义并创建实例。

  ```
// m_renderWidth与m_renderHeight分别为纹理采样宽高
int m_renderWidth;
int m_renderHeight;
// VRS_TILE_SIZE为自适应VRS的渲染的分片大小
int VRS_TILE_SIZE;
// Vulkan逻辑设备，用户需进行初始化
VkDevice device;
// XEG_AdaptiveVRSCreateInfo为自适应VRS实例句柄对象的参数信息
XEG_AdaptiveVRSCreateInfo xeg_createInfo;
// XEG_AdaptiveVRSDescription为下发绘制着色率纹理命令所需参数信息
XEG_AdaptiveVRSDescription xeg_description;
// VkExtent2D inputSize为上一帧渲染管线最终渲染的图像尺寸，用户可自定义
VkExtent2D inputSize;
inputSize.width = m_renderWidth;
inputSize.height = m_renderHeight;
// VkRect2D为Vulkan指定的二维区域结构
// inputRegion为自适应VRS输入纹理区域，用户可自定义
VkRect2D inputRegion {};
// inputRegion.extent.width与inputRegion.extent.height分别为纹理采样宽高
inputRegion.extent.width = m_renderWidth;
inputRegion.extent.height = m_renderHeight;
// inputRegion.offset.x和inputRegion.offset.y为原点偏移量
inputRegion.offset.x = 0;
inputRegion.offset.y = 0;
// xeg_createInfo.inputSize为上一帧渲染管线最终渲染的图像尺寸
xeg_createInfo.inputSize = inputSize;
// xeg_createInfo.inputRegion为上一帧渲染管线最终渲染的图像区域
xeg_createInfo.inputRegion = inputRegion;
// xeg_createInfo.adaptiveTileSize为自适应VRS的渲染的分片大小
xeg_createInfo.adaptiveTileSize = VRS_TILE_SIZE;
// xeg_createInfo.errorSensitivity为控制最终生成着色率纹理结果的阈值，此处以阈值为0.5为例
xeg_createInfo.errorSensitivity = 0.5;
// xeg_createInfo.flip为判断是否执行图像上下翻转，为true表示进行图像上下翻转，false则表示不进行图像上下翻转，此处以false为例
xeg_createInfo.flip = false;
HMS_XEG_CreateAdaptiveVRS(device, &xeg_createInfo, &xeg_adaptiveVRS);
```
  调用[HMS_XEG_CmdDispatchAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmddispatchadaptivevrs)接口，下发自适应VRS命令，生成perImage着色率纹理。

  ```
// inputColorImageView为用户自定义的上一帧渲染管线最终渲染结果颜色附件纹理
VkImageView inputColorImageView = VK_NULL_HANDLE;
// inputDepthImageView为用户自定义的当前帧渲染管线最终渲染结果深度附件纹理
VkImageView inputDepthImageView = VK_NULL_HANDLE;
// outputShadingRateImage为用户自定义的生成着色率图信息的纹理
VkImageView outputShadingRateImage = VK_NULL_HANDLE;
// cmdBuff为命令缓冲区，用户需进行初始化
VkCommandBuffer commandBuffer = VK_NULL_HANDLE ;
xeg_description.inputColorImage = inputColorImageView;
xeg_description.inputDepthImage = inputDepthImageView;
xeg_description.outputShadingRateImage = outputShadingRateImage;
 // xeg_description.reprojectionMatrix为使用投影矩阵和观察矩阵计算而来的重投影矩阵
xeg_description.reprojectionMatrix = nullptr;
HMS_XEG_CmdDispatchAdaptiveVRS(commandBuffer, xeg_adaptiveVRS, &xeg_description);
```
  调用[HMS_XEG_DestroyAdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_destroyadaptivevrs)接口，卸载VRS实例，清理VRS相关资源。

  ```
HMS_XEG_DestroyAdaptiveVRS(xeg_adaptiveVRS);
```

---
*Updated: 2026-04-20 01:44:34*
