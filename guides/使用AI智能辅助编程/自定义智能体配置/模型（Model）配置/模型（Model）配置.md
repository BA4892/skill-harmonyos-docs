# 模型（Model）配置

> **分区**: Guides  |  **Slug**: `ide-agent-model`  |  **DocID**: `0fef21ccd55d4941a6ddc395c9a02baa`

---

# 模型（Model）配置

 CodeGenie支持通过Anthropic-API、Gemini-API和OpenAI-API协议接入第三方模型，为自定义Agent提供多样化的模型选择。

 从DevEco Studio 6.0.1 Beta1开始，CodeGenie支持通过OpenAI-API协议接入第三方模型。

 从DevEco Studio 6.0.2 Beta1开始，CodeGenie支持通过Anthropic-API、Gemini-API协议接入第三方模型，以及新增Built-in Models内置模型。

 从DevEco Studio 6.0.2 Release（6.0.2.646）开始， 支持通过服务提供商接入三方模型，URL接入时支持使用Ollama协议的三方模型。

 #### 操作步骤

点击界面右上方按钮，或者点击界面右上方**Settings**按钮，选择**Model**，进入配置页面。

 

点击按钮添加模型，当前支持通过Service Provider（服务提供商）和URL两种方式添加。

- 通过服务提供商添加。填写**Name**、**Provider**、**API Key**、**Model**字段后，点击**Add**，校验成功后模型将被添加到列表中。
**Name**：模型名称。
- **Provider**：模型的提供商，可选项包括OpenAI、Gemini、Anthropic、DeepSeek、Alibaba Cloud、Z.ai。
- **API Key**：模型的访问密钥，在提供商网站申请。
- **Model**：模型的标识。

 

 
 
- 通过URL添加。填写**Name**、**Protocol**、**Url**、**API Key**、**Model**字段后，点击**Add**，校验成功后模型将被添加到列表中。
**Name**：模型名称。
- **Url**：模型的访问地址。
- **Protocol**：模型的协议，可选项包括OpenAI、Anthropic、Gemini、Ollama。
- **API Key**：模型的访问密钥，在提供商网站申请。
- **Model**：模型的标识。

 

 
 

在**All Models**下展示所有添加成功的模型，Built-in Models为内置模型，Custom Models为三方模型（自定义模型）。将鼠标悬浮在三方模型上会显示两个操作按钮：编辑、删除，方便开发者管理三方模型。

---
*Updated: 2026-04-24 01:27:33*
