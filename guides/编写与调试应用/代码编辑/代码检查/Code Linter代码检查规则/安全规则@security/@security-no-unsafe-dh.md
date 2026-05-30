# @security/no-unsafe-dh

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unsafe-dh`  |  **DocID**: `fcf9ecdc7f1b4cf28a7f72d4e562d8d5`  |  **NodeID**: `000201775790122558396b5b5f77e489`

---

# @security/no-unsafe-dh

 该规则禁止使用不安全的DH密钥协商算法，如DH模数长度小于2048bit。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-dh": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createKeyAgreement('DH_modp3072');
```
  #### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createKeyAgreement('DH_modp1536');
```
  #### 规则集

```
plugin:@security/recommended
plugin:@security/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
