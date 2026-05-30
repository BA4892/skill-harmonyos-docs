# @performance/js-code-cache-by-interception-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-js-code-cache-by-interception-check`  |  **DocID**: `a82889535a5c4b928093da67965bcd0d`  |  **NodeID**: `000201775790122558539b33cdc2d229`

---

# @performance/js-code-cache-by-interception-check

 在资源拦截场景下，建议生成JavaScript字节码缓存，可以降低Web页面非首次的加载时间。

 [Web完成时延](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-develop-optimization#section1495115588211)场景下，建议优先修改。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/js-code-cache-by-interception-check": "suggestion",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import { webview } from '@kit.ArkWeb';
import { hiTraceMeter } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct JsCodeCacheByInterceptionCheckNoReport0 {
  controller: webview.WebviewController = new webview.WebviewController();
  responseResource: WebResourceResponse = new WebResourceResponse();
  jsData: string = 'JavaScript Data';

  build() {
    Column() {
      Web({ src: $rawfile('index.html'), controller: this.controller })
        .onControllerAttached(async () => {
          for (const config of this.configs) {
            const resourceMgr = this.getUIContext()?.getHostContext()?.resourceManager;
            let content = resourceMgr?.getRawFileContentSync(config.localPath);
            try {
              this.controller.precompileJavaScript(config.url, content, config.options)
                .then((errCode: number) => {
                  console.log('precompile successfully!');
                }).catch((errCode: number) => {
                console.error('precompile failed.' + errCode);
              })
            } catch (err) {
              console.error('precompile failed!.' + err.code + err.message);
            }
          }
        })
        .onInterceptRequest((event) => {
          if (event?.request.getRequestUrl() === 'https://www.example.com/test.js') {
            this.responseResource.setResponseHeader([
              {
                headerKey: 'ResponseDataID',
                headerValue: '0000000000001'
              }
            ]);
            this.responseResource.setResponseData(this.jsData);
            this.responseResource.setResponseEncoding('utf-8');
            this.responseResource.setResponseMimeType('application/javascript');
            this.responseResource.setResponseCode(200);
            this.responseResource.setReasonMessage('OK');
            return this.responseResource;
          }
          return null;
        })
        .onPageBegin(() => {
          hiTraceMeter.startTrace('getMessageData', 0);
        })
        .onPageEnd(() => {
          hiTraceMeter.finishTrace('getMessageData', 0);
        })
    }
  }

  configs: Array<Config> = [
    {
      url: 'https://www.example.com/example.js',
      localPath: 'example.js',
      options: {
        responseHeaders: [
          { headerKey: 'E-Tag', headerValue: 'xxx' },
          { headerKey: 'Last-Modified', headerValue: 'Web, 21 Mar 2024 10:38:41 GMT' }
        ]
      }
    }
  ]
}

interface Config {
  url: string,
  localPath: string,
  options: webview.CacheOptions
}
```
  #### 反例

拦截请求中未设置ResponseDataID或者自定义协议中isCodeCacheSupported设置为false，均不会生成字节码缓存。

 **示例1**：

 ```
// Example without a custom protocol and without setting ResponseDataID in the header
import { webview } from '@kit.ArkWeb';
import { hiTraceMeter } from '@kit.PerformanceAnalysisKit';
@Entry
@Component
struct JsCodeCacheByInterceptionCheckReport0 {
  controller: webview.WebviewController = new webview.WebviewController();
  responseResource: WebResourceResponse = new WebResourceResponse();
  jsData: string = 'JavaScript Data';
  build() {
    Column() {
      Web({ src: $rawfile('index.html'), controller: this.controller })
        .onPageBegin(() => {
          hiTraceMeter.startTrace('getMessageData', 0);
        })
        // warning line
        .onInterceptRequest(event => {
          if (event?.request.getRequestUrl() === 'https://www.example.com/test.js') {
            this.responseResource.setResponseData(this.jsData);
            this.responseResource.setResponseEncoding('utf-8');
            this.responseResource.setResponseMimeType('application/javascript');
            this.responseResource.setResponseCode(200);
            this.responseResource.setReasonMessage('OK');
            return this.responseResource;
          }
          return null;
        })
        .onControllerAttached(async () => {
          this.controller.precompileJavaScript('', 'content', null)
            .then((errCode: number) => {
              console.log('precompile successfully!' );
            }).catch((errCode: number) => {
            console.error('precompile failed.' + errCode);
          })
        })
        .onPageEnd(() => {
          hiTraceMeter.finishTrace('getMessageData', 0);
        })
    }
    .width('100%')
  }
}
```
  **示例2**：

 ```
// Example with a custom protocol and with isCodeCacheSupported set to false
import { webview } from '@kit.ArkWeb';
import { BusinessError } from '@kit.BasicServicesKit';
@Entry
@Component
struct JsCodeCacheByInterceptionCheckReport2 {
  // warning line
  scheme2: webview.WebCustomScheme = { schemeName: "scheme2", isSupportCORS: true, isSupportFetch: true, isCodeCacheSupported: false }
  webController: webview.WebviewController = new webview.WebviewController();
  jsData: string = 'JavaScript Data';
  aboutToAppear(): void {
    try {
      webview.WebviewController.customizeSchemes([this.scheme2])
    } catch (error) {
      let e: BusinessError = error as BusinessError;
      console.error(`ErrorCode: ${e.code},  Message: ${e.message}`);
    }
  }
  build() {
    Column() {
      Web({
        src: $rawfile('index2.html'),
        controller: this.webController
      })
        .fileAccess(true)
        .javaScriptAccess(true)
        .width('100%')
        .height('100%')
        .onConsole((event) => {
          console.log('ets onConsole:' + event?.message.getMessage());
          return false
        })
        .onInterceptRequest((event) => {
          if (event?.request.getRequestUrl() === 'scheme2://www.intercept.com/test-cc2.js') {
            let responseResource = new WebResourceResponse();
            responseResource.setResponseHeader([
              {
                headerKey: 'ResponseDataID',
                headerValue: '0000000000002'
              }]);
            responseResource.setResponseData(this.jsData);
            responseResource.setResponseEncoding('utf-8');
            responseResource.setResponseMimeType('application/javascript');
            responseResource.setResponseCode(200);
            responseResource.setReasonMessage('OK');
            return responseResource;
          }
          return null;
        })
        .onControllerAttached(async () => {
          this.webController.precompileJavaScript('', 'content', null)
            .then((errCode: number) => {
              console.log('precompile successfully!' );
            }).catch((errCode: number) => {
            console.error('precompile failed.' + errCode);
          })
        })
    }
  }
}
```
 #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
