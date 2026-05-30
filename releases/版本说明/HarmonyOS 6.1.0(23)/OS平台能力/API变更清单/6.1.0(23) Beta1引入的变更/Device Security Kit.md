# Device Security Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-devicesecuritykit-6101`  |  **DocID**: `cb9525a1ac504a40ba36849bb8bf73d1`

---

# Device Security Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  新增错误码 |  类名：trustedAppService；

 API声明：function createAttestKey(options: AttestOptions): Promise<void>;

 差异内容：NA

  |  类名：trustedAppService；

 API声明：function createAttestKey(options: AttestOptions): Promise<void>;

 差异内容：201

  |  api/@hms.security.trustedAppService.d.ts |  
 新增错误码 |  类名：trustedAppService；

 API声明：function destroyAttestKey(): Promise<void>;

 差异内容：NA

  |  类名：trustedAppService；

 API声明：function destroyAttestKey(): Promise<void>;

 差异内容：201

  |  api/@hms.security.trustedAppService.d.ts |  
 新增错误码 |  类名：trustedAppService；

 API声明：function initializeAttestContext(userData: string, options: AttestOptions): Promise<AttestReturnResult>;

 差异内容：NA

  |  类名：trustedAppService；

 API声明：function initializeAttestContext(userData: string, options: AttestOptions): Promise<AttestReturnResult>;

 差异内容：201

  |  api/@hms.security.trustedAppService.d.ts |  
 新增错误码 |  类名：trustedAppService；

 API声明：function finalizeAttestContext(options: AttestOptions): Promise<void>;

 差异内容：NA

  |  类名：trustedAppService；

 API声明：function finalizeAttestContext(options: AttestOptions): Promise<void>;

 差异内容：201

  |  api/@hms.security.trustedAppService.d.ts |  
 新增错误码 |  类名：trustedAppService；

 API声明：function procSecImageTransform(srcSecImage: ArrayBuffer, procParams: SecImageProcParamsArray): Promise<SecImageBuffer>;

 差异内容：NA

  |  类名：trustedAppService；

 API声明：function procSecImageTransform(srcSecImage: ArrayBuffer, procParams: SecImageProcParamsArray): Promise<SecImageBuffer>;

 差异内容：1011500011,201

  |  api/@hms.security.trustedAppService.d.ts |  
 删除错误码 |  类名：securityAudit；

 API声明：function on(type: 'auditEventOccur', auditEventInfo: AuditEventInfo, callback: Callback<AuditEvent>): void;

 差异内容：401

  |  类名：securityAudit；

 API声明：function on(type: 'auditEventOccur', auditEventInfo: AuditEventInfo, callback: Callback<AuditEvent>): void;

 差异内容：NA

  |  api/@hms.security.securityAudit.d.ts |  
 删除错误码 |  类名：securityAudit；

 API声明：function off(type: 'auditEventOccur', auditEventInfo: AuditEventInfo, callback?: Callback<AuditEvent>): void;

 差异内容：401

  |  类名：securityAudit；

 API声明：function off(type: 'auditEventOccur', auditEventInfo: AuditEventInfo, callback?: Callback<AuditEvent>): void;

 差异内容：NA

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：NotifyEvent；

 API声明：SMB_FILE_SEND = 0x0F000001

 差异内容：SMB_FILE_SEND = 0x0F000001

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：NotifyEvent；

 API声明：KIA_PRE_OPEN = 0x1C000014

 差异内容：KIA_PRE_OPEN = 0x1C000014

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：NotifyEvent；

 API声明：HDC_DEBUG = 0x27000100

 差异内容：HDC_DEBUG = 0x27000100

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：NotifyEvent；

 API声明：HDC_DEBUG_INTERCEPTED = 0x27000101

 差异内容：HDC_DEBUG_INTERCEPTED = 0x27000101

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：NotifyEvent；

 API声明：USER_SPACE_DATA_TRANSFER = 0x2F000000

 差异内容：USER_SPACE_DATA_TRANSFER = 0x2F000000

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：NotifyEvent；

 API声明：USER_SPACE_DATA_TRANSFER_POLICY = 0x2F000001

 差异内容：USER_SPACE_DATA_TRANSFER_POLICY = 0x2F000001

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：NotifyEvent；

 API声明：SERIAL_PORT_ACCESS = 0x30000100

 差异内容：SERIAL_PORT_ACCESS = 0x30000100

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：NotifyEvent；

 API声明：NETWORK_INTERCEPTED = 0x03000002

 差异内容：NETWORK_INTERCEPTED = 0x03000002

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：NotifyEvent；

 API声明：WIFI_INTERCEPTED = 0x03000100

 差异内容：WIFI_INTERCEPTED = 0x03000100

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：NotifyEvent；

 API声明：PRINT_INTERCEPTED = 0x2E000001

 差异内容：PRINT_INTERCEPTED = 0x2E000001

  |  api/@hms.security.securityAudit.d.ts |  
 新增API |  NA |  类名：dlpAntiPeep；

 API声明：enum AntiPeepOptionsResult

 差异内容：enum AntiPeepOptionsResult

  |  api/@hms.security.dlpAntiPeep.d.ts |  
 新增API |  NA |  类名：AntiPeepOptionsResult；

 API声明：SUCCESS = 0

 差异内容：SUCCESS = 0

  |  api/@hms.security.dlpAntiPeep.d.ts |  
 新增API |  NA |  类名：AntiPeepOptionsResult；

 API声明：FAIL = 1

 差异内容：FAIL = 1

  |  api/@hms.security.dlpAntiPeep.d.ts |  
 新增API |  NA |  类名：AntiPeepOptionsResult；

 API声明：ALREADY_ON = 2

 差异内容：ALREADY_ON = 2

  |  api/@hms.security.dlpAntiPeep.d.ts |  
 新增API |  NA |  类名：dlpAntiPeep；

 API声明：function requestAntiPeepOptions(context: Context): Promise<AntiPeepOptionsResult>;

 差异内容：function requestAntiPeepOptions(context: Context): Promise<AntiPeepOptionsResult>;

  |  api/@hms.security.dlpAntiPeep.d.ts |  
 新增API |  NA |  类名：dlpAntiPeep；

 API声明：function publishAntiPeepInformation(): Promise<void>;

 差异内容：function publishAntiPeepInformation(): Promise<void>;

  |  api/@hms.security.dlpAntiPeep.d.ts |