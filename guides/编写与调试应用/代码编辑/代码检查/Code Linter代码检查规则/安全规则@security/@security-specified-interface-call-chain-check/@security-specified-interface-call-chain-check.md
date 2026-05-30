# @security/specified-interface-call-chain-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-specified-interface-call-chain-check`  |  **DocID**: `2d642972d98c4c32b9f38618e3cb7344`  |  **NodeID**: `000201775790122558455646130775ad`

---

# @security/specified-interface-call-chain-check

 该规则旨在标识指定接口的调用链，方便接口管理，调用链最大数量为5000。

  code-linter.json5配置文件中的[overrides](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter#section19310459444)字段对该规则不生效。

  #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/specified-interface-call-chain-check": [
      "suggestion",
      {
        "outputDirPath": "", // 配置输出结果的文件目录，填写文件夹绝对路径，目录不存在则新建，输出文件名为specified-interface-call-chain-check_result.txt。
        "callChainMaxLen": 0, // 调用链最大长度，默认为0（表示不限制）
      },
      {
        "selector": "", // 枚举：namespace/class/function/property/type（function包括函数和类方法，class包括类class、接口interface、枚举enum和结构体struct）
        "filePath": "", // 目标文件的绝对路径
        "namespace": [], // 命名空间的名字数组，表示定义在namespace里或者检查namespace本身，嵌套则按顺序填写
        "class": "", // 类名，表示定义在class里边或者是检查的class本身
        "function": "", // 函数名
        "property": "", // 类属性名
        "type": "", // 类型别名
      },
      {
        "selector": "", // 枚举：namespace/class/function/property/type（function包括函数类方法）
        "filePath": "", // 目标文件的绝对路径
        "namespace": [], // 命名空间的名字数组，表示定义在namespace里或者检查namespace本身，嵌套则按顺序填写
        "class": "", // 类名，表示定义在class里边或者是检查的class本身
        "function": "", // 函数名
        "property": "", // 类属性名
        "type": "", // 类型别名
      },
    ],
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

下文中Absolute-Path1.ets为依赖代码：

 ```
// Absolute-Path1.ets

export class Cls1 {
  public func1() {
    console.log('This is func1 in cls1.');
  }
  public func2() {
    console.log('This is func2 in cls1.');
  }
}
```
 下文中Correct.ets为正例测试代码，依赖上文中Absolute-Path1.ets：

 ```
// Correct.ets

import { Cls1 } from './Absolute-Path1';
let testClass = new Cls1();
testClass.func2();
```
  #### 反例

下文中absolute-path-1.ets为依赖代码：

 ```
// absolute-path-1.ets

export class cls1 {
  public func1() {
    console.log('This is func1 in cls1.');
  }
  public func2() {
    console.log('This is func2 in cls1.');
  }
}
```
 下文中incorrect.ets为反例测试代码，依赖上文中absolute-path-1.ets：

 ```
// incorrect.ets

import { cls1 } from './absolute-path-1';
let testClass = new cls1();
testClass.func1();
```
  #### 规则集

plugin:@security/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
