# @performance/state-variable-usage-in-ui-format-check

> **分区**: Guides  |  **Slug**: `ide-state-variable-usage-in-ui-format-check`  |  **DocID**: `f1e5c1512b884e56955f6547bb05cfcd`  |  **NodeID**: `0002017769941112139787c5a1a12e4f`

---

# @performance/state-variable-usage-in-ui-format-check

 建议删除不使用的UI变量。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/state-variable-usage-in-ui-format-check": "warn",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
class User {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

@Entry({ storage: new LocalStorage() })
@Component
struct Parent {
  @Prop  prop: number = 1;
  @State state: string = '1';
  @State state1: User = new User('name');
  @StorageLink(`k1`) storageLink: number = 1;
  @StorageProp(`k1`) storageProp: number = 1;
  @LocalStorageLink(`k1`) localStorageLink: number = 1;
  @LocalStorageProp(`k1`) localStorageProp: number = 1;
  @Provide('k1') provide: string = "hell";
  build() {
    Column() {
      Button() {
        Text('Insert a new item after item 1').fontSize(30)
      }

      Text(`${this.prop}`)
      Text(`${this.state}`)
      Text(`${this.state1}`)
      Text(`${this.storageLink}`)
      Text(`${this.storageProp}`)
      Text(`${this.localStorageLink}`)
      Text(`${this.localStorageProp}`)
      Text(`${this.provide}`)
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
    .backgroundColor(0xF1F3F5)
  }
}
```
  #### 反例

```
class User {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

@Entry({ storage: new LocalStorage() })
@Component
struct Parent {
  @Prop  prop: number = 1;
  @State state: string = '1';
  @State state1: User = new User('name');
  @StorageLink(`k1`) storageLink: number = 1;
  @StorageProp(`k1`) storageProp: number = 1;
  @LocalStorageLink(`k1`) localStorageLink: number = 1;
  @LocalStorageProp(`k1`) localStorageProp: number = 1;
  @Provide('k1') provide: string = "hell";
  build() {
    Column() {
      Button() {
        Text('Insert a new item after item 1').fontSize(30)
      }

      Text(`${this.prop}`)
      Text(`${this.state}`)
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
    .backgroundColor(0xF1F3F5)
  }
}
```
  #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-24 01:28:30*
