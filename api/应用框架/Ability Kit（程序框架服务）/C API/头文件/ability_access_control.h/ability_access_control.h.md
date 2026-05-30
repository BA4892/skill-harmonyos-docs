# ability_access_control.h

> **分区**: API参考  |  **Slug**: `capi-ability-access-control-h`  |  **DocID**: `5d5d4845fa93481cb422b70a0031e36f`

---

# ability_access_control.h

  #### 概述

声明管理进程访问控制的接口。

 **库：** ability_access_control.so

 **引用文件：** <accesstoken/ability_access_control.h>

 **系统能力：** SystemCapability.Security.AccessToken

 **起始版本：** 12

 **相关模块：** [AbilityAccessControl](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityaccesscontrol)

   #### 汇总

  #### [h2]函数

 名称 描述   [bool OH_AT_CheckSelfPermission(const char *permission)](#oh_at_checkselfpermission) 校验应用是否被授予指定的权限。       #### 函数说明

  #### [h2]OH_AT_CheckSelfPermission()

bool OH_AT_CheckSelfPermission(const char *permission) **描述**

 校验应用是否被授予指定的权限。

 **起始版本：** 12

 **参数：**

  参数项 描述   const char *permission 需要校验的权限名称，合法的权限名取值可在应用权限列表中查询。     **返回：**

  类型 说明   bool true：应用已经被授予该权限。

  false：应用未被授予该权限。

---
*Updated: 2026-04-22 06:42:43*
