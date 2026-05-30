# OpenGL ES平台

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-fg-systempresent-gles`  |  **DocID**: `c1d311823ffd4a21b200cf22a683e5e3`  |  **NodeID**: `000201775795491975071f9ccddbc8a7`

---

# OpenGL ES平台

                 #### 业务流程

     基于OpenGL ES图形API平台，系统送显模式的主要业务流程如下：

     

     
             用户进入超帧适用的游戏场景。

             游戏应用调用[HMS_FG_CreateContext_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_createcontext_gles)接口创建超帧上下文实例。如超帧上下文实例创建失败，则无需在步骤6提供当前帧信息，只需逐帧对场景进行渲染送显即可。

             游戏应用调用接口配置超帧实例属性。包括调用[HMS_FG_SetAlgorithmMode_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setalgorithmmode_gles)（必选）设置超帧算法模式并选择内插模式；按需调用其他插帧相关配置接口。

             设置集成模式，选择系统侧集成调用[HMS_FG_SetIntegrationMode_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setintegrationmode_gles)（必选）设置超帧预测的集成信息[FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info)并选择系统侧送显；系统送显预测帧模式下可通过[HMS_FG_SetUiPredictionEnabled_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_setuipredictionenabled_gles)（可选）启用UI预测功能，不启用时预测帧会复用上一帧的UI进行展示；系统送显模式下可通过[HMS_FG_SetTargetFps_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_settargetfps_gles)（可选）设置超帧后的目标帧率。

             游戏应用调用[HMS_FG_Activate_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_activate_gles)接口激活超帧上下文实例。

             游戏应用渲染真实帧，调用[HMS_FG_Dispatch_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_gles)接口并传入真实帧颜色信息、深度信息、相机矩阵信息，生成预测帧。

             游戏应用完成UI绘制，并送显当前真实帧。

             用户退出超帧适用的游戏场景。

             游戏应用调用[HMS_FG_DestroyContext_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_destroycontext_gles)接口销毁超帧上下文实例并释放内存资源。

     
                  #### 开发步骤

     本节阐述基于OpenGL ES图形API平台的系统送显模式调用示例。

     
             设置meta-data。在应用的module.json5中声明meta-data以支持系统送显模式。

       ```
{
    "module": {
         /*
          其他的配置项
          ...
         */
        "metadata": [
            {
                "name": "GraphicsAccelerateKit_FusionAware",
                "value": "GLES"
            }
        ]
    }
}
```
             引用Graphics Accelerate Kit超帧头文件：frame_generation_gles.h。

       ```
// 引用超帧frame_generation_gles.h头文件
#include <graphics_game_sdk/frame_generation_gles.h>
```
             调用[HMS_FG_CreateContext_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_createcontext_gles)接口创建超帧上下文实例。如果返回nullptr，则说明超帧上下文实例创建失败，或当前硬件设备不支持开启超帧。

       ```
// 创建超帧上下文实例
FG_Context_GLES* context_ = HMS_FG_CreateContext_GLES();
if (context_ == nullptr) {
    return false;
}
```
             调用超帧实例属性配置接口，超帧算法模式选择内插模式并指定系统送显预测帧模式。

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

// 超帧预测的集成信息
FG_IntegrationInfo integrationInfo {};
integrationInfo.presentMode = FG_PRESENT_BY_SYSTEM;                       // 预测帧送显模式
integrationInfo.textureCachedByGame = false;                              // 输入的颜色纹理和深度纹理游戏侧缓存 系统不会复制一份再做预测 默认游戏不会缓存
integrationInfo.needFlipInputColor = false;                               // 颜色纹理需要翻转 默认false
integrationInfo.needFlipOutputColor = false;                              // 预测帧需要翻转 默认false
// [可选] 设置超帧预测的集成信息
errorCode = HMS_FG_SetIntegrationMode_GLES(context_, &integrationInfo);
if (errorCode != FG_SUCCESS) {
    return false;
}

// 调用其他插帧相关配置接口
// ...

// [可选] 设置是否启用UI预测功能，仅在系统送显模式下有效，在游戏送显模式下无效，接口不调用默认为false，预测帧会复用上一帧的UI进行展示
errorCode = HMS_FG_SetUiPredictionEnabled_GLES(context_, false);
if (errorCode != FG_SUCCESS) {
    return false;
}

// [可选] 设置超帧后的目标帧率，仅在系统送显模式下且游戏上架后有效，在游戏送显模式下无效，接口不调用默认不会限制帧率，取决于游戏渲染帧率
errorCode = HMS_FG_SetTargetFps_GLES(context_, 60);
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
             游戏运行中，渲染真实帧时，缓存颜色信息、深度信息和相机矩阵等属性信息。渲染预测帧时，需调用[HMS_FG_Dispatch_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_gles)接口并传入真实帧属性信息，生成预测帧。游戏送显真实帧，系统会在真实帧和上一帧间完成预测帧的展示。

       ```
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
FG_Mat4x4 preViewProj;
FG_Mat4x4 preInvViewProj;

// 帧循环
while (true) {
    // 真实帧渲染阶段
    // 绘制真实帧
    // ...

    // 绘制UI
    // ...

    // 渲染当前帧渲染画面，缓存颜色、深度、相机矩阵等信息，用于下一帧预测帧生成
    // ...

    // 预测帧渲染阶段
    // 传入上一帧真实渲染帧颜色缓冲区索引
    dispatchDescriptionData_.inputColor = inputColor;
    // 传入上一帧真实渲染帧深度模板缓冲区索引
    dispatchDescriptionData_.inputDepthStencil = inputDepthStencil;
    // 传入上一帧真实渲染帧视图投影矩阵
    dispatchDescriptionData_.viewProj = preViewProj;
    // 传入上一帧真实渲染帧视图投影逆矩阵
    dispatchDescriptionData_.invViewProj= preInvViewProj;

    // [可选] 当视图投影矩阵的平移分量非常大时，可提供相机扩展属性信息获得更加准确的超帧效果
    FG_PerFrameExtendedCameraInfo info;
    errorCode = HMS_FG_SetExtendedCameraInfo_GLES(context_, &info);

    // 生成预测帧，更新预测帧缓冲区的内存
    errorCode = HMS_FG_Dispatch_GLES(context_, &dispatchDescriptionData_);
    switch (errorCode) {
        case FG_SUCCESS:
            // 生成预测帧成功
            break;
        case FG_COLLECTING_PREVIOUS_FRAMES:
            // 传入真实帧数量未达到固定阈值，无预测帧生成，基础内插模式传入真实帧数量<2时返回该状态码，此时不要将预测帧送显
            break;
        default:
            // 预测帧生成失败
            break;
    }

    // 送显真实帧
    // ...
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
