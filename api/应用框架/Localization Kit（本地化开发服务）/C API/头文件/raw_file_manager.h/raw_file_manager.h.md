# raw_file_manager.h

> **分区**: API参考  |  **Slug**: `capi-raw-file-manager-h`  |  **DocID**: `591fbc63066a4bd685af486d54ffa075`

---

# raw_file_manager.h

  #### 概述

提供资源管理rawfile相关功能，可以使用ResourceManager打开rawfile进行后续相关操作，像搜索和读取等。

 **引用文件：** <rawfile/raw_file_manager.h>

 **库：** librawfile.z.so

 **系统能力：** SystemCapability.Global.ResourceManager

 **起始版本：** 8

 **相关模块：** [rawfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) NativeResourceManager 代表native侧的ResourceManager。此类封装了JavaScript resource manager的native实现，**ResourceManager**指针可以通过调用[OH_ResourceManager_InitNativeResourceManager](#oh_resourcemanager_initnativeresourcemanager)方法获取。       #### [h2]函数

 名称 描述   [NativeResourceManager *OH_ResourceManager_InitNativeResourceManager(napi_env env, napi_value jsResMgr)](#oh_resourcemanager_initnativeresourcemanager) 基于JavaScript侧的ResourceManager获取native侧的ResourceManager，用来完成rawfile相关功能。  [void OH_ResourceManager_ReleaseNativeResourceManager(NativeResourceManager *resMgr)](#oh_resourcemanager_releasenativeresourcemanager) 释放native侧ResourceManager。  [RawDir *OH_ResourceManager_OpenRawDir(const NativeResourceManager *mgr, const char *dirName)](#oh_resourcemanager_openrawdir) 打开rawfile目录，打开后可以遍历对应目录下的rawfile文件。  [RawFile *OH_ResourceManager_OpenRawFile(const NativeResourceManager *mgr, const char *fileName)](#oh_resourcemanager_openrawfile) 打开rawfile文件，打开后可以读取它的数据。  [RawFile64 *OH_ResourceManager_OpenRawFile64(const NativeResourceManager *mgr, const char *fileName)](#oh_resourcemanager_openrawfile64) 打开较大的rawfile文件，打开后可以读取它的数据。  [bool OH_ResourceManager_IsRawDir(const NativeResourceManager *mgr, const char *path)](#oh_resourcemanager_israwdir) 判断路径是否是rawfile下的目录。       #### 函数说明

  #### [h2]OH_ResourceManager_InitNativeResourceManager()

NativeResourceManager *OH_ResourceManager_InitNativeResourceManager(napi_env env, napi_value jsResMgr) **描述**

 基于JavaScript侧的ResourceManager获取native侧的ResourceManager，用来完成rawfile相关功能。

 **起始版本：** 8

 **参数：**

  参数项 描述   napi_env env 表示JavaScript Native Interface（napi）环境指针。  napi_value jsResMgr 表示JavaScript resource manager。     **返回：**

  类型 说明   [NativeResourceManager *](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) 返回[NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager)指针，如果失败返回空指针。       #### [h2]OH_ResourceManager_ReleaseNativeResourceManager()

void OH_ResourceManager_ReleaseNativeResourceManager(NativeResourceManager *resMgr) **描述**

 释放native侧ResourceManager。

 **起始版本：** 8

 **参数：**

  参数项 描述   [NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) *resMgr 表示[NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager)指针。       #### [h2]OH_ResourceManager_OpenRawDir()

RawDir *OH_ResourceManager_OpenRawDir(const NativeResourceManager *mgr, const char *dirName) **描述**

 打开rawfile目录，打开后可以遍历对应目录下的rawfile文件。

 **起始版本：** 8

 **参数：**

  参数项 描述   [const NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) *mgr 表示指向[NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager)的指针，此指针是通过调用[OH_ResourceManager_InitNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)方法获取的。  const char *dirName 表示要打开的rawfile目录名称，当传递一个空字符串时表示打开rawfile根目录。     **返回：**

  类型 说明   [RawDir *](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawdir) 返回[RawDir](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawdir)指针。使用完此指针后，调用[OH_ResourceManager_CloseRawDir](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-dir-h#oh_resourcemanager_closerawdir)释放。如果失败或者mgr为空时返回空指针。     **参考：**

 [OH_ResourceManager_InitNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)

 [OH_ResourceManager_CloseRawDir](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-dir-h#oh_resourcemanager_closerawdir)

   #### [h2]OH_ResourceManager_OpenRawFile()

RawFile *OH_ResourceManager_OpenRawFile(const NativeResourceManager *mgr, const char *fileName) **描述**

 打开rawfile文件，打开后可以读取它的数据。

 **起始版本：** 8

 **参数：**

  参数项 描述   [const NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) *mgr 表示指向[NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager)的指针，此指针通过调用[OH_ResourceManager_InitNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)方法获取。  const char *fileName 表示基于rawfile根目录的相对路径下的文件名称。     **返回：**

  类型 说明   [RawFile *](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawfile) 返回[RawFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawfile)指针。当使用完此指针，调用[OH_ResourceManager_CloseRawFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_closerawfile)释放。如果失败或者mgr和fileName为空时返回空指针。     **参考：**

 [OH_ResourceManager_InitNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)

 [OH_ResourceManager_CloseRawFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_closerawfile)

   #### [h2]OH_ResourceManager_OpenRawFile64()

RawFile64 *OH_ResourceManager_OpenRawFile64(const NativeResourceManager *mgr, const char *fileName) **描述**

 打开较大的rawfile文件，打开后可以读取它的数据。

 **起始版本：** 11

 **参数：**

  参数项 描述   [const NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) *mgr 表示指向[NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager)的指针，此指针通过调用[OH_ResourceManager_InitNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)方法获取。  const char *fileName 表示基于rawfile根目录的相对路径下的文件名称。     **返回：**

  类型 说明   [RawFile64 *](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawfile64) 返回[RawFile64](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawfile64)指针。当使用完此指针，调用[OH_ResourceManager_CloseRawFile64](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_closerawfile64)释放。如果失败或者mgr和fileName为空时返回空指针。     **参考：**

 [OH_ResourceManager_InitNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)

 [OH_ResourceManager_CloseRawFile64](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_closerawfile64)

   #### [h2]OH_ResourceManager_IsRawDir()

bool OH_ResourceManager_IsRawDir(const NativeResourceManager *mgr, const char *path) **描述**

 判断路径是否是rawfile下的目录。

 **起始版本：** 12

 **参数：**

  参数项 描述   [const NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) *mgr 表示指向[NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager)的指针，此指针通过调用[OH_ResourceManager_InitNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)方法获取。  const char *path rawfile路径。     **返回：**

  类型 说明   bool 返回true表示是rawfile下的目录，返回false表示不是rawfile下的目录。

---
*Updated: 2026-04-22 06:43:43*
