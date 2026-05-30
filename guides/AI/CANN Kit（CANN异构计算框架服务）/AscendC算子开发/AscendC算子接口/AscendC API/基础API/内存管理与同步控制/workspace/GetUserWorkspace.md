# GetUserWorkspace

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getuserworkspace`  |  **DocID**: `d884ac2a319f4a04a8b5c59e2315dc74`  |  **NodeID**: `0002017757954498011245820d7386ab`

---

# GetUserWorkspace

  #### 功能说明

获取开发者使用的[workspace](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getsysworkspaceptr)指针。如果使用了[Matmul](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-matmul-usage-description)等需要系统workspace的高阶API，kernel侧需要通过[SetSysWorkSpace](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setsysworkspace)设置系统workspace，此时开发者workspace需要通过该接口获取。

   #### 函数原型

```
__aicore__ inline GM_ADDR GetUserWorkspace(GM_ADDR workspace)
```
   #### 参数说明

**表1** 接口参数说明

  
| 参数名称  | 输入/输出  | 描述  
  | workspace  | 输入  | 传入workspace的指针，包括系统workspace和开发者使用的workspace。  
  

    #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

无

   #### 返回值

开发者使用workspace指针。

---
*Updated: 2026-04-20 01:44:10*
