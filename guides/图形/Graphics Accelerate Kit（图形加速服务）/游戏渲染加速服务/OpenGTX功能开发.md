# OpenGTX功能开发

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-opengtx`  |  **DocID**: `e38a6d9b650b44268bd4ae9ac7bc9ddc`  |  **NodeID**: `00020177579549197596887f9ae5d502`

---

# OpenGTX功能开发

                 #### 概述

     OpenGTX是GPU Turbo X的开放式入口，根据游戏开发者主动提供的游戏过程中的关键信息，使能LTPO（动态帧率/刷新率）等游戏加速方案，助力游戏开发者打造高画质、高流畅、低功耗极致体验。LTPO通过动态感知游戏渲染状态、游戏场景、设备状态等关键信息，动态调整游戏的帧率/刷新率以及设备的SOC/DDR频率。

     

                  #### 业务流程

     LTPO的主要业务流程如下：

     

     
             用户进入游戏。

             游戏应用调用[HMS_OpenGTX_CreateContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_createcontext)接口创建OpenGTX上下文实例。

             游戏应用调用[HMS_OpenGTX_SetConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_setconfiguration)接口初始化配置实例属性，包含LTPO模式、目标帧率、包名、游戏类型、分辨率、游戏关键线程等属性。

             游戏应用调用[HMS_OpenGTX_Activate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_activate)接口激活OpenGTX上下文实例。

             游戏切换不同游戏场景后调用[HMS_OpenGTX_DispatchGameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_dispatchgamesceneinfo)接口发送游戏场景信息，包含场景类型、指定帧率、调度帧率范围、当前分辨率等信息。

             游戏应用在每帧渲染前调用[HMS_OpenGTX_DispatchFrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_dispatchframerenderinfo)接口发送游戏帧渲染信息，包含游戏主相机的位置和欧拉角。

             游戏应用在每帧渲染前如遇到网络时延档位变化，调用[HMS_OpenGTX_DispatchNetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_dispatchnetworkinfo)接口发送游戏网络信息，包含服务器IP地址、网络时延等信息。

             游戏应用正常绘制。

             一帧送显。

             每帧结束，将帧尾决策帧率、决策设备频率通知到设备。

             用户退出游戏。

             游戏应用调用[HMS_OpenGTX_DestroyContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_destroycontext)接口销毁OpenGTX上下文实例并释放内存资源。

     
                  #### 开发步骤

     本节介绍OpenGTX的开发接入，从流程上分别阐述每个步骤的实现和调用。详细代码请参考[OpenGTX Sample](https://gitcode.com/harmonyos_samples/open-gtx-samplecode-clientdemo-cpp)。

                  #### [h2]设置项目配置项

     在“src/main/module.json5”的module层级中添加以下配置。

     ```
"metadata": [
  {
    "name": "GraphicsAccelerateKit_LTPO",
    "value": "true"
  }
]
```
                  #### [h2]头文件引用

     引用Graphics Accelerate Kit OpenGTX头文件：opengtx_base.h。

     ```
// 引用OpenGTX头文件 opengtx_base.h
#include <graphics_game_sdk/opengtx_base.h>
```
                  #### [h2]编写CMakeLists.txt

     ```
find_library(
    # Sets the name of the path variable.
    opengtx-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    libopengtx.so
)
find_library(
    # Sets the name of the path variable.
    GLES-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    GLESv3
)
find_library(
    # Sets the name of the path variable.
    hilog-lib
    # Specifies the name of the NDK library that you want CMake to locate.
    hilog_ndk.z
)

target_link_libraries(entry PUBLIC
    ${opengtx-lib} ${GLES-lib} ${hilog-lib}
)
```
                  #### [h2]OpenGTX初始化

     在surface创建后，会触发其事件回调函数Core::OnSurfaceCreated()，在该函数中完成OpenGTX上下文实例创建、OpenGTX属性配置和功能激活。其中OpenGTX上下文实例负责管理OpenGTX整个生命周期。

     
             调用[HMS_OpenGTX_CreateContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_createcontext)接口创建OpenGTX上下文实例。如果返回nullptr，则说明OpenGTX上下文实例创建失败，或当前硬件设备不支持开启OpenGTX。

       ```
// 创建OpenGTX上下文实例
OpenGTX_Context *context_ = HMS_OpenGTX_CreateContext(nullptr);
if (context_ == nullptr) {
    return false;
}
```
             调用[HMS_OpenGTX_SetConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_setconfiguration)接口属性配置，包含LTPO模式、目标帧率、包名、游戏类型、分辨率、游戏关键线程等属性。

       ```
