# ApplicationInfo

> **分区**: API参考  |  **Slug**: `js-apis-bundlemanager-applicationinfo`  |  **DocID**: `ee661c2b0f414ea6bad15b8e400bb8cd`

---

# ApplicationInfo

       应用程序信息，可以通过[bundleManager.getBundleInfoForSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)获取自身的应用程序信息，其中参数[bundleFlags](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundleflag)至少包含GET_BUNDLE_INFO_WITH_APPLICATION。

                     本模块首批接口从API version 9 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

                       #### 导入模块

     ```
import { bundleManager } from '@kit.AbilityKit';
```
                  #### ApplicationInfo

     **系统能力**: SystemCapability.BundleManager.BundleFramework.Core

                                   名称         类型         只读         可选         说明                                       name         string         是         否                   应用包的bundle名称，对应[app.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file)里面的bundleName。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         description         string         是         否                   标识应用的描述信息，对应[app.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file)中配置的description字段。关于description的详细信息详见本表中的descriptionResource字段说明。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         descriptionId         number         是         否                   标识应用的描述信息的资源id，是编译构建时根据应用配置的description自动生成的资源id。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         enabled         boolean         是         否                   判断应用程序是否可以使用，取值为true表示可以使用，取值为false表示不可使用。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         label         string         是         否                   标识应用的名称，对应[app.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file)中配置的label字段。关于label的详细信息详见本表中的labelResource字段说明。从API version 20开始，如果是通过[bundleManager.getAbilityInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetabilityinfo20)获取ApplicationInfo信息，该字段为应用对用户显示的名称，而不是资源描述符。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         labelId         number         是         否                   标识应用名称的资源id，是编译构建时根据应用配置的label自动生成的资源id。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         icon         string         是         否                   应用程序的图标，对应[app.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file)中配置的icon字段。关于icon的详细信息详见本表中的iconResource字段说明。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         iconId         number         是         否                   应用程序图标的资源id，是编译构建时根据应用配置的icon自动生成的资源id。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         process         string         是         否                   应用程序的进程名称。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         permissions         Array<string>         是         否                   访问应用程序所需的权限列表。

          [getBundleInfoForSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)或者[getBundleInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetbundleinfo14)接口获取ApplicationInfo信息时不会返回该字段内容，可以通过获取[bundleInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-bundleinfo#bundleinfo-1).reqPermissionDetails信息获取权限列表。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         codePath         string         是         否                   应用程序的安装目录。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         metadata(deprecated)         Map<string, Array<[Metadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-metadata)>>         是         否                   应用程序的元信息，通过调用[getBundleInfoForSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)接口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_APPLICATION和GET_BUNDLE_INFO_WITH_METADATA获取。

          **说明：** 从API version 9开始支持，从API version 10开始不再维护，建议使用metadataArray替代。

                         metadataArray10+         Array<[ModuleMetadata](#modulemetadata10)>         是         否                   应用程序的元信息，通过调用[getBundleInfoForSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)接口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_APPLICATION和GET_BUNDLE_INFO_WITH_METADATA获取。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         removable         boolean         是         否                   应用程序是否可以被移除，取值为true表示可以被移除，取值为false表示不可以被移除。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         accessTokenId         number         是         否                   应用程序的accessTokenId，应用的身份标识，在[程序访问控制校验接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#checkaccesstoken9)中使用。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         uid         number         是         否                   应用程序的UID。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         iconResource         [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#resource9)         是         否                   应用程序的图标资源信息，包含了该资源信息的bundleName、moduleName 和 id，可以调用全球化的接口[getMediaContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getmediacontent9)来获取详细的资源数据信息。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         labelResource         [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#resource9)         是         否                   应用程序的名称资源信息，包含了该资源信息的bundleName、moduleName 和 id，可以调用全球化的接口[getMediaContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getmediacontent9)来获取详细的资源数据信息。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         descriptionResource         [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#resource9)         是         否                   应用程序的描述资源信息，包含了该资源信息的bundleName、moduleName 和 id，可以调用全球化的接口[getMediaContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getmediacontent9)来获取详细的资源数据信息。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         appDistributionType         string         是         否         应用程序签名证书的分发类型，分为：           - app_gallery：应用市场安装的应用。签名证书申请方式请参考[申请发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090)。
          - enterprise：企业内部应用，企业自行开发、仅限企业内部员工使用的应用，不通过应用市场等公开渠道发布，而是通过企业自己的渠道进行内部分发。签名证书申请方式请参考[申请In-house发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-inhouse-profile-0000002283340021)。
          - enterprise_mdm：企业[MDM应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-term#mdm应用设备管理应用)。签名证书申请方式请参考[申请企业MDM应用发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-profile-0000002248341094)。
          - enterprise_normal：普通企业应用，无需上架华为应用市场，可通过企业[MDM应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-term#mdm应用设备管理应用)以及离线安装器分发安装。签名证书申请方式请参考[申请企业应用发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-cert-0000002248177978)。
          - os_integration：预置应用，三方应用无法申请配置。
          - crowdtesting：众包测试应用，是由应用市场分发给部分用户，有一定的有效期的特定应用，系统检测到应用的有效期到期后，会通知用户到应用市场更新release版本的应用。从API version 11开始被废弃。
          - internaltesting：应用市场内测的应用。签名证书申请方式请参考[申请内部测试Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-internaltest-profile-0000002283260129)。
                     none：其他。

           **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         appProvisionType         string         是         否                   应用程序签名证书文件的类型，分为debug和release两种类型。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         systemApp         boolean         是         否                   标识应用是否为系统应用，取值为true表示系统应用，取值为false表示非系统应用。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         bundleType         [bundleManager.BundleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundletype)         是         否                   标识包的类型，取值为APP（应用）或者ATOMIC_SERVICE（元服务）。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         debug10+         boolean         是         否                   标识应用是否处于调试模式，取值为true表示应用处于调试模式，取值为false表示应用处于非调试模式。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         dataUnclearable11+         boolean         是         否                   标识应用数据是否可被删除。true表示不可删除，false表示可以删除。

          **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

                         nativeLibraryPath12+         string         是         否         应用程序的本地库文件路径。                         multiAppMode12+         [MultiAppMode](#multiappmode12)         是         否         应用多开模式。                         appIndex12+         number         是         否         应用包的分身索引标识，仅在分身应用中生效。                         installSource12+         string         是         否                   标识应用程序的安装来源，支持的取值如下：

          - pre-installed：表示首次开机时已安装的预置应用。

          - ota：表示系统升级时新增的预置应用。

          - recovery：表示用户卸载后又手动恢复的预置应用。

          - bundleName：表示由此包名对应的应用安装。该bundleName代表变量，以实际值为准。

          - unknown：表示应用安装来源未知。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         releaseType12+         string         是         否                   标识应用打包时使用的SDK的发布类型。当前SDK的发布类型为Canary、Beta或Release，其中Canary和Beta通过序号进一步细分，例如Canary1、Canary2、Beta1、Beta2等。开发者可通过对比应用打包依赖的SDK发布类型和OS的发布类型（[deviceInfo.distributionOSReleaseType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info)）来判断兼容性。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         cloudFileSyncEnabled12+         boolean         是         否                   标识当前应用是否启用端云文件同步能力。true表示当前应用启用端云文件同步能力，false表示当前应用不启用端云文件同步能力。

          **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

                         cloudStructuredDataSyncEnabled20+         boolean         是         是                   标识当前应用是否启用端云结构化数据同步能力。true表示当前应用启用端云结构化数据同步能力，false表示当前应用不启用端云结构化数据同步能力。

          **元服务API：** 从API version 20开始，该接口支持在元服务中使用。

                                            #### MultiAppMode12+

     表示[应用多开](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multiinstance)模式。

     **系统能力：** SystemCapability.BundleManager.BundleFramework.Core

                                   名称         类型         只读         可选         说明                                       multiAppModeType         [bundleManager.MultiAppModeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#multiappmodetype12)         是         否         应用多开模式的类型。                         maxCount         number         是         否         应用多开的最大个数。                                            #### ModuleMetadata10+

     描述模块的元数据信息。

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.BundleManager.BundleFramework.Core

                                   名称         类型         只读         可选         说明                                       moduleName         string         是         否         模块名。                         metadata         Array<[Metadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-metadata)>         是         否         该模块下的元数据信息列表。

---
*Updated: 2026-04-22 06:45:30*
