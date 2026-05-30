# 使用typeNode实现画中画功能开发（ArkTS）

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `pipwindow-typenode`  |  **DocID**: `06112db78882475983d8bbae1336a0fc`  |  **NodeID**: `000201775795788884490218271799ad`

---

# 使用typeNode实现画中画功能开发（ArkTS）

   
从API version 12开始，支持使用typeNode实现画中画功能开发。

  在HarmonyOS 6.0.0之前，支持在Phone、Tablet设备使用typeNode实现画中画功能开发；从HarmonyOS 6.0.0开始，支持在Phone、PC/2in1、Tablet设备使用typeNode实现画中画功能开发。

  
   该方式适用于任意场景下应用接入画中画功能，以下根据实际开发场景提供四个示例，分别介绍对应场景下画中画功能的实现步骤：

 
[应用使用typeNode自由节点（不添加到布局）实现画中画功能](#应用使用typenode自由节点不添加到布局实现画中画功能)。

  [应用使用router导航时通过typeNode实现画中画功能](#应用使用router导航时通过typenode实现画中画功能)。

  [应用使用Navigation导航时通过typeNode实现画中画功能](#应用使用navigation导航时通过typenode实现画中画功能)。

  [应用使用单界面Ability时通过typeNode实现画中画功能](#应用使用单界面ability时通过typenode实现画中画功能)。

  
 本文以视频播放为例，介绍通过typeNode实现画中画功能的基本开发步骤。

 示例中的视频播放器简易实现参考：

 ```
// model/AVPlayer.ets
// 简易播放器实现
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { media } from '@kit.MediaKit';
import { Logger } from '../util/LogUtil';

export class AVPlayer {
  private avPlayer?: media.AVPlayer;
  public surfaceID: string = '';

  setAVPlayerCallback() {
    this.avPlayer?.on('seekDone', (seekDoneTime: number) => {
      Logger.info(`AVPlayer seek succeeded, seek time is ${seekDoneTime}`);
    })
    this.avPlayer?.on('stateChange', async (state, reason) => {
      if (!this.avPlayer) {
        return;
      }
      switch (state) {
        case 'idle':
          this.avPlayer.release();
          break;
        case 'initialized':
          this.avPlayer.surfaceId = this.surfaceID;
          this.avPlayer.prepare().then(() => {
            Logger.info('AVPlayer prepare succeeded.');
          }, (err: BusinessError) => {
            Logger.error(`Invoke prepare failed, code is ${err.code}, message is ${err.message}`);
          });
          break;
        case 'prepared':
          this.avPlayer.play();
          break;
        case 'stopped':
          this.avPlayer.reset();
          break;
        default:
          break;
      }
    })
  }

  async avPlayerFdSrc() {

    try {
      this.avPlayer = await media.createAVPlayer();
    } catch(err) {
      Logger.error(`create AVPlayer failed`);
    };
    this.setAVPlayerCallback();
    let uiContext = AppStorage.get('UIContext') as UIContext;
    let context = uiContext.getHostContext() as common.UIAbilityContext;
    let fileDescriptor = await context.resourceManager.getRawFd('xxx.mp4');

    if (this.avPlayer) {
      this.avPlayer.fdSrc = fileDescriptor;
    }
  }
}
```
  #### 约束与限制

构造PiPConfiguration参数时，建议传入contentWidth和contentHeight参数用以计算画中画初始比例，否则系统将以16:9的比例呈现画中画窗口。

  contentNode支持XComponentType.SURFACE类型，且创建typeNode时必须指定为"XComponent"类型。

  在关闭画中画时，需要检查自定义组件节点是否释放，避免出现内存泄漏。

  
   #### 应用使用typeNode自由节点（不添加到布局）实现画中画功能

创建画中画控制器，注册生命周期事件以及控制事件回调。

  
通过主窗口UIContext创建typeNode节点。

  通过create(config: PiPConfiguration, contentNode: typeNode.XComponent)接口创建画中画控制器实例。

  通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画。

  通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调。

  通过画中画控制器实例的on('controlEvent')接口注册控制事件回调。

  
  启动画中画。

  创建画中画控制器实例后，通过startPiP接口启动画中画。

  更新媒体源尺寸信息。

  画中画媒体源更新后（如切换视频），通过画中画控制器实例的updateContentSize接口更新媒体源尺寸信息，以调整画中画窗口比例。

  关闭画中画。

  当不再需要显示画中画时，可根据业务需要，通过画中画控制器实例的stopPiP接口关闭画中画。

  
 ```
// entryability/EntryAbility.ets
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { PipManager } from '../nodefree/PipManager';
import { Logger } from '../util/LogUtil';

export default class EntryAbility extends UIAbility {
// ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    Logger.info('testTag', '%{public}s', 'Ability onWindowStageCreate');
    let windowClass: window.Window | undefined = undefined;
    let windowClassId: number = -1;

    windowStage.getMainWindow().then((window) => {
      if (window == null) {
        Logger.error('Failed to obtaining the window. Cause: The data is empty');
        return;
      }
      windowClass = window;
      windowClass.setUIContent('pages/Index');
      windowClassId = windowClass.getWindowProperties().id;
      AppStorage.setOrCreate('windowId', windowClassId);
      Logger.info('Succeeded in obtaining the window')

      let ctx = window.getUIContext();
      AppStorage.setOrCreate('UIContext', ctx);
      // 通过主窗口UIContext创建typeNode节点
      PipManager.getInstance().makeTypeNode(ctx);
    }).catch((err: BusinessError) => {
      Logger.error(`Failed to obtaining the window. Cause code: ${err.code}, message: ${err.message}`);
    });
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        Logger.error('testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
        return;
      }
      Logger.info('testTag', 'Succeeded in loading the content.');
    });
  }
  // ...
}
```
 ```
// pages/Index.ets
// 应用首页
import { router } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  pathStack: NavPathStack = new NavPathStack();

  build() {
    Navigation(this.pathStack) {
      Scroll() {
        Flex({ direction: FlexDirection.Column }) {
          // ...
          this.featureButton('使用TypeNode自由节点实现画中画', this.typeNodeFree);
          // ...
        }
      }
    }
    .hideBackButton(true)
    .titleMode(NavigationTitleMode.Mini)
    .backgroundColor('#FFF1F3F5')
    .mode(NavigationMode.Stack)
    .title('画中画SampleCode')
  }

  @Builder
  featureButton(buttonText: string, callbackOnClick: () => void) {
    Button({ type: ButtonType.Normal }) {
      Row() {
        Column() {
          Text(buttonText)
            .fontSize(24)
            .fontWeight(FontWeight.Bold)
            .fontColor('#000000')
          Rect()
            .radius(1)
            .fill('#0A59F7')
            .height(2)
            .width(30)
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
      }
      .width('100%')
    }
    .width('90%')
    .padding('5%')
    .margin({ top: '3%', bottom: '2%', right: '3%' })
    .backgroundColor('#FFFFFF')
    .borderRadius(20)
    .onClick(callbackOnClick)
  }

  // ...
  private typeNodeFree = () => {
    this.getUIContext().getRouter().pushUrl({ url: 'pages/TypeNodeFreePage' }, router.RouterMode.Standard)
  }
  // ...
}
```
 ```
// pages/TypeNodeFreePage.ets
// 该页面用于展示应用布局文件，创建的typeNode节点不会添加到该布局中
import { PipManager } from '../nodefree/PipManager';
import { Logger } from '../util/LogUtil';

const TAG = 'TypeNodeFreePage'
@Entry
@Component
struct TypeNodeFreePage {
  build() {
    Column() {
      Text('This is MainPage')
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .margin({ bottom: 20 })

      Text('This is not typeNode')
        .size({ width: '100%', height: '800px' })
        .fontSize(30)
        .textAlign(TextAlign.Center)
        .fontWeight(FontWeight.Bold)
        .backgroundColor('#4d5b5858')

      Row({ space: 20 }) {
        Button('startPip') // 启动画中画
          .onClick(() => {
            PipManager.getInstance().startPip();
          })

        Button('stopPip') // 停止画中画
          .onClick(() => {
            PipManager.getInstance().stopPip();
          })

        Button('updateSize') // 更新视频尺寸
          .onClick(() => {
            PipManager.getInstance().updateContentSize(900, 1600);
          })
      }
      .backgroundColor('#4da99797')
      .size({ width: '100%', height: 60 })
      .justifyContent(FlexAlign.SpaceAround)
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
  }

  aboutToDisappear(): void {
    PipManager.getInstance().unregisterPipStateChangeListener(); // 注销画中画生命周期及状态回调
  }

  onPageShow(): void {
    Logger.info(TAG, 'onPageShow')
    PipManager.getInstance().init(this.getUIContext().getHostContext() as Context); // 创建画中画控制器
    PipManager.getInstance().setAutoStart(true); // 设置应用退后台时自动启动画中画
  }

  onPageHide(): void {
    Logger.info(TAG, 'onPageHide')
    PipManager.getInstance().setAutoStart(false);
  }
}
```
 ```
// nodeFree/PipManager.ets
// 画中画控制器单例
import { PiPWindow, typeNode } from '@kit.ArkUI'; // 引入PiPWindow模块
import { BusinessError } from '@kit.BasicServicesKit';
import { AVPlayer} from '../model/AVPlayer';
import { Logger } from '../util/LogUtil';

// 自定义XComponentController
class CustomXComponentController extends XComponentController {
  // 监听onSurfaceCreated，并将surfaceId设置给播放器
  onSurfaceCreated(surfaceId: string): void {
    Logger.info(TAG, `onSurfaceCreated surfaceId: ${surfaceId}`);
    if (PipManager.getInstance().player.surfaceID === surfaceId) {
      return;
    }
    PipManager.getInstance().player.surfaceID = surfaceId;
    PipManager.getInstance().player.avPlayerFdSrc();
  }

  onSurfaceDestroyed(surfaceId: string): void {
    Logger.info(TAG, `onSurfaceDestroyed surfaceId: ${surfaceId}`);
  }
}

const TAG = 'PipManager';

export class PipManager {
  public player: AVPlayer;
  private static instance: PipManager = new PipManager();
  private pipController?: PiPWindow.PiPController = undefined;
  private mXComponentController: XComponentController;
  private xComponent: typeNode.XComponent| null = null; // typeNode节点

  public static getInstance(): PipManager {
    return PipManager.instance;
  }

  constructor() {
    this.player = new AVPlayer();
    this.mXComponentController = new CustomXComponentController();
  }

  onActionEvent(control: PiPWindow.ControlEventParam) {
    switch (control.controlType) {
      case PiPWindow.PiPControlType.VIDEO_PLAY_PAUSE:
        if (control.status === PiPWindow.PiPControlStatus.PAUSE) {
          //停止视频
        } else if (control.status === PiPWindow.PiPControlStatus.PLAY) {
          //播放视频
        }
        break;
      case PiPWindow.PiPControlType.VIDEO_NEXT:
        // 切换到下一个视频
        break;
      case PiPWindow.PiPControlType.VIDEO_PREVIOUS:
        // 切换到上一个视频
        break;
      case PiPWindow.PiPControlType.FAST_FORWARD:
        // 视频进度快进
        break;
      case PiPWindow.PiPControlType.FAST_BACKWARD:
        // 视频进度后退
        break;
      default:
        break;
    }
    Logger.info('onActionEvent, controlType:' + control.controlType + ', status' + control.status);
  }

  // 监听画中画生命周期
  onStateChange(state: PiPWindow.PiPState, reason: string) {
    let curState: string = '';
    switch (state) {
      case PiPWindow.PiPState.ABOUT_TO_START:
        curState = 'ABOUT_TO_START';
        break;
      case PiPWindow.PiPState.STARTED:
        curState = 'STARTED';
        break;
      case PiPWindow.PiPState.ABOUT_TO_STOP:
        curState = 'ABOUT_TO_STOP';
        break;
      case PiPWindow.PiPState.STOPPED:
        curState = 'STOPPED';
        break;
      case PiPWindow.PiPState.ABOUT_TO_RESTORE:
        curState = 'ABOUT_TO_RESTORE';
        break;
      case PiPWindow.PiPState.ERROR:
        curState = 'ERROR';
        break;
      default:
        break;
    }
    Logger.info(`[${TAG}] onStateChange: ${curState}, reason: ${reason}`);
  }

  // 注销监听
  unregisterPipStateChangeListener() {
    Logger.info(TAG, 'aboutToDisappear');
    this.pipController?.off('stateChange');
    this.pipController?.off('controlEvent');
  }

  getXComponentController(): CustomXComponentController {
    return this.mXComponentController;
  }

  // 步骤1：创建画中画控制器，注册生命周期事件以及控制事件回调
  init(ctx: Context) {
    if (this.pipController !== null && this.pipController != undefined) {
      return;
    }
    Logger.info(TAG, 'onPageShow');
    if (!PiPWindow.isPiPEnabled()) {
      Logger.error(TAG, `picture in picture disabled for current OS`);
      return;
    }

    let config: PiPWindow.PiPConfiguration = {
      context: ctx,
      componentController: this.getXComponentController(),
      templateType: PiPWindow.PiPTemplateType.VIDEO_PLAY,
      contentWidth: 1920, // 使用typeNode启动画中画时，contentWidth需设置为大于0的值，否则将设置为16:9默认比例
      contentHeight: 1080, // 使用typeNode启动画中画时，contentHeight需设置为大于0的值，否则将设置为16:9默认比例
    };
    // 通过create接口创建画中画控制器实例

    PiPWindow.create(config, this.xComponent).then((controller: PiPWindow.PiPController) => {
      this.pipController = controller;
      // 通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画
      this.pipController.setAutoStartEnabled(true);
      // 通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调
      this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {
        this.onStateChange(state, reason);
      });
      // 通过画中画控制器实例的on('controlEvent')接口注册控制事件回调
      this.pipController.on('controlEvent', (control: PiPWindow.ControlEventParam) => {
        this.onActionEvent(control);
      });
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to create pip controller. Cause:${err.code}, message:${err.message}`);
    });
  }

  // 步骤2：创建画中画控制器实例后，通过startPiP接口启动画中画
  startPip() {
    this.pipController?.startPiP().then(() => {
      Logger.info(TAG, `Succeeded in starting pip.`);
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to start pip. Cause:${err.code}, message:${err.message}`);
    });
  }

  // 步骤3：更新媒体源尺寸信息
  updateContentSize(width: number, height: number) {
    if (this.pipController) {
      this.pipController.updateContentSize(width, height);
    }
  }

  // 步骤4：关闭画中画
  stopPip() {
    if (this.pipController === null || this.pipController === undefined) {
      return;
    }
    let promise: Promise<void> = this.pipController.stopPiP();
    promise.then(() => {
      Logger.info(TAG, `Succeeded in stopping pip.`);
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to stop pip. Cause:${err.code}, message:${err.message}`);
    });
  }

  setAutoStart(autoStart: boolean): void {
    this.pipController?.setAutoStartEnabled(autoStart);
  }

  // 创建typeNode节点
  makeTypeNode(ctx: UIContext) {
    if (this.xComponent === null || this.xComponent === undefined) {
      // 创建XComponent类型的typeNode
      this.xComponent = typeNode.createNode(ctx, 'XComponent', {
        // 类型设置为SURFACE
        type: XComponentType.SURFACE,
        // 设置XComponentController
        controller: PipManager.getInstance().getXComponentController(),
      });
    }
  }
}
```
 以上示例代码对应的示意图如下所示：

 

   #### 应用使用router导航时通过typeNode实现画中画功能

创建画中画控制器，注册生命周期事件以及控制事件回调。

  
创建自定义NodeController，实现makeNode方法，在该方法中创建typeNode。

  通过create(config: PiPConfiguration, contentNode: typeNode.XComponent)接口创建画中画控制器实例。

  通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画。

  通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调。

  通过画中画控制器实例的on('controlEvent')接口注册控制事件回调。

  
  启动画中画。

  创建画中画控制器实例后，通过startPiP接口启动画中画，在画中画ABOUT_TO_START生命周期将typeNode节点从布局移除，并返回上级界面（可选）。如果启动画中画时返回了上级界面，需要在画中画ABOUT_TO_RESTORE（还原）时重新跳转到原界面。

  更新媒体源尺寸信息。

  画中画媒体源更新后（如切换视频），通过画中画控制器实例的updateContentSize接口更新媒体源尺寸信息，以调整画中画窗口比例。

  关闭画中画。

  当不再需要显示画中画时，可根据业务需要，通过画中画控制器实例的stopPiP接口关闭画中画，在画中画ABOUT_TO_STOP生命周期将typeNode节点重新添加到布局中。

  
 ```
