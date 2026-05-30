# 判断PDF文档是否加密及删除加密

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `pdf-isencrypt-removesecurity`  |  **DocID**: `1b38cd61ceb7460ab1e2424060101573`  |  **NodeID**: `0002017757956490861287b48ff5e441`

---

# 判断PDF文档是否加密及删除加密

       PDF Kit支持判断PDF文档是否加密及删除PDF加密锁。

              #### 接口说明

           
                        | 接口名          | 描述         
                               | [isEncrypted](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#isencrypted)(path: string): boolean          | 判断当前文档是否已加密。         
                 | [removeSecurity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#removesecurity)(): boolean          | 删除文档加密锁。         
             

                       #### 示例代码

     
             调用isEncrypted方法，判断PDF文档是否加密。

             如果是加密PDF文档，调用removeSecurity方法移除PDF文档的加密锁。

     
     ```
import { pdfService } from '@kit.PDFKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct PdfPage {
  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();
  private context = this.getUIContext().getHostContext() as Context;

  build() {
    Column() {
      // 判断文档是否加密，并删除加密
      Button('isEncryptedAndRemoveSecurity').onClick(async () => {
        // 确保沙箱目录有input.pdf文档
        let filePath = this.context.filesDir + '/input.pdf';
        let isEncrypt = this.pdfDocument.isEncrypted(filePath);
        if (isEncrypt) {
          let hasRemoveEncrypt = this.pdfDocument.removeSecurity();
          hilog.info(0x0000, 'PdfPage', 'isEncryptedAndRemoveSecurity %{public}s!',
            hasRemoveEncrypt ? 'success' : 'fail');
        }
      })
    }
  }
}
```

---
*Updated: 2026-04-20 01:51:59*
