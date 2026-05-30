# 人脸跟踪（ArkTS）

> **分区**: Guides  |  **Slug**: `arengine-face`  |  **DocID**: `5647bd454d1c42e586e3fc11b40356fa`  |  **NodeID**: `0002017768396665342117aee7114727`

---

# 人脸跟踪（ArkTS）

                 #### 约束与限制

     人脸跟踪能力支持部分Phone、部分Tablet、TV设备。请参考[硬件要求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations#硬件要求)判断设备是否支持运动跟踪及平面识别特性（[ARENGINE_FEATURE_TYPE_FACE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arfeaturetype)）。

                  #### 接口说明

     人脸跟踪主要依赖ARFace，以下接口为人脸跟踪的相关接口。详细接口和说明，请参考[AR Engine API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine)。

           
                        | 接口名          | 描述         
                               | [ARSession.getFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arsessiongetframe)          | 获取AR Engine处理后的一帧数据。         
                 | [ARSession.getAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arsessiongetalltrackables)          | 获取当前session中包含的人脸对象。         
                 | [ARFace.getGeometry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arfacegetgeometry)          | 返回一个人脸几何对象。         
                 | [ARFace.getBlendShapes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arfacegetblendshapes)          | 返回一个人脸微表情对象。         
             

                       #### 开发步骤

     对于使用ArkTS的任何AR应用，首先需要参考[AR特性检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontrollerisartypesupported)接口检查当前设备是否支持该特性。若设备支持，创建一个AR会话[ARViewContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontext)，用于管理AR Engine的系统状态。AR会话[ARViewContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontext)的创建可以参考[管理AR会话](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-arsession)章节。

                  #### [h2]导入模块

     人脸跟踪能力所需要导入的模块如下：

     ```
import { arEngine, ARView, arViewController } from '@kit.AREngine';
import { Node, Scene } from '@kit.ArkGraphics3D';
import { BusinessError } from '@kit.BasicServicesKit';
```
                  #### [h2]定义变量

     定义变量face接收人脸对象，定义变量faceGeometry接收人脸几何对象，定义变量faceBlendShapes接收人脸微表情对象。

     ```
let face: arEngine.ARFace;
let faceGeometry: arEngine.ARGeometry;
let faceBlendShapes: arEngine.ARBlendShapes;
```
                  #### [h2]显示预览流

     首先初始化AR会话和AR场景，可以参考[初始化AR会话和AR场景](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-arsession#初始化ar会话和ar场景)章节。

     更改type为[ARType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#artype).FACE，更改cameraLensFacing为[ARCameraLensFacing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arcameralensfacing).FRONT，更改multiFaceMode为[ARMultiFaceMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#armultifacemode).MULTIFACE_DISABLE，启用前置相机的人脸跟踪能力。

     ```
@Builder
export function ARFaceBuilder(): void {
  ARFace();
}

@Component
struct ARFace {
  @State arContext?: arViewController.ARViewContext = undefined;
  // 平面类型
  private intervalId: number = -1;
  // 重复调用函数时间间隔为33ms，即设定为30fps
  private delayInterval: number = 33;

  build(): void {
    NavDestination() {
      RelativeContainer() {
        if (this.arContext) {
          ARView({ context: this.arContext })
            .height('100%')
            .width('100%')
            .alignRules({
              center: { anchor: '__container__', align: VerticalAlign.Center },
              middle: { anchor: '__container__', align: HorizontalAlign.Center }
            })
        }
      }
    }
    .onAppear(() => {
      this.initARView();
      // 设定在30fps下更新获取物体体积信息
      this.intervalId = setInterval(async () => {
       }, this.delayInterval);
    })
    .onWillDisappear(() => {
      // 退出setInterval函数
      clearInterval(this.intervalId);
      this.stopARView();
    })
    .onShown(() => {
      this.resumeARView();
    })
    .onHidden(() => {
      this.pauseARView();
    })
    .hideTitleBar(true)
    .hideBackButton(true)
    .hideToolBar(true)
  }

  private initARView(): void {
    Scene.load().then((scene: Scene) => {
      let viewContext: arViewController.ARViewContext = new arViewController.ARViewContext();
      viewContext.scene = scene;
      viewContext.callback = new ARViewCallbackImpl();
      viewContext.config = {
        type: arEngine.ARType.FACE,
        planeFindingMode: arEngine.ARPlaneFindingMode.DISABLED,
        semanticMode: arEngine.ARSemanticMode.NONE,
        meshMode: arEngine.ARMeshMode.DISABLED,
        focusMode: arEngine.ARFocusMode.AUTO,
        cameraLensFacing: arEngine.ARCameraLensFacing.FRONT,
        multiFaceMode: arEngine.ARMultiFaceMode.MULTIFACE_DISABLE,
      }
      viewContext.init().then(() => {
        this.arContext = viewContext;
        console.info('Succeeded in initializing ARView.');
      }).catch((err: BusinessError) => {
        console.error(`Failed to init ARView. Code is ${err.code}, message is ${err.message}.`);
      })
    })
  }

  private stopARView(): void {
    // ...
  }
  private resumeARView(): void {
    // ...
  }
  private pauseARView(): void {
    // ...
  }
}
```
                  #### [h2]获取人脸几何数据和微表情数据

     调用[ARViewCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcallback)，使用其中的[onFrameUpdate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcallbackonframeupdate)方法进行帧数据更新，通过[ARSession.getFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arsessiongetframe)方法获取当前帧，通过[ARSession.getAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arsessiongetalltrackables)获得当前会话包含的人脸对象数据，通过[ARFace.getGeometry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arfacegetgeometry)和[ARFace.getBlendShapes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arfacegetblendshapes)从人脸对象数据中获取识别到的几何信息和微表情信息，相关变量定义参考[定义变量](#定义变量)。

     ```
class ARViewCallbackImpl extends arViewController.ARViewCallback {
  onAnchorAdd(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {
    // ...
  }

  onAnchorUpdate(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {
    // ...
  }

  onFrameUpdate(ctx: arViewController.ARViewContext, sysBootTs: number): void {
    if (!ctx.session) {
      return;
    }

    let arSession: arEngine.ARSession = ctx.session;

    try {
      let frame: arEngine.ARFrame = arSession.getFrame();
      if (frame) {
        // 获取face信息
        let trackables: Array<arEngine.ARTrackable> = arSession.getAllTrackables(arEngine.ARTrackableType.FACE);
        for (let i = 0; i < trackables.length; ++i) {
          if (trackables[i].state !== arEngine.ARTrackingState.TRACKING) {
            console.error('Face not in tracking state');
            continue;
          }
          face = trackables[i] as arEngine.ARFace;
          faceGeometry = face.getGeometry();
          faceBlendShapes = face.getBlendShapes();
          if(faceGeometry){
            let tmpVert = faceGeometry.getVertices();
            let tmpIndices = faceGeometry.getIndices();
          }
          if(faceBlendShapes){
            let tmpData = faceBlendShapes.getData();
            let tmpTypes = faceBlendShapes.getTypes();
          }
          faceGeometry.release();
          faceBlendShapes.release();
        }
      }
    } catch (error) {
      const err: BusinessError = error as BusinessError;
      console.error(`Failed to update data. Code is ${err.code}, message is ${err.message}.`);
    }
  }
}
```

---
*Updated: 2026-04-22 06:34:11*
