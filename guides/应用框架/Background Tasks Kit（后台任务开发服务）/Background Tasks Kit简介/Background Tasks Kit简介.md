# Background Tasks Kit简介

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `background-task-overview`  |  **DocID**: `36c029f7b690479bbdcb96db80cf3c6b`  |  **NodeID**: `00020177579578888400808305583ee6`

---

# Background Tasks Kit简介

  #### 功能介绍

设备返回主界面、锁屏、应用切换等操作会使应用退至后台。应用退至后台后，如果继续在后台运行，可能会造成设备耗电快、用户界面卡顿等现象。为了降低设备耗电速度、保障用户使用流畅度，系统会对退至后台的应用进行管控，包括[进程](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/process-model-stage)挂起和进程终止。典型场景包括：应用退至后台一段时间应用进程会被挂起、资源不足时系统会终止部分应用进程（即回收该进程的所有资源）。应用进程挂起后，无法使用软件资源（如公共事件、定时器等）和硬件资源（CPU、网络、GPS、蓝牙等）。如何合理使用请参考[后台硬件资源合理使用](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-use-of-background-hardware-resources)。

 为了保障后台音乐播放、日历提醒等功能的正常使用，Background Tasks Kit提供了规范内受约束的后台任务，扩展应用在后台的运行时间。

   #### 约束与限制

资源使用约束：对于运行的进程，系统会给予一定的资源配额约束，包括进程在连续一段时间内内存的使用、[CPU使用占比](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-controlling-background-process-cpu)，以及24小时磁盘写的IO量，均有对应的配额上限。超过配额上限时，如果进程处于前台，系统会有对应的warning日志，如果进程处于后台，系统会终止该进程。

   #### 后台任务类型

Background Tasks Kit提供了规范内受约束的后台任务，包括短时任务、长时任务、延迟任务、代理提醒。

 开发者可以根据如下的功能介绍，选择合适的后台任务，以满足应用退至后台后继续运行的需求。

 
**短时任务**：适用于实时性要求高、耗时不长的任务，例如状态保存。

  **长时任务**：适用于长时间运行在后台、用户可感知的任务，例如后台播放音乐、导航、设备连接等，使用长时任务避免应用进程被挂起。

  **延迟任务**：对于实时性要求不高、可延迟执行的任务，系统提供了延迟任务，即满足条件的应用退至后台后被放入执行队列，系统会根据内存、功耗等统一调度。

  **代理提醒**：代理提醒是指应用退后台或进程终止后，系统会代理应用做相应的提醒。适用于定时提醒类业务，当前支持的提醒类型包括倒计时、日历和闹钟三类。

  **图1** 后台任务类型选择

  
   

 

   
系统仅支持规范内受约束的后台任务。应用退至后台后，若未使用规范内的后台任务或选择的后台任务类型不正确，对应的应用进程会被挂起或终止。

  应用申请了规范内的后台任务，仅会提升应用进程被回收的优先级。当系统资源严重不足时，即使应用进程申请了规范内的后台任务，系统仍会终止部分进程，以保障系统稳定性。

  
     #### 模拟器支持情况

本Kit支持模拟器，但与真机存在部分能力差异，具体差异如下。

 
- 通用差异：请参见[模拟器与真机的差异](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-specification#section1227613205203)。
- 从API version 20开始，[代理提醒](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agent-powered-reminder)支持模拟器开发。

---
*Updated: 2026-04-20 01:47:12*
