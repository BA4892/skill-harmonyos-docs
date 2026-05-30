# MDM Kit开发指南

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `mdm-kit-guide`  |  **DocID**: `158816a963cb4661933c1e91fc48eef1`  |  **NodeID**: `0002017757958527168867be36cfefd0`

---

# MDM Kit开发指南

                 #### 功能介绍

     MDM Kit为[MDM应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-term#mdm应用设备管理应用)提供设备管理能力，包括企业设备管理与事件监听、应用管理、禁用管理、安全管理、设备设置、设备控制、设备信息获取、硬件外设管理、系统管理、网络通信管理等，具体API接口说明详见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/mdm-arkts)。

     设备管理应用：具备[企业设备管理扩展能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-admin)的应用。

                  #### 开发步骤

     要完成一个设备管理应用开发，需要完成以下步骤：

     
             申请资质。

             创建EnterpriseAdminExtensionAbility。

             声明接口所需权限。

             MDM功能开发与调试。

             分发部署。

     
                  #### [h2]申请资质

     在开发应用前，需要在AppGallery Connect中配置项目和应用信息。包括：

     
      - [注册成为企业开发者](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。
      - [创建项目](https://developer.huawei.com/consumer/cn/doc/app/agc-help-createproject-0000001100334664)和[创建应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-createapp-0000001146718717)。
      - [申请MDM应用的证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-cert-0000002283256801)和[Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-profile-0000002248341094)。
     
                  #### [h2]创建EnterpriseAdminExtensionAbility

     请参阅[EnterpriseAdminExtensionAbility开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-admin)完成EnterpriseAdminExtensionAbility的创建。

                  #### [h2]声明接口所需权限

     在申请权限前，请保证符合[权限使用的基本原则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview#权限使用的基本原则)。然后在工程Module对应的[module.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)配置文件中"requestPermissions"标签下声明要使用的接口所需的权限。例如：

     ```
"requestPermissions": [
// ···
  {
    "name": "ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS"
  },
// ···
],
```
                         所需要申请的权限请参考具体接口，这里提供了[企业设备管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-adminmanager)的链接，可基于该文档查看MDM Kit内其他API文档。

       声明的MDM权限必须在申请MDM应用的证书和Profile时完成申请，否则后面应用还是无法获取到该权限。

                             #### [h2]MDM功能开发

     
             导包。MDM Kit目前包含应用管理、通信管理、安全管理、限制策略、系统管理、设备设置和查询、设备控制等多种类型的API，请根据业务需求导入使用。以下为导入adminManager和restrictions的示例。

       import { adminManager, restrictions } from '@kit.MDMKit';             调用接口，实现相应的功能。以下为禁用设备Wi-Fi的示例。

       ```
import { adminManager, restrictions } from '@kit.MDMKit';
// ...
import { Want } from '@kit.AbilityKit';
// ...
  private wantTemp: Want = {
    bundleName: 'com.example.mdmsample',
    abilityName: 'EnterpriseAdminAbility',
  };
  // ...
    try {
      restrictions.setDisallowedPolicy(this.wantTemp, 'wifi', isDisallow);
      console.info(isDisallow ? 'disable wifi success.' : 'enable wifi success.');
      // ...
    } catch (err) {
      console.error('setDisallowedPolicy fail.');
      // ...
    }
```
     
                  #### [h2]调试说明

     由于MDM接口需要在激活企业设备管理扩展能力后使用，调试时需通过hdc命令来激活/解除激活扩展能力，命令如下：

     ```
# 激活为超级设备管理应用
hdc shell edm enable-admin -n 包名 -a 企业设备管理扩展能力类名
# 激活为BYOD设备管理应用
hdc shell edm enable-admin -n 包名 -a 企业设备管理扩展能力类名 -t byod
# 从API version 23开始支持激活为普通设备管理应用，该命令在PC/2in1设备可正常使用，在其他形态设备中使用会报错
hdc shell edm enable-admin -n 包名 -a 企业设备管理扩展能力类名 -t da
# 解除激活
hdc shell edm disable-admin -n 包名
```
                         正式使用时，在同一设备上只能激活一个超级设备管理应用。

       BYOD（bring your own device），自带设备办公。指一些企业允许员工携带自己的笔记本电脑、平板电脑、智能手机等移动终端设备到办公场所，并可以用这些设备获取公司内部信息、使用企业特许应用的一种政策。

       调试之前，需要完成资质申请。

                             #### [h2]分发部署

     将开发、调试完成的MDM应用申请商用：参见[企业MDM应用商用申请](https://developer.huawei.com/business/cn/doc/HEM/developer-commercial-license-0000002469392504)。

     将已商用发布的MDM应用部署到设备上：参见[如何管理部署策略](https://developer.huawei.com/business/cn/doc/HEM/hem_user-guide_add-reseller_management-devices-ot-0000002307766441)，将部署配置的部署类型一栏勾选上MDM应用部署。

---
*Updated: 2026-04-20 01:45:58*
