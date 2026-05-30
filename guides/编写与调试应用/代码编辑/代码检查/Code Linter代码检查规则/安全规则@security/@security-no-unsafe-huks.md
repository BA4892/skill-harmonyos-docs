# @security/no-unsafe-huks

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unsafe-huks`  |  **DocID**: `de8a089b88674d7a855d23d68e133c17`  |  **NodeID**: `0002017757901225584784a3a7ad452e`

---

# @security/no-unsafe-huks

 此规则禁止在HUKS中使用不安全的加密模式ECB，不安全的摘要算法MD5、SHA1，填充算法NONE、PKCS1-V1_5。推荐使用HUKS的AES-GCM算法，详情参见：[对称加解密算法](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/aegis-encryption-and-decryption-symmetry-0000001861247310)。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-huks": "warn"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import {huks} from '@kit.UniversalKeystoreKit';  
let keyAlias: string = 'keyAlias'; 
let properties: Array<huks.HuksParam> = [
  { 
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_ECC
  },
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_ECC_KEY_SIZE_256
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
       huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN |
       huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY
  },
  {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC
  }, 
  {
    tag: huks.HuksTag.HUKS_TAG_DIGEST, 
    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256
  },
  {
   tag: huks.HuksTag.HUKS_TAG_PADDING,
   value: huks.HuksKeyPadding.HUKS_PADDING_PKCS7
  }
]; 
let options: huks.HuksOptions = {
    properties: properties
}; 
huks.generateKeyItem(keyAlias, options);
```
  #### 反例

```
import {huks} from '@kit.UniversalKeystoreKit';  
let keyAlias: string = 'keyAlias'; 
let properties: Array<huks.HuksParam> = [
  { 
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_ECC
  },
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_ECC_KEY_SIZE_256
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
       huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN |
       huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY
  },
  {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_ECB
  }, 
  {
    tag: huks.HuksTag.HUKS_TAG_DIGEST, 
    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA1
  },
  {
   tag: huks.HuksTag.HUKS_TAG_PADDING,
   value: huks.HuksKeyPadding.HUKS_PADDING_NONE
  }
]; 
let options: huks.HuksOptions = {
    properties: properties
}; 
huks.generateKeyItem(keyAlias, options);
```
  #### 规则集

plugin:@security/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
