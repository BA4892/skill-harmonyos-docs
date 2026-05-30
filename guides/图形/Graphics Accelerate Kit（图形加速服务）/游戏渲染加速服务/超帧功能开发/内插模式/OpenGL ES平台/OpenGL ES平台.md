# OpenGL ES平台

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-fg-interpolation-gles`  |  **DocID**: `a08d0cf83d454c3dae3d6e7935fa0790`  |  **NodeID**: `00020177579549197507370416e7fc37`

---

# OpenGL ES平台

                 #### 业务流程

     基于OpenGL ES图形API平台，超帧内插模式的主要业务流程如下：

     

     
             用户进入超帧适用的游戏场景。

             游戏应用调用[HMS_FG_CreateContext_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_createcontext_gles)接口创建超帧上下文实例。如超帧上下文实例创建失败，则无需进入步骤5到步骤9的预测帧、真实帧交替渲染送显的循环流程，只需逐帧对场景进行渲染送显即可。

             游戏应用调用接口配置超帧实例属性。包括调用[HMS_FG_SetAlgorithmMode_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setalgorithmmode_gles)（必选）设置超帧算法模式并选择内插模式；调用[HMS_FG_SetResolution_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setresolution_gles)（必选）设置超帧输入输出图像分辨率；调用[HMS_FG_SetCvvZSemantic_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setcvvzsemantic_gles)（可选）设置齐次裁剪空间Z/W范围及深度测试函数；调用[HMS_FG_SetImageFormat_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setimageformat_gles)（可选）设置真实渲染帧颜色缓冲区图像格式；如果颜色缓冲区相对深度模板缓冲区基于y轴翻转180度，则调用[HMS_FG_SetDepthStencilYDirectionInverted_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setdepthstencilydirectioninverted_gles)（可选）设置翻转状态。

             游戏应用调用[HMS_FG_Activate_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_activate_gles)接口激活超帧上下文实例。

             游戏应用调用[HMS_FG_Dispatch_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_gles)接口并传入历史真实渲染帧颜色信息、深度信息、相机矩阵信息，生成预测帧，并更新预测帧缓冲区。当相机视图投影矩阵的平移分量非常大时（如超过10W），预测帧效果下降，画面易出现闪烁。此时可在[HMS_FG_Dispatch_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_gles)接口调用前调用[HMS_FG_SetExtendedCameraInfo_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setextendedcamerainfo_gles)设置相机扩展信息，从而获取精度更高的预测帧效果。

             预测帧绘制UI并送显。

             绘制缓存中的上一帧真实渲染帧，并绘制UI。

             上一帧真实渲染帧送显。

             渲染游戏场景获取真实渲染帧，缓存真实渲染帧颜色信息、深度信息、相机矩阵等信息，用于后续超帧预测。由于内插模式真实帧需要等待前一帧预测帧绘制并送显后再送显，因此此处缓存一帧真实帧信息。跳转至序号5继续执行，直到退出游戏场景。

             用户退出超帧适用的游戏场景。

             游戏应用调用[HMS_FG_DestroyContext_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_destroycontext_gles)接口销毁超帧上下文实例并释放内存资源。

     
                  #### 开发步骤

     本节阐述基于OpenGL ES图形API平台的超帧调用示例。详细代码请参考[图形开发Sample（超帧GLES）](https://gitcode.com/harmonyos_samples/frame-generation-gles-samplecode-clientdemo-cpp)。

     
             引用Graphics Accelerate Kit超帧头文件：frame_generation_gles.h。

       ```
// 引用超帧frame_generation_gles.h头文件
#include <graphics_game_sdk/frame_generation_gles.h>
```
             编写CMakeLists.txt。

       ```
find_library(
    # Sets the name of the path variable.
    framegeneration-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    libframegeneration.so
)

target_link_libraries(entry PUBLIC
    ${framegeneration-lib}
)
```
             调用[HMS_FG_CreateContext_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_createcontext_gles)接口创建超帧上下文实例。如果返回nullptr，则说明超帧上下文实例创建失败，或当前硬件设备不支持开启超帧。

       ```
