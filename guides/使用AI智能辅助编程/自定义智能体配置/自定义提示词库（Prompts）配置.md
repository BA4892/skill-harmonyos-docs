# 自定义提示词库（Prompts）配置

> **分区**: Guides  |  **Slug**: `ide-prompts`  |  **DocID**: `b88b50f435334d619aadc6056e6b20af`

---

# 自定义提示词库（Prompts）配置

 从DevEco Studio 6.1.0 Beta2开始，CodeGenie支持添加和管理提示词库。如果经常针对不同的文件或代码使用某个提示词向AI提问，可以将提示词添加到常用提示词库中，在需要时通过菜单栏快速触发，从而提高开发效率。

 

 
点击页面右侧菜单栏CodeGenie图标完成登录后，可以通过如下两种方式打开Prompts配置界面：

点击界面右上方**Settings**按钮，选择**Prompts**。

 在代码编辑区右键唤醒菜单栏，点击**CodeGenie > Add New Prompts**。

 
 

点击**Add Now**进入Prompts配置页面。

 

填写提示词名称、提示词内容等，点击**Save**进行保存。

- **Title**：提示词名称，长度不超过20个字符。
- **Prompt**：提示词的具体内容，长度不超过5000个字符。
- **Auto-reference selected code for context**：是否自动引用所选代码作为上下文，勾选该选项后，会将选中代码和提示词一并发送给CodeGenie。
- **Auto send prompts to AI**：是否自动发送给CodeGenie，不勾选该选项时需手动点击发送。

 

 将鼠标悬浮在自定义Prompts上，可出现编辑和删除按钮，方便开发者编辑或删除。

 

 

选中代码片或在编辑区空白位置右键，点击CodeGenie下的提示词（如安全检查），发送提示词后等待AI解析回复。

---
*Updated: 2026-04-24 01:27:35*