// entryability/EntryAbility.ets
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { PipManager } from '../nodefree/PipManager';
import { Logger } from '../util/LogUtil';

export default class EntryAbility extends UIAbility {
// ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    // ...
    windowStage.loadContent('pages/Index', (err) => {
      // ...
    });
  }
  // ...
}
```
 ```
// pages/RouterImplementPage.ets
import { PipManager } from '../route/PipManager';
import { PiPWindow, router, Router } from '@kit.ArkUI'; // 引入PiPWindow模块
import { Logger } from '../util/LogUtil';

const TAG = 'RouterImplementPage'
@Entry
@Component
struct RouterImplementPage {
  private page1: string = 'route/Page1';
  private pageRouter: Router | null = null;

  // 画中画生命周期事件监听，用于页面及节点操作
  private callback: Function = (state: PiPWindow.PiPState) => {
    Logger.info(TAG, `pipStateChange: state ${state}`);
    if (state === PiPWindow.PiPState.ABOUT_TO_START) {
      // 返回到上级页面（可选）
      this.pageRouter?.back();
    } else if (state === PiPWindow.PiPState.ABOUT_TO_STOP) {
      // 重新将typeNode节点添加到布局中，例如还原场景
      PipManager.getInstance().addNode();
    } else if (state === PiPWindow.PiPState.ABOUT_TO_RESTORE) {
      // 如果在ABOUT_TO_START时返回了上级界面，需要还原时push到原界面
      this.jumpNext();
    }
  };

