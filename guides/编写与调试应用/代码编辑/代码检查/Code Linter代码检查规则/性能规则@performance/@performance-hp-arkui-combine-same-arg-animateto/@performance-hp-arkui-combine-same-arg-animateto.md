# @performance/hp-arkui-combine-same-arg-animateto

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_hp-arkui-combine-same-arg-animateto`  |  **DocID**: `13f80205fd0047e4b701a5b1769679f0`  |  **NodeID**: `00020177579012255844391f5961a8bc`

---

# @performance/hp-arkui-combine-same-arg-animateto

 建议动画参数相同时使用同一个animateTo。

 动效丢帧场景下，建议优先修改。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkui-combine-same-arg-animateto": "warn",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
@Entry
@Component
struct MyComponent {
  @State textWidth: number = 200;
  @State color: Color = Color.Red;
  
  func() {
    this.getUIContext().animateTo({ curve: Curve.Sharp, duration: 1000 }, () => {
      this.textWidth = (this.textWidth === 100 ? 200 : 100);
      this.color = (this.color === Color.Yellow ? Color.Red : Color.Yellow);
    });
  }
  
  build() {
    Column() {
      Row()
        .width(this.textWidth)
        .height(10)
        .backgroundColor(this.color)
      Text('click')
        .onClick(() => {
          this.func();
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
  #### 反例

```
@Entry
@Component
struct MyComponent {
  @State textWidth: number = 200;
  @State color: Color = Color.Red;
  
  func1() {
    animateTo({ curve: Curve.Sharp, duration: 1000 }, () => {
      this.textWidth = (this.textWidth === 100 ? 200 : 100);
    });
  }
  
  func2() {
    animateTo({ curve: Curve.Sharp, duration: 1000 }, () => {
      this.color = (this.color === Color.Yellow ? Color.Red : Color.Yellow);
    });
  }
  
  build() {
    Column() {
      Row()
        .width(this.textWidth)
        .height(10)
        .backgroundColor(this.color)
      Text('click')
        .onClick(() => {
          this.func1();
          this.func2();
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
  #### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
