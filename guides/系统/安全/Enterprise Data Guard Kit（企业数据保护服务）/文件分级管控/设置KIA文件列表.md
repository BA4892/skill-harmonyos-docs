# 设置KIA文件列表

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `fileguard-kia-file-list`  |  **DocID**: `03b329302e0e4813895e54130fc562e6`  |  **NodeID**: `000201775795852716339004f87020d6`

---

# 设置KIA文件列表

                 #### 场景介绍

     Enterprise Data Guard Kit为应用提供设置KIA文件列表的能力，HarmonyOS系统根据管控策略对KIA文件列表中的文件实行管控。

                  #### 接口说明

     详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard)。

           
                        | 接口名          | 描述         
                               | [setKiaFilelist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setkiafilelist)(filelist: string, callback: AsyncCallback<void>): void          | 使用Callback方式设置KIA文件列表。         
                 | [setKiaFilelist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setkiafilelist-1)(filelist: string): Promise<void>          | 使用Promise方式设置KIA文件列表。         
             

                       #### 开发步骤

     
             导入模块。

       ```
import { fileGuard } from '@kit.EnterpriseDataGuardKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
             初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard)对象guard，将KIA文件列表对象转为字符串，调用接口setKiaFilelist，设置KIA文件列表。

       
                 通过回调函数方式，设置KIA文件列表。

         ```
function setKiaFilelistCallback() {
  let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
  let fileListStr: string =
    '{"kia_filelist":["/data/service/el2/{account_id}/hmdfs/account/files/Docs/Documents/1.txt",' +
      '"/data/service/el2/{account_id}/hmdfs/account/files/Docs/Documents/2.txt"],' +
      '"kia_keyword":["key1","key2","key3"],' +
      '"kia_suffix":[".java", ".html", ".cpp", ".docx"],' +
      '"compress_suffix":[".rar", ".zip"],' +
      '"kia_update_type":0}';
  guard.setKiaFilelist(fileListStr, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to set the list of KIA file. Code: ${err.code}, message: ${err.message}.`);
    } else {
      console.info(`Succeeded in setting the list of KIA file.`);
    }
  });
}
```
                 通过Promise方式，设置KIA文件列表。

         ```
function setKiaFilelistPromise() {
  let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
  let fileListStr: string =
    '{"kia_filelist":["/data/service/el2/{account_id}/hmdfs/account/files/Docs/Documents/1.txt",' +
      '"/data/service/el2/{account_id}/hmdfs/account/files/Docs/Documents/2.txt"],' +
      '"kia_keyword":["key1","key2","key3"],' +
      '"kia_suffix":[".java", ".html", ".cpp", ".docx"],' +
      '"compress_suffix":[".rar", ".zip"],' +
      '"kia_update_type":0}';
  guard.setKiaFilelist(fileListStr).then(() => {
    console.info(`Succeeded in setting the list of KIA file.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to set the list of KIA file. Code: ${err.code}, message: ${err.message}.`);
  });
}
```

---
*Updated: 2026-04-20 01:46:44*
