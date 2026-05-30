# （可选）同步云端代码至DevEco Studio工程

> **分区**: Guides  |  **Slug**: `agc-harmonyos-clouddev-sync`  |  **DocID**: `702c2abf65434e618ab9adc36bafff44`

---

# （可选）同步云端代码至DevEco Studio工程

 DevEco Studio还支持您将AGC云端当前项目下的代码同步至本地工程，包括之前从本地部署到AGC云端的代码、以及在AGC云端编写的代码，以保证云端和本地的版本一致性，方便您的日常开发。

 云端代码同步目前支持以下模式：[仅同步云函数/云对象](#section588213529814)、[仅同步云数据库](#section474014335350)、[一键同步云侧代码](#section1198316575339)。

 #### 同步云函数/云对象

 对于使用DevEco Studio 4.1 Canary 2之前的版本部署的函数，同步下来的是JavaScript代码。

   #### [h2]同步单个云函数/云对象

云函数/云对象部署到AGC云端后，如在云端又进行了新改动，您可再将云端的云函数/云对象同步到本地工程。云函数/云对象的同步方式一致，下文以云对象为例进行说明。

 
右击云对象目录，选择“Sync '*云对象名*'”。下文以云对象“id-generator”为例。

 在确认弹框中点击“Overwrite”，AGC云端的云对象“id-generator”将覆盖更新本地云对象“id-generator”。

 等待同步完成，“cloudfunctions”目录下将生成从云端同步下来的云对象“id-generator”，同时将本地原云对象“id-generator”备份在同路径下。 后续如执行部署或调试，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。

  

 

 
  #### [h2]批量同步云函数/云对象

批量同步云函数/云对象即将AGC云端当前项目下的所有云函数/云对象同步至本地工程。

 
右击“cloudfunctions”目录，选择“Sync Cloud Functions”。

 

 - 弹窗提示您本地工程下存在同名云函数/云对象。
选择“Skip”，同步时将跳过本地同名云函数/云对象。
- 选择“Overwrite”，AGC云端的云函数/云对象将覆盖更新本地同名云函数/云对象。

 

 如选择“Skip”，等待同步完成后，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象，本地已存在的不同步。如下图，“cloudfunctions”目录下新增了云端同步下来的“test-cloud-function”，上图中本地已存在的云函数/云对象未被覆盖更新。

 

 

 如选择“Overwrite”，等待同步完成后，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象；本地同名云函数/云对象也被覆盖更新，同时更新前的原云函数/云对象会备份在同路径下。如下图，“cloudfunctions”目录下新增了云端同步下来的“test-cloud-function”，本地已存在的几个云函数/云对象也被覆盖更新，并且均生成了备份文件“xxxx-*备份时间*.backup”。

  后续如执行部署或调试，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。

  

 

 
  #### 同步云数据库

 目前仅支持同步对象类型。

   #### [h2]同步单个对象类型

对象类型部署到AGC云端后，如又发生了新改动，您可再将云端的对象类型同步到本地。

 
右击对象类型JSON文件（以“objecttype1.json”为例），选择“Sync 'objecttype1.json'”。

 在确认弹框中点击“Overwrite”，AGC云端的对象类型“objecttype1.json”将覆盖更新本地对象类型“objecttype1.json”。

 - 等待同步完成，“objecttype”目录下将生成从云端同步下来的对象类型“objecttype1.json”。
如果云端和本地的同名对象类型内容存在差异，则还会将本地原对象类型备份在同路径下。
- 如果云端和本地的同名对象类型内容完全一致，则不生成备份。

  后续如执行部署，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。

  

 
  #### [h2]批量同步对象类型

您可以将AGC云端当前项目下所有的对象类型一键同步至本地。

 
右击“objecttype”目录，选择“Sync Object Type”。

 

- 弹窗提示您本地工程下已存在同名对象类型，如下图“Post.json”与“objecttype1.json”。
选择“Skip”，同步时将跳过本地同名对象类型。
- 选择“Overwrite”，AGC云端的对象类型将覆盖更新本地同名对象类型。

 

 如选择“Skip”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的本项目下所有对象类型，本地已存在的不同步。如下图，“objecttype”目录下新增了云端同步下来的“test_object.json”，本地已存在的“Post.json”与“objecttype1.json”未被覆盖更新。

 

 - 如选择“Overwrite”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的所有对象类型，本地已存在的对象类型也被覆盖更新。
如果云端和本地的同名对象类型内容存在差异，则还会将本地原对象类型备份在同路径下。
- 如果云端和本地的同名对象类型内容完全一致，则不生成备份。

 如下图，“objecttype”目录下生成了“test_object.json”、“Post.json”与“objecttype1.json”三个对象类型文件，其中：“test_object.json”为从云端新同步下来的对象类型；“objecttype1.json”本地已存在且与云端内容一致，不生成备份；“Post.json”本地已存在但与云端内容存在差异，因此被覆盖更新，同时原“Post.json”备份为“Post.json-*备份时间*.backup”。 后续如执行部署，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。

   

 
  #### 一键同步云侧代码

 对于使用DevEco Studio 4.1 Canary 2之前的版本部署的函数，同步下来的是JavaScript代码。

  
右击云开发工程（“CloudProgram”），选择“Sync Cloud Program”。

 

 - 弹窗提示您本地工程下已存在同名对象类型/云函数/云对象。
选择“Skip”，同步时将跳过本地同名对象类型/云函数/云对象。
- 选择“Overwrite”，AGC云端的对象类型/云函数/云对象将覆盖更新本地同名对象类型/云函数/云对象。

  

 

 如选择“Skip”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的本项目下所有对象类型，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象，本地已存在的云函数/云对象/对象类型均不同步。如下图：

 
- “objecttype”目录下新增了云端同步下来的“test_object.json”，本地已存在的“Post.json”与“objecttype1.json”未被覆盖更新。
- “cloudfunctions”目录下生成了从云端同步下来的“test-cloud-function”，本地已存在的“id-generator”、“my-cloud-function”与“my-cloud-object”未被覆盖更新。

 

 

 - 如选择“Overwrite”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的本项目下所有对象类型，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象，本地已存在的云函数/云对象/对象类型也被覆盖更新。
如果云端和本地的同名对象类型内容存在差异，则还会将本地原对象类型备份在同路径下。
- 如果云端和本地的同名对象类型内容完全一致，则不生成备份。
- 无论云端和本地的同名云函数/云对象代码是否一致，均会将本地原云函数/云对象备份在同路径下。

 如下图：

 
- “objecttype”目录下生成了“test _object.json”、“Post.json”与“objecttype1.json”三个对象类型文件，其中：“test _object.json”为从云端新同步下来的对象类型；“Post.json”本地已存在且与云端内容一致，不生成备份；“objecttype1.json”本地已存在但与云端内容存在差异，因此被覆盖更新，同时原“objecttype1.json”备份为“objecttype1.json-*备份时间*.backup”。
“cloudfunctions”目录下生成了从云端同步下来的“test-cloud-function”，本地已存在的“id-generator”、“my-cloud-function”与“my-cloud-object”也被覆盖更新，并且均生成了备份文件“xxxx-*备份时间*.backup”。 后续如执行部署或调试，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。

---
*Updated: 2026-04-24 01:27:10*
