# SE(secureElement)错误码

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `errorcode-se`

**DocID**: `a574f758687b41778c4dad3a45206405`

**NodeID**: `0002017757963416845621ebaad179c3`

---

SE(secureElement)错误码

以下仅介绍本模块特有错误码，通用错误码请参考
通用错误码说明文档
。

3300101 SE服务状态异常

错误信息

IllegalStateError, an attempt is made to use an SE session that has been closed.

错误描述

SE服务状态异常。

可能原因

SE服务状态已断开。

处理步骤

关闭SE服务。

重新和SE服务建立连接。

3300102 找不到对应SE安全单元异常

错误信息

NoSuchElementError, the AID on the SE is not available or cannot be selected.

错误描述

找不到对应SE安全单元异常。

可能原因

参数的aid值不正确。

SE通道被占用。

处理步骤

传入正确的aid值后尝试。

关闭SE通道后重新建立连接。

重启设备后尝试。

3300103 无法获取访问控制规则异常

错误信息

SecurityError, the calling application cannot be granted access to this AID or the default applet on this session.

错误描述

无法获取访问控制规则异常。

可能原因

安全单元上没有应用所依赖的访问规则。

处理步骤

写入正确的访问规则到安全单元上。

关闭SE服务后重新建立连接。

3300104 SE芯片IO异常

错误信息

IOError, there is a communication problem to the reader or the SE.

错误描述

SE芯片IO异常。

可能原因

和SE芯片通信异常。

SE芯片状态异常。

处理步骤

关闭SE服务后重新建立连接。

重启设备尝试。

---
*2026-04-22T15:55:02.847Z*