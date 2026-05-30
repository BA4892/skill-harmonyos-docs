# ComicEffect

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `spatial-recon-comic`

**DocID**: `59e0a5547d9e45438be6037bb45fa723`

**NodeID**: `000201775795874920097f1905524637`

---

ComicEffect

ComicEffect接口封装了漫画风格的效果的参数。可实现自定义的漫画风格。

系统能力
：SystemCapability.Graphics.SpatialRender

起始版本：
6.0.1(21)

导入模块

import { spatialRender } from '@kit.SpatialReconKit';

属性

名称

类型

只读

可选

说明

lineThreshold

number

否

否

判定像素为轮廓线的阈值。图像梯度大于该阈值的像素会被判定为轮廓线。取值范围[0, 1] ，默认值0.2。

lineColor

Color

否

否

轮廓线的颜色。

示例：

import { Scene, RenderContext, RenderingPipelineType } from '@kit.ArkGraphics3D';
import { spatialRender } from '@kit.SpatialReconKit';
let renderContext: RenderContext | null = Scene.getDefaultRenderContext();

if (renderContext != null) {
 renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
 Scene.load().then(async (scene: Scene) => {
 let rf = scene.getResourceFactory();
 let effect : spatialRender.ComicEffect =
 await rf.createEffect({ effectId: spatialRender.GSPlugin.COMIC_EFFECT_ID }) as spatialRender.ComicEffect;
 let camera = await rf.createCamera({ name: "gsCam", path: "//gsCam" }, { renderingPipeline: RenderingPipelineType.FORWARD });
 camera.effects.append(effect)
 });
}

---
*2026-04-22T15:54:00.163Z*