# Network Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-networkkit-6101`  |  **DocID**: `246d4e7ad6794f4a847077dde0ba2605`

---

# Network Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  新增API |  NA |  类名：connection；

 API声明：function getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>;

 差异内容：function getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>;

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：connection；

 API声明：function getConnectOwnerUid(protocol: ProtocolType, local: NetAddress, remote: NetAddress): Promise<number>;

 差异内容：function getConnectOwnerUid(protocol: ProtocolType, local: NetAddress, remote: NetAddress): Promise<number>;

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：connection；

 API声明：function getConnectOwnerUidSync(protocol: ProtocolType, local: NetAddress, remote: NetAddress): number;

 差异内容：function getConnectOwnerUidSync(protocol: ProtocolType, local: NetAddress, remote: NetAddress): number;

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：connection；

 API声明：function getDnsAscii(host: string, flag?: ConversionProcess): string;

 差异内容：function getDnsAscii(host: string, flag?: ConversionProcess): string;

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：connection；

 API声明：function getDnsUnicode(host: string, flag?: ConversionProcess): string;

 差异内容：function getDnsUnicode(host: string, flag?: ConversionProcess): string;

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：connection；

 API声明：export interface QueryOptions

 差异内容：export interface QueryOptions

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：QueryOptions；

 API声明：family?: FamilyType;

 差异内容：family?: FamilyType;

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：connection；

 API声明：export enum FamilyType

 差异内容：export enum FamilyType

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：FamilyType；

 API声明：FAMILY_TYPE_ALL = 0

 差异内容：FAMILY_TYPE_ALL = 0

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：FamilyType；

 API声明：FAMILY_TYPE_IPV4 = 1

 差异内容：FAMILY_TYPE_IPV4 = 1

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：FamilyType；

 API声明：FAMILY_TYPE_IPV6 = 2

 差异内容：FAMILY_TYPE_IPV6 = 2

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：NetHandle；

 API声明：getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>;

 差异内容：getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>;

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：connection；

 API声明：export enum ConversionProcess

 差异内容：export enum ConversionProcess

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：ConversionProcess；

 API声明：NO_CONFIGURATION = 0

 差异内容：NO_CONFIGURATION = 0

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：ConversionProcess；

 API声明：ALLOW_UNASSIGNED = 1

 差异内容：ALLOW_UNASSIGNED = 1

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：ConversionProcess；

 API声明：USE_STD3_ASCII_RULES = 2

 差异内容：USE_STD3_ASCII_RULES = 2

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：connection；

 API声明：export enum ProtocolType

 差异内容：export enum ProtocolType

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：ProtocolType；

 API声明：PROTO_TYPE_TCP = 6

 差异内容：PROTO_TYPE_TCP = 6

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：ProtocolType；

 API声明：PROTO_TYPE_UDP = 17

 差异内容：PROTO_TYPE_UDP = 17

  |  api/@ohos.net.connection.d.ts |  
 新增API |  NA |  类名：HttpRequestOptions；

 API声明：customMethod?: string;

 差异内容：customMethod?: string;

  |  api/@ohos.net.http.d.ts |  
 新增API |  NA |  类名：HttpRequestOptions；

 API声明：pathPreference?: PathPreference;

 差异内容：pathPreference?: PathPreference;

  |  api/@ohos.net.http.d.ts |  
 新增API |  NA |  类名：HttpRequestOptions；

 API声明：maxRedirects?: number;

 差异内容：maxRedirects?: number;

  |  api/@ohos.net.http.d.ts |  
 新增API |  NA |  类名：HttpRequestOptions；

 API声明：sniHostName?: string;

 差异内容：sniHostName?: string;

  |  api/@ohos.net.http.d.ts |  
 新增API |  NA |  类名：http；

 API声明：export type PathPreference = 'auto' | 'primaryCellular' | 'secondaryCellular';

 差异内容：export type PathPreference = 'auto' | 'primaryCellular' | 'secondaryCellular';

  |  api/@ohos.net.http.d.ts |  
 新增API |  NA |  类名：UDPSocket；

 API声明：getSocketFd(): Promise<number>;

 差异内容：getSocketFd(): Promise<number>;

  |  api/@ohos.net.socket.d.ts |  
 新增API |  NA |  类名：MulticastSocket；

 API声明：getSocketFd(): Promise<number>;

 差异内容：getSocketFd(): Promise<number>;

  |  api/@ohos.net.socket.d.ts |  
 新增API |  NA |  类名：LocalSocketConnection；

 API声明：getSocketFd(): Promise<number>;

 差异内容：getSocketFd(): Promise<number>;

  |  api/@ohos.net.socket.d.ts |  
 新增API |  NA |  类名：LocalSocketServer；

 API声明：getSocketFd(): Promise<number>;

 差异内容：getSocketFd(): Promise<number>;

  |  api/@ohos.net.socket.d.ts |  
 新增API |  NA |  类名：TCPSocketConnection；

 API声明：getSocketFd(): Promise<number>;

 差异内容：getSocketFd(): Promise<number>;

  |  api/@ohos.net.socket.d.ts |  
 新增API |  NA |  类名：TCPSocketServer；

 API声明：getSocketFd(): Promise<number>;

 差异内容：getSocketFd(): Promise<number>;

  |  api/@ohos.net.socket.d.ts |  
 新增API |  NA |  类名：TLSSocketConnection；

 API声明：getSocketFd(): Promise<number>;

 差异内容：getSocketFd(): Promise<number>;

  |  api/@ohos.net.socket.d.ts |  
 新增API |  NA |  类名：TLSSocketServer；

 API声明：getSocketFd(): Promise<number>;

 差异内容：getSocketFd(): Promise<number>;

  |  api/@ohos.net.socket.d.ts |