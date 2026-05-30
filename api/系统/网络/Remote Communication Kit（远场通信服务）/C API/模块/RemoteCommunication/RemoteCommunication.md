# RemoteCommunication

> **分区**: API参考  |  **Slug**: `remote-communication-overview`  |  **DocID**: `b9684ad144834eaba95473cc2cdd9ce7`

---

# RemoteCommunication

  #### 概述

提供远程通信能力相关接口。

 支持http会话功能。

 **起始版本：** 5.0.0(12)

   #### 汇总

  #### [h2]文件

 名称 描述   [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h) 声明用于访问远程通信的API。提供基本的函数，结构体和const定义。       #### [h2]结构体

 名称 描述   struct  [Rcp_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___buffer) 文本存储结构。  struct  [Rcp_ContentOrPathOrCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___content_or_path_or_callback) [Rcp_FormFieldFileValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_file_value)中使用的简单表单数据字段值。  struct  [Rcp_FormFieldFileValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_file_value) 表单字段文件值。  struct  [Rcp_FormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_value) 简单表单数据字段值，参见[Rcp_Form](#rcp_form)和[Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value)。  struct  [Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value) 多部分表单域值，在[Rcp_MultipartForm](#rcp_multipartform)中使用。  struct  [Rcp_RequestContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_content) 请求的内容。  struct  [Rcp_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_value) 请求或响应的标头映射的值类型。  struct  [Rcp_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_entry) 请求或响应的标头的所有键值对。  struct  [Rcp_Credential](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___credential) 服务器身份验证中使用的身份验证凭据，包括用户名和密码。  struct  [Rcp_ServerAuthentication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___server_authentication) 服务器身份验证。  struct  [Rcp_Urls](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___urls) URL，用于确定主机是否正在使用代理。  struct  [Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions) 代理配置中用于过滤不使用代理的URLs。  struct  [Rcp_CertificateAuthority](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___certificate_authority) 用于验证远程服务器标识的证书颁发机构（CA）。  struct  [Rcp_ClientCertificate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___client_certificate) 发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。  struct  [Rcp_SecurityConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration) 请求的安全配置。  struct  [Rcp_WebProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___web_proxy) 自定义代理配置。  struct  [Rcp_IpAndPort](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_and_port) 该接口用在[Rcp_DnsServers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_servers)中，表示一个DNS服务器的地址和端口。  struct  [Rcp_DnsServers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_servers) DNS服务器。[Rcp_DnsConfiguration.dnsRules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_configuration#dnsrules)中的类型之一。  struct  [Rcp_IpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_address) 指定静态DNS规则使用的IP地址组。用于[Rcp_StaticDnsRuleItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule_item)。  struct  [Rcp_StaticDnsRuleItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule_item) 描述单个静态DNS规则。  struct  [Rcp_StaticDnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule) 静态DNS规则。  struct  [Rcp_DnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_rule) DNS规则配置。  struct  [Rcp_OnDataReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_data_receive_callback) 接收到数据时回调。[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中的配置。  struct  [Rcp_OnProgressCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_progress_callback) 收发时回调配置，在[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置。  struct  [Rcp_OnHeaderReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_header_receive_callback) [Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置的接收到的header的回调配置。  struct  [Rcp_OnVoidCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_void_callback) 在[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置的数据结束或取消事件的回调配置。  struct  [Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler) 监听不同HTTP事件的回调函数。  struct  [Rcp_Timeout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___timeout) 请求的超时配置。  struct  [Rcp_DnsOverHttps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_over_https) HTTPS上的DNS配置如果设置，则首选由DOH dns服务器解析的地址。  struct  [Rcp_TransferConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___transfer_configuration) 传输配置。  struct  [Rcp_InfoToCollect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___info_to_collect) 指定要收集的请求处理事件。可以通过响应对象检查收集的事件。  struct  [Rcp_TracingConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___tracing_configuration) 请求追踪配置。  struct  [Rcp_ProxyConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___proxy_configuration) 代理配置。  struct  [Rcp_DnsConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_configuration) DNS解析配置。  struct  [Rcp_Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___configuration) 请求配置。  struct  [Rcp_TransferRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___transfer_range) HTTP传输范围。该设置将转换为HTTP Range标头。具有范围标头的HTTP请求要求服务器仅发送回HTTP响应的一部分。  struct  [Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request) 网络请求。  struct  [Rcp_RequestCookieEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_cookie_entry) 描述请求的所有Cookie键值对。  struct  [Rcp_DebugInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___debug_info) 描述存储在[Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response)中的调试信息的结构。  struct  [Rcp_CookieAttributeEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___cookie_attribute_entry) 响应Cookie属性条目。  struct  [Rcp_ResponseCookies](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_cookies) 响应Cookie。  struct  [Rcp_TimeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___time_info) 响应计时信息。  struct  [Rcp_ResponseCallbackObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_callback_object) 响应回调结构体。  struct  [Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response) 网络请求的响应。  struct  [Rcp_Interceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor) 异步拦截器。  struct  [Rcp_SyncInterceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___sync_interceptor) 同步拦截器。  struct  [Rcp_InterceptorArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor_array) 异步拦截器数组。  struct  [Rcp_SyncInterceptorArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___sync_interceptor_array) 同步拦截器数组。  struct  [Rcp_SessionListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___session_listener) 关闭或取消会话事件的回调函数。  struct  [Rcp_ConnectionConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___connection_configuration) 连接配置。  struct  [Rcp_SessionConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___session_configuration) 会话配置。  struct  [Rcp_OnBinaryReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_binary_receive_callback) 接收到响应的二进制数据时的回调。  struct  [Rcp_OnStatusCodeReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_status_code_callback) 接收到响应的状态码时的回调。       #### [h2]宏定义

 名称 描述   [RCP_MAX_REQUEST_ID_LEN](#rcp_max_request_id_len)   32 请求ID的最大长度。  [RCP_MAX_CONTENT_TYPE_LEN](#rcp_max_content_type_len)   64 内容类型最大长度。  [RCP_MAX_FILENAME_LEN](#rcp_max_filename_len)   128 文件名最大长度。  [RCP_MAX_PATH_LEN](#rcp_max_path_len)   128 路径的最大长度。  [RCP_METHOD_GET](#rcp_method_get)   "GET" HTTP get方法。  [RCP_METHOD_HEAD](#rcp_method_head)   "HEAD" HTTP head方法。  [RCP_METHOD_OPTIONS](#rcp_method_options)   "OPTIONS" HTTP options方法。  [RCP_METHOD_TRACE](#rcp_method_trace)   "TRACE" HTTP trace方法。  [RCP_METHOD_DELETE](#rcp_method_delete)   "DELETE" HTTP delete方法。  [RCP_METHOD_POST](#rcp_method_post)   "POST" HTTP post方法。  [RCP_METHOD_PUT](#rcp_method_put)   "PUT" HTTP put方法。  [RCP_METHOD_PATCH](#rcp_method_patch)   "PATCH" HTTP patch方法。  [RCP_IP_MAX_LEN](#rcp_ip_max_len)   40 IP地址的最大长度。  [RCP_HOST_MAX_LEN](#rcp_host_max_len)   256 主机名的最大长度。       #### [h2]类型定义

 名称 描述   typedef enum [Rcp_FormValueType](#rcp_formvaluetype) [Rcp_FormValueType](#rcp_formvaluetype) 表单值类型。  typedef int(* [Rcp_GetDataCallback](#rcp_getdatacallback)) (char *out, uint32_t size) 通过回调函数获取数据。当API需要将数据的下一部分发送到服务器时，将调用此回调。  typedef enum [Rcp_ContentOrPathOrCallbackType](#rcp_contentorpathorcallbacktype) [Rcp_ContentOrPathOrCallbackType](#rcp_contentorpathorcallbacktype) 回调的内容、路径或类型。用于区分[Rcp_ContentOrPathOrCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___content_or_path_or_callback)中使用的数据。  typedef struct [Rcp_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___buffer) [Rcp_Buffer](#rcp_buffer) 文本存储结构。  typedef struct [Rcp_ContentOrPathOrCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___content_or_path_or_callback) [Rcp_ContentOrPathOrCallback](#rcp_contentorpathorcallback) [Rcp_FormFieldFileValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_file_value)中使用的简单表单数据字段值。  typedef enum [Rcp_MultipartValueType](#rcp_multipartvaluetype) [Rcp_MultipartValueType](#rcp_multipartvaluetype) 多部分值类型。用于区分[Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value)中使用的数据。  typedef struct [Rcp_FormFieldFileValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_file_value) [Rcp_FormFieldFileValue](#rcp_formfieldfilevalue) 表单字段文件值。  typedef struct [Rcp_FormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_value) [Rcp_FormFieldValue](#rcp_formfieldvalue) 简单表单数据字段值，参见[Rcp_Form](#rcp_form)和[Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value)。  typedef struct [Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value) [Rcp_MultipartFormFieldValue](#rcp_multipartformfieldvalue) 多部分表单域值，在[Rcp_MultipartForm](#rcp_multipartform)中使用。  typedef enum [Rcp_ContentType](#rcp_contenttype) [Rcp_ContentType](#rcp_contenttype) 内容类型。用于区分[Rcp_RequestContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_content)中使用的数据。  typedef struct [Rcp_Form](#rcp_form) [Rcp_Form](#rcp_form) 简单表单。  typedef struct [Rcp_MultipartForm](#rcp_multipartform) [Rcp_MultipartForm](#rcp_multipartform) 多部分表单。  typedef struct [Rcp_RequestContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_content) [Rcp_RequestContent](#rcp_requestcontent) 请求的内容。  typedef struct [Rcp_Headers](#rcp_headers) [Rcp_Headers](#rcp_headers) 请求或响应的标头。  typedef struct [Rcp_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_value) [Rcp_HeaderValue](#rcp_headervalue) 请求或响应的标头映射的值类型。  typedef struct [Rcp_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_entry) [Rcp_HeaderEntry](#rcp_headerentry) 请求或响应的标头的所有键值对。  typedef enum [Rcp_AuthenticationType](#rcp_authenticationtype) [Rcp_AuthenticationType](#rcp_authenticationtype) 枚举类型。服务器的身份验证类型。如果未设置，请与服务器协商。  typedef struct [Rcp_Credential](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___credential) [Rcp_Credential](#rcp_credential) 服务器身份验证中使用的身份验证凭据，包括用户名和密码。  typedef struct [Rcp_ServerAuthentication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___server_authentication) [Rcp_ServerAuthentication](#rcp_serverauthentication) 服务器身份验证。  typedef bool(* [Rcp_ExclusionFunction](#rcp_exclusionfunction)) (const char *url) 判断host是否使用代理的函数指针，true代表使用，false代表不使用。  typedef struct [Rcp_Urls](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___urls) [Rcp_Urls](#rcp_urls) url，用于确定主机是否正在使用代理。  typedef enum [Rcp_ExclusionsValueType](#rcp_exclusionsvaluetype) [Rcp_ExclusionsValueType](#rcp_exclusionsvaluetype) 代理排除中使用的数据类型. 用于区分[Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)中使用的数据。  typedef struct [Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions) [Rcp_Exclusions](#rcp_exclusions) 代理配置中用于过滤不使用代理的URLs。  typedef enum [Rcp_CertType](#rcp_certtype) [Rcp_CertType](#rcp_certtype) 客户端证书类型。  typedef struct [Rcp_CertificateAuthority](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___certificate_authority) [Rcp_CertificateAuthority](#rcp_certificateauthority) 用于验证远程服务器标识的证书颁发机构（CA）。  typedef struct [Rcp_ClientCertificate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___client_certificate) [Rcp_ClientCertificate](#rcp_clientcertificate) 发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。  typedef enum [Rcp_RemoteValidationType](#rcp_remotevalidationtype) [Rcp_RemoteValidationType](#rcp_remotevalidationtype) 远程验证类型。  typedef struct [Rcp_SecurityConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration) [Rcp_SecurityConfiguration](#rcp_securityconfiguration) 请求的安全配置。  typedef enum [Rcp_ProxyTunnelMode](#rcp_proxytunnelmode) [Rcp_ProxyTunnelMode](#rcp_proxytunnelmode) 用于控制何时创建代理隧道。 隧道或隧道传输意味着向代理发送HTTP CONNECT请求，要求它连接到特定端口号上的远程主机，然后流量只是通过代理。“auto”表示为HTTPS创建隧道，而不是为HTTP创建隧道。“always”表示始终创建隧道。  typedef struct [Rcp_WebProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___web_proxy) [Rcp_WebProxy](#rcp_webproxy) 自定义代理配置。  typedef struct [Rcp_IpAndPort](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_and_port) [Rcp_IpAndPort](#rcp_ipandport) 该接口用在[Rcp_DnsServers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_servers)中，表示一个DNS服务器的地址和端口。  typedef struct [Rcp_DnsServers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_servers) [Rcp_DnsServers](#rcp_dnsservers) DNS服务器。[Rcp_DnsConfiguration.dnsRules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_configuration#dnsrules)中的类型之一。  typedef struct [Rcp_IpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_address) [Rcp_IpAddress](#rcp_ipaddress) 指定静态DNS规则使用的IP地址组。用于[Rcp_StaticDnsRuleItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule_item)。  typedef struct [Rcp_StaticDnsRuleItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule_item) [Rcp_StaticDnsRuleItem](#rcp_staticdnsruleitem) 描述单个静态DNS规则。  typedef struct [Rcp_StaticDnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule) [Rcp_StaticDnsRule](#rcp_staticdnsrule) 静态DNS规则。  typedef [Rcp_IpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_address) *(* [Rcp_DynamicDnsRuleFunction](#rcp_dynamicdnsrulefunction)) (const char *host, uint16_t port) 一个可以根据主机名和端口直接返回IP地址的函数。用于动态DNS解析。  typedef enum [Rcp_DnsRuleType](#rcp_dnsruletype) [Rcp_DnsRuleType](#rcp_dnsruletype) DNS规则类型。用于区分[Rcp_DnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_rule)中使用的dns规则类型。  typedef struct [Rcp_DnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_rule) [Rcp_DnsRule](#rcp_dnsrule) DNS规则配置。  typedef size_t(* [Rcp_OnDataReceiveCallbackFunc](#rcp_ondatareceivecallbackfunc)) (void *usrObject, const char *data) 接收到响应正文时调用的回调函数（字符数据）。  typedef size_t(* [Rcp_OnBinaryReceiveCallbackFunc](#rcp_onbinaryreceivecallbackfunc)) (void *usrObject, [Rcp_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___buffer) *buffer) 接收到响应正文时调用的回调函数（二进制数据）。  typedef void (* [Rcp_OnStatusCodeReceiveCallbackFunc](#rcp_onstatuscodereceivecallbackfunc))(void *usrObject, uint32_t statusCode) 接收到响应状态码时调用的回调函数。  typedef void(* [Rcp_OnProgressCallbackFunc](#rcp_onprogresscallbackfunc)) (void *usrObject, uint64_t totalSize, uint64_t transferredSize) 请求/响应数据传输过程中调用的回调函数。  typedef void(* [Rcp_OnHeaderReceiveCallbackFunc](#rcp_onheaderreceivecallbackfunc)) (void *usrObject, [Rcp_Headers](#rcp_headers) *headers) 收到所有请求时调用的回调。  typedef void(* [Rcp_OnVoidCallbackFunc](#rcp_onvoidcallbackfunc)) (void *usrObject) 请求的DataEnd或Canceled事件回调的回调函数。  typedef struct [Rcp_OnDataReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_data_receive_callback) [Rcp_OnDataReceiveCallback](#rcp_ondatareceivecallback) 接收到数据时回调。[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中的配置。  typedef struct [Rcp_OnProgressCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_progress_callback) [Rcp_OnProgressCallback](#rcp_onprogresscallback) 收发时回调配置，在[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置。  typedef struct [Rcp_OnHeaderReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_header_receive_callback) [Rcp_OnHeaderReceiveCallback](#rcp_onheaderreceivecallback) [Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置的接收到的header回调配置。  typedef struct [Rcp_OnVoidCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_void_callback) [Rcp_OnVoidCallback](#rcp_onvoidcallback) 在[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置的数据结束或已取消事件的回调配置。  typedef struct [Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler) [Rcp_EventsHandler](#rcp_eventshandler) 监听不同HTTP事件的回调函数。  typedef struct [Rcp_Timeout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___timeout) [Rcp_Timeout](#rcp_timeout) 请求的超时配置。  typedef struct [Rcp_DnsOverHttps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_over_https) [Rcp_DnsOverHttps](#rcp_dnsoverhttps) HTTPS上的DNS配置如果设置，则首选由DOH DNS服务器解析的地址。  typedef enum [Rcp_PathPreference](#rcp_pathpreference) [Rcp_PathPreference](#rcp_pathpreference) 请求路径首选项。  typedef struct [Rcp_TransferConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___transfer_configuration) [Rcp_TransferConfiguration](#rcp_transferconfiguration) 传输配置。  typedef struct [Rcp_InfoToCollect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___info_to_collect) [Rcp_InfoToCollect](#rcp_infotocollect) 指定要收集的请求处理事件。可以通过响应对象检查收集的事件。  typedef struct [Rcp_TracingConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___tracing_configuration) [Rcp_TracingConfiguration](#rcp_tracingconfiguration) 请求追踪配置。  typedef enum [Rcp_ProxyType](#rcp_proxytype) [Rcp_ProxyType](#rcp_proxytype) 代理类型。用于区分不同的代理配置。  typedef struct [Rcp_ProxyConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___proxy_configuration) [Rcp_ProxyConfiguration](#rcp_proxyconfiguration) 代理配置。  typedef struct [Rcp_DnsConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_configuration) [Rcp_DnsConfiguration](#rcp_dnsconfiguration) DNS解析配置。  typedef struct [Rcp_Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___configuration) [Rcp_Configuration](#rcp_configuration) 请求配置。  typedef struct [Rcp_TransferRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___transfer_range) [Rcp_TransferRange](#rcp_transferrange) HTTP传输范围。该设置将转换为HTTP Range标头。具有范围标头的HTTP请求要求服务器仅返回HTTP响应的一部分。  typedef struct [Rcp_RequestCookies](#rcp_requestcookies) [Rcp_RequestCookies](#rcp_requestcookies) 请求Cookie。  typedef struct [Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request) [Rcp_Request](#rcp_request) 网络请求。  typedef struct [Rcp_RequestCookieEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_cookie_entry) [Rcp_RequestCookieEntry](#rcp_requestcookieentry) 描述请求的所有Cookie键值对。  typedef enum [Rcp_StatusCode](#rcp_statuscode) [Rcp_StatusCode](#rcp_statuscode) 请求响应的状态码。  typedef enum [Rcp_DebugEvent](#rcp_debugevent) [Rcp_DebugEvent](#rcp_debugevent) 描述调试信息的事件类型。  typedef struct [Rcp_DebugInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___debug_info) [Rcp_DebugInfo](#rcp_debuginfo) 描述存储在[Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response)中的调试信息的结构。  typedef struct [Rcp_CookieAttributes](#rcp_cookieattributes) [Rcp_CookieAttributes](#rcp_cookieattributes) 描述[Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response)中Cookie属性的类型。  typedef struct [Rcp_CookieAttributeEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___cookie_attribute_entry) [Rcp_CookieAttributeEntry](#rcp_cookieattributeentry) 响应Cookie属性条目。  typedef struct [Rcp_ResponseCookies](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_cookies) [Rcp_ResponseCookies](#rcp_responsecookies) 响应Cookie。  typedef struct [Rcp_TimeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___time_info) [Rcp_TimeInfo](#rcp_timeinfo) 响应计时信息。  typedef struct [Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response) [Rcp_Response](#rcp_response) 网络请求的响应。  typedef void(* [Rcp_ResponseCallback](#rcp_responsecallback)) (void *usrCtx, [Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response) *response, uint32_t errCode) 响应回调函数指针。  typedef struct [Rcp_ResponseCallbackObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_callback_object) [Rcp_ResponseCallbackObject](#rcp_responsecallbackobject) 响应回调结构体。  typedef struct [Rcp_RequestHandler](#rcp_requesthandler) [Rcp_RequestHandler](#rcp_requesthandler) 与[Rcp_Interceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor)关联的异步处理器。  typedef struct [Rcp_SyncRequestHandler](#rcp_syncrequesthandler) [Rcp_SyncRequestHandler](#rcp_syncrequesthandler) 与[Rcp_SyncInterceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___sync_interceptor)关联的同步处理器。  typedef struct [Rcp_Interceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor) [Rcp_Interceptor](#rcp_interceptor) 异步拦截器。  typedef struct [Rcp_SyncInterceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___sync_interceptor) [Rcp_SyncInterceptor](#rcp_syncinterceptor) 同步拦截器。  typedef struct [Rcp_InterceptorArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor_array) [Rcp_InterceptorArray](#rcp_interceptorarray) 异步拦截器数组。  typedef struct [Rcp_SyncInterceptorArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___sync_interceptor_array) [Rcp_SyncInterceptorArray](#rcp_syncinterceptorarray) 同步拦截器数组。  typedef enum [Rcp_SessionType](#rcp_sessiontype) [Rcp_SessionType](#rcp_sessiontype) 会话类型。  typedef struct [Rcp_Session](#rcp_session) [Rcp_Session](#rcp_session) 会话。  typedef struct [Rcp_SessionListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___session_listener) [Rcp_SessionListener](#rcp_sessionlistener) 关闭或取消会话事件的回调函数。  typedef struct [Rcp_ConnectionConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___connection_configuration) [Rcp_ConnectionConfiguration](#rcp_connectionconfiguration) 连接配置。  typedef struct [Rcp_SessionConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___session_configuration) [Rcp_SessionConfiguration](#rcp_sessionconfiguration) 会话配置。  typedef struct [Rcp_OnBinaryReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_binary_receive_callback) [Rcp_OnBinaryReceiveCallback](#rcp_onbinaryreceivecallback) 接收到响应的二进制数据时的回调。  typedef struct [Rcp_OnStatusCodeReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_status_code_callback) [Rcp_OnStatusCodeReceiveCallback](#rcp_onstatuscodereceivecallback) 接收到响应的状态码时的回调。       #### [h2]枚举

 名称 描述   [Rcp_FormValueType](#rcp_formvaluetype) {

 RCP_FORM_VALUE_TYPE_INT32, RCP_FORM_VALUE_TYPE_INT64, RCP_FORM_VALUE_TYPE_BOOL, RCP_FORM_VALUE_TYPE_STRING,

 RCP_FORM_VALUE_TYPE_DOUBLE

 }

  表单值类型。  [Rcp_ContentOrPathOrCallbackType](#rcp_contentorpathorcallbacktype) { RCP_FILE_VALUE_TYPE_CONTENT, RCP_FILE_VALUE_TYPE_PATH, RCP_FILE_VALUE_TYPE_CALLBACK } 回调的内容、路径或类型。用于区分[Rcp_ContentOrPathOrCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___content_or_path_or_callback)中使用的数据。  [Rcp_MultipartValueType](#rcp_multipartvaluetype) { RCP_TYPE_FORM_FIELD_VALUE, RCP_TYPE_FORM_FIELD_FILE_VALUE } 多部分值类型。用于区分[Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value)中使用的数据。  [Rcp_ContentType](#rcp_contenttype) { RCP_CONTENT_TYPE_STRING, RCP_CONTENT_TYPE_FORM, RCP_CONTENT_TYPE_MULTIPARTFORM, RCP_CONTENT_TYPE_GETCALLBACK } 内容类型。用于区分[Rcp_RequestContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_content)中使用的数据。  [Rcp_AuthenticationType](#rcp_authenticationtype) { RCP_AUTHENTICATION_AUTO, RCP_AUTHENTICATION_BASIC, RCP_AUTHENTICATION_NTLM, RCP_AUTHENTICATION_DIGEST } 枚举类型。服务器的身份验证类型。如果未设置，请与服务器协商。  [Rcp_ExclusionsValueType](#rcp_exclusionsvaluetype) { RCP_EXCLUSION_USE_URL_ARRAY, RCP_EXCLUSION_USE_CALLBACK } 代理排除中使用的数据类型，用于区分[Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)中使用的数据。  [Rcp_CertType](#rcp_certtype) { RCP_CERT_PEM, RCP_CERT_DER, RCP_CERT_P12 } 客户端证书类型。  [Rcp_RemoteValidationType](#rcp_remotevalidationtype) { RCP_REMOTE_VALIDATION_SYSTEM, RCP_REMOTE_VALIDATION_SKIP, RCP_REMOTE_VALIDATION_CERTIFICATE_AUTHORITY } 远程验证类型。  [Rcp_ProxyTunnelMode](#rcp_proxytunnelmode) { RCP_PROXY_TUNNEL_AUTO, RCP_PROXY_TUNNEL_ALWAYS } 用于控制何时创建代理隧道。 隧道或隧道传输意味着向代理发送HTTP CONNECT请求，要求它连接到特定端口号上的远程主机，然后流量只是通过代理。“auto”表示为HTTPS创建隧道，而不是为HTTP创建隧道。“always”表示始终创建隧道。  [Rcp_DnsRuleType](#rcp_dnsruletype) { RCP_DNS_RULE_DNS_SERVERS, RCP_DNS_RULE_STATIC, RCP_DNS_RULE_DYNAMIC } DNS规则类型。用于区分[Rcp_DnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_rule)中使用的DNS规则类型。  [Rcp_PathPreference](#rcp_pathpreference) { RCP_PATH_PREFERENCE_AUTO, RCP_PATH_PREFERENCE_WIFI, RCP_PATH_PREFERENCE_CELLULAR } 请求路径首选项。  [Rcp_ProxyType](#rcp_proxytype) { RCP_PROXY_SYSTEM, RCP_PROXY_CUSTOM, RCP_PROXY_NO_PROXY } 代理类型。用于区分不同的代理配置。  [Rcp_StatusCode](#rcp_statuscode) {

 RCP_NONE = 0, RCP_OK = 200, RCP_CREATED, RCP_ACCEPTED,

 RCP_NOT_AUTHORITATIVE, RCP_NO_CONTENT, RCP_RESET, RCP_PARTIAL,

 RCP_MULTI_CHOICE = 300, RCP_MOVED_PERMANENTLY, RCP_MOVED_TEMPORARILY, RCP_SEE_OTHER,

 RCP_NOT_MODIFIED, RCP_USE_PROXY, RCP_BAD_REQUEST = 400, RCP_UNAUTHORIZED,

 RCP_PAYMENT_REQUIRED, RCP_FORBIDDEN, RCP_NOT_FOUND, RCP_BAD_METHOD,

 RCP_NOT_ACCEPTABLE, RCP_PROXY_AUTH, RCP_CLIENT_TIMEOUT, RCP_CONFLICT,

 RCP_GONE, RCP_LENGTH_REQUIRED, RCP_PRECON_FAILED, RCP_ENTITY_TOO_LARGE,

 RCP_REQ_TOO_LONG, RCP_UNSUPPORTED_TYPE, RCP_INTERNAL_ERROR = 500, RCP_NOT_IMPLEMENTED,

 RCP_BAD_GATEWAY, RCP_UNAVAILABLE, RCP_GATEWAY_TIMEOUT, RCP_VERSION

 }

  请求响应的状态码。  [Rcp_DebugEvent](#rcp_debugevent) {

 RCP_DEBUG_EVENT_TEXT, RCP_DEBUG_EVENT_HEADER_IN, RCP_DEBUG_EVENT_HEADER_OUT, RCP_DEBUG_EVENT_DATA_IN,

 RCP_DEBUG_EVENT_DATA_OUT, RCP_DEBUG_EVENT_SSL_DATA_IN, RCP_DEBUG_EVENT_SSL_DATA_OUT

 }

  描述调试信息的事件类型。  [Rcp_SessionType](#rcp_sessiontype) { RCP_SESSION_TYPE_HTTP = 0, RCP_SESSION_TYPE_MAX = 100 } 会话类型。       #### [h2]函数

 名称 描述   [Rcp_Form](#rcp_form) * [HMS_Rcp_CreateForm](#hms_rcp_createform) (void) 创建一个简单表单。  void [HMS_Rcp_DestroyForm](#hms_rcp_destroyform) ([Rcp_Form](#rcp_form) *form) 销毁一个简单表单。  uint32_t [HMS_Rcp_SetFormValue](#hms_rcp_setformvalue) ([Rcp_Form](#rcp_form) *form, const char *key, const [Rcp_FormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_value) *value) 设置简单表单的键值对。  [Rcp_FormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_value) * [HMS_Rcp_GetFormValue](#hms_rcp_getformvalue) ([Rcp_Form](#rcp_form) *form, const char *key) 通过键获取一个简单表单的对应值。  [Rcp_MultipartForm](#rcp_multipartform) * [HMS_Rcp_CreateMultipartForm](#hms_rcp_createmultipartform) (void) 创建一个多部分表单。  void [HMS_Rcp_DestroyMultipartForm](#hms_rcp_destroymultipartform) ([Rcp_MultipartForm](#rcp_multipartform) *multipartForm) 销毁一个多部分表单。  uint32_t [HMS_Rcp_SetMultipartFormValue](#hms_rcp_setmultipartformvalue) ([Rcp_MultipartForm](#rcp_multipartform) *multipartForm, const char *key, const [Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value) *value) 设置多部分表单的键值对。  [Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value) * [HMS_Rcp_GetMultipartFormValue](#hms_rcp_getmultipartformvalue) ([Rcp_MultipartForm](#rcp_multipartform) *multipartForm, const char *key) 通过键获取多部分表单的值。  [Rcp_Headers](#rcp_headers) * [HMS_Rcp_CreateHeaders](#hms_rcp_createheaders) (void) 为请求或响应创建标头。  void [HMS_Rcp_DestroyHeaders](#hms_rcp_destroyheaders) ([Rcp_Headers](#rcp_headers) *headers) 销毁请求或响应的标头。  uint32_t [HMS_Rcp_SetHeaderValue](#hms_rcp_setheadervalue) ([Rcp_Headers](#rcp_headers) *headers, const char *name, const char *value) 设置请求或响应头的键值对。  [Rcp_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_value) * [HMS_Rcp_GetHeaderValue](#hms_rcp_getheadervalue) ([Rcp_Headers](#rcp_headers) *headers, const char *name) 通过键获取请求或响应头的值。  [Rcp_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_entry) * [HMS_Rcp_GetHeaderEntries](#hms_rcp_getheaderentries) ([Rcp_Headers](#rcp_headers) *headers) 获取请求或响应头的所有键值对。  void [HMS_Rcp_DestroyHeaderEntries](#hms_rcp_destroyheaderentries) ([Rcp_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_entry) *headerEntry) 销毁[HMS_Rcp_GetHeaderEntries](#hms_rcp_getheaderentries)中获取的所有键值对。  [Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request) * [HMS_Rcp_CreateRequest](#hms_rcp_createrequest) (const char *url) 创建请求。  void [HMS_Rcp_DestroyRequest](#hms_rcp_destroyrequest) ([Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request) *request) 销毁请求。  [Rcp_RequestCookies](#rcp_requestcookies) * [HMS_Rcp_CreateRequestCookies](#hms_rcp_createrequestcookies) (void) 创建空的请求Cookie。  void [HMS_Rcp_DestroyRequestCookies](#hms_rcp_destroyrequestcookies) ([Rcp_RequestCookies](#rcp_requestcookies) *cookies) 销毁请求Cookie。  uint32_t [HMS_Rcp_SetRequestCookieValue](#hms_rcp_setrequestcookievalue) ([Rcp_RequestCookies](#rcp_requestcookies) *cookies, const char *name, const char *value) 设置请求Cookie。  char * [HMS_Rcp_GetRequestCookieValue](#hms_rcp_getrequestcookievalue) ([Rcp_RequestCookies](#rcp_requestcookies) *cookies, const char *name) 通过名称获取请求Cookie的值。  [Rcp_RequestCookieEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_cookie_entry) * [HMS_Rcp_GetRequestCookieEntries](#hms_rcp_getrequestcookieentries) ([Rcp_RequestCookies](#rcp_requestcookies) *cookies) 获取请求Cookie中的所有键值对。  void [HMS_Rcp_DestroyRequestCookieEntries](#hms_rcp_destroyrequestcookieentries) ([Rcp_RequestCookieEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_cookie_entry) *cookieEntry) 销毁从[HMS_Rcp_GetRequestCookieValue](#hms_rcp_getrequestcookievalue)获取的所有与请求Cookie相关的键值对。  const char * [HMS_Rcp_GetResponseCookieAttrValue](#hms_rcp_getresponsecookieattrvalue) ([Rcp_CookieAttributes](#rcp_cookieattributes) *cookieAttributes, const char *name) 通过名称获取Cookie属性的值。  [Rcp_CookieAttributeEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___cookie_attribute_entry) * [HMS_Rcp_GetResponseCookieAttrEntries](#hms_rcp_getresponsecookieattrentries) ([Rcp_CookieAttributes](#rcp_cookieattributes) *cookieAttributes) 在[Rcp_CookieAttributes](#rcp_cookieattributes)中获取所有响应Cookie属性。  void [HMS_Rcp_DestroyResponseCookieAttrEntries](#hms_rcp_destroyresponsecookieattrentries) ([Rcp_CookieAttributeEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___cookie_attribute_entry) *entries) 销毁响应Cookie属性。  uint32_t [HMS_Rcp_CallNextRequestHandler](#hms_rcp_callnextrequesthandler) ([Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request) *request, const [Rcp_RequestHandler](#rcp_requesthandler) *next, const [Rcp_ResponseCallbackObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_callback_object) *responseCallback) 在拦截器[Rcp_Interceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor)的函数中可以调用下一个拦截器或defaultHandler。  [Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response) * [HMS_Rcp_CallNextSyncRequestHandler](#hms_rcp_callnextsyncrequesthandler) ([Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request) *request, const [Rcp_SyncRequestHandler](#rcp_syncrequesthandler) *next, uint32_t *errCode) 在拦截器[Rcp_SyncInterceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___sync_interceptor)的函数中可以调用下一个拦截器或默认处理器。  [Rcp_Session](#rcp_session) * [HMS_Rcp_CreateSession](#hms_rcp_createsession) (const [Rcp_SessionConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___session_configuration) *configuration, uint32_t *errCode) 创建会话。  const char * [HMS_Rcp_GetSessionId](#hms_rcp_getsessionid) ([Rcp_Session](#rcp_session) *session) 获取会话ID。  const [Rcp_SessionConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___session_configuration) * [HMS_Rcp_GetSessionConfiguration](#hms_rcp_getsessionconfiguration) ([Rcp_Session](#rcp_session) *session) 获取会话配置。  [Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response) * [HMS_Rcp_FetchSync](#hms_rcp_fetchsync) ([Rcp_Session](#rcp_session) *session, [Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request) *request, uint32_t *errCode) 发送同步请求并获取响应。  uint32_t [HMS_Rcp_Fetch](#hms_rcp_fetch) ([Rcp_Session](#rcp_session) *session, [Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request) *request, const [Rcp_ResponseCallbackObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_callback_object) *responseCallback) 发送异步请求并获取响应。  uint32_t [HMS_Rcp_CancelRequest](#hms_rcp_cancelrequest) ([Rcp_Session](#rcp_session) *session, const [Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request) *request) 取消一个请求。  uint32_t [HMS_Rcp_CancelSession](#hms_rcp_cancelsession) ([Rcp_Session](#rcp_session) *session) 取消会话。  uint32_t [HMS_Rcp_CloseSession](#hms_rcp_closesession) ([Rcp_Session](#rcp_session) **session) 关闭会话。  uint32_t [HMS_Rcp_SetRequestOnBinaryDataRecvCallback](#hms_rcp_setrequestonbinarydatarecvcallback) ([Rcp_Request](#rcp_request) *request, [Rcp_OnBinaryReceiveCallback](#rcp_onbinaryreceivecallback) onBinaryReceiveCallback) 为请求设置流式接收二进制数据的回调函数。该回调函数与[Rcp_Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___configuration)中配置的[Rcp_OnDataReceiveCallback](#rcp_ondatareceivecallback)功能一致。设置后将替换在[Rcp_Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___configuration)中配置的[Rcp_OnDataReceiveCallback](#rcp_ondatareceivecallback)。  uint32_t [HMS_Rcp_SetRequestOnStatusCodeReceiveCallback](#hms_rcp_setrequestonstatuscodereceivecallback) ([Rcp_Request](#rcp_request) *request, [Rcp_OnStatusCodeReceiveCallback](#rcp_onstatuscodereceivecallback) onStatusCodeReceiveCallback) 为请求设置响应状态码接收回调函数。       #### 宏定义说明

  #### [h2]RCP_HOST_MAX_LEN

#define RCP_HOST_MAX_LEN   256 **描述**

 主机名的最大长度。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_IP_MAX_LEN

#define RCP_IP_MAX_LEN   40 **描述**

 IP地址的最大长度。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_MAX_CONTENT_TYPE_LEN

#define RCP_MAX_CONTENT_TYPE_LEN   64 **描述**

 内容类型最大长度。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_MAX_FILENAME_LEN

#define RCP_MAX_FILENAME_LEN   128 **描述**

 文件名最大长度。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_MAX_PATH_LEN

#define RCP_MAX_PATH_LEN   128 **描述**

 路径的最大长度。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_MAX_REQUEST_ID_LEN

#define RCP_MAX_REQUEST_ID_LEN   32 **描述**

 请求ID的最大长度。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_METHOD_DELETE

#define RCP_METHOD_DELETE   "DELETE" **描述**

 HTTP delete方法。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_METHOD_GET

#define RCP_METHOD_GET   "GET" **描述**

 HTTP get方法。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_METHOD_HEAD

#define RCP_METHOD_HEAD   "HEAD" **描述**

 HTTP head方法。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_METHOD_OPTIONS

#define RCP_METHOD_OPTIONS   "OPTIONS" **描述**

 HTTP options方法。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_METHOD_PATCH

#define RCP_METHOD_PATCH   "PATCH" **描述**

 HTTP patch方法。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_METHOD_POST

#define RCP_METHOD_POST   "POST" **描述**

 HTTP post方法。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_METHOD_PUT

#define RCP_METHOD_PUT   "PUT" **描述**

 HTTP put方法。

 **起始版本：** 5.0.0(12)

   #### [h2]RCP_METHOD_TRACE

#define RCP_METHOD_TRACE   "TRACE" **描述**

 HTTP trace方法。

 **起始版本：** 5.0.0(12)

   #### 类型定义说明

  #### [h2]Rcp_AuthenticationType

typedef enum Rcp_AuthenticationType Rcp_AuthenticationType **描述**

 枚举类型。服务器的身份验证类型。如果未设置，请与服务器协商。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Buffer

typedef struct Rcp_Buffer Rcp_Buffer **描述**

 文本存储结构。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_CertificateAuthority

typedef struct Rcp_CertificateAuthority Rcp_CertificateAuthority **描述**

 用于验证远程服务器标识的证书颁发机构（CA）。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_CertType

typedef enum Rcp_CertType Rcp_CertType **描述**

 客户端证书类型。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ClientCertificate

typedef struct Rcp_ClientCertificate Rcp_ClientCertificate **描述**

 发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Configuration

typedef struct Rcp_Configuration Rcp_Configuration **描述**

 请求配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ConnectionConfiguration

typedef struct Rcp_ConnectionConfiguration Rcp_ConnectionConfiguration **描述**

 连接配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ContentOrPathOrCallback

typedef struct Rcp_ContentOrPathOrCallback Rcp_ContentOrPathOrCallback **描述**

 [Rcp_FormFieldFileValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_file_value)中使用的简单表单数据字段值。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ContentOrPathOrCallbackType

typedef enum Rcp_ContentOrPathOrCallbackType Rcp_ContentOrPathOrCallbackType **描述**

 回调的内容、路径或类型。用于区分[Rcp_ContentOrPathOrCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___content_or_path_or_callback)中使用的数据。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ContentType

typedef enum Rcp_ContentType Rcp_ContentType **描述**

 内容类型。用于区分[Rcp_RequestContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_content)中使用的数据。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_CookieAttributeEntry

typedef struct Rcp_CookieAttributeEntry Rcp_CookieAttributeEntry **描述**

 响应Cookie属性条目。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_CookieAttributes

typedef struct Rcp_CookieAttributes Rcp_CookieAttributes **描述**

 描述[Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response)中Cookie属性的类型。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Credential

typedef struct Rcp_Credential Rcp_Credential **描述**

 服务器身份验证中使用的身份验证凭据，包括用户名和密码。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_DebugEvent

typedef enum Rcp_DebugEvent Rcp_DebugEvent **描述**

 描述调试信息的事件类型。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_DebugInfo

typedef struct Rcp_DebugInfo Rcp_DebugInfo **描述**

 描述存储在[Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response)中的调试信息的结构。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_DnsConfiguration

typedef struct Rcp_DnsConfiguration Rcp_DnsConfiguration **描述**

 DNS解析配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_DnsOverHttps

typedef struct Rcp_DnsOverHttps Rcp_DnsOverHttps **描述**

 如果设置了HTTPS上的DNS配置，则首选由DOH DNS服务器解析的地址。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_DnsRule

typedef struct Rcp_DnsRule Rcp_DnsRule **描述**

 DNS规则配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_DnsRuleType

typedef enum Rcp_DnsRuleType Rcp_DnsRuleType **描述**

 DNS规则类型。用于区分[Rcp_DnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_rule)中使用的DNS规则类型。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_DnsServers

typedef struct Rcp_DnsServers Rcp_DnsServers **描述**

 DNS服务器。[Rcp_DnsConfiguration.dnsRules](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_configuration#dnsrules)中的类型之一。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_DynamicDnsRuleFunction

typedef Rcp_IpAddress*(* Rcp_DynamicDnsRuleFunction) (const char *host, uint16_t port) **描述**

 一个可以根据主机名和端口直接返回IP地址的函数。用于动态DNS解析。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   host 主机名称。  port 端口号。     **返回：**

 Rcp_IpAddress* 指向[Rcp_IpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_address)的指针。基于主机名和端口的IP地址。

   #### [h2]Rcp_EventsHandler

typedef struct Rcp_EventsHandler Rcp_EventsHandler **描述**

 监听不同HTTP事件的回调函数。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ExclusionFunction

typedef bool(* Rcp_ExclusionFunction) (const char *url) **描述**

 判断host是否使用代理的函数指针。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   url 请求的URL。     **返回：**

 bool 返回是否使用代理。

   #### [h2]Rcp_Exclusions

typedef struct Rcp_Exclusions Rcp_Exclusions **描述**

 代理配置中用于过滤不使用代理的URLs。

 如果[Rcp_Request.url](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request#url)匹配[Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)规则，则[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)不会使用代理。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ExclusionsValueType

typedef enum Rcp_ExclusionsValueType Rcp_ExclusionsValueType **描述**

 代理排除中使用的数据类型。用于区分[Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)中使用的数据。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Form

typedef struct Rcp_FormRcp_Form **描述**

 简单表单。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_FormFieldFileValue

typedef struct Rcp_FormFieldFileValue Rcp_FormFieldFileValue **描述**

 表单字段文件值。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_FormFieldValue

typedef struct Rcp_FormFieldValue Rcp_FormFieldValue **描述**

 简单表单数据字段值，参见[Rcp_Form](#rcp_form)和[Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value)。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_FormValueType

typedef enum Rcp_FormValueType Rcp_FormValueType **描述**

 表单值类型。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_GetDataCallback

typedef int(* Rcp_GetDataCallback) (char *out, uint32_t size) **描述**

 通过回调函数获取数据。当API需要将数据的下一部分发送到服务器时，将调用此回调。

 该回调可能使用在[Rcp_FormFieldFileValue.contentOrPathOrCb](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_file_value#contentorpathorcb)和[Rcp_RequestContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_content)中。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   out 输出的数据  size 数据大小     **返回：**

 int 返回值为-1表示错误，返回值0表示停止传输。

   #### [h2]Rcp_HeaderEntry

typedef struct Rcp_HeaderEntry Rcp_HeaderEntry **描述**

 请求或响应的标头的所有键值对。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Headers

typedef struct Rcp_Headers Rcp_Headers **描述**

 请求或响应的标头。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_HeaderValue

typedef struct Rcp_HeaderValue Rcp_HeaderValue **描述**

 请求或响应的标头映射的值类型。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_InfoToCollect

typedef struct Rcp_InfoToCollect Rcp_InfoToCollect **描述**

 指定要收集的请求处理事件。可以通过响应对象检查收集的事件。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Interceptor

typedef struct Rcp_Interceptor Rcp_Interceptor **描述**

 异步拦截器。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_InterceptorArray

typedef struct Rcp_InterceptorArray Rcp_InterceptorArray **描述**

 异步拦截器数组。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_IpAddress

typedef struct Rcp_IpAddress Rcp_IpAddress **描述**

 指定静态DNS规则使用的IP地址组。用于[Rcp_StaticDnsRuleItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule_item)。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_IpAndPort

typedef struct Rcp_IpAndPort Rcp_IpAndPort **描述**

 该接口用在[Rcp_DnsServers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_servers)中，表示一个DNS服务器的地址和端口。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_MultipartForm

typedef struct Rcp_MultipartForm Rcp_MultipartForm **描述**

 多部分表单。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_MultipartFormFieldValue

typedef struct Rcp_MultipartFormFieldValue Rcp_MultipartFormFieldValue **描述**

 多部分表单域值，在[Rcp_MultipartForm](#rcp_multipartform)中使用。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_MultipartValueType

typedef enum Rcp_MultipartValueType Rcp_MultipartValueType **描述**

 多部分值类型。用于区分[Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value)中使用的数据。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_OnDataReceiveCallback

typedef struct Rcp_OnDataReceiveCallback Rcp_OnDataReceiveCallback **描述**

 接收到数据时回调。[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中的配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_OnDataReceiveCallbackFunc

typedef size_t(* Rcp_OnDataReceiveCallbackFunc) (void *usrObject, const char *data) **描述**

 接收到响应正文时调用的回调函数。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   usrObject 用户定义的对象。  data 响应体。     **返回：**

 size_t 响应体的长度。

   #### [h2]Rcp_OnBinaryReceiveCallback

typedef struct Rcp_OnBinaryReceiveCallback Rcp_OnBinaryReceiveCallback **描述**

 响应的二进制数据接收回调函数。

 **起始版本：** 5.0.1(13)

   #### [h2]Rcp_OnBinaryReceiveCallbackFunc

typedef size_t(* Rcp_OnBinaryReceiveCallbackFunc) (void *usrObject, Rcp_Buffer *buffer) **描述**

 接收到响应正文时调用的二进制回调函数。其回调点与[Rcp_Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___configuration)中配置的[Rcp_OnDataReceiveCallback](#rcp_ondatareceivecallback)一致。设置后其回调函数会替换在[Rcp_Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___configuration)中配置的[Rcp_OnDataReceiveCallback](#rcp_ondatareceivecallback)，功能上能够涵盖[Rcp_OnDataReceiveCallback](#rcp_ondatareceivecallback)的字符数据接收获取功能。

 **起始版本：** 5.0.1(13)

 **参数:**

  名称 描述   usrObject 用户定义的对象。  buffer 响应体的二进制数据。     **返回：**

 size_t 响应体二进制数据的长度。

   #### [h2]Rcp_OnStatusCodeReceiveCallback

typedef struct Rcp_OnStatusCodeReceiveCallback Rcp_OnStatusCodeReceiveCallback **描述**

 用于接收响应状态码的回调函数。

 **起始版本：** 6.0.1(21)

   #### [h2]Rcp_OnStatusCodeReceiveCallbackFunc

typedef void (*Rcp_OnStatusCodeReceiveCallbackFunc) (void *usrObject, uint32_t statusCode) **描述**

 接收到响应状态码时调用的回调函数。

 **起始版本：** 6.0.1(21)

 **参数:**

  名称 描述   usrObject 用户定义的对象。  statusCode 响应状态码。       #### [h2]Rcp_OnHeaderReceiveCallback

typedef struct Rcp_OnHeaderReceiveCallback Rcp_OnHeaderReceiveCallback **描述**

 [Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置的接收到的header的回调配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_OnHeaderReceiveCallbackFunc

typedef void(* Rcp_OnHeaderReceiveCallbackFunc) (void *usrObject, Rcp_Headers *headers) **描述**

 收到所有请求时调用的回调。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   usrObject 用户定义的对象。  headers 接收到的请求头，指向[Rcp_Headers](#rcp_headers)的指针。       #### [h2]Rcp_OnProgressCallback

typedef struct Rcp_OnProgressCallback Rcp_OnProgressCallback **描述**

 收发时回调配置，在[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_OnProgressCallbackFunc

typedef void(* Rcp_OnProgressCallbackFunc) (void *usrObject, uint64_t totalSize, uint64_t transferredSize) **描述**

 请求/响应数据传输过程中调用的回调函数。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   usrObject 用户定义的对象。  totalSize 数据总大小。  transferredSize 已传输的数据大小。       #### [h2]Rcp_OnVoidCallback

typedef struct Rcp_OnVoidCallback Rcp_OnVoidCallback **描述**

 在[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置的数据结束或已取消事件的回调配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_OnVoidCallbackFunc

typedef void(* Rcp_OnVoidCallbackFunc) (void *usrObject) **描述**

 请求的DataEnd或Canceled事件回调的回调函数。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   usrObject 用户定义的对象。       #### [h2]Rcp_PathPreference

typedef enum Rcp_PathPreference Rcp_PathPreference **描述**

 请求路径首选项。

 调用者的建议，最终由系统决定使用哪个路径。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ProxyConfiguration

typedef struct Rcp_ProxyConfiguration Rcp_ProxyConfiguration **描述**

 代理配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ProxyTunnelMode

typedef enum Rcp_ProxyTunnelMode Rcp_ProxyTunnelMode **描述**

 用于控制何时创建代理隧道。 隧道或隧道传输意味着向代理发送HTTP CONNECT请求，要求它连接到特定端口号上的远程主机，然后流量只是通过代理。'auto'表示为HTTPS创建隧道，而不是为HTTP创建隧道。“always”表示始终创建隧道。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ProxyType

typedef enum Rcp_ProxyType Rcp_ProxyType **描述**

 代理类型。用于区分不同的代理配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_RemoteValidationType

typedef enum Rcp_RemoteValidationType Rcp_RemoteValidationType **描述**

 远程验证类型。

 用于区分验证远程服务器身份的CA，在[Rcp_SecurityConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration)中描述。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Request

typedef struct Rcp_Request Rcp_Request **描述**

 网络请求。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_RequestContent

typedef struct Rcp_RequestContent Rcp_RequestContent **描述**

 请求的内容。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_RequestCookieEntry

typedef struct Rcp_RequestCookieEntry Rcp_RequestCookieEntry **描述**

 描述请求的所有Cookie键值对。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_RequestCookies

typedef struct Rcp_RequestCookies Rcp_RequestCookies **描述**

 请求Cookie。

 允许你在一个对象中指定你需要的所有Cookies，例如：{'name1'：'value1'，'name2'：'value2'}。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_RequestHandler

typedef struct Rcp_RequestHandler Rcp_RequestHandler **描述**

 与[Rcp_Interceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor)关联的异步处理器。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Response

typedef struct Rcp_Response Rcp_Response **描述**

 网络请求的响应。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ResponseCallback

typedef void(* Rcp_ResponseCallback) (void *usrCtx, Rcp_Response *response, uint32_t errCode) **描述**

 响应回调函数指针。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   usrCtx 用户上下文。  response 请求所生成的响应。指向[Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response)的指针。  errCode [out] 表示常见的错误代码。

  0：成功。

  [1007900001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900001-不支持的协议)：不支持的协议。

  [1007900003](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900003-url格式错误)：URL使用了错误/非法的格式或缺少URL。

  [1007900005](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900005-代理服务器域名解析失败)：无法解析代理名称。

  [1007900006](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900006-域名解析失败)：无法解析主机名。

  [1007900007](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900007-无法连接到服务器)：无法连接到服务器。

  [1007900008](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900008-服务器返回非法数据)：异常的服务器回复。

  [1007900009](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900009-拒绝对远程资源的访问)：对远程资源的访问被拒绝。

  [1007900016](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900016-http2帧层错误)：HTTP2框架层中的错误。

  [1007900018](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900018-服务器返回数据不完整)：已传输部分文件。

  [1007900025](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900025-上传失败)：上载失败。

  [1007900026](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900026-从文件应用程序中打开读取本地数据失败)：无法从文件/应用程序中打开/读取本地数据。

  [1007900027](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900027-内存不足)：内存不足。

  [1007900028](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900028-操作超时)：已达到超时。

  [1007900047](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900047-重定向次数达到最大值)：重定向数达到最大数量。

  [1007900052](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900052-服务器没有返回内容)：服务器没有返回任何内容（没有标头，没有数据）。

  [1007900055](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900055-发送网络数据失败)：向对等方发送数据失败。

  [1007900056](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900056-接收网络数据失败)：从对等方接收数据时失败。

  [1007900058](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900058-本地ssl证书错误)：本地SSL证书有问题。

  [1007900059](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900059-无法使用指定的密码)：无法使用指定的SSL密钥。

  [1007900060](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900060-远程服务器ssl证书或ssh秘钥不正确)：SSL对等证书或SSH远程密钥不正常。

  [1007900061](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900061-无法识别或错误的http编码格式)：无法识别或错误的HTTP内容或传输编码。

  [1007900063](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900063-超出最大文件大小)：超过了最大文件大小。

  [1007900070](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900070-服务器磁盘空间不足)：磁盘已满或分配超出。

  [1007900073](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900073-服务器返回文件已存在)：远程文件已存在。

  [1007900077](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900077-ssl-ca证书不存在或没有访问权限)：SSL CA证书有问题 (路径？ 访问权限？)。

  [1007900078](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900078-url请求的文件不存在)：找不到远程文件。

  [1007900992](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900992-请求已被取消)：请求已取消。

  [1007900993](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900993-会话已关闭)：会话已关闭或无效。

  [1007900094](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900094-身份校验失败)：身份验证函数返回了错误。

  [1007900201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900201-禁止明文传输)：禁止明文传输。从6.1.0(23)起新增支持此错误码。

  [1007900995](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900995-获取系统代理失败)：获取系统代理失败。

  [1007900996](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900996-代理类型不支持)：代理类型不受支持。

  [1007900997](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900997-无效的内容类型)：无效的内容类型。

  [1007900998](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900998--所请求的方法不被支持)：方法不受支持。

  [1007900999](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900999-内部错误)：内部错误。

 Others：1007900000 + CURL_ERROR_CODE。 更多常见的错误码，请参见[curl错误码](https://curl.se/libcurl/c/libcurl-errors.html)。

        #### [h2]Rcp_ResponseCallbackObject

typedef struct Rcp_ResponseCallbackObject Rcp_ResponseCallbackObject **描述**

 响应回调结构体。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ResponseCookies

typedef struct Rcp_ResponseCookies Rcp_ResponseCookies **描述**

 响应Cookie。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_SecurityConfiguration

typedef struct Rcp_SecurityConfiguration Rcp_SecurityConfiguration **描述**

 请求的安全配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_ServerAuthentication

typedef struct Rcp_ServerAuthentication Rcp_ServerAuthentication **描述**

 服务器身份验证。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Session

typedef struct Rcp_Session Rcp_Session **描述**

 会话。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_SessionConfiguration

typedef struct Rcp_SessionConfiguration Rcp_SessionConfiguration **描述**

 会话配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_SessionListener

typedef struct Rcp_SessionListener Rcp_SessionListener **描述**

 关闭或取消会话事件的回调函数。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_SessionType

typedef enum Rcp_SessionType Rcp_SessionType **描述**

 会话类型。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_StaticDnsRule

typedef struct Rcp_StaticDnsRule Rcp_StaticDnsRule **描述**

 静态DNS规则。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_StaticDnsRuleItem

typedef struct Rcp_StaticDnsRuleItem Rcp_StaticDnsRuleItem **描述**

 描述单个静态DNS规则。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_StatusCode

typedef enum Rcp_StatusCode Rcp_StatusCode **描述**

 请求响应的状态码。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_SyncInterceptor

typedef struct Rcp_SyncInterceptor Rcp_SyncInterceptor **描述**

 同步拦截器。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_SyncInterceptorArray

typedef struct Rcp_SyncInterceptorArray Rcp_SyncInterceptorArray **描述**

 同步拦截器数组。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_SyncRequestHandler

typedef struct Rcp_SyncRequestHandler Rcp_SyncRequestHandler **描述**

 与[Rcp_SyncInterceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___sync_interceptor)关联的同步处理器。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_TimeInfo

typedef struct Rcp_TimeInfo Rcp_TimeInfo **描述**

 响应计时信息。

 它将在[Rcp_Response.timeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response#timeinfo)中被收集，[Rcp_TracingConfiguration.collectTimeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___tracing_configuration#collecttimeinfo)决定是否收集它。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Timeout

typedef struct Rcp_Timeout Rcp_Timeout **描述**

 请求的超时配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_TracingConfiguration

typedef struct Rcp_TracingConfiguration Rcp_TracingConfiguration **描述**

 请求追踪配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_TransferConfiguration

typedef struct Rcp_TransferConfiguration Rcp_TransferConfiguration **描述**

 传输配置。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_TransferRange

typedef struct Rcp_TransferRange Rcp_TransferRange **描述**

 HTTP传输范围。该设置将转换为HTTP Range标头。具有范围标头的HTTP请求要求服务器仅发送回HTTP响应的一部分。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_Urls

typedef struct Rcp_Urls Rcp_Urls **描述**

 URLs，用于确定主机是否正在使用代理。

 **起始版本：** 5.0.0(12)

   #### [h2]Rcp_WebProxy

typedef struct Rcp_WebProxy Rcp_WebProxy **描述**

 自定义代理配置。

 **起始版本：** 5.0.0(12)

   #### 枚举类型说明

  #### [h2]Rcp_AuthenticationType

enum Rcp_AuthenticationType **描述**

 枚举类型。服务器的身份验证类型。如果未设置，请与服务器协商。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_AUTHENTICATION_AUTO 自动  RCP_AUTHENTICATION_BASIC 基本类型  RCP_AUTHENTICATION_NTLM NTLM类型  RCP_AUTHENTICATION_DIGEST DIGEST类型       #### [h2]Rcp_CertType

enum Rcp_CertType **描述**

 客户端证书类型。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_CERT_PEM PEM证书类型。  RCP_CERT_DER DER证书类型。  RCP_CERT_P12 P12证书类型。       #### [h2]Rcp_ContentOrPathOrCallbackType

enum Rcp_ContentOrPathOrCallbackType **描述**

 回调的内容、路径或类型。用于区分[Rcp_ContentOrPathOrCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___content_or_path_or_callback)中使用的数据。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_FILE_VALUE_TYPE_CONTENT 表示内容类型。  RCP_FILE_VALUE_TYPE_PATH 表示路径类型。  RCP_FILE_VALUE_TYPE_CALLBACK 表示回调类型。       #### [h2]Rcp_ContentType

enum Rcp_ContentType **描述**

 内容类型。用于区分[Rcp_RequestContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_content)中使用的数据。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_CONTENT_TYPE_STRING 文本。  RCP_CONTENT_TYPE_FORM 表格。  RCP_CONTENT_TYPE_MULTIPARTFORM 多部分表格。  RCP_CONTENT_TYPE_GETCALLBACK 回调函数。       #### [h2]Rcp_DebugEvent

enum Rcp_DebugEvent **描述**

 描述调试信息的事件类型。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_DEBUG_EVENT_TEXT 文本事件。  RCP_DEBUG_EVENT_HEADER_IN 传入标头事件。  RCP_DEBUG_EVENT_HEADER_OUT 传出标头事件。  RCP_DEBUG_EVENT_DATA_IN 接收数据事件。  RCP_DEBUG_EVENT_DATA_OUT 外发数据事件。  RCP_DEBUG_EVENT_SSL_DATA_IN 传入SSL/TLS事件。  RCP_DEBUG_EVENT_SSL_DATA_OUT 传出SSL/TLS事件。       #### [h2]Rcp_DnsRuleType

enum Rcp_DnsRuleType **描述**

 DNS规则类型。用于区分[Rcp_DnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_rule)中使用的DNS规则类型。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_DNS_RULE_DNS_SERVERS DNS服务器。  RCP_DNS_RULE_STATIC 静态DNS规则。  RCP_DNS_RULE_DYNAMIC 动态DNS规则。       #### [h2]Rcp_ExclusionsValueType

enum Rcp_ExclusionsValueType **描述**

 代理排除中使用的数据类型. 用于区分[Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)中使用的数据。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_EXCLUSION_USE_URL_ARRAY 表示在[Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)中使用urls。  RCP_EXCLUSION_USE_CALLBACK 在[Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)中使用回调函数[Rcp_ExclusionFunction](#rcp_exclusionfunction)。       #### [h2]Rcp_FormValueType

enum Rcp_FormValueType **描述**

 表单值类型。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_FORM_VALUE_TYPE_INT32 表示INT32数据类型。  RCP_FORM_VALUE_TYPE_INT64 表示INT64数据类型。  RCP_FORM_VALUE_TYPE_BOOL 表示bool数据类型。  RCP_FORM_VALUE_TYPE_STRING 表示string数据类型。  RCP_FORM_VALUE_TYPE_DOUBLE 表示double数据类型。       #### [h2]Rcp_MultipartValueType

enum Rcp_MultipartValueType **描述**

 多部分值类型。用于区分[Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value)中使用的数据。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_TYPE_FORM_FIELD_VALUE 表示使用[Rcp_FormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_value)。  RCP_TYPE_FORM_FIELD_FILE_VALUE 表示使用[Rcp_FormFieldFileValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_file_value)。       #### [h2]Rcp_PathPreference

enum Rcp_PathPreference **描述**

 请求路径首选项。

 这只是调用者的建议，系统决定使用哪个路径。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_PATH_PREFERENCE_AUTO 自动。  RCP_PATH_PREFERENCE_WIFI 倾向WIFI网络。  RCP_PATH_PREFERENCE_CELLULAR 倾向蜂窝网路。       #### [h2]Rcp_ProxyTunnelMode

enum Rcp_ProxyTunnelMode **描述**

 用于控制何时创建代理隧道。 隧道或隧道传输意味着向代理发送HTTP CONNECT请求，要求它连接到特定端口号上的远程主机，然后流量只是通过代理。“auto”表示为HTTPS创建隧道，而不是为HTTP创建隧道。“always”表示始终创建隧道。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_PROXY_TUNNEL_AUTO 自动。  RCP_PROXY_TUNNEL_ALWAYS 总是创建。       #### [h2]Rcp_ProxyType

enum Rcp_ProxyType **描述**

 代理类型。用于区分不同的代理配置。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_PROXY_SYSTEM 系统代理。  RCP_PROXY_CUSTOM 使用自定义代理，选择后将解析[Rcp_ProxyConfiguration.customProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___proxy_configuration#customproxy)。  RCP_PROXY_NO_PROXY 不使用代理。       #### [h2]Rcp_RemoteValidationType

enum Rcp_RemoteValidationType **描述**

 远程验证类型。

 用于区分验证远程服务器身份的CA在[Rcp_SecurityConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration)中描述。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_REMOTE_VALIDATION_SYSTEM 系统验证。  RCP_REMOTE_VALIDATION_SKIP 跳过验证。  RCP_REMOTE_VALIDATION_CERTIFICATE_AUTHORITY CA验证。       #### [h2]Rcp_SessionType

enum Rcp_SessionType **描述**

 会话类型。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_SESSION_TYPE_HTTP 使用HTTP会话。  RCP_SESSION_TYPE_MAX Rcp_SessionType的最大值。       #### [h2]Rcp_StatusCode

enum Rcp_StatusCode **描述**

 请求响应的状态码。

 **起始版本：** 5.0.0(12)

  枚举值 描述   RCP_NONE = 0 默认值。  RCP_OK = 200 请求成功。  RCP_CREATED = 201 请求成功并创建了新资源。  RCP_ACCEPTED = 202 请求已接受，但尚未处理。  RCP_NOT_AUTHORITATIVE = 203 返回信息不是原始的。  RCP_NO_CONTENT = 204 请求成功，但无返回内容。  RCP_RESET= 205 请求已成功处理，但需要重置内容。  RCP_PARTIAL = 206 部分内容请求成功。  RCP_MULTI_CHOICE = 300 对于该请求，服务器支持多种操作方式。  RCP_MOVED_PERMANENTLY = 301 永久重定向。  RCP_MOVED_TEMPORARILY = 302 临时重定向。  RCP_SEE_OTHER = 303 查看其他位置。  RCP_NOT_MODIFIED = 304 资源未修改。  RCP_USE_PROXY = 305 使用代理。  RCP_BAD_REQUEST = 400 请求语法错误。  RCP_UNAUTHORIZED = 401 未授权。  RCP_PAYMENT_REQUIRED = 402 需要付费。  RCP_FORBIDDEN = 403 禁止访问。  RCP_NOT_FOUND = 404 资源未找到。  RCP_BAD_METHOD = 405 方法不允许。  RCP_NOT_ACCEPTABLE = 406 不接受。  RCP_PROXY_AUTH = 407 需要代理授权。  RCP_CLIENT_TIMEOUT = 408 请求超时。  RCP_CONFLICT = 409 冲突。  RCP_GONE = 410 资源已永久删除。  RCP_LENGTH_REQUIRED = 411 需要有效长度。  RCP_PRECON_FAILED = 412 未满足前提条件。  RCP_ENTITY_TOO_LARGE = 413 请求实体过大。  RCP_REQ_TOO_LONG = 414 请求的 URI 过长。  RCP_UNSUPPORTED_TYPE = 415 不支持的媒体类型。  RCP_INTERNAL_ERROR = 500 服务器内部错误。  RCP_NOT_IMPLEMENTED = 501 尚未实现。  RCP_BAD_GATEWAY = 502 网关错误。  RCP_UNAVAILABLE = 503 服务不可用。  RCP_GATEWAY_TIMEOUT = 504 网关超时。  RCP_VERSION = 505 不支持的HTTP版本。       #### 函数说明

  #### [h2]HMS_Rcp_CallNextRequestHandler()

uint32_t HMS_Rcp_CallNextRequestHandler (Rcp_Request * request, const Rcp_RequestHandler * next, const Rcp_ResponseCallbackObject * responseCallback ) **描述**

 在拦截器[Rcp_Interceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor)的函数中可以调用下一个拦截器或defaultHandler。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   request 指向[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)的指针。  next 指向下一个异步处理器的指针[Rcp_RequestHandler](#rcp_requesthandler)。  responseCallback 响应回调。指向[Rcp_ResponseCallbackObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_callback_object)的指针。     **返回：**

 uint32_t。[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败) - 参数错误 或 表示下一个异步处理器的返回值。

   #### [h2]HMS_Rcp_CallNextSyncRequestHandler()

Rcp_Response* HMS_Rcp_CallNextSyncRequestHandler (Rcp_Request * request, const Rcp_SyncRequestHandler * next, uint32_t * errCode ) **描述**

 在拦截器[Rcp_SyncInterceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___sync_interceptor)的函数中可以调用下一个拦截器或默认处理器。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   request 指向[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)的指针。  next 指向下一个同步处理器的指针[Rcp_SyncRequestHandler](#rcp_syncrequesthandler)。  errCode 输出项。[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)：参数错误 或 表示下一个同步处理器的返回值。     **返回：**

 Rcp_Response* 返回响应。

   #### [h2]HMS_Rcp_CancelRequest()

uint32_t HMS_Rcp_CancelRequest (Rcp_Session * session, const Rcp_Request * request ) **描述**

 取消一个请求。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   session 需要取消请求的会话。指向[Rcp_Session](#rcp_session)的指针。  request 需要取消的请求。指向要关闭的[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)的指针。     **返回：**

 取消成功时返回0，权限不足时返回[201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section201-权限校验失败)，输入参数为空指针时返回[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)，会话已关闭或无效时返回[1007900993](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900993-会话已关闭)。

   #### [h2]HMS_Rcp_CancelSession()

uint32_t HMS_Rcp_CancelSession (Rcp_Session * session) **描述**

 取消会话。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.0(12)

 **参数：**

  名称 描述   session 需要取消的会话。指向要关闭的[Rcp_Session](#rcp_session)的指针。     **返回：**

 取消成功时返回0，权限不足时返回[201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section201-权限校验失败)，输入参数为空指针时返回[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)，会话已关闭或无效时返回[1007900993](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900993-会话已关闭)。

   #### [h2]HMS_Rcp_CloseSession()

uint32_t HMS_Rcp_CloseSession (Rcp_Session ** session) **描述**

 关闭会话。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   session 需要关闭的会话。指向[Rcp_Session](#rcp_session)指针的指针。     **返回：**

 关闭成功时返回0，权限不足时返回[201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section201-权限校验失败)，输入参数为空指针时返回[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)，会话已关闭或无效时返回[1007900993](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900993-会话已关闭)。

   #### [h2]HMS_Rcp_CreateForm()

Rcp_Form* HMS_Rcp_CreateForm (void) **描述**

 创建一个简单表单。

 **起始版本：** 5.0.0(12)

 **返回：**

 Rcp_Form* 指向[Rcp_Form](#rcp_form)的指针。

   #### [h2]HMS_Rcp_CreateHeaders()

Rcp_Headers* HMS_Rcp_CreateHeaders (void) **描述**

 为请求或响应创建标头。

 **起始版本：** 5.0.0(12)

 **返回：**

 Rcp_Headers* 创建的标头。指向[Rcp_Headers](#rcp_headers)的指针。

   #### [h2]HMS_Rcp_CreateMultipartForm()

Rcp_MultipartForm* HMS_Rcp_CreateMultipartForm (void) **描述**

 创建一个多部分表单。

 **起始版本：** 5.0.0(12)

 **返回：**

 Rcp_MultipartForm* 返回创建的多部分表单，指向[Rcp_MultipartForm](#rcp_multipartform)的指针。

   #### [h2]HMS_Rcp_CreateRequest()

Rcp_Request* HMS_Rcp_CreateRequest (const char * url) **描述**

 创建请求。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   url 请求URL。     **返回：**

 Rcp_Request* 返回创建的请求。指向[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)的指针。

   #### [h2]HMS_Rcp_CreateRequestCookies()

Rcp_RequestCookies* HMS_Rcp_CreateRequestCookies (void) **描述**

 创建空的请求Cookie。

 **起始版本：** 5.0.0(12)

 **返回：**

 Rcp_RequestCookies* 返回指向已创建的[Rcp_RequestCookies](#rcp_requestcookies)的指针。

   #### [h2]HMS_Rcp_CreateSession()

Rcp_Session* HMS_Rcp_CreateSession (const Rcp_SessionConfiguration * configuration, uint32_t * errCode ) **描述**

 创建会话。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   configuration 会话配置。  errCode 0：成功。

  [401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)：参数错误。

  [201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section201-权限校验失败)：权限不足。

  [1007900027](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900027-内存不足)：内存不足。

      **返回：**

 Rcp_Session* 返回创建的会话。指向[Rcp_Session](#rcp_session)的指针。

   #### [h2]HMS_Rcp_DestroyForm()

void HMS_Rcp_DestroyForm (Rcp_Form * form) **描述**

 销毁一个简单表单。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   form 要销毁的表格。指向[Rcp_Form](#rcp_form)的指针。       #### [h2]HMS_Rcp_DestroyHeaderEntries()

void HMS_Rcp_DestroyHeaderEntries (Rcp_HeaderEntry * headerEntry) **描述**

 销毁[HMS_Rcp_GetHeaderEntries](#hms_rcp_getheaderentries)中获取的所有键值对。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   headerEntry 指向要销毁的[Rcp_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_entry)的指针。       #### [h2]HMS_Rcp_DestroyHeaders()

void HMS_Rcp_DestroyHeaders (Rcp_Headers * headers) **描述**

 销毁请求或响应的标头。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   headers 指向要销毁的[Rcp_Headers](#rcp_headers)的指针。       #### [h2]HMS_Rcp_DestroyMultipartForm()

void HMS_Rcp_DestroyMultipartForm (Rcp_MultipartForm * multipartForm) **描述**

 销毁一个多部分表单。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   multipartForm 要销毁的多部分表单。指向[Rcp_MultipartForm](#rcp_multipartform)的指针。       #### [h2]HMS_Rcp_DestroyRequest()

void HMS_Rcp_DestroyRequest (Rcp_Request * request) **描述**

 销毁请求。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   request 指向要销毁的[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)的指针。       #### [h2]HMS_Rcp_DestroyRequestCookieEntries()

void HMS_Rcp_DestroyRequestCookieEntries (Rcp_RequestCookieEntry * cookieEntry) **描述**

 销毁从[HMS_Rcp_GetRequestCookieValue](#hms_rcp_getrequestcookievalue)获取的所有与请求Cookie相关的键值对。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   cookieEntry 指向要销毁的[Rcp_RequestCookieEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_cookie_entry)的指针。       #### [h2]HMS_Rcp_DestroyRequestCookies()

void HMS_Rcp_DestroyRequestCookies (Rcp_RequestCookies * cookies) **描述**

 销毁请求Cookie。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   cookies 指向要销毁的[Rcp_RequestCookies](#rcp_requestcookies)的指针。       #### [h2]HMS_Rcp_DestroyResponseCookieAttrEntries()

void HMS_Rcp_DestroyResponseCookieAttrEntries (Rcp_CookieAttributeEntry * entries) **描述**

 销毁响应Cookie属性。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   entries 指向要销毁的[Rcp_CookieAttributeEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___cookie_attribute_entry)的指针。       #### [h2]HMS_Rcp_Fetch()

uint32_t HMS_Rcp_Fetch (Rcp_Session * session, Rcp_Request * request, const Rcp_ResponseCallbackObject * responseCallback ) **描述**

 发送异步请求并获取响应。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   session 发起请求使用的会话。指向[Rcp_Session](#rcp_session)的指针。  request 发送的请求。指向[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)的指针。  responseCallback 指向用户定义的响应回调函数的指针。详情请参见[Rcp_ResponseCallbackObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_callback_object)。     **返回：**

 执行成功时返回0，权限不足时返回[201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section201-权限校验失败)，输入参数为空指针时返回[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)，会话已关闭或无效时返回[1007900993](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900993-会话已关闭)。

 **权限：**

 ohos.permission.INTERNET（如需使用[PathPreference](#rcp_pathpreference-1)的RCP_PATH_PREFERENCE_CELLULAR模式，则额外需要ohos.permission.GET_NETWORK_INFO）

   #### [h2]HMS_Rcp_FetchSync()

Rcp_Response* HMS_Rcp_FetchSync (Rcp_Session * session, Rcp_Request * request, uint32_t * errCode ) **描述**

 发送同步请求并获取响应。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   session 发起请求使用的会话。指向[Rcp_Session](#rcp_session)的指针。  request 发送的请求。指向[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)的指针。  errCode [out] 输出常见的错误代码。

  0：成功。

  [201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section201-权限校验失败)：权限不足。

  [401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)：参数错误。

  [1007900001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900001-不支持的协议)：不支持的协议。

  [1007900003](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900003-url格式错误)：URL使用了错误/非法的格式或缺少URL。

  [1007900005](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900005-代理服务器域名解析失败)：无法解析代理名称。

  [1007900006](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900006-域名解析失败)：无法解析主机名。

  [1007900007](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900007-无法连接到服务器)：无法连接到服务器。

  [1007900008](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900008-服务器返回非法数据)：异常的服务器回复。

  [1007900009](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900009-拒绝对远程资源的访问)：对远程资源的访问被拒绝。

  [1007900016](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900016-http2帧层错误)：HTTP2框架层中的错误。

  [1007900018](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900018-服务器返回数据不完整)：已传输部分文件。

  [1007900025](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900025-上传失败)：上载失败。

  [1007900026](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900026-从文件应用程序中打开读取本地数据失败)：无法从文件/应用程序中打开/读取本地数据。

  [1007900027](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900027-内存不足)：内存不足。

  [1007900028](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900028-操作超时)：已达到超时。

  [1007900047](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900047-重定向次数达到最大值)：重定向数达到最大数量。

  [1007900052](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900052-服务器没有返回内容)：服务器没有返回任何内容（没有标头，没有数据）。

  [1007900055](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900055-发送网络数据失败)：向对等方发送数据失败。

  [1007900056](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900056-接收网络数据失败)：从对等方接收数据时失败。

  [1007900058](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900058-本地ssl证书错误)：本地SSL证书有问题。

  [1007900059](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900059-无法使用指定的密码)：无法使用指定的SSL密钥。

  [1007900060](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900060-远程服务器ssl证书或ssh秘钥不正确)：SSL对等证书或SSH远程密钥不正常。

  [1007900061](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900061-无法识别或错误的http编码格式)：无法识别或错误的HTTP内容或传输编码。

  [1007900063](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900063-超出最大文件大小)：超过了最大文件大小。

  [1007900070](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900070-服务器磁盘空间不足)：磁盘已满或分配超出。

  [1007900073](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900073-服务器返回文件已存在)：远程文件已存在。

  [1007900077](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900077-ssl-ca证书不存在或没有访问权限)：SSL CA证书有问题 (路径？ 访问权限?)。

  [1007900078](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900078-url请求的文件不存在)：找不到远程文件。

  [1007900992](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900992-请求已被取消)：请求已取消。

  [1007900993](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900993-会话已关闭)：会话已关闭或无效。

  [1007900094](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900094-身份校验失败)：身份验证函数返回了错误。

  [1007900201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900201-禁止明文传输)：禁止明文传输。从6.1.0(23)起新增支持此错误码。

  [1007900995](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900995-获取系统代理失败)：获取系统代理失败。

  [1007900996](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900996-代理类型不支持)：代理类型不受支持。

  [1007900997](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900997-无效的内容类型)：无效的内容类型。

  [1007900998](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900998--所请求的方法不被支持)：方法不受支持。

  [1007900999](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900999-内部错误)：内部错误。

 Others：1007900000 + CURL_ERROR_CODE。更多常见的错误码，请参见[curl错误码](https://curl.se/libcurl/c/libcurl-errors.html)。

      **返回：**

 Rcp_Response* 返回的响应。指向[Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response)的指针。

 **权限：**

 ohos.permission.INTERNET（如需使用[PathPreference](#rcp_pathpreference-1)的RCP_PATH_PREFERENCE_CELLULAR模式，则额外需要ohos.permission.GET_NETWORK_INFO）

   #### [h2]HMS_Rcp_GetFormValue()

Rcp_FormFieldValue* HMS_Rcp_GetFormValue (Rcp_Form * form, const char * key ) **描述**

 通过键获取一个简单表单的对应值。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   form 指向[Rcp_Form](#rcp_form)的指针。  key 键。     **返回：**

 Rcp_FormFieldValue* 值。指向{@Rcp_FormFieldValue}的指针。

   #### [h2]HMS_Rcp_GetHeaderEntries()

Rcp_HeaderEntry* HMS_Rcp_GetHeaderEntries (Rcp_Headers * headers) **描述**

 获取请求或响应头的所有键值对。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   headers 指向要获取所有键值对的[Rcp_Headers](#rcp_headers)的指针。     **返回：**

 Rcp_HeaderEntry* 指向所有获取到的键值对[Rcp_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_entry)。

   #### [h2]HMS_Rcp_GetHeaderValue()

Rcp_HeaderValue* HMS_Rcp_GetHeaderValue (Rcp_Headers * headers, const char * name ) **描述**

 通过键获取请求或响应头的值。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   headers 指向要获取值的[Rcp_Headers](#rcp_headers)的指针。  name 键。     **返回：**

 Rcp_HeaderValue* 指向获得的[Rcp_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_value)的指针。

   #### [h2]HMS_Rcp_GetMultipartFormValue()

Rcp_MultipartFormFieldValue* HMS_Rcp_GetMultipartFormValue (Rcp_MultipartForm * multipartForm, const char * key ) **描述**

 通过键获取多部分表单的值。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   multipartForm 需要获取值的多部分表单。指向[Rcp_MultipartForm](#rcp_multipartform)的指针。  key 键。     **返回：**

 Rcp_MultipartFormFieldValue* 多部分表单的值。指向[Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value)的指针。

   #### [h2]HMS_Rcp_GetRequestCookieEntries()

Rcp_RequestCookieEntry* HMS_Rcp_GetRequestCookieEntries (Rcp_RequestCookies * cookies) **描述**

 获取请求Cookie中的所有键值对。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   cookies 需要获取所有键值对的请求Cookie。指向[Rcp_RequestCookies](#rcp_requestcookies)的指针。     **返回：**

 Rcp_RequestCookieEntry* 返回请求Cookie中的所有键值对。指向[Rcp_RequestCookieEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_cookie_entry)的指针。

   #### [h2]HMS_Rcp_GetRequestCookieValue()

char* HMS_Rcp_GetRequestCookieValue (Rcp_RequestCookies * cookies, const char * name ) **描述**

 通过名称获取请求Cookie的值。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   cookies 需要获取值的请求Cookie。指向[Rcp_RequestCookies](#rcp_requestcookies)的指针。  name 键。     **返回：**

 char* 返回请求Cookie的值。

   #### [h2]HMS_Rcp_GetResponseCookieAttrEntries()

Rcp_CookieAttributeEntry* HMS_Rcp_GetResponseCookieAttrEntries (Rcp_CookieAttributes * cookieAttributes) **描述**

 在[Rcp_CookieAttributes](#rcp_cookieattributes)中获取所有响应Cookie属性。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   cookieAttributes 指向要获取所有Cookie属性的[Rcp_CookieAttributes](#rcp_cookieattributes)的指针。     **返回：**

 [Rcp_CookieAttributeEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___cookie_attribute_entry) * 响应的Cookie属性列表。

   #### [h2]HMS_Rcp_GetResponseCookieAttrValue()

const char* HMS_Rcp_GetResponseCookieAttrValue (Rcp_CookieAttributes * cookieAttributes, const char * name ) **描述**

 通过名称获取Cookie属性的值。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   cookieAttributes 指向要获取值的[Rcp_CookieAttributes](#rcp_cookieattributes)的指针。  name 键。     **返回：**

 char* Cookie属性中的值。

   #### [h2]HMS_Rcp_GetSessionConfiguration()

const Rcp_SessionConfiguration* HMS_Rcp_GetSessionConfiguration (Rcp_Session * session) **描述**

 获取会话配置。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   session 需要获取会话配置的会话。指向[Rcp_Session](#rcp_session)的指针。     **返回：**

 Rcp_SessionConfiguration* 返回的会话配置。指向[Rcp_SessionConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___session_configuration)的指针。

   #### [h2]HMS_Rcp_GetSessionId()

const char* HMS_Rcp_GetSessionId (Rcp_Session * session) **描述**

 获取会话ID。

 **系统能力：** SystemCapability.Collaboration.RemoteCommunication

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   session 需要获取会话ID的会话。指向[Rcp_Session](#rcp_session)的指针。     **返回：**

 char* 返回的会话ID。

   #### [h2]HMS_Rcp_SetFormValue()

uint32_t HMS_Rcp_SetFormValue (Rcp_Form * form, const char * key, const Rcp_FormFieldValue * value ) **描述**

 设置简单表单的键值对。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   form 需要设置键值对的表单。指向[Rcp_Form](#rcp_form)的指针。  key 键。  value 值。     **返回：**

 设置成功返回0，入参有空指针或者size大小为0时返回[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)，内存问题返回[1007900027](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900027-内存不足)。

   #### [h2]HMS_Rcp_SetHeaderValue()

uint32_t HMS_Rcp_SetHeaderValue (Rcp_Headers * headers, const char * name, const char * value ) **描述**

 设置请求或响应头的键值对。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   headers 指向要设置的[Rcp_Headers](#rcp_headers)的指针。  name 键。  value 值。     **返回：**

 设置成功返回0，入参有空指针或者size大小为0时返回[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)，内存问题返回[1007900027](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900027-内存不足)。

   #### [h2]HMS_Rcp_SetMultipartFormValue()

uint32_t HMS_Rcp_SetMultipartFormValue (Rcp_MultipartForm * multipartForm, const char * key, const Rcp_MultipartFormFieldValue * value ) **描述**

 设置多��分表单的键值对。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   multipartForm 需要设置的多部分表单。指向[Rcp_MultipartForm](#rcp_multipartform)的指针。  key 键。  value 值。     **返回：**

 设置成功返回0，入参有空指针或者size大小为0时返回[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)，内存问题返回[1007900027](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900027-内存不足)。

   #### [h2]HMS_Rcp_SetRequestCookieValue()

uint32_t HMS_Rcp_SetRequestCookieValue (Rcp_RequestCookies * cookies, const char * name, const char * value ) **描述**

 设置请求Cookie。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   cookies 需要设置的请求Cookie。指向[Rcp_RequestCookies](#rcp_requestcookies)的指针。  name 键。  value 值。     **返回：**

 设置成功返回0，入参有空指针或者size大小为0时返回[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)，内存问题返回[1007900027](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code#section1007900027-内存不足)。

   #### [h2]HMS_Rcp_SetRequestOnBinaryDataRecvCallback()

uint32_t HMS_Rcp_SetRequestOnBinaryDataRecvCallback (Rcp_Request * request, Rcp_OnBinaryReceiveCallback onBinaryReceiveCallback); **描述**

 为请求设置流式接收二进制数据的回调函数。该回调函数与[Rcp_Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___configuration)中配置的[Rcp_OnDataReceiveCallback](#rcp_ondatareceivecallback)功能一致。设置后将替换在[Rcp_Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___configuration)中配置的[Rcp_OnDataReceiveCallback](#rcp_ondatareceivecallback)。

 **起始版本：** 5.0.1(13)

 **参数:**

  名称 描述   request 需要设置二进制数据回调的请求。指向[Rcp_Request](#rcp_request)的指针。  onBinaryReceiveCallback 需要设置的二进制数据接收回调函数。     **返回：**

 设置成功返回0，参数错误时返回[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)。

   #### [h2]HMS_Rcp_SetRequestOnStatusCodeReceiveCallback()

uint32_t HMS_Rcp_SetRequestOnStatusCodeReceiveCallback (Rcp_Request * request, Rcp_OnStatusCodeReceiveCallback onStatusCodeReceiveCallback); **描述**

 为请求设置响应状态码回调函数。在请求收到对端返回的响应码时触发。不可通过重新设置[Rcp_OnStatusCodeReceiveCallbackFunc](#rcp_onstatuscodereceivecallbackfunc)为NULL实现取消监听。

 **起始版本：** 6.0.1(21)

 **参数:**

  名称 描述   request 需要设置响应状态码回调的请求。指向[Rcp_Request](#rcp_request)的指针。  onStatusCodeReceiveCallback 需要设置的响应状态码接收回调函数。     **返回：**

 设置成功返回0，参数错误时返回[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)。

---
*Updated: 2026-04-22 06:47:54*
