# @previewer/mandatory-default-value-for-local-initialization

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_value-for-local-initialization`  |  **DocID**: `493bf8efb1524697b7bc31e63ec53a5e`  |  **NodeID**: `0002017757901225583804bd8b6d01d6`

---

# @previewer/mandatory-default-value-for-local-initialization

 如果组件的属性支持本地初始化，需要设置一个合法的不依赖运行时的默认值。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@previewer/mandatory-default-value-for-local-initialization": "warn"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
@Builder
function MyBuilderFunction(): void {
}

@Entry
@Component
struct Index {
  messageA?: string;
  message: string = 'Hello World';
  @Provide messageB: string = 'messageB';
  @StorageLink('varA') varA: number = 2;
  @StorageProp('languageCode') lang: string = 'en';
  @LocalStorageLink('PropA') storageLink1: number = 1;
  @LocalStorageProp('PropB') storageLink2: number = 2;
  @BuilderParam myBuilder: () => void = MyBuilderFunction;

  build() {
    Row() {
      Column() {
        Text(this.message)
        this.myBuilder()
      }
    }
  }
}
```
  #### 反例

```
@Entry
@Component
struct Index {
  @BuilderParam myBuilder: () => void;

  build() {
    Row() {
      Column() {
        Text('Hello World')
        this.myBuilder()
      }
    }
  }
}
```
  #### 规则集

```
plugin:@previewer/recommended
plugin:@previewer/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:40*
