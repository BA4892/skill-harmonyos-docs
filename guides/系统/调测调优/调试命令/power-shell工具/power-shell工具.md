# power-shell工具

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `power-shell`  |  **DocID**: `ee992a6b4596437bbf2a51c9226be2d0`  |  **NodeID**: `000201775795852716013a10a27d4690`

---

# power-shell工具

 power-shell是实现设备电源状态转换等功能的工具，为开发者提供基本的设备电源状态调试能力，例如：熄屏、唤醒、设置电源模式等。

  #### 环境要求

开发者在使用本工具前需开启开发者模式，且需要获取[hdc工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdc)，执行hdc shell。

   #### power-shell命令工具列表

 
| 命令  | 描述  
  | help  | 帮助命令，显示power-shell支持的命令信息。  
 | setmode  | 设置电源模式命令，用来设置当前设备的电源模式。  
 | wakeup  | 亮屏命令，用来唤醒系统并亮屏。  
 | suspend  | 熄屏命令，用来暂停系统并熄屏。  
 | timeout  | 自动熄屏命令，用来覆盖或恢复系统设置中自动熄屏时间。  
  

    #### 帮助命令

```
# 显示帮助信息
power-shell help
```
   #### 设置电源模式命令

power-shell setmode **设置电源模式命令列表**

  
| 命令  | 描述  
  | power-shell setmode -h  | 显示setmode支持的命令信息。  
 | power-shell setmode 600  | 正常模式。  
 | power-shell setmode 601  | 省电模式。  
 | power-shell setmode 602  | 性能模式。  
 | power-shell setmode 603  | 超级省电模式。  
  

  示例：

 ```
# 设置设备电源状态为正常模式
power-shell setmode 600
# 设置设备电源状态为省电模式
power-shell setmode 601
# 设置设备电源状态为性能模式
power-shell setmode 602
# 设置设备电源状态为超级省电模式
power-shell setmode 603
```
   #### 亮屏命令

power-shell wakeup **亮屏命令列表**

  
| 命令  | 描述  
  | power-shell wakeup  | 亮屏。  
  

  示例：

 ```
# shell命令亮屏
power-shell wakeup
```
   #### 熄屏命令

power-shell suspend **熄屏命令列表**

  
| 命令  | 描述  
  | power-shell suspend  | 熄屏。  
  

  示例：

 ```
# shell命令熄屏
power-shell suspend
```
   #### 自动熄屏命令

power-shell timeout **自动熄屏命令参数列表**

  
| 参数  | 参数说明  
  | -o <time>  | 必选参数，设置自动熄屏时间。[time]单位为毫秒。  
 | -r  | 必选参数，恢复到当前系统设置中的自动熄屏时间。  
  

  示例：

 ```
# 当前系统设置中自动熄屏时间为30秒
# shell命令设置自动熄屏时间为15000毫秒
power-shell timeout -o 15000
# 恢复系统设置的自动熄屏时间，此时自动熄屏时间为30秒
power-shell timeout -r
```

---
*Updated: 2026-04-20 01:46:10*