  aboutToAppear(): void {
    this.pageRouter = this.getUIContext().getRouter();
    PipManager.getInstance().registerLifecycleCallback(this.callback);
  }

  aboutToDisappear(): void {
    PipManager.getInstance().unregisterPipStateChangeListener();
    PipManager.getInstance().unRegisterLifecycleCallback(this.callback);
  }

  jumpNext(): void {
    let topPage = this.pageRouter?.getState();
    if (topPage !== undefined && (this.page1.toString() === topPage.path + topPage.name)) {
      Logger.info(TAG, `page1 aready at top`)
      return;
    }
    this.pageRouter?.pushUrl({
      url: this.page1 // 目标url
    }, router.RouterMode.Standard, (err) => {
      if (err) {
        Logger.error(TAG, `Invoke pushUrl failed, code is ${err.code}: ${err.message}`);
        return;
      }
      Logger.info(TAG, 'Invoke pushUrl succeeded.');
    });
  }

  build() {
    Row() {
      Column() {
        Text('Main Page')
          .fontSize(50)
          .fontWeight(FontWeight.Bold)

        Button('Jump Next')
          .onClick(() => {
            this.jumpNext();
          })
          .margin({ top: 16, bottom: 16 })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
 ```
// route/Page1.ets
import { PipManager } from '../route/PipManager';
import { Logger } from '../util/LogUtil';

const TAG = 'Page1';

@Entry
@Component
export struct Page1 {
  build() {
    Column() {
      Text('This is Page1')
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .margin({bottom: 20})

      // 将typeNode添加到页面布局中
      NodeContainer(PipManager.getInstance().getNodeController())
        .size({ width: '100%', height: '800px' })

      Row({ space: 20 }) {
        Button('startPip')// 启动画中画
          .onClick(() => {
            PipManager.getInstance().startPip();
          })

        Button('stopPip')// 停止画中画
          .onClick(() => {
            PipManager.getInstance().stopPip();
          })

        Button('updateSize')// 更新视频尺寸
          .onClick(() => {
            // 此处设置的宽高应为媒体内容宽高，需要通过媒体相关接口或回调获取
            // 例如使用AVPlayer播放视频时，可通过videoSizeChange回调获取媒体源更新后的尺寸
            PipManager.getInstance().updateContentSize(900, 1600);
          })
      }
      .backgroundColor('#4da99797')
      .size({ width: '100%', height: 60 })
      .justifyContent(FlexAlign.SpaceAround)
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
  }

  onPageShow(): void {
    Logger.info(TAG, 'onPageShow')
    PipManager.getInstance().initPipController(this.getUIContext().getHostContext() as Context);
    PipManager.getInstance().setAutoStart(true);
  }

  onPageHide(): void {
    Logger.info(TAG, 'onPageHide')
    PipManager.getInstance().setAutoStart(false);
    PipManager.getInstance().removeNode();
  }
}
```
 ```
// route/PipManager.ets
import { PiPWindow, typeNode } from '@kit.ArkUI'; // 引入PiPWindow模块
import { BusinessError } from '@kit.BasicServicesKit';
import { XCNodeController } from './XCNodeController';
import { AVPlayer } from '../model/AVPlayer';
import { Logger } from '../util/LogUtil';

export class CustomXComponentController extends XComponentController {
  onSurfaceCreated(surfaceId: string): void {
    Logger.info(TAG, `onSurfaceCreated surfaceId: ${surfaceId}`);
    if (PipManager.getInstance().player.surfaceID === surfaceId) {
      return;
    }
    // 将surfaceId设置给媒体源
    PipManager.getInstance().player.surfaceID = surfaceId;
    PipManager.getInstance().player.avPlayerFdSrc();
  }

  onSurfaceDestroyed(surfaceId: string): void {
    Logger.info(TAG, `onSurfaceDestroyed surfaceId: ${surfaceId}`);
  }
}

const TAG = 'PipManager';

export class PipManager {
  private static instance: PipManager = new PipManager();
  private pipController?: PiPWindow.PiPController = undefined;
  private xcNodeController: XCNodeController;
  private mXComponentController: XComponentController;
  private lifeCycleCallback: Set<Function> = new Set();
  public player: AVPlayer;

  public static getInstance(): PipManager {
    return PipManager.instance;
  }

  constructor() {
    this.xcNodeController = new XCNodeController();
    this.player = new AVPlayer();
    this.mXComponentController = new CustomXComponentController();
  }

  public registerLifecycleCallback(callBack: Function) {
    this.lifeCycleCallback.add(callBack);
  }

  public unRegisterLifecycleCallback(callBack: Function): void {
    this.lifeCycleCallback.delete(callBack);
  }

  getNode(): typeNode.XComponent | null {
    return this.xcNodeController.getNode();
  }

  onActionEvent(control: PiPWindow.ControlEventParam) {
    switch (control.controlType) {
      case PiPWindow.PiPControlType.VIDEO_PLAY_PAUSE:
        if (control.status === PiPWindow.PiPControlStatus.PAUSE) {
          //停止视频
        } else if (control.status === PiPWindow.PiPControlStatus.PLAY) {
          //播放视频
        }
        break;
      case PiPWindow.PiPControlType.VIDEO_NEXT:
        // 切换到下一个视频
        break;
      case PiPWindow.PiPControlType.VIDEO_PREVIOUS:
        // 切换到上一个视频
        break;
      case PiPWindow.PiPControlType.FAST_FORWARD:
        // 视频进度快进
        break;
      case PiPWindow.PiPControlType.FAST_BACKWARD:
        // 视频进度后退
        break;
      default:
        break;
    }
    Logger.info('onActionEvent, controlType:' + control.controlType + ', status' + control.status);
  }

  onStateChange(state: PiPWindow.PiPState, reason: string) {
    let curState: string = '';
    this.xcNodeController.setCanAddNode(
      state === PiPWindow.PiPState.ABOUT_TO_STOP || state === PiPWindow.PiPState.STOPPED)
    if (this.lifeCycleCallback !== null) {
      this.lifeCycleCallback.forEach((fun) => {
        fun(state)
      });
    }
    switch (state) {
      case PiPWindow.PiPState.ABOUT_TO_START:
        curState = 'ABOUT_TO_START';
        // 将typeNode节点从布局移除
        this.xcNodeController.removeNode();
        break;
      case PiPWindow.PiPState.STARTED:
        curState = 'STARTED';
        break;
      case PiPWindow.PiPState.ABOUT_TO_STOP:
        curState = 'ABOUT_TO_STOP';
        this.xcNodeController.dispose();
        break;
      case PiPWindow.PiPState.STOPPED:
        curState = 'STOPPED';
        break;
      case PiPWindow.PiPState.ABOUT_TO_RESTORE:
        curState = 'ABOUT_TO_RESTORE';
        break;
      case PiPWindow.PiPState.ERROR:
        curState = 'ERROR';
        break;
      default:
        break;
    }
    Logger.info(`[${TAG}] onStateChange: ${curState}, reason: ${reason}`);
  }

  unregisterPipStateChangeListener() {
    Logger.info(`${TAG} aboutToDisappear`)
    this.pipController?.off('stateChange');
    this.pipController?.off('controlEvent');
    this.pipController = undefined;
  }

  getXComponentController(): CustomXComponentController {
    return this.mXComponentController;
  }

  // 步骤1：创建画中画控制器，注册生命周期事件以及控制事件回调
  initPipController(ctx: Context) {
    if (this.pipController !== null && this.pipController != undefined) {
      return;
    }
    Logger.info(`${TAG} onPageShow`)
    if (!PiPWindow.isPiPEnabled()) {
      Logger.error(TAG, `picture in picture disabled for current OS`);
      return;
    }
    let config: PiPWindow.PiPConfiguration = {
      context: ctx,
      componentController: this.getXComponentController(),
      templateType: PiPWindow.PiPTemplateType.VIDEO_PLAY,
      contentWidth: 1920, // 使用typeNode启动画中画时，contentWidth需设置为大于0的值，否则创建画中画失败
      contentHeight: 1080, // 使用typeNode启动画中画时，contentHeight需设置为大于0的值，否则创建画中画失败
    };
    // 通过create接口创建画中画控制器实例

    PiPWindow.create(config, this.getNode()).then((controller: PiPWindow.PiPController) => {
      this.pipController = controller;
      // 通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画
      this.pipController.setAutoStartEnabled(true)
      // 通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调
      this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {
        this.onStateChange(state, reason);
      });
      // 通过画中画控制器实例的on('controlEvent')接口注册控制事件回调
      this.pipController.on('controlEvent', (control: PiPWindow.ControlEventParam) => {
        this.onActionEvent(control);
      });
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to create pip controller. Cause:${err.code}, message:${err.message}`);
    });
  }

  // 步骤2：启动画中画
  startPip() {
    this.pipController?.startPiP().then(() => {
      Logger.info(TAG, `Succeeded in starting pip.`);
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to start pip. Cause:${err.code}, message:${err.message}`);
    });
  }

  // 步骤3：更新媒体源尺寸信息
  updateContentSize(width: number, height: number) {
    if (this.pipController) {
      this.pipController.updateContentSize(width, height);
    }
  }

  // 步骤4：关闭画中画
  stopPip() {
    if (this.pipController) {
      let promise: Promise<void> = this.pipController.stopPiP();
      promise.then(() => {
        Logger.info(TAG, `Succeeded in stopping pip.`);
      }).catch((err: BusinessError) => {
        Logger.error(TAG, `Failed to stop pip. Cause:${err.code}, message:${err.message}`);
      });
    }
  }

  getNodeController(): XCNodeController {
    Logger.info(TAG, `getNodeController.`);
    return this.xcNodeController;
  }

  setAutoStart(autoStart: boolean): void {
    this.pipController?.setAutoStartEnabled(autoStart);
  }

  removeNode(): void {
    this.xcNodeController.removeNode();
  }

  addNode(): void {
    this.xcNodeController.addNode();
  }
}
```
 ```
// route/XCNodeController.ets
import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';
import { PipManager } from './PipManager';
import { Logger } from '../util/LogUtil';

const TAG = 'XCNodeController';
// 创建自定义NodeController
export class XCNodeController extends NodeController {
  public xComponent: typeNode.XComponent | null = null;
  private node: FrameNode | null = null;
  private canAddNode: boolean = true;

  // 设置是否可以添加节点
  setCanAddNode(canAddNode: boolean) {
    this.canAddNode = canAddNode;
  }

  // 实现makeNode方法，当自定义NodeController被添加到布局时，该方法会被调用
  makeNode(context: UIContext): FrameNode | null {
    this.node = new FrameNode(context);
    this.node.commonAttribute
    if (this.xComponent === null || this.xComponent === undefined) {
      // 创建XComponent类型的typeNode
      this.xComponent = typeNode.createNode(context, 'XComponent', {
        // 类型设置为SURFACE
        type: XComponentType.SURFACE,
        // 设置XComponentController
        controller: PipManager.getInstance().getXComponentController(),
      });
    }
    if (this.canAddNode) {

      try {
        this.xComponent.getParent()?.removeChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to removeChild');
      }
      try {
        this.node.appendChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to appendChild');
      }
    }
    return this.node;
  }

  // 重新添加typeNode节点
  addNode() {
    if (this.node !== null && this.node !== undefined) {
      Logger.info(TAG, 'addNode');

      try {
        this.node.appendChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to appendChild');
      }
    }
  }

  // 移除typeNode节点
  removeNode() {
    if (this.node !== null && this.node !== undefined) {
      Logger.info(TAG, 'removeNode');

      try {
        this.node.removeChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to removeChild');
      }
    }
  }

  getNode(): typeNode.XComponent | null {
    Logger.info(TAG, 'getNode is null: '+ (this.xComponent === null || this.xComponent === undefined));
    return this.xComponent;
  }

  // 开发者需要定义该方法实现布局的注销，避免内存泄漏
  dispose() {
    Logger.info(TAG, 'execute node dispose');
    if (this.node !== null) {
      this.node.dispose();
    }
  }
}
```
 以上示例代码对应的示意图如下所示：

 

   #### 应用使用Navigation导航时通过typeNode实现画中画功能

创建画中画控制器，注册生命周期事件以及控制事件回调。

  
创建自定义NodeController，实现makeNode方法，在该方法中创建typeNode。

  通过create(config: PiPConfiguration, contentNode: typeNode.XComponent)接口创建画中画控制器实例。

  通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画。

  通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调。

  通过画中画控制器实例的on('controlEvent')接口注册控制事件回调。

  
  启动画中画。

  创建画中画控制器实例后，通过startPiP接口启动画中画，在画中画ABOUT_TO_START生命周期将typeNode节点从布局移除，并返回上级界面（可选）。如果启动画中画时返回了上级界面，需要在画中画ABOUT_TO_RESTORE（还原）时重新跳转到原界面。

  更新媒体源尺寸信息。

  画中画媒体源更新后（如切换视频），通过画中画控制器实例的updateContentSize接口更新媒体源尺寸信息，以调整画中画窗口比例。

  关闭画中画。

  当不再需要显示画中画时，可根据业务需要，通过画中画控制器实例的stopPiP接口关闭画中画，在画中画ABOUT_TO_STOP生命周期将typeNode节点重新添加到布局中。

  
 ```
// entryability/EntryAbility.ets
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { PipManager } from '../nodefree/PipManager';
import { Logger } from '../util/LogUtil';

export default class EntryAbility extends UIAbility {
// ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    // ...
    windowStage.loadContent('pages/Index', (err) => {
      // ...
    });
  }
  // ...
}
```
 ```
// pages/NavigationImplementPage.ets
import { PipManager } from '../navigation/PipManager';
import { Page1 } from '../navigation/Page1';
import { PiPWindow } from '@kit.ArkUI';
import { Logger } from '../util/LogUtil';

const TAG = 'NavigationImplementPage';

@Entry
@Component
struct NavigationImplementPage {
  @Provide('pageInfos') pageInfos: NavPathStack = new NavPathStack();
  // 画中画生命周期事件监听，用于页面及节点操作
  private callback: Function = (state: PiPWindow.PiPState) => {
    Logger.info(TAG, `pipStateChange: state ${state}`);
    if (state === PiPWindow.PiPState.ABOUT_TO_START) {
      // 返回到上级页面（可选）
      this.pageInfos.pop();
    } else if (state === PiPWindow.PiPState.ABOUT_TO_STOP) {
      // 重新将typeNode节点添加到布局中，例如还原场景
      PipManager.getInstance().addNode();
    } else if (state === PiPWindow.PiPState.ABOUT_TO_RESTORE) {
      // 如果在ABOUT_TO_START时返回了上级界面，需要还原时push到原界面
      this.jumpNext();
    }
  };

  jumpNext() {
    if (this.pageInfos.getAllPathName()[0] === 'Page1') {
      Logger.info(TAG, 'Page1 already at top');
      return;
    }
    this.pageInfos.pushPath({ name: 'Page1' });
  }

  aboutToAppear(): void {
    PipManager.getInstance().registerLifecycleCallback(this.callback);
  }

  aboutToDisappear(): void {
    PipManager.getInstance().unregisterPipStateChangeListener();
    PipManager.getInstance().unRegisterLifecycleCallback(this.callback);
  }

  @Builder
  PageMap(name: string) {
    if (name === 'Page1') {
      Page1();
    }
  }

  build() {
    Navigation(this.pageInfos) {
      Column() {
        Text('This is Main Page')
        Column()
          .height('200px')
        Row({ space: 12 }) {
          Button('Jump Page1')
            .width('80%')
            .height(40)
            .margin(20)
            .onClick(() => {
              this.jumpNext();
            })
        }
      }
      .height('100%')
      .width('100%')
      .justifyContent(FlexAlign.Center)
      .backgroundColor('#DCDCDC')
    }
    .title('MainTitle')
    .navDestination(this.PageMap)
  }
}
```
 ```
// navigation/Page1.ets
import { PipManager } from './PipManager';
import { Logger } from '../util/LogUtil';

const TAG = 'Page1';

@Entry
@Component
export struct Page1 {
  build() {
    NavDestination() {
      Column() {
        Text('This is Page1')
          .fontSize(30)
          .fontWeight(FontWeight.Bold)
          .margin({ bottom: 20 })

        // 将typeNode添加到页面布局中
        NodeContainer(PipManager.getInstance().getNodeController())
          .size({ width: '100%', height: '800px' })

        Row({ space: 20 }) {
          Button('startPip') // 启动画中画
            .onClick(() => {
              PipManager.getInstance().startPip();
            })
          Button('stopPip') // 停止画中画
            .onClick(() => {
              PipManager.getInstance().stopPip();
            })
          Button('updateSize') // 更新视频尺寸
            .onClick(() => {
              // 此处设置的宽高应为媒体内容宽高，需要通过媒体相关接口或回调获取
              // 例如使用AVPlayer播放视频时，可通过videoSizeChange回调获取媒体源更新后的尺寸
              PipManager.getInstance().updateContentSize(900, 1600);
            })
        }
        .backgroundColor('#4da99797')
        .size({ width: '100%', height: 60 })
        .justifyContent(FlexAlign.SpaceAround)
      }
      .justifyContent(FlexAlign.Center)
      .width('100%')
      .height('100%')
    }
    .title('page1')
    .onShown(() => {
      Logger.info(TAG, 'onShown')
      PipManager.getInstance().init(this.getUIContext().getHostContext() as Context);
      PipManager.getInstance().setAutoStart(true);
    })
    .onHidden(() => {
      Logger.info(TAG, 'onHidden')
      PipManager.getInstance().setAutoStart(false);
      PipManager.getInstance().removeNode();
    })
  }
}
```
 ```
// navigation/XCNodeController.ets
import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';
import { PipManager } from './PipManager';
import { Logger } from '../util/LogUtil';

const TAG = 'XCNodeController';

// 创建自定义NodeController
export class XCNodeController extends NodeController {
  public xComponent: typeNode.XComponent| null = null;
  private node: FrameNode | null = null;
  private canAddNode: boolean = true;

  // 设置是否可以添加节点
  setCanAddNode(canAddNode: boolean) {
    this.canAddNode = canAddNode;
  }

  // 实现makeNode方法，当自定义NodeController被添加到布局时，该方法会被调用
  makeNode(context: UIContext): FrameNode | null {
    Logger.info(TAG, 'makeNode');
    this.node = new FrameNode(context);
    if (this.xComponent === null || this.xComponent === undefined) {
      // 创建XComponent类型的typeNode
      this.xComponent = typeNode.createNode(context, 'XComponent', {
        type: XComponentType.SURFACE, // 类型设置为SURFACE
        controller: PipManager.getInstance().getXComponentController(), // 设置XComponentController
      });
    }
    if (this.canAddNode) {

      try {
        this.xComponent.getParent()?.removeChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to removeChild');
      }
      try {
        this.node.appendChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to appendChild');
      }
    }
    return this.node;
  }

  // 重新添加typeNode节点
  addNode() {
    if (this.node !== null && this.node !== undefined) {
      Logger.info(TAG, 'addNode id:'+(this.node?.getUniqueId())+' '+this.xComponent?.getUniqueId());
      try {
        this.node.appendChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to appendChild');
      }
    }
  }

  // 移除typeNode节点
  removeNode() {
    if (this.node !== null && this.node !== undefined) {
      Logger.info(TAG, 'removeNode');

      try {
        this.node.removeChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to removeChild');
      }
    }
  }

  getNode(): typeNode.XComponent | null {
    Logger.info(TAG, 'getNode is null:'+ (this.xComponent === null || this.xComponent === undefined))
    return this.xComponent;
  }

  // 开发者需要定义该方法实现布局的注销，避免内存泄漏
  dispose() {
    Logger.info(TAG, 'execute node dispose');
    if (this.node !== null) {
      this.node.dispose();
    }
  }
}
```
 ```
// navigation/PipManager.ets
import { PiPWindow, typeNode } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { XCNodeController } from './XCNodeController';
import { AVPlayer } from '../model/AVPlayer';
import { Logger } from '../util/LogUtil';

export class CustomXComponentController extends XComponentController {
  onSurfaceCreated(surfaceId: string): void {
    Logger.info(TAG, `onSurfaceCreated surfaceId: ${surfaceId}`);
    if (PipManager.getInstance().player.surfaceID === surfaceId) {
      return;
    }
    // 将surfaceId设置给媒体源
    PipManager.getInstance().player.surfaceID = surfaceId;
    PipManager.getInstance().player.avPlayerFdSrc();
  }

  onSurfaceDestroyed(surfaceId: string): void {
    Logger.info(TAG, `onSurfaceDestroyed surfaceId: ${surfaceId}`);
  }
}

const TAG = 'PipManager';

export class PipManager {
  private static instance: PipManager = new PipManager();
  private pipController?: PiPWindow.PiPController = undefined;
  private xcNodeController: XCNodeController;
  private mXComponentController: XComponentController;
  private lifeCycleCallback: Set<Function> = new Set();
  public player: AVPlayer;

  public static getInstance(): PipManager {
    return PipManager.instance;
  }

  constructor() {
    this.xcNodeController = new XCNodeController();
    this.player = new AVPlayer();
    this.mXComponentController = new CustomXComponentController();
  }

  public registerLifecycleCallback(callBack: Function) {
    this.lifeCycleCallback.add(callBack);
  }

  public unRegisterLifecycleCallback(callBack: Function): void {
    this.lifeCycleCallback.delete(callBack);
  }

  getNode(): typeNode.XComponent | null {
    return this.xcNodeController.getNode();
  }

  onActionEvent(control: PiPWindow.ControlEventParam) {
    switch (control.controlType) {
      case PiPWindow.PiPControlType.VIDEO_PLAY_PAUSE:
        if (control.status === PiPWindow.PiPControlStatus.PAUSE) {
          //停止视频
        } else if (control.status === PiPWindow.PiPControlStatus.PLAY) {
          //播放视频
        }
        break;
      case PiPWindow.PiPControlType.VIDEO_NEXT:
        // 切换到下一个视频
        break;
      case PiPWindow.PiPControlType.VIDEO_PREVIOUS:
        // 切换到上一个视频
        break;
      case PiPWindow.PiPControlType.FAST_FORWARD:
        // 视频进度快进
        break;
      case PiPWindow.PiPControlType.FAST_BACKWARD:
        // 视频进度后退
        break;
      default:
        break;
    }
    Logger.info('onActionEvent, controlType:' + control.controlType + ', status' + control.status);
  }

  onStateChange(state: PiPWindow.PiPState, reason: string) {
    let curState: string = '';
    this.xcNodeController.setCanAddNode(
      state === PiPWindow.PiPState.ABOUT_TO_STOP || state === PiPWindow.PiPState.STOPPED)
    if (this.lifeCycleCallback !== null) {
      this.lifeCycleCallback.forEach((fun) => {
        fun(state);
      });
    }
    switch (state) {
      case PiPWindow.PiPState.ABOUT_TO_START:
        curState = 'ABOUT_TO_START';
        // 将typeNode节点从布局移除
        this.xcNodeController.removeNode();
        break;
      case PiPWindow.PiPState.STARTED:
        curState = 'STARTED';
        break;
      case PiPWindow.PiPState.ABOUT_TO_STOP:
        curState = 'ABOUT_TO_STOP';
        this.xcNodeController.dispose();
        break;
      case PiPWindow.PiPState.STOPPED:
        curState = 'STOPPED';
        break;
      case PiPWindow.PiPState.ABOUT_TO_RESTORE:
        curState = 'ABOUT_TO_RESTORE';
        break;
      case PiPWindow.PiPState.ERROR:
        curState = 'ERROR';
        break;
      default:
        break;
    }
    Logger.info(`[${TAG}] onStateChange: ${curState}, reason: ${reason}`);
  }

  unregisterPipStateChangeListener() {
    Logger.info(`${TAG} aboutToDisappear`);
    this.pipController?.off('stateChange');
    this.pipController?.off('controlEvent');
    this.pipController = undefined;
  }

  getXComponentController(): CustomXComponentController {
    return this.mXComponentController;
  }

  // 步骤1：创建画中画控制器，注册生命周期事件以及控制事件回调
  init(ctx: Context) {
    if (this.pipController !== null && this.pipController != undefined) {
      return;
    }
    Logger.info(`${TAG} onPageShow`)
    if (!PiPWindow.isPiPEnabled()) {
      Logger.error(TAG, `picture in picture disabled for current OS`);
      return;
    }

    let config: PiPWindow.PiPConfiguration = {
      context: ctx,
      componentController: this.getXComponentController(),
      templateType: PiPWindow.PiPTemplateType.VIDEO_PLAY,
      contentWidth: 1920, // 使用typeNode启动画中画时，contentWidth需设置为大于0的值，否则创建画中画失败
      contentHeight: 1080, // 使用typeNode启动画中画时，contentHeight需设置为大于0的值，否则创建画中画失败
    };
    // 通过create接口创建画中画控制器实例

    PiPWindow.create(config, this.xcNodeController.getNode()).then((controller: PiPWindow.PiPController) => {
      this.pipController = controller;
      // 通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画
      this.pipController?.setAutoStartEnabled(true);
      // 通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调
      this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {
        this.onStateChange(state, reason);
      });
      // 通过画中画控制器实例的on('controlEvent')接口注册控制事件回调
      this.pipController.on('controlEvent', (control: PiPWindow.ControlEventParam) => {
        this.onActionEvent(control);
      });
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to create pip controller. Cause:${err.code}, message:${err.message}`);
    });
  }

  // 步骤2：启动画中画
  startPip() {
    this.pipController?.startPiP().then(() => {
      Logger.info(TAG, `Succeeded in starting pip.`);
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to start pip. Cause:${err.code}, message:${err.message}`);
    });
  }

  // 步骤3：更新媒体源尺寸信息
  updateContentSize(width: number, height: number) {
    if (this.pipController) {
      this.pipController.updateContentSize(width, height);
    }
  }

  // 步骤4：关闭画中画
  stopPip() {
    if (this.pipController === null || this.pipController === undefined) {
      return;
    }
    let promise: Promise<void> = this.pipController.stopPiP();
    promise.then(() => {
      Logger.info(TAG, `Succeeded in stopping pip.`);
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to stop pip. Cause:${err.code}, message:${err.message}`);
    });
  }

  getNodeController(): XCNodeController {
    Logger.info(TAG, `getNodeController.`);
    return this.xcNodeController;
  }

  setAutoStart(autoStart: boolean): void {
    this.pipController?.setAutoStartEnabled(autoStart);
  }

  removeNode() {
    this.xcNodeController.removeNode();
  }

  addNode(): void {
    this.xcNodeController.addNode();
  }
}
```
 以上示例代码对应的示意图如下所示：

 

   #### 应用使用单界面Ability时通过typeNode实现画中画功能

创建画中画控制器，注册生命周期事件以及控制事件回调。

  
创建自定义NodeController，实现makeNode方法，在该方法中创建typeNode。

  通过create(config: PiPConfiguration, contentNode: typeNode.XComponent)接口创建画中画控制器实例。

  通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画。

  通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调。

  通过画中画控制器实例的on('controlEvent')接口注册控制事件回调。

  
  启动画中画。

  创建画中画控制器实例后，通过startPiP接口启动画中画，在画中画ABOUT_TO_START生命周期将typeNode节点从布局移除。

  更新媒体源尺寸信息。

  画中画媒体源更新后（如切换视频），通过画中画控制器实例的updateContentSize接口更新媒体源尺寸信息，以调整画中画窗口比例。

  关闭画中画。

  当不再需要显示画中画时，可根据业务需要，通过画中画控制器实例的stopPiP接口关闭画中画，在画中画ABOUT_TO_STOP生命周期将typeNode节点重新添加到布局中。

  
 ```
