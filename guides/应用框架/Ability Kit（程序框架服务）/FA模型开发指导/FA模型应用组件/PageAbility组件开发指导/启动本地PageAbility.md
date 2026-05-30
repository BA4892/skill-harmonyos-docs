# 启动本地PageAbility

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `start-local-pageability`  |  **DocID**: `a9469a39df894f6caf5bf2996d0f4f02`  |  **NodeID**: `0002017757957888848495638aaca6bd`

---

# 启动本地PageAbility

 PageAbility相关的能力通过featureAbility提供，启动本地Ability通过featureAbility中的startAbility接口实现。

  **表1** featureAbility接口说明

  
| 接口名  | 接口描述  
  | startAbility(parameter: StartAbilityParameter)  | 启动Ability。  
 | startAbilityForResult(parameter: StartAbilityParameter)  | 启动Ability，并在该Ability被销毁时返回执行结果。  
  

  如下示例通过startAbility显式启动PageAbility。启动Ability的参数包含want，关于want的说明详见[对象间信息传递载体Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/want-fa)，相应的，隐式启动与显式启动也不在此赘述。

 ```
import featureAbility from '@ohos.ability.featureAbility';
import Want from '@ohos.app.ability.Want';
import hilog from '@ohos.hilog';

const TAG: string = 'PagePageAbilityFirst';
const domain: number = 0xFF00;
```
 ```
(async (): Promise<void> => {
  try {
    hilog.info(domain, TAG, 'Begin to start ability');
    let want: Want = {
      bundleName: 'com.samples.famodelabilitydevelop',
      moduleName: 'entry',
      abilityName: 'com.samples.famodelabilitydevelop.PageAbilitySingleton'
    };
    await featureAbility.startAbility({ want: want });
    hilog.info(domain, TAG, `Start ability succeed`);
  }
  catch (error) {
    hilog.error(domain, TAG, 'Start ability failed with ' + error);
  }
})()
```

---
*Updated: 2026-04-20 01:49:45*
