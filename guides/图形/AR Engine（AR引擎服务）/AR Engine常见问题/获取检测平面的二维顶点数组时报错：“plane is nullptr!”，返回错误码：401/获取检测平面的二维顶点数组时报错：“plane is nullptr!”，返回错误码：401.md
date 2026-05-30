# 获取检测平面的二维顶点数组时报错：“plane is nullptr!”，返回错误码：401

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `arengine-faq-1`  |  **DocID**: `79a59a71215945789934a5a14dcdba4c`  |  **NodeID**: `000201775795491975933481289061fd`

---

# 获取检测平面的二维顶点数组时报错：“plane is nullptr!”，返回错误码：401

                 #### 现象描述

     调用[HMS_AREngine_ARPlane_GetPolygonSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arplane_getpolygonsize)获取检测到平面的二维顶点数组大小时报错：“plane is nullptr!”，返回错误码：401。

                  #### 可能原因

     初次打开应用还未识别到平面，调用[HMS_AREngine_ARSession_GetAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_getalltrackables)获取的可跟踪对象列表为空，导致后续[HMS_AREngine_ARTrackableList_AcquireItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_artrackablelist_acquireitem)获取对应索引的对象也为空，使用前未做有效性判断，使用时出现无效参数错误。

                  #### 处理步骤

     开发者从AR Engine获取平面之后需判断其有效性后使用，例如，进行非空判断。

---
*Updated: 2026-04-20 01:44:35*
