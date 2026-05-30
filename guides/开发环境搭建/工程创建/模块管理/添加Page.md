# 添加Page

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-add-page`  |  **DocID**: `10d3a406f7eb46d2b570a3f044017b53`  |  **NodeID**: `000201775790066533988dfee476ff5f`

---

# 添加Page

 在ArkTS语言的工程中，支持添加Page。Page是表示应用/元服务的一个页面。应用/元服务可以设计为多个功能页面，每个页面进行单独的文件管理，并通过路由API实现页面的调度管理，以实现应用内功能的解耦。ArkTS语言的工程添加Page后，会在pages文件夹下生成一个新的ets文件。

 从DevEco Studio 6.1.0 Beta2版本开始，在API 23及以上工程，支持Car设备添加Map Page和Payment Page。

 #### 操作步骤

在Stage工程中选中ets文件夹下的pages，单击鼠标右键，选择**New > Page**，当前提供如下Page类型：

- Empty Page：创建一个普通页面，展示基础的Hello World功能；
- Map Page：创建一个地图页面，展示地图视图功能，当前仅支持在Phone和Car设备中使用；
- Payment Page：创建一个支付页面，可以实现点击按钮唤起支付弹窗，当前仅支持在Phone和Car设备中使用；
- Iap Page：IAP Kit场景化模板，支持快速创建应用内支付购买虚拟数字商品相关代码。

 

  API 10工程中仅支持创建Page，展示基础的Hello World功能；如需使用场景化Page模板，请将工程切换为API 11及以上后进行开发。

  

输入Page name（由大小写字母、数字和下划线组成），单击**Finish**完成添加。

---
*Updated: 2026-04-22 01:07:12*
