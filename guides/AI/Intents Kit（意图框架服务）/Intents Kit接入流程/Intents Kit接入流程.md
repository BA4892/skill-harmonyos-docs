# Intents Kit接入流程

> **分区**: 指南  |  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  |  **Slug**: `intents-access-flow`  |  **DocID**: `37d65bbc42334582ab4e435f25665b39`  |  **NodeID**: `000201775795449800264e3e626f5121`

---

# Intents Kit接入流程

 

 **阶段一：意向**

  
| **任务**  | **任务描述**  | **示例**  | **指导文档**  
  | 选择特性确定意图  | 开发者在已发布的特性列表中根据想达成的用户体验选择特性，根据特性来确定需实现的意图。  | 开发者想实现“歌曲续听推荐”的特性，则根据智慧分发特性描述，需要实现“播放歌曲”意图。  | [歌曲续听推荐](https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213)  
  

  **阶段二：开发**

  
| **任务**  | **任务描述**  | **示例**  | **指导文档**  
  | 调试白名单申请  | 确定开发意向后，开发者发送邮件到邮箱（hagservice@huawei.com）或者联系华为意图框架接口同事，向华为提供测试应用的信息，用于申请调试白名单。  1. 应用名称：华为音乐。

 2. 应用包名：com.xxxx。

 3. 接入意图名称：“播放歌曲”。

 4. 应用图标：jpg、png……。

 5. APP ID：1234567。

 6. Client ID：1234567。

 7. 华为账号（UID）：1234567、7654321……。

  见各特性类型

 习惯推荐：[开发者测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-habit-rec-dp-self-validation)

 事件推荐：[开发者测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-event-rec-dp-self-validation)

 技能调用：[开发者测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-dp-self-validation-con)

  
 | 意图声明文件中注册意图  | 在DevEco Studio中开发时，注册对应的意图。  | 注册“播放歌曲”意图。  | [意图注册](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-habit-rec-access-programme#意图注册)  
 | 开发实现意图共享  | 开发应用/元服务的意图共享接口，使其可以通过HarmonyOS接口完成意图数据共享。  | 开发“播放歌曲”意图中的意图共享接口。  | [端侧意图共享](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-habit-rec-access-programme#端侧意图共享)  
 | 开发实现意图调用  | 开发应用/元服务的意图调用接口，使其可以通过HarmonyOS接口被正确调用。  | 开发“播放歌曲”意图中的意图调用接口。  | [端侧意图调用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-habit-rec-access-programme#端侧意图调用)  
  

  **阶段三：验证**

  
| **任务**  | **任务描述**  | **示例**  | **指导文档**  
  | 端到端验证特性  | 使用华为侧提供的测试能力完成目标特性的端到端联调测试，联调测试完成后，提交智慧分发配置至审核。  | 在设备上对应入口进行“华为音乐-歌曲续听推荐”的特性端到端测试，测试完成后点击提交智慧分发配置。  | /  
  

  **阶段四：上架**

  
| **任务**  | **任务描述**  | **示例**  | **指导文档**  
  | 应用市场上架软件包（应用/元服务）  | 开发完成并打包好软件包后，在应用市场上传软件包。  | 打包“华为音乐”软件包并通过应用市场上架。  [应用市场上架流程](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-0000002235870050)

  
 | 意图框架注册  | 在小艺开放平台进行意图注册配置并提交审核。由华为工程师审核，一般情况在3个工作日内完成。  | 注册“播放歌曲”意图。  | [意图标准协议上架指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-kit-listing-standard-protocol)

---
*Updated: 2026-04-20 01:43:15*
