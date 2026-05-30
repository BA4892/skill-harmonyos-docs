# Enums

> **分区**: API参考  |  **Slug**: `arkts-apis-window-e`  |  **DocID**: `dc460d7a0df149109582a50d1d154a83`

---

# Enums

                        
               本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

               针对系统能力SystemCapability.Window.SessionManager，请先使用[canIUse()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-syscap#caniuse)接口判断当前设备是否支持此syscap及对应接口。

      
                       #### WindowType7+

     窗口类型枚举。

     **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                                   名称         值         说明                                       TYPE_APP         0                   表示应用子窗口。

          **模型约束：** 此接口仅可在FA模型下使用。

                         TYPE_SYSTEM_ALERT(deprecated)         1                   表示系统告警窗口。

          **说明：** 从API version 11开始废弃。

          从API version 7开始支持。

                         TYPE_FLOAT9+         8                   表示全局悬浮窗。

          **模型约束：** 此接口仅可在Stage模型下使用。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         TYPE_DIALOG10+         16                   表示模态窗口。

          **模型约束：** 此接口仅可在Stage模型下使用。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         TYPE_MAIN18+         32                   表示应用主窗口。

          此窗口类型不支持在创建窗口时使用。

                                            #### AvoidAreaType7+

     窗口内容的避让区域的类型枚举。

     窗口内容做[沉浸式布局](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-terminology#沉浸式布局)适配时，需要按照AvoidAreaType对应的[AvoidArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-i#avoidarea7)做窗口内容避让。

     **系统能力：** SystemCapability.WindowManager.WindowManager.Core

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                                   名称         值         说明                                       TYPE_SYSTEM         0         表示系统默认区域。通常表示状态栏区域，悬浮窗状态下的应用主窗中表示三点控制栏区域。                         TYPE_CUTOUT         1         表示挖孔区域。                         TYPE_SYSTEM_GESTURE9+         2         表示侧边返回手势区域。当前所有设备均无此类型避让区域。                         TYPE_KEYBOARD9+         3         表示固定态软键盘区域。                         TYPE_NAVIGATION_INDICATOR11+         4         表示底部导航区域。根据用户设置，可表现为导航条或三键导航栏。                                            #### Orientation9+

     窗口显示方向类型枚举。

                                   名称         值         说明                                       UNSPECIFIED         0                   表示未定义方向模式，由系统判定。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                         PORTRAIT         1                   表示竖屏显示模式。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         LANDSCAPE         2                   表示横屏显示模式。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                         PORTRAIT_INVERTED         3                   表示反向竖屏显示模式。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         LANDSCAPE_INVERTED         4                   表示反向横屏显示模式。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         AUTO_ROTATION         5                   跟随传感器自动旋转，可以旋转到竖屏、横屏、反向竖屏、反向横屏四个方向，且不受控制中心的旋转开关控制。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         AUTO_ROTATION_PORTRAIT         6                   跟随传感器自动竖向旋转，可以旋转到竖屏、反向竖屏，无法旋转到横屏、反向横屏，且不受控制中心的旋转开关控制。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                         AUTO_ROTATION_LANDSCAPE         7                   跟随传感器自动横向旋转，可以旋转到横屏、反向横屏，无法旋转到竖屏、反向竖屏，且不受控制中心的旋转开关控制。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         AUTO_ROTATION_RESTRICTED         8                   跟随传感器自动旋转，可以旋转到竖屏、横屏、反向竖屏、反向横屏四个方向，且受控制中心的旋转开关控制。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         AUTO_ROTATION_PORTRAIT_RESTRICTED         9                   跟随传感器自动竖向旋转，可以旋转到竖屏、反向竖屏，无法旋转到横屏、反向横屏，且受控制中心的旋转开关控制。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                         AUTO_ROTATION_LANDSCAPE_RESTRICTED         10                   跟随传感器自动横向旋转，可以旋转到横屏、反向横屏，无法旋转到竖屏、反向竖屏，且受控制中心的旋转开关控制。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                         LOCKED         11                   表示锁定模式，窗口显示方向与屏幕当前方向一致。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                         AUTO_ROTATION_UNSPECIFIED12+         12                   跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定（如在某种设备，可以旋转到竖屏、横屏、反向横屏三个方向，无法旋转到反向竖屏）。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.Window.SessionManager

                         USER_ROTATION_PORTRAIT12+         13                   调用时临时旋转到竖屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.Window.SessionManager

                         USER_ROTATION_LANDSCAPE12+         14                   调用时临时旋转到横屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.Window.SessionManager

                         USER_ROTATION_PORTRAIT_INVERTED12+         15                   调用时临时旋转到反向竖屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.Window.SessionManager

                         USER_ROTATION_LANDSCAPE_INVERTED12+         16                   调用时临时旋转到反向横屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.Window.SessionManager

                         FOLLOW_DESKTOP12+         17                   表示跟随桌面的旋转模式，如果桌面可以旋转则可旋转，桌面不可旋转则不可旋转。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

          **系统能力：** SystemCapability.Window.SessionManager

                                            #### RectChangeReason12+

     窗口矩形（窗口位置及窗口大小）变化的原因。

     **系统能力：** SystemCapability.Window.SessionManager

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                                   名称         值         说明                                       UNDEFINED         0         默认值。                         MAXIMIZE         1         窗口最大化。                         RECOVER         2         窗口恢复到上一次的状态。                         MOVE         3         窗口拖拽移动。                         DRAG         4         窗口拖拽缩放。                         DRAG_START         5         窗口开始拖拽缩放。                         DRAG_END         6         窗口结束拖拽缩放。                                            #### ColorSpace8+

     色域模式。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                                   名称         值         说明                                       DEFAULT         0         默认SRGB色域模式。                         WIDE_GAMUT         1         广色域模式。                                            #### WindowEventType10+

     窗口生命周期。

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                                   名称         值         说明                                       WINDOW_SHOWN         1                   切到前台。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                         WINDOW_ACTIVE         2                   获焦状态。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                         WINDOW_INACTIVE         3                   失焦状态。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                         WINDOW_HIDDEN         4                   切到后台。

          **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                         WINDOW_DESTROYED11+         7                   窗口销毁。

          **系统能力：** SystemCapability.Window.SessionManager

                                            #### WindowStatusType11+

     窗口模式枚举。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       UNDEFINED         0         表示APP未定义窗口模式。                         FULL_SCREEN         1                   表示APP全屏模式。

          [自由窗口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-terminology#自由窗口)状态下，窗口铺满整个屏幕，默认无dock栏、标题栏和状态栏显示。

          可通过[maximize()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#maximize12)和[setTitleAndDockHoverShown()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#settitleanddockhovershown14)配置，当hover到热区时是否显示标题栏和dock栏。

          当maximize()和setTitleAndDockHoverShown()接口都调用时，以最后调用设置的效果为准。

          非[自由窗口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-terminology#自由窗口)状态下，窗口铺满整个屏幕，无标题栏和dock栏显示。可通过[setSpecificSystemBarEnabled()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setspecificsystembarenabled11)配置是否显示状态栏。

                         MAXIMIZE         2         表示APP窗口最大化模式，[自由窗口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-terminology#自由窗口)状态下，窗口铺满整个屏幕，不需要hover就可以显示dock栏、状态栏和标题栏。非[自由窗口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-terminology#自由窗口)状态下，不存在该状态。                         MINIMIZE         3         表示APP窗口最小化模式。                         FLOATING         4         表示APP自由悬浮形式窗口模式。                         SPLIT_SCREEN         5         表示APP分屏模式。                                            #### PixelUnit22+

     像素单位枚举。

     物理像素单位和虚拟像素单位换算可使用[px2vp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#px2vp12)和[vp2px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#vp2px12)。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       PX         0         物理像素单位（px）。                         VP         1         虚拟像素单位（vp）。                                            #### MaximizePresentation12+

     窗口最大化时的布局枚举。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       FOLLOW_APP_IMMERSIVE_SETTING         0                   最大化时，跟随应用app当前设置的全屏模式。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         EXIT_IMMERSIVE         1                   最大化时，如果当前窗口设置了全屏模式会退出全屏模式。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         ENTER_IMMERSIVE         2                   最大化时，进入全屏模式，鼠标Hover在热区上显示窗口标题栏和dock栏。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         ENTER_IMMERSIVE_DISABLE_TITLE_AND_DOCK_HOVER14+         3                   最大化时，进入全屏模式，鼠标Hover在热区上不显示窗口标题栏和dock栏。

          **元服务API：** 从API version 14开始，该接口支持在元服务中使用。

                                            #### WindowAnimationCurve20+

     窗口动画曲线类型。

     **元服务API：** 从API version 20开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       LINEAR         0                   表示动画从头到尾的速度都是相同的。

          使用该曲线类型时[WindowAnimationConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-i#windowanimationconfig20)中duration必填。

          使用该曲线类型时[WindowAnimationConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-i#windowanimationconfig20)中param选填，且不生效。

                         INTERPOLATION_SPRING         1                   表示插值器弹簧曲线，一条从0到1的动画曲线，实际动画值根据曲线进行插值计算。动画时间由曲线参数决定，不受[WindowAnimationConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-i#windowanimationconfig20)中的duration参数控制。

          使用该曲线类型时[WindowAnimationConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-i#windowanimationconfig20)中duration选填，且不生效。

          使用该曲线类型时[WindowAnimationConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-i#windowanimationconfig20)中param必填。

                         CUBIC_BEZIER         2                   表示贝塞尔曲线。

          使用该曲线类型时[WindowAnimationConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-i#windowanimationconfig20)中的param和duration为必填项。

                                            #### WindowTransitionType20+

     窗口转场动画类型枚举。

     **元服务API：** 从API version 20开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       DESTROY         0         表示窗口销毁时的转场动画。                                            #### AnimationType20+

     窗口动画类型枚举。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       FADE_IN_OUT         0         表示窗口动画类型为淡入淡出。淡入动画在窗口显示过程中生效，淡出动画在窗口隐藏过程中生效。                                            #### WindowAnchor20+

     窗口锚点枚举。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       TOP_START         0         窗口左上角。                         TOP         1         窗口上边界横向居中点。                         TOP_END         2         窗口右上角。                         START         3         窗口左边界纵向居中点。                         CENTER         4         窗口横向和纵向居中点。                         END         5         窗口右边界纵向居中点。                         BOTTOM_START         6         窗口左下角。                         BOTTOM         7         窗口下边界横向居中点。                         BOTTOM_END         8         窗口右下角。                                            #### RotationChangeType19+

     窗口旋转事件类型。

     **元服务API：** 从API version 19开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       WINDOW_WILL_ROTATE         0         窗口即将旋转。                         WINDOW_DID_ROTATE         1         窗口旋转结束。                                            #### RectType19+

     窗口矩形区域坐标系类型。

     **元服务API：** 从API version 19开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       RELATIVE_TO_SCREEN         0         窗口矩形区域相对于屏幕坐标系。                         RELATIVE_TO_PARENT_WINDOW         1         窗口矩形区域相对于父窗口坐标系。                                            #### GlobalWindowMode20+

     窗口模式。

     **元服务API：** 从API version 20开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       FULLSCREEN         1         全屏窗口，二进制从右往左，第一个二进制位为1。                         SPLIT         1 << 1         分屏窗口，二进制从右往左，第二个二进制位为1。                         FLOAT         1 << 2         悬浮窗，二进制从右往左，第三个二进制位为1。                         PIP         1 << 3         画中画，二进制从右往左，第四个二进制位为1。                                            #### OcclusionState22+

     窗口可见性状态枚举。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       NO_OCCLUSION         0         窗口完全可见（没有任何部分被其他非透明窗口遮挡）。                         PARTIAL_OCCLUSION         1         窗口部分可见（部分被其他非透明窗口遮挡）。                         FULL_OCCLUSION         2         窗口完全不可见（完全被其他非透明窗口遮挡，或窗口最小化，或窗口隐藏）。                                            #### WindowStageEventType9+

     WindowStage生命周期状态枚举。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.WindowManager.WindowManager.Core

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                                   名称         值         说明                                       SHOWN         1         前台状态，例如点击应用图标启动，无论是首次启动还是从后台启动均会触发。                         ACTIVE         2         获焦状态，例如应用窗口处理点击事件后的状态、应用启动后的状态。                         INACTIVE         3         失焦状态，例如打开新应用或点击其他窗口后，原获焦窗口的状态。                         HIDDEN         4         后台状态，例如应用上滑退出、应用窗口关闭。                         RESUMED11+         5         前台可交互状态，例如打开应用后，应用处于前台，且可以与用户交互的状态。                         PAUSED11+         6         前台不可交互状态，例如应用在前台时，进入多任务界面，应用依然处于前台但不可以与用户交互的状态。                                            #### WindowStageLifecycleEventType20+

     WindowStage生命周期的状态类型枚举。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       SHOWN         1         切到前台，例如点击应用图标启动，无论是首次启动还是从后台启动均会触发。                         RESUMED         2         前台可交互状态，例如打开应用后，应用处于前台，且可以与用户交互的状态。                         PAUSED         3         前台不可交互状态，例如应用在前台时，进入多任务界面，应用依然处于前台但不可以与用户交互的状态。                         HIDDEN         4         切到后台，例如应用上滑退出、应用窗口关闭。                                            #### ModalityType14+

     子窗口模态类型枚举。

     **系统能力：** SystemCapability.Window.SessionManager

     **元服务API：** 从API version 14开始，该接口支持在元服务中使用。

                                   名称         值         说明                                       WINDOW_MODALITY         0         当仅需要其父级窗口不响应用户操作时，可选此参数。                         APPLICATION_MODALITY         1                   除其父级窗口外还需要该应用其他实例的窗口不响应用户操作时，可选此参数。

          **设备行为差异：** 该枚举在支持并处于[自由窗口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-terminology#自由窗口)状态的设备上可正常调用；在支持但不处于[自由窗口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-terminology#自由窗口)状态的设备及不支持[自由窗口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-terminology#自由窗口)状态的设备上调用返回801错误码。

                                            #### ScreenshotEventType20+

     截屏事件类型枚举。

     **系统能力：** SystemCapability.WindowManager.WindowManager.Core

                                   名称         值         说明                                       SYSTEM_SCREENSHOT         0         系统截屏成功。                         SYSTEM_SCREENSHOT_ABORT         1         系统截屏中止。                         SCROLL_SHOT_START         2         滚动截屏开始。                         SCROLL_SHOT_END         3         滚动截屏结束。                         SCROLL_SHOT_ABORT         4         滚动截屏中止。                                            #### RotationInfoType23+

     旋转信息类型枚举。

     **系统能力：** SystemCapability.Window.SessionManager

                                   名称         值         说明                                       WINDOW_ORIENTATION         0                   窗口所在屏幕的显示方向，以窗口模块对横竖屏的定义方式表示。

          开发者在使用时，需要注意该方向表示[RotationChangeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-i#rotationchangeinfo19)中的orientation参数。

                         DISPLAY_ORIENTATION         1                   屏幕显示方向，以屏幕模块对横竖屏的定义方式表示。

          开发者在使用时，需要注意该方向表示[display](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#display)对象的orientation属性。

                         DISPLAY_ROTATION         2                   设备的屏幕顺时针旋转角度。

          开发者在使用时，需要注意该方向表示[display](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#display)对象的rotation属性。

---
*Updated: 2026-04-22 06:46:16*
