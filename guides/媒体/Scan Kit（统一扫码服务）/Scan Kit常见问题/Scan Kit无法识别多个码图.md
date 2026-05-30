# Scan Kit无法识别多个码图

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scan-faq-3`  |  **DocID**: `15ada3e2cbc94df29ff1c11cdc7b9b8e`  |  **NodeID**: `0002017757955269287031d4d1fab120`

---

# Scan Kit无法识别多个码图

       **问题现象**

    实时扫描多个码图时，只返回一个码图结果。

    **解决措施**

    
           检查[ScanOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scanbarcode-api#scanoptions)的enableMultiMode参数是否设置为true，开启多码扫描。

           检查ScanOptions的scanTypes参数是否已设置相应的码类型。

           检查码图类型是否在Scan Kit所定义支持的码图类型内。

           目前实时扫描多个码图时，最多仅支持返回4个码图。

           如还未解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

---
*Updated: 2026-04-20 01:45:26*
