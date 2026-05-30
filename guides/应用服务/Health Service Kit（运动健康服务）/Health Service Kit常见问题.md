# Health Service Kit常见问题

> **分区**: Guides  |  **Slug**: `health-faqs`  |  **DocID**: `6fd7319108424c5fa528d7bfe40ee7ba`  |  **NodeID**: `000201776839809741021ed51815c630`

---

# Health Service Kit常见问题

                 #### 读取今天的日常活动数据统计，与运动健康App页面数据不一致

     [聚合查询](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-samplepoint-manage#聚合查询)接口读取今日日常活动数据，数据上报存在延时，读取实时日常活动数据建议使用[读取实时三环数据](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-three-ring-read)接口。

                  #### 授权后仍然没有数据类型权限

     鉴权时使用的权限是用户授权的权限与应用申请的权限的交集，需确认：

     
             应用已申请了对应的数据类型权限，申请步骤请参考[申请运动健康服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-apply)，数据类型对应的权限参考[权限说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-permission-description)。

             用户授权已勾选对应的权限。

     
                  #### 在授权时上报1001502003错误

     参考[配置Client ID](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-configuration-client-id)，请登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)平台，确认代码中配置的包名与client ID是匹配的。若问题仍未解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

     更多错误码请参考[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)。

                  #### 在授权时上报1001502014错误

     确保授权请求参数中的数据类型已经在**Health Service Kit**卡片中申请相应的权限，申请步骤请参考[申请运动健康服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-apply)，数据类型对应的权限参考[权限说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-permission-description)。

     更多错误码请参考[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)。

                  #### 用户隐私未同意，如何引导用户打开运动健康App

     接口响应错误码1002703001，可通过以下方式引导用户打开运动健康App，同意隐私授权：

     调用[canOpenLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagercanopenlink12)判断运动健康App是否安装。运动健康App Scheme：huaweischeme://healthapp/home/main。

     
             App已安装，调用[openLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#openlink12)接口拉起运动健康App。运动健康App Scheme：huaweischeme://healthapp/home/main。

             App未安装，调用[应用市场推荐](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-productview#应用详情页展示)接口，引导用户下载运动健康App，运动健康App包名：com.huawei.hmos.health。

---
*Updated: 2026-04-22 06:35:17*
