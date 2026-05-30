# Vulkan平台

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-fg-interpolation-vulkan`  |  **DocID**: `5bf6c8e92592471e940261357d912efc`  |  **NodeID**: `000201775795491975076b3167598b1c`

---

# Vulkan平台

                 #### 业务流程

     基于Vulkan图形API平台，超帧内插模式的主要业务流程如下：

     

     
             用户进入超帧适用的游戏场景。

             游戏应用调用[HMS_FG_CreateContext_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_createcontext_vk)接口创建超帧上下文实例。如超帧上下文实例创建失败，则无需进入步骤6到步骤10的预测帧、真实帧交替渲染送显的循环流程，只需逐帧对场景进行渲染送显即可。

             游戏应用调用接口配置超帧实例属性。包括调用[HMS_FG_SetAlgorithmMode_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setalgorithmmode_vk)（必选）设置超帧算法模式并选择内插模式；调用[HMS_FG_SetResolution_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setresolution_vk)（必选）设置超帧输入输出图像分辨率；调用[HMS_FG_SetCvvZSemantic_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setcvvzsemantic_vk)（可选）设置齐次裁剪空间Z/W范围及深度测试函数；调用[HMS_FG_SetImageFormat_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setimageformat_vk)（可选）设置超帧输入输出图像格式；如果颜色缓冲区相对深度模板缓冲区基于y轴翻转180度，则调用[HMS_FG_SetDepthStencilYDirectionInverted_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setdepthstencilydirectioninverted_vk)（可选）设置翻转状态。

             游戏应用调用[HMS_FG_Activate_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_activate_vk)接口激活超帧上下文实例。

             游戏应用调用[HMS_FG_CreateImage_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_createimage_vk)接口创建真实渲染帧颜色缓冲区图像实例、深度模板缓冲区图像实例、预测帧缓冲区图像实例。该接口将游戏应用中的VkImage、VkImageView图像资源和超帧算法实现之间建立关联。

             游戏应用调用[HMS_FG_Dispatch_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_vk)接口并传入历史真实渲染帧颜色信息、深度信息、相机矩阵信息，生成预测帧，并更新预测帧缓冲区。

             预测帧绘制UI并送显。

             绘制缓存中的上一帧真实渲染帧，并绘制UI。

             上一帧真实渲染帧送显。

             渲染游戏场景获取真实渲染帧，缓存真实渲染帧颜色信息、深度信息、相机矩阵等信息，用于后续超帧预测。由于内插模式真实帧需要等待前一帧预测帧绘制并送显后再送显，因此此处缓存一帧真实帧信息。跳转至序号5继续执行，直到退出游戏场景。

             用户退出超帧适用的游戏场景。

             游戏应用调用[HMS_FG_DestroyContext_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_destroycontext_vk)接口销毁超帧上下文实例并释放内存资源。

     
                  #### 开发步骤

     本节阐述基于Vulkan图形API平台的超帧调用示例。详细代码请参考[图形开发Sample（超帧Vulkan）](https://gitcode.com/harmonyos_samples/frame-generation-vulkan-samplecode-clientdemo-cpp)。

     
             引用Graphics Accelerate Kit超帧头文件：frame_generation_vk.h。

       ```
// 引用超帧frame_generation_vk.h头文件
#include <graphics_game_sdk/frame_generation_vk.h>
```
             编写CMakeLists.txt。

       ```
find_library(
    # Sets the name of the path variable.
    framegeneration-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    libframegeneration.so
)
find_library(
    # Sets the name of the path variable.
    vulkan-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    vulkan
)

target_link_libraries(entry PUBLIC
    ${framegeneration-lib} ${vulkan-lib}
)
```
             调用[HMS_FG_CreateContext_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_createcontext_vk)接口创建超帧上下文实例。如果返回nullptr，则说明超帧上下文实例创建失败，或当前硬件设备不支持开启超帧。

       ```
