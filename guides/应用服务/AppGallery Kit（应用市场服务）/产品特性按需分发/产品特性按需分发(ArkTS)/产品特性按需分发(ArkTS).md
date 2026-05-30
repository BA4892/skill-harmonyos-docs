# 产品特性按需分发(ArkTS)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `store-moduleinstall_arkts`  |  **DocID**: `91a3bc039e454bddbdd0d2c2419c9445`  |  **NodeID**: `00020177579564908681615ad92b879b`

---

# 产品特性按需分发(ArkTS)

                 #### 场景介绍

     随着HarmonyOS应用的持续发展，应用的功能将越来越丰富，实际上80%的用户使用时长都会集中在20%的特性上，其余的功能可能也仅仅是面向部分用户。为了避免用户首次下载应用耗时过长，及过多占用用户空间，应用市场服务提供按需分发的能力，支持用户按需动态下载自己所需的增强特性。

                  #### 基本概念

     按需分发：一个应用程序被打包成多个安装包，安装包包含了所有的应用程序代码和静态资源。用户从应用市场下载的应用只包含基本功能的安装包，当用户需要使用增强功能时，相应安装包将会从服务器下载到设备上（应用发布请参考[发布HarmonyOS应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-0000002271695230)）。

                  #### 业务流程

     

     
             用户下载A应用的基础包。

             用户使用增强功能。

             应用通过API下载动态安装包。

             动态安装包下载完成。

             通过on接口告知用户下载结果。

     
                  #### 约束与限制

     
             应用需要上架应用市场。

             产品特性按需分发功能支持Phone、Tablet、PC/2in1设备。并且从5.1.1(19)版本开始，新增支持TV设备。

             产品特性按需分发接入调试功能支持ARM版本、X86版本的模拟器。

     
                  #### 接口说明

     产品特性按需分发场景提供以下ArkTS接口，具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager)。

           
                        | 接口名          | 描述         
                               | [getInstalledModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallmanagergetinstalledmodule)(moduleName: string): [InstalledModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#installedmodule)          | 查询模块安装信息接口。         
                 | [createModuleInstallRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallprovidercreatemoduleinstallrequest)(context: [common.UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext) | [common.ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)): [ModuleInstallRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallrequest)          | 创建按需加载请求对象。         
                 | [addModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallrequestaddmodule)(moduleName: string): [ReturnCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#returncode)          | 添加要按需加载的模块名。         
                 | [fetchModules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallmanagerfetchmodules)(moduleInstallRequest: [ModuleInstallRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallrequest)): Promise<[ModuleInstallSessionState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallsessionstate)>          | 按需加载请求接口，异步返回结果。         
                 | [cancelTask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallmanagercanceltask)(taskId: string): [ReturnCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#returncode)          | 取消下载任务接口。         
                 | [showCellularDataConfirmation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallmanagershowcellulardataconfirmation)(context: [common.UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext) | [common.ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext), taskId: string): [ReturnCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#returncode)          | 流量提醒弹窗接口。         
                 | [on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallmanageronmoduleinstallstatus)(type: 'moduleInstallStatus', callback: Callback<[ModuleInstallSessionState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallsessionstate)>, timeout: number): void          | 监听当前应用下载任务的进度。         
                 | [off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallmanageroffmoduleinstallstatus)(type: 'moduleInstallStatus', callback?: Callback<[ModuleInstallSessionState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallsessionstate)>): void          | 取消监听当前应用下载任务的进度。         
             

                       #### 开发步骤

                  #### [h2]获取模块安装信息

     
             导入moduleInstallManager模块及相关公共模块。

       ```
// LoadInstallService.ets
import { moduleInstallManager } from '@kit.AppGalleryKit';
```
             构造参数。

       入参为需要查询的模块名称。

       const moduleName: string = 'AModule';             调用[getInstalledModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallmanagergetinstalledmodule)方法，将步骤2中构造的参数传入模块中的getInstalledModule方法。

       ```
const moduleInfo: moduleInstallManager.InstalledModule = moduleInstallManager.getInstalledModule(moduleName);
```
     
                  #### [h2]创建按需加载的请求实例

     
             导入moduleInstallManager模块及相关公共模块。

       ```
// LoadInstallService.ets
import { moduleInstallManager } from '@kit.AppGalleryKit';
import type { common } from '@kit.AbilityKit';
```
             构造参数。

       入参为当前应用的上下文context，只支持[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext)和[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)类型的上下文，其中UIAbilityContext类型的上下文是要校验当前应用是否在前台，如果不在前台，则会被拒绝调用。

       const context: common.UIAbilityContext | common.ExtensionContext = this.getUIContext().getHostContext() as common.UIAbilityContext;             调用[createModuleInstallRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallprovidercreatemoduleinstallrequest)方法，将步骤2中构造的参数依次传入模块中的createModuleInstallRequest方法。

       ```
const myModuleInstallProvider: moduleInstallManager.ModuleInstallProvider = new moduleInstallManager.ModuleInstallProvider();
const myModuleInstallRequest: moduleInstallManager.ModuleInstallRequest = myModuleInstallProvider.createModuleInstallRequest(context);
```
     
                  #### [h2]请求按需加载模块

     
             导入moduleInstallManager模块及相关公共模块。

       ```
// LoadInstallService.ets
import type { common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { moduleInstallManager } from '@kit.AppGalleryKit';
```
             构造参数。

       入参为当前要按需加载的模块名。

       ```
const moduleNameA: string = 'AModule';
const moduleNameB: string = 'BModule';
```
             调用[ModuleInstallRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallrequest)中的[addModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallrequestaddmodule)方法，将步骤2中构造的参数依次传入模块中的addModule方法。

       ```
let myModuleInstallRequest: moduleInstallManager.ModuleInstallRequest;
try {
  const myModuleInstallProvider: moduleInstallManager.ModuleInstallProvider = new moduleInstallManager.ModuleInstallProvider();
  const context: common.UIAbilityContext | common.ExtensionContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
  myModuleInstallRequest = myModuleInstallProvider.createModuleInstallRequest(context);
  const aResult: moduleInstallManager.ReturnCode = myModuleInstallRequest.addModule(moduleNameA);
  const bResult: moduleInstallManager.ReturnCode = myModuleInstallRequest.addModule(moduleNameB);
  hilog.info(0, 'TAG', 'aResult:' + aResult + ' bResult:' + bResult);
} catch (error) {
  hilog.error(0, 'TAG', `addModule onError.code is ${error.code}, message is ${error.message}`);
}
```
             调用[fetchModules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallmanagerfetchmodules)方法，将步骤3中的myModuleInstallRequest传入模块中的fetchModules方法。

       ```
try {
  moduleInstallManager.fetchModules(myModuleInstallRequest)
    .then(() => {
      hilog.info(0, 'TAG', 'Succeeded in fetching Modules data.');
    })
} catch (error) {
  hilog.error(0, 'TAG', `fetching Modules onError.code is ${error.code}, message is ${error.message}`);
}
```
     
                  #### [h2]使用动态模块

     假如应用A由entry.hap、AModulelib.hsp两个包组成，其中entry是基础包，AModulelib扩展是功能包（创建方式请参考[应用程序包开发与使用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-dev)）。通过应用市场下载安装只会下载安装entry包，在entry包里面可以通过[fetchModules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager#moduleinstallmanagerfetchmodules)接口动态下载AModulelib包，并使用[动态import](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-dynamic-import)技术调用AModulelib里的方法和组件。

     AModulelib中主要实现如下：

     
             在动态模块AModulelib的module.json5中设置deliveryWithInstall为false，来标识当前AModulelib在用户主动安装应用A的时候不会一起下载安装。

       ```
{
  "module": {
    "name": "AModulelib",
    "deliveryWithInstall": false
  }
}
```
             在动态模块AModulelib中定义add方法和DateComponent组件。其中add方法用于计算加法，DateComponent用于显示文本。

       Calc.ets定义如下：

       ```
export function add(a:number, b:number) {
  return a + b;
}
```
       DateComponent.ets定义如下：

       ```
@Component
struct DateComponent {
  build() {
    Column() {
      Text('我是AModulelib中的组件')
        .margin(10);
    }
    .width(300).backgroundColor(Color.Yellow);
  }
}

@Builder
export function showDateComponent() {
  DateComponent()
}
```
             在AModulelib的AModulelib/Index.ets中导出add方法和showDateComponent方法。

       ```
export { add } from './src/main/ets/utils/Calc';
export { showDateComponent } from './src/main/ets/components/DateComponent';
```
     
     entry中主要实现如下：

     
             在entry基础模块中，增加动态依赖配置。entry的oh-package.json5中使用dynamicDependencies来动态依赖AModulelib模块。

       ```
{
  "dynamicDependencies": {
    "AModulelib": "file:../AModulelib"
  }
}
```
             在entry中使用动态模块AModulelib模块里面的方法和组件。在调用AModulelib中的功能前需要判断AModulelib是否已经加载，未加载时请参考[请求按需加载的接口](#请求按需加载模块)完成加载。

       ```
import { moduleInstallManager } from '@kit.AppGalleryKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError, Callback } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  @BuilderParam AModulelibComponent: Function;
  @State countTotal: number = 0;
  @State isShow: boolean = false;

  build() {
    Row() {
      Column() {
        Button(`调用增量模块中的add功能:3+6`)
          .onClick(() => {
            this.initAModulelib(() => {
              import('AModulelib').then((ns: ESObject) => {
                this.countTotal = ns.add(3, 6);
              }).catch((error: BusinessError) => {
                hilog.error(0, 'TAG', `add onError.code is ${error.code}, message is ${error.message}`);
              })
            })
          });
        Text('计算结果：' + this.countTotal)
          .margin(10);
        Button(`调用增量模块中的showDateComponent功能`)
          .onClick(() => {
            this.initAModulelib(() => {
              import('AModulelib').then((ns: ESObject) => {
                this.AModulelibComponent = ns.showDateComponent;
                this.isShow = true;
              }).catch((error: BusinessError) => {
                hilog.error(0, 'TAG', `showDateComponent onError.code is ${error.code}, message is ${error.message}`);
              })
            })
          }).margin({
          top: 10, bottom: 10
        });
        if (this.isShow) {
          this.AModulelibComponent()
        }
      }
      .width('100%')
    }
    .height('100%')
  }

  private showToastInfo(msg: string) {
    this.getUIContext().getPromptAction().showToast({
      message: msg,
      duration: 2000
    });
  }

  /**
   * 检查是否已加载AModulelib包
   *
   * @param successCallBack 回调
   */
  private initAModulelib(successCallBack: Callback<void>): void {
    try {
      const result: moduleInstallManager.InstalledModule = moduleInstallManager.getInstalledModule('AModulelib');
      if (result?.installStatus === moduleInstallManager.InstallStatus.INSTALLED) {
        hilog.info(0, 'TAG', 'AModulelib installed');
        successCallBack && successCallBack();
      } else {
        // AModulelib模块未安装, 需要调用fetchModules下载AModulelib模块
        hilog.info(0, 'TAG', 'AModulelib not installed');
        this.fetchModule('AModulelib', successCallBack)
      }
    } catch (error) {
      hilog.error(0, 'TAG', `getInstalledModule onError.code is ${error.code}, message is ${error.message}`);
    }
  }

  /**
   * 添加监听事件
   *
   * @param successCallBack 回调
   */
  private onListenEvents(successCallBack: Callback<void>): void {
    const timeout = 3 * 60; // 单位秒， 默认最大监听时间为30min（即30*60秒）
    moduleInstallManager.on('moduleInstallStatus', (data: moduleInstallManager.ModuleInstallSessionState) => {
      // 返回成功
      if (data.taskStatus === moduleInstallManager.TaskStatus.INSTALL_SUCCESSFUL) {
        successCallBack && successCallBack();
        this.showToastInfo('install success');
      }
    }, timeout)
  }

  /**
   * 加载指定包
   *
   * @param moduleName 需要加载的安装包名称
   * @param successCallBack 回调
   */
  private fetchModule(moduleName: string, successCallBack: Callback<void>) {
    try {
      hilog.info(0, 'TAG', 'handleFetchModules start');
      const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
      const moduleInstallProvider: moduleInstallManager.ModuleInstallProvider =
        new moduleInstallManager.ModuleInstallProvider();
      const moduleInstallRequest: moduleInstallManager.ModuleInstallRequest =
        moduleInstallProvider.createModuleInstallRequest(context);
      if (!moduleInstallRequest) {
        hilog.warn(0, 'TAG', 'moduleInstallRequest is empty');
        return;
      }
      moduleInstallRequest.addModule(moduleName);
      moduleInstallManager.fetchModules(moduleInstallRequest)
        .then((data: moduleInstallManager.ModuleInstallSessionState) => {
          hilog.info(0, 'TAG', 'Succeeded in fetching Modules result.');
          if (data.code === moduleInstallManager.RequestErrorCode.SUCCESS) {
            this.onListenEvents(successCallBack)
          } else {
            hilog.info(0, 'TAG', 'fetchModules failure');
          }
        })
        .catch((error: BusinessError) => {
          hilog.error(0, 'TAG', `fetchModules onError.code is ${error.code}, message is ${error.message}`);
        })
    } catch (error) {
      hilog.error(0, 'TAG', `handleFetchModules onError.code is ${error.code}, message is ${error.message}`);
    }
  }
}
```
     
     运行结果效果图：

     

                  #### [h2]接入调试功能

     产品特性按需分发为开发者提供接入调试功能，支持开发者在接入过程中进行调试，应用无需上架应用市场。假如应用A由entry.hap、AModulelib.hsp两个包组成，其中entry是基础包，AModulelib是扩展功能包（创建方式请参考[应用程序包开发与使用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hap-package)）。

     
             使用[调试证书签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)应用/服务，本地编译构建出entry.hap、AModulelib.hsp，可通过[HDC命令安装](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdc#hdc命令列表)或DevEco Studio直接安装基础包。

       hdc install entry.hap             打开[开发者调试模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-developer-mode#section530763213432)：进入设置 -> 机型 -> 关于手机，连续点击软件版本7次，弹出“开启“开发者模式””，点击“确认开启”。

             [访问设备沙箱路径](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-device-file-explorer#section48216711204)，在[应用el2级别加密数据目录](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory#应用沙箱路径和真实物理路径的对应关系)下，创建cache/moduleinstall/<ModuleName>目录（这里<ModuleName>是AModulelib），将模块调试包AModulelib.hsp上传至对应模块目录下（请确保模块调试包文件应有读写权限）。

       

             按照[创建按需加载的请求实例](#创建按需加载的请求实例)、[请求按需加载的接口](#请求按需加载模块)或[使用动态模块](#使用动态模块)，无需改动参数即可安装好模块调试包。监听到安装成功后，对应模块目录下的文件会被自动删除。

---
*Updated: 2026-04-20 01:50:49*
