# ohpm-repo export_pkginfo

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-repo-export-pkginfo`  |  **DocID**: `63697eafb47f495d9cd00f3ace6048af`  |  **NodeID**: `0002017757900665330594d4b13a9c46`

---

# ohpm-repo export_pkginfo

 导出ohpm-repo或OpenHarmony三方库中心仓已上架的包列表。

 #### 命令格式

```
ohpm-repo export_pkginfo [option]
```
  #### 功能描述

将所有或者与输入正则表达式匹配的已上架库的包名导出到当前目录的pkgInfo_xxx.json文件。

 

  #### 选项

 #### [h2]--public-registry

- 默认值：无
- 类型：URL

 在export_pkginfo命令后面配置--public-registry <string>，指定OpenHarmony三方库中心仓registry地址获取已上架的包列表。

  #### [h2]--http-proxy

- 默认值：无
- 类型：String

 在export_pkginfo命令后面配置--http-proxy <string>，发起请求时将为上面配置的--public-registry地址设置代理。

  #### [h2]--filter

- 默认值：无

  
- 类型：String

 在export_pkginfo命令后面配置--filter <string>，可以根据正则表达式导出匹配的包列表，根据完整包名匹配。

 三方包的命名规则为：@<组织名>/<包名>@<版本号>。

 #### [h2]--repos

- 默认值：无

  
- 类型：String

 ohpm-repo 5.3.0版本开始支持配置多个仓库。在export_pkginfo命令后面配置--repos <string>，导出ohpm-repo中指定仓库的包列表。多个仓库之间通过英文逗号进行分隔，例如"export_pkginfo --repos  one,two"，即可导出仓库one和仓库two中满足要求的包列表。如果没有配置此参数，将默认导出所有仓库中满足要求的包列表。

 #### 示例

执行以下命令从ohpm-repo中导出已上架的包列表：

 ohpm-repo export_pkginfo 结果示例：

 ```
PS D:\> ohpm-repo export_pkginfo
...
[2025-08-09T17:56:15.319] [INFO] default - export matched packages success: save to "D:\pkgInfo_1754733375315.json".
```
 

 ```
// pkgInfo_1754733375315.json中记录着ohpm-repo中所有仓库的包列表
{
  "ohpm": [
    "@ohos/test@1.0.0",
    "@ohos/test-two@1.0.0"
  ],
  "one": [
    "@ohos/test-three@1.0.0",
    "@ohos/test-four@1.0.0"
  ],
  "two": [
    "@ohos/test-five@1.0.0",
    "@ohos/test-six@1.0.0"
  ]
}
```
 

 执行以下命令从OpenHarmony三方库中心仓中导出已上架的包列表：

 ohpm-repo export_pkginfo --public-registry <OpenHarmony三方库中心仓registry地址> --http-proxy <配置代理地址> 结果示例：

 ```
PS D:\> ohpm-repo export_pkginfo  --public-registry https://ohpm.openharmony.cn/ohpm/
...
[2024-04-02T22:51:46.664] [INFO] DEFAULT - Export 912 packages names success: save to "D:\pkgInfo_1754734313921.json".
```
 ```
// pkgInfo_1754734313921.json中记录着公仓的包列表
{
  "packageNameArray": [
    "@ohos/lottie-turbo@1.0.0",
    "@ohos/lottie-turbo@1.0.0-rc.0",
    "@ohos/lottie-turbo@1.0.0-rc.1",
    ...
  ]
}
```
  

 执行以下命令从ohpm-repo本地存储中，导出所有包名为pack1，版本是1.1的（可以是1.1.1, 1.1.2, 1.1.3等）已上架的包列表：

 ohpm-repo export_pkginfo --filter "^pack1@1\.1(\.[0-9]+)*$" 

 执行以下命令从ohpm-repo配置的public-registry仓库中，导出所有属于组织ohos，且名为lottie的所有版本的已上架的包列表：

 ohpm-repo export_pkginfo --public-registry https://ohpm.openharmony.cn/ohpm/ --filter "^@ohos/lottie.*"  

 执行以下命令从ohpm-repo本地存储中仅导出仓库名为one的所有包列表：

 ohpm-repo export_pkginfo --repos one 结果示例：

 ```
PS D:\> ohpm-repo export_pkginfo --repos one
...
[2025-08-09T18:28:17.602] [INFO] default - export all packages success: save to "D:\pkgInfo_1754735297601.json".
```
 ```
// pkgInfo_1754735297601.json中记录着ohpm-repo中仓库one的包列表
{
  "one": [
    "@ohos/test-three@1.0.0",
    "@ohos/test-four@1.0.0"
  ]
}
```

---
*Updated: 2026-04-22 01:07:31*
