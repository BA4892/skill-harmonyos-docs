# 使用ImageSource完成图片解码

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `image-decoding`  |  **DocID**: `ce35684d11f949578c49e79ba73d714c`  |  **NodeID**: `000201775795526928811b492a25368b`

---

# 使用ImageSource完成图片解码

       将所支持格式的图片文件解码成[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)，以便在应用或系统中显示或处理图片。当前支持的图片文件格式包括JPEG、PNG、GIF、WebP、BMP、SVG、ICO、DNG、HEIC、TIFF23+、HEIFS23+、WBMP23+。部分格式的解码能力依赖于具体的设备硬件，建议在调用前使用[image.getImageSourceSupportedFormats20+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-f#imagegetimagesourcesupportedformats20)接口，动态查询当前设备上的解码能力。

    从API version 22开始，支持对专业相机拍摄的CR2、CR3、ARW、NEF、RAF、NRW、ORF、RW2、PEF、SRW格式图片内嵌的预览图（通常为JPEG格式）进行解码。该解码能力不受运行设备类型限制。

              #### 开发步骤

     图片解码相关API的详细介绍请参见[ImageSource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagesource)。

     
             全局导入Image模块。

       ```
// 导入相关模块包。
import { image } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { fileIo as fs } from '@kit.CoreFileKit';
import { resourceManager } from '@kit.LocalizationKit';
```
             获取图片。

       
                 方法一：通过沙箱路径直接获取。该方法仅适用于应用沙箱中的图片。更多细节请参考[获取应用文件路径](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-context-stage#获取应用文件路径)。应用沙箱的介绍及如何向应用沙箱推送文件，请参考[文件管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory)。

         ```
function getFilePath(context: Context, fileName: string): string {
  const filePath: string = context.cacheDir + '/' + fileName;
  return filePath;
}
```
                 方法二：通过沙箱路径获取图片的文件描述符。具体请参考文档[@ohos.file.fs (文件管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)。该方法需要导入@kit.CoreFileKit模块。

         ```
function getFileFd(context: Context, fileName: string): number | undefined {
  try {
    const filePath: string = context.cacheDir + '/' + fileName;
    const file: fs.File = fs.openSync(filePath, fs.OpenMode.READ_ONLY);
    const fd: number = file?.fd;
    return fd;
  } catch (err) {
    console.error(`Failed to get the fileFd with error: ${err}.`);
    return undefined;
  }
}
```
                 方法三：通过资源管理器获取资源文件的ArrayBuffer。具体请参考[资源管理器API参考文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getrawfilecontent9-1)。该方法需要导入@kit.LocalizationKit模块。

         ```
async function getFileBuffer(context: Context, fileName: string): Promise<ArrayBuffer | undefined> {
  try {
    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
    // 获取资源文件内容，返回Uint8Array。
    const fileData: Uint8Array = await resourceMgr.getRawFileContent(fileName);
    console.info('Successfully get the RawFileContent.');
    // 转为ArrayBuffer并返回。
    const buffer: ArrayBuffer = fileData.buffer.slice(0);
    return buffer;
  } catch (error) {
    console.error(`Failed to get the RawFileContent with error: ${error}.`);
    return undefined;
  }
}
```
                 方法四：通过资源管理器获取资源文件的RawFileDescriptor。具体请参考[资源管理器API参考文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getrawfd9-1)。该方法需要导入@kit.LocalizationKit模块。

         ```
async function getRawFd(context: Context, fileName: string): Promise<resourceManager.RawFileDescriptor | undefined> {
  try {
    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
    const rawFileDescriptor: resourceManager.RawFileDescriptor = await resourceMgr.getRawFd(fileName);
    console.info('Successfully get the RawFileDescriptor.');
    return rawFileDescriptor;
  } catch (error) {
    console.error(`Failed to get the RawFileDescriptor with error: ${error}.`);
    return undefined;
  }
}
```
       
             创建ImageSource实例。

       
                 方法一：通过沙箱路径创建ImageSource。沙箱路径可以通过步骤2的方法一获取。

         ```
// path为已获得的沙箱路径。
const imageSource : image.ImageSource = image.createImageSource(filePath);
```
                 方法二：通过文件描述符fd创建ImageSource。文件描述符可以通过步骤2的方法二获取。

         ```
// fd为已获得的文件描述符。
const imageSource: image.ImageSource = image.createImageSource(fd);
```
                 方法三：通过缓冲区数组创建ImageSource。缓冲区数组可以通过步骤2的方法三获取。

         const imageSource: image.ImageSource = image.createImageSource(buffer);                 方法四：通过资源文件的RawFileDescriptor创建ImageSource。RawFileDescriptor可以通过步骤2的方法四获取。

         const imageSource: image.ImageSource = image.createImageSource(rawFileDescriptor);       
             设置解码参数DecodingOptions，解码获取pixelMap图片对象。

       配置解码选项参数进行解码：

       ```
async createPixelMap(imageSource: image.ImageSource | undefined): Promise<image.PixelMap | undefined> {
  if (!imageSource) {
    console.error('imageSource is undefined.');
    return undefined;
  }
  // 配置解码选项参数。
  let decodingOptions: image.DecodingOptions = {
    editable: true,
    desiredPixelFormat: image.PixelMapFormat.RGBA_8888,
    // 设置为AUTO会根据图片资源格式和设备支持情况进行解码，如果图片资源为HDR资源且设备支持HDR解码则会解码为HDR的pixelMap。
    desiredDynamicRange: image.DecodingDynamicRange.HDR,
  };

  try {
    // 生成 pixelMap 并返回
    const pixelMap = await imageSource.createPixelMap(decodingOptions);
    if (pixelMap) {
      console.info('Create PixelMap successfully.');
      // 判断pixelMap是否为hdr内容。
      let imageInfo = await pixelMap.getImageInfo();
      console.info(`Create PixelMap successfully with imageInfo.isHdr: ${imageInfo.isHdr}.`);
      return pixelMap;
    } else {
      console.info('Create PixelMap failed.');
      return undefined;
    }
  } catch (error) {
    console.error(`Failed to create PixelMap: ${error}.`);
    return undefined;
  }
}
```
       解码完成，获取到pixelMap对象后，可以进行后续[图片处理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-transformation)。

             释放pixelMap和imageSource。

       确认pixelMap和imageSource的异步方法已经执行完成，不再使用该变量后，可按需手动调用下面方法释放。

       ```
async release(pixelMap: image.PixelMap | undefined, imageSource: image.ImageSource | undefined) {
  pixelMap?.release();
  pixelMap = undefined;
  imageSource?.release();
  imageSource = undefined;
}
```
                                 
          - 释放imageSource的合适时机：createPixelMap执行完成，成功获取pixelMap后，如果确定不再使用imageSource的其他方法，可以手动释放imageSource。由于解码得到的pixelMap是一个独立的实例，imageSource的释放不会导致pixelMap不可用。
          - 释放pixelMap的合适时机：如果使用系统的[Image组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)进行图片显示，无需手动释放，Image组件会自动管理传递给它的pixelMap；如果应用自行处理pixelMap，则推荐在页面切换、应用退后台等场景下手动释放老页面pixelMap；在内存资源紧张的场景，推荐释放除当前页面外其他不可见页面的PixelMap。
         
                    
                  #### 示例代码

     
      - [实现图片获取与保存功能](https://gitcode.com/HarmonyOS_Samples/ImageGetAndSave)
      - [水印添加能力](https://gitcode.com/HarmonyOS_Samples/watermark)

---
*Updated: 2026-04-20 01:45:41*
