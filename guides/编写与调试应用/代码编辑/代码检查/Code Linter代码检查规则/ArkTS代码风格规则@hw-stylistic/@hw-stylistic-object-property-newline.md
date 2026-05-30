# @hw-stylistic/object-property-newline

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_object-property-newline`  |  **DocID**: `03bd93307a924a929be65cb1f09ada47`  |  **NodeID**: `000201775790122558440ee0575af4cc`

---

# @hw-stylistic/object-property-newline

 强制对象属性换行。该规则仅检查.ets文件类型。

 对象属性不超过4个时，允许在同一行，也可以每个属性都换行。对象属性超过4个时，每个属性必须都换行。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/object-property-newline": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export {a, b};

interface II {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5?: string;
}

const a: II = {
  p1: 'p1',
  p2: 'p2',
  p3: 'p3',
  p4: 'p4',
  p5: 'p5'
};

const b: II = { p1: 'p1', p2: 'p2', p3: 'p3', p4: 'p4' };
```
  #### 反例

```
export {a, b};

interface II {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5?: string;
}

// Object properties must go on a new line.
const a: II = { p1: 'p1', p2: 'p2',
  p3: 'p3', p4: 'p4' };

// Object properties must go on a new line.
const b: II = { p1: 'p1', p2: 'p2', p3: 'p3', p4: 'p4', p5: 'p5' };
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
