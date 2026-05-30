# 随机生成非对称密钥对(ArkTS)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `crypto-generate-asym-key-pair-randomly`  |  **DocID**: `198ca8a01d374f38b8e3edbd1d0a7c87`  |  **NodeID**: `000201775795852716487a1ab593a513`

---

# 随机生成非对称密钥对(ArkTS)

       以RSA和SM2为例，随机生成非对称密钥对（KeyPair），并获得二进制数据。

    非对称密钥对可用于后续加解密等操作，二进制数据可用于存储或传输。

              #### 随机生成RSA密钥对

     对应的算法规格请查看[非对称密钥生成和转换规格：RSA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-key-generation-conversion-spec#rsa)。

     
             调用[cryptoFramework.createAsyKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator)，指定字符串参数'RSA1024|PRIMES_2'，创建RSA密钥类型为RSA1024、素数个数为2的非对称密钥生成器（AsyKeyGenerator）。

             调用[AsyKeyGenerator.generateKeyPair](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypair-1)，随机生成非对称密钥对象（KeyPair）。

       KeyPair对象中包括公钥PubKey、私钥PriKey。

             调用[PubKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)和[PriKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)，分别获取密钥对象的二进制数据。

     
     
             以使用Promise方式随机生成RSA密钥对为例：

       ```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function generateAsyKey() {
  // 创建一个AsyKeyGenerator实例
  let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024|PRIMES_2');
  // 使用密钥生成器随机生成非对称密钥对
  let keyGenPromise = rsaGenerator.generateKeyPair();
  keyGenPromise.then(keyPair => {
    let pubKey = keyPair.pubKey;
    let priKey = keyPair.priKey;
    // 获取非对称密钥对的二进制数据
    let pkBlob = pubKey.getEncoded();
    let skBlob = priKey.getEncoded();
    console.info('pk bin data: ' + pkBlob.data);
    console.info('sk bin data: ' + skBlob.data);
  });
}
```
             同步返回结果（调用方法[generateKeyPairSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypairsync12)）：

       ```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function generateAsyKeySync() {
  // 创建一个AsyKeyGenerator实例
  let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024|PRIMES_2');
  // 使用密钥生成器随机生成非对称密钥对
  try {
    let keyPair = rsaGenerator.generateKeyPairSync();
    if (keyPair != null) {
      let pubKey = keyPair.pubKey;
      let priKey = keyPair.priKey;
      // 获取非对称密钥对的二进制数据
      let pkBlob = pubKey.getEncoded();
      let skBlob = priKey.getEncoded();
      console.info('pk bin data: ' + pkBlob.data);
      console.info('sk bin data: ' + skBlob.data);
    } else {
      console.error('[Sync]: get key pair result: fail!');
    }
  } catch (e) {
    console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);
  }
}
```
     
                  #### 随机生成SM2密钥对

     对应的算法规格请查看[非对称密钥生成和转换规格：SM2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-key-generation-conversion-spec#sm2)。

     
             调用[cryptoFramework.createAsyKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator)，指定字符串参数'SM2_256'，创建密钥算法为SM2、密钥长度为256位的非对称密钥生成器（AsyKeyGenerator）。

             调用[AsyKeyGenerator.generateKeyPair](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypair-1)，随机生成非对称密钥对象（KeyPair）。

       KeyPair对象中包括公钥PubKey、私钥PriKey。

             调用[PubKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)和[PriKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)，分别获取密钥对象的二进制数据。

     
     
             以使用Promise方式随机生成SM2密钥对为例：

       ```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function generateSM2Key() {
  // 创建一个AsyKeyGenerator实例
  let sm2Generator = cryptoFramework.createAsyKeyGenerator('SM2_256');
  // 使用密钥生成器随机生成非对称密钥对
  let keyGenPromise = sm2Generator.generateKeyPair();
  keyGenPromise.then(keyPair => {
    let pubKey = keyPair.pubKey;
    let priKey = keyPair.priKey;
    // 获取非对称密钥对的二进制数据
    let pkBlob = pubKey.getEncoded();
    let skBlob = priKey.getEncoded();
    console.info('pk bin data: ' + pkBlob.data);
    console.info('sk bin data: ' + skBlob.data);
  });
}
```
             同步返回结果（调用方法[generateKeyPairSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypairsync12)）：

       ```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function generateSM2KeySync() {
  // 创建一个AsyKeyGenerator实例
  let rsaGenerator = cryptoFramework.createAsyKeyGenerator('SM2_256');
  // 使用密钥生成器随机生成非对称密钥对
  try {
    let keyPair = rsaGenerator.generateKeyPairSync();
    if (keyPair != null) {
      let pubKey = keyPair.pubKey;
      let priKey = keyPair.priKey;
      // 获取非对称密钥对的二进制数据
      let pkBlob = pubKey.getEncoded();
      let skBlob = priKey.getEncoded();
      console.info('pk bin data: ' + pkBlob.data);
      console.info('sk bin data: ' + skBlob.data);
    } else {
      console.error('[Sync]: get key pair result: fail!');
    }
  } catch (e) {
    console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);
  }
}
```

---
*Updated: 2026-04-20 01:46:57*
