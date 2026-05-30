# 添加、删除PDF页

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `pdf-add-delete-page`  |  **DocID**: `062a2e5c485f453b980274fd77bd6fe9`  |  **NodeID**: `0002017757956490869437ab17d977c3`

---

# 添加、删除PDF页

       在PDF文档中添加或删除页面，包括：

    
           添加单个、多个空白页到PDF文档。

           删除PDF文档中单个、多个指定页。

           将其他PDF文档页添加到本PDF文档。

    
              #### 接口说明

           
                        | 接口名          | 描述         
                               | [insertBlankPage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#insertblankpage)(index: number, width: number, height: number): PdfPage          | 在指定位置插入空白PDF页。         
                 | [getPage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#getpage)(index: number): PdfPage          | 获取指定页的对象。         
                 | [insertPageFromDocument](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#insertpagefromdocument)(document: PdfDocument, fromIndex: number, pageCount: number, index: number): PdfPage          | 将其他文档的页添加到当前文档。         
                 | [deletePage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#deletepage)(index: number, count: number): void          | 删除指定的PDF页。         
             

                       #### 示例代码

     
             调用loadDocument方法，加载PDF文档。

             调用getPage方法获取当前页，用于获取页面宽高。

             调用insertBlankPage和insertPageFromDocument方法实现如下功能。

       
        - 插入单个空白页。
        - 插入多个空白页。
        - 将input2.pdf文档的索引1、2、3页插入到input.pdf索引0的位置，并另存文档。
       
             调用deletePage方法删除单个或多个索引页。

     
     ```
import { pdfService } from '@kit.PDFKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct PdfPage {
  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();
  private context = this.getUIContext().getHostContext() as Context;

  aboutToAppear(): void {
    // 确保沙箱目录有input.pdf文档
    let filePath = this.context.filesDir + '/input.pdf';
    this.pdfDocument.loadDocument(filePath);
  }

  build() {
    Column() {
      // 插入单个空白页
      Button('insertBlankPage').onClick(async () => {
        let page: pdfService.PdfPage = this.pdfDocument.getPage(0);
        let page2: pdfService.PdfPage = this.pdfDocument.insertBlankPage(2, page.getWidth(), page.getHeight());
        let outPdfPath = this.context.filesDir + '/testInsertBlankPage.pdf';
        let result = this.pdfDocument.saveDocument(outPdfPath);
        hilog.info(0x0000, 'PdfPage', 'insertBlankPage %{public}s!', result ? 'success' : 'fail');
      })
      // 插入多个空白页
      Button('insertSomeBlankPage').onClick(async () => {
        let page: pdfService.PdfPage = this.pdfDocument.getPage(0);
        for (let i = 0; i < 3; i++) {
          this.pdfDocument.insertBlankPage(2, page.getWidth(), page.getHeight());
        }
        let outPdfPath = this.context.filesDir + '/testInsertSomeBlankPage.pdf';
        let result = this.pdfDocument.saveDocument(outPdfPath);
        hilog.info(0x0000, 'PdfPage', 'insertSomeBlankPage %{public}s!', result ? 'success' : 'fail');
      })
      // 将input2.pdf文档的索引1,2,3页插入到input.pdf索引0的位置，并另存文档
      Button('insertPageFromDocument').onClick(async () => {
        let pdfDoc: pdfService.PdfDocument = new pdfService.PdfDocument();
        // 确保该沙箱目录下有 input2.pdf文档
        pdfDoc.loadDocument(this.context.filesDir + '/input2.pdf');
        this.pdfDocument.insertPageFromDocument(pdfDoc, 1, 3, 0);
        let outPdfPath = this.context.filesDir + '/testInsertPageFromDocument.pdf';
        let result = this.pdfDocument.saveDocument(outPdfPath);
        hilog.info(0x0000, 'PdfPage', 'insertPageFromDocument %{public}s!', result ? 'success' : 'fail');
      })
      // 删除单个或多个索引页
      Button('deletePage').onClick(async () => {
        this.pdfDocument.deletePage(2, 2);
        let outPdfPath = this.context.filesDir + '/testDeletePage.pdf';
        let result = this.pdfDocument.saveDocument(outPdfPath);
        hilog.info(0x0000, 'PdfPage', 'deletePage %{public}s!', result ? 'success' : 'fail');
      })
    }
  }
}
```

---
*Updated: 2026-04-20 01:51:26*
