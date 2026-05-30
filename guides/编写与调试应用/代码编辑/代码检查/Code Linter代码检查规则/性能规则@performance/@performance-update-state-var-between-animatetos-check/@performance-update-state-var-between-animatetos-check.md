# @performance/update-state-var-between-animatetos-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-update-state-var-between-animatetos-check`  |  **DocID**: `9a33a5d720d148d9aa3c69d662abfb43`  |  **NodeID**: `000201775790122558579d21676d0fa6`

---

# @performance/update-state-var-between-animatetos-check

 如果多个animateTo之间存在状态更新，会导致执行下一个animateTo之前又存在需要更新的脏节点，可能造成冗余更新。因此不建议在两次animateTo之间进行状态变量更新。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/update-state-var-between-animatetos-check": "warn",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
@Entry
@Component
struct UpdateMultipleProperties {
  @State w: number = 100
  @State h: number = 2
  @State color: Color = Color.Red
  build() {
    Column() {
      Column() {
        
        Button('Tap2')
          .width('100%')
          .margin({ top: 12 })
          .onClick(() => {
            let doTimes = 5;
            for (let i = 0; i < doTimes; i++) {
              setTimeout(() => {
                // Explicitly specify the initial values of all properties to be animated before the animation.
                this.w = 80
                this.color = Color.Yellow
                this.getUIContext().animateTo({ curve: Curve.Sharp, duration: 1000 }, () => {
                  this.w = (this.w === 80 ? 150 : 80);
                });
                this.getUIContext().animateTo({ curve: Curve.Linear, duration: 2000 }, () => {
                  this.color = (this.color === Color.Yellow ? Color.Red : Color.Yellow);
                });
                // Refresh non-animated properties after animation completes
                this.h = 5
              }, 2000 * i)
            }
          })
        Button('Tap3')
          .width('100%')
          .margin({ top: 12 })
          .onClick(() => {
            let doTimes = 5;
            for (let i = 0; i < doTimes; i++) {
              setTimeout(() => {
                this.getUIContext().animateTo({ curve: Curve.Sharp, duration: 1000 }, () => {
                  this.w = (this.w === 80 ? 150 : 80);
                });
                this.getUIContext().animateTo({ curve: Curve.Linear, duration: 2000 }, () => {
                  this.color = (this.color === Color.Yellow ? Color.Red : Color.Yellow);
                });
              }, 2000 * i)
            }
          })
      }
      .justifyContent(FlexAlign.End)
      .height('25%')
    }
    .padding({
      left: 16,
      right: 16,
      bottom: 16
    })
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Start)
  }
}
```
  #### 反例

```
@Entry
@Component
struct UpdateMultipleProperties {
  @State w: number = 100
  @State h: number = 2
  @State color: Color = Color.Red
  build() {
    Column() {
      Column() {
        Button('Tap1')
          .width('100%')
          .margin({ top: 12 })
          .onClick(() => {
            let doTimes = 5;
            for (let i = 0; i < doTimes; i++) {
              setTimeout(() => {
                this.w = 80
                this.h = 4
                this.getUIContext().animateTo({ curve: Curve.Sharp, duration: 1000 }, () => {
                  this.w = (this.w === 80 ? 150 : 80);
                });
                // Updating state variables between two animateTo calls
                this.color = Color.Yellow
                this.getUIContext().animateTo({ curve: Curve.Linear, duration: 2000 }, () => {
                  this.color = (this.color === Color.Yellow ? Color.Red : Color.Yellow);
                });
              }, 2000 * i)
            }
          })
      }
      .justifyContent(FlexAlign.End)
      .height('25%')
    }
    .padding({
      left: 16,
      right: 16,
      bottom: 16
    })
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Start)
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
*Updated: 2026-04-22 01:08:45*
