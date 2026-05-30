# @typescript-eslint/type-annotation-spacing

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_type-annotation-spacing`  |  **DocID**: `0292614a876f4e2c8f68e5bb184912a5`  |  **NodeID**: `0002017757901225586193bf60423ffb`

---

# @typescript-eslint/type-annotation-spacing

 类型注解前后需要一致的空格风格。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/type-annotation-spacing": "error"
  }
}
```
  #### 选项

支持配置以下选项：

 ```
type Options = {
  before: boolean;
  after: boolean;
  overrides: {
    colon: {
      before: boolean;
      after: boolean;
    };
    arrow: {
      before: boolean;
      after: boolean;
    };
    variable: {
      before: boolean;
      after: boolean;
    };
    parameter: {
      before: boolean;
      after: boolean;
    };
    property: {
      before: boolean;
      after: boolean;
    };
    returnType: {
      before: boolean;
      after: boolean;
    };
  }
}
```
 
- before/after：布尔类型，可以设置为true或者false。true表示类型注解中的冒号（:）和箭头（=>）之前/之后需要加空格，false表示类型注解中的冒号（:）和箭头（=>）之前/之后不需要加空格。
- overrides：对象类型，可以对不同的语法场景进行差异化配置，支持以下属性：
colon：对象类型，可以对类型注解中的冒号（:）进行差异化配置，支持以下属性：
before：布尔类型，可以设置为true或者false。默认值为false，表示类型注解中的冒号（:）之前不需要加空格；true表示类型注解中的冒号（:）之前需要加空格。
- after：布尔类型，可以设置为true或者false。默认值为false，表示类型注解中的冒号（:）之后不需要加空格；true表示类型注解中的冒号（:）之后需要加空格。

 - arrow：对象类型，可以对类型注解中的箭头（=>）进行差异化配置，支持以下属性：
before：布尔类型，可以设置为true或者false。默认值为true，表示类型注解中的箭头（=>）之前需要加空格；false表示类型注解中的箭头（=>）之前不需要加空格。
- after：布尔类型，可以设置为true或者false。默认值为true，表示类型注解中的箭头（=>）之后需要加空格；false表示类型注解中的箭头（=>）之后不需要加空格。

 - variable：对象类型，可以对变量中类型注解的冒号（:）进行差异化配置，支持配置为before/after：
before/after：布尔类型，可以设置为true或者false，true表示类型注解中的冒号（:）之前/之后需要加空格。

 - parameter：对象类型，可以对参数中类型注解的冒号（:）进行差异化配置，支持配置为before/after：
before/after：布尔类型，可以设置为true或者false，true表示类型注解中的冒号（:）之前/之后需要加空格。

 - property：对象类型，可以对类/接口成员中类型注解的冒号（:）进行差异化配置，支持配置为before/after：
before/after：布尔类型，可以设置为true或者false，true表示类型注解中的冒号（:）之前/之后需要加空格。

 - returnType：对象类型，可以对函数返回类型中类型注解的冒号（:）进行差异化配置，支持配置为before/after：
before/after：布尔类型，可以设置为true或者false，true表示类型注解中的冒号（:）之前/之后需要加空格。

 
 
 示例：

 ```
"@typescript-eslint/type-annotation-spacing": [
  "error",
  {
    "before": true,
    "after": true,
    "overrides": {
      "colon": {
        "before": false,
        "after": true
      },
      "arrow": {
        "before": true,
        "after": true
      },
      "variable": {
        "before": true,
        "after": false
      },
      "parameter": {
        "before": false,
        "after": true
      },
      "property": {
        "before": true,
        "after": false
      },
      "returnType": {
        "before": true,
        "after": false
      }
    }
  }
]
```
  选项存在优先级，overrides下的配置会覆盖overrides之外的配置：overrides.variable/parameter/property/returnType > overrides.colon/arrow > before/after。

   #### 正例

```
// 默认冒号前无空格，冒号后有空格
export const foo1: string = 'bar';

export declare function foo2(): string;

export class Foo3 {
  public name: string = 'hello';
}
// 默认箭头前后都有空格
export declare type Foo4 = () => void;
```
  #### 反例

```
// 默认冒号前无空格，冒号后有空格
export const foo1 :string = 'bar';

export declare function foo2() :string;

export class Foo3 {
  public name :string = 'hello';
}
// 默认箭头前后都有空格
export declare type Foo4 = ()=>void;
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:46*
