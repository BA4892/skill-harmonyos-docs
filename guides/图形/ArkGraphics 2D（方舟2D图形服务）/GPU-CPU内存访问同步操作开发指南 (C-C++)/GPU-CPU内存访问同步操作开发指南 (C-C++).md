# GPU/CPU内存访问同步操作开发指南 (C/C++)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `native-fence-guidelines`  |  **DocID**: `b4502ad38e1248158767434ca905c86e`  |  **NodeID**: `000201775795491975927d34681b9f07`

---

# GPU/CPU内存访问同步操作开发指南 (C/C++)

                 #### 场景介绍

     NativeFence是管理fenceFd同步状态的模块。开发者可通过其接口实现以下功能：设置阻塞时间、永久阻塞、关闭fenceFd以及检查其有效性。

                  #### 接口说明

           
                        | 接口名          | 描述         
                               | OH_NativeFence_IsValid (int fenceFd)          | 检查fenceFd是否有效。         
                 | OH_NativeFence_Wait (int fenceFd, uint32_t timeout)          | 阻塞传入的fenceFd，超时参数指定了允许等待的最长时间。         
                 | OH_NativeFence_WaitForever (int fenceFd)          | 永久阻塞传入的fenceFd。         
                 | OH_NativeFence_Close (int fenceFd)          | 关闭fenceFd。         
             

          详细的接口说明请参考[NativeFence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativefence)。

                  #### 开发步骤

     以下步骤描述了如何使用NativeFence提供的Native API接口。

     **添加动态链接库**

     CMakeLists.txt中添加以下库文件。

     libnative_fence.so     **头文件**

     ```
#include <native_fence/native_fence.h>
#include <cstring>
#include <iostream>
#include <linux/sync_file.h>
#include <signal.h>
#include <sys/signalfd.h>
#include <unistd.h>
```
     
             **使用signalfd()接口创建fenceFd**。

       ```
sigset_t mask;
sigemptyset(&mask);
sigaddset(&mask, SIGINT); // Monitor SIGINT signal (Ctrl C)
sigaddset(&mask, SIGURG); // Generated when urgent data or out of band data arrives at the socket
sigprocmask(SIG_BLOCK, &mask, NULL);
int sfd = signalfd(-1, &mask, 0);
```
             **判断传入的fenceFd是否合法**。

       ```
bool isValid = OH_NativeFence_IsValid(INVALID_FD);
if (!isValid) {
    DRAWING_LOGW("fenceFd is invalid");
}
```
             **调用OH_NativeFence_Wait阻塞接口，等待fence完成后进行下一步操作**。

       ```
constexpr uint32_t TIMEOUT_MS = 5000;
// ...
bool result = OH_NativeFence_Wait(INVALID_FD, TIMEOUT_MS);
```
             **调用OH_NativeFence_WaitForever阻塞接口，等待fence完成后进行下一步操作**。

       ```
bool result2 = false;
auto startTime = std::chrono::steady_clock::now();
result2 = OH_NativeFence_WaitForever(sfd);
auto endTime = std::chrono::steady_clock::now();
auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(endTime - startTime).count();
if (result2) {
    DRAWING_LOGI("SyncFenceWaitForever has an event occurring result2 %{public}d, cost_time: %{public}d",
        result2, duration);
} else {
    DRAWING_LOGI("SyncFenceWaitForever timeout with no event occurrence"
        "result2 %{public}d, cost_time: %{public}d", result2, duration);
}
```
             **GPU或CPU发送同步信号(signal)，通知fenceFd解除阻塞**。

             **关闭fenceFd**。

       ```
OH_NativeFence_Close(sfd);
```

---
*Updated: 2026-04-20 01:44:42*