// 变量声明
VkInstance vkInstance = VK_NULL_HANDLE;
VkPhysicalDevice vkPhysicalDevice = VK_NULL_HANDLE;
VkDevice vkDevice = VK_NULL_HANDLE;

// 创建超帧上下文实例
FG_ContextDescription_VK contextDescription{};
contextDescription.vkInstance = vkInstance;
contextDescription.vkPhysicalDevice = vkPhysicalDevice;
contextDescription.vkDevice = vkDevice;
contextDescription.framesInFlight = 1;
contextDescription.fnVulkanLoaderFunction = vkGetInstanceProcAddr;
FG_Context_VK* m_context = HMS_FG_CreateContext_VK(&contextDescription);
if (m_context == nullptr) {
    return false;
}
```
             调用超帧实例属性配置接口，超帧算法模式选择内插模式。

       ```
// 初始化超帧接口调用错误码
FG_ErrorCode errorCode = FG_SUCCESS;

// 超帧算法模式
FG_AlgorithmModeInfo aInfo{};
aInfo.predictionMode = FG_PREDICTION_MODE_INTERPOLATION;                  // 内插模式
aInfo.meMode = FG_ME_MODE_BASIC;                                          // 运动估计基础模式
errorCode = HMS_FG_SetAlgorithmMode_VK(m_context, &aInfo);                // [必选] 设置超帧算法模式
if (errorCode != FG_SUCCESS) {
    return false;
}

// 真实帧颜色缓冲区分辨率
FG_Dimension2D inputColorResolution{};
inputColorResolution.width = 1280;                                        // 真实帧颜色缓冲区图像宽度
inputColorResolution.height = 720;                                        // 真实帧颜色缓冲区图像高度
// 真实帧深度模板缓冲区分辨率
FG_Dimension2D inputDepthStencilResolution{};
inputDepthStencilResolution.width = 1280;                                 // 真实帧深度模板缓冲区图像宽度
inputDepthStencilResolution.height = 720;                                 // 真实帧深度模板缓冲区图像高度
// 预测帧分辨率
FG_Dimension2D outputColorResolution{};
outputColorResolution.width = 1280;                                       // 预测帧图像宽度
outputColorResolution.height = 720;                                       // 预测帧图像高度
// 超帧输入输出图像分辨率
FG_ResolutionInfo rInfo{};
rInfo.inputColorResolution = inputColorResolution;
rInfo.inputDepthStencilResolution = inputDepthStencilResolution;
rInfo.outputColorResolution = outputColorResolution;
errorCode = HMS_FG_SetResolution_VK(m_context, &rInfo);                   // [必选] 设置超帧输入输出图像分辨率
if (errorCode != FG_SUCCESS) {
    return false;
}

// [可选] 设置齐次裁剪空间Z/W范围及深度测试模式，接口不调用时默认为FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z
errorCode = HMS_FG_SetCvvZSemantic_VK(m_context, FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z);
if (errorCode != FG_SUCCESS) {
    return false;
}

// [可选] 设置超帧输入输出图像格式
FG_ImageFormat_VK imageFormat{};
imageFormat.inputColorFormat = VK_FORMAT_R8G8B8A8_UNORM;
imageFormat.inputDepthStencilFormat = VK_FORMAT_D24_UNORM_S8_UINT;
imageFormat.outputColorFormat = VK_FORMAT_R8G8B8A8_UNORM;
errorCode = HMS_FG_SetImageFormat_VK(m_context, &imageFormat);
if (errorCode != FG_SUCCESS) {
    return false;
}

// [可选] 当颜色缓冲区相对深度模板缓冲区基于y轴翻转180度时，设置第二个参数为true，接口不调用时默认为false
errorCode = HMS_FG_SetDepthStencilYDirectionInverted_VK(m_context, true);
if (errorCode != FG_SUCCESS) {
    return false;
}
```
             调用[HMS_FG_Activate_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_activate_vk)接口激活超帧上下文实例。

       ```