// 初始化OpenGTX接口调用错误码
OpenGTX_ErrorCode errorCode = OPENGTX_SUCCESS;
// OpenGTX属性配置结构体
OpenGTX_ConfigDescription config;
// LTPO调度模式
config.mode = ADAPTIVE_MODE;
// 游戏设置目标帧率
config.targetFPS = 120;
// 游戏包名
config.packageName = (char*)"OpenGTX";
// 游戏版本
config.appVersion = (char*)"1.1.0";
// 引擎类型
config.engineType = UNREAL;
// 引擎版本
config.engineVersion = (char*)"4.26.2";
// 游戏类别
config.gameType = RPG;
// 游戏最高画质等级
config.pictureQualityMaxLevel = HD;
// 游戏设置最大分辨率
config.resolutionMaxValue = OpenGTX_ResolutionValue { 1280, 720};
// 游戏逻辑线程
config.gameMainThreadId = 11;
// 游戏渲染线程
config.gameRenderThreadId = 11;
// 游戏运行其他关键线程
config.gameKeyThreadIds[0] = 0;
config.gameKeyThreadIds[1] = 0;
config.gameKeyThreadIds[2] = 0;
config.gameKeyThreadIds[3] = 0;
config.gameKeyThreadIds[4] = 0;
// 游戏图形API是否为Vulkan
config.vulkanSupport = false;
// 初始化OpenGTX实例，配置OpenGTX属性
errorCode = HMS_OpenGTX_SetConfiguration(context_, &config);
if (errorCode != OPENGTX_SUCCESS) {
    return false;
}
```
             调用[HMS_OpenGTX_Activate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_activate)接口激活OpenGTX上下文实例。

       ```
// 激活OpenGTX上下文实例
errorCode = HMS_OpenGTX_Activate(context_);
if (errorCode != OPENGTX_SUCCESS) {
    return false;
}
```
             调用[HMS_OpenGTX_Deactivate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_deactivate)接口去激活OpenGTX上下文实例。（在需要关闭OpenGTX功能时调用此接口。去激活后，调用[HMS_OpenGTX_DispatchGameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_dispatchgamesceneinfo)等接口将不会生效）。

       ```
// 去激活OpenGTX上下文实例
errorCode = HMS_OpenGTX_Deactivate(context_);
if (errorCode != OPENGTX_SUCCESS) {
    return false;
}
```
     
                  #### [h2]OpenGTX关键信息更新

     
             游戏切换不同游戏场景后调用[HMS_OpenGTX_DispatchGameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_dispatchgamesceneinfo)接口发送游戏场景信息，包含场景类型、指定帧率、调度帧率范围、当前分辨率等信息。

       ```
// OpenGTX游戏场景信息结构体
OpenGTX_GameSceneInfo gameSceneInfo;
// 游戏场景类型ID
gameSceneInfo.sceneID = OTHERS_SCENE;
// 游戏场景描述
gameSceneInfo.description = (char*)"其他场景";
// 游戏场景推荐帧率
gameSceneInfo.recommendFPS = 60;
// 游戏场景最小帧率
gameSceneInfo.minFPS = 30;
// 游戏场景最大帧率
gameSceneInfo.maxFPS = 90;
// 屏幕分辨率 高度
gameSceneInfo.resolutionCurValue.height = 360;
// 屏幕分辨率 宽度
gameSceneInfo.resolutionCurValue.width = 1920;
// OpenGTX接收游戏场景信息
errorCode = HMS_OpenGTX_DispatchGameSceneInfo(context_, &gameSceneInfo);
if (errorCode != OPENGTX_SUCCESS) {
    return false;
}
```
             每帧渲染前调用[HMS_OpenGTX_DispatchFrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_dispatchframerenderinfo)接口发送游戏帧渲染信息，包含游戏主相机的位置和欧拉角。

       ```
// OpenGTX游戏渲染信息结构体
OpenGTX_FrameRenderInfo frameRenderInfo;
// 主相机位置
frameRenderInfo.mainCameraPosition = { 0.0f, 0.0f, 0.0f };
// 主相机欧拉角
frameRenderInfo.mainCameraRotate = { 0.0f, 0.0f, 0.0f };
// OpenGTX接收游戏渲染信息
errorCode = HMS_OpenGTX_DispatchFrameRenderInfo(context_, &frameRenderInfo);
if (errorCode != OPENGTX_SUCCESS) {
    return false;
}
```
             每帧渲染前如遇到网络时延档位变化，调用[HMS_OpenGTX_DispatchNetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_dispatchnetworkinfo)接口发送游戏网络信息。包含服务器IP地址、网络时延等信息。

       ```
// OpenGTX游戏网络信息结构体
OpenGTX_NetworkInfo networkInfo;
// OpenGTX游戏网络时延结构体
OpenGTX_NetworkLatency networkLatency;
// 网络总时延
networkLatency.total = 50;
// 网络上行时延
networkLatency.up = 10;
// 网络下行时延
networkLatency.down = 40;
// 游戏网络时延
networkInfo.networkLatency = networkLatency;
// 游戏服务器IP地址
networkInfo.networkServerIP = (char*)"10.10.10.10";
// OpenGTX接收游戏网络信息
errorCode = HMS_OpenGTX_DispatchNetworkInfo(context_, &networkInfo);
if (errorCode != OPENGTX_SUCCESS) {
    return false;
}
```
     
                  #### [h2]销毁OpenGTX实例

     在surface销毁时，会触发其事件回调函数Core::OnSurfaceDestroyed()，在该函数中完成OpenGTX实例的销毁。

     调用[HMS_OpenGTX_DestroyContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_destroycontext)接口销毁OpenGTX实例，释放内存资源。

     ```
// 销毁OpenGTX上下文实例并释放内存资源
errorCode = HMS_OpenGTX_DestroyContext(&context_);
if (errorCode != OPENGTX_SUCCESS) {
    return false;
}
```

---
*Updated: 2026-04-20 01:44:42*
