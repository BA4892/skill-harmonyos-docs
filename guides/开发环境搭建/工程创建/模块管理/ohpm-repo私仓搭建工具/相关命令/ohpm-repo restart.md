# ohpm-repo restart

> **分区**: Guides  |  **Slug**: `ide-ohpm-repo-restart`  |  **DocID**: `b0c15905eed34f3e80b9461e5b8ac94f`

---

# ohpm-repo restart

 重新启动ohpm-repo服务。

 #### 前提条件

已成功执行[install命令](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-install)，并按要求刷新环境变量。

  #### 命令格式

```
ohpm-repo restart 
```
  #### 功能描述

停止当前ohpm-repo服务，重新启动一个新的ohpm-repo服务。

  启动时将ohpm-repo服务的pid存放到<deploy_root>/runtime/.pid文件，其中<deploy_root>为[ohpm-repo私仓部署目录](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_关于-deploy_root)。

   #### 示例

执行以下命令：

 ohpm-repo restart 结果示例：

---
*Updated: 2026-04-24 01:27:08*
