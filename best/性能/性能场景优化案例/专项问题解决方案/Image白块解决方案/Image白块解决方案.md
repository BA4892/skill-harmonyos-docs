# Image白块解决方案

> **分区**: 最佳实践  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `bpta-image-white-lump-solution`  |  **DocID**: `7f0b10b293084edeb34f22840fd1c373`  |  **NodeID**: `00020177554711181383323346abcf0b`

---

# Image白块解决方案

 #### 概述

在通过Image组件加载网络图片时，整个过程可分为四个关键阶段：组件创建、图片资源下载、图片解码和最终刷新显示。当加载的图片资源过大时，组件需等待下载与解码完成后才进行刷新。由于下载阶段耗时较长（尤其在网络波动或大文件场景下），图片在完全渲染前会显示为空白或浅色占位图，这种现象被称为“Image白块”。它不仅影响视觉体验，还可能降低用户对应用性能的感知。

 为减少白块出现，开发者可采用预下载与缓存机制：

 
- 预下载阶段：在组件创建前（如父页面初始化时），将网络图片通过[应用沙箱](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)的方式进行提前缓存。
- 缓存复用阶段：当Image组件加载时，首先检查应用沙箱是否存在缓存。若存在，则直接读取缓存数据；若不存在，再发起网络请求。非首次请求时，该机制可避免重复下载，从而缩短白块持续时间。

 **图1 **Image加载网络图片两种方式对比
  1. 开发者在使用Image加载较大的网络图片时，网络下载推荐使用[HTTP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/http-request)工具提前预下载。

 2. 在预下载之后，开发者可根据业务自行选择数据处理方式，如将预下载后得到的ArrayBuffer转成BASE64、使用应用沙箱提前缓存、直接转PixelMap、或是业务上自行处理ArrayBuffer等多种方式灵活处理数据后，传给Image组件。

  当子页面需要加载很大的网络图片时，可以在父页面提前将网络数据预下载到应用沙箱中，子组件加载时从沙箱中读取，减少白块出现时长。

  #### 场景案例

开发者使用Navigation组件时，通常会在主页引入子页面组件，在按钮中添加方法实现跳转子页面组件。当子页面中需展示一张较大的网络图片时，而Image未设置占位图时，会出现点击按钮后，子组件的Image组件位置出现长时间的Image白块现象。

 本文将以应用沙箱提前缓存举例，给出减少Image白块出现时长的一种优化方案。

  #### [h2]【优化前】：使用Image组件直接加载网络地址

使用Image组件直接加载网络地址。

 ```
@Builder
export function PageOneBuilder() {
  PageOne();
}

@Component
export struct PageOne {
  pageInfo: NavPathStack = new NavPathStack();
  @State name: string = 'pageOne';
  @LocalStorageLink('imageData') imageData: PixelMap | undefined = undefined;

  build() {
    NavDestination() {
      Row() {
        // Positive example: At this time, the Image has obtained the network image that has been loaded in advance,
        // reducing the time for white blocks to appear.
        Image(this.imageData)
          .objectFit(ImageFit.Auto)
          .width('100%')
          .height('100%')
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.Center)
    }
    .title(this.name)
  }
}
```
   
- 使用Image直接加载网络图片时，可以使用.alt()的方式，在网络图片加载成功前使用占位图，避免白块出现时长过长，优化用户体验。

 
- 使用网络图片时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。

  #### [h2]【优化后】：通过预下载的方式

子页面PageOne中需展示一张较大的网络图片，在父组件的aboutToAppear()中提前发起网络请求，并做判断文件是否存在，已下载的不再重复请求，存储在应用沙箱中。当父页面点击按钮跳转子页面PageOne，此时触发pixMap请求读取应用沙箱中已缓存解码的网络图片并存储在LocalStorage中，通过在子页面的Image中传入被@StorageLink修饰的变量imageData进行数据刷新，图片送显。

 **图2 **使用预下载的方式，由开发者灵活地处理网络图片，减少白块出现时长
 