// entryability/EntryAbility.ets
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { PipManager } from '../nodefree/PipManager';
import { Logger } from '../util/LogUtil';

export default class EntryAbility extends UIAbility {
// ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    // ...
    windowStage.loadContent('pages/Index', (err) => {
      // ...
    });
  }
  // ...
}
```
 ```
// pages/AbilityImplementPage.ets
import { PipManager } from '../ability/PipManager';
import { PiPWindow } from '@kit.ArkUI'; // 引入PiPWindow模块
import { Logger } from '../util/LogUtil';

const TAG = 'AbilityImplementPage'
@Entry
@Component
struct AbilityImplementPage {
  private callback: Function = (state: PiPWindow.PiPState) => {
    if (state === PiPWindow.PiPState.ABOUT_TO_STOP) {
      // 画中画关闭或还原时触发ABOUT_TO_STOP生命周期，此时需要重新添加节点
      PipManager.getInstance().addNode();
    }
  };

  build() {
    Column() {
      Text('This is MainPage')
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .margin({ bottom: 20 })

      // 将typeNode添加到页面布局中
      NodeContainer(PipManager.getInstance().getNodeController())
        .size({ width: '100%', height: '800px' })

      Row({ space: 20 }) {
        Button('startPip') // 启动画中画
          .onClick(() => {
            PipManager.getInstance().startPip();
          })

        Button('stopPip') // 停止画中画
          .onClick(() => {
            PipManager.getInstance().stopPip();
          })

        Button('updateSize') // 更新视频尺寸
          .onClick(() => {
            // 此处设置的宽高应为媒体内容宽高，需要通过媒体相关接口或回调获取
            // 例如使用AVPlayer播放视频时，可通过videoSizeChange回调获取媒体源更新后的尺寸
            PipManager.getInstance().updateContentSize(900, 1600);
          })
      }
      .backgroundColor('#4da99797')
      .size({ width: '100%', height: 60 })
      .justifyContent(FlexAlign.SpaceAround)
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
  }

  aboutToAppear(): void {
    PipManager.getInstance().registerLifecycleCallback(this.callback);
  }

  aboutToDisappear(): void {
    PipManager.getInstance().unregisterPipStateChangeListener();
    PipManager.getInstance().unRegisterLifecycleCallback(this.callback);
  }

  onPageShow(): void {
    Logger.info(TAG, 'onPageShow')
    PipManager.getInstance().init(this.getUIContext().getHostContext() as Context);
    PipManager.getInstance().setAutoStart(true);
  }

  onPageHide(): void {
    Logger.info(TAG, 'onPageHide')
    PipManager.getInstance().setAutoStart(false);
  }
}
```
 ```
// ability/XCNodeController.ets
import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';
import { PipManager } from './PipManager';
import { Logger } from '../util/LogUtil';

const TAG = 'XCNodeController';

// 创建自定义NodeController
export class XCNodeController extends NodeController {
  public xComponent: typeNode.XComponent | null = null;
  private node: FrameNode | null = null;
  private canAddNode: boolean = true;

