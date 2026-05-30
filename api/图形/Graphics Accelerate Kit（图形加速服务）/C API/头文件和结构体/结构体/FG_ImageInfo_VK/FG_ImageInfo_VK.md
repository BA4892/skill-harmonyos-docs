# FG_ImageInfo_VK

> **分区**: API参考  |  **Slug**: `_f_g___image_info___v_k`  |  **DocID**: `93a79bd0660741938db00eb8439c6175`

---

# FG_ImageInfo_VK

  #### 概述

此结构体描述超帧输入输出图像信息。

 **起始版本：** 5.0.0(12)

 **相关模块：** [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

 **所在头文件：** [frame_generation_vk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__vk_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [FG_Image_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_image_vk)* [image](#image) 超帧输入输出图像结构体[FG_Image_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_image_vk)对象的指针，该图像实例需要通过[HMS_FG_CreateImage_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_createimage_vk)进行创建，通过[HMS_FG_DestroyImage_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_destroyimage_vk)进行销毁。  [FG_ImageSync_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_sync___v_k) [initialSync](#initialsync) [HMS_FG_Dispatch_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_vk)执行前，该图像的同步状态。  [FG_ImageSync_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_sync___v_k) [finalSync](#finalsync) [HMS_FG_Dispatch_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_vk)执行后，该图像的同步状态。       #### 结构体成员变量说明

  #### [h2]finalSync

FG_ImageSync_VK FG_ImageInfo_VK::finalSync **描述**

 [HMS_FG_Dispatch_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_vk)执行后，该图像的同步状态。

   #### [h2]image

FG_Image_VK* FG_ImageInfo_VK::image **描述**

 超帧输入输出图像结构体[FG_Image_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_image_vk)对象的指针，该图像实例需要通过[HMS_FG_CreateImage_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_createimage_vk)进行创建，通过[HMS_FG_DestroyImage_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_destroyimage_vk)进行销毁。

   #### [h2]initialSync

FG_ImageSync_VK FG_ImageInfo_VK::initialSync **描述**

 [HMS_FG_Dispatch_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_fg_dispatch_vk)执行前，该图像的同步状态。

---
*Updated: 2026-04-22 06:40:38*