在父组件里aboutToAppear()中提前发起网络请求，当父页面点击按钮跳转子页面PageOne，此时触发pixMap请求读取应用沙箱中已缓存解码的网络图片并存储在localStorage中。非首次点击时，不再重复调用getPixMap()，避免每次点击都从沙箱里读取文件。```
import { fileIo as fs } from '@kit.CoreFileKit';
import { image } from '@kit.ImageKit';
import { common } from '@kit.AbilityKit';
import { httpRequest } from '../utils/NetRequest';
import Logger from '../utils/Logger';

// Obtain the path of the application file
const uiContext: UIContext | undefined = AppStorage.get('uiContext');
let context: common.UIAbilityContext = uiContext?.getHostContext() as common.UIAbilityContext;
let filesDir: string = context.filesDir;
let fileUrl: string = filesDir + '/xxx.png'; // The image's network address suffix needs to be replaced by the real url.
let para: Record<string, PixelMap | undefined> = { 'imageData': undefined };
let localStorage: LocalStorage = new LocalStorage(para);
const TAG: string = '[GetPixMapFunc]';

@Entry(localStorage)
@Component
struct MainPage {
  @State childNavStack: NavPathStack = new NavPathStack();
  @LocalStorageLink('imageData') imageData: PixelMap | undefined = undefined;

  getPixMap() { // Read files from the application sandbox
    try {
      let file: fs.File = fs.openSync(fileUrl, fs.OpenMode.READ_WRITE); // Open the file in a synchronous manner
      const imageSource: image.ImageSource = image.createImageSource(file.fd);
      const options: image.InitializationOptions = {
        'alphaType': 0, // transparency
        'editable': false, // Editable or not
        'pixelFormat': 3, // Pixel format
        'scaleMode': 1, // Abbreviated value
        'size': { height: 100, width: 100 }
      };
      fs.close(file)
      imageSource.createPixelMap(options).then((pixelMap: PixelMap) => {
        this.imageData = pixelMap;
      });
    } catch (e) {
      Logger.error(TAG, 'Resource loading error, file or does not exist!');
    }
  }

  aboutToAppear(): void {
    httpRequest(); // Initiate a network request ahead of the parent component
  }

  build() {
    Navigation(this.childNavStack) {
      Column() {
        Button('push Path to pageOne', { stateEffect: true, type: ButtonType.Capsule })
          .width('80%')
          .height(40)
          .margin({ bottom: '36vp' })
          .onClick(() => {
            // Do not call getPixMap() repeatedly except for the first click to avoid reading files from the sandbox with each click.
            if (!localStorage.get('imageData')) {
              this.getPixMap();
            }
            this.childNavStack.pushPath({ name: 'pageOne' });
          })
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.End)
    }
    .backgroundColor(Color.Transparent)
    .title('ParentNavigation')
  }
}
```
 在NetRequest.ets中定义网络请求httpRequest()，通过fs.access()检查文件是否存在，当文件存在时不再重复请求，并写入沙箱中。```
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

// Obtain the path of the application file
const uiContext: UIContext | undefined = AppStorage.get('uiContext');
let context: common.UIAbilityContext = uiContext?.getHostContext() as common.UIAbilityContext;
let filesDir: string = context.filesDir;
let fileUrl: string = filesDir + '/xxx.png'; // The image's network address suffix needs to be replaced by the real url.

export async function httpRequest() {
  fs.access(fileUrl, fs.AccessModeType.READ).then((res) => { // Check whether files exist
    if (!res) { // If the address does not exist in the sandbox, re-request the network image resource
      http.createHttp()
        // Please fill in a specific network image address here, example: https://img.picui.cn/free/2024/09/09/66deb127cf1c0.png
        // If you fill in the real address, you need to replace the global fileUrl with the real address suffix.
        .request('https://example.com/xxx.png',
          (error: BusinessError, data: http.HttpResponse) => {
            if (error) {
              // If the download fails, no subsequent logic is executed
              return;
            }
            // Processing data returned by network requests
            if (http.ResponseCode.OK === data.responseCode) {
              const imageData: ArrayBuffer = data.result as ArrayBuffer;
              // Save the image to the app sandbox
              readWriteFileWithStream(imageData);
            }
          }
        )
    }
  })
}

// Write to the sandbox
async function readWriteFileWithStream(imageData: ArrayBuffer): Promise<void> {
  let outputStream: fs.Stream = fs.createStreamSync(fileUrl, 'w+');
  await outputStream.write(imageData);
  outputStream.closeSync();
}
```
 在子组件中通过在子页面的Image中传入被@StorageLink修饰的变量imageData进行数据刷新，图片送显。```
@Builder
export function PageOneBuilder() {
  PageOne();
}

@Component
export struct PageOne {
  pageInfo: NavPathStack = new NavPathStack();
  @State name: string = 'pageOne';
  @LocalStorageLink('imageData') imageData: PixelMap | undefined = undefined;

  build() {
    NavDestination() {
      Row() {
        // Positive example: At this time, the Image has obtained the network image that has been loaded in advance,
        // reducing the time for white blocks to appear.
        Image(this.imageData)
          .objectFit(ImageFit.Auto)
          .width('100%')
          .height('100%')
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.Center)
    }
    .title(this.name)
  }
}
```
 
  #### 性能分析

