# 设置KIA文件水印图片

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `fileguard-set-kia-watermark`  |  **DocID**: `20e1fcfd13504f35ad1fb9bc4b2b0737`  |  **NodeID**: `000201775795852716350f18e22eb42e`

---

# 设置KIA文件水印图片

                 #### 场景介绍

     为应用提供设置KIA文件水印图片能力。

                  #### 接口说明

     详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard)。

           
                        | 接口名          | 描述         
                               | [setKiaWatermarkImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setkiawatermarkimage)(image: Uint8Array, info: string): Promise<void>          | 使用Promise方式设置KIA文件水印图片。         
             

                       #### 开发步骤

     
             导入模块。

       ```
import { fileGuard } from '@kit.EnterpriseDataGuardKit';
import { fileIo } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
             初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard)对象guard，调用接口[setKiaWatermarkImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setkiawatermarkimage)，设置KIA文件水印图片。

       ```
async function testSetKiaWaterMarkImage() {
  try {
    let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
    let imagePath: string = '/data/service/el2/{account_id}/hmdfs/account/files/Docs/Documents/1.png';
    let fd: number = await guard.openFile(imagePath);
    let stat: fileIo.Stat = fileIo.statSync(fd);
    let buffer: ArrayBuffer = new ArrayBuffer(stat.size);
    fileIo.readSync(fd, buffer);

    let image: Uint8Array = new Uint8Array(buffer);
    let info: string = new Date().toLocaleString();
    guard.setKiaWatermarkImage(image, info).then(() => {
      console.info(`Succeeded in setting the watermark image for Kia file.`);
    }).catch((err: BusinessError) => {
      console.error(`Failed to set the watermark image for Kia file. Code: ${err.code}, message: ${err.message}.`);
    })
  } catch (e) {
    console.error(`[scanFileGuard] testSetKiaWaterMarkImage Exception, Code: ${e.code}, message: ${e.message}`);
  }
}
```

---
*Updated: 2026-04-20 01:46:44*
