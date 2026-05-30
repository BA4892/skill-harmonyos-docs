# Desktop Extension Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-desktopextensionkit-6101`  |  **DocID**: `19c2237878244045aad0aac10eab800f`

---

# Desktop Extension Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  新增API |  NA |  类名：quickBarManager；

 API声明：interface QuickBarGroup

 差异内容：interface QuickBarGroup

  |  api/@hms.pcService.quickBarManager.d.ets |  
 新增API |  NA |  类名：QuickBarGroup；

 API声明：groupKey: string;

 差异内容：groupKey: string;

  |  api/@hms.pcService.quickBarManager.d.ets |  
 新增API |  NA |  类名：QuickBarGroup；

 API声明：groupIcon: image.PixelMap;

 差异内容：groupIcon: image.PixelMap;

  |  api/@hms.pcService.quickBarManager.d.ets |  
 新增API |  NA |  类名：quickBarManager；

 API声明：function addQuickBarGroup(context: common.Context, group: QuickBarGroup): Promise<void>;

 差异内容：function addQuickBarGroup(context: common.Context, group: QuickBarGroup): Promise<void>;

  |  api/@hms.pcService.quickBarManager.d.ets |  
 新增API |  NA |  类名：quickBarManager；

 API声明：function deleteQuickBarGroup(context: common.Context, groupKey: string): Promise<void>;

 差异内容：function deleteQuickBarGroup(context: common.Context, groupKey: string): Promise<void>;

  |  api/@hms.pcService.quickBarManager.d.ets |  
 新增API |  NA |  类名：quickBarManager；

 API声明：function getQuickBarGroups(context: common.Context): Promise<QuickBarGroup[]>;

 差异内容：function getQuickBarGroups(context: common.Context): Promise<QuickBarGroup[]>;

  |  api/@hms.pcService.quickBarManager.d.ets |  
 新增API |  NA |  类名：quickBarManager；

 API声明：function setWindowToGroup(context: common.Context, windowid: string, groupKey?: string): Promise<void>;

 差异内容：function setWindowToGroup(context: common.Context, windowid: string, groupKey?: string): Promise<void>;

  |  api/@hms.pcService.quickBarManager.d.ets |