// 激活超帧上下文实例
errorCode = HMS_FG_Activate_VK(m_context);
if (errorCode != FG_SUCCESS) {
    return false;
}
```
             调用[HMS_FG_CreateImage_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_createimage_vk)接口创建真实渲染帧颜色缓冲区图像实例、深度模板缓冲区图像实例、预测帧缓冲区图像实例。

       ```
// 变量声明
VkImage inputColorImage = VK_NULL_HANDLE;
VkImageView inputColorImageView = VK_NULL_HANDLE;
VkImage inputDepthStencilImage = VK_NULL_HANDLE;
VkImageView inputDepthStencilImageView = VK_NULL_HANDLE;
VkImage outputColorImage = VK_NULL_HANDLE;
VkImageView outputColorImageView = VK_NULL_HANDLE;

// 创建真实帧颜色缓冲区图像实例
FG_Image_VK* inputColor = HMS_FG_CreateImage_VK(m_context, inputColorImage, inputColorImageView);
if (!inputColor) {
    return false;
}
// 创建真实帧深度模板缓冲区图像实例
FG_Image_VK* inputDepthStencil = HMS_FG_CreateImage_VK(m_context, inputDepthStencilImage, inputDepthStencilImageView);
if (!inputDepthStencil) {
    return false;
}
// 创建预测帧缓冲区图像实例
FG_Image_VK* outputColor = HMS_FG_CreateImage_VK(m_context, outputColorImage, outputColorImageView);
if (!outputColor) {
    return false;
}
```
             游戏运行中，真实帧和预测帧交替渲染并送显。渲染真实帧时，缓存颜色信息、深度信息和相机矩阵等属性信息。渲染预测帧时，需调用[HMS_FG_Dispatch_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_vk)接口并传入上一帧真实帧属性信息，指定预测帧缓冲区索引，生成预测帧，最终更新预测帧缓冲区内存。

       ```
// 帧计数
uint32_t frameNum = 0;

// 帧循环
while (true) {
    frameNum += 1;
    if ((frameNum & 1) != 0) { // 预测帧渲染阶段
        // 设置预测帧生成前真实帧颜色缓冲区同步状态
        FG_ImageSync_VK inputColorInitImageSync{};
        inputColorInitImageSync.stages = VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT;
        inputColorInitImageSync.layout = VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL;
        inputColorInitImageSync.accessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;

        // 设置预测帧生成后真实帧颜色缓冲区同步状态
        FG_ImageSync_VK inputColorFinalImageSync{};
        inputColorFinalImageSync.stages = VK_PIPELINE_STAGE_TRANSFER_BIT;
        inputColorFinalImageSync.layout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;
        inputColorFinalImageSync.accessMask = VK_ACCESS_TRANSFER_READ_BIT;

        // 创建真实帧颜色缓冲区图像属性实例
        FG_ImageInfo_VK inputColorImageInfo{};
        inputColorImageInfo.image = inputColor;
        inputColorImageInfo.initialSync = inputColorInitImageSync;
        inputColorImageInfo.finalSync = inputColorFinalImageSync;

        // 设置预测帧生成前深度模板缓冲区同步状态
        FG_ImageSync_VK depthInitImageSync{};
        depthInitImageSync.stages = VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT;
        depthInitImageSync.layout = VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL;
        depthInitImageSync.accessMask = VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;

        // 设置预测帧生成后深度模板缓冲区同步状态
        FG_ImageSync_VK depthFinalImageSync{};
        depthFinalImageSync.stages = VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT;
        depthFinalImageSync.layout = VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL;
        depthFinalImageSync.accessMask = VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_READ_BIT;

        // 创建真实帧深度模板缓冲区图像属性实例
        FG_ImageInfo_VK depthImageInfo{};
        depthImageInfo.image = inputDepthStencil;
        depthImageInfo.initialSync = depthInitImageSync;
        depthImageInfo.finalSync = depthFinalImageSync;

        // 设置预测帧生成前预测帧缓冲区同步状态
        FG_ImageSync_VK outputColorInitImageSync{};
        outputColorInitImageSync.stages = VK_PIPELINE_STAGE_ALL_GRAPHICS_BIT;
        outputColorInitImageSync.layout = VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL;
        outputColorInitImageSync.accessMask = VK_ACCESS_SHADER_WRITE_BIT;

        // 设置预测帧生成后预测帧缓冲区同步状态
        FG_ImageSync_VK outputColorFinalImageSync{};
        outputColorFinalImageSync.stages = VK_PIPELINE_STAGE_TRANSFER_BIT;
        outputColorFinalImageSync.layout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;
        outputColorFinalImageSync.accessMask = VK_ACCESS_TRANSFER_READ_BIT;

        // 创建预测帧缓冲区图像属性实例
        FG_ImageInfo_VK outputColorImageInfo{};
        outputColorImageInfo.image = outputColor;
        outputColorImageInfo.initialSync = outputColorInitImageSync;
        outputColorImageInfo.finalSync = outputColorFinalImageSync;

        // 帧生成属性配置结构体
        FG_DispatchDescription_VK dispatchDescription{};
        // 传入真实渲染帧颜色缓冲区属性信息
        dispatchDescription.inputColorInfo = inputColorImageInfo;
        // 传入真实渲染帧深度模板缓冲区属性信息
        dispatchDescription.inputDepthStencilInfo = depthImageInfo;
        // 传入预测帧缓冲区属性信息
        dispatchDescription.outputColorInfo = outputColorImageInfo;

        // 变量声明
        FG_Mat4x4 preViewProj;
        FG_Mat4x4 preInvViewProj;
        VkCommandBuffer vkCommandBuffer = VK_NULL_HANDLE;

        // 传入上一帧真实渲染帧视图投影矩阵
        dispatchDescription.viewProj = preViewProj;
        // 传入上一帧真实渲染帧视图投影逆矩阵
        dispatchDescription.invViewProj = preInvViewProj;
        // 传入用于录入超帧绘制指令的命令缓冲区句柄
        dispatchDescription.vkCommandBuffer = vkCommandBuffer;
        // 传入当前帧序号
        dispatchDescription.frameIdx = 0;

        // 生成预测帧，更新预测帧缓冲区的内存
        errorCode = HMS_FG_Dispatch_VK(m_context, &dispatchDescription);
        if (errorCode != FG_SUCCESS) {
            return false;
        }
        switch (errorCode) {
            case FG_SUCCESS: { // 生成预测帧成功
                // 绘制预测帧
                // ...

                // 绘制UI
                // ...

                // 预测帧送显
                // ...
                break;
            }
            case FG_COLLECTING_PREVIOUS_FRAMES:
                // 传入真实帧数量未达到固定阈值，无预测帧生成，内插模式传入真实帧数量<3时返回该状态码，此时不要将预测帧送显
                break;
            default:
                // 预测帧生成失败
                return false;
        }
    } else { // 真实帧渲染阶段
        // 绘制缓存中的上一帧真实帧
        // ...

        // 绘制UI
        // ...
        
        // 渲染当前帧渲染画面，缓存颜色、深度、相机矩阵等信息，用于下一帧预测帧生成
        // ...
       
        // 送显缓存中的上一帧真实帧
        // ...
    }
}
```
             调用[HMS_FG_DestroyContext_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_destroycontext_vk)接口销毁超帧实例，释放内存资源。

       ```
// 销毁超帧上下文实例并释放内存资源
errorCode = HMS_FG_DestroyContext_VK(&m_context);
if (errorCode != FG_SUCCESS) {
    return false;
}
```

---
*Updated: 2026-04-20 01:45:03*
