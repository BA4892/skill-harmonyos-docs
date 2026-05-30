# 获取用户目录环境(C/C++)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `native-environment-guidelines`  |  **DocID**: `c400dd301b7c4f3ab41e0bc5e4809d3f`  |  **NodeID**: `0002017757957888842524fd65dc0a43`

---

# 获取用户目录环境(C/C++)

                 #### 场景介绍

     [Environment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-environment-h)提供了获取公共文件用户目录路径的能力，以支持三方应用在公共文件用户目录下进行文件访问操作。

                  #### 约束限制

     
      - 使用此接口，需确认设备具有以下系统能力：SystemCapability.FileManagement.File.Environment.FolderObtain。
      - 此接口仅用作公共沙箱目录路径的获取接口，操作对应的公共目录及其子目录需获取通过弹窗授权方式向用户申请授予对应目录的权限，具体参考[访问控制-向用户申请授权](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-user-authorization)。
     
                  #### 接口说明

     接口的详细说明，请参考[oh_environment.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-environment-h)。

           
                        | 接口名称          | 描述         
                               | FileManagement_ErrCode OH_Environment_GetUserDownloadDir (char **result)          | 获取用户Download目录沙箱路径。只支持2in1设备。         
                 | FileManagement_ErrCode OH_Environment_GetUserDesktopDir (char **result)          | 获取用户Desktop目录沙箱路径。只支持2in1设备。         
                 | FileManagement_ErrCode OH_Environment_GetUserDocumentDir (char **result)          | 获取用户Document目录沙箱路径。只支持2in1设备。         
             

                       #### 开发步骤

     **在CMake脚本中链接动态库**

     CMakeLists.txt中添加以下lib。

     target_link_libraries(sample PUBLIC libohenvironment.so libhilog_ndk.z.so)     **添加头文件**

     ```
#include <cstdlib>
#include <filemanagement/environment/oh_environment.h>
#include <filemanagement/fileio/oh_fileio.h>
#include <hilog/log.h>
```
     
             调用OH_Environment_GetUserDownloadDir接口获取用户Download目录沙箱路径，在接口中使用malloc申请的内存需要在使用完后释放因此需要free对应的内存。示例代码如下所示：

       ```
void GetUserDownloadDirPathExample()
{
    char *downloadPath = nullptr;
    FileManagement_ErrCode ret = OH_Environment_GetUserDownloadDir(&downloadPath);
    if (ret == 0) {
        OH_LOG_INFO(LOG_APP, "Download Path=%{public}s", downloadPath);
        free(downloadPath);
    } else {
        OH_LOG_ERROR(LOG_APP, "GetDownloadPath fail, error code is %{public}d", ret);
    }
}
```
             调用OH_Environment_GetUserDesktopDir接口获取用户Desktop目录沙箱路径，在接口中使用malloc申请的内存需要在使用完后释放因此需要free对应的内存。示例代码如下所示：

       ```
void GetUserDesktopDirPathExample()
{
    char *desktopPath = nullptr;
    FileManagement_ErrCode ret = OH_Environment_GetUserDesktopDir(&desktopPath);
    if (ret == 0) {
        OH_LOG_INFO(LOG_APP, "Desktop Path=%{public}s", desktopPath);
        free(desktopPath);
    } else {
        OH_LOG_ERROR(LOG_APP, "GetDesktopPath fail, error code is %{public}d", ret);
    }
}
```
             调用OH_Environment_GetUserDocumentDir接口获取用户Document目录沙箱路径，在接口中使用malloc申请的内存需要在使用完后释放因此需要free对应的内存。示例代码如下所示：

       ```
void GetUserDocumentDirPathExample()
{
    char *documentPath = nullptr;
    FileManagement_ErrCode ret = OH_Environment_GetUserDocumentDir(&documentPath);
    if (ret == 0) {
        OH_LOG_INFO(LOG_APP, "Document Path=%{public}s", documentPath);
        free(documentPath);
    } else {
        OH_LOG_ERROR(LOG_APP, "GetDocumentPath fail, error code is %{public}d", ret);
    }
}
```
             调用OH_Environment_GetUserDocumentDir接口获取用户Document目录沙箱路径，使用stat函数判断Document目录空间大小。示例代码如下所示：

       使用前需要引入如下头文件：

       ```
#include <sys/stat.h>
```
       ```
void GetUserDownloadDirSizeExample()
{
    char *documentPath = nullptr;
    FileManagement_ErrCode ret = OH_Environment_GetUserDocumentDir(&documentPath);
    if (ret == 0) {
        OH_LOG_INFO(LOG_APP, "Document Path=%{public}s", documentPath);
        struct stat fileStat;
        int result = stat(documentPath, &fileStat);
        if (result == 0) {
            OH_LOG_INFO(LOG_APP, "Document Size=%{public}ld", fileStat.st_size);
        } else {
            OH_LOG_ERROR(LOG_APP, "GetDocumentSize fail, error code is %{public}ld", result);
        }
        free(documentPath);
    } else {
        OH_LOG_ERROR(LOG_APP, "GetDocumentPath fail, error code is %{public}d", ret);
    }
}
```

---
*Updated: 2026-04-20 01:47:43*
