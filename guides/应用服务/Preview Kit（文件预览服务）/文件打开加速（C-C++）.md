# 文件打开加速（C/C++）

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `preview-openfileboost`  |  **DocID**: `f240bd0deda7413c9a7a8c0102443caf`  |  **NodeID**: `00020177579564908568216eace57ad6`

---

# 文件打开加速（C/C++）

       从5.0.3(15)版本开始，新增文件打开加速功能。提供注册和取消注册接口，应用可以注册一系列回调，文件打开加速服务通过调用回调接口向应用推荐文件进行预加载动作。

              #### 接口说明

     具体API说明详见[文件打开加速接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/openfileboost_preview)。

     **表1** 文件预加载接口介绍（C API）

           
                        | 接口名          | 描述         
                                         OpenFileBoost_ErrCode HMS_OpenFileBoost_RegisterFilePreload(

          HMS_OpenFileBoost_QueryAppState queryAppState,

          HMS_OpenFileBoost_OnFilePreload filePreload,

          HMS_OpenFileBoost_OnFilePreload cancelFilePreload);

         | 向系统注册文件预加载回调，后续系统预测用户可能打开的文件，在通知预加载之前先调用queryAppState向应用查询当前是否允许推荐预加载文件，如果应用返回允许推荐，通过调用filePreload向应用推荐一个文件供应用进行文件预加载。在某些场景下,比如当前系统可用内存不足,或者有其他文件更有可能被用户打开,则系统会通过调用cancelFilePreload取消某些文件的预加载。         
                 | typedef OpenFileBoost_AppState (*HMS_OpenFileBoost_QueryAppState)(void);          | 系统查询APP状态的回调函数定义。         
                 | typedef OpenFileBoost_CbErrCode (*HMS_OpenFileBoost_OnFilePreload)(void* fileInfo);          | 系统向应用推荐或取消推荐预加载文件的回调函数定义。         
                           OpenFileBoost_ErrCode HMS_OpenFileBoost_GetFdFromPreloadFileInfo(

          void* fileInfo, int32_t* fd);

         | 在向应用推荐文件进行预加载或取消预加载的回调上下文中，应用通过调用该接口获取文件描述符信息。         
                           OpenFileBoost_ErrCode HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo(

          void* fileInfo, char* sandboxPath, int32_t pathLen);

         | 在向应用推荐文件进行预加载或取消预加载的回调上下文中，应用通过调用该接口获取文件沙箱路径信息。         
                 | OpenFileBoost_ErrCode HMS_OpenFileBoost_UnregisterFilePreload(void);          | 取消注册预加载回调。         
                           OpenFileBoost_ErrCode HMS_OpenFileBoost_NotifyPreloadHit(

          int32_t fd, char* sandboxPath, int32_t pathLen);

         | 当用户打开预加载文件时, 应用调用该接口通知系统预加载命中, 这将有助于提高预加载文件预测的准确性。         
             

                       #### 开发准备

     需要先通过[Syscap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap#判断-api-是否可以使用)查询您的目标设备是否支持SystemCapability.PCService.OpenFileBoost系统能力，当前仅在2in1设备上支持该能力。

                  #### 开发步骤

     
             申请文件打开加速服务的对应权限，在module.json5文件中添加文件预加载权限。注意ohos.permission.PRELOAD_FILE为受限权限，具体可参考[申请使用受限权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions-in-acl) 。

       ```
"requestPermissions":[
  {
    "name": "ohos.permission.PRELOAD_FILE"
  }
]
```
             添加对应的头文件。

       #include "PreviewKit/open_file_boost.h"             编写CMakeLists.txt，新增对文件打开加速功能的依赖。

       ```
target_link_libraries(entry PUBLIC
    libopen_file_boost.so
)
```
             注册文件预加载回调，注册后系统在条件符合时调用回调向应用推荐文件。

       ```
OpenFileBoost_ErrCode ret = HMS_OpenFileBoost_RegisterFilePreload(AppQueryAppStateCb,
    AppOnFilePreload, AppCancelFilePreload);
if (ret != OPEN_FILE_BOOST_SUCCESS){
    // 注册失败，用户可自定义错误处理
}
```
             应用应该在当前回调上下文中同步解析预加载文件, 或同步阻塞等待解析完毕后再返回，以便系统可以评估本次预加载文件的资源消耗。

       ```
// 查询应用当前状态的回调函数，系统在向应用推荐文件前会先调用状态查询回调函数向应用查询当前是否适合推荐
OpenFileBoost_AppState AppQueryAppStateCb(void)
{
    // 如果当前状态允许进行文件预加载则返回OPEN_FILE_BOOST_APP_STATE_ALLOW_PRELOAD，这里的CanPreload函数为代码示例，表示应用根据实际业务判断是否允许预加载
    if (CanPreload()) {
        return OPEN_FILE_BOOST_APP_STATE_ALLOW_PRELOAD;
    } else {
        return OPEN_FILE_BOOST_APP_STATE_REJECT_PRELOAD;
    }
}

// 文件预加载回调
OpenFileBoost_CbErrCode AppOnFilePreload(void* fileInfo)
{
    int32_t fileDescriptor = 0;
    // 指针fileInfo仅在当前回调上下文有效，在回调中调用HMS_OpenFileBoost_GetFdFromPreloadFileInfo获取文件描述符
    OpenFileBoost_ErrCode ret = HMS_OpenFileBoost_GetFdFromPreloadFileInfo(fileInfo, &fileDescriptor);
    if (ret != OPEN_FILE_BOOST_SUCCESS) {
        return OPEN_FILE_BOOST_CALLBACK_FAILURE;
    }
    char sandboxPath[MAX_BUFFER_LENGTH] = {0};
    // 指针fileInfo仅在当前回调上下文有效，在回调中调用HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo获取文件路径
    ret = HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo(fileInfo, sandboxPath, MAX_BUFFER_LENGTH);
    if (ret != OPEN_FILE_BOOST_SUCCESS) {
        return OPEN_FILE_BOOST_CALLBACK_FAILURE;
    }
    // 用户可保存文件描述符和文件路径，方便后续通知取消预加载时对文件取消预加载
    // 用户自定义具体的文件预加载逻辑
    return OPEN_FILE_BOOST_CALLBACK_SUCCESS;
}

// 取消预加载回调
OpenFileBoost_CbErrCode AppCancelFilePreload(void* fileInfo)
{
    // 同样的方法获取文件描述符和沙箱路径
    int32_t fileDescriptor = 0;
    OpenFileBoost_ErrCode ret = HMS_OpenFileBoost_GetFdFromPreloadFileInfo(fileInfo, &fileDescriptor);
    if (ret != OPEN_FILE_BOOST_SUCCESS) {
        return OPEN_FILE_BOOST_CALLBACK_FAILURE;
    }
    char sandboxPath[MAX_BUFFER_LENGTH] = {0};
    ret = HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo(fileInfo, sandboxPath, MAX_BUFFER_LENGTH);
    if (ret != OPEN_FILE_BOOST_SUCCESS) {
        return OPEN_FILE_BOOST_CALLBACK_FAILURE;
    }
    // 用户自定义具体的取消文件预加载逻辑
    return OPEN_FILE_BOOST_CALLBACK_SUCCESS;
}
```
             如果用户打开了已经预加载的文件，应用需要调用HMS_OpenFileBoost_NotifyPreloadHit通知系统，系统会更改文件的预加载状态。

       ```
// 传入用户打开的已经预加载的文件描述符、文件路径和长度
OpenFileBoost_ErrCode ret = HMS_OpenFileBoost_NotifyPreloadHit(fileDescriptor, sandboxPath, pathLen);
if (ret != OPEN_FILE_BOOST_SUCCESS){
    // 通知失败，用户可自定义错误处理
}
```
             应用不想再收到回调，或者在退出流程中时，调用取消预加载接口。

       ```
OpenFileBoost_ErrCode ret = HMS_OpenFileBoost_UnregisterFilePreload();
if (ret != OPEN_FILE_BOOST_SUCCESS){
    // 取消注册失败，用户可自定义错误处理
}
```

---
*Updated: 2026-04-20 01:50:31*