  // 设置是否可以添加节点
  setCanAddNode(canAddNode: boolean) {
    this.canAddNode = canAddNode;
  }

  // 实现makeNode方法，当自定义NodeController被添加到布局时，该方法会被调用
  makeNode(context: UIContext): FrameNode | null {
    this.node = new FrameNode(context);
    this.node.commonAttribute
    if (this.xComponent === null || this.xComponent === undefined) {
      // 创建XComponent类型的typeNode
      this.xComponent = typeNode.createNode(context, 'XComponent', {
        type: XComponentType.SURFACE, // 类型设置为SURFACE
        controller: PipManager.getInstance().getXComponentController(), // 设置XComponentController
      });
    }
    if (this.canAddNode) {

      try {
        this.xComponent.getParent()?.removeChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to removeChild');
      }
      try {
        this.node.appendChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to appendChild');
      }
    }
    return this.node;
  }

  // 重新添加typeNode节点
  addNode() {
    if (this.node !== null && this.node !== undefined) {
      Logger.info(TAG, 'addNode');

      try {
        this.node.appendChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to appendChild');
      }
    }
  }

  // 移除typeNode节点
  removeNode() {
    if (this.node !== null && this.node !== undefined) {
      Logger.info(TAG, 'removeNode');

      try {
        this.node.removeChild(this.xComponent);
      } catch (error) {
        Logger.error(TAG, 'Failed to removeChild');
      }
    }
  }

