# API使用示例

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-build-expanding-sample`  |  **DocID**: `df488c4a5fe843d2a09d3c950a02b673`  |  **NodeID**: `000201775790135918931ec7b401c97f`

---

# API使用示例

 示例：在工程级hvigorfile.ts文件中分别注册工程级与模块级任务。

 ```
// 工程级hvigorfile.ts文件
import { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';
import { appTasks, OhosHapContext, OhosPluginId, Target } from '@ohos/hvigor-ohos-plugin';

// 实现自定义插件
export function customPlugin(): HvigorPlugin {
  return {
    pluginId: 'customPlugin',
    context() {
      return {
        data: 'customPlugin xxx'
      };
    },
    async apply(currentNode: HvigorNode): Promise<void> {
      hvigor.nodesEvaluated(async () => {
        // 注册模块级任务
        hapTask(currentNode);
      });
    }
  };
}
function hapTask(currentNode: HvigorNode) {
  // 等待全部节点加载完成之后获取子节点信息
  currentNode.subNodes((node: HvigorNode) => {
    // 获取hap模块上下文信息
    const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;
    const moduleName = hapContext?.getModuleName();
    hapContext?.targets((target: Target) => {
      const targetName = target.getTargetName();
      const outputPath = target.getBuildTargetOutputPath();
      // 禁用任务
      node.getTaskByName(`${target.getTargetName()}@SignHap`)?.setEnable(false);
      node.registerTask({
        // 任务名称
        name: `${targetName}@onlineSignHap`,
        // 任务执行逻辑主体函数
        run() {
          console.log('module Task');
        },
        // 配置前置任务依赖
        dependencies: [`${targetName}@PackageHap`],
        // 配置任务的后置任务依赖
        postDependencies: ['assembleHap']
      });
    });
  });
}
export default {
  system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */
  plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */
};
```

---
*Updated: 2026-04-22 01:08:58*
