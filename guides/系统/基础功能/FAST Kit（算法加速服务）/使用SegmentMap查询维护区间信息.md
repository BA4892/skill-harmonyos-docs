# 使用SegmentMap查询维护区间信息

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `fast-segment-map`  |  **DocID**: `87195d3de94c432ea15b79e43c7dc06f`  |  **NodeID**: `000201775795852716864d5b71e9fa2b`

---

# 使用SegmentMap查询维护区间信息

       FAST Kit提供Segment Map用于查询维护区间信息，实现数据序列区间段的快速更新和快速查询。线段表（Segment Map）是一种用于高效处理区间段信息的数据结构，适用于需要频繁对数据序列的某个区间段进行统计或修改的场景。其典型操作包括单点修改、区间修改、区间查询等。

    线段表有多种实现方式，其中最常见的是使用二分树的方案，也被称为线段树（Segment Tree）。与直接遍历区间相比，线段表能将许多区间操作的时间复杂度从  优化至，在处理大规模数据时优势显著，为构建高性能、响应迅速的应用程序提供数据结构基础。

              #### 接口说明

     具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)。

           
                        | 名称          | 描述         
                               | FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_CreateConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_createconfig) ([FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) **config)          | 创建线段表的不透明配置。         
                 | FAST_EXPORT void [HMS_FAST_SegmentMap_DestroyConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_destroyconfig) ([FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) *config)          | 销毁线段表的不透明配置。         
                 | FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_SetQueryType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_setquerytype) ([FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) *config, [FAST_SegmentMapQueryType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapquerytype-1) type)          | 设置线段表不透明配置中的查询类型。         
                 | FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_SetUpdateType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_setupdatetype) ([FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) *config, [FAST_SegmentMapUpdateType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapupdatetype-1) type)          | 设置线段表不透明配置中的更新类型。         
                 | FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_create) ([FAST_SegmentMapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmaphandle) *handle, size_t size, const int32_t *array, [FAST_SegmentMapConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmapconfig) *config)          | 创建线段表。         
                 | FAST_EXPORT void [HMS_FAST_SegmentMap_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_destroy) ([FAST_SegmentMapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmaphandle) handle)          | 销毁线段表实例，释放内存，再次调用为未定义行为。         
                 | FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_Update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_update) ([FAST_SegmentMapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmaphandle) handle, size_t left, size_t right, int32_t value)          | 更新线段表的区间，根据配置按照赋值、加法、减法等操作更新。         
                 | FAST_EXPORT [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_SegmentMap_Query](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_segmentmap_query) ([FAST_SegmentMapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_segmentmaphandle) handle, size_t left, size_t right, int32_t *result)          | 查询线段表的区间，根据配置返回最大值、最小值、求和等数据。         
             

                       #### 开发步骤

     
             首先在CMake脚本中链接相关动态库。

       target_link_libraries(entry PUBLIC libfast_ads.so)             调用HMS_FAST_SegmentMap_CreateConfig生成线段表配置实例（FAST_SegmentMapConfig）。

             调用HMS_FAST_SegmentMap_SetQueryType设置查询类型。

             调用HMS_FAST_SegmentMap_SetUpdateType设置更新类型。

             调用HMS_FAST_SegmentMap_Create生成线段表实例 （FAST_SegmentMapHandle）。生成实例之后，无法再修改查询和更新类型。

             调用HMS_FAST_SegmentMap_Query进行高效区间查询操作。

             调用HMS_FAST_SegmentMap_Update进行高效区间更新操作。

             调用HMS_FAST_SegmentMap_Destroy销毁线段表实例。

             调用HMS_FAST_SegmentMap_DestroyConfig销毁线段表配置实例。

     
     ```
#include <cassert>
#include <iostream>
#include "FASTKit/fast_ads_segment_map.h"

FAST_ErrorCode demoSegmentMapSumSet()
{
    FAST_SegmentMapConfig *config = nullptr;
    FAST_SegmentMapHandle handle = nullptr;
    int32_t *array = nullptr;
    FAST_ErrorCode ret;

    ret = HMS_FAST_SegmentMap_CreateConfig(&config);
    if (ret != FAST_ERROR_CODE_SUCCESS) {
        return ret;
    }

    do {
        // 初始化配置
        ret = HMS_FAST_SegmentMap_SetQueryType(config, FAST_SEGMENTMAP_QUERY_TYPE_SUM);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }

        ret = HMS_FAST_SegmentMap_SetUpdateType(config, FAST_SEGMENTMAP_UPDATE_TYPE_SET);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }

        // 初始化数组
        size_t size = 10;
        array = new int32_t[size];
        for (size_t i = 0; i < size; ++i) {
            array[i] = i + 1;
        }
        // array = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

        // 创建线段表实例
        ret = HMS_FAST_SegmentMap_Create(&handle, size, array, config);
        // 线段表初始化为 {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }

        int32_t result;

        // 第一次查询：查询区间[0, 5)的求和值
        ret = HMS_FAST_SegmentMap_Query(handle, 0, 5, &result);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }
        assert(result == 15);  // 1 + 2 + 3 + 4 + 5 = 15

        // 第一次更新：将区间[3, 7)的值设置为-1
        ret = HMS_FAST_SegmentMap_Update(handle, 3, 7, -1);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }
        // 线段表更新为 {1, 2, 3, -1, -1, -1, -1, 8, 9, 10}

        // 第二次查询：查询区间[0, 5)的求和值
        ret = HMS_FAST_SegmentMap_Query(handle, 0, 5, &result);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }
        assert(result == 4);  // 1 + 2 + 3 - 1 - 1 = 4

        // 第二次更新：将区间[5, 9)的值设置为2
        ret = HMS_FAST_SegmentMap_Update(handle, 5, 9, 2);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }
        // 线段表更新为 {1, 2, 3, -1, -1, 2, 2, 2, 2, 10}

        // 第三次查询：查询区间[0, 10)的求和值
        ret = HMS_FAST_SegmentMap_Query(handle, 0, 10, &result);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }
        assert(result == 22);  // 1 + 2 + 3 -1 -1 + 2 + 2 + 2 + 2 + 10 = 22

        // 第三次更新：将区间[0, 3)的值设置为0
        ret = HMS_FAST_SegmentMap_Update(handle, 0, 3, 0);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }
        // 线段表更新为 {0, 0, 0, -1, -1, 2, 2, 2, 2, 10}

        // 第四次查询：查询区间[3, 7)的求和值
        ret = HMS_FAST_SegmentMap_Query(handle, 3, 7, &result);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }
        assert(result == 2);  // -1 -1 + 2 + 2 = 2

        // 第四次更新：将区间[7, 10)的值设置为5
        ret = HMS_FAST_SegmentMap_Update(handle, 7, 10, 5);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }
        // 线段表更新为 {0, 0, 0, -1, -1, 2, 2, 5, 5, 5}

        // 第五次查询：查询区间[0, 10)的求和值
        ret = HMS_FAST_SegmentMap_Query(handle, 0, 10, &result);
        if (ret != FAST_ERROR_CODE_SUCCESS) {
            break;
        }
        assert(result == 17);  // 0 + 0 + 0 -1 -1 + 2 + 2 + 5 + 5 + 5 = 17
    } while (0);

    // 销毁线段表实例
    HMS_FAST_SegmentMap_Destroy(handle);

    // 销毁配置
    HMS_FAST_SegmentMap_DestroyConfig(config);

    // 释放数组
    if (array) {
        delete[] array;
    }

    return ret;
}
```

---
*Updated: 2026-04-20 01:45:56*