  getNode(): typeNode.XComponent | null {
    Logger.info(TAG, 'getNode is null: '+ (this.xComponent === null || this.xComponent === undefined));
    return this.xComponent;
  }

  // 开发者需要定义该方法实现布局的注销，避免内存泄漏
  dispose() {
    Logger.info(TAG, 'execute node dispose');
    if (this.node !== null) {
      this.node.dispose();
    }
  }
}
```
 ```
// ability/PipManager.ets
import { PiPWindow, typeNode } from '@kit.ArkUI'; // 引入PiPWindow模块
import { BusinessError } from '@kit.BasicServicesKit';
import { XCNodeController } from './XCNodeController';
import { AVPlayer } from '../model/AVPlayer';
import { Logger } from '../util/LogUtil';

// 自定义XComponentController
export class CustomXComponentController extends XComponentController {
  onSurfaceCreated(surfaceId: string): void {
    Logger.info(TAG, `onSurfaceCreated surfaceId: ${surfaceId}`);
    if (PipManager.getInstance().player.surfaceID === surfaceId) {
      return;
    }
    PipManager.getInstance().player.surfaceID = surfaceId;
    PipManager.getInstance().player.avPlayerFdSrc();
  }

  onSurfaceDestroyed(surfaceId: string): void {
    Logger.info(TAG, `onSurfaceDestroyed surfaceId: ${surfaceId}`);
  }
}

const TAG = 'PipManager';

export class PipManager {
  private static instance: PipManager = new PipManager();
  private pipController?: PiPWindow.PiPController = undefined;
  private xcNodeController: XCNodeController;
  private mXComponentController: XComponentController;
  private lifeCycleCallback: Set<Function> = new Set();
  public player: AVPlayer;

