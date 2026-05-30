# MDM Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-mdmkit-6102`  |  **DocID**: `2c2f43b3e9a941309159a8a605412397`

---

# MDM Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  权限变更 |  类名：restrictions；

 API声明：function setDisallowedPolicy(admin: Want, feature: string, disallow: boolean): void;

 差异内容：ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS

  |  类名：restrictions；

 API声明：function setDisallowedPolicy(admin: Want, feature: string, disallow: boolean): void;

 差异内容：ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or ohos.permission.ENTERPRISE_MANAGE_NETWORK

  |  api/@ohos.enterprise.restrictions.d.ts |  
 权限变更 |  类名：restrictions；

 API声明：function getDisallowedPolicy(admin: Want | null, feature: string): boolean;

 差异内容：ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS

  |  类名：restrictions；

 API声明：function getDisallowedPolicy(admin: Want | null, feature: string): boolean;

 差异内容：ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or ohos.permission.ENTERPRISE_MANAGE_NETWORK

  |  api/@ohos.enterprise.restrictions.d.ts |  
 删除API |  类名：securityManager；

 API声明：function installEnterpriseReSignatureCertificate(admin: Want, certificateAlias: string, fd: number, accountId: number): void;

 差异内容：function installEnterpriseReSignatureCertificate(admin: Want, certificateAlias: string, fd: number, accountId: number): void;

  |  NA |  api/@ohos.enterprise.securityManager.d.ts |  
 删除API |  类名：securityManager；

 API声明：function uninstallEnterpriseReSignatureCertificate(admin: Want, certificateAlias: string, accountId: number): void;

 差异内容：function uninstallEnterpriseReSignatureCertificate(admin: Want, certificateAlias: string, accountId: number): void;

  |  NA |  api/@ohos.enterprise.securityManager.d.ts |