# Telephony Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-telephonykit-6102`  |  **DocID**: `0a47591f6c654cc6bab31fd09ec627cb`

---

# Telephony Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  新增API |  NA |  类名：vcard；

 API声明：export enum VCardType

 差异内容：export enum VCardType

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：VCardType；

 API声明：VERSION_21 = 0

 差异内容：VERSION_21 = 0

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：VCardType；

 API声明：VERSION_30 = 1

 差异内容：VERSION_30 = 1

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：VCardType；

 API声明：VERSION_40 = 2

 差异内容：VERSION_40 = 2

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：vcard；

 API声明：export interface VCardBuilderOptions

 差异内容：export interface VCardBuilderOptions

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：VCardBuilderOptions；

 API声明：cardType?: VCardType;

 差异内容：cardType?: VCardType;

  |  api/@ohos.telephony.vcard.d.ts |  
 新增API |  NA |  类名：VCardBuilderOptions；

 API声明：charset?: string;

 差异内容：charset?: string;

  |  api/@ohos.telephony.vcard.d.ts |  
 起始版本有变化 |  类名：vcard；

 API声明：function importVCard(context: Context, filePath: string, accountId: number, callback: AsyncCallback<void>): void;

 差异内容：11

  |  类名：vcard；

 API声明：function importVCard(context: Context, filePath: string, accountId: number, callback: AsyncCallback<void>): void;

 差异内容：23

  |  api/@ohos.telephony.vcard.d.ts |  
 起始版本有变化 |  类名：vcard；

 API声明：function importVCard(context: Context, filePath: string, accountId?: number): Promise<void>;

 差异内容：11

  |  类名：vcard；

 API声明：function importVCard(context: Context, filePath: string, accountId?: number): Promise<void>;

 差异内容：23

  |  api/@ohos.telephony.vcard.d.ts |  
 起始版本有变化 |  类名：vcard；

 API声明：function importVCard(context: Context, filePath: string, callback: AsyncCallback<void>): void;

 差异内容：11

  |  类名：vcard；

 API声明：function importVCard(context: Context, filePath: string, callback: AsyncCallback<void>): void;

 差异内容：23

  |  api/@ohos.telephony.vcard.d.ts |  
 起始版本有变化 |  类名：vcard；

 API声明：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options: VCardBuilderOptions, callback: AsyncCallback<string>): void;

 差异内容：11

  |  类名：vcard；

 API声明：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options: VCardBuilderOptions, callback: AsyncCallback<string>): void;

 差异内容：23

  |  api/@ohos.telephony.vcard.d.ts |  
 起始版本有变化 |  类名：vcard；

 API声明：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options?: VCardBuilderOptions): Promise<string>;

 差异内容：11

  |  类名：vcard；

 API声明：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options?: VCardBuilderOptions): Promise<string>;

 差异内容：23

  |  api/@ohos.telephony.vcard.d.ts |  
 起始版本有变化 |  类名：vcard；

 API声明：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<string>): void;

 差异内容：11

  |  类名：vcard；

 API声明：function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<string>): void;

 差异内容：23

  |  api/@ohos.telephony.vcard.d.ts |