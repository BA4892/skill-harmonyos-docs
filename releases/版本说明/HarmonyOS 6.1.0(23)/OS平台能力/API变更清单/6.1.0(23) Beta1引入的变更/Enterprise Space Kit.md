# Enterprise Space Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-enterprisespacekit-6101`  |  **DocID**: `6962de6676e84fe082ea72b9279b7a42`

---

# Enterprise Space Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  删除错误码 |  类名：spaceManager；

 API声明：function queryWorkspace(queryFlag: QueryType): Promise<WorkspaceInfo[]>;

 差异内容：1020400007

  |  类名：spaceManager；

 API声明：function queryWorkspace(queryFlag: QueryType): Promise<WorkspaceInfo[]>;

 差异内容：NA

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：spaceManager；

 API声明：enum SpaceGuidePolicy

 差异内容：enum SpaceGuidePolicy

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：SpaceGuidePolicy；

 API声明：SHOW = 0

 差异内容：SHOW = 0

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：SpaceGuidePolicy；

 API声明：HIDE = 1

 差异内容：HIDE = 1

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：spaceManager；

 API声明：interface StatusBarIcon

 差异内容：interface StatusBarIcon

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：StatusBarIcon；

 API声明：white: image.PixelMap;

 差异内容：white: image.PixelMap;

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：StatusBarIcon；

 API声明：black: image.PixelMap;

 差异内容：black: image.PixelMap;

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：spaceManager；

 API声明：interface AuthResult

 差异内容：interface AuthResult

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：AuthResult；

 API声明：result: number;

 差异内容：result: number;

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：AuthResult；

 API声明：workspaceId: number;

 差异内容：workspaceId: number;

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：spaceManager；

 API声明：function setWorkspaceStatusBarIcon(icon: StatusBarIcon, workspaceId?: number): Promise<void>;

 差异内容：function setWorkspaceStatusBarIcon(icon: StatusBarIcon, workspaceId?: number): Promise<void>;

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：spaceManager；

 API声明：function authenticate(enterpriseAuthInfo: WorkspaceDomainInfo, credential: Uint8Array): Promise<AuthResult>;

 差异内容：function authenticate(enterpriseAuthInfo: WorkspaceDomainInfo, credential: Uint8Array): Promise<AuthResult>;

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：spaceManager；

 API声明：function getAccessToken(businessParams: Record<string, string>): Promise<Uint8Array>;

 差异内容：function getAccessToken(businessParams: Record<string, string>): Promise<Uint8Array>;

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |  
 新增API |  NA |  类名：spaceManager；

 API声明：function setWorkspaceLocalName(localName: string, workspaceId?: number): Promise<void>;

 差异内容：function setWorkspaceLocalName(localName: string, workspaceId?: number): Promise<void>;

  |  api/@hms.enterpriseSpaceService.spaceManager.d.ts |