# AllocEventID

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-alloceventid`  |  **DocID**: `bb64a65fd52145428e156864f46a5aac`  |  **NodeID**: `00020177579544980115014b4e37b38b`

---

# AllocEventID

  #### 功能说明

用于申请HardEvent（硬件类型同步事件）的TEventID，必须与[ReleaseEventID](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-releaseeventid)搭配使用，调用该接口后，会占用申请的TEventID，直至调用ReleaseEventID释放。

   #### 函数原型

```
template <HardEvent evt> 
__aicore__ inline TEventID TPipe::AllocEventID()
```
   #### 参数说明

 
| 参数名称  | 输入/输出  | 含义  
  | evt  | 输入  | HardEvent硬件同步类型。  
  

    #### 支持的型号

Kirin9020系列处理器

 KirinX90系列处理器

   #### 注意事项

TEventID有数量限制，使用结束应该立刻调用ReleaseEventID释放，防止TEventID耗尽。

   #### 返回值

TEventID

   #### 调用示例

```
// 需要插入scalar与vector之间的同步，申请对应的HardEvent的ID
AscendC::TEventID eventID = GetTPipePtr()->AllocEventID<AscendC::HardEvent::V_S>();
AscendC::SetFlag<AscendC::HardEvent::V_S>(eventID);
// ...
AscendC::WaitFlag<AscendC::HardEvent::V_S>(eventID);
// 释放scalar等vector的同步HardEvent的ID
GetTPipePtr()->ReleaseEventID<AscendC::HardEvent::V_S>(eventID);
// ...
```

---
*Updated: 2026-04-20 01:44:12*
