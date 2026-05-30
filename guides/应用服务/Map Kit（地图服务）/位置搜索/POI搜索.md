# POI搜索

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `map-site-search`  |  **DocID**: `67a239b545d548848f85c98cdd1f40c9`  |  **NodeID**: `000201775795649086897a64413a2e2a`

---

# POI搜索

                 #### 场景介绍

     提供多种查询POI信息的能力：

     
             关键字搜索：通过用户输入的关键字，返回地点列表。

             周边搜索：基于用户设备位置进行地点查找。

             自动补全：根据输入的关键字返回预测的输入关键字和地点查询建议。

             地点详情：查询某个地点更详细的信息。

     
                  #### 接口说明

     以下是POI搜索相关接口，主要由[site](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site)命名空间下的方法提供，更多接口及使用方法请参见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site)。

           
                        | 接口名          | 描述         
                               | [searchByText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbytext)(searchByTextParams: [SearchByTextParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbytextparams)): Promise<[SearchByTextResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbytextresult)>          | 关键字搜索。         
                 | [searchByText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbytext-1)(context: [common.Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context), searchByTextParams: [SearchByTextParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbytextparams)): Promise<[SearchByTextResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbytextresult)>          | 关键字搜索。支持上传Context上下文。         
                 | [nearbySearch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#nearbysearch)(nearbySearchParams: [NearbySearchParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#nearbysearchparams)): Promise<[NearbySearchResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#nearbysearchresult)>          | 周边搜索。         
                 | [nearbySearch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#nearbysearch-1)(context: [common.Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context), nearbySearchParams: [NearbySearchParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#nearbysearchparams)): Promise<[NearbySearchResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#nearbysearchresult)>          | 周边搜索。支持上传Context上下文。         
                 | [queryAutoComplete](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#queryautocomplete)(queryAutoCompleteParams: [QueryAutoCompleteParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#queryautocompleteparams)): Promise<[QueryAutoCompleteResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#queryautocompleteresult)>          | 自动补全。         
                 | [queryAutoComplete](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#queryautocomplete-1)(context: [common.Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context), queryAutoCompleteParams: [QueryAutoCompleteParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#queryautocompleteparams)): Promise<[QueryAutoCompleteResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#queryautocompleteresult)>          | 自动补全。支持上传Context上下文。         
                 | [searchById](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbyid)(searchByIdParams: [SearchByIdParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbyidparams)): Promise<[SearchByIdResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbyidresult)>          | 地点详情。         
                 | [searchById](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbyid-1)(context: [common.Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context), searchByIdParams: [SearchByIdParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbyidparams)): Promise<[SearchByIdResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#searchbyidresult)>          | 地点详情。支持上传Context上下文。         
             

                       #### 开发步骤

     导入相关模块。

     ```
import { site } from '@kit.MapKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
                  #### [h2]关键字搜索

     通过指定的关键字和可选的地理范围，查询诸如旅游景点、企业和学校之类的地点。

     ```
let params: site.SearchByTextParams = {
  // 根据自定义关键字进行搜索，例如：“故宫”、“夫子庙”
  query: "Piazzale Dante, 41, 55049 Viareggio, Tuscany, Italy",
  // 经纬度坐标
  location: {
    latitude: 31.984,
    longitude: 118.76625
  },
  // 指定地理位置的范围半径
  radius: 10000,
  // 搜索结果的语言类型
  language: "en"
};
// 返回关键字搜索结果
try {
  const result = await site.searchByText(params);
  console.info(`Succeeded in searching by text. result is ${JSON.stringify(result)}`);
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`Failed in searching by text. Code is ${err.code}, message is ${err.message}`);
}
```
                  #### [h2]周边搜索

     通过用户传入自己的位置，可以返回周边地点列表。您可以通过提供关键字或指定要搜索的地点的类型来优化搜索结果。

     ```
let params: site.NearbySearchParams = {
  location: {
    latitude:51.50811219132287,
    longitude:-0.07594896472392065
  },
  poiTypes: [
    "Watch_Store",
    "SUBWAY",
    "PRIMARY_SCHOOL",
    "GENERAL_AUTO_REPAIR_SERVICE_CENTER"
  ]
}
// 返回周边搜索结果
try {
  const result = await site.nearbySearch(params);
  console.info(`Succeeded in searching nearby. result is ${JSON.stringify(result)}`);
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`Failed in searching nearby. Code is ${err.code}, message is ${err.message}`);
}
```
                  #### [h2]自动补全

     根据输入的关键字，将最有可能的搜索词呈现给用户，以减少用户输入信息，提升用户体验。如：输入“北京”，提示“北京市”、“北京站”、“北京西站”等。

     ```
let params: site.QueryAutoCompleteParams = {
  // 自定义关键字
  query: "hotel",
  // 经纬度坐标
  location: {
    latitude: 31.984410259206815,
    longitude: 118.76625379397866
  },
  language: "en",
  // 返回子节点
  isChildren: true
};
// 返回自动补全结果
try {
  const result = await site.queryAutoComplete(params);
  console.info(`Succeeded in querying. result is ${JSON.stringify(result)}`);
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`Failed in querying. Code is ${err.code}, message is ${err.message}`);
}
```
                  #### [h2]地点详情

     根据地点的唯一主键地点ID（siteId）获取地点详情。地点详细信息请求返回有关指定地点的更全面的信息，如地点名称、地址详细信息、经纬度等。siteId可通过其他接口（关键字搜索、周边搜索、地点详情、自动补全、正地理编码）的返回结果中获取。

     ```
let params: site.SearchByIdParams = {
  // 指定主键地点ID
  siteId: "144129739873977856",
  language: "en",
  // 返回子节点
  isChildren: true
};
// 返回地点详情结果
try {
  const result = await site.searchById(params);
  console.info(`Succeeded in searching. result is ${JSON.stringify(result)}`);
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`Failed in searching. Code is ${err.code}, message is ${err.message}`);
}
```

---
*Updated: 2026-04-20 01:51:06*
