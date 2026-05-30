# 转换整个PDF文档为图片

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `pdf-convert-img`  |  **DocID**: `573dd9a5445c4504a16333bbf7758115`  |  **NodeID**: `0002017757956490863366ea77b5ed51`

---

# 转换整个PDF文档为图片

                 #### 场景介绍

     将整个PDF文档的页面转换为图片，每页为一张图片，并且所有图片存放在指定的同一个文件夹下。

     当前支持的图片格式请参考[ImageFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#imageformat)。

                  #### 接口说明

           
                        | 接口名          | 描述         
                               | [convertToImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#converttoimage)(path: string, format: ImageFormat, onProgress?: (progress: number) => number): boolean          | 转换PDF文档为图片。         
             

                       #### 示例代码

     
             调用loadDocument方法，加载PDF文档。

             设置要输出图片的文件夹，调用convertToImage方法转化PDF文档所有页面为图片。

     
     ```
import { fileIo as fs } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { pdfService } from '@kit.PDFKit';

@Entry
@Component
struct PdfPage {
  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();
  private context = this.getUIContext().getHostContext() as Context;
  private loadResult: pdfService.ParseResult = pdfService.ParseResult.PARSE_ERROR_FORMAT;

  aboutToAppear(): void {
    // 确保沙箱目录有input.pdf文档
    let filePath = this.context.filesDir + '/input.pdf';
    this.loadResult = this.pdfDocument.loadDocument(filePath);
  }

  build() {
    Column() {
      // 获取为图片并保存到应用沙箱
      Button('convertToImage').onClick(async () => {
        if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {
          let outputPath = this.getUIContext().getHostContext()?.filesDir + '/output/';
          fs.mkdir(outputPath);
          // 将所有的页面转化为png图片，并存储在output文件夹里，确保output文件夹目录存在
          let res = this.pdfDocument.convertToImage(outputPath, pdfService.ImageFormat.PNG);
          hilog.info(0x0000, 'PdfPage', 'convertToImage %{public}s!', res ? 'success' : 'fail');
        }
      })
    }
  }
}
```

---
*Updated: 2026-04-20 01:52:36*
