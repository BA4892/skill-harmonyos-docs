# 管理AR会话

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `arengine-arsession`  |  **DocID**: `4a25dff718df4587893ea52125f60687`  |  **NodeID**: `00020177579549197593197e0c4bd151`

---

# 管理AR会话

                 #### 概要

     从5.1.0(18)开始，AR Engine支持管理AR会话能力。

     在开发AR应用之前，需调用AR会话接口创建一个独立的AR会话，供后续操作与管理使用。在整个AR应用生命周期中，AR会话扮演着至关重要的角色。

     开发者可以使用[ARViewContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontext)来进行AR会话session的创建与销毁等操作。

     [ARViewContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontext)和[ARSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arsession)的不同之处在于，[ARViewContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontext)不仅封装了AR会话session，还集成了AR场景的创建与管理，从而使得开发更为便捷。

     在进行后续功能开发前，请确保已创建一个可用的AR会话。

     本章节给出了关键开发步骤，完整代码可以参考[示例代码](https://gitcode.com/HarmonyOS_Samples/arengine_samplecode_clientdemo_arkts)。

                  #### 约束与限制

     管理AR会话能力支持部分Phone、部分Tablet设备。并且从6.1.0(23)版本开始，新增支持TV设备。请参考[硬件要求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations#硬件要求)判断设备是否支持。

                  #### 接口说明

     AR会话主要依赖[ARViewContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontext)，以下接口为AR会话相关接口。详细接口和说明，请参考[arViewController（AR场景管理能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller)。

           
                        | 接口名          | 描述         
                               | [ARViewContext.init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextinit)          | 初始化[ARViewContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontext)，初始化AR会话和设置AR渲染场景等。         
                 | [ARViewContext.pause](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextpause)          | 暂停相机跟踪与AR场景渲染。         
                 | [ARViewContext.destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextdestroy)          | 销毁[ARViewContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontext)，释放ARView使用资源，包括AR会话与呈现场景销毁，在退出ARView场景时使用。         
                 | [ARViewContext.resume](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextresume)          | 用于恢复暂停的相机跟踪与AR场景渲染。         
                 | [ARViewContext.scene](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextscene)          | 设置ARView的AR场景。         
                 | [ARViewContext.scene](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextscene-1)          | 获得的AR呈现场景，用于管理空间节点。         
                 | [ARViewContext.session](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextsession)          | 获取AR会话，用于获取相关AR环境跟踪、相机跟踪、命中检测等能力，如相机位姿、平面信息、创建锚点等。         
                 | [ARViewContext.config](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextconfig)          | 设置AR会话的配置文件，如北向坐标、性能模式等。         
                 | [ARViewContext.callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextcallback)          | 设置回调函数，以根据回调功能实现对应业务逻辑。         
             

                       #### 开发步骤

     对于使用ArkTS的任何AR应用，从6.1.0(23)开始，AREngine对于任何AR特性，都可以通过[arViewController.isARTypeSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontrollerisartypesupported)接口来查询当前设备是否支持该特性，当判断该设备支持特性后，进行之后的开发工作。

     首先需要创建一个AR会话[ARViewContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontext)，用于管理AR Engine的系统状态。

                  #### [h2]导入模块

     导入AR Engine相关模块，导入方法如下。

     ```
import { arEngine, ARView, arViewController } from '@kit.AREngine';
import { Node, Scene } from '@kit.ArkGraphics3D';
import { BusinessError } from '@kit.BasicServicesKit';
```
                  #### [h2]初始化AR会话和AR场景

     通过[ARViewContext.init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextinit)方法初始化一个AR会话及场景。

     在此之前请确保已获取相机权限，否则将不会加载AR场景，具体指导请参考[前置准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations#前置准备)或者[申请权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations#申请权限)。

     AR会话及场景创建好后使用[组件导航（Navigation）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navigation)组件及[ARView](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-component-arview#arview)组件在设备上显示AR场景，关于[组件导航（Navigation）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navigation)具体指导可参考[前置准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations#前置准备)。

     ```
@Builder
export function ARWorldBuilder(): void {
  ARWorld();
}

@Component
struct ARWorld {
  @State arContext?: arViewController.ARViewContext = undefined;

  // 创建UI窗口，显示AR场景
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
    })
    .onWillDisappear(() => {
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
      viewContext.callback = new ARViewCallbackImpl();  // 通过回调实现业务场景
      viewContext.config = {
        type: arEngine.ARType.WORLD,
        planeFindingMode: arEngine.ARPlaneFindingMode.HORIZONTAL_AND_VERTICAL,
        powerMode: arEngine.ARPowerMode.NORMAL,
        semanticMode: arEngine.ARSemanticMode.NONE,
        poseMode: arEngine.ARPoseMode.GRAVITY,
        depthMode: arEngine.ARDepthMode.AUTOMATIC,
        meshMode: arEngine.ARMeshMode.DISABLED,
        focusMode: arEngine.ARFocusMode.AUTO
      }
      viewContext.init().then(() => {
        this.arContext = viewContext;
        console.info('Succeeded in initializing ARView.');
      }).catch((err: BusinessError) => {
        console.error(`Failed to init ARView. Code is ${err.code}, message is ${err.message}.`);
      })
    })
  }
}
```
                  #### [h2]使用AR会话对象处理业务

     调用[ARViewCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcallback)，使用其中的[onFrameUpdate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcallbackonframeupdate)方法获取AR会话对象，之后可根据开发者所需的具体业务编写处理逻辑。

     ```
class ARViewCallbackImpl extends arViewController.ARViewCallback {
  onAnchorAdd(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {
    // ...
  }

  onAnchorUpdate(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {
    // ...
  }

  async onFrameUpdate(ctx: arViewController.ARViewContext, sysBootTs: number): Promise<void> {
    if (!ctx.session) {
      return;
    }

    let arSession: arEngine.ARSession = ctx.session; // 获取AR会话

    try {
      // 示例为一个帧对象的获取与销毁
      let frame: arEngine.ARFrame = arSession.getFrame();
      await frame.release();

    } catch (error) {
      const err: BusinessError = error as BusinessError;
      console.error(`Failed to update data. Code is ${err.code}, message is ${err.message}.`);
    }
  }
}
```
                  #### [h2]暂停AR会话

     要暂停AR会话，开发者可以使用[ARViewContext.pause](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextpause)方法，在应用置为后台时可以暂停AR会话和暂停AR场景。

     ```
private pauseARView(): void {
  if (!this.arContext) {
    return;
  }
  try {
    this.arContext.pause();
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    console.error(`Failed to pause context. Code is ${err.code}, message is ${err.message}.`);
  }
}
```
                  #### [h2]恢复AR会话

     要恢复暂停的AR会话和AR场景，开发者可以使用[ARViewContext.resume](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextresume)方法。

     ```
private resumeARView(): void {
  if (!this.arContext) {
    return;
  }
  try {
    this.arContext.resume();
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    console.error(`Failed to resume context. Code is ${err.code}, message is ${err.message}.`);
  }
}
```
                  #### [h2]销毁AR会话

     退出AR会话和AR场景时，开发者可以使用[ARViewContext.destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextdestroy)方法同时销毁AR会话及AR场景。

     ```
private stopARView(): void {
  if (!this.arContext) {
    return;
  }
  try {
    this.arContext.destroy();
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    console.error(`Failed to stop context. Code is ${err.code}, message is ${err.message}`);
  }
}
```
                         组件生命周期的方法，除[aboutToAppear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-lifecycle#abouttoappear)、[aboutToDisappear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-lifecycle#abouttodisappear)、[onPageShow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-lifecycle#onpageshow)、[onPageHide](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-lifecycle#onpagehide)外，还可以使用[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)的[页面生命周期](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navigation#页面生命周期)所示方法，开发者可根据需要进行选择。

---
*Updated: 2026-04-20 01:44:35*
