# ohpm-repo pack

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-repo-pack`  |  **DocID**: `006d21e920a5476397233743fc34a9a1`  |  **NodeID**: `0002017757900665330484788d802f4e`

---

# ohpm-repo pack

 打包ohpm-repo部署目录文件。

 #### 前提条件

已成功执行[start 命令](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-start)或者[restart 命令](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-restart)，ohpm-repo服务启动成功。

  #### 命令格式

```
ohpm-repo pack <deploy_root>
```
  #### 功能描述

用于打包ohpm-repo部署目录[deploy_root](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_关于-deploy_root)下的conf ，db和meta目录。

 说明：

 
- 如果数据存储db模块使用的是mysql，则命令只打包conf和meta目录内容。
- 如果数据存储db模块使用的是filedb，则命令打包conf、db和meta目录内容，且在命令执行过程中，会先将ohpm-repo服务设置为只读模式，等打包完成以后，再将ohpm-repo服务重置为读写模式。
- 打包产物可通过ohpm-repo restore命令自动解压至<deploy_root>目录。

  #### 参数

 #### [h2]<deploy_root>

- 类型： String
- 必填参数

 必须在pack命令后面配置<deploy_root>参数，指定待打包的[ohpm-repo私仓部署目录](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_关于-deploy_root)。

  #### 示例

执行以下命令：

 ohpm-repo pack D:\ohpm-repo 结果示例：

---
*Updated: 2026-04-22 01:07:29*
