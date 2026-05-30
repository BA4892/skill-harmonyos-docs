# GetCoreNumAiv

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getcorenumaiv`  |  **DocID**: `2e3753779c064829956b0064bb363218`  |  **NodeID**: `000201775795449800786fa8183409f5`

---

# GetCoreNumAiv

  #### 函数功能

获取当前硬件平台AI Core中Vector核数。若AI Core的架构为Cube、Vector分离架构，返回AI Core上的Vector核数；非分离架构返回AI Core的核数。

   #### 函数原型

```
uint32_t GetCoreNumAiv(void) const;
```
   #### 参数说明

无

   #### 返回值

针对Kirin9020系列处理器，Cube、Vector分离架构，返回AI Core上的Vector核数。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus TilingXXX(gert::TilingContext* context) {
    auto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());
    auto aicNum = ascendcPlatform.GetCoreNumAic();
    auto aivNum = ascendcPlatform.GetCoreNumAiv();
    // ...按照aivNum切分
    context->SetBlockDim(ascendcPlatform.CalcTschBlockDim(aivNum, aicNum, aivNum));
    return ret;
}
```

---
*Updated: 2026-04-20 01:43:56*
