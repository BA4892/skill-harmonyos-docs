# 未成年人模式开启后USB断连如何解决

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `account-faq-13`  |  **DocID**: `93b13c45d9cf4298a8d47e78a62129b6`  |  **NodeID**: `0002017757956490862194fcb0415546`

---

# 未成年人模式开启后USB断连如何解决

 开发者可以进入设置-系统-开发者选项，点击USB调试开关，会校验健康使用设备密码，校验成功后可解除开发者调试模式限制。

 如开发者重新开启USB调试开关后，发现DevEco Studio工具上hilog日志未恢复到断连之前，请执行“hdc shell hilog -G 16M”来扩大hilog日志缓存区，若hilog日志仍无法完全展示，可取出hilog日志本地查看。更多命令请参见[hilog](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hilog)。

---
*Updated: 2026-04-20 01:52:16*
