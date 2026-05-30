# ServiceAbility的生命周期

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `serviceability-lifecycle`  |  **DocID**: `cb223134c6924217b5d6b34182845775`  |  **NodeID**: `0002017757957888847487f773becfd9`

---

# ServiceAbility的生命周期

 开发者可以根据业务场景实现service.js/service.ets中的生命周期相关接口。ServiceAbility生命周期接口说明见下表。

  **表1** ServiceAbility生命周期接口说明

  
| 接口名  | 描述  
  | onStart(): void  | 该方法在创建ServiceAbility的时候调用，用于Service的初始化，在ServiceAbility的整个生命周期只会调用一次。  
 | onCommand(want: Want, startId: number): void  | 在Service创建完成之后调用，该方法在客户端每次启动该Service时都会调用，开发者可以在该方法中做一些调用统计、初始化类的操作。  
 | onConnect(want: Want): rpc.RemoteObject  | 在连接ServiceAbility时调用。  
 | onDisconnect(want: Want): void  | 在与已连接的ServiceAbility断开连接时调用。  
 | onStop(): void  | 在ServiceAbility销毁时调用。开发者应通过实现此方法来清理资源，如关闭线程、注册的侦听器等。

---
*Updated: 2026-04-20 01:49:17*
