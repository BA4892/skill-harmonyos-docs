# Live View Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-liveviewkit-6101`  |  **DocID**: `2425c41b3f5149c2878d9b0b0ff33302`

---

# Live View Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  新增API |  NA |  类名：liveViewManager；

 API声明：function startLiveViewByTrigger(liveView: LiveView, trigger: Trigger): Promise<LiveViewResult>;

 差异内容：function startLiveViewByTrigger(liveView: LiveView, trigger: Trigger): Promise<LiveViewResult>;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：liveViewManager；

 API声明：function stopLiveViewByTrigger(liveView: LiveView, trigger: Trigger): Promise<LiveViewResult>;

 差异内容：function stopLiveViewByTrigger(liveView: LiveView, trigger: Trigger): Promise<LiveViewResult>;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：liveViewManager；

 API声明：function isGeofenceTriggerEnabled(): Promise<boolean>;

 差异内容：function isGeofenceTriggerEnabled(): Promise<boolean>;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：liveViewManager；

 API声明：export interface Trigger

 差异内容：export interface Trigger

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：Trigger；

 API声明：type: TriggerType;

 差异内容：type: TriggerType;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：Trigger；

 API声明：condition: Geofence;

 差异内容：condition: Geofence;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：Trigger；

 API声明：displayTime?: number;

 差异内容：displayTime?: number;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：liveViewManager；

 API声明：export interface Geofence

 差异内容：export interface Geofence

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：Geofence；

 API声明：coordinateSystemType: CoordinateSystemType;

 差异内容：coordinateSystemType: CoordinateSystemType;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：Geofence；

 API声明：longitude: number;

 差异内容：longitude: number;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：Geofence；

 API声明：latitude: number;

 差异内容：latitude: number;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：Geofence；

 API声明：radius: number;

 差异内容：radius: number;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：Geofence；

 API声明：monitorEvent: MonitorEvent;

 差异内容：monitorEvent: MonitorEvent;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：Geofence；

 API声明：delayTime?: number;

 差异内容：delayTime?: number;

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：liveViewManager；

 API声明：export enum TriggerType

 差异内容：export enum TriggerType

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：TriggerType；

 API声明：TRIGGER_TYPE_GEOFENCE = 1

 差异内容：TRIGGER_TYPE_GEOFENCE = 1

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：liveViewManager；

 API声明：export enum CoordinateSystemType

 差异内容：export enum CoordinateSystemType

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：CoordinateSystemType；

 API声明：COORDINATE_TYPE_WGS84 = 1

 差异内容：COORDINATE_TYPE_WGS84 = 1

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：CoordinateSystemType；

 API声明：COORDINATE_TYPE_GCJ02 = 2

 差异内容：COORDINATE_TYPE_GCJ02 = 2

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：liveViewManager；

 API声明：export enum MonitorEvent

 差异内容：export enum MonitorEvent

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：MonitorEvent；

 API声明：MONITOR_TYPE_ENTRY = 1

 差异内容：MONITOR_TYPE_ENTRY = 1

  |  api/@hms.core.liveview.liveViewManager.d.ts |  
 新增API |  NA |  类名：MonitorEvent；

 API声明：MONITOR_TYPE_LEAVE = 2

 差异内容：MONITOR_TYPE_LEAVE = 2

  |  api/@hms.core.liveview.liveViewManager.d.ts |