# Data Augmentation Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-dataaugmentationkit-6101`  |  **DocID**: `9598d3e4703c4a94b8a998fbeb230ede`

---

# Data Augmentation Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  新增API |  NA |  类名：knowledgeProcessor；

 API声明：interface KnowledgeProcessConfig

 差异内容：interface KnowledgeProcessConfig

  |  api/@hms.data.knowledgeProcessor.d.ts |  
 新增API |  NA |  类名：KnowledgeProcessConfig；

 API声明：mode: KnowledgeProcessMode;

 差异内容：mode: KnowledgeProcessMode;

  |  api/@hms.data.knowledgeProcessor.d.ts |  
 新增API |  NA |  类名：knowledgeProcessor；

 API声明：enum KnowledgeProcessMode

 差异内容：enum KnowledgeProcessMode

  |  api/@hms.data.knowledgeProcessor.d.ts |  
 新增API |  NA |  类名：KnowledgeProcessMode；

 API声明：INVERTED_INDEX = 1

 差异内容：INVERTED_INDEX = 1

  |  api/@hms.data.knowledgeProcessor.d.ts |  
 新增API |  NA |  类名：KnowledgeProcessMode；

 API声明：INVERTED_INDEX_VECTORIZATION = 3

 差异内容：INVERTED_INDEX_VECTORIZATION = 3

  |  api/@hms.data.knowledgeProcessor.d.ts |  
 新增API |  NA |  类名：KnowledgeProcessor；

 API声明：startProcess(config: KnowledgeProcessConfig): Promise<void>;

 差异内容：startProcess(config: KnowledgeProcessConfig): Promise<void>;

  |  api/@hms.data.knowledgeProcessor.d.ts |  
 新增API |  NA |  类名：KnowledgeProcessor；

 API声明：stopProcess(): Promise<void>;

 差异内容：stopProcess(): Promise<void>;

  |  api/@hms.data.knowledgeProcessor.d.ts |  
 新增API |  NA |  类名：knowledgeProcessor；

 API声明：function cleanKnowledgeData(context: common.Context, config: KnowledgeProcessorConfig): Promise<void>;

 差异内容：function cleanKnowledgeData(context: common.Context, config: KnowledgeProcessorConfig): Promise<void>;

  |  api/@hms.data.knowledgeProcessor.d.ts |