  public static getInstance(): PipManager {
    return PipManager.instance;
  }

  constructor() {
    this.xcNodeController = new XCNodeController();
    this.player = new AVPlayer();
    this.mXComponentController = new CustomXComponentController();
  }

  public registerLifecycleCallback(callBack: Function) {
    this.lifeCycleCallback.add(callBack);
  }

  public unRegisterLifecycleCallback(callBack: Function): void {
    this.lifeCycleCallback.delete(callBack);
  }

  getNode(): typeNode.XComponent | null {
    return this.xcNodeController.getNode();
  }

  onActionEvent(control: PiPWindow.ControlEventParam) {
    switch (control.controlType) {
      case PiPWindow.PiPControlType.VIDEO_PLAY_PAUSE:
        if (control.status === PiPWindow.PiPControlStatus.PAUSE) {
          //停止视频
        } else if (control.status === PiPWindow.PiPControlStatus.PLAY) {
          //播放视频
        }
        break;
      case PiPWindow.PiPControlType.VIDEO_NEXT:
        // 切换到下一个视频
        break;
      case PiPWindow.PiPControlType.VIDEO_PREVIOUS:
        // 切换到上一个视频
        break;
      case PiPWindow.PiPControlType.FAST_FORWARD:
        // 视频进度快进
        break;
      case PiPWindow.PiPControlType.FAST_BACKWARD:
        // 视频进度后退
        break;
      default:
        break;
    }
    Logger.info('onActionEvent, controlType:' + control.controlType + ', status' + control.status);
  }

