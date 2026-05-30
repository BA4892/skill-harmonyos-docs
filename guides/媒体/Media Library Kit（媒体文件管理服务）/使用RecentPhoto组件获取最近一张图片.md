# 使用RecentPhoto组件获取最近一张图片

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `component-guidelines-recentphoto`  |  **DocID**: `576dc6098df5455da6af544340c0e107`  |  **NodeID**: `00020177579552692862314907055812`

---

# 使用RecentPhoto组件获取最近一张图片

 应用可以在布局中嵌入最近图片组件，通过此组件，应用无需申请权限，即可指定配置访问公共目录中最近的一个图片或视频文件。授予的权限仅包含只读权限。

 界面效果如图所示。

 

  #### 开发步骤

导入最近图片组件模块文件。

  ```
import { BaseItemInfo } from '@ohos.file.PhotoPickerComponent';
import {
  PhotoSource,
  RecentPhotoComponent,
  RecentPhotoOptions,
  photoAccessHelper
} from '@kit.MediaLibraryKit';
```
  创建最近图片组件选择选项实例（RecentPhotoOptions）。

  通过RecentPhotoOptions，开发者可配置显示多长时间段内的图片、文件类型、文件内容来源，详见[RecentPhotoOptions API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-recentphotocomponent#recentphotooptions)。

  ```
// 最近图片组件初始化。
recentPhotoOptions: RecentPhotoOptions = new RecentPhotoOptions();
```
  初始化最近图片组件选择选项实例（RecentPhotoOptions）。

  ```
// 设置数据类型，IMAGE_VIDEO_TYPE：图片和视频（默认值）、IMAGE_TYPE：图片、VIDEO_TYPE：视频、MOVING_PHOTO_IMAGE_TYPE：动态图片。
this.recentPhotoOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;

// 设置最近图片的时间范围，单位（秒），0表示所有时间。
this.recentPhotoOptions.period = 0;

// 设置资源的来源，ALL：所有、CAMERA：相机、SCREENSHOT：截图。
this.recentPhotoOptions.photoSource = PhotoSource.ALL;
```
  创建[RecentPhotoComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-recentphotocomponent#recentphotocomponent)组件。

  ```
RecentPhotoComponent({
  // 设置最近图片组件选择选项实例。
  recentPhotoOptions: this.recentPhotoOptions,
    
   /**
   * 最近图片点击事件。
   * BaseItemInfo（uri, mimeType, width, height, size, duration）
   * return 返回值为true时才会给url授权，才可以显示。
   */
  onRecentPhotoClick: (recentPhotoInfo: BaseItemInfo): boolean => this.onRecentPhotoClick(recentPhotoInfo),

  // 检查是否存在最近的资源。
  onRecentPhotoCheckResult: (recentPhotoExists: boolean) => this.onReceiveCheckResult(recentPhotoExists),
})
```
  实现相关回调。

  实现onReceiveCheckResult回调，可查询是否存在最近图片，仅返回true时才可进一步实现控制是否显示最近图片。

  实现onRecentPhotoClick回调，将上报返回图片/视频相关信息[BaseItemInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-photopickercomponent#baseiteminfo)。

  ```
// 返回值为true时，才能获取uri的权限。
private onRecentPhotoClick(recentPhotoInfo: BaseItemInfo): boolean {
  if (!recentPhotoInfo) {
    return false;
  }
  return true;
}

private onReceiveCheckResult(recentPhotoExists: boolean): void {
  if (!recentPhotoExists) {
    console.info('not exist recent photo');
  }
  // 存在最近图片的话，可以实现业务需求，如去控制RecentPhotoComponent是否显示。
}
```
  
   #### 完整示例

完整示例请查阅[示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-recentphotocomponent#示例)。

---
*Updated: 2026-04-20 01:45:11*
