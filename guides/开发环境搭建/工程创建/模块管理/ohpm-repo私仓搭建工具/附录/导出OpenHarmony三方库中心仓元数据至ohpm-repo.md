# 导出OpenHarmony三方库中心仓元数据至ohpm-repo

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-repo-export-metadata`  |  **DocID**: `3c608324d81e45068c87755db5ae5b64`  |  **NodeID**: `000201775790066533040aa25f3ecbb6`

---

# 导出OpenHarmony三方库中心仓元数据至ohpm-repo

 支持通过export_pkginfo和batch_download命令，将OpenHarmony三方库中心仓中所有包批量导出，并能够通过batch_publish命令将导出的库批量上传至部署的ohpm-repo实例中。

  开始执行下面的命令之前，请确保已经执行过ohpm-repo install和ohpm-repo start命令。

  #### 获取所有已上架的包列表

使用[export_pkginfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-export-pkginfo) 命令，导出OpenHarmony三方库中心仓已上架的包列表。

 ohpm-repo export_pkginfo --public-registry <OpenHarmony三方库中心仓registry地址> --http-proxy <可选配置代理地址> 执行结果

 ```
PS C:\Users\xxxxx\Desktop> ohpm-repo export_pkginfo  --public-registry https://ohpm.openharmony.cn/ohpm/
...
[xxxx-xx-xxTxx:51:46.664] [INFO] DEFAULT - Export 912 packages names success: save to "C:\Users\xxxxx\Desktop\pkgInfo_1712069506662.json".
```
 

 ```
// pkgInfo_1712069506662.json中记录着公仓的包列表
{
  "packageNameArray": [
    "@ohos/lottie-turbo@1.0.0",
    "@ohos/lottie-turbo@1.0.0-rc.0",
    "@ohos/lottie-turbo@1.0.0-rc.1",
    ...
  ]
}
```
  #### 批量下载三方包

执行[batch_download](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-batch-download)命令将上一步生成的pkgInfo_xxx.json文件中记录的包全部下载。

  若只需要下载中心仓的部分包，可以手动修改pkgInfo_xxx.json文件，此时该命令只会批量下载pkgInfo_xxx.json文件中指定的包。

  ohpm-repo batch_download <pkgInfo_xxx.json文件地址> --public-registry <OpenHarmony三方库中心仓registry地址> --http-proxy <配置代理地址> --not-use-proxy <配置不使用代理> 执行结果

 ```
PS C:\Users\xxxxx\Desktop> ohpm-repo batch_download C:\Users\xxxxx\Desktop\pkgInfo_1712069506662.json --public-registry https://ohpm.openharmony.cn/ohpm/
...
[2024-04-02T23:16:59.217] [INFO] default - A total of 912 package(s) successfully obtain download url.
[2024-04-02T23:16:59.217] [INFO] default - A total of 912 package(s) are successfully downloaded.
[2024-04-02T23:16:59.217] [INFO] default - A total of 912 package(s) are converted successfully.
[2024-04-02T23:16:59.217] [INFO] default - Packing the .zip file. . .
[2024-04-02T23:16:59.475] [INFO] default - save the .zip file to : "C:\Users\xxxxx\Desktop\batch_download_1712071006796.zip".
```
 

  #### 批量上传

执行batch_publish命令将上一步生成的batch_download_xxx.zip压缩包中全部包批量上传到ohpm-repo。

  
- batch_download_xxx.zip文件中存在pkgInfo.json文件，其中记录了每个包的 文件名、包名、组织、上传者、Tag标签，用于在批量上传时准确指定ohpm-repo的数据库中某用户为某包的真实上传用户，同时将包的Tag标签一起上传。
- 假设某个中心仓包的组织为A，如需为其指定ohpm-repo的数据库中某用户为其真实上传用户，但ohpm-repo实例中不存在A组织时，执行batch_download命令后该包的真实上传用户将设定为空，并且提醒用户手动创建A组织。执行批量上传时，也会提醒A组织在ohpm-repo实例中不存在，需要先手动创建A组织。如果需要自动添加组织，使用batch_publish命令的可选参数--force，将会选取一个管理员用户作为A组织负责人，自动创建A组织后进行该包的上传。
- 从ohpm-repo 5.3.0版本开始，ohpm-repo支持配置多个仓库。通过batch_download下载下来的包如果执行batch_publish命令，默认上传到ohpm-repo仓库名为ohpm的仓库中，如果不存在仓库名为ohpm仓库，将报错，可通过batch_publish的选项 --target-repo重新指定需要上传的仓库名。

  ohpm-repo batch_publish <batch_download_xxx.zip文件地址> --force 执行结果

 ```
PS C:\Users\xxxxx\Desktop> ohpm-repo batch_publish C:\Users\xxxxx\Desktop\batch_download_1712071006796.zip --force
...
[xxxx-xx-xxTxx:50:29.100] [INFO] default - all 912 package(s) are successfully published
[xxxx-xx-xxTxx:50:29.101] [WARN] default - You are using "filedb" to store data. If you have already started a repository service, please run `ohpm-repo restart` to restart the service.
```
  如果ohpm-repo实例的数据存储类型为filedb，请执行ohpm-repo restart命令重启ohpm-repo服务，以便刷新ohpm-repo实例缓存中的数据。该操作会影响正在使用ohpm-repo服务的用户，请提前告知。

---
*Updated: 2026-04-22 01:07:28*
