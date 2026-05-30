# 停止PageAbility

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `stop-pageability`  |  **DocID**: `a60dfef26c2941e683b0202b89a8a10b`  |  **NodeID**: `000201775795788884862a436f375617`

---

# 停止PageAbility

 停止PageAbility通过featureAbility中的terminateSelf接口实现。

  **表1** featureAbility接口说明

  
| 接口名  | 接口描述  
  | terminateSelf()  | 停止Ability。  
 | terminateSelfWithResult(parameter: AbilityResult)  | 设置该PageAbility停止时返回给调用者的结果及数据并停止Ability。  
  

  如下示例展示了停止Ability的方法。

 ```
import featureAbility from '@ohos.ability.featureAbility';
import hilog from '@ohos.hilog';

const TAG: string = 'PagePageAbilityFirst';
const domain: number = 0xFF00;
```
 ```
// ...
(async (): Promise<void> => {
  try {
    hilog.info(domain, TAG, 'Begin to terminateSelf');
    await featureAbility.terminateSelf();
    hilog.info(domain, TAG, 'terminateSelf succeed');
  } catch (error) {
    hilog.error(domain, TAG, 'terminateSelf failed with ' + error);
  }
})()
// ...
```

---
*Updated: 2026-04-20 01:49:50*
