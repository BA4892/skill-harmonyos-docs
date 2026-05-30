# REST API错误码

> **分区**: API参考  |  **Slug**: `account-server-error-code`  |  **DocID**: `235b65d8b0e94af9b7204cdbab80a3d6`

---

# REST API错误码

                 #### 获取用户级凭证/刷新用户级凭证/获取应用级凭证

     接口URL：https://oauth-login.cloud.huawei.com/oauth2/v3/token

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         成功。         -                         400         参数错误。         请根据**业务响应主错误码**以及**业务响应子错误码**进一步排查问题。                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                             业务响应主错误码         业务响应子错误码         描述         解决方法                                       1101         12304         client_secret不正确。         请前往AppGallery Connect（简称AGC）确认client_secret是否正确。                         1101         20002         client_id格式不正确。         检查client_id是否满足正则：^[0-9]{1,64}$。                         1101         20003         client_id格式不正确或系统不存在。                   - 检查client_id是否满足正则：^[0-9]{1,64}$。

          - 请前往AppGallery Connect（简称AGC）确认client_id是否存在。

                         1101         20041         scope格式不正确或数量超过150个。                   - 检查scope参数是否满足正则：^[0-9a-zA-Z:/\\.\u0020]+$。

          - 检查scope数量是否超过150个。

                         1101         20042         无效的scope。                   - 传入的scope参数，不在获取refresh_token时的scope中。

          - 传入的scope是个伪造的值。

                         1101         20085         client_secret为空。         请按照接口参数的要求，传入正确的client_secret参数。                         1101         20152         code格式不正确。                   检查code格式是否满足正则：^[0-9a-zA-Z=/\\+]+$。

          该错误码出现可能场景：

          - code参数被篡改，导致格式不符。

          - 请求头的Content-Type为application/x-www-form-urlencoded，但实际代码调用时，未对请求body体进行URLEncode处理，可参考[示例代码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-user-token#示例代码)组装参数。

                         1101         20154         code或refresh_token中的client_id和入参不一致。         检查入参client_id是否与[配置Client ID](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-client-id)中的值一致。                         1101         20155         code过期，code只有5分钟有效期，超过有效期后将无法继续使用。         请引导用户重新授权，获取新的code再重试。                         1101         20156         code已经被使用过。         code只能用一次，请重新获取code再重试。                         1101         20158         code已失效。正常code有效期为5分钟，但是由于用户的行为（如更改密码、取消应用的授权等行为），导致华为服务器提前失效已颁发的code。         请引导用户重新授权，获取新的code再重试。                         1101         20171         client_secret为空。         请按照接口参数的要求，传入正确的client_secret参数。                         1101         20172         client_secret格式不正确。         检查client_secret格式是否满足正则：^[0-9a-zA-Z=/\\+]+$。                         1101         20182         grant_type值不正确。                   grant_type可选值如下：

          - “authorization_code”：该场景用于[获取用户级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-user-token)。

          - “refresh_token”： 该场景用于[刷新用户级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-refresh-token)。

          - “client_credentials”：该场景用于[获取应用级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-app-token)。

                         1101         20192         refresh_token格式不正确。         refresh_token格式需要满足正则：^[0-9a-zA-Z=/\\+]+$。                         1102         20001         client_id为空。         请按照接口参数的要求，传入正确的client_id参数。                         1102         20151         code为空。         请按照接口参数的要求，传入正确的code参数。                         1102         20181         grant_type为空。                   grant_type可选值如下：

          - “authorization_code”：该场景用于[获取用户级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-user-token)。

          - “refresh_token”： 该场景用于[刷新用户级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-refresh-token)。

          - “client_credentials”：该场景用于[获取应用级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-app-token)。

                         1102         20191         refresh_token为空。         请按照接口参数的要求，传入正确的refresh_token参数。                         1103         20153         无效的code。         请检查code是否正确。                         1203         11205         refresh_token已过期。refresh_token的有效期为180天，超过有效期后将无法继续使用。         请引导用户重新授权，获取新的refresh_token。                         1203         12303         client_id在系统不存在。         请前往AppGallery Connect（简称AGC）确认client_id是否存在。                         1203         12304         无效的client_secret。         入参client_id和client_secret不匹配导致，请检查参数。                         1203         31202         refresh_token解析失败。         refresh_token不是一个正确有效的数据，请检查refresh_token参数。                         1203         31204         refresh_token已失效。正常refresh_token有效期为180天，但是由于用户的行为（如更改密码、取消应用的授权等行为），导致华为服务器提前使已颁发的refresh_token失效。         请引导用户重新授权，获取新的refresh_token。                         1203         31218         refresh_token非法。         refresh_token格式需要满足正则：^[0-9a-zA-Z=\/\+]+$。                         1203         500         系统内部错误。         系统内部处理错误，建议业务打印错误码信息，并请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         1203         100300         系统处理异常。         请重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         1203         100502         开发者的关联主体账号组未查询到。         请参考[添加账号组成员](https://developer.huawei.com/consumer/cn/doc/start/aai-0000001265430513)，将应用的开发者账号加入关联主体账号组后重试。                                            #### 解析凭证

     接口URL：https://oauth-api.cloud.huawei.com/rest.php?nsp_fmt=JSON&nsp_svc=huawei.oauth2.user.getTokenInfo

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         仅表示本次接口调用成功，实际业务处理结果需要通过**Response Header**中的**NSP_STATUS**进行判断。         -                         400         参数错误。         请根据文档排查请求参数是否符合规范。                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                   Response Header中的NSP_STATUS字段，在处理成功时不会返回。

                                              NSP_STATUS         描述         解决方法                                       6         access_token已过期。access_token的有效期为3600秒，超过有效期后将无法继续使用。         请引导用户重新授权，获取新的access_token。                         102         无效的access_token。         access_token参数无效，可能原因：请求头的Content-Type为application/x-www-form-urlencoded，但实际代码调用时，未对请求body参数进行URLEncode处理，可参考[示例代码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-token-info#示例代码)组装参数。                         500         接口内部错误。         根据返回的错误描述进行处理，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         501         服务分发异常。                   - 检查请求URL中nsp_svc是否正确

          - 若确认请求URL与文档一致，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

                         31204         access_token已失效。正常access_token有效期为3600秒，但是由于用户的行为（如更改密码、取消��用的授权等行为），导致华为服务器提前失效已颁发的access_token。         请引导用户重新授权，获取新的access_token。                                            #### 取消用户级凭证授权

     接口URL：https://oauth-login.cloud.huawei.com/oauth2/v3/revoke

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         成功。         -                         400         参数错误。         请根据**业务响应主错误码**以及**业务响应子错误码**进一步排查问题。                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                             业务响应主错误码         业务响应子错误码         描述         解决方法                                       1101         20222         无效的token。                   token格式不正确，可能原因：

          请求头的Content-Type为application/x-www-form-urlencoded，但实际代码调用时，未对请求body体进行URLEncode处理，可参考[示例代码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-revoke-token#示例代码)组装参数。

                         1102         20221         token为空。         请按照接口参数的要求，传入正确的token参数。                         1203         11205         token已过期。Access Token有效期为3600秒，Refresh Token有效期为180天，超过有效期后将无法继续使用。         请引导用户重新授权，获取新的token并重试。                         1203         17009         无效的token。         传入的token参数无效，请重新获取token。                         1203         17010         token验证失败。         token不是一个正确有效的数据，请检查token参数。                         1203         31202         token解析失败。         token不是一个正确有效的数据，请检查token参数。                         1203         31204         token已失效。正常Access Token有效期为3600秒，Refresh Token有效期为180天，但是由于用户的行为（如更改密码、取消应用的授权等行为），导致华为服务器提前失效已颁发的Access Token和Refresh Token。         请引导用户重新授权，获取新的token并重试。                         1203         31218         token格式不正确。         请检查token格式是否正确。                         1203         500         系统内部错误。         系统内部处理错误，建议业务打印错误码信息，并请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                            #### 获取用户信息

     接口URL：https://account.cloud.huawei.com/rest.php?nsp_svc=GOpen.User.getInfo

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         仅表示本次接口调用成功（接口调用成功不等于业务处理成功，如**Response Header**中返回了**NSP_STATUS**字段，说明业务处理报错，需要判断报错原因）。         -                         400         参数错误。         请根据文档排查请求参数是否符合规范。                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                   Response Header中的NSP_STATUS字段，在处理成功时不会返回。

                                              NSP_STATUS         描述         解决方法                                       6                   会话失效，session timeout。

          可能原因:

          - access_token无效或已过期

          - access_token格式不正确

          - 其他内部原因

                   - 请检查传参是否正确，如无问题请尝试重新获取。

          - 未对access_token进行URLEncode处理，可参考[示例代码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-user-info-get-nickname-and-avatar#示例代码)组装参数。

          - 根据返回的错误描述进行处理，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

                         105         参数错误         参考API文档的说明，调整参数传值。                         403         访问无权限。         请前往AppGallery Connect（简称AGC）为应用申请开放权限，详见[申请账号权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-config-permissions)。                         500         接口内部错误。         根据返回的错误描述进行处理，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         触发系统流控。         请稍后重试。                         70001201         参数不合法         参考API文档的说明，调整参数传值。                         70001402         系统鉴权错误。         鉴权系统异常，若重试无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         70020002         内部网络错误。         内部网络错误，若重试无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         70001401         系统内部错误。         根据返回的错误描述进行处理，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                            #### 一键登录获取华为账号绑定号码和UnionID/OpenID

     接口URL：https://account-api.cloud.huawei.com/oauth2/v6/quickLogin/getPhoneNumber

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         仅表示本次接口调用成功，实际业务处理结果需要通过**Response Body**中的**resultCode（错误码）** 进行判断。         -                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                             错误码         描述         解决方法                                       60010002         参数不合法。         请按照错误描述及接口[Request Body](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-user-info-quicklogin-by-code#request-body)参数说明检查入参。                         60010012         code参数不正确。         code参数传值不正确，可能原因：伪造的无效code或code被篡改。                         60010013         clientSecret参数不正确。         clientSecret参数传值不正确，参数取值详见[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)中的**OAuth 2.0客户端ID（凭据）-Client Secret**参数。                         60180003         code中的client_id和入参不一致。         code参数获取时的clientId与当前接口参数clientId不一致导致，请检查入参client_id是否与[配置Client ID](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-client-id)中的值一致。                         60180004         code过期，code只有5分钟有效期，超过有效期后将无法继续使用。         请引导用户重新授权，获取新的code再重试。                         60180005         code已经被使用过。         code只能用一次，请重新获取code再重试。                         60180006         code已失效。正常code有效期为5分钟，但是由于用户的行为（如更改密码、取消应用的授权等行为），导致华为服务器提前失效已颁发的code。         请引导用户重新授权，获取新的code再重试。                         60180007         code未授权华为账号一键登录权限。                   code未授权华为账号一键登录权限，可能原因如下：

          - 应用使用华为账号一键登录功能之前，需要完成华为账号一键登录权限申请，详见[申请账号权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-config-permissions)。

          - code不是通过调用华为账号的一键登录组件获取到的，请参考[客户端开发](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-phone-unionid-login#客户端开发)的展示一键登录页面并获取Authorization Code，获取华为账号一键登录场景所需的code参数。

                         60180008         用户无手机号。         用户华为账号未绑定手机号，该异常场景应用需要展示其他登录方式。                         60180009         手机号信息获取受限。                   - 华为账号一键登录服务仅对中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）用户提供。

          - 应用服务端获取华为账号绑定号码时，该服务器必须部署在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。

                         60010001         系统内部错误。         请稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                            #### 获取用户风险等级

     接口URL：https://account.cloud.huawei.com/user/getuserrisklevel

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         仅表示本次接口调用成功（接口调用成功不等于业务处理成功，实际业务处理结果需要通过**Response Body**中的**errCode**进行判断）。         -                         400         参数错误。         请根据文档排查请求参数是否符合规范。                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         415         不支持的媒体类型         请检查http请求的contentType是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                             errCode         描述         解决方法                                       6                   会话失效，session timeout。

          可能原因:

          - access_token无效或已过期。

          - access_token格式不正确。

          - 其他内部原因。

                   - 请检查传参是否正确，如无问题请尝试重新获取。

          - 本接口请求数据格式为 application/json;charset=utf-8，在构造请求体时，请确保不对access_token参数进行URLEncode处理，可参考[示例代码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-getuserrisklevel#section1888515151299)组装参数。

          - 根据返回的错误描述进行处理，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

                         403         无权访问         请前往AppGallery Connect（简称AGC）为应用申请开放权限，详见[申请账号权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-config-permissions)。                         503         触发系统流控。         请稍后重试。                         70001201         请求参数错误         修改请求url或者请求体中的参数。                         70001402         系统鉴权错误。         鉴权系统异常，若重试无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         70020002         接口内部超时         稍后重试。                         70001401         接口内部错误         根据返回的错误描述进行处理，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                            #### 获取实名信息

     接口URL：https://openrealname.cloud.huawei.com/rest.php?nsp_svc=OpenRealName.User.getDetailInfo

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         仅表示本次接口调用成功，实际业务处理结果需要通过**Response Header**中的**NSP_STATUS**进行判断。         -                         400         参数错误。         请根据文档排查请求参数是否符合规范。                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                   Response Header中的NSP_STATUS字段，在处理成功时不会返回。

                                              NSP_STATUS         描述         解决方法                                       6                   会话失效，session timeout。

          可能原因:

          - access_token无效或已过期

          - access_token格式不正确

                   - access_token无效或已过期，请检查传参是否正确，如无问题请尝试重新获取。

          - 未对access_token进行URLEncode处理，可参考[示例代码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-realname#示例代码)组装参数。

                         105         请求url中nsp_svc参数错误。         请检查请求地址参数是否正确。                         403         访问无权限。         请根据[使用约束](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-realname#使用约束)章节进行检查。                         500         接口内部错误。         根据返回的错误描述进行处理，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         接口流控。         业务调用频率过高，请稍后重试。                         70001201         请求参数错误。         请根据错误描述信息确定错误参数并修正后重试。                         70001401         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         70009019         实名信息不存在         账号未实名，请先进行实名，或更换已实名账号，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                            #### 实名信息校验

     接口URL：https://openrealname.cloud.huawei.com/rest.php?nsp_svc=OpenRealName.User.verifyRealName

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         仅表示本次接口调用成功，实际业务处理结果需要通过**Response Header**中的**NSP_STATUS**进行判断。         -                         400         参数错误。         请根据文档排查请求参数是否符合规范。                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                   Response Header中的NSP_STATUS字段，在处理成功时不会返回。

                                              NSP_STATUS         描述         解决方法                                       6                   会话失效，session timeout。

          可能原因:

          - access_token无效或已过期

          - access_token格式不正确

                   - access_token无效或已过期，请检查传参是否正确，如无问题请尝试重新获取。

          - 未对access_token进行URLEncode处理，可参考[示例代码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-verify-realname#示例代码)组装参数。

                         105         请求url中nsp_svc参数错误。         请检查请求地址参数是否正确。                         403         访问无权限。         请根据[使用约束](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-verify-realname#使用约束)章节进行检查。                         404         找不到服务。         请检查请求URI是否正确。                         500         接口内部错误。         根据返回的错误描述进行处理，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         接口流控。         业务调用频率过高，请稍后重试。                         70001201         请求参数错误。         请根据错误描述信息确定错误参数并修正后重试。                         70001401         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         70009019         实名信息不存在         账号未实名，请先进行实名，或更换已实名账号，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                            #### 通过OpenID获取UnionID

     接口URL：https://oauth-login.cloud.huawei.com/rest.php?nsp_svc=huawei.oauth2.app.openIdToUnionId

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         仅表示本次接口调用成功，实际业务处理结果需要通过**Response Header**中的**NSP_STATUS**进行判断。         -                         400         参数错误。         请根据文档排查请求参数是否符合规范。                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                   Response Header中的NSP_STATUS字段，在处理成功时不会返回。

                                              NSP_STATUS         描述         解决方法                                       6         access_token已过期。access_token的有效期为3600秒，超过有效期后将无法继续使用。         请通过[获取应用级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-app-token)重新获取新的access_token。                         102         无效的access_token。         access_token参数无效，可能原因：请求头的Content-Type为application/x-www-form-urlencoded，但实际代码调用时，未对请求body参数进行URLEncode处理，可参考[示例代码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-unionid#示例代码)组装参数。                         403         无权限访问。         入参access_token请通过[获取应用级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-app-token)获取，其他方式获取的access_token不允许调用该接口。                         500         接口内部错误。         根据返回的错误描述进行处理，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         501         服务分发异常。                   - 检查请求URL中nsp_svc是否正确

          - 若确认请求URL与文档一致，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

                         1302         接口流控。         业务调用频率过高，单应用调用并发请低于100TPS。                         31204         access_token已失效。         通过[获取应用级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-app-token)获取的access_token不会出现此错误。请严格按照接口入参要求，使用[获取应用级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-app-token)方式获取access_token并重试。                         150028         open_id参数为空或超长。         请检查open_id是否为空或者超过256的字符长度。具体格式要求请参考[OpenID和UnionID的格式说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-9)                                            #### 通过OpenID或UnionID获取GroupUnionID

     接口URL：https://account-api.cloud.huawei.com/oauth2/v6/groupUnionId/batchGet

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         仅表示本次接口调用成功，实际业务处理结果需要通过**Response Body**中的**resultCode（错误码）** 进行判断。         -                         400         参数错误。         请根据文档排查请求参数是否符合规范。                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                             错误码         描述         解决方法                                       60010002         参数错误。         请按照响应描述中的提示，检查并修改[请求参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-groupunionid#请求参数)。                         60010003         鉴权头Authorization校验不通过。         检查并修改[请求参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-groupunionid#请求参数)中Authorization参数。                         60170001         开发者账号未加入关联主体账号组。         可通过[创建账号组](https://developer.huawei.com/consumer/cn/doc/start/cag-0000001265390541)创建关联主体账号组，然后在关联主体账号组中[添加账号组成员](https://developer.huawei.com/consumer/cn/doc/start/aai-0000001265430513)。                         60010001         系统内部错误。         可重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                            #### 获取OpenID Connect配置公开信息

     接口URL：https://oauth-login.cloud.huawei.com/.well-known/openid-configuration

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         成功。         -                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                            #### 获取验证ID Token的JWT公钥信息

     接口URL：https://oauth-login.cloud.huawei.com/oauth2/v3/certs

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         成功。         -                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                            #### 验证ID Token有效性

     接口URL：https://oauth-login.cloud.huawei.com/oauth2/v3/tokeninfo

     错误码信息：

                                   HTTP响应码         描述         解决方法                                       200         成功。         -                         400         参数错误。         请根据**业务响应主错误码**以及**业务响应子错误码**进一步排查问题。                         403         无权限访问。         通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         404         找不到服务。         请检查请求URI是否正确。                         405         不支持的http请求method。         请检查http请求method是否与接口说明一致。                         500         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         502         请求连接异常，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         503         系统流控。         触发系统流控，请稍后重试。                         504         请求连接超时，常见于网络状况不稳定。         建议稍后重试，若仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         590         服务内部错误。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                                                             业务响应主错误码         业务响应子错误码         描述         解决方法                                       1203         100305         id_token的header解析失败。         id_token格式错误或者伪造的id_token，请排查id_token值是否JWT格式及正确性。                         1203         100306         id_token的payload解析失败。         id_token格式错误或者伪造的id_token，请排查id_token值是否JWT格式及正确性。                         1203         150021         id_token解析失败。         id_token格式错误或者伪造的id_token，请排查id_token值是否JWT格式及正确性。                         1203         150023         id_token的signature解析失败。         id_token格式错误或者伪造的id_token，请排查id_token值是否JWT格式及正确性。                         1203         500         系统内部错误。         系统内部处理错误，建议业务打印错误码信息，并请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         1400         14004         无法通过其kid找到对应的JWT公钥相关信息。         请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。                         1500         15003         无效的id_token。         id_token格式错误或者伪造的id_token，请排查id_token值是否JWT格式及正确性。                         1500         15004         id_token验证失败。         检查验证时使用的公钥、算法是否正确。                         1500         15005         id_token的issuer验证失败。         请排查id_token是否被篡改。                         1500         15006         id_token已过期。         请重新获取新的id_token。                         1500         15007         id_token为空。         请按照接口参数的要求，传入正确的id_token参数。                         1500         15008         id_token格式不正确。         检查id_token的格式是否满足正则：^[0-9a-zA-Z_\-\.]+$。

---
*Updated: 2026-04-22 06:41:42*
