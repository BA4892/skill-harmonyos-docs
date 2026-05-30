# Universal Keystore Kit简介

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `huks-overview`  |  **DocID**: `83a9643c3c5f4beb8e77cb49c3963966`  |  **NodeID**: `000201775795852716832d3f6edbcd24`

---

# Universal Keystore Kit简介

 Universal Keystore Kit（密钥管理服务，下述简称为HUKS）向业务/应用提供各类密钥的统一安全操作能力，包括密钥管理（密钥生成/销毁、密钥导入、密钥证明、密钥协商、密钥派生）及密钥使用（加密/解密、签名/验签、访问控制）等功能。

 HUKS管理的密钥可以由业务/应用导入或调用HUKS的接口生成。同时，HUKS提供了密钥访问控制能力，确保存储在HUKS中的密钥被合法正确的访问。

  #### 整体架构

如图所示，HUKS模块可以分为如下三大部分：

 
SDK：提供密钥管理的接口供开发者调用，开发者可以根据实际业务，选择ArkTS或C API。

  HUKS服务层：实现密钥会话管理及存储管理。

  HUKS核心层：承载HUKS的核心功能，包括密钥的密码学运算、明文密钥的加解密、密钥访问控制等。

    对于具备安全环境（如[TEE](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-concepts#可信执行环境tee)）的系统、设备，HUKS核心层必须运行在安全环境内。

    
 

   #### 核心功能

HUKS为开发者提供了密钥全生命周期的管理能力，其核心功能按照密钥生命周期划分如下：

   #### [h2]密钥生成

 
| 功能  | 说明  
  | **[密钥生成](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-generation-overview)**  | 随机生成密钥，且在密钥的全生命周期内，其明文仅在安全环境中进行访问操作，不会将明文传递出安全环境。  
 | **[密钥导入](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-import-overview)**  | 业务可以将外部生成的密钥导入到HUKS进行管理。  
  

    #### [h2]密钥使用

 
| 功能  | 说明  
  | **[加密/解密](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-encryption-decryption-overview)**  | 使用密钥将数据加密为攻击者无法理解的密文，或使用密钥将数据解密为业务可用的明文。  
 | **[签名/验签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-signing-signature-verification-overview)**  | 用于认证消息内容以及消息发送者身份的真实性。  
 | **[密钥协商](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-agreement-overview)**  | 两个或多个实体通过协商，共同建立会话密钥。  
 | **[密钥派生](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-derivation-overview)**  | 从一个现有密钥派生出一个或多个新密钥。  
 | **[访问控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-identity-authentication-overview)**  | 确保存储在HUKS中的密钥，不会被越权访问。  
  

    #### [h2]密钥删除

 
| 功能  | 说明  
  | **[密钥删除](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-delete-key-arkts)**  | 安全地删除存储在HUKS中的密钥数据。  
  

    #### [h2]密钥证明

 
| 功能  | 说明  
  | **[密钥证明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-attestation-overview)**  | 为存储在HUKS中的非对称密钥对中的公钥签发证书，从而证明密钥的合法性（如密钥在安全环境中生成）。  
  

    #### 模拟器支持情况

本Kit支持模拟器，但与真机存在部分能力差异，具体差异如下。

 
- 通用差异：请参见[模拟器与真机的差异](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-specification)。
- 模拟器与真机算法规格存在差异，详细规格以对应特性指南描述的规格为准。
- 模拟器的密钥证明基于硬编码证书（不可信），真机基于DCM依赖硬件内的真实证书实现。

   #### 与相关Kit的关系

[基于用户身份认证的密钥访问控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-identity-authentication-overview)，依赖于[User Authentication Kit（用户身份认证）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-authentication-overview)。

---
*Updated: 2026-04-20 01:45:51*
