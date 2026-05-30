# drawable_descriptor.h

> **分区**: API参考  |  **Slug**: `capi-drawable-descriptor-h`  |  **DocID**: `051b60cb27294e5ab2a8596d3bc23206`

---

# drawable_descriptor.h

                 #### 概述

     提供NativeDrawableDescriptor接口的类型定义。

     **引用文件：** <arkui/drawable_descriptor.h>

     **库：** libace_ndk.z.so

     **系统能力：** SystemCapability.ArkUI.ArkUI.Full

     **起始版本：** 12

     **相关模块：** [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

     **相关示例：** [DrawableDescriptorSample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/DrawableDescriptorSample)

                  #### 汇总

                  #### [h2]结构体

                                   名称         typedef关键字         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)         ArkUI_DrawableDescriptor         定义DrawableDescriptor对象。                         [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative)         -         使用Image Kit定义的Native侧的OH_PixelmapNative对象。                         [OH_PixelmapNative*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-pixelmapnative8h)         OH_PixelmapNativeHandle         定义OH_PixelmapNative对象指针类型。                         [ArkUI_Node](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node-descriptor)         -                   定义ArkUI native组件实例对象。

          **起始版本：** 22

                         [ArkUI_Node*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h)         ArkUI_NodeHandle                   定义ArkUI native组件实例对象指针定义。

          **起始版本：** 22

                         [ArkUI_DrawableDescriptor_AnimationController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/module-arkui-drawabledescriptoranimationcontroller)         ArkUI_DrawableDescriptor_AnimationController                   定义DrawableDescriptor动图控制器对象。

          **起始版本：** 22

                                            #### [h2]枚举

                                   名称         typedef关键字         描述                                       [DrawableDescriptor_AnimationStatus](#drawabledescriptor_animationstatus)         DrawableDescriptor_AnimationStatus         定义DrawableDescriptor动图的播放状态。                                            #### [h2]函数

                                   名称         描述                                       [ArkUI_DrawableDescriptor* OH_ArkUI_DrawableDescriptor_CreateFromPixelMap(OH_PixelmapNativeHandle pixelMap)](#oh_arkui_drawabledescriptor_createfrompixelmap)         使用PixelMap创建DrawableDescriptor对象。                         [ArkUI_DrawableDescriptor* OH_ArkUI_DrawableDescriptor_CreateFromAnimatedPixelMap(OH_PixelmapNativeHandle* array, int32_t size)](#oh_arkui_drawabledescriptor_createfromanimatedpixelmap)         使用PixelMap图片数组创建DrawableDescriptor对象。                         [void OH_ArkUI_DrawableDescriptor_Dispose(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_dispose)         销毁DrawableDescriptor对象指针。                         [OH_PixelmapNativeHandle OH_ArkUI_DrawableDescriptor_GetStaticPixelMap(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_getstaticpixelmap)         获取PixelMap图片对象指针。                         [OH_PixelmapNativeHandle* OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArray(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_getanimatedpixelmaparray)         获取用于播放动画的PixelMap图片数组数据。                         [int32_t OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArraySize(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_getanimatedpixelmaparraysize)         获取用于播放动画的PixelMap图片数组数据。                         [void OH_ArkUI_DrawableDescriptor_SetAnimationDuration(ArkUI_DrawableDescriptor* drawableDescriptor, int32_t duration)](#oh_arkui_drawabledescriptor_setanimationduration)         设置PixelMap图片数组播放总时长。                         [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationDuration(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_getanimationduration)         获取PixelMap图片数组播放总时长。                         [void OH_ArkUI_DrawableDescriptor_SetAnimationIteration(ArkUI_DrawableDescriptor* drawableDescriptor, int32_t iteration)](#oh_arkui_drawabledescriptor_setanimationiteration)         设置PixelMap图片数组播放次数。                         [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationIteration(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_getanimationiteration)         获取PixelMap图片数组播放次数。                         [int32_t OH_ArkUI_DrawableDescriptor_SetAnimationFrameDurations(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* durations, size_t size)](#oh_arkui_drawabledescriptor_setanimationframedurations)         设置动图中的单帧播放时间。                         [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationFrameDurations(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* durations, size_t* size)](#oh_arkui_drawabledescriptor_getanimationframedurations)         获取动图中的单帧播放时间。                         [int32_t OH_ArkUI_DrawableDescriptor_SetAnimationAutoPlay(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t autoPlay)](#oh_arkui_drawabledescriptor_setanimationautoplay)         设置动图是否自动播放。                         [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationAutoPlay(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* autoPlay)](#oh_arkui_drawabledescriptor_getanimationautoplay)         获取动图是否自动播放。                         [int32_t OH_ArkUI_DrawableDescriptor_CreateAnimationController(ArkUI_DrawableDescriptor* drawableDescriptor, ArkUI_NodeHandle node, ArkUI_DrawableDescriptor_AnimationController** controller)](#oh_arkui_drawabledescriptor_createanimationcontroller)         创建动图控制器。                         [void OH_ArkUI_DrawableDescriptor_DisposeAnimationController( ArkUI_DrawableDescriptor_AnimationController* controller)](#oh_arkui_drawabledescriptor_disposeanimationcontroller)         销毁动图控制器。                         [int32_t OH_ArkUI_DrawableDescriptor_StartAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)](#oh_arkui_drawabledescriptor_startanimation)         从首帧开始播放。                         [int32_t OH_ArkUI_DrawableDescriptor_StopAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)](#oh_arkui_drawabledescriptor_stopanimation)         停止动图播放并回到首帧。                         [int32_t OH_ArkUI_DrawableDescriptor_ResumeAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)](#oh_arkui_drawabledescriptor_resumeanimation)         从当前帧恢复动图播放。                         [int32_t OH_ArkUI_DrawableDescriptor_PauseAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)](#oh_arkui_drawabledescriptor_pauseanimation)         暂停动图的播放，保持在当前帧。                         [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationStatus(ArkUI_DrawableDescriptor_AnimationController* controller, DrawableDescriptor_AnimationStatus* status)](#oh_arkui_drawabledescriptor_getanimationstatus)         获取动图的播放状态。                                            #### 枚举类型说明

                  #### [h2]DrawableDescriptor_AnimationStatus

     enum DrawableDescriptor_AnimationStatus     **描述：**

     定义DrawableDescriptor动图的播放状态。

     **起始版本：** 22

                                   枚举项         描述                                       DRAWABLE_DESCRIPTOR_ANIMATION_STATUS_INITIAL = 0         动画初始状态。                         DRAWABLE_DESCRIPTOR_ANIMATION_STATUS_RUNNING = 1         动画处于播放状态。                         DRAWABLE_DESCRIPTOR_ANIMATION_STATUS_PAUSED = 2         动画处于暂停状态。                         DRAWABLE_DESCRIPTOR_ANIMATION_STATUS_STOPPED = 3         动画处于停止状态。                                            #### 函数说明

                  #### [h2]OH_ArkUI_DrawableDescriptor_CreateFromPixelMap()

     ArkUI_DrawableDescriptor* OH_ArkUI_DrawableDescriptor_CreateFromPixelMap(OH_PixelmapNativeHandle pixelMap)     **描述：**

     使用PixelMap创建DrawableDescriptor对象。

     **起始版本：** 12

     **参数：**

                                   参数项         描述                                       [OH_PixelmapNativeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-pixelmapnative8h) pixelMap         [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-struct)对象指针。                               **返回：**

                                   类型         说明                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)*         返回DrawableDescriptor对象指针。                                            #### [h2]OH_ArkUI_DrawableDescriptor_CreateFromAnimatedPixelMap()

     ArkUI_DrawableDescriptor* OH_ArkUI_DrawableDescriptor_CreateFromAnimatedPixelMap(OH_PixelmapNativeHandle* array, int32_t size)     **描述：**

     使用PixelMap图片数组创建DrawableDescriptor对象。

     **起始版本：** 12

     **参数：**

                                   参数项         描述                                       [OH_PixelmapNativeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-pixelmapnative8h)* array         PixelMap图片数组对象指针。                         int32_t size         PixelMap图片数组大小。                               **返回：**

                                   类型         说明                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)*         返回DrawableDescriptor对象指针。                                            #### [h2]OH_ArkUI_DrawableDescriptor_Dispose()

     void OH_ArkUI_DrawableDescriptor_Dispose(ArkUI_DrawableDescriptor* drawableDescriptor)     **描述：**

     销毁DrawableDescriptor对象指针。

     **起始版本：** 12

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                                            #### [h2]OH_ArkUI_DrawableDescriptor_GetStaticPixelMap()

     OH_PixelmapNativeHandle OH_ArkUI_DrawableDescriptor_GetStaticPixelMap(ArkUI_DrawableDescriptor* drawableDescriptor)     **描述：**

     获取PixelMap图片对象指针。

     **起始版本：** 12

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                               **返回：**

                                   类型         说明                                       [OH_PixelmapNativeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-pixelmapnative8h)         [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-struct)对象指针。                                            #### [h2]OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArray()

     OH_PixelmapNativeHandle* OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArray(ArkUI_DrawableDescriptor* drawableDescriptor)     **描述：**

     获取用于播放动画的PixelMap图片数组数据。

     **起始版本：** 12

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                               **返回：**

                                   类型         说明                                       [OH_PixelmapNativeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-pixelmapnative8h)*         PixelMap图片数组指针。                                            #### [h2]OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArraySize()

     int32_t OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArraySize(ArkUI_DrawableDescriptor* drawableDescriptor)     **描述：**

     获取用于播放动画的PixelMap图片数组数据。

     **起始版本：** 12

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                               **返回：**

                                   类型         说明                                       int32_t         PixelMap图片数组大小。                                            #### [h2]OH_ArkUI_DrawableDescriptor_SetAnimationDuration()

     void OH_ArkUI_DrawableDescriptor_SetAnimationDuration(ArkUI_DrawableDescriptor* drawableDescriptor, int32_t duration)     **描述：**

     设置PixelMap图片数组播放总时长。

     **起始版本：** 12

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                         int32_t duration         播放总时长，单位ms。取值范围：[0, +∞)。传入负数时按0处理。                                            #### [h2]OH_ArkUI_DrawableDescriptor_GetAnimationDuration()

     int32_t OH_ArkUI_DrawableDescriptor_GetAnimationDuration(ArkUI_DrawableDescriptor* drawableDescriptor)     **描述：**

     获取PixelMap图片数组播放总时长。

     **起始版本：** 12

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                               **返回：**

                                   类型         说明                                       int32_t         播放总时长，单位ms。                                            #### [h2]OH_ArkUI_DrawableDescriptor_SetAnimationIteration()

     void OH_ArkUI_DrawableDescriptor_SetAnimationIteration(ArkUI_DrawableDescriptor* drawableDescriptor, int32_t iteration)     **描述：**

     设置PixelMap图片数组播放次数。

     **起始版本：** 12

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                         int32_t iteration         播放次数。取值范围：[0, +∞)，0表示无限循环播放。传入负数时按0处理。                                            #### [h2]OH_ArkUI_DrawableDescriptor_GetAnimationIteration()

     int32_t OH_ArkUI_DrawableDescriptor_GetAnimationIteration(ArkUI_DrawableDescriptor* drawableDescriptor)     **描述：**

     获取PixelMap图片数组播放次数。

     **起始版本：** 12

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                               **返回：**

                                   类型         说明                                       int32_t         播放次数。                                            #### [h2]OH_ArkUI_DrawableDescriptor_SetAnimationFrameDurations()

     int32_t OH_ArkUI_DrawableDescriptor_SetAnimationFrameDurations(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* durations, size_t size)     **描述：**

     设置动图中的单帧播放时间。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                         uint32_t* durations                   动图中的单帧播放时间数组，单位ms。

          不设置则按照总时间播放。设置的优先级高于[OH_ArkUI_DrawableDescriptor_SetAnimationDuration](#oh_arkui_drawabledescriptor_setanimationduration)，即同时设置了OH_ArkUI_DrawableDescriptor_SetAnimationDuration和OH_ArkUI_DrawableDescriptor_SetAnimationFrameDurations时，OH_ArkUI_DrawableDescriptor_SetAnimationDuration不生效。

          数组大小必须与PixelMap图片数组大小相同。

          每帧播放时间取值范围：[0, +∞)。默认值：均匀分配总时长。

                         size_t size         数组大小。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 输入参数错误。

                                            #### [h2]OH_ArkUI_DrawableDescriptor_GetAnimationFrameDurations()

     int32_t OH_ArkUI_DrawableDescriptor_GetAnimationFrameDurations(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* durations, size_t* size)     **描述：**

     获取动图中的单帧播放时间。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                         uint32_t* durations         动图中的单帧播放时间数组。                         size_t* size         数组大小。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 输入参数错误。

                                            #### [h2]OH_ArkUI_DrawableDescriptor_SetAnimationAutoPlay()

     int32_t OH_ArkUI_DrawableDescriptor_SetAnimationAutoPlay(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t autoPlay)     **描述：**

     设置动图是否自动播放。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                         uint32_t autoPlay                   是否自动播放。

          1表示自动播放，0表示不自动播放。

          默认值为1。

                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 输入参数错误。

                                            #### [h2]OH_ArkUI_DrawableDescriptor_GetAnimationAutoPlay()

     int32_t OH_ArkUI_DrawableDescriptor_GetAnimationAutoPlay(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* autoPlay)     **描述：**

     获取动图是否自动播放。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                         uint32_t* autoPlay         是否自动播放。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 输入参数错误。

                                            #### [h2]OH_ArkUI_DrawableDescriptor_CreateAnimationController()

     int32_t OH_ArkUI_DrawableDescriptor_CreateAnimationController(ArkUI_DrawableDescriptor* drawableDescriptor, ArkUI_NodeHandle node, ArkUI_DrawableDescriptor_AnimationController** controller)     **描述：**

     创建动图控制器。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawableDescriptor         DrawableDescriptor对象指针。                         [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node         组件节点指针。                         [ArkUI_DrawableDescriptor_AnimationController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/module-arkui-drawabledescriptoranimationcontroller)** controller         DrawableDescriptor动图控制器对象指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 输入参数错误。

                                            #### [h2]OH_ArkUI_DrawableDescriptor_DisposeAnimationController()

     void OH_ArkUI_DrawableDescriptor_DisposeAnimationController(ArkUI_DrawableDescriptor_AnimationController* controller)     **描述：**

     销毁动图控制器。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor_AnimationController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/module-arkui-drawabledescriptoranimationcontroller)* controller         DrawableDescriptor动图控制器对象指针。                                            #### [h2]OH_ArkUI_DrawableDescriptor_StartAnimation()

     int32_t OH_ArkUI_DrawableDescriptor_StartAnimation(ArkUI_DrawableDescriptor_AnimationController* controller);     **描述：**

     从首帧开始播放。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor_AnimationController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/module-arkui-drawabledescriptoranimationcontroller)* controller         DrawableDescriptor动图控制器对象指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 输入参数错误。

                                            #### [h2]OH_ArkUI_DrawableDescriptor_StopAnimation()

     int32_t OH_ArkUI_DrawableDescriptor_StopAnimation(ArkUI_DrawableDescriptor_AnimationController* controller);     **描述：**

     停止动图播放并回到首帧。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor_AnimationController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/module-arkui-drawabledescriptoranimationcontroller)* controller         DrawableDescriptor动图控制器对象指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 输入参数错误。

                                            #### [h2]OH_ArkUI_DrawableDescriptor_ResumeAnimation()

     int32_t OH_ArkUI_DrawableDescriptor_ResumeAnimation(ArkUI_DrawableDescriptor_AnimationController* controller);     **描述：**

     从当前帧恢复动图播放。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor_AnimationController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/module-arkui-drawabledescriptoranimationcontroller)* controller         DrawableDescriptor动图控制器对象指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 输入参数错误。

                                            #### [h2]OH_ArkUI_DrawableDescriptor_PauseAnimation()

     int32_t OH_ArkUI_DrawableDescriptor_PauseAnimation(ArkUI_DrawableDescriptor_AnimationController* controller);     **描述：**

     暂停动图的播放，保持在当前帧。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor_AnimationController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/module-arkui-drawabledescriptoranimationcontroller)* controller         DrawableDescriptor动图控制器对象指针。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 输入参数错误。

                                            #### [h2]OH_ArkUI_DrawableDescriptor_GetAnimationStatus()

     int32_t OH_ArkUI_DrawableDescriptor_GetAnimationStatus(ArkUI_DrawableDescriptor_AnimationController* controller, DrawableDescriptor_AnimationStatus* status);     **描述：**

     获取动图的播放状态。

     **起始版本：** 22

     **参数：**

                                   参数项         描述                                       [ArkUI_DrawableDescriptor_AnimationController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/module-arkui-drawabledescriptoranimationcontroller)* controller         DrawableDescriptor动图控制器对象指针。                         [DrawableDescriptor_AnimationStatus](#drawabledescriptor_animationstatus)* status         DrawableDescriptor动图的播放状态。                               **返回：**

                                   类型         说明                                       int32_t                   错误码。

          [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

          [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 输入参数错误。

---
*Updated: 2026-04-22 06:43:10*
