# fast_ads_segment_map.h

> **分区**: API参考  |  **Slug**: `fast-kit-fast-ads-segment-map-8h`  |  **DocID**: `63beadff752f4c74922f921ed89f6f99`

---

# fast_ads_segment_map.h

  #### 概述

线段表相关数据结构及函数定义。

 **引用文件：** <FASTKit/fast_ads_segment_map.h>

 **库：** libfast_ads.so

 **系统能力：** SystemCapability.FAST.Core

 **起始版本：** 6.0.2(22)

 **相关模块：** [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

   #### 汇总

  #### [h2]类型定义

 名称 描述   typedef enum [FAST_SegmentMapQueryType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapquerytype-1) [FAST_SegmentMapQueryType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapquerytype) 线段表支持的查询操作类型。  typedef enum [FAST_SegmentMapUpdateType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapupdatetype-1) [FAST_SegmentMapUpdateType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapupdatetype) 线段表支持的更新操作类型。  typedef struct [FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) [FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) 线段表的不透明配置。  typedef void * [FAST_SegmentMapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmaphandle) 线段表的句柄。       #### [h2]枚举

 名称 描述   [FAST_SegmentMapQueryType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapquerytype-1) { [FAST_SEGMENTMAP_QUERY_TYPE_SUM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast) = 0, [FAST_SEGMENTMAP_QUERY_TYPE_MIN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast) = 1, [FAST_SEGMENTMAP_QUERY_TYPE_MAX](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast) = 2 } 线段表支持的查询操作类型。  [FAST_SegmentMapUpdateType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapupdatetype-1) { [FAST_SEGMENTMAP_UPDATE_TYPE_SET](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast) = 0, [FAST_SEGMENTMAP_UPDATE_TYPE_ADD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast) = 1, [FAST_SEGMENTMAP_UPDATE_TYPE_SUB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast) = 2 } 线段表支持的更新操作类型。       #### [h2]函数

 名称 描述   FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_CreateConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_createconfig) ([FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) **config) 创建线段表的不透明配置。  FAST_EXPORT void [HMS_FAST_SegmentMap_DestroyConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_destroyconfig) ([FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) *config) 销毁线段表的不透明配置。  FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_SetQueryType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_setquerytype) ([FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) *config, [FAST_SegmentMapQueryType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapquerytype-1) type) 设置线段表不透明配置中的查询类型。  FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_SetUpdateType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_setupdatetype) ([FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) *config, [FAST_SegmentMapUpdateType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapupdatetype-1) type) 设置线段表不透明配置中的更新类型。  FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_create) ([FAST_SegmentMapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmaphandle) *handle, size_t size, const int32_t *array, [FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) *config) 创建线段表。  FAST_EXPORT void [HMS_FAST_SegmentMap_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_destroy) ([FAST_SegmentMapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmaphandle) handle) 销毁线段表实例，释放内存，再次调用为未定义行为。  FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_Update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_update) ([FAST_SegmentMapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmaphandle) handle, size_t left, size_t right, int32_t value) 更新线段表的区间，根据配置按照赋值、加法、减法等操作更新。  FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_Query](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_query) ([FAST_SegmentMapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmaphandle) handle, size_t left, size_t right, int32_t *result) 查询线段表的区间，根据配置返回最大值、最小值、求和等数据。

---
*Updated: 2026-04-22 06:49:06*
