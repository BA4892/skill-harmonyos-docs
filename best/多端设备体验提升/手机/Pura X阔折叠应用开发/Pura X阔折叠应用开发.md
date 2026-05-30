# Pura X阔折叠应用开发

> **分区**: 最佳实践  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `bpta-purax-guide`  |  **DocID**: `820ff727a9904ce7b0927d2e7f7da7e8`  |  **NodeID**: `000201775547069118099279d951e075`

---

# Pura X阔折叠应用开发 

 #### 概述

 #### [h2]设备特点

华为推出的“阔折叠”旗舰折叠手机Pura X，其配有一块16:10比例的矮胖内屏（展开态）和一块1:1比例的方形外屏（折叠态）。相对于直板机，阔折叠设备有以下明显特点：

 
- 设备屏幕尺寸可变，具有不同大小和形态的UX界面。内屏屏幕尺寸，较直板机手机宽度更宽、高度更矮。外屏屏幕比例为1:1的小方形屏，可及时呈现通知、消息等关键信息，无需频繁展开主屏。
- 具有特殊的折叠状态和交互事件。包含三种状态：折叠态，展开态和悬停态。
展开态：阔折叠完全展开后的形态。有更大的屏幕尺寸，可充分显示应用内容。
- 折叠态：阔折叠折叠后的形态。折叠后屏幕尺寸变小。
- 悬停态：阔折叠处于完全展开和折叠的中间状态，可平稳放置。

 - 不同折叠状态下，可用的相机，相机的位置和sensor（传感器）会发生变化。

 

  #### 硬件说明

本章将介绍阔折叠的屏幕方向、屏幕尺寸以及相机硬件参数等信息。

  #### [h2]屏幕规格信息

以下是阔折叠在折叠和展开状态下的硬件参数。

 **折叠态****屏幕规格信息** 