  onStateChange(state: PiPWindow.PiPState, reason: string) {
    let curState: string = '';
    this.xcNodeController.setCanAddNode(
      state === PiPWindow.PiPState.ABOUT_TO_STOP || state === PiPWindow.PiPState.STOPPED);
    if (this.lifeCycleCallback !== null) {
      this.lifeCycleCallback.forEach((fun) => {
        fun(state);
      });
    }
    switch (state) {
      case PiPWindow.PiPState.ABOUT_TO_START:
        curState = 'ABOUT_TO_START';
        // 将typeNode节点从布局移除
        this.xcNodeController.removeNode();
        break;
      case PiPWindow.PiPState.STARTED:
        curState = 'STARTED';
        break;
      case PiPWindow.PiPState.ABOUT_TO_STOP:
        curState = 'ABOUT_TO_STOP';
        this.xcNodeController.dispose();
        break;
      case PiPWindow.PiPState.STOPPED:
        curState = 'STOPPED';
        break;
      case PiPWindow.PiPState.ABOUT_TO_RESTORE:
        curState = 'ABOUT_TO_RESTORE';
        break;
      case PiPWindow.PiPState.ERROR:
        curState = 'ERROR';
        break;
      default:
        break;
    }
    Logger.info(`[${TAG}] onStateChange: ${curState}, reason: ${reason}`);
  }

  unregisterPipStateChangeListener() {
    Logger.info(`${TAG} aboutToDisappear`);
    this.pipController?.off('stateChange');
    this.pipController?.off('controlEvent');
  }

  getXComponentController(): CustomXComponentController {
    return this.mXComponentController;
  }

  // 步骤1：创建画中画控制器，注册生命周期事件以及控制事件回调
  init(ctx: Context) {
    if (this.pipController !== null && this.pipController != undefined) {
      return;
    }
    Logger.info(`${TAG} onPageShow`)
    if (!PiPWindow.isPiPEnabled()) {
      Logger.error(TAG, `picture in picture disabled for current OS`);
      return;
    }
    let config: PiPWindow.PiPConfiguration = {
      context: ctx,
      componentController: this.getXComponentController(),
      templateType: PiPWindow.PiPTemplateType.VIDEO_PLAY,
      contentWidth: 1920, // 使用typeNode启动画中画时，contentWidth需设置为大于0的值，否则创建画中画失败
      contentHeight: 1080, // 使用typeNode启动画中画时，contentHeight需设置为大于0的值，否则创建画中画失败
    };
    // 通过create接口创建画中画控制器实例

    PiPWindow.create(config, this.xcNodeController.getNode()).then((controller: PiPWindow.PiPController) => {
      this.pipController = controller;
      // 通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画
      this.pipController?.setAutoStartEnabled(true);
      // 通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调
      this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {
        this.onStateChange(state, reason);
      });
      // 通过画中画控制器实例的on('controlEvent')接口注册控制事件回调
      this.pipController.on('controlEvent', (control: PiPWindow.ControlEventParam) => {
        this.onActionEvent(control);
      });
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to create pip controller. Cause:${err.code}, message:${err.message}`);
    });
  }

  // 步骤2：启动画中画
  startPip() {
    this.pipController?.startPiP().then(() => {
      Logger.info(TAG, `Succeeded in starting pip.`);
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to start pip. Cause:${err.code}, message:${err.message}`);
    });
  }

  // 步骤3：更新媒体源尺寸信息
  updateContentSize(width: number, height: number) {
    if (this.pipController) {
      this.pipController.updateContentSize(width, height);
    }
  }

  // 步骤4：关闭画中画
  stopPip() {
    if (this.pipController === null || this.pipController === undefined) {
      return;
    }
    let promise: Promise<void> = this.pipController.stopPiP();
    promise.then(() => {
      Logger.info(TAG, `Succeeded in stopping pip.`);
    }).catch((err: BusinessError) => {
      Logger.error(TAG, `Failed to stop pip. Cause:${err.code}, message:${err.message}`);
    });
  }

  getNodeController(): XCNodeController {
    Logger.info(TAG, `getNodeController.`);
    return this.xcNodeController;
  }

  setAutoStart(autoStart: boolean): void {
    this.pipController?.setAutoStartEnabled(autoStart);
  }

  // 将typeNode节点添加到原父节点
  addNode(): void {
    this.xcNodeController.addNode();
  }
}
```
 以上示例代码对应的示意图如下所示：

---
*Updated: 2026-04-20 01:48:32*
