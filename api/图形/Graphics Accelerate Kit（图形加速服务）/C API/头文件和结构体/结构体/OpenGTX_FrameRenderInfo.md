# OpenGTX_FrameRenderInfo

> **分区**: API参考  |  **Slug**: `_open_g_t_x___frame_render_info`  |  **DocID**: `5518f48a60614de8ac2d57c7520fb6f3`

---

# OpenGTX_FrameRenderInfo

  #### 概述

此结构体描述帧渲染信息，游戏应用获取到帧属性后传递此参数。该参数中的相机矩阵通常用于优化渲染层降负载方案的画质效果。

 **起始版本：** 5.0.0(12)

 **相关模块：** [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

 **所在头文件：** [opengtx_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengtx__base_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [OpenGTX_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___vector3) [mainCameraPosition](#maincameraposition) 主摄像头的位置。x, y, z的取值范围[-360,360]。  [OpenGTX_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___vector3) [mainCameraRotate](#maincamerarotate) 主摄像头的转动，包括偏航、俯仰、侧滚。 x, y, z的取值范围[-360,360]。       #### 结构体成员变量说明

  #### [h2]mainCameraPosition

OpenGTX_Vector3 OpenGTX_FrameRenderInfo::mainCameraPosition **描述**

 主摄像头的位置。

   #### [h2]mainCameraRotate

OpenGTX_Vector3 OpenGTX_FrameRenderInfo::mainCameraRotate **描述**

 主摄像头的转动，包括偏航、俯仰、侧滚。 x, y, z的取值范围[-360,360]。

---
*Updated: 2026-04-22 06:40:38*
