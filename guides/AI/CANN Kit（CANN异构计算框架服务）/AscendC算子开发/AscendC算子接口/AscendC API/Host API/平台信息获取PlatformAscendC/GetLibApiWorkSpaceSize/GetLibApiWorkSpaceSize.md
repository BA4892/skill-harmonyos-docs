# GetLibApiWorkSpaceSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getlibapiworkspacesize`  |  **DocID**: `ba9c61544c9647579034213f01c9374d`  |  **NodeID**: `0002017757954498008942e502499865`

---

# GetLibApiWorkSpaceSize

  #### 函数功能

获取AscendC API需要的workspace空间大小。

   #### 函数原型

```
uint32_t GetLibApiWorkSpaceSize(void) const;
```
   #### 参数说明

无

   #### 返回值

返回uint32_t数据类型的结果，该结果代表当前系统workspace的大小。

   #### 约束说明

无

   #### 调用示例

```
// 开发者自定义的tiling函数
static ge::graphStatus TilingFunc(gert::TilingContext* context)
{
    AddApiTiling tiling;
    // ...
    size_t usrSize = 256; // 设置开发者需要使用的workspace大小。
    // 如需要使用系统workspace需要调用GetLibApiWorkSpaceSize获取系统workspace的大小。
    auto ascendcPlatform = platform_ascendc:: PlatformAscendC(context->GetPlatformInfo());
    uint32_t sysWorkspaceSize = ascendcPlatform.GetLibApiWorkSpaceSize();
    size_t *currentWorkspace = context->GetWorkspaceSizes(1); // 通过框架获取workspace的指针，GetWorkspaceSizes入参为所需workspace的块数。当前限制使用一块。
    currentWorkspace[0] = usrSize + sysWorkspaceSize; // 设置总的workspace的数值大小，总的workspace空间由框架来申请并管理。
    // ...
}
```

---
*Updated: 2026-04-20 01:43:59*
