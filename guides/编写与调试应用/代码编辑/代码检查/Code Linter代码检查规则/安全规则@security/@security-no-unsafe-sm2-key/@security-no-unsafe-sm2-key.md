# @security/no-unsafe-sm2-key

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unsafe-sm2-key`  |  **DocID**: `a9e6bbe249114496bb52bb45227cf6da`  |  **NodeID**: `000201775790122558468506a72c14a7`

---

# @security/no-unsafe-sm2-key

 此规则禁止不安全的非对称密钥类型SM2算法。推荐使用SM2_256|SHA256算法和RSA算法，算法详情参见：[非对称加解密算法](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/aegis-encryption-and-decryption-asymmetric-0000001907932453)和[非对称密钥加解密算法规格](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-encrypt-decrypt-spec#rsa)。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-sm2-key": "warn"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createAsyKeyGenerator('SM2_256|SHA256')
```
  #### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createAsyKeyGenerator('SM2|SHA256')
```
  #### 规则集

plugin:@security/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
