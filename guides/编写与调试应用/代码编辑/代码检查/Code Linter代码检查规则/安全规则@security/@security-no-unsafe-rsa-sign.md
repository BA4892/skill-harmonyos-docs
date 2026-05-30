# @security/no-unsafe-rsa-sign

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unsafe-rsa-sign`  |  **DocID**: `b823b7c2f49a40638d51ed25f4bd700b`  |  **NodeID**: `00020177579012255844920ce99776a0`

---

# @security/no-unsafe-rsa-sign

 该规则禁止不安全的RSA签名算法，如RSA模数长度小于2048bit、摘要或掩码摘要中使用不安全的MD5或SHA1哈希算法。推荐使用Petal Aegis SDK中的安全RSA签名接口，详情参见： [RSA加解密](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/aegis-encryption-and-decryption-asymmetric-0000001907932453)。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-rsa-sign": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createSign('RSA3072|PSS|SHA256|MGF1_SHA256');
cryptoFramework.createVerify('RSA3072|PSS|SHA256|MGF1_SHA256');
```
  #### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createSign('RSA512|PKCS1|MD5');
cryptoFramework.createVerify('RSA512|PKCS1|MD5');
```
  #### 规则集

```
plugin:@security/recommended
plugin:@security/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
