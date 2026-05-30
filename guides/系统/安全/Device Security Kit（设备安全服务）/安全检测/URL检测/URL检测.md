# URL检测

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `devicesecurity-urlthreat-check`  |  **DocID**: `e8643c071cfa4a7ea6da4c0d210178f9`  |  **NodeID**: `000201775795852716165888f606dfca`

---

# URL检测

                 #### 场景介绍

     应用通过调用Device Security Kit的checkUrlThreat接口检测URL是否为恶意的，并且根据检测结果来提示或拦截该URL。

     典型场景：用户访问网址时，判断用户访问的URL是否为恶意网址，对于恶意网址，提示或拦截用户的访问风险。

                  #### 约束与限制

     
             URL检测能力支持Phone、Tablet、PC/2in1设备。并且从5.1.0(18)版本开始，新增支持Wearable设备。

             每个应用在每个设备上每天最多可以调用1万次接口；每个设备上最多支持5个并发调用。

     
                  #### 业务流程

     

     **流程说明：**

     
             开发者应用调用URL检测（checkUrlThreat）接口，传入待检测的URL，并获得URL检测结果。

       Device Security Kit将请求发送到华为服务器检测URL风险，并将检测结果返回给开发者应用（NORMAL、PHISHING、MALWARE、OTHERS）。

             开发者应用可以根据检测结果来决定业务处理策略。

     
                  #### 接口说明

     以下是URL检测相关接口，包括ArkTS API，更多接口及使用方法请参见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-safetydetectenhanced-api#checkurlthreat)。

           
                        | 接口名          | 描述         
                               | [checkUrlThreat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-safetydetectenhanced-api#checkurlthreat)(req: [UrlCheckRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-safetydetectenhanced-api#urlcheckrequest)): Promise<[UrlCheckResponse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-safetydetectenhanced-api#urlcheckresponse)>          | 检测URL风险         
             

                       #### 开发步骤

                         请确保已打开“[安全检测服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-deviceverify-activateservice)”开关并[申请Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-0000002270709473)。

                
             导入Device Security Kit模块及相关公共模块。

       ```
import { safetyDetect } from '@kit.DeviceSecurityKit';
import { BusinessError} from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```
             调用接口获取URL检测结果。

                                 该接口涉及端云协同，需要联网等耗时操作，因此不要在UI线程中执行，避免阻塞UI线程。

                      ```
const TAG = "SafetyDetectJsTest";

// 请求URL检测，并处理结果
let req : safetyDetect.UrlCheckRequest = {
  urls : ['https://test1.com']
};
try {
  hilog.info(0x0000, TAG, 'CheckUrlThreat begin.');
  const data: safetyDetect.UrlCheckResponse = await safetyDetect.checkUrlThreat(req);
  hilog.info(0x0000, TAG, 'Succeeded in checkUrlThreat: %{public}s %{public}d', data.results[0].url, data.results[0].threat);
} catch (err) {
  let e: BusinessError = err as BusinessError;
  hilog.error(0x0000, TAG, 'CheckUrlThreat failed: %{public}d %{public}s', e.code, e.message);
}
```

---
*Updated: 2026-04-20 01:46:32*
