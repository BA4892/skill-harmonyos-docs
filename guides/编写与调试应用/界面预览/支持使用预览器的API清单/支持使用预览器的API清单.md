# 支持使用预览器的API清单

> **分区**: Guides  |  **Slug**: `ide-previewer-api-list`  |  **DocID**: `1fd76abca8ef438cadfe0c2597ab7e02`

---

# 支持使用预览器的API清单

 #### 组件

 #### [h2]ArkTS组件

 组件

  API

    基础组件

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

  AlphabetIndexer

   Blank

   Button

   Checkbox

   CheckboxGroup

   DataPanel

   DatePicker

   Divider

   Gauge

   Image

   ImageAnimator

   ImageSpan

   LoadingProgress

   Marquee

   Menu

   MenuItem

   MenuItemGroup

   Navigation

   NavRouter

   NavDestination

   PatternLock

   Progress

   QRCode

   Radio

   Rating

   ScrollBar

   Search

   Select

   Slider

   Span

   Stepper

   StepperItem

   Text

   TextArea

   TextClock

   TextInput

   TextPicker

   TextTimer

   Toggle

   容器组件

  Badge

   Column

   ColumnSplit

   Counter

   Flex

   FlowItem

   GridCol

   GridRow

   List

   ListItem

   ListItemGroup

   Navigator

   Panel

   Refresh

   RelativeContainer

   Row

   RowSplit

   Scroll

   SideBarContainer

   Stack

   Swiper

   Tabs

   TabContent

   WaterFlow

   绘制组件

 

 

 

 

 

 

 

  Circle

   Ellipse

   Line

   Polyline

   Path

   Rect

   Shape

   画布组件

 

 

 

 

 

 

 

  Canvas

   CanvasGradient

   CanvasPattern

   CanvasRenderingContext2D

   ImageBitmap

   ImageData

   Matrix2D

   OffscreenCanvasRenderingContext2D

   Path2D

       #### [h2]JS组件

 组件

  API

    基础组件

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

  button

   chart

   divider

   image

   image-animator

   input

   label

   marquee

   menu

   option

   picker

   picker-view

   piece

   progress

   qrcode

   rating

   search

   select

   slider

   span

   switch

   text

   textarea

   toolbar

   toolbar-item

   toggle

   容器组件

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

  badge

   dialog

   div

   form

   list

   list-item

   list-item-group

   panel

   popup

   refresh

   stack

   stepper

   stepper-item

   swiper

   tabs

   tab-bar

   tab-content

   画布组件

 

 

 

 

 

 

 

 

  canvas

   CanvasRenderingContext2D

   Image

   CanvasGradient

   ImageData

   Path2D

   ImageBitmap

   OffscreenCanvas

   OffscreenCanvasRenderingContext2D

   栅格组件

 

 

  grid-container

   grid-row

   grid-col

   svg组件

 

 

 

 

 

 

 

 

 

 

 

 

 

  svg

   rect

   circle

   ellipse

   path

   line

   polyline

   polygon

   text

   tspan

   textPath

   animate

   animateMotion

   animateTransform

       #### 接口

 #### [h2]UI界面

 模块

  API

    @ohos.animator (动画)

 

 

  Animator

   AnimatorResult

   AnimatorOptions

   @ohos.mediaquery (媒体查询)

 

 

  matchMediaSync

   MediaQueryResult

   MediaQueryListener

   @ohos.promptAction (弹窗)

 

 

 

 

 

 

 

 

  showToast

   showDialog

   showActionMenu

   ShowToastOptions

   Button

   ShowDialogSuccessResponse

   ShowDialogOptions

   ActionMenuSuccessResponse

   ActionMenuOptions

   @ohos.router (页面路由)

 

 

 

 

 

 

 

 

 

 

 

 

  pushUrl

   replaceUrl

   back

   clear

   getLength

   getState

   enableAlertBeforeBackPage

   disableAlertBeforeBackPage

   getParams

   RouterMode

   RouterOptions

   RouterState

   EnableAlertOptions

       #### [h2]网络管理

 模块

  API

    @ohos.net.http (数据请求)

  http.createHttp

 如果Http请求需要配置代理才能访问，API 12及以上的预览器支持使用系统的http_proxy/https_proxy/no_proxy环境变量。

       #### [h2]数据管理

 模块

  API

    @ohos.data.preferences (用户首选项)

 

 

 

 

 

 

 

  data_preferences.getPreferences

   data_preferences.deletePreferences

   data_preferences.removePreferencesFromCache

   Preferences

   ValueType

       #### [h2]文件管理

从DevEco Studio 6.0.0 Beta5版本开始，仅支持在预览/预览调试Stage模型的HAP/HSP时，使用文件管理的相关API，并且需要先打开**Enable file operation**开关。

 

  模块

  API

    @ohos.file.fs (文件管理)

 

 

 

 

 

 

 

 

 

 

 

 

  fs.open

   fs.close

   fs.fdatasync

   fs.fsync

   fs.read

   fs.write

   fs.mkdir

   fs.mkdtemp

   fs.rename

   fs.rmdir

   fs.unlink

   fs.stat

   fs.truncate

---
*Updated: 2026-04-24 01:27:57*