下面使用trace对优化前后性能进行对比分析。开发者可以通过使用[DevEco Profiler](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-optimization-overview#section2012922312284)工具来抓捕trace图并识别分析应用中的性能问题。

  【优化前】

 分析阶段的起点为父页面点击按钮开始计时即trace的H:DispatchTouchEvent，结束点为子页面图片渲染的首帧出现即H:CreateImagePixelMap标签后的第一个Vsync，记录白块出现时间为1.3s，其中以H:HttpRequestInner的标签起始为起点到H:DownloadImageSuccess标签结束为终点记录时间，即为网络下载耗时1.2s，因此使用Image直接加载网络图片时，出现长时间Image白块，其原因是需要等待网络下载资源完成。

 **图3 **直接使用Image加载网络数据
 【优化后】

 分析阶段的起点为父页面点击按钮开始计时即trace的H:DispatchTouchEvent，结束点为子页面图片渲染的首帧出现即H:CreateImagePixelMap标签后的第一个Vsync，记录白块出现时间为32.6ms，其中记录H:HttpRequestInner的标签耗时即为提前网络下载的耗时1.16s，对比白块时长可知提前预下载可以减少白块出现时长。

 **图4 **使用预下载的方式
  网络下载耗时实际受到网络波动影响，优化前后的网络下载耗时数据总体差异在1s内，提供的性能数值仅供参考。

  #### 效果对比

 
（优化前）直接使用Image加载网络数据，未使用预下载

  （优化后）使用预下载

  
  

 

  

 

  
  

   #### 性能对比

对比数据如下：

   
方案

  白块出现时长(毫秒)

  白块出现时长

  
  （优化前）直接使用Image加载网络数据，未使用预下载

  1300

  图片位置白块出现时间较长

  
 （优化后）使用预下载

  32.6

  图片位置白块出现时间较短

  
  

   1.测试数据仅限于示例程序，不同设备特性和具体应用场景的多样性，所获得的性能数据存在差异，提供的数值仅供参考。

 2.由于该方案仅将下载解码网络图片的步骤提前，不会影响内存等应用数据。开发者可自行管理解码后的PixelMap，主动实现图片的复用和缓存。

  由此可见，加载网络图片时，使用预下载，提前处理网络请求并从应用沙箱中读取缓存数据的方式，可以减少用户可见Image白屏或白块出现时长，提升用户体验。

 #### 示例代码

- [Image白块解决指导](https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/PreHttpRequestUseFiles)

---
*Updated: 2026-04-10 09:44:20*
