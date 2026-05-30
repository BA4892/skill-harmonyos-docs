# 产品特性按需分发(C/C++)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `store-moduleinstall_c`  |  **DocID**: `d3be70936f6c4a5083daec16f564d967`  |  **NodeID**: `0002017757956490869245a640174354`

---

# 产品特性按需分发(C/C++)

                 #### 场景介绍

     随着HarmonyOS应用的持续发展，应用的功能将越来越丰富，实际上80%的用户使用时长都会集中在20%的特性上，其余的功能可能也仅仅是面向部分用户。为了避免用户首次下载应用耗时过长，及过多占用用户空间，应用市场服务提供按需分发的能力，支持用户按需动态下载自己所需的增强特性。

                  #### 基本概念

     按需分发：一个应用程序被打包成多个安装包，安装包包含了所有的应用程序代码和静态资源。用户从应用市场下载的应用只包含基本功能的安装包，当用户需要使用增强功能时，相应安装包将会从服务器下载到设备上。

                  #### 约束与限制

     
             应用需要上架应用市场。

             产品特性按需分发功能支持Phone、Tablet、PC/2in1设备。并且从5.1.1(19)版本开始，新增支持TV设备。

     
                  #### 接口说明

     产品特性按需分发场景提供以下C接口，具体API说明详见[ModuleInstall](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall)。

           
                        | 接口名          | 描述         
                               | [HMS_ModuleInstall_GetInstalledModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getinstalledmodule)          | 查询模块是否安装。         
                 | [HMS_ModuleInstall_GetInstalledModuleName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getinstalledmodulename)          | 获取模块名。         
                 | [HMS_ModuleInstall_GetInstalledModuleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getinstalledmoduletype)          | 获取模块类型。         
                 | [HMS_ModuleInstall_GetModuleInstallStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getmoduleinstallstatus)          | 获取模块安装状态。         
                 | [HMS_ModuleInstall_FetchModules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_fetchmodules)          | 请求下载模块。         
                 | [HMS_ModuleInstall_GetFetchModulesRequestCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesrequestcode)          | 获取模块下载请求码。         
                 | [HMS_ModuleInstall_GetFetchModulesTaskStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskstatus)          | 获取模块下载任务状态。         
                 | [HMS_ModuleInstall_GetFetchModulesTaskId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskid)          | 获取模块下载任务id。         
                 | [HMS_ModuleInstall_GetFetchModulesDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesdesc)          | 获取模块下载描述。         
                 | [HMS_ModuleInstall_GetFetchModules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodules)          | 获取模块下载模块名。         
                 | [HMS_ModuleInstall_GetFetchModulesTotalSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestotalsize)          | 获取模块下载总大小。         
                 | [HMS_ModuleInstall_GetFetchModulesDownloadedSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesdownloadedsize)          | 获取模块下载已下载大小。         
                 | [HMS_ModuleInstall_CancelTask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_canceltask)          | 取消下载任务。         
                 | [HMS_ModuleInstall_ShowCellularDataConfirmation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_showcellulardataconfirmation)          | 展示流量弹窗。         
                 | [HMS_ModuleInstall_CreateStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_createstatuscallback)          | 创建下载进度监听回调。         
                 | [HMS_ModuleInstall_On](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_on)          | 下载进度监听。         
                 | [HMS_ModuleInstall_ReleaseStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_releasestatuscallback)          | 释放下载进度监听回调。         
                 | [HMS_ModuleInstall_Off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_off)          | 取消下载进度监听。         
             

                       #### 使用指导

     应用要使用ModuleInstall提供的按需分发能力，需要添加对应的头文件。

                  #### [h2]在CMake脚本中链接动态库

     ```
target_link_libraries(sample PUBLIC libhmsmoduleinstall.so)
```
                  #### [h2]添加头文件

     需要开发者引入[module_install.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-module_install)头文件后，才可以使用按需分发相关API。

     ```
#include "AppGalleryKit/module_install.h"
```
                  #### 获取模块安装信息

     在使用按需分发能力之前，需要调用[HMS_ModuleInstall_GetInstalledModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getinstalledmodule)接口查询按需分发的模块是否安装，接口调用成功后，可以通过[HMS_ModuleInstall_GetInstalledModuleName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getinstalledmodulename)、[HMS_ModuleInstall_GetInstalledModuleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getinstalledmoduletype)、[HMS_ModuleInstall_GetModuleInstallStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getmoduleinstallstatus)接口分别获取模块名称、模块类型、模块安装状态信息。

     ```
char *moduleName;
ModuleInstall_InstalledModule *installedModule;
ModuleInstall_ErrCode ret = HMS_ModuleInstall_GetInstalledModule(moduleName, strlen(moduleName), &installedModule);
if (ret == E_NO_ERROR) {
    char *installedModuleName = HMS_ModuleInstall_GetInstalledModuleName(installedModule);
    int moduleType = HMS_ModuleInstall_GetInstalledModuleType(installedModule);
    int installStatus = HMS_ModuleInstall_GetModuleInstallStatus(installedModule);
}
if (installedModule != nullptr) {
    delete installedModule;
    installedModule = nullptr;
}
```
                  #### 按需加载模块

     应用可以通过[HMS_ModuleInstall_FetchModules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_fetchmodules)按需加载模块，接口调用成功之后可以通过[HMS_ModuleInstall_GetFetchModulesRequestCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesrequestcode)、[HMS_ModuleInstall_GetFetchModulesTaskStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskstatus)、[HMS_ModuleInstall_GetFetchModulesTaskId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskid)、[HMS_ModuleInstall_GetFetchModulesDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesdesc)、[HMS_ModuleInstall_GetFetchModules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodules)、[HMS_ModuleInstall_GetFetchModulesTotalSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestotalsize)、[HMS_ModuleInstall_GetFetchModulesDownloadedSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesdownloadedsize)接口获取模块下载相关信息。

     ```
char *bundleName;
int arraySize = 1;
char** moduleNames = new char*[arraySize];
for (int i = 0; i < arraySize; i++) {
     moduleNames[i] = new char[256];
}
ModuleInstall_FetchModulesResult *fetchModulesResult;
ModuleInstall_ErrCode ret = HMS_ModuleInstall_FetchModules(bundleName, strlen(bundleName), moduleNames, arraySize, &fetchModulesResult);
if (ret == E_NO_ERROR) {
    ModuleInstall_RequestCode code = HMS_ModuleInstall_GetFetchModulesRequestCode(fetchModulesResult);
    ModuleInstall_TaskStatus taskStatus = HMS_ModuleInstall_GetFetchModulesTaskStatus(fetchModulesResult);
    char *taskId = HMS_ModuleInstall_GetFetchModulesTaskId(fetchModulesResult);
    char *desc = HMS_ModuleInstall_GetFetchModulesDesc(fetchModulesResult);
    char *modules = HMS_ModuleInstall_GetFetchModules(fetchModulesResult);
    int totalSize = HMS_ModuleInstall_GetFetchModulesTotalSize(fetchModulesResult);
    int downloadedSize = HMS_ModuleInstall_GetFetchModulesDownloadedSize(fetchModulesResult);
}
if (moduleNames != nullptr) {
    delete[] moduleNames;
    moduleNames = nullptr;
}
if (fetchModulesResult != nullptr) {
    delete fetchModulesResult;
    fetchModulesResult = nullptr;
}
```
                  #### 取消下载任务

     如果需要取消下载，应用可以调用[HMS_ModuleInstall_CancelTask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_canceltask)接口取消下载任务，其中taskId是调用[HMS_ModuleInstall_GetFetchModulesTaskId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskid)接口返回的taskId。

     ```
char *taskId; // 下载任务id
int cancelResult; // 取消下载结果
ModuleInstall_ErrCode ret = HMS_ModuleInstall_CancelTask(taskId, strlen(taskId), cancelResult);
if (ret == E_NO_ERROR && cancelResult == 0) {
    // 取消下载成功
}
```
                  #### 展示流量弹窗

     如果调用[HMS_ModuleInstall_GetFetchModulesRequestCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesrequestcode)接口返回DOWNLOAD_WAIT_WIFI时，需要调用[HMS_ModuleInstall_ShowCellularDataConfirmation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_showcellulardataconfirmation)接口展示流量弹窗。

     ```
char *taskId; // 下载任务id
int showResult; // 展示流量弹窗结果
ModuleInstall_ErrCode ret = HMS_ModuleInstall_ShowCellularDataConfirmation(taskId, strlen(taskId), showResult);
if (ret == E_NO_ERROR && showResult == 0) {
    // 展示流量弹窗成功
}
```
                  #### 监听下载任务

                  #### [h2]定义监听下载回调函数

     ```
void onEvent(char *bundleName, char *eventInfo) {
    // 回调处理
}
```
                  #### [h2]初始化下载进度回调

     应用可以通过[HMS_ModuleInstall_CreateStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_createstatuscallback)初始化下载进度回调。

     ```
ModuleInstall_StatusCallback *statusCallback;
ModuleInstall_OnStatusCallback onStatusCallback = onEvent;
statusCallback = HMS_ModuleInstall_CreateStatusCallback(&onStatusCallback);
```
                  #### [h2]监听下载进度

     应用可以通过[HMS_ModuleInstall_On](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_on)接口监听下载进度。

     ```
char *bundleName; // 应用包名
int appIndex; // 应用分身索引
int period; // 监听周期
ModuleInstall_ErrCode ret = HMS_ModuleInstall_On(bundleName, strlen(bundleName), appIndex, period, &statusCallback);
```
                  #### 取消监听下载任务

     应用可以通过[HMS_ModuleInstall_Off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#hms_moduleinstall_off)接口取消下载进度监听。

     ```
char *bundleName; // 应用包名
int appIndex; // 应用分身索引
ModuleInstall_ErrCode ret = HMS_ModuleInstall_Off(bundleName, strlen(bundleName), appIndex);
if (ret == E_NO_ERROR) {
    // 取消监听成功
}
```
                  #### 完整示例

     参考以下示例，完成应用按需分发过程。

     ```
#include <cstring>
#include "AppGalleryKit/module_install.h"

void GetInstalledModule() {
    char *moduleName;
    ModuleInstall_InstalledModule *installedModule;
    ModuleInstall_ErrCode ret = HMS_ModuleInstall_GetInstalledModule(moduleName, strlen(moduleName), &installedModule);
    if (ret == E_NO_ERROR) {
        char *installedModuleName = HMS_ModuleInstall_GetInstalledModuleName(installedModule);
        int moduleType = HMS_ModuleInstall_GetInstalledModuleType(installedModule);
        int installStatus = HMS_ModuleInstall_GetModuleInstallStatus(installedModule);
    }
    if (installedModule != nullptr) {
        delete installedModule;
        installedModule = nullptr;
    }
}

void ShowCellularDataConfirmation(char *taskId) {
    int showResult;
    ModuleInstall_ErrCode ret = HMS_ModuleInstall_ShowCellularDataConfirmation(taskId, strlen(taskId), showResult);
}

void FetchModules() {
    char *bundleName;
    int arraySize = 1;
    char **moduleNames = new char *[arraySize];
    for (int i = 0; i < arraySize; i++) {
        moduleNames[i] = new char[256];
    }
    ModuleInstall_FetchModulesResult *fetchModulesResult;
    ModuleInstall_ErrCode ret = HMS_ModuleInstall_FetchModules(bundleName, strlen(bundleName), moduleNames, arraySize, &fetchModulesResult);
    if (ret == E_NO_ERROR) {
        ModuleInstall_TaskStatus taskStatus = HMS_ModuleInstall_GetFetchModulesTaskStatus(fetchModulesResult);
        char *taskId = HMS_ModuleInstall_GetFetchModulesTaskId(fetchModulesResult);
        ModuleInstall_RequestCode code = HMS_ModuleInstall_GetFetchModulesRequestCode(fetchModulesResult);
        if (code == DOWNLOAD_WAIT_WIFI) {
            ShowCellularDataConfirmation(taskId);
        }
        char *desc = HMS_ModuleInstall_GetFetchModulesDesc(fetchModulesResult);
        char *modules = HMS_ModuleInstall_GetFetchModules(fetchModulesResult);
        int totalSize = HMS_ModuleInstall_GetFetchModulesTotalSize(fetchModulesResult);
        int downloadedSize = HMS_ModuleInstall_GetFetchModulesDownloadedSize(fetchModulesResult);
    }

    if (moduleNames != nullptr) {
        delete[] moduleNames;
        moduleNames = nullptr;
    }

    if (fetchModulesResult != nullptr) {
        delete fetchModulesResult;
        fetchModulesResult = nullptr;
    }
}

void CancelTask() {
    char *taskId;
    int cancelResult;
    ModuleInstall_ErrCode ret = HMS_ModuleInstall_CancelTask(taskId, strlen(taskId), cancelResult);
}

void onEvent(char *bundleName, char *eventInfo) {}

void On() {
    char *bundleName;
    int appIndex;
    int period;
    ModuleInstall_StatusCallback *statusCallback;
    ModuleInstall_OnStatusCallback onStatusCallback = onEvent;
    statusCallback = HMS_ModuleInstall_CreateStatusCallback(&onStatusCallback);
    ModuleInstall_ErrCode ret = HMS_ModuleInstall_On(bundleName, strlen(bundleName), appIndex, period, &statusCallback);
}

void Off() {
    char *bundleName;
    int appIndex;
    ModuleInstall_ErrCode ret = HMS_ModuleInstall_Off(bundleName, strlen(bundleName), appIndex);
}
```

---
*Updated: 2026-04-20 01:51:18*
