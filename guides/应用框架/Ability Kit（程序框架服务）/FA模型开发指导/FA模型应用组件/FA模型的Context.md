# FA模型的Context

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `application-context-fa`  |  **DocID**: `58a56cc439ec4ebe9fdb6e24fbbb972f`  |  **NodeID**: `0002017757957888845723a98da36da5`

---

# FA模型的Context

       [FA模型](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ability-terminology#fa模型)下只有一个Context。Context中的所有功能都是通过方法来提供的，它提供了一些featureAbility中不存在的方法，相当于featureAbility的一个扩展和补全。

              #### 接口说明

     FA模型下使用Context，需要通过featureAbility下的接口getContext来获取，而在此之前，需要先导入对应的包：

     import featureAbility from '@ohos.ability.featureAbility';     然后使用如下方式获取对应的Context对象：

     ```
import featureAbility from '@ohos.ability.featureAbility';

let context = featureAbility.getContext();
```
     最终返回的对象为Context，其对应的接口说明请参见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-app-context)。

                  #### 开发步骤

     
             查询Bundle信息。

       ```
import featureAbility from '@ohos.ability.featureAbility';
import hilog from '@ohos.hilog';

const TAG: string = 'MainAbility';
const domain: number = 0xFF00;

class MainAbility {
  onCreate() {
    // 获取context并调用相关方法
    let context = featureAbility.getContext();
    context.getBundleName((data, bundleName) => {
      hilog.info(domain, TAG, 'ability bundleName:' + bundleName);
    });
    hilog.info(domain, TAG, 'Application onCreate');
  }
}

export default new MainAbility();
```
             设置当前featureAbility的显示方向。

       ```
import featureAbility from '@ohos.ability.featureAbility';
import bundle from '@ohos.bundle';
import hilog from '@ohos.hilog';

const TAG: string = 'PageAbilitySingleton';
const domain: number = 0xFF00;

class PageAbilitySingleton {
  onCreate() {
    // 获取context并调用相关方法
    let context = featureAbility.getContext();
    context.setDisplayOrientation(bundle.DisplayOrientation.PORTRAIT).then(() => {
      hilog.info(domain, TAG, 'Set display orientation.');
    })
    hilog.info(domain, TAG, 'Application onCreate');
  }

  onDestroy() {
    hilog.info(domain, TAG, 'Application onDestroy');
  }
}

export default new PageAbilitySingleton();
```

---
*Updated: 2026-04-20 01:48:39*
