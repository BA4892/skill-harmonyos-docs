# 使用ECC压缩/非压缩公钥格式转换(ArkTS)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ypto-convert-compressed-or-uncompressed-ecc-pubkey`  |  **DocID**: `6d30b40af46648cb9b72fc46b4d2d66c`  |  **NodeID**: `0002017757958527165205b3354abb06`

---

# 使用ECC压缩/非压缩公钥格式转换(ArkTS)

       可通过指定ECC公钥数据生成公钥对象（PubKey），也可以从公钥对象（PubKey）中获取ECC公钥数据。

    当前仅支持满足X509规范的ECC算法压缩和非压缩格式的公钥数据。此处的公钥数据应当是完整的X509公钥，对于只使用点数据的情况，请参考[使用ECC压缩/非压缩点格式转换](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/rypto-convert-compressed-or-uncompressed-ecc-point)。

    ECC的算法规格请查看[非对称密钥生成和转换规格：ECC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-key-generation-conversion-spec#ecc)。

    通过传入字符串参数format，可指定需要获取的ECC公钥数据格式。如果需要获取满足X509规范的压缩格式数据，则指定format为："X509|COMPRESSED"；需要获取非压缩格式，则指定format为："X509|UNCOMPRESSED"。

              #### 指定非压缩公钥数据转换为压缩公钥数据

     
             将Uint8Array类型的ECC非压缩公钥数据封装成[DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#datablob)对象。

       公钥和私钥可只传入其中一个。此处示例传入非压缩公钥。

      - 调用[cryptoFramework.createAsyKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator)，指定字符串参数'ECC_BrainPoolP256r1'，创建密钥算法为ECC、密钥长度为256位的非对称密钥生成器（AsyKeyGenerator）。
      - 调用[AsyKeyGenerator.convertKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#convertkey-3)，传入封装后的DataBlob对象，生成非对称密钥对象（KeyPair）。
      - 调用[PubKey.getEncodedDer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencodedder12)，设置参数为'X509|COMPRESSED'，获取压缩公钥数据的字节流。
     
     ```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function eccPointUncompressedToCompressed() {
  let pkData =
    new Uint8Array([4, 143, 39, 57, 249, 145, 50, 63, 222, 35, 70, 178, 121, 202, 154, 21, 146, 129, 75, 76, 63, 8, 195,
      157, 111, 40, 217, 215, 148, 120, 224, 205, 82, 83, 92, 185, 21, 211, 184, 5, 19, 114, 33, 86, 85, 228, 123, 242,
      206, 200, 98, 178, 184, 130, 35, 232, 45, 5, 202, 189, 11, 46, 163, 156, 152]);
  let returnPoint = cryptoFramework.ECCKeyUtil.convertPoint('NID_brainpoolP256r1', pkData);
  console.info('convertPoint result: success.');
  let returnData = cryptoFramework.ECCKeyUtil.getEncodedPoint('NID_brainpoolP256r1', returnPoint, 'COMPRESSED');
  console.info('returnData: ' +
    returnData); // (因为y为偶数，所以压缩点数据的前缀是02)returnData: 2,143,39,57,249,145,50,63,222,35,70,178,121,202,154,21,
  // 146,129,75,76,63,8,195,157,111,40,217,215,148,120,224,205,82
}
```

---
*Updated: 2026-04-20 01:47:00*
