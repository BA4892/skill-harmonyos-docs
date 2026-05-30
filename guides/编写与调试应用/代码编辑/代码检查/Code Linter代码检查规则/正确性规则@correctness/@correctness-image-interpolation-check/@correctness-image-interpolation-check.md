# @correctness/image-interpolation-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-image-interpolation-check`  |  **DocID**: `3fd3ddec75f04afeba9400be49dc2f8c`  |  **NodeID**: `0002017757901225584125b30979c7c5`

---

# @correctness/image-interpolation-check

 在使用Image组件[interpolation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#interpolation)接口时，建议不要使用最邻近插值，避免出现明显锯齿问题。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@correctness/image-interpolation-check": "warn"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
const ADAPTIVE_SCALE = 1.5;

@Component
export struct AppIcon {
  @State icon: string | PixelMap = '';
  @Prop iconSize: number = 1;
  private mInterpolation: ImageInterpolation = ImageInterpolation.None;

  aboutToAppear(): void {
    this.mInterpolation = ImageInterpolation.Medium;
  }

  @Builder
  overlayIcon() {
    Image(this.icon)
      .height(this.iconSize * ADAPTIVE_SCALE)
      .width(this.iconSize * ADAPTIVE_SCALE)
      .interpolation(ImageInterpolation.Medium)
  }

  @Builder
  overlayIcon1() {
    Image(this.icon)
      .height(this.iconSize * ADAPTIVE_SCALE)
      .width(this.iconSize * ADAPTIVE_SCALE)
      .interpolation(this.mInterpolation)
  }

  build() {
    Column() {
      this.overlayIcon();
      this.overlayIcon1();
      Image($r('app.media.pause'))
        .draggable(false)
        .interpolation(ImageInterpolation.Medium)
    }
  }
}
```
  #### 反例

```
const ADAPTIVE_SCALE = 1.5;

@Component
export struct AppIcon {
  @State icon: string | PixelMap = '';
  @Prop iconSize: number = 1;
  private mInterpolation: ImageInterpolation = ImageInterpolation.Medium;

  aboutToAppear(): void {
    this.mInterpolation = ImageInterpolation.None;
  }

  @Builder
  overlayIcon() {
    Image(this.icon)
      .height(this.iconSize * ADAPTIVE_SCALE)
      .width(this.iconSize * ADAPTIVE_SCALE)
      // warning
      .interpolation(ImageInterpolation.None)
  }

  @Builder
  overlayIcon1() {
    Image(this.icon)
      .height(this.iconSize * ADAPTIVE_SCALE)
      .width(this.iconSize * ADAPTIVE_SCALE)
      // warning
      .interpolation(this.mInterpolation)
  }

  build() {
    Column() {
      this.overlayIcon();
      this.overlayIcon1();
      Image($r('app.media.pause'))
        .draggable(false)
        // warning
        .interpolation(ImageInterpolation.None)
    }
  }
}
```
  #### 规则集

plugin:@correctness/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