[屏幕旋转角度（rotation）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#属性)

  0(0度)

  1(90度)

  2(180度)

  3(270度)

  
 折叠态示意图

  不支持

  不支持

  不支持

  

  
 [屏幕方向Orientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#orientation10)

  不支持

  不支持

  不支持

  反向横屏LANDSCAPE_INVERTED

  
 屏幕ID

  不支持

  不支持

  不支持

  0

  
 分辨率(vp)(向下取整)

  不支持

  不支持

  不支持

  326 *326

  
 分辨率(px)**(宽 * 高)**

  不支持

  不支持

  不支持

  980 * 980

  
 横纵断点

  不支持

  不支持

  不支持

  横向断点sm，纵向断点md

  
  

   **展开态****屏幕规格信息** 
[屏幕旋转角度（rotation）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#属性)

  0(0度)

  1(90度)

  2(180度)

  3(270度)

  
 折叠态示意图

  

  

  

  

  
 [屏幕方向Orientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#orientation10)

  竖屏PORTRAIT

  横屏LANDSCAPE

  反向竖屏PORTRAIT_INVERTED

  反向横屏LANDSCAPE_INVERTED

  
 屏幕ID

  0

  0

  0

  0

  
 分辨率(vp)(向下取整)

  440 * 707

  707 * 440

  440 * 707

  707 * 440

  
 分辨率(px)**(宽 * 高)**

  1320 * 2120

  2120 * 1320

  1320 * 2120

  2120 * 1320

  
 横纵断点

  横向断点sm，纵向断点lg

  横向断点md，纵向断点sm

  横向断点sm，纵向断点lg

  横向断点md，纵向断点sm

  
  

    #### [h2]相机硬件信息

阔折叠配备前置相机和后置相机，相机位置是相对的，开发阔折叠相机功能时注意阔折叠的外屏相机在展开态时CameraPosition为CAMERA_POSITION_BACK，在折叠态时CameraPosition为CAMERA_POSITION_FRONT。效果图如下： 
相机位置[CameraPosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-e#cameraposition)

  后置相机（CAMERA_POSITION_BACK）

  前置相机（CAMERA_POSITION_FRONT）

  
 折叠态

  无

  

  
 展开态

  

  

  
  

   相机有默认的[相机镜头安装角度](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-rotation-term#相机镜头安装角度)，在使用时需要考虑镜头角度和设备的旋转角度，具体定义可参考[预览旋转角度](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-rotation-term#预览旋转角度)。阔折叠外屏配置一个前置相机，前置相机角度以及需要设置的预览流旋转角度如下。 
[屏幕旋转角度（rotation）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#属性)

  0(0度)

  1(90度)

  2(180度)

  3(270度)

  
 示意图

  不支持

  不支持

  不支持

  

  
 前置相机镜头角度

  不支持

  不支持

  不支持

  270度

  
 前置相机拍摄预览流旋转角度

  不支持

  不支持

  不支持

  180度

  
  

   阔折叠内屏配置前置相机和后置相机，前置和后置镜头角度以及需要设置的预览流旋转角度如下。 
[屏幕旋转角度（rotation）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#属性)

  0(0度)

  1(90度)

  2(180度)

  3(270度)

  
 示意图

  

  

  

  

  
 后置相机镜头角度

  90度

  90度

  90度

  90度

  
 后置相机拍摄预览流旋转角度

  90度

  180度

  270度

  0度

  
 前置相机镜头角度

  270度

  270度

  270度

  270度

  
 前置相机拍摄预览流旋转角度

  270度

  0度

  90度

  180度

  
  

    #### [h2]设备特有能力

阔折叠有着独特的折叠能力，在不同的折叠状态下有着不同的折叠属性，Pura X系列产品折叠状态和属性如下。

  
|     折叠态

  悬停态

  展开态

  
  效果图

  

  

  

  
 [isFoldable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displayisfoldable10)

  true

  
 [FoldStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#foldstatus10)

  FOLD_STATUS_FOLDED

  FOLD_STATUS_HALF_FOLDED

  FOLD_STATUS_EXPANDED

  
 [FoldDisplayMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#folddisplaymode10)

  FOLD_DISPLAY_MODE_MAIN

  FOLD_DISPLAY_MODE_FULL

  FOLD_DISPLAY_MODE_FULL

  
  

   #### 体验标准

应用体验建议分为功能与兼容性、稳定性、性能、功耗、安全和UX六个部分，详细信息如下所示。

  
名称

  简介

  
  [应用基础功能和兼容性体验建议](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/experience-suggestions-compatibility)

  应用与OS兼容、应用与设备兼容、应用升级兼容、功能体验相关等

  
 [应用稳定性体验建议](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/experience-suggestions-stability)

  长时间运行故障率（崩溃、冻屏等）、长时间运行内存资源异常

  
 [应用性能体验建议](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-experience-suggestions)

  时延、帧率流畅体验和内存占用、CPU占用、线程数等资源占用约束

  
 [应用功耗体验建议](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-power-experience-standards)

  后台任务使用、后台硬件器件资源/软件系统资源占用管控、分布式资源占用等

  
 [应用安全隐私体验建议](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/security-privacy-experience-standards)

  基础安全、恶意软件、应用安全、隐私合规等

  
 [应用UX体验建议](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/experience-suggestions-ux)

  设计规范、设计约束的符合性，UX精致体验要求等

  
  

  阔折叠主要在UX上有着特殊的适配体验和建议，下文主要介绍阔折叠的UX体验建议。

  #### [h2]UX体验建议

**体验设计标准**

 阔折叠设备的三种形态分别为折叠态、展开态、悬停态。折叠态便于随身携带和单手操作，适合快捷信息的展示；展开态能够充分展示应用内容，适合多任务处理和沉浸式体验；悬停态可稳定放置，让用户解放双手。详细的UX设计标准可参考[阔折叠](https://developer.huawei.com/consumer/cn/doc/design-guides/flip-0000002321233974)、[折叠屏应用UX体验标准](https://developer.huawei.com/consumer/cn/doc/design-guides/ux-guidelines-foldable-screen-0000001807866557)。阔折叠的主要体验标准如下：

 
- 响应式布局：随着屏幕状态的变化，界面中应用内容进行适配变化，常见的响应式布局的表现形式为：相对拉伸、相对缩放、延伸布局、挪移布局、重复布局、瀑布布局等。
- 多窗口交互：阔折叠的内屏具备多窗口适配的优势，例如分屏和悬浮窗。
- 开合连续性：应用在设备折叠/展开后不应出现操作步骤增加，操作更复杂等体验下降的情况。例如：页面切换到其他页面、页面滚动位置发生偏移、输入内容丢失、图片模糊、播放进度变化。
- 开合流畅：折叠与展开的交互过程需采用连贯的动态过渡，确保视觉体验自然流畅，避免断层式硬切换。

  页面布局应基于屏幕尺寸[断点](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-responsive-layout#section1532120147301)进行响应式设计，不建议依赖[deviceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#devicetype)、[isFoldable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displayisfoldable10)、[foldStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#foldstatus10)等设备状态接口作为布局决策条件，以防在多尺寸折叠屏设备上出现适配异常。

  **体验设计差异点**

 阔折叠的外屏的显示尺寸为小方形屏，相较于其他屏幕尺寸较小，在适配时要额外考虑布局完整性、沉浸式等设计。可参考[小方形屏适配建议](#section79201599366)章节。

 阔折叠在折叠态和展开态之间切换时，需要保证当前任务的连续性。切换之前的任务和相关状态能保存、延续，或能够快速恢复，给用户提供连续的体验。不发生闪退、重启等异常。可参考[适配阔折叠开合接续](#section14299619133716)章节。

 **应用设计最佳实践**

 根据上述UX体验标准和设计差异点，各垂域应用可根据功能和场景特点进行阔折叠UX设计，例如影音娱乐类应用主要体验为沉浸式视频播放和互动，需要考虑不同折叠状态的布局完整性，可参考[阔折叠典型场景应用设计](https://developer.huawei.com/consumer/cn/doc/design-guides/flip-0000002321233974#section1590518295113)，更多垂域设计信息和方案可参考[应用设计最佳实践](https://developer.huawei.com/consumer/cn/doc/design-guides/practices-overview-0000001746498066)。

  #### 工程管理

在阔折叠设备上运行的应用，需要在module.json5配置文件的module字段中包含"phone"，新建工程默认包含该字段。更多详情可参考[deviceTypes标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#devicetypes标签)。

  
- 开发者如需使用模拟器进行调试，可安装DevEco Studio 5.0.5 Release或更高版本。
- 开发者在适配Pura X外屏完成后，需要首先在[Pura X外屏适配申请](https://developer.huawei.com/consumer/cn/activity/501743647858534770/signup)中填写报名信息，应用需通过审核并完成外屏适配后，即可在Pura X外屏展示。
- 开发者如遇申请报名信息相关问题，可参考[Pura X常见问题](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-purax)。

   #### 窗口适配

 #### [h2]适配设备窗口模式

**全屏**

 阔折叠上的应用启动时默认全屏模式。

 **分屏**

 应用主窗口启动时占据屏幕的某个部分。阔折叠在横屏时支持二分屏，在竖屏时支持三种分屏比例，分屏时的窗口尺寸、断点等信息如下表所示。具体适配信息请参考[分屏窗口模式适配](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-mode#section579413164399)。 
分屏方式

  分屏比例

  分屏窗口尺寸(vp)

  分屏窗口断点

  
  左右分屏（横屏）

  1:1

  329 * 440

  横向断点sm，纵向断点lg

  
 上下分屏（竖屏）

 

 

 

 

  1:1

  440 * 329

  横向断点sm，纵向断点sm

  
 1:2

  440 * 219

  横向断点sm，纵向断点sm

  
 2:1

  440 * 439

  横向断点sm，纵向断点md

  
  

   

 **悬浮窗**

 悬浮窗是一种在设备屏幕上悬浮的非全屏应用窗口。一般用于在已有全屏任务运行的基础上，临时处理另一个任务，或短时间多任务并行使用。如浏览网页的同时回复消息。悬浮窗分为纵向悬浮窗和横向悬浮窗，阔折叠的悬浮窗窗口尺寸和断点如下表所示。具体适配信息请参考[悬浮窗口模式适配](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-mode#section8433735123611)。 
悬浮窗类型

  悬浮窗口尺寸(vp)

  悬浮窗口断点

  
  纵向悬浮窗

  440 * 707

  横向断点sm，纵向断点lg

  
 横向悬浮窗

  440 * 248

  横向断点sm，纵向断点sm

  
  

   

  阔折叠内屏支持全屏、分屏、悬浮窗三种应用窗口模式。阔折叠外屏仅支持全屏模式。

   #### [h2]适配设备显示方向

可以通过设置窗口旋转策略（[orientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-e#orientation9)）的方式控制应用的显示方向。窗口旋转策略（orientation）与屏幕旋转角度的关系请参考[窗口的Orientation和屏幕rotation的关系](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-direction#section11774145414383)。阔折叠开发的横竖屏旋转策略以及适配方案可参考[窗口方向](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-direction)。

 **外屏设备显示方向** 
[屏幕旋转角度（rotation）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#属性)

  0(0度)

  1(90度)

  2(180度)

  3(270度)

  
 旋转状态

  不支持

 

 

 

 

 

  

  
  

   阔折叠外屏当前不支持旋转，仅支持反向横屏（270度）展示。

   **内屏设备显示方向** 
[屏幕旋转角度（rotation）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#属性)

  0(0度)

  1(90度)

  2(180度)

  3(270度)

  
 旋转状态

  

  

  

  

  
 [默认窗口旋转策略（Orientation）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-e#orientation9)

  UNSPECIFIED

 未定义方向模式，由系统判定。

  
 

 表现形式

  PORTRAIT

 竖屏显示

  
  

    表格中的参数表示[屏幕属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#属性)中顺时针旋转角度（rotation）对应的窗口旋转策略。

  Pura X阔折叠内屏支持开发者设置窗口旋转策略，建议阔折叠的内屏支持横竖屏旋转，展开态界面有足够的空间来适应旋转前后的横竖屏布局。具体适配逻辑可参考[为多设备配置旋转策略](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-direction#section189311691213)。

  
折叠状态

  窗口全屏时尺寸（vp）

  是否支持横竖屏旋转（以348vp为阈值）

  系统是否默认支持横竖屏旋转

  
  外屏

  326 * 326

  否

  否

  
 内屏

  440 * 707

  是

  否

  
  

  

  阔折叠外屏仅支持一个方向，设置窗口旋转策略时不生效。

   #### [h2]适配设备沉浸式

**建议适配不同窗口模式的沉浸式**

 相较于直板机，阔折叠内屏高度更小、宽度更宽，外屏则为小方形屏幕，采用沉浸式设计有助于提升用户体验。布局实现需兼顾全屏、悬浮窗及分屏模式，确保各场景下的沉浸体验一致性。详情可参考[窗口沉浸式](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-immersive)。

 

 **建议适配不同窗口方向的沉浸式**

 阔折叠内屏在不同旋转状态下避让区会发生变化。窗口方向的变化引起避让区的变化的适配方案可参考[窗口沉浸式](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-immersive)。

  阔折叠在下面几种场景中避让区会发生变化：

 
- 窗口模式切换（全屏/悬浮窗/分屏）。
- 窗口方向变化（横竖屏切换）。
- 折叠屏状态切换（展开/折叠）。

 适配方案可参考[窗口沉浸式](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-immersive)。

   #### 界面开发

 #### [h2]典型布局场景

阔折叠内屏上典型的响应式布局方式有分栏布局、重复布局、挪移布局和缩进布局。应用可以利用不同的UI组件和断点来实现多样的布局，从而打造丰富的布局场景。具体的实现方案可参考折叠屏的[典型布局场景](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-foldable-guide#section125751424144716)章节。

  阔折叠内屏的高度较直板机有所降低，在适配时，应额外考虑以下几点：

 
- 考虑到折叠屏技术的演进，未来设备可能支持更复杂的折叠形态，屏幕尺寸和比例将更加多样化，推荐采用响应式布局方案。
- 推荐使用[Scroll组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)实现页面支持上下滚动，以确保超出屏幕范围的部分仍可通过上下滚动浏览。
- 阔折叠内屏可能会在拉起输入法键盘时，输入法键盘将输入区域遮挡的情况。为了实现键盘弹出时的避让，可以利用安全区域接口[expandSafeArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#expandsafearea)进行UI逻辑避让控制。

   #### [h2]小方形屏适配建议

阔折叠外屏由于其独特的1:1比例的小方形屏，在设计时应确保布局完整显示，避免截断、挤压、堆叠，充分利用屏幕空间，提供最佳用户体验。小方形屏的布局设计与实现可参考[小方形屏](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-screen-layout#section1395830175918)。

 

  #### [h2]适配阔折叠开合接续

在完成内屏与外屏的适配后，应用即可在内屏与外屏上展示。在折叠态和展开态之间切换时，需要保证当前任务的连续性。切换之前的任务和相关状态能保存、延续，或能够快速恢复，给用户提供连续的体验。不发生闪退、重启等异常。

 具体实现方案，可参考折叠屏的[适配应用界面开合连续](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-foldable-guide#section186893019118)章节。

  #### 交互适配

阔折叠的交互方式为触控屏，常见的操作有点击、双击、长按、拖拽、滑动等，应用可根据这些操作进行功能适配，详情可参考[多设备交互](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-interaction)。

  #### 功能开发

对于需要实现相机页面和功能的应用，在阔折叠上需要对不同的折叠状态、屏幕尺寸、相机镜头进行适配。阔折叠相机开发详情请参考[相机硬件差异](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-camera)，主要考虑的有以下几点。

 
- 相机页面布局：通过横向断点区分和实现不同形态屏幕的页面布局，可参考[通过断点实现多套页面布局](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-camera#section181143569262)。
- 相机设备选择：根据相机的状态和位置，选择当前形态下可用的相机，可参考[选择相机设备](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-camera#section13854163154917)。
- 相机预览流配置：配置预览流分辨率，避免出现压缩、拉伸、异常旋转的问题，可参考[设置多设备上相机预览画面比例](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-camera#section882216138497)。
- 拍照旋转适配：在横竖屏拍照场景下，正确获取并设置旋转角度，需确保图片始终正向显示，可参考[设置拍照旋转角度](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-camera#section0752024124911)。

  
设备形态

  折叠态

  展开态

  
  效果图

  

  

  
  

  阔折叠外屏相机开发时的常见问题，解决方案可参考[阔折叠外屏相机功能异常](#section596203193910)。开发相机功能的其他常见问题和解决方案可参考[相机硬件差异常见问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-camera#section1684283074912)。

  #### 常见问题

 #### [h2]展开态下应用启动页面未铺满屏幕或出现异常布局

**问题现象**

 在折叠屏展开态启动应用时，应用的启动页面未铺满整个屏幕，出现白屏区域或者启动页面被截断。

 **可能原因**

 应用未配置增强启动页。

 **解决方案**

 应用需要[配置增强启动页](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/launch-page-config#配置增强启动页)，配置后启动页面中的背景、图片和图标等资源能根据窗口大小自适应填充，保证启动页面在不同设备形态上正常显示，配置中各标签的说明可参考[startWindow标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#startwindow标签)。

  #### [h2]阔折叠外屏相机功能异常

**问题现象**

 阔折叠外屏相机页面的开发，可能出现以下问题：

 
- 相机页面布局异常。
- 切换折叠状态后预览画面压缩/拉伸的问题。
- 预览画面黑屏。
- 拍照后照片显示角度异常。

 **可能原因**

 
- 使用display.isFoldable()/getFoldStatus()做UX布局判断条件，导致布局异常。
- 相机预览对象绑定XComponent组件时，未正确设置Surface区域宽高的值，导致宽高比与预览流旋转后的宽高比不一致。
- 应用默认使用后置摄像头，但外屏后置摄像头不可用，导致调用失败。
- 拍照时未设置正确的拍照旋转角度。

 **解决方案**

 
- 针对不同横向断点设计多套相机页面布局并实现。详情请参考[通过断点实现多套页面布局](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-camera#section181143569262)。
- 设置XComponent组件对应Surface区域的宽高比，使其与预览流旋转后的宽高比保持一致。详情请参考[设置多设备上相机预览画面比例](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-camera#section882216138497)。
- 折叠状态切换过程窗口尺寸会变化，通过监听窗口尺寸变化，重新选择可用相机生成预览流。详情请参考[选择相机设备](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-camera#section13854163154917)。
- 设置拍照时的旋转角度。详情请参考[设置拍照旋转角度](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-camera#section0752024124911)。

---
*Updated: 2026-04-10 09:43:28*
