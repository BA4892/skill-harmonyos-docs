# @performance/no-high-loaded-frame-rate-range

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-high-loaded-frame-rate-range`  |  **DocID**: `2f49de9a75ea42a88481bcbbe49d750a`  |  **NodeID**: `0002017757901225585536d3bef5e2d6`

---

# @performance/no-high-loaded-frame-rate-range

 不允许锁定最高帧率运行。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/no-high-loaded-frame-rate-range": "warn",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import { displaySync } from '@kit.ArkGraphics2D';
let sync = displaySync.create();
sync.setExpectedFrameRateRange({
  expected: 60,
  min: 45,
  max: 60,
});
```
  #### 反例

```
import { displaySync } from '@kit.ArkGraphics2D';
let sync = displaySync.create();
sync.setExpectedFrameRateRange({
  expected: 120,
  min: 120,
  max: 120,
});
```
  #### 规则集

```
plugin:@performance/all
plugin:@performance/recommended
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