// 创建超帧上下文实例
FG_Context_GLES* context_ = HMS_FG_CreateContext_GLES();
if (context_ == nullptr) {
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
errorCode = HMS_FG_SetAlgorithmMode_GLES(context_, &aInfo);               // [必选] 设置超帧算法模式
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
errorCode = HMS_FG_SetResolution_GLES(context_, &rInfo);                  // [必选] 设置超帧输入输出图像分辨率
if (errorCode != FG_SUCCESS) {
    return false;
}

// [可选] 设置齐次裁剪空间Z/W范围及深度测试模式，接口不调用时默认为FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z
errorCode = HMS_FG_SetCvvZSemantic_GLES(context_, FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z);
if (errorCode != FG_SUCCESS) {
    return false;
}

// [可选] 设置真实渲染帧颜色缓冲区图像格式，接口不调用时默认为FG_FORMAT_R8G8B8A8_UNORM
errorCode = HMS_FG_SetImageFormat_GLES(context_, FG_FORMAT_R8G8B8A8_UNORM);
if (errorCode != FG_SUCCESS) {
    return false;
}

// [可选] 当颜色缓冲区相对深度模板缓冲区基于y轴翻转180度时，设置第二个参数为true，接口不调用时默认为false
errorCode = HMS_FG_SetDepthStencilYDirectionInverted_GLES(context_, true);
if (errorCode != FG_SUCCESS) {
    return false;
}
```
             调用[HMS_FG_Activate_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_activate_gles)接口激活超帧上下文实例。

       ```
// 激活超帧上下文实例
errorCode = HMS_FG_Activate_GLES(context_);
if (errorCode != FG_SUCCESS) {
    return false;
}
```
             游戏运行中，真实帧和预测帧交替渲染并送显。渲染真实帧时，缓存颜色信息、深度信息和相机矩阵等属性信息。渲染预测帧时，需调用[HMS_FG_Dispatch_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_gles)接口并传入上一帧真实帧属性信息，指定预测帧缓冲区索引，生成预测帧，最终更新预测帧缓冲区内存。

       ```
// 帧计数
uint32_t frameNum = 0;
// 帧生成属性配置结构体
FG_DispatchDescription_GLES dispatchDescriptionData_ {
    .inputColor = 0U,
    .inputDepthStencil = 0U,
    .viewProj{},
    .invViewProj{},
    .outputColor = 0U
};

// 变量声明
uint32_t inputColor = 0;
uint32_t inputDepthStencil = 0;
uint32_t outputColor = 0;
FG_Mat4x4 preViewProj;
FG_Mat4x4 preInvViewProj;

// 帧循环
while (true) {
    frameNum += 1;
    if ((frameNum & 1) != 0) { // 预测帧渲染阶段
        // 传入上一帧真实渲染帧颜色缓冲区索引
        dispatchDescriptionData_.inputColor = inputColor;
        // 传入上一帧真实渲染帧深度模板缓冲区索引
        dispatchDescriptionData_.inputDepthStencil = inputDepthStencil;
        // 传入预测帧缓冲区索引
        dispatchDescriptionData_.outputColor = outputColor;
        // 传入上一帧真实渲染帧视图投影矩阵
        dispatchDescriptionData_.viewProj = preViewProj;
        // 传入上一帧真实渲染帧视图投影逆矩阵
        dispatchDescriptionData_.invViewProj= preInvViewProj;
        
        // 生成预测帧，更新预测帧缓冲区的内存
        errorCode = HMS_FG_Dispatch_GLES(context_, &dispatchDescriptionData_);
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
                // 传入真实帧数量未达到固定阈值，无预测帧生成，基础内插模式传入真实帧数量<2时返回该状态码，此时不要将预测帧送显
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
             调用[HMS_FG_DestroyContext_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_destroycontext_gles)接口销毁超帧实例，释放内存资源。

       ```
// 销毁超帧上下文实例并释放内存资源
errorCode = HMS_FG_DestroyContext_GLES(&context_);
if (errorCode != FG_SUCCESS) {
    return false;
}
```

---
*Updated: 2026-04-20 01:45:02*
