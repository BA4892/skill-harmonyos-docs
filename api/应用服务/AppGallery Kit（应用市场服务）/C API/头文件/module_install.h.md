# module_install.h

> **分区**: API参考  |  **Slug**: `store-c-module_install`  |  **DocID**: `df6346e8087d485baeb77940e8bdb64e`

---

# module_install.h

  #### 概述

声明按需分发能力的API。

 **引用文件：** <AppGalleryKit/module_install.h>

 **库：** libhmsmoduleinstall.so

 **系统能力：** SystemCapability.AppGalleryService.Distribution.OnDemandInstall

 **起始版本：** 5.0.2(14)

 **相关模块：** [ModuleInstall](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall)

   #### 汇总

  #### [h2]类型

 名称 描述   typedef struct [ModuleInstall_InstalledModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_installedmodule) [ModuleInstall_InstalledModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_installedmodule) 安装模块信息。  typedef struct [ModuleInstall_FetchModulesResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_fetchmodulesresult) [ModuleInstall_FetchModulesResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_fetchmodulesresult) 安装模块结果。  typedef struct [ModuleInstall_StatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_statuscallback) [ModuleInstall_StatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_statuscallback) 模块安装状态回调。  [ModuleInstall_OnStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_onstatuscallback) 监听回调函数       #### [h2]枚举

 名称 描述   typedef enum [ModuleInstall_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_errcode) {

 E_NO_ERROR = 0,

 E_PARAMS = 401,

 E_QUERY_MODULE = 1006500001,

 E_REPEATED_CALL = 1006500002,

 E_CONNECT_SA = 1006500004,

 E_OFF_WITHOUT_ON = 1006500006,

 E_CONNECT_SERVICE_EXTENSION = 1006500007,

 E_WRITE_PARAM = 1006500008,

 E_REQUEST_SERVER = 1006500009,

 E_RESPONSE_INVALID = 1006500010,

 E_INNER_ERROR = 1006500011

 }

  枚举错误码。  typedef enum [ModuleInstall_InstallStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_installstatus) {

 INSTALLED = 0,

 NOT_INSTALLED = 1

 }

  枚举安装状态。  typedef enum [ModuleInstall_RequestCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_requestcode) {

 MODULE_ALREADY_EXISTS = -8,

 MODULE_UNAVAILABLE = -7,

 INVALID_REQUEST = -6,

 NETWORK_ERROR = -5,

 INVOKER_VERIFICATION_FAILED = -4,

 FOREGROUND_REQUIRED = -3,

 ACTIVE_SESSION_LIMIT_EXCEEDED = -2,

 FAILURE = -1,

 SUCCESS = 0,

 DOWNLOAD_WAIT_WIFI = 1

 }

  枚举请求码。  typedef enum [ModuleInstall_TaskStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_taskstatus) {

 CREATE_TASK_FAILED = -4,

 HIGHER_VERSION_INSTALLED = -3,

 TASK_ALREADY_EXISTS = -2,

 TASK_UNFOUND = -1,

 TASK_CREATED = 0,

 DOWNLOADING = 1,

 DOWNLOAD_PAUSED = 2,

 DOWNLOAD_WAITING = 3,

 DOWNLOAD_SUCCESSFUL = 4,

 DOWNLOAD_FAILED = 5,

 DOWNLOAD_WAIT_FOR_WIFI = 6,

 INSTALL_WAITING = 20,

 INSTALLING = 21,

 INSTALL_SUCCESSFUL = 22,

 INSTALL_FAILED = 23

 }

  枚举任务状态。       #### [h2]函数

 名称 描述   [HMS_ModuleInstall_GetInstalledModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getinstalledmodule) 查询模块是否安装。  [HMS_ModuleInstall_GetInstalledModuleName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getinstalledmodulename) 获取模块名。  [HMS_ModuleInstall_GetInstalledModuleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getinstalledmoduletype) 获取模块类型。  [HMS_ModuleInstall_GetModuleInstallStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getmoduleinstallstatus) 获取模块安装状态。  [HMS_ModuleInstall_FetchModules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_fetchmodules) 请求下载模块。  [HMS_ModuleInstall_GetFetchModulesRequestCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesrequestcode) 获取模块下载请求码。  [HMS_ModuleInstall_GetFetchModulesTaskStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskstatus) 获取模块下载任务状态。  [HMS_ModuleInstall_GetFetchModulesTaskId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskid) 获取模块下载任务id。  [HMS_ModuleInstall_GetFetchModulesDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesdesc) 获取模块下载描述。  [HMS_ModuleInstall_GetFetchModules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodules) 获取模块下载模块名。  [HMS_ModuleInstall_GetFetchModulesTotalSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestotalsize) 获取模块下载总大小。  [HMS_ModuleInstall_GetFetchModulesDownloadedSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesdownloadedsize) 获取模块下载已下载大小。  [HMS_ModuleInstall_CancelTask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_canceltask) 取消下载任务。  [HMS_ModuleInstall_ShowCellularDataConfirmation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_showcellulardataconfirmation) 展示流量弹窗。  [HMS_ModuleInstall_CreateStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_createstatuscallback) 创建下载进度监听回调。  [HMS_ModuleInstall_On](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_on) 下载进度监听。  [HMS_ModuleInstall_ReleaseStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_releasestatuscallback) 释放下载进度监听回调。  [HMS_ModuleInstall_Off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_off) 取消下载进度监听。

---
*Updated: 2026-04-22 06:41:44*
