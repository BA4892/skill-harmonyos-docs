# 文件路径转换API

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scenario-fusion-api-path-conversion`  |  **DocID**: `d02418131e8447738112ace132d90640`  |  **NodeID**: `00020177579564908575780bec87f496`

---

# 文件路径转换API

                 #### 场景介绍

     Scenario Fusion Kit提供文件路径转换的API，在HarmonyOS 4及以下到HarmonyOS 5及以上的升级场景和克隆场景，调用该接口可以将源文件路径转换为目标文件路径。

                  #### 接口说明

     以下是获取转换文件uri信息的接口说明，更多接口及使用方法请参见[fileUriService（文件路径转换API）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-fileuriresult)。

           
                        | 接口名          | 描述         
                               | [convertFileUris](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-fileuriresult#convertfileuris)(sourceFileUris: Array<string>): Promise<Array<[FileUriResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-fileuriresult#fileuriresult)>>          | 获取转换文件uri信息的请求对象。         
             

                       #### 开发步骤

     
             导入Scenario Fusion Kit模块以及相关公共模块。

       ```
import { fileUriService } from '@kit.ScenarioFusionKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
             传入待转换的文件路径参数列表，调用接口获取转换后的文件路径列表，代码如下：

       ```
try {
  // '/storage/emulated/0/Pictures/test.gif'表示test.gif的文件路径。
  let sourceFileUris: Array<string> =
    ['100','content://media/external/files/10', '/storage/emulated/0/Pictures/test.gif',
      '/storage/emulated/0/media/com.test/test.mp4'];
  fileUriService.convertFileUris(sourceFileUris).then(result => {
    hilog.info(0x0000, 'testTag', 'succeeded in converting file uris');
    result.forEach(data => {
      switch (data.targetType) {
        case fileUriService.TargetType.UNKNOWN:
          hilog.info(0x0000, 'testTag', 'input uri or path is not exist');
          break;
        case fileUriService.TargetType.MEDIA:
          hilog.info(0x0000, 'testTag', 'converted media uri: %{public}s', data.targetUri);
          break;
        case fileUriService.TargetType.FILE:
          // 如果输入路径存在，结果中的targetUri将是转换后的URI。
          // 否则，targetUri 将与输入路径相同，targetType 将为 UNKNOWN。
          hilog.info(0x0000, 'testTag', 'converted file path: %{public}s', data.targetUri);
          break;
      }
    })
  }).catch((error: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'Promise error: %{public}d %{public}s', error.code, error.message);
  });
} catch (error) {
  hilog.error(0x0000, 'testTag', 'failReason: %{public}d %{public}s', error.code, error.message);
}
```

---
*Updated: 2026-04-20 01:50:38*
