# GetCoreMemBw

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getcoremembw`  |  **DocID**: `fb6d1753c8b445f7a87024d953050968`  |  **NodeID**: `000201775795449800881cfc83cfa3cf`

---

# GetCoreMemBw

  #### 函数功能

获取硬件平台存储空间的带宽大小，仅支持L2、HBM。硬件存储空间类型定义如下。

 ```
enum class CoreMemType {
L0_A = 0,
L0_B = 1,
L0_C = 2,
L1 = 3,
L2 = 4,
UB = 5,
HBM = 6,
RESERVED
};
```
   #### 函数原型

```
void GetCoreMemBw(const CoreMemType &memType, uint64_t &bwSize) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | memType  | 输入  | 硬件存储空间类型。  
 | bwSize  | 输出  | 对应硬件的存储空间的带宽大小。单位是Byte/cycle，cycle代表时钟周期。  
  

    #### 返回值

无

   #### 约束说明

memType输入仅支持L2、HBM。

   #### 调用示例

```
ge::graphStatus TilingXXX(gert::TilingContext* context) {
    auto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());
    uint64_t l2_bw;
    ascendcPlatform.GetCoreMemBw(platform_ascendc::CoreMemType::L2, l2_bw);
    // ...
    return ret;
}
```

---
*Updated: 2026-04-20 01:43:59*
