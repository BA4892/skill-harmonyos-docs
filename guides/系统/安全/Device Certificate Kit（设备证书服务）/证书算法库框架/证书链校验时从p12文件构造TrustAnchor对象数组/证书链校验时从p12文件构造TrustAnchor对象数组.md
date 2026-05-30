# 证书链校验时从p12文件构造TrustAnchor对象数组

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `create-trustanchor-from-p12`  |  **DocID**: `054e41ae7c3c433a97dffbcb8fcdb429`  |  **NodeID**: `000201775795852716298198904a3e0e`

---

# 证书链校验时从p12文件构造TrustAnchor对象数组

       证书链校验时从p12文件构造TrustAnchor对象数组。

              #### 开发步骤

     
             导入[证书算法库框架模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert)。

             基于现有的p12文件数据，调用[cert.createTrustAnchorsWithKeyStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#certcreatetrustanchorswithkeystore12)创建[X509TrustAnchor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#x509trustanchor11)数组对象，并返回结果。

     
     ```
import { cert } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

function test() {
  // ...
  try {
    cert.createTrustAnchorsWithKeyStore(p12Data, '123456').then((data) => {
      console.info('createTrustAnchorsWithKeyStore result: success, the num of result is :' + data.length);
    }).catch((err: BusinessError) => {
      console.error(`createTrustAnchorsWithKeyStore failed, errCode: ${err.code}, message: ${err.message}`);
    })
  } catch (error) {
    console.error(`createTrustAnchorsWithKeyStore failed, errCode: ${error.code}, message: ${error.message}`);
  }
}
```

---
*Updated: 2026-04-20 01:46:40*
