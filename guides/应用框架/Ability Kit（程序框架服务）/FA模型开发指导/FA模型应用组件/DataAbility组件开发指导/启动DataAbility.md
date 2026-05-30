# 启动DataAbility

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `start-dataability`  |  **DocID**: `e668cdcc9f24493e98fa3f5d441391cf`  |  **NodeID**: `000201775795788884819c9fdc5a08bf`

---

# 启动DataAbility

 启动DataAbility会获取一个工具接口类对象（DataAbilityHelper）。启动DataAbility的示例代码如下：

 ```
import featureAbility from '@ohos.ability.featureAbility';
import ability from '@ohos.ability.ability';

let uri: string = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';
let DAHelper: ability.DataAbilityHelper = featureAbility.acquireDataAbilityHelper(uri);
```

---
*Updated: 2026-04-20 01:49:40*
