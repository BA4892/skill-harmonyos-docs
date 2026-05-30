# network-cfg工具

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `network-cfg`  |  **DocID**: `54af6bfb4bb447a58fee4b965dd05ef7`  |  **NodeID**: `0002017757958527160206aa207b15a4`

---

# network-cfg工具

 network-cfg是为开发人员提供的用于设置网络相关参数的工具（其中"cfg"为"config"的缩写），例如给Wi-Fi设置代理等。

   network-cfg工具从API version 20开始支持。

    #### 环境要求

在使用本工具前，开发者需要先获取[hdc工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdc)，执行hdc shell。

   #### network-cfg命令工具列表

 
| 命令  | 描述  
  | help  | 帮助命令，显示network-cfg支持的命令信息。  
 | set  | 设置网络相关参数命令。  
  

    #### 帮助命令

```
# 显示帮助信息
network-cfg help
network-cfg -h
```
   #### 设置网络相关参数命令

- 显示set支持的命令信息

 network-cfg set -h 
- 设置或取消当前Wi-Fi代理。

 ```
network-cfg set http_proxy [ip:port]
```
   
- 当前Wi-Fi处于连接状态时，才可设置代理。
- 端口号取值范围为[1, 65535]，不指定端口号或超出取值范围时则默认为8080。
- 仅对当前连接的Wi-Fi生效，Wi-Fi切换后需重新设置。

   示例：

 ```
# 给当前Wi-Fi设置代理：主机名为localhost，端口号为8080。
network-cfg set http_proxy 127.0.0.1:8080
# 给当前Wi-Fi设置代理：主机名为ip6-localhost，端口号为8080。
network-cfg set http_proxy [::1]
# 取消当前Wi-Fi代理。
network-cfg set http_proxy 0
```

---
*Updated: 2026-04-20 01:46:11*
