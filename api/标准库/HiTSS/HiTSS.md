# HiTSS

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `hitss-api-ref`

**DocID**: `02e5e27062764a8888c3615dd7f5cc29`

**NodeID**: `00020177579621973878746ab2917c38`

---

HiTSS

简介

HiTSS是基于TPM（Trusted Platform Module）2.0规范开发的组件，它提供了访问TPM 2.0芯片的API，包括命令传输接口、系统级接口和序列化反序列化接口，使开发者可以更方便地使用TPM 2.0芯片用于执行各种TPM操作，例如创建密钥、签名验签等，帮助开发者轻松与TPM 2.0芯片进行通信。HiTSS目前只针对鸿蒙电脑企业客户开放。

HiTSS版本

从API 20开始，HiTSS匹配TCG （Trusted Computing Group）TSS（TPM2 Software Stack）规范版本为：

TCG TSS 2.0 Overview and Common Structures Specification Version 1.0 Revision 10, September 23 2021

TCG TSS 2.0 Marshaling/Unmarshaling API Specification Version 1.0 Revision 07, 10 March 2020

TCG TSS 2.0 System Level API (SAPI) Specification Version 1.1 Revision 36, October 1 2021

TCG TSS 2.0 TPM Command Transmission Interface (TCTI) API Specification Version 1.0 Revision 18, 24 January 2020

HiTSS支持的能力

命令传输接口，具体内容请参见
HiTSS支持的命令传输接口列表
。

序列化反序列化接口，具体内容请参见
HiTSS支持的序列化和反序列化接口列表
。

系统级接口（由于芯片能力限制，HiTSS只支持部分系统级接口），具体内容请参见
HiTSS支持的系统级接口列表
。

引入HiTSS能力

开发应用时，在访问命令传输接口或系统级接口前，需要申请权限：ohos.permission.CALL_TPM_CMD，申请方式请参考：
申请使用受限权限
。

如果开发者需要使用HiTSS相关能力，首先请添加头文件。

#include <tss2/tss2_common.h>
#include <tss2/tss2_tpm2_types.h>
#include <tss2/tss2_mu.h>
#include <tss2/tss2_sys.h>
#include <tss2/tss2_tcti.h>
#include <tss2/tss2_tctildr.h>

其次在CMakeLists.txt中添加以下动态链接库。

libtss2-mu.so
libtss2-sys.so
libtss2-tctildr.so

使用示例

#include <stdio.h>
#include <tss2/tss2_tctildr.h>
#include <tss2/tss2_sys.h>
#include <tss2/tss2_mu.h>

#define SAFE_FREE(p) do { \
 if ((p) != NULL) { \
 free(p); \
 (p) = NULL; \
 } \
} while (false)

// 初始化上下文
TSS2_SYS_CONTEXT* InitSysCtx()
{
 TSS2_TCTI_CONTEXT *tctiCtx = NULL;
 const char *nameConf = "hmsa";
 // nameConf参数字符串中不支持设定conf，conf必须为空
 // 正确用法
 // Tss2_TctiLdr_Initialize("hmsa", &tctiCtx);
 // Tss2_TctiLdr_Initialize("hmsa:", &tctiCtx);
 // 错误用法

 // Tss2_TctiLdr_Initialize("hmsa:/dev/tpm0", &tctiCtx);

 TSS2_RC rc = Tss2_TctiLdr_Initialize(nameConf, &tctiCtx);
 if (rc != TSS2_RC_SUCCESS) {
 return NULL;
 }
 size_t size = Tss2_Sys_GetContextSize(0);
 TSS2_SYS_CONTEXT *sysCtx = (TSS2_SYS_CONTEXT *)calloc(1, size);
 if (sysCtx == nullptr) {
 return NULL;
 }
 TSS2_ABI_VERSION ver = TSS2_ABI_VERSION_CURRENT;
 rc = Tss2_Sys_Initialize(sysCtx, size, tctiCtx, &ver);
 if (rc != TSS2_RC_SUCCESS) {
 Tss2_TctiLdr_Finalize(&tctiCtx);
 SAFE_FREE(sysCtx);
 return NULL;
 }
 return sysCtx;
}

// 释放上下文
void ReleaseSysCtx(TSS2_SYS_CONTEXT **sysCtx)
{
 TSS2_TCTI_CONTEXT *tctiCtx = NULL;
 TSS2_RC rc = Tss2_Sys_GetTctiContext(*sysCtx, &tctiCtx);
 if (rc != TSS2_RC_SUCCESS) {
 return;
 }
 if (tctiCtx != NULL) {
 Tss2_TctiLdr_Finalize(&tctiCtx);
 }
 Tss2_Sys_Finalize(*sysCtx);
 SAFE_FREE(*sysCtx);
}

