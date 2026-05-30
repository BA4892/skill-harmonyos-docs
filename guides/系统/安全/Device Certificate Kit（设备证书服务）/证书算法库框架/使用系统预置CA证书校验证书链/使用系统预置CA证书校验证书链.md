# 使用系统预置CA证书校验证书链

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `verify-certchain-by-systemca`  |  **DocID**: `786fb24da2954701b1bbaa36a314c454`  |  **NodeID**: `00020177579585271634811776572a7e`

---

# 使用系统预置CA证书校验证书链

       从API 20开始，支持使用系统预置CA证书校验证书链。

    以校验证书链为例，完成证书链对象的创建，使用系统预置CA证书对证书链进行校验。

              #### 开发步骤

     
             导入[证书算法库框架模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert)。

       import { cert } from '@kit.DeviceCertificateKit';             基于已有的证书数据，调用[cert.createX509CertChain](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#certcreatex509certchain11)创建X509证书链对象，并返回结果。

             调用[x509CertChain.validate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#validate11)设置校验参数trustSystemCa为true，使用系统预置CA证书校验证书链并返回结果。

     
     ```
import { cert } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { util } from '@kit.ArkTS';
// ...
async function sample() {
  let textEncoder = new util.TextEncoder();
  // 证书链二进制数据，需业务自行赋值。
  const encodingBlob: cert.EncodingBlob = {
    data: textEncoder.encodeInto(certChainData),
    // 根据encodingData的格式进行赋值，支持FORMAT_PEM、FORMAT_DER和FORMAT_PKCS7。
    encodingFormat: cert.EncodingFormat.FORMAT_PEM
  };
  let x509CertChain: cert.X509CertChain = {} as cert.X509CertChain;
  try {
    x509CertChain = await cert.createX509CertChain(encodingBlob);
  } catch (err) {
    let e: BusinessError = err as BusinessError;
    console.error(`createX509CertChain failed, errCode: ${e.code}, errMsg: ${e.message}`);
  }

  // 证书链校验数据，需业务自行赋值。
  const param: cert.CertChainValidationParameters = {
    date: '20250623163000Z',
    trustAnchors: [{}],
    trustSystemCa: true,
  };
  try {
    const validationRes = await x509CertChain.validate(param);
    console.info('X509CertChain validate result: success.');
  } catch (err) {
    let e: BusinessError = err as BusinessError;
    console.error(`X509CertChain validate failed, errCode: ${e.code}, errMsg: ${e.message}`);
  }
}
```

---
*Updated: 2026-04-20 01:46:44*
