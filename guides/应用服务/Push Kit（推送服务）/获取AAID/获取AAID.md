# 获取AAID

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `push-get-aaid`  |  **DocID**: `aabc344a95ad427b99de77d0eb2bd128`  |  **NodeID**: `00020177579564908575077168a85d95`

---

# 获取AAID

       AAID（Anonymous Application Identifier）：应用匿名标识符，标识运行在移动智能终端设备上的应用实例，只有该应用实例才能访问该标识符，它只存在于应用的安装期，总长度36位。与无法重置的设备级硬件ID相比，AAID具有更好的隐私权属性。

    AAID具有以下特性：

    
           匿名化、无隐私风险：AAID和已有的任何标识符都不关联，并且每个应用只能访问自己的AAID。

           同一个设备上，同一个开发者的多个应用，AAID取值不同。

           同一个设备上，不同开发者的应用，AAID取值不同。

           不同设备上，同一个开发者的应用，AAID取值不同。

           不同设备上，不同开发者的应用，AAID取值不同。

    
              #### 场景介绍

     AAID会在包括但不限于下述场景中发生变化：

     
             应用卸载重装。

             应用调用删除AAID接口。

             用户恢复出厂设置。

             用户清除应用数据。

     
                  #### 约束与限制

     获取AAID能力支持Phone、Tablet、PC/2in1设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备。

                  #### 接口说明

     接口返回值有两种返回形式：Callback和Promise回调。下表中仅展示Promise回调形式的接口，Promise和Callback只是返回值方式不一样，功能相同。

           
                        | 接口名          | 描述         
                               | [getAAID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-aaid-api#aaidgetaaid-1)(): Promise<string>          | 获取AAID，使用Promise异步返回结果。         
                 | [deleteAAID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-aaid-api#aaiddeleteaaid-1)(): Promise<void>          | 删除AAID，使用Promise异步返回结果。         
             

                       #### 获取AAID

     
             导入AAID模块及相关公共模块。

       ```
import { AAID } from '@kit.PushKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```
             调用AAID.[getAAID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-aaid-api#aaidgetaaid-1)()方法获取AAID信息。

       ```
// 文件路径: src/main/ets/entryability/EntryAbility.ets
export default class EntryAbility extends UIAbility {
  // 入参want与launchParam并未使用，为初始化项目时自带参数
  async onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): Promise<void> {
    // 获取AAID
    try {
      const aaid: string = await AAID.getAAID();
      hilog.info(0x0000, 'testTag', 'Succeeded in getting AAID.');
    } catch (err) {
      let e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to get AAID: %{public}d %{public}s', e.code, e.message);
    }
  }
}
```

---
*Updated: 2026-04-20 01:50:38*
