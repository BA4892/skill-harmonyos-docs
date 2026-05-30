# @security/no-unsafe-dsa-key

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unsafe-dsa-key`  |  **DocID**: `5ff25ad4222e4674bd4552f81483d962`  |  **NodeID**: `00020177579012255841863b8f3e7530`

---

# @security/no-unsafe-dsa-key

 该规则禁止使用不安全的DSA密钥，如DSA模数长度小于2048bit。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-dsa-key": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createAsyKeyGenerator('DSA3072');
```
  #### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createAsyKeyGenerator('DSA1024');
```
  #### 规则集

```
plugin:@security/recommended
plugin:@security/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
