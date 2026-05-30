# Telephony Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-telephonykit-6101`  |  **DocID**: `97078668c2e240a49dbdb5e9aa40e560`

---

# Telephony Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  新增错误码 |  类名：radio；

 API声明：function getRadioTechSync(slotId: number): NetworkRadioTech;

 差异内容：NA

  |  类名：radio；

 API声明：function getRadioTechSync(slotId: number): NetworkRadioTech;

 差异内容：201,401,8300001,8300002,8300003,8300999

  |  api/@ohos.telephony.radio.d.ts |  
 新增API |  NA |  类名：call；

 API声明：function answerCall(callback: AsyncCallback<void>): void;

 差异内容：function answerCall(callback: AsyncCallback<void>): void;

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：call；

 API声明：function hangUpCall(callback: AsyncCallback<void>): void;

 差异内容：function hangUpCall(callback: AsyncCallback<void>): void;

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：call；

 API声明：function rejectCall(callback: AsyncCallback<void>): void;

 差异内容：function rejectCall(callback: AsyncCallback<void>): void;

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：call；

 API声明：export enum CCallState

 差异内容：export enum CCallState

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_UNKNOWN = -1

 差异内容：CCALL_STATE_UNKNOWN = -1

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_ACTIVE = 0

 差异内容：CCALL_STATE_ACTIVE = 0

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_HOLDING = 1

 差异内容：CCALL_STATE_HOLDING = 1

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_DIALING = 2

 差异内容：CCALL_STATE_DIALING = 2

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_ALERTING = 3

 差异内容：CCALL_STATE_ALERTING = 3

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_INCOMING = 4

 差异内容：CCALL_STATE_INCOMING = 4

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_WAITING = 5

 差异内容：CCALL_STATE_WAITING = 5

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_DISCONNECTED = 6

 差异内容：CCALL_STATE_DISCONNECTED = 6

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_DISCONNECTING = 7

 差异内容：CCALL_STATE_DISCONNECTING = 7

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_IDLE = 8

 差异内容：CCALL_STATE_IDLE = 8

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：CCallState；

 API声明：CCALL_STATE_ANSWERED = 9

 差异内容：CCALL_STATE_ANSWERED = 9

  |  api/@ohos.telephony.call.d.ts |  
 新增API |  NA |  类名：observer；

 API声明：type CCallState = call.CCallState;

 差异内容：type CCallState = call.CCallState;

  |  api/@ohos.telephony.observer.d.ts |  
 新增API |  NA |  类名：observer；

 API声明：function onCCallStateChange(callback: Callback<CCallStateInfo>, options?: ObserverOptions): void;

 差异内容：function onCCallStateChange(callback: Callback<CCallStateInfo>, options?: ObserverOptions): void;

  |  api/@ohos.telephony.observer.d.ts |  
 新增API |  NA |  类名：observer；

 API声明：function offCCallStateChange(callback?: Callback<CCallStateInfo>): void;

 差异内容：function offCCallStateChange(callback?: Callback<CCallStateInfo>): void;

  |  api/@ohos.telephony.observer.d.ts |  
 新增API |  NA |  类名：observer；

 API声明：export interface CCallStateInfo

 差异内容：export interface CCallStateInfo

  |  api/@ohos.telephony.observer.d.ts |  
 新增API |  NA |  类名：CCallStateInfo；

 API声明：state: CCallState;

 差异内容：state: CCallState;

  |  api/@ohos.telephony.observer.d.ts |  
 新增API |  NA |  类名：CCallStateInfo；

 API声明：teleNumber: string;

 差异内容：teleNumber: string;

  |  api/@ohos.telephony.observer.d.ts |  
 新增API |  NA |  类名：observer；

 API声明：function onGetSimActiveState(slotId: number, callback: Callback<boolean>): void;

 差异内容：function onGetSimActiveState(slotId: number, callback: Callback<boolean>): void;

  |  api/@ohos.telephony.observer.d.ts |  
 新增API |  NA |  类名：observer；

 API声明：function offGetSimActiveState(callback?: Callback<boolean>): void;

 差异内容：function offGetSimActiveState(callback?: Callback<boolean>): void;

  |  api/@ohos.telephony.observer.d.ts |  
 新增API |  NA |  类名：vcard；

 API声明：function importVCard(context: Context, filePath: string, accountId: number, callback: AsyncCallback<void>): void;

 差异内容：function importVCard(context: Context, filePath: string, accountId: number, callback: AsyncCallback<void>): void;

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：vcard；

 API声明：function importVCard(context: Context, filePath: string, accountId?: number): Promise<void>;

 差异内容：function importVCard(context: Context, filePath: string, accountId?: number): Promise<void>;

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：vcard；

 API声明：function importVCard(context: Context, filePath: string, callback: AsyncCallback<void>): void;

 差异内容：function importVCard(context: Context, filePath: string, callback: AsyncCallback<void>): void;

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：vcard；

 API声明：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options: VCardBuilderOptions, callback: AsyncCallback<string>): void;

 差异内容：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options: VCardBuilderOptions, callback: AsyncCallback<string>): void;

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：vcard；

 API声明：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options?: VCardBuilderOptions): Promise<string>;

 差异内容：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options?: VCardBuilderOptions): Promise<string>;

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：vcard；

 API声明：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<string>): void;

 差异内容：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<string>): void;

  |  api/@ohos.telephony.vcard.d.ts |