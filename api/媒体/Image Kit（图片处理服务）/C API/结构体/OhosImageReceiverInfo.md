# OhosImageReceiverInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-ohosimagereceiverinfo`

**DocID**: `b80ae04dccd9457a9fd145030a1ec179`

**NodeID**: `000201775795910761396b51ba5e6cd4`

---

OhosImageReceiverInfo

struct OhosImageReceiverInfo {...}

概述

定义ImageReceiver的相关信息。

起始版本：
 10

相关模块：

Image

所在头文件：

image_receiver_mdk.h

汇总

[h2]成员变量

名称

描述

int32_t width

消费端接收图片时的默认图像宽度，用pixels表示。

int32_t height

消费端接收图片时的默认图像高度，用pixels表示。

int32_t format

通过接收器创建图像格式OHOS_IMAGE_FORMAT_JPEG。

int32_t capicity

图片缓存数量的最大值。该参数仅作为期望值，实际capacity由设备硬件决定。

---
*2026-04-22T15:55:03.662Z*