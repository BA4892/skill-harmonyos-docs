# 启动ServiceAbility

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `start-serviceability`  |  **DocID**: `97fa9aad36bf49da91c1ba3e8051ab25`  |  **NodeID**: `000201775795788884823ee024da20c8`

---

# 启动ServiceAbility

       ServiceAbility的启动与其他Ability并无区别，应用开发者可以在PageAbility中通过featureAbility的startAbility接口拉起ServiceAbility，在ServiceAbility中通过particleAbility的startAbility接口拉起ServiceAbility。ServiceAbility的启动规则详见[FA模型组件启动规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-startup-rules-fa)章节。

    如下示例展示了在PageAbility中通过startAbility启动bundleName为"com.example.myapplication"，abilityName为"ServiceAbility"的ServiceAbility的方法。启动[FA模型](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ability-terminology#fa模型)的ServiceAbility时，需要在abilityName前拼接bundleName字符串。

    ```
import featureAbility from '@ohos.ability.featureAbility';
import Want from '@ohos.app.ability.Want';
import promptAction from '@ohos.promptAction';
import hilog from '@ohos.hilog';

const TAG: string = 'PageServiceAbility';
const domain: number = 0xFF00;

@Entry
@Component
struct PageServiceAbility {
  async startServiceAbility(): Promise<void> {
    try {
      hilog.info(domain, TAG, 'Begin to start ability');
      let want: Want = {
        bundleName: 'com.samples.famodelabilitydevelop',
        abilityName: 'com.samples.famodelabilitydevelop.ServiceAbility'
      };
      await featureAbility.startAbility({ want });
      promptAction.showToast({
        message: 'start_service_success_toast'
      });
      hilog.info(domain, TAG, `Start ability succeed`);
    } catch (error) {
      hilog.error(domain, TAG, 'Start ability failed with ' + error);
    }
  }
  build() {
    // ...
  }
}
```
    执行上述代码后，Ability将通过[startAbility()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-ability-featureability#featureabilitystartability)方法来启动ServiceAbility。

    
           如果ServiceAbility尚未运行，则系统会先调用onStart()来初始化ServiceAbility，再回调Service的onCommand()方法来启动ServiceAbility。

           如果ServiceAbility正在运行，则系统会直接回调ServiceAbility的onCommand()方法来启动ServiceAbility。

---
*Updated: 2026-04-20 01:49:40*
