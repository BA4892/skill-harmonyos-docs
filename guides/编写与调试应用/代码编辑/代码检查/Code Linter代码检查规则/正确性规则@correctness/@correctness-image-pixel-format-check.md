# @correctness/image-pixel-format-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-image-pixel-format-check`  |  **DocID**: `6fa17afdbd3943879985850008460c73`  |  **NodeID**: `000201775790122558406282cfc98d42`

---

# @correctness/image-pixel-format-check

 在使用Image组件[createPixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-f#imagecreatepixelmap8)接口时，建议不要选择RGB_565档位，避免出现色阶问题。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@correctness/image-pixel-format-check": "warn"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import image from '@ohos.multimedia.image';
const DEFAULT_IMAGE_WIDTH_HEIGHT: number = 600;
const DEFAULT_IMAGE_BUFFER_SIZE: number = DEFAULT_IMAGE_WIDTH_HEIGHT * DEFAULT_IMAGE_WIDTH_HEIGHT * 4;
export class AodFailTask {
  private async setImage(): Promise<void> {
    const color = new ArrayBuffer(DEFAULT_IMAGE_BUFFER_SIZE);
    let opts: image.InitializationOptions = {
      editable: true,
      pixelFormat: image.PixelMapFormat.RGBA_8888,
      size: { height: DEFAULT_IMAGE_WIDTH_HEIGHT, width: DEFAULT_IMAGE_WIDTH_HEIGHT }
    }
    const imageSrc = await image.createPixelMap(color, opts);
  }
  private async setImage1(): Promise<void> {
    const color = new ArrayBuffer(DEFAULT_IMAGE_BUFFER_SIZE);
    let opts: image.InitializationOptions = {
      editable: true,
      pixelFormat: image.PixelMapFormat.RGBA_8888,
      size: { height: DEFAULT_IMAGE_WIDTH_HEIGHT, width: DEFAULT_IMAGE_WIDTH_HEIGHT }
    }
    const imageSrc = await image.createPixelMap(color, opts);
  }
  
  private setImage2() {
    // Original image size
    let width: number = 100;
    let height: number = 100;
    let buffer: ArrayBuffer = new ArrayBuffer(width * height * 4);
    image.createPixelMap(buffer, {
      editable: false,
      pixelFormat: image.PixelMapFormat.RGBA_8888,
      size: { height: height, width: width }
    })
  }
  
}
```
  #### 反例

```
import image from '@ohos.multimedia.image';
const DEFAULT_IMAGE_WIDTH_HEIGHT: number = 600;
const DEFAULT_IMAGE_BUFFER_SIZE: number = DEFAULT_IMAGE_WIDTH_HEIGHT * DEFAULT_IMAGE_WIDTH_HEIGHT * 4;
export class AodFailTask {
  private async setImage(): Promise<void> {
    const color = new ArrayBuffer(DEFAULT_IMAGE_BUFFER_SIZE);
    let opts: image.InitializationOptions = {
      editable: true,
      pixelFormat: image.PixelMapFormat.RGB_565,
      size: { height: DEFAULT_IMAGE_WIDTH_HEIGHT, width: DEFAULT_IMAGE_WIDTH_HEIGHT }
    }
    // warning
    const imageSrc = await image.createPixelMap(color, opts);
  }
  private async setImage1(): Promise<void> {
    const color = new ArrayBuffer(DEFAULT_IMAGE_BUFFER_SIZE);
    let opts: image.InitializationOptions = {
      editable: true,
      pixelFormat: image.PixelMapFormat.RGB_565,
      size: { height: DEFAULT_IMAGE_WIDTH_HEIGHT, width: DEFAULT_IMAGE_WIDTH_HEIGHT }
    }
    // warning
    const imageSrc = await image.createPixelMap(color, opts);
  }
  private setImage2() {
    // Original image size
    let width: number = 100;
    let height: number = 100;
    let buffer: ArrayBuffer = new ArrayBuffer(width * height * 4);
    // warning
    image.createPixelMap(buffer, {
      editable: false,
      pixelFormat: image.PixelMapFormat.RGB_565,
      size: { height: height, width: width }
    })
  }
}
```
  #### 规则集

plugin:@correctness/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
