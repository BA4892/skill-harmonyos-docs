# @security/no-unsafe-aes

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unsafe-aes`  |  **DocID**: `2a1c458472c8443294196eca3eaba868`  |  **NodeID**: `000201775790122558390e401066dfef`

---

# @security/no-unsafe-aes

 该规则禁止在AES加密算法中使用不安全的ECB加密模式。推荐使用Petal Aegis SDK中的安全AES接口，详情请参见[对称加解密](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/aegis-encryption-and-decryption-symmetry-0000001861247310)。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-aes": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createCipher('AES128|CBC|PKCS5');
```
  #### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createCipher('AES128|ECB|NoPadding');
```
  #### 规则集

```
plugin:@security/recommended
plugin:@security/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:40*
