# 生成密钥(ArkTS)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `huks-key-generation-arkts`  |  **DocID**: `55e972b0111e48cd879a9d70e2f51b14`  |  **NodeID**: `000201775795852716591271731f495a`

---

# 生成密钥(ArkTS)

       以DH算法为例，生成随机密钥。具体的场景介绍及支持的算法规格，请参考[密钥生成支持的算法](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-generation-overview#支持的算法)。

                     密钥别名中禁止包含个人数据等敏感信息。

                       #### 开发步骤

     
             指定密钥别名，密钥别名命名规范参考[密钥生成介绍及算法规格](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-generation-overview)。

             初始化密钥属性集。

       
        - 通过[HuksParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksparam)封装密钥属性，搭配Array组成密钥属性集，并赋值给[HuksOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksoptions)中的properties字段。
        - 密钥属性集中必须包含[HuksKeyAlg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukskeyalg)、[HuksKeySize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukskeysize)、[HuksKeyPurpose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukskeypurpose)属性，即必传TAG：HUKS_TAG_ALGORITHM、HUKS_TAG_PURPOSE、HUKS_TAG_KEY_SIZE。
       
                                 一个密钥只能有一类PURPOSE，并且生成密钥时指定的用途要与使用时的方式一致，否则会导致异常。

                            调用[generateKeyItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksgeneratekeyitem9)，传入密钥别名和密钥属性集，生成密钥。

     
                         如果业务再次使用相同别名调用HUKS生成密钥，HUKS将生成新密钥并直接覆盖历史的密钥文件。

                ```
import { huks } from '@kit.UniversalKeystoreKit';

/* 1.确定密钥别名 */
let keyAlias = 'dh_key';
/* 2.初始化密钥属性集 */
let properties1: huks.HuksParam[] = [
  {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_DH
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE
  },
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_DH_KEY_SIZE_2048
  }
];

let huksOptions: huks.HuksOptions = {
  properties: properties1,
  inData: new Uint8Array([])
}

/* 3.生成密钥 */
function generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {
  return new Promise<void>((resolve, reject) => {
    try {
      huks.generateKeyItem(keyAlias, huksOptions, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    } catch (error) {
      throw (error as Error);
    }
  });
}

async function publicGenKeyFunc(keyAlias: string, huksOptions: huks.HuksOptions): Promise<string> {
  console.info(`enter promise generateKeyItem`);
  try {
    await generateKeyItem(keyAlias, huksOptions)
      .then((data) => {
        console.info(`promise: generateKeyItem success, data = ${JSON.stringify(data)}`);
      })
      .catch((error: Error) => {
        console.error(`promise: generateKeyItem failed, ${JSON.stringify(error)}`);
      });
    return 'Success';
  } catch (error) {
    console.error(`promise: generateKeyItem input arg invalid, ` + JSON.stringify(error));
    return 'Failed';
  }
}

async function testGenKey(): Promise<string> {
  let ret = await publicGenKeyFunc(keyAlias, huksOptions);
  return ret;
}
```

---
*Updated: 2026-04-20 01:47:05*
