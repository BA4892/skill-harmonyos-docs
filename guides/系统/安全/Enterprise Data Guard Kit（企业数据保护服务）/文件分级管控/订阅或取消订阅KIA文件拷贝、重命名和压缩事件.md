# 订阅或取消订阅KIA文件拷贝、重命名和压缩事件

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `fileguard-kia-event`  |  **DocID**: `6063f7b1b3a94c8385702d0aafd748e9`  |  **NodeID**: `0002017757958527163456ef0cdff71b`

---

# 订阅或取消订阅KIA文件拷贝、重命名和压缩事件

                 #### 场景介绍

     为应用提供监听或取消监听KIA文件拷贝、重命名和压缩事件的能力，当KIA文件发生变种时，通过回调函数，返回KIA变种信息。

                  #### 接口说明

     详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard)。

           
                        | 接口名          | 描述         
                               | [on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#onkiacopy)(type: 'kiaCopy', callback: Callback<string>): void          | 订阅KIA拷贝事件，需在业务初始化时注册。当用户拷贝KIA文件时会触发回调。         
                 | [off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#offkiacopy)(type: 'kiaCopy', callback?: Callback<string>): void          | 取消订阅KIA拷贝事件。         
                 | [on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#onkiarename)(type: 'kiaRename', callback: Callback<string>): void          | 订阅KIA重命名事件，需在业务初始化时注册。当用户重命名KIA文件时会触发回调。         
                 | [off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#offkiarename)(type: 'kiaRename', callback?: Callback<string>): void          | 取消订阅KIA重命名事件。         
                 | [on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#onkiacompress)(type: 'kiaCompress', callback: Callback<string>): void          | 订阅KIA压缩事件，需在业务初始化时注册。当用户压缩KIA文件时会触发回调。         
                 | [off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#offkiacompress)(type: 'kiaCompress', callback?: Callback<string>): void          | 取消订阅KIA压缩事件。         
             

                       #### 开发步骤

     
             导入模块。

       import { fileGuard } from '@kit.EnterpriseDataGuardKit';             初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard)对象guard，调用接口on或off，订阅或取消订阅KIA文件拷贝、重命名和压缩事件。

       ```
function onKiaCopyCallback(eventData: string) {
  console.info(`Succeeded in receiving kia copy eventData: ${eventData}.`);
}
function onKiaRenameCallback(eventData: string) {
  console.info(`Succeeded in receiving kia rename eventData: ${eventData}.`);
}
function onKiaCompressCallback(eventData: string) {
  console.info(`Succeeded in receiving kia compress eventData: ${eventData}.`);
}

function listenKIAEvent() {
  let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
  try {
    guard.on('kiaCopy', onKiaCopyCallback);
    guard.on('kiaRename', onKiaRenameCallback);
    guard.on('kiaCompress', onKiaCompressCallback);
  } catch (e) {
    console.error(`Failed to monitor the kia event. Code: ${e.code}, message: ${e.message}.`);
  }
  try {
    guard.off('kiaCopy');
    guard.off('kiaRename');
    guard.off('kiaCompress');
  } catch (e) {
    console.error(`Failed to cancel monitoring the kia event. Code: ${e.code}, message: ${e.message}.`);
  }
}
```

---
*Updated: 2026-04-20 01:46:44*
