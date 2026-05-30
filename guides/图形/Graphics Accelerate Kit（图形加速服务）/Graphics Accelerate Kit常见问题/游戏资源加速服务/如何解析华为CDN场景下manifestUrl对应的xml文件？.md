# 如何解析华为CDN场景下manifestUrl对应的xml文件？

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `graphics-accelerate-assetdownload-faq-5`  |  **DocID**: `374d36599cc240b9a330020e769a13c5`  |  **NodeID**: `000201775795491975038b646430605b`

---

# 如何解析华为CDN场景下manifestUrl对应的xml文件？

 推荐使用[@ifbear/fast-xml-parser](https://ohpm.openharmony.cn/#/cn/detail/@ifbear%2Ffast-xml-parser)。

 执行如下命令行，安装依赖。

 To use as package dependency $ ohpm install @ifbear/fast-xml-parser 示例代码：

 ```
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

const parser = new XMLParser();
let jObj = parser.parse(XMLdata);
```

---
*Updated: 2026-04-20 01:44:58*