// 通过Sys API获取随机数示例
void GetRandomExample()
{
 TSS2_SYS_CONTEXT *sysCtx = InitSysCtx();
 if (sysCtx == NULL) {
 return;
 }
 TPM2B_DIGEST random = {};
 TSS2_RC rc = Tss2_Sys_GetRandom(sysCtx, NULL, 32, &random, NULL); // 32: 随机数长度
 if (rc != TSS2_RC_SUCCESS) {
 printf("Failed to get random, error:%d.
", rc);
 }
 ReleaseSysCtx(&sysCtx);
}

// 通过Sys API获取随机数示例
void GetRandomExample2()
{
 TSS2_SYS_CONTEXT *sysCtx = InitSysCtx();
 if (sysCtx == NULL) {
 return;
 }
 TPM2B_DIGEST random = {};
 do {
 if (Tss2_Sys_GetRandom_Prepare(sysCtx, 32) != TSS2_RC_SUCCESS) { // 32: 随机数长度
 break;
 }
 if (Tss2_Sys_Execute(sysCtx) != TSS2_RC_SUCCESS) {
 break;
 }
 if (Tss2_Sys_GetRandom_Complete(sysCtx, &random) != TSS2_RC_SUCCESS) {
 break;
 }
 } while(false);
 ReleaseSysCtx(&sysCtx);
}

// MU API使用示例
void Int32MarshalUnmarshalExample()
{
 INT32 data = 20;
 uint8_t buffer[sizeof(data)] = { 0 };
 size_t bufferSize = sizeof(data);
 // 序列化data
 TSS2_RC rc = Tss2_MU_INT32_Marshal(data, buffer, bufferSize, NULL);
 if (rc != TSS2_RC_SUCCESS) {
 printf("Failed to marshal data, error:%d.
", rc);
 }
 INT32 dest = 0;
 // 反序列化data，然后打印
 rc = Tss2_MU_INT32_Unmarshal(buffer, bufferSize, NULL, &dest);
 if (rc != TSS2_RC_SUCCESS) {
 printf("Failed to unmarshal data, error:%d.
", rc);
 }
 printf("The unmarshal result is %d.
", dest);
}

错误码

以下仅介绍HiTSS特有错误码，通用错误码请参考
TCG TSS 2.0 Overview and Common Structures Specification
。

[h2]TSS2_BASE_RC_INTERNAL_ERROR

错误描述

内部错误。

可能原因

代码内部处理逻辑与预期不符。

处理步骤

检查代码逻辑和芯片状态是否正确。

[h2]TSS2_BASE_RC_SAPI_INIT

错误描述

SAPI上下文初始化失败。

可能原因

参数不正确。

处理步骤

检查函数入参是否正确。

[h2]TSS2_BASE_RC_CANCEL

错误描述

命令取消错误。

可能原因

命令队列已满。

处理步骤

尝试重试。

[h2]TSS2_TCTI_RC_MEMORY

错误描述

TCTI接口内存错误。

可能原因

设备内存不足或其它内存异常。

处理步骤

查看设备可用内存是否大于申请内存，并及时清理设备内存。

与TCG TSS标准规范的差异

以下类型和结构体与TCG TSS标准规范存在差异，HiTSS在标准规范基础上进行了能力扩充和错误修复。

// HiTSS新增宏定义
#define TPM2_ST_ATTEST_NV_DIGEST ((TPM2_ST) 0x801C)

// HiTSS新增nvDigest字段
typedef union TPMU_ATTEST TPMU_ATTEST;
union TPMU_ATTEST {
 TPMS_CERTIFY_INFO certify; /* TPM2_ST_ATTEST_CERTIFY */
 TPMS_CREATION_INFO creation; /* TPM2_ST_ATTEST_CREATION */
 TPMS_QUOTE_INFO quote; /* TPM2_ST_ATTEST_QUOTE */
 TPMS_COMMAND_AUDIT_INFO commandAudit; /* TPM2_ST_ATTEST_COMMAND_AUDIT */
 TPMS_SESSION_AUDIT_INFO sessionAudit; /* TPM2_ST_ATTEST_SESSION_AUDIT */
 TPMS_TIME_ATTEST_INFO time; /* TPM2_ST_ATTEST_TIME */
 TPMS_NV_CERTIFY_INFO nv; /* TPM2_ST_ATTEST_NV */
 TPMS_NV_DIGEST_CERTIFY_INFO nvDigest; /* TPM2_ST_ATTEST_NV_DIGEST */
};

// HiTSS新增类型
typedef TPM2_KEY_BITS TPMI_TDES_KEY_BITS;

// HiTSS新增tdes字段
typedef union TPMU_SYM_KEY_BITS TPMU_SYM_KEY_BITS;
union TPMU_SYM_KEY_BITS {
 TPMI_TDES_KEY_BITS tdes; /* TPM2_ALG_TDES */
 TPMI_AES_KEY_BITS aes; /* TPM2_ALG_AES */
 TPMI_SM4_KEY_BITS sm4; /* TPM2_ALG_SM4 */
 TPMI_CAMELLIA_KEY_BITS camellia; /* TPM2_ALG_CAMELLIA */
 TPM2_KEY_BITS sym;
 TPMI_ALG_HASH exclusiveOr; /* TPM2_ALG_XOR */
 TPMS_EMPTY null; /* TPM2_ALG_NULL */
};

// HiTSS新增tdes字段
typedef union TPMU_SYM_MODE TPMU_SYM_MODE;
union TPMU_SYM_MODE {
 TPMI_ALG_SYM_MODE tdes; /* TPM2_ALG_TDES */
 TPMI_ALG_SYM_MODE aes; /* TPM2_ALG_AES */
 TPMI_ALG_SYM_MODE sm4; /* TPM2_ALG_SM4 */
 TPMI_ALG_SYM_MODE camellia; /* TPM2_ALG_CAMELLIA */
 TPMI_ALG_SYM_MODE sym;
 TPMS_EMPTY exclusiveOr; /* TPM2_ALG_XOR */
 TPMS_EMPTY null; /* TPM2_ALG_NULL */
};

// TCG规范中缺失的定义
typedef UINT32 TPM2_AT;

// TCG规范中缺失的定义
#define TPM2_MAX_AC_CAPABILITIES (TPM2_MAX_CAP_BUFFER / sizeof(TPMS_AC_OUTPUT))

// 为方便用户使用，HiTSS新增TPM2B结构体
typedef struct {
 UINT16 size;
 BYTE buffer[];
} TPM2B;

// TCG规范中缺失的定义
typedef TPM2_HANDLE TPMI_RH_HIERARCHY_POLICY;

// TCG规范中错误定义了tag字段的类型，HiTSS进行了修正
typedef struct TPMS_AC_OUTPUT TPMS_AC_OUTPUT;
struct TPMS_AC_OUTPUT {
 TPM2_AT tag;
 UINT32 data;
};

相关参考

TCG TSS 2.0 Marshaling/Unmarshaling API Specification

TCG TSS 2.0 System Level API (SAPI) Specification

TCG TSS 2.0 TPM Command Transmission Interface (TCTI) API Specification

TCG TSS 2.0 Overview and Common Structures Specification

HiTSS支持的系统级接口列表

[h2]命令上下文管理

Tss2_Sys_GetContextSize

Tss2_Sys_Initialize

Tss2_Sys_Finalize

Tss2_Sys_GetTctiContext

[h2]命令准备

Tss2_Sys_SetCmdAuths

[h2]命令执行

Tss2_Sys_ExecuteAsync

Tss2_Sys_ExecuteFinish

Tss2_Sys_Execute

Tss2_Sys_GetRspAuths

[h2]TPM命令调用

Prepare接口

Complete接口

命令接口

Tss2_Sys_Startup_Prepare

Tss2_Sys_Startup_Complete

Tss2_Sys_Startup

Tss2_Sys_Shutdown_Prepare

Tss2_Sys_Shutdown_Complete

Tss2_Sys_Shutdown

Tss2_Sys_SelfTest_Prepare

Tss2_Sys_SelfTest_Complete

Tss2_Sys_SelfTest

Tss2_Sys_IncrementalSelfTest_Prepare

Tss2_Sys_IncrementalSelfTest_Complete

Tss2_Sys_IncrementalSelfTest

Tss2_Sys_GetTestResult_Prepare

Tss2_Sys_GetTestResult_Complete

Tss2_Sys_GetTestResult

Tss2_Sys_StartAuthSession_Prepare

Tss2_Sys_StartAuthSession_Complete

Tss2_Sys_StartAuthSession

Tss2_Sys_PolicyRestart_Prepare

Tss2_Sys_PolicyRestart_Complete

Tss2_Sys_PolicyRestart

Tss2_Sys_Create_Prepare

Tss2_Sys_Create_Complete

Tss2_Sys_Create

Tss2_Sys_Load_Prepare

Tss2_Sys_Load_Complete

Tss2_Sys_Load

Tss2_Sys_LoadExternal_Prepare

Tss2_Sys_LoadExternal_Complete

Tss2_Sys_LoadExternal

Tss2_Sys_ReadPublic_Prepare

Tss2_Sys_ReadPublic_Complete

Tss2_Sys_ReadPublic

Tss2_Sys_ActivateCredential_Prepare

Tss2_Sys_ActivateCredential_Complete

Tss2_Sys_ActivateCredential

Tss2_Sys_MakeCredential_Prepare

Tss2_Sys_MakeCredential_Complete

Tss2_Sys_MakeCredential

Tss2_Sys_Unseal_Prepare

Tss2_Sys_Unseal_Complete

Tss2_Sys_Unseal

Tss2_Sys_ObjectChangeAuth_Prepare

Tss2_Sys_ObjectChangeAuth_Complete

Tss2_Sys_ObjectChangeAuth

Tss2_Sys_CreateLoaded_Prepare

Tss2_Sys_CreateLoaded_Complete

Tss2_Sys_CreateLoaded

Tss2_Sys_Duplicate_Prepare

Tss2_Sys_Duplicate_Complete

Tss2_Sys_Duplicate

Tss2_Sys_Rewrap_Prepare

Tss2_Sys_Rewrap_Complete

Tss2_Sys_Rewrap

Tss2_Sys_Import_Prepare

Tss2_Sys_Import_Complete

Tss2_Sys_Import

Tss2_Sys_RSA_Encrypt_Prepare

Tss2_Sys_RSA_Encrypt_Complete

Tss2_Sys_RSA_Encrypt

Tss2_Sys_RSA_Decrypt_Prepare

Tss2_Sys_RSA_Decrypt_Complete

Tss2_Sys_RSA_Decrypt

Tss2_Sys_ECDH_KeyGen_Prepare

Tss2_Sys_ECDH_KeyGen_Complete

Tss2_Sys_ECDH_KeyGen

Tss2_Sys_ECDH_ZGen_Prepare

Tss2_Sys_ECDH_ZGen_Complete

Tss2_Sys_ECDH_ZGen

Tss2_Sys_ECC_Parameters_Prepare

Tss2_Sys_ECC_Parameters_Complete

Tss2_Sys_ECC_Parameters

Tss2_Sys_ZGen_2Phase_Prepare

Tss2_Sys_ZGen_2Phase_Complete

Tss2_Sys_ZGen_2Phase

Tss2_Sys_EncryptDecrypt_Prepare

Tss2_Sys_EncryptDecrypt_Complete

Tss2_Sys_EncryptDecrypt

Tss2_Sys_EncryptDecrypt2_Prepare

Tss2_Sys_EncryptDecrypt2_Complete

Tss2_Sys_EncryptDecrypt2

Tss2_Sys_Hash_Prepare

Tss2_Sys_Hash_Complete

Tss2_Sys_Hash

Tss2_Sys_HMAC_Prepare

Tss2_Sys_HMAC_Complete

Tss2_Sys_HMAC

Tss2_Sys_GetRandom_Prepare

Tss2_Sys_GetRandom_Complete

Tss2_Sys_GetRandom

Tss2_Sys_StirRandom_Prepare

Tss2_Sys_StirRandom_Complete

Tss2_Sys_StirRandom

Tss2_Sys_HashSequenceStart_Prepare

Tss2_Sys_HashSequenceStart_Complete

Tss2_Sys_HashSequenceStart

Tss2_Sys_SequenceUpdate_Prepare

Tss2_Sys_SequenceUpdate_Complete

Tss2_Sys_SequenceUpdate

Tss2_Sys_SequenceComplete_Prepare

Tss2_Sys_SequenceComplete_Complete

Tss2_Sys_SequenceComplete

Tss2_Sys_Certify_Prepare

Tss2_Sys_Certify_Complete

Tss2_Sys_Certify

Tss2_Sys_CertifyCreation_Prepare

Tss2_Sys_CertifyCreation_Complete

Tss2_Sys_CertifyCreation

Tss2_Sys_Quote_Prepare

Tss2_Sys_Quote_Complete

Tss2_Sys_Quote

Tss2_Sys_Commit_Prepare

Tss2_Sys_Commit_Complete

Tss2_Sys_Commit

Tss2_Sys_EC_Ephemeral_Prepare

Tss2_Sys_EC_Ephemeral_Complete

Tss2_Sys_EC_Ephemeral

Tss2_Sys_VerifySignature_Prepare

Tss2_Sys_VerifySignature_Complete

Tss2_Sys_VerifySignature

Tss2_Sys_Sign_Prepare

Tss2_Sys_Sign_Complete

Tss2_Sys_Sign

Tss2_Sys_PCR_Extend_Prepare

Tss2_Sys_PCR_Extend_Complete

Tss2_Sys_PCR_Extend

Tss2_Sys_PCR_Event_Prepare

Tss2_Sys_PCR_Event_Complete

Tss2_Sys_PCR_Event

Tss2_Sys_PCR_Read_Prepare

Tss2_Sys_PCR_Read_Complete

Tss2_Sys_PCR_Read

Tss2_Sys_PCR_Allocate_Prepare

Tss2_Sys_PCR_Allocate_Complete

Tss2_Sys_PCR_Allocate

Tss2_Sys_PCR_Reset_Prepare

Tss2_Sys_PCR_Reset_Complete

Tss2_Sys_PCR_Reset

Tss2_Sys_PolicySigned_Prepare

Tss2_Sys_PolicySigned_Complete

Tss2_Sys_PolicySigned

Tss2_Sys_PolicySecret_Prepare

Tss2_Sys_PolicySecret_Complete

Tss2_Sys_PolicySecret

Tss2_Sys_PolicyTicket_Prepare

Tss2_Sys_PolicyTicket_Complete

Tss2_Sys_PolicyTicket

Tss2_Sys_PolicyOR_Prepare

Tss2_Sys_PolicyOR_Complete

Tss2_Sys_PolicyOR

Tss2_Sys_PolicyPCR_Prepare

Tss2_Sys_PolicyPCR_Complete

Tss2_Sys_PolicyPCR

Tss2_Sys_PolicyCommandCode_Prepare

Tss2_Sys_PolicyCommandCode_Complete

Tss2_Sys_PolicyCommandCode

Tss2_Sys_PolicyCpHash_Prepare

Tss2_Sys_PolicyCpHash_Complete

Tss2_Sys_PolicyCpHash

Tss2_Sys_PolicyAuthValue_Prepare

Tss2_Sys_PolicyAuthValue_Complete

Tss2_Sys_PolicyAuthValue

Tss2_Sys_PolicyPassword_Prepare

Tss2_Sys_PolicyPassword_Complete

Tss2_Sys_PolicyPassword

Tss2_Sys_PolicyGetDigest_Prepare

Tss2_Sys_PolicyGetDigest_Complete

Tss2_Sys_PolicyGetDigest

Tss2_Sys_CreatePrimary_Prepare

Tss2_Sys_CreatePrimary_Complete

Tss2_Sys_CreatePrimary

Tss2_Sys_HierarchyControl_Prepare

Tss2_Sys_HierarchyControl_Complete

Tss2_Sys_HierarchyControl

Tss2_Sys_Clear_Prepare

Tss2_Sys_Clear_Complete

Tss2_Sys_Clear

Tss2_Sys_ClearControl_Prepare

Tss2_Sys_ClearControl_Complete

Tss2_Sys_ClearControl

Tss2_Sys_HierarchyChangeAuth_Prepare

Tss2_Sys_HierarchyChangeAuth_Complete

Tss2_Sys_HierarchyChangeAuth

Tss2_Sys_DictionaryAttackLockReset_Prepare

Tss2_Sys_DictionaryAttackLockReset_Complete

Tss2_Sys_DictionaryAttackLockReset

Tss2_Sys_DictionaryAttackParameters_Prepare

Tss2_Sys_DictionaryAttackParameters_Complete

Tss2_Sys_DictionaryAttackParameters

Tss2_Sys_ContextSave_Prepare

Tss2_Sys_ContextSave_Complete

Tss2_Sys_ContextSave

Tss2_Sys_ContextLoad_Prepare

Tss2_Sys_ContextLoad_Complete

Tss2_Sys_ContextLoad

Tss2_Sys_FlushContext_Prepare

Tss2_Sys_FlushContext_Complete

Tss2_Sys_FlushContext

Tss2_Sys_EvictControl_Prepare

Tss2_Sys_EvictControl_Complete

Tss2_Sys_EvictControl

Tss2_Sys_GetCapability_Prepare

Tss2_Sys_GetCapability_Complete

Tss2_Sys_GetCapability

Tss2_Sys_TestParms_Prepare

Tss2_Sys_TestParms_Complete

Tss2_Sys_TestParms

Tss2_Sys_NV_DefineSpace_Prepare

Tss2_Sys_NV_DefineSpace_Complete

Tss2_Sys_NV_DefineSpace

Tss2_Sys_NV_UndefineSpace_Prepare

Tss2_Sys_NV_UndefineSpace_Complete

Tss2_Sys_NV_UndefineSpace

Tss2_Sys_NV_ReadPublic_Prepare

Tss2_Sys_NV_ReadPublic_Complete

Tss2_Sys_NV_ReadPublic

Tss2_Sys_NV_Write_Prepare

Tss2_Sys_NV_Write_Complete

Tss2_Sys_NV_Write

Tss2_Sys_NV_Increment_Prepare

Tss2_Sys_NV_Increment_Complete

Tss2_Sys_NV_Increment

Tss2_Sys_NV_Extend_Prepare

Tss2_Sys_NV_Extend_Complete

Tss2_Sys_NV_Extend

Tss2_Sys_NV_SetBits_Prepare

Tss2_Sys_NV_SetBits_Complete

Tss2_Sys_NV_SetBits

Tss2_Sys_NV_WriteLock_Prepare

Tss2_Sys_NV_WriteLock_Complete

Tss2_Sys_NV_WriteLock

Tss2_Sys_NV_GlobalWriteLock_Prepare

Tss2_Sys_NV_GlobalWriteLock_Complete

Tss2_Sys_NV_GlobalWriteLock

Tss2_Sys_NV_Read_Prepare

Tss2_Sys_NV_Read_Complete

Tss2_Sys_NV_Read

Tss2_Sys_NV_ReadLock_Prepare

Tss2_Sys_NV_ReadLock_Complete

Tss2_Sys_NV_ReadLock

Tss2_Sys_NV_ChangeAuth_Prepare

Tss2_Sys_NV_ChangeAuth_Complete

Tss2_Sys_NV_ChangeAuth

HiTSS支持的序列化和反序列化接口列表

序列化接口

反序列化接口

Tss2_MU_INT8_Marshal

Tss2_MU_INT8_Unmarshal

Tss2_MU_UINT8_Marshal

Tss2_MU_UINT8_Unmarshal

Tss2_MU_INT16_Marshal

Tss2_MU_INT16_Unmarshal

Tss2_MU_UINT16_Marshal

Tss2_MU_UINT16_Unmarshal

Tss2_MU_INT32_Marshal

Tss2_MU_INT32_Unmarshal

Tss2_MU_UINT32_Marshal

Tss2_MU_UINT32_Unmarshal

Tss2_MU_INT64_Marshal

Tss2_MU_INT64_Unmarshal

Tss2_MU_UINT64_Marshal

Tss2_MU_UINT64_Unmarshal

Tss2_MU_BYTE_Marshal

Tss2_MU_BYTE_Unmarshal

Tss2_MU_TPM2_ALGORITHM_ID_Marshal

Tss2_MU_TPM2_ALGORITHM_ID_Unmarshal

Tss2_MU_TPM2_MODIFIER_INDICATOR_Marshal

Tss2_MU_TPM2_MODIFIER_INDICATOR_Unmarshal

Tss2_MU_TPM2_AUTHORIZATION_SIZE_Marshal

Tss2_MU_TPM2_AUTHORIZATION_SIZE_Unmarshal

Tss2_MU_TPM2_PARAMETER_SIZE_Marshal

Tss2_MU_TPM2_PARAMETER_SIZE_Unmarshal

Tss2_MU_TPM2_KEY_SIZE_Marshal

Tss2_MU_TPM2_KEY_SIZE_Unmarshal

Tss2_MU_TPM2_KEY_BITS_Marshal

Tss2_MU_TPM2_KEY_BITS_Unmarshal

Tss2_MU_TPM2_SPEC_Marshal

Tss2_MU_TPM2_SPEC_Unmarshal

Tss2_MU_TPM2_GENERATED_Marshal

Tss2_MU_TPM2_GENERATED_Unmarshal

Tss2_MU_TPM2_ALG_ID_Marshal

Tss2_MU_TPM2_ALG_ID_Unmarshal

Tss2_MU_TPM2_ECC_CURVE_Marshal

Tss2_MU_TPM2_ECC_CURVE_Unmarshal

Tss2_MU_TPM2_CC_Marshal

Tss2_MU_TPM2_CC_Unmarshal

Tss2_MU_TPM2_RC_Marshal

Tss2_MU_TPM2_RC_Unmarshal

Tss2_MU_TPM2_CLOCK_ADJUST_Marshal

Tss2_MU_TPM2_CLOCK_ADJUST_Unmarshal

Tss2_MU_TPM2_EO_Marshal

Tss2_MU_TPM2_EO_Unmarshal

Tss2_MU_TPM2_ST_Marshal

Tss2_MU_TPM2_ST_Unmarshal

Tss2_MU_TPM2_SU_Marshal

Tss2_MU_TPM2_SU_Unmarshal

Tss2_MU_TPM2_SE_Marshal

Tss2_MU_TPM2_SE_Unmarshal

Tss2_MU_TPM2_CAP_Marshal

Tss2_MU_TPM2_CAP_Unmarshal

Tss2_MU_TPM2_PT_Marshal

Tss2_MU_TPM2_PT_Unmarshal

Tss2_MU_TPM2_PT_PCR_Marshal

Tss2_MU_TPM2_PT_PCR_Unmarshal

Tss2_MU_TPM2_PS_Marshal

Tss2_MU_TPM2_PS_Unmarshal

Tss2_MU_TPM2_HANDLE_Marshal

Tss2_MU_TPM2_HANDLE_Unmarshal

Tss2_MU_TPM2_HT_Marshal

Tss2_MU_TPM2_HT_Unmarshal

Tss2_MU_TPM2_RH_Marshal

Tss2_MU_TPM2_RH_Unmarshal

Tss2_MU_TPM2_HC_Marshal

Tss2_MU_TPM2_HC_Unmarshal

Tss2_MU_TPMA_ALGORITHM_Marshal

Tss2_MU_TPMA_ALGORITHM_Unmarshal

Tss2_MU_TPMA_OBJECT_Marshal

Tss2_MU_TPMA_OBJECT_Unmarshal

Tss2_MU_TPMA_SESSION_Marshal

Tss2_MU_TPMA_SESSION_Unmarshal

Tss2_MU_TPMA_LOCALITY_Marshal

Tss2_MU_TPMA_LOCALITY_Unmarshal

Tss2_MU_TPMA_PERMANENT_Marshal

Tss2_MU_TPMA_PERMANENT_Unmarshal

Tss2_MU_TPMA_STARTUP_CLEAR_Marshal

Tss2_MU_TPMA_STARTUP_CLEAR_Unmarshal

Tss2_MU_TPMA_MEMORY_Marshal

Tss2_MU_TPMA_MEMORY_Unmarshal

Tss2_MU_TPMA_CC_Marshal

Tss2_MU_TPMA_CC_Unmarshal

Tss2_MU_TPMA_MODES_Marshal

Tss2_MU_TPMA_MODES_Unmarshal

Tss2_MU_TPMA_X509_KEY_USAGE_Marshal

Tss2_MU_TPMA_X509_KEY_USAGE_Unmarshal

Tss2_MU_TPMI_YES_NO_Marshal

Tss2_MU_TPMI_YES_NO_Unmarshal

Tss2_MU_TPMI_DH_OBJECT_Marshal

Tss2_MU_TPMI_DH_OBJECT_Unmarshal

Tss2_MU_TPMI_DH_PARENT_Marshal

Tss2_MU_TPMI_DH_PARENT_Unmarshal

Tss2_MU_TPMI_DH_PERSISTENT_Marshal

Tss2_MU_TPMI_DH_PERSISTENT_Unmarshal

Tss2_MU_TPMI_DH_ENTITY_Marshal

Tss2_MU_TPMI_DH_ENTITY_Unmarshal

Tss2_MU_TPMI_DH_PCR_Marshal

Tss2_MU_TPMI_DH_PCR_Unmarshal

Tss2_MU_TPMI_SH_AUTH_SESSION_Marshal

Tss2_MU_TPMI_SH_AUTH_SESSION_Unmarshal

Tss2_MU_TPMI_SH_HMAC_Marshal

Tss2_MU_TPMI_SH_HMAC_Unmarshal

Tss2_MU_TPMI_SH_POLICY_Marshal

Tss2_MU_TPMI_SH_POLICY_Unmarshal

Tss2_MU_TPMI_DH_CONTEXT_Marshal

Tss2_MU_TPMI_DH_CONTEXT_Unmarshal

Tss2_MU_TPMI_DH_SAVED_Marshal

Tss2_MU_TPMI_DH_SAVED_Unmarshal

Tss2_MU_TPMI_RH_HIERARCHY_Marshal

Tss2_MU_TPMI_RH_HIERARCHY_Unmarshal

Tss2_MU_TPMI_RH_ENABLES_Marshal

Tss2_MU_TPMI_RH_ENABLES_Unmarshal

Tss2_MU_TPMI_RH_HIERARCHY_AUTH_Marshal

Tss2_MU_TPMI_RH_HIERARCHY_AUTH_Unmarshal

Tss2_MU_TPMI_RH_HIERARCHY_POLICY_Marshal

Tss2_MU_TPMI_RH_HIERARCHY_POLICY_Unmarshal

Tss2_MU_TPMI_RH_PLATFORM_Marshal

Tss2_MU_TPMI_RH_PLATFORM_Unmarshal

Tss2_MU_TPMI_RH_OWNER_Marshal

Tss2_MU_TPMI_RH_OWNER_Unmarshal

Tss2_MU_TPMI_RH_ENDORSEMENT_Marshal

Tss2_MU_TPMI_RH_ENDORSEMENT_Unmarshal

Tss2_MU_TPMI_RH_PROVISION_Marshal

Tss2_MU_TPMI_RH_PROVISION_Unmarshal

Tss2_MU_TPMI_RH_CLEAR_Marshal

Tss2_MU_TPMI_RH_CLEAR_Unmarshal

Tss2_MU_TPMI_RH_NV_AUTH_Marshal

Tss2_MU_TPMI_RH_NV_AUTH_Unmarshal

Tss2_MU_TPMI_RH_LOCKOUT_Marshal

Tss2_MU_TPMI_RH_LOCKOUT_Unmarshal

Tss2_MU_TPMI_RH_NV_INDEX_Marshal

Tss2_MU_TPMI_RH_NV_INDEX_Unmarshal

Tss2_MU_TPMI_RH_AC_Marshal

Tss2_MU_TPMI_RH_AC_Unmarshal

Tss2_MU_TPMI_RH_ACT_Marshal

Tss2_MU_TPMI_RH_ACT_Unmarshal

Tss2_MU_TPMI_ALG_HASH_Marshal

Tss2_MU_TPMI_ALG_HASH_Unmarshal

Tss2_MU_TPMI_ALG_ASYM_Marshal

Tss2_MU_TPMI_ALG_ASYM_Unmarshal

Tss2_MU_TPMI_ALG_SYM_Marshal

Tss2_MU_TPMI_ALG_SYM_Unmarshal

Tss2_MU_TPMI_ALG_SYM_OBJECT_Marshal

Tss2_MU_TPMI_ALG_SYM_OBJECT_Unmarshal

Tss2_MU_TPMI_ALG_SYM_MODE_Marshal

Tss2_MU_TPMI_ALG_SYM_MODE_Unmarshal

Tss2_MU_TPMI_ALG_KDF_Marshal

Tss2_MU_TPMI_ALG_KDF_Unmarshal

Tss2_MU_TPMI_ALG_SIG_SCHEME_Marshal

Tss2_MU_TPMI_ALG_SIG_SCHEME_Unmarshal

Tss2_MU_TPMI_ECC_KEY_EXCHANGE_Marshal

Tss2_MU_TPMI_ECC_KEY_EXCHANGE_Unmarshal

Tss2_MU_TPMI_ST_COMMAND_TAG_Marshal

Tss2_MU_TPMI_ST_COMMAND_TAG_Unmarshal

Tss2_MU_TPMI_ALG_MAC_SCHEME_Marshal

Tss2_MU_TPMI_ALG_MAC_SCHEME_Unmarshal

Tss2_MU_TPMI_ALG_CIPHER_MODE_Marshal

Tss2_MU_TPMI_ALG_CIPHER_MODE_Unmarshal

Tss2_MU_TPMS_EMPTY_Marshal

Tss2_MU_TPMS_EMPTY_Unmarshal

Tss2_MU_TPMS_ALGORITHM_DESCRIPTION_Marshal

Tss2_MU_TPMS_ALGORITHM_DESCRIPTION_Unmarshal

Tss2_MU_TPMU_HA_Marshal

Tss2_MU_TPMU_HA_Unmarshal

Tss2_MU_TPMT_HA_Marshal

Tss2_MU_TPMT_HA_Unmarshal

Tss2_MU_TPM2B_DIGEST_Marshal

Tss2_MU_TPM2B_DIGEST_Unmarshal

Tss2_MU_TPM2B_DATA_Marshal

Tss2_MU_TPM2B_DATA_Unmarshal

Tss2_MU_TPM2B_NONCE_Marshal

Tss2_MU_TPM2B_NONCE_Unmarshal

Tss2_MU_TPM2B_AUTH_Marshal

Tss2_MU_TPM2B_AUTH_Unmarshal

Tss2_MU_TPM2B_OPERAND_Marshal

Tss2_MU_TPM2B_OPERAND_Unmarshal

Tss2_MU_TPM2B_EVENT_Marshal

Tss2_MU_TPM2B_EVENT_Unmarshal

Tss2_MU_TPM2B_MAX_BUFFER_Marshal

Tss2_MU_TPM2B_MAX_BUFFER_Unmarshal

Tss2_MU_TPM2B_MAX_NV_BUFFER_Marshal

Tss2_MU_TPM2B_MAX_NV_BUFFER_Unmarshal

Tss2_MU_TPM2B_TIMEOUT_Marshal

Tss2_MU_TPM2B_TIMEOUT_Unmarshal

Tss2_MU_TPM2B_IV_Marshal

Tss2_MU_TPM2B_IV_Unmarshal

Tss2_MU_TPMU_NAME_Marshal

Tss2_MU_TPMU_NAME_Unmarshal

Tss2_MU_TPM2B_NAME_Marshal

Tss2_MU_TPM2B_NAME_Unmarshal

Tss2_MU_TPMS_PCR_SELECT_Marshal

Tss2_MU_TPMS_PCR_SELECT_Unmarshal

Tss2_MU_TPMS_PCR_SELECTION_Marshal

Tss2_MU_TPMS_PCR_SELECTION_Unmarshal

Tss2_MU_TPMT_TK_CREATION_Marshal

Tss2_MU_TPMT_TK_CREATION_Unmarshal

Tss2_MU_TPMT_TK_VERIFIED_Marshal

Tss2_MU_TPMT_TK_VERIFIED_Unmarshal

Tss2_MU_TPMT_TK_AUTH_Marshal

Tss2_MU_TPMT_TK_AUTH_Unmarshal

Tss2_MU_TPMT_TK_HASHCHECK_Marshal

Tss2_MU_TPMT_TK_HASHCHECK_Unmarshal

Tss2_MU_TPMS_ALG_PROPERTY_Marshal

Tss2_MU_TPMS_ALG_PROPERTY_Unmarshal

Tss2_MU_TPMS_TAGGED_PROPERTY_Marshal

Tss2_MU_TPMS_TAGGED_PROPERTY_Unmarshal

Tss2_MU_TPMS_TAGGED_PCR_SELECT_Marshal

Tss2_MU_TPMS_TAGGED_PCR_SELECT_Unmarshal

Tss2_MU_TPMS_TAGGED_POLICY_Marshal

Tss2_MU_TPMS_TAGGED_POLICY_Unmarshal

Tss2_MU_TPML_CC_Marshal

Tss2_MU_TPML_CC_Unmarshal

Tss2_MU_TPML_CCA_Marshal

Tss2_MU_TPML_CCA_Unmarshal

Tss2_MU_TPML_ALG_Marshal

Tss2_MU_TPML_ALG_Unmarshal

Tss2_MU_TPML_HANDLE_Marshal

Tss2_MU_TPML_HANDLE_Unmarshal

Tss2_MU_TPML_DIGEST_Marshal

Tss2_MU_TPML_DIGEST_Unmarshal

Tss2_MU_TPML_DIGEST_VALUES_Marshal

Tss2_MU_TPML_DIGEST_VALUES_Unmarshal

Tss2_MU_TPML_PCR_SELECTION_Marshal

Tss2_MU_TPML_PCR_SELECTION_Unmarshal

Tss2_MU_TPML_ALG_PROPERTY_Marshal

Tss2_MU_TPML_ALG_PROPERTY_Unmarshal

Tss2_MU_TPML_TAGGED_TPM_PROPERTY_Marshal

Tss2_MU_TPML_TAGGED_TPM_PROPERTY_Unmarshal

Tss2_MU_TPML_TAGGED_PCR_PROPERTY_Marshal

Tss2_MU_TPML_TAGGED_PCR_PROPERTY_Unmarshal

Tss2_MU_TPML_ECC_CURVE_Marshal

Tss2_MU_TPML_ECC_CURVE_Unmarshal

Tss2_MU_TPML_TAGGED_POLICY_Marshal

Tss2_MU_TPML_TAGGED_POLICY_Unmarshal

Tss2_MU_TPMU_CAPABILITIES_Marshal

Tss2_MU_TPMU_CAPABILITIES_Unmarshal

Tss2_MU_TPMS_CAPABILITY_DATA_Marshal

Tss2_MU_TPMS_CAPABILITY_DATA_Unmarshal

Tss2_MU_TPMS_CLOCK_INFO_Marshal

Tss2_MU_TPMS_CLOCK_INFO_Unmarshal

Tss2_MU_TPMS_TIME_INFO_Marshal

Tss2_MU_TPMS_TIME_INFO_Unmarshal

Tss2_MU_TPMS_TIME_ATTEST_INFO_Marshal

Tss2_MU_TPMS_TIME_ATTEST_INFO_Unmarshal

Tss2_MU_TPMS_CERTIFY_INFO_Marshal

Tss2_MU_TPMS_CERTIFY_INFO_Unmarshal

Tss2_MU_TPMS_QUOTE_INFO_Marshal

Tss2_MU_TPMS_QUOTE_INFO_Unmarshal

Tss2_MU_TPMS_COMMAND_AUDIT_INFO_Marshal

Tss2_MU_TPMS_COMMAND_AUDIT_INFO_Unmarshal

Tss2_MU_TPMS_SESSION_AUDIT_INFO_Marshal

Tss2_MU_TPMS_SESSION_AUDIT_INFO_Unmarshal

Tss2_MU_TPMS_CREATION_INFO_Marshal

Tss2_MU_TPMS_CREATION_INFO_Unmarshal

Tss2_MU_TPMS_NV_CERTIFY_INFO_Marshal

Tss2_MU_TPMS_NV_CERTIFY_INFO_Unmarshal

Tss2_MU_TPMI_ST_ATTEST_Marshal

Tss2_MU_TPMI_ST_ATTEST_Unmarshal

Tss2_MU_TPMU_ATTEST_Marshal

Tss2_MU_TPMU_ATTEST_Unmarshal

Tss2_MU_TPMS_ATTEST_Marshal

Tss2_MU_TPMS_ATTEST_Unmarshal

Tss2_MU_TPM2B_ATTEST_Marshal

Tss2_MU_TPM2B_ATTEST_Unmarshal

Tss2_MU_TPMS_AUTH_COMMAND_Marshal

Tss2_MU_TPMS_AUTH_COMMAND_Unmarshal

Tss2_MU_TPMS_AUTH_RESPONSE_Marshal

Tss2_MU_TPMS_AUTH_RESPONSE_Unmarshal

Tss2_MU_TPMI_AES_KEY_BITS_Marshal

Tss2_MU_TPMI_AES_KEY_BITS_Unmarshal

Tss2_MU_TPMI_SM4_KEY_BITS_Marshal

Tss2_MU_TPMI_SM4_KEY_BITS_Unmarshal

Tss2_MU_TPMI_CAMELLIA_KEY_BITS_Marshal

Tss2_MU_TPMI_CAMELLIA_KEY_BITS_Unmarshal

Tss2_MU_TPMU_SYM_KEY_BITS_Marshal

Tss2_MU_TPMU_SYM_KEY_BITS_Unmarshal

Tss2_MU_TPMU_SYM_MODE_Marshal

Tss2_MU_TPMU_SYM_MODE_Unmarshal

Tss2_MU_TPMT_SYM_DEF_Marshal

Tss2_MU_TPMT_SYM_DEF_Unmarshal

Tss2_MU_TPMT_SYM_DEF_OBJECT_Marshal

Tss2_MU_TPMT_SYM_DEF_OBJECT_Unmarshal

Tss2_MU_TPM2B_SYM_KEY_Marshal

Tss2_MU_TPM2B_SYM_KEY_Unmarshal

Tss2_MU_TPMS_SYMCIPHER_PARMS_Marshal

Tss2_MU_TPMS_SYMCIPHER_PARMS_Unmarshal

Tss2_MU_TPM2B_LABEL_Marshal

Tss2_MU_TPM2B_LABEL_Unmarshal

Tss2_MU_TPMS_DERIVE_Marshal

Tss2_MU_TPMS_DERIVE_Unmarshal

Tss2_MU_TPM2B_DERIVE_Marshal

Tss2_MU_TPM2B_DERIVE_Unmarshal

Tss2_MU_TPMU_SENSITIVE_CREATE_Marshal

Tss2_MU_TPMU_SENSITIVE_CREATE_Unmarshal

Tss2_MU_TPM2B_SENSITIVE_DATA_Marshal

Tss2_MU_TPM2B_SENSITIVE_DATA_Unmarshal

Tss2_MU_TPMS_SENSITIVE_CREATE_Marshal

Tss2_MU_TPMS_SENSITIVE_CREATE_Unmarshal

Tss2_MU_TPM2B_SENSITIVE_CREATE_Marshal

Tss2_MU_TPM2B_SENSITIVE_CREATE_Unmarshal

Tss2_MU_TPMS_SCHEME_HASH_Marshal

Tss2_MU_TPMS_SCHEME_HASH_Unmarshal

Tss2_MU_TPMS_SCHEME_ECDAA_Marshal

Tss2_MU_TPMS_SCHEME_ECDAA_Unmarshal

Tss2_MU_TPMI_ALG_KEYEDHASH_SCHEME_Marshal

Tss2_MU_TPMI_ALG_KEYEDHASH_SCHEME_Unmarshal

Tss2_MU_TPMS_SCHEME_HMAC_Marshal

Tss2_MU_TPMS_SCHEME_HMAC_Unmarshal

Tss2_MU_TPMS_SCHEME_XOR_Marshal

Tss2_MU_TPMS_SCHEME_XOR_Unmarshal

Tss2_MU_TPMU_SCHEME_KEYEDHASH_Marshal

Tss2_MU_TPMU_SCHEME_KEYEDHASH_Unmarshal

Tss2_MU_TPMT_KEYEDHASH_SCHEME_Marshal

Tss2_MU_TPMT_KEYEDHASH_SCHEME_Unmarshal

Tss2_MU_TPMS_SIG_SCHEME_RSASSA_Marshal

Tss2_MU_TPMS_SIG_SCHEME_RSASSA_Unmarshal

Tss2_MU_TPMS_SIG_SCHEME_RSAPSS_Marshal

Tss2_MU_TPMS_SIG_SCHEME_RSAPSS_Unmarshal

Tss2_MU_TPMS_SIG_SCHEME_ECDSA_Marshal

Tss2_MU_TPMS_SIG_SCHEME_ECDSA_Unmarshal

Tss2_MU_TPMS_SIG_SCHEME_SM2_Marshal

Tss2_MU_TPMS_SIG_SCHEME_SM2_Unmarshal

Tss2_MU_TPMS_SIG_SCHEME_ECSCHNORR_Marshal

Tss2_MU_TPMS_SIG_SCHEME_ECSCHNORR_Unmarshal

Tss2_MU_TPMS_SIG_SCHEME_ECDAA_Marshal

Tss2_MU_TPMS_SIG_SCHEME_ECDAA_Unmarshal

Tss2_MU_TPMU_SIG_SCHEME_Marshal

Tss2_MU_TPMU_SIG_SCHEME_Unmarshal

Tss2_MU_TPMT_SIG_SCHEME_Marshal

Tss2_MU_TPMT_SIG_SCHEME_Unmarshal

Tss2_MU_TPMS_ENC_SCHEME_OAEP_Marshal

Tss2_MU_TPMS_ENC_SCHEME_OAEP_Unmarshal

Tss2_MU_TPMS_ENC_SCHEME_RSAES_Marshal

Tss2_MU_TPMS_ENC_SCHEME_RSAES_Unmarshal

Tss2_MU_TPMS_KEY_SCHEME_ECDH_Marshal

Tss2_MU_TPMS_KEY_SCHEME_ECDH_Unmarshal

Tss2_MU_TPMS_KEY_SCHEME_ECMQV_Marshal

Tss2_MU_TPMS_KEY_SCHEME_ECMQV_Unmarshal

Tss2_MU_TPMS_SCHEME_MGF1_Marshal

Tss2_MU_TPMS_SCHEME_MGF1_Unmarshal

Tss2_MU_TPMS_SCHEME_KDF1_SP800_56A_Marshal

Tss2_MU_TPMS_SCHEME_KDF1_SP800_56A_Unmarshal

Tss2_MU_TPMS_SCHEME_KDF2_Marshal

Tss2_MU_TPMS_SCHEME_KDF2_Unmarshal

Tss2_MU_TPMS_SCHEME_KDF1_SP800_108_Marshal

Tss2_MU_TPMS_SCHEME_KDF1_SP800_108_Unmarshal

Tss2_MU_TPMU_KDF_SCHEME_Marshal

Tss2_MU_TPMU_KDF_SCHEME_Unmarshal

Tss2_MU_TPMT_KDF_SCHEME_Marshal

Tss2_MU_TPMT_KDF_SCHEME_Unmarshal

Tss2_MU_TPMI_ALG_ASYM_SCHEME_Marshal

Tss2_MU_TPMI_ALG_ASYM_SCHEME_Unmarshal

Tss2_MU_TPMU_ASYM_SCHEME_Marshal

Tss2_MU_TPMU_ASYM_SCHEME_Unmarshal

Tss2_MU_TPMT_ASYM_SCHEME_Marshal

Tss2_MU_TPMT_ASYM_SCHEME_Unmarshal

Tss2_MU_TPMI_ALG_RSA_SCHEME_Marshal

Tss2_MU_TPMI_ALG_RSA_SCHEME_Unmarshal

Tss2_MU_TPMT_RSA_SCHEME_Marshal

Tss2_MU_TPMT_RSA_SCHEME_Unmarshal

Tss2_MU_TPMI_ALG_RSA_DECRYPT_Marshal

Tss2_MU_TPMI_ALG_RSA_DECRYPT_Unmarshal

Tss2_MU_TPMT_RSA_DECRYPT_Marshal

Tss2_MU_TPMT_RSA_DECRYPT_Unmarshal

Tss2_MU_TPM2B_PUBLIC_KEY_RSA_Marshal

Tss2_MU_TPM2B_PUBLIC_KEY_RSA_Unmarshal

Tss2_MU_TPMI_RSA_KEY_BITS_Marshal

Tss2_MU_TPMI_RSA_KEY_BITS_Unmarshal

Tss2_MU_TPM2B_PRIVATE_KEY_RSA_Marshal

Tss2_MU_TPM2B_PRIVATE_KEY_RSA_Unmarshal

Tss2_MU_TPM2B_ECC_PARAMETER_Marshal

Tss2_MU_TPM2B_ECC_PARAMETER_Unmarshal

Tss2_MU_TPMS_ECC_POINT_Marshal

Tss2_MU_TPMS_ECC_POINT_Unmarshal

Tss2_MU_TPM2B_ECC_POINT_Marshal

Tss2_MU_TPM2B_ECC_POINT_Unmarshal

Tss2_MU_TPMI_ALG_ECC_SCHEME_Marshal

Tss2_MU_TPMI_ALG_ECC_SCHEME_Unmarshal

Tss2_MU_TPMI_ECC_CURVE_Marshal

Tss2_MU_TPMI_ECC_CURVE_Unmarshal

Tss2_MU_TPMT_ECC_SCHEME_Marshal

Tss2_MU_TPMT_ECC_SCHEME_Unmarshal

Tss2_MU_TPMS_ALGORITHM_DETAIL_ECC_Marshal

Tss2_MU_TPMS_ALGORITHM_DETAIL_ECC_Unmarshal

Tss2_MU_TPMS_SIGNATURE_RSA_Marshal

Tss2_MU_TPMS_SIGNATURE_RSA_Unmarshal

Tss2_MU_TPMS_SIGNATURE_RSASSA_Marshal

Tss2_MU_TPMS_SIGNATURE_RSASSA_Unmarshal

Tss2_MU_TPMS_SIGNATURE_RSAPSS_Marshal

Tss2_MU_TPMS_SIGNATURE_RSAPSS_Unmarshal

Tss2_MU_TPMS_SIGNATURE_ECC_Marshal

Tss2_MU_TPMS_SIGNATURE_ECC_Unmarshal

Tss2_MU_TPMS_SIGNATURE_ECDSA_Marshal

Tss2_MU_TPMS_SIGNATURE_ECDSA_Unmarshal

Tss2_MU_TPMS_SIGNATURE_ECDAA_Marshal

Tss2_MU_TPMS_SIGNATURE_ECDAA_Unmarshal

Tss2_MU_TPMS_SIGNATURE_SM2_Marshal

Tss2_MU_TPMS_SIGNATURE_SM2_Unmarshal

Tss2_MU_TPMS_SIGNATURE_ECSCHNORR_Marshal

Tss2_MU_TPMS_SIGNATURE_ECSCHNORR_Unmarshal

Tss2_MU_TPMU_SIGNATURE_Marshal

Tss2_MU_TPMU_SIGNATURE_Unmarshal

Tss2_MU_TPMT_SIGNATURE_Marshal

Tss2_MU_TPMT_SIGNATURE_Unmarshal

Tss2_MU_TPMU_ENCRYPTED_SECRET_Marshal

Tss2_MU_TPMU_ENCRYPTED_SECRET_Unmarshal

Tss2_MU_TPM2B_ENCRYPTED_SECRET_Marshal

Tss2_MU_TPM2B_ENCRYPTED_SECRET_Unmarshal

Tss2_MU_TPMI_ALG_PUBLIC_Marshal

Tss2_MU_TPMI_ALG_PUBLIC_Unmarshal

Tss2_MU_TPMU_PUBLIC_ID_Marshal

Tss2_MU_TPMU_PUBLIC_ID_Unmarshal

Tss2_MU_TPMS_KEYEDHASH_PARMS_Marshal

Tss2_MU_TPMS_KEYEDHASH_PARMS_Unmarshal

Tss2_MU_TPMS_ASYM_PARMS_Marshal

Tss2_MU_TPMS_ASYM_PARMS_Unmarshal

Tss2_MU_TPMS_RSA_PARMS_Marshal

Tss2_MU_TPMS_RSA_PARMS_Unmarshal

Tss2_MU_TPMS_ECC_PARMS_Marshal

Tss2_MU_TPMS_ECC_PARMS_Unmarshal

Tss2_MU_TPMU_PUBLIC_PARMS_Marshal

Tss2_MU_TPMU_PUBLIC_PARMS_Unmarshal

Tss2_MU_TPMT_PUBLIC_PARMS_Marshal

Tss2_MU_TPMT_PUBLIC_PARMS_Unmarshal

Tss2_MU_TPMT_PUBLIC_Marshal

Tss2_MU_TPMT_PUBLIC_Unmarshal

Tss2_MU_TPM2B_PUBLIC_Marshal

Tss2_MU_TPM2B_PUBLIC_Unmarshal

Tss2_MU_TPM2B_TEMPLATE_Marshal

Tss2_MU_TPM2B_TEMPLATE_Unmarshal

Tss2_MU_TPM2B_PRIVATE_VENDOR_SPECIFIC_Marshal

Tss2_MU_TPM2B_PRIVATE_VENDOR_SPECIFIC_Unmarshal

Tss2_MU_TPMU_SENSITIVE_COMPOSITE_Marshal

Tss2_MU_TPMU_SENSITIVE_COMPOSITE_Unmarshal

Tss2_MU_TPMT_SENSITIVE_Marshal

Tss2_MU_TPMT_SENSITIVE_Unmarshal

Tss2_MU_TPM2B_SENSITIVE_Marshal

Tss2_MU_TPM2B_SENSITIVE_Unmarshal

Tss2_MU__PRIVATE_Marshal

Tss2_MU__PRIVATE_Unmarshal

Tss2_MU_TPM2B_PRIVATE_Marshal

Tss2_MU_TPM2B_PRIVATE_Unmarshal

Tss2_MU_TPMS_ID_OBJECT_Marshal

Tss2_MU_TPMS_ID_OBJECT_Unmarshal

Tss2_MU_TPM2B_ID_OBJECT_Marshal

Tss2_MU_TPM2B_ID_OBJECT_Unmarshal

Tss2_MU_TPM2_NV_INDEX_Marshal

Tss2_MU_TPM2_NV_INDEX_Unmarshal

Tss2_MU_TPM2_NT_Marshal

Tss2_MU_TPM2_NT_Unmarshal

Tss2_MU_TPMS_NV_PIN_COUNTER_PARAMETERS_Marshal

Tss2_MU_TPMS_NV_PIN_COUNTER_PARAMETERS_Unmarshal

Tss2_MU_TPMA_NV_Marshal

Tss2_MU_TPMA_NV_Unmarshal

Tss2_MU_TPMS_NV_PUBLIC_Marshal

Tss2_MU_TPMS_NV_PUBLIC_Unmarshal

Tss2_MU_TPM2B_NV_PUBLIC_Marshal

Tss2_MU_TPM2B_NV_PUBLIC_Unmarshal

Tss2_MU_TPM2B_CONTEXT_SENSITIVE_Marshal

Tss2_MU_TPM2B_CONTEXT_SENSITIVE_Unmarshal

Tss2_MU_TPMS_CONTEXT_DATA_Marshal

Tss2_MU_TPMS_CONTEXT_DATA_Unmarshal

Tss2_MU_TPM2B_CONTEXT_DATA_Marshal

Tss2_MU_TPM2B_CONTEXT_DATA_Unmarshal

Tss2_MU_TPMS_CONTEXT_Marshal

Tss2_MU_TPMS_CONTEXT_Unmarshal

Tss2_MU_TPMS_CREATION_DATA_Marshal

Tss2_MU_TPMS_CREATION_DATA_Unmarshal

Tss2_MU_TPM2B_CREATION_DATA_Marshal

Tss2_MU_TPM2B_CREATION_DATA_Unmarshal

Tss2_MU_TPMS_ACT_DATA_Marshal

Tss2_MU_TPMS_ACT_DATA_Unmarshal

Tss2_MU_TPMA_ACT_Marshal

Tss2_MU_TPMA_ACT_Unmarshal

Tss2_MU_TPM2_AT_Marshal

Tss2_MU_TPM2_AT_Unmarshal

Tss2_MU_TPMS_NV_DIGEST_CERTIFY_INFO_Marshal

Tss2_MU_TPMS_NV_DIGEST_CERTIFY_INFO_Unmarshal

Tss2_MU_TPMI_TDES_KEY_BITS_Marshal

Tss2_MU_TPMI_TDES_KEY_BITS_Unmarshal

Tss2_MU_TPMS_AC_OUTPUT_Marshal

Tss2_MU_TPMS_AC_OUTPUT_Unmarshal

Tss2_MU_TPML_ACT_DATA_Marshal

Tss2_MU_TPML_ACT_DATA_Unmarshal

Tss2_MU_TPML_AC_CAPABILITIES_Marshal

Tss2_MU_TPML_AC_CAPABILITIES_Unmarshal

HiTSS支持的命令传输接口列表

Tss2_TctiLdr_Initialize

Tss2_TctiLdr_Initialize_Ex

Tss2_TctiLdr_Finalize

Tss2_TctiLdr_GetInfo

Tss2_TctiLdr_FreeInfo

---
*2026-04-22T15:54:00.674Z*