# GetCoreNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getcorenum`  |  **DocID**: `12cae49a2fdf47b893458fc3a331b4c0`  |  **NodeID**: `000201775795449800671653e39e7f61`

---

# GetCoreNum

  #### 函数功能

获取当前硬件平台的核数。若AI Core的架构为Cube、Vector分离架构，返回AI Core上的Vector核数；非分离架构返回AI Core的核数。

   #### 函数原型

```
uint32_t GetCoreNum(void) const;
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
    auto coreNum = ascendcPlatform.GetCoreNum();
    // ... 根据核数自行设计Tiling策略
    context->SetBlockDim(coreNum);
    return ret;
}
```

---
*Updated: 2026-04-20 01:43:53*
