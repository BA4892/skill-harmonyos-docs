# Media Library Kit 简介

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `photoaccesshelper-overview`  |  **DocID**: `8078b0e43a084d3b9ead9538b1d217ba`  |  **NodeID**: `0002017757955269285804f2cc9f9bcc`

---

# Media Library Kit 简介

 Media Library Kit（媒体文件管理服务）提供了管理相册和媒体文件的能力，包括图片和视频，帮助应用快速构建图片和视频的展示与播放功能。

  #### 能力范围

通过Media Library Kit，开发者可以管理相册和媒体文件，包括创建相册、访问和修改相册中的媒体信息。

 面向**所有应用**开放如下能力：

 
- 选择/保存媒体库资源
[使用Picker选择媒体库资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-photoviewpicker)
- [保存媒体库资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-savebutton)

  - 管理动态照片
[访问和管理动态照片资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-movingphoto)
- [使用MovingPhotoView播放动态照片](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/movingphotoview-guidelines)

  - 使用Picker组件
[使用PhotoPicker组件访问图片/视频](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-guidelines-photoviewpicker)
- [使用AlbumPicker组件访问相册列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-guidelines-albumpicker)
- [使用RecentPhoto组件获取最近一张图片](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-guidelines-recentphoto)
- [使用PhotoPicker推荐图片](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/smart-photopicker)
- [使用PickerController将编辑后的图片替换原图](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/medialibrary-pickercontroller)

  
 面向**三方应用受限**开放如下能力：

   受限开放的能力需要[申请相册管理模块功能相关权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-preparation#申请相册管理模块功能相关权限)。这部分权限为受控开放，通常是不允许三方应用申请的。如果有特殊场景需要使用，请提供相关申请材料到应用市场（AGC）申请相应权限证书。

   
- [媒体资源使用指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-resource-guidelines)，包括：
获取指定媒体资源。
- 获取图片和视频缩略图。
- 重命名媒体资源。

  - [用户相册资源使用指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-useralbum-guidelines)，包括：
获取用户相册。
- 重命名用户相册。
- 添加图片和视频到用户相册中。
- 获取用户相册中的图片和视频。
- 从用户相册中移除图片和视频。

  - [系统相册资源使用指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-systemalbum-guidelines)，包括：
收藏夹。
- 视频相册。

  - [媒体资源变更通知相关指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-notify-guidelines)，包括：
注册对指定URI的监听。
- 取消指定URI的监听。

  
   #### 亮点/特征

- 对象化API设计，简洁高效，接入便捷。
- 端云一体化访问管理。
- 安全精准强管控，picker和保存控件自动授权。
- 智能格式转化，框架层统一完成转化。

   #### 框架原理

媒体库接收用户对媒体资产的获取与变更请求，进行请求合法性检查和权限校验，通过后与数据库进行交互，并返回请求结果。

---
*Updated: 2026-04-20 01:45:06*
