# Mock能力

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-test-mock`  |  **DocID**: `8ae4399f4f984056b237ac99753787df`  |  **NodeID**: `000201775790122558288c988dce879b`

---

# Mock能力

 在实际开发中，一些接口或者对象依赖于外部资源或复杂的逻辑，这些依赖在测试环境中难以复现，导致这些接口或者对象难以测试，此时，可以使用Mock能力，对这些接口或对象进行模拟。当前Instrument Test和Local Test均支持对模块进行Mock，对于调用系统模块API或外部依赖模块，使用import mock，对于本地模块，使用hamock/hypium插件包的mock接口或者import mock。

  仅API 11及以上版本的Stage模型工程支持。

  #### 系统模块/依赖模块Mock

通过import mock对系统模块API或依赖模块的方法进行Mock，在mock-config.json5配置文件中定义目标模块和Mock实现代码文件的映射关系，运行时import目标模块都将指向Mock实现代码。以系统API bluetoothManager为例，具体实现如下。

 
在src/mock目录下新建一个ArkTS文件，例如bluetooth_manager.mock.ets，在这个文件内定义目标模块的Mock实现。```
// src/mock/bluetooth_manager.mock.ets
enum BluetoothState {
  /** Indicates the local Bluetooth is off */
  STATE_OFF = 0,
  /** Indicates the local Bluetooth is turning on */
  STATE_TURNING_ON = 1,
  /** Indicates the local Bluetooth is on, and ready for use */
  STATE_ON = 2,
  /** Indicates the local Bluetooth is turning off */
  STATE_TURNING_OFF = 3,
  /** Indicates the local Bluetooth is turning LE mode on */
  STATE_BLE_TURNING_ON = 4,
  /** Indicates the local Bluetooth is in LE only mode */
  STATE_BLE_ON = 5,
  /** Indicates the local Bluetooth is turning off LE only mode */
  STATE_BLE_TURNING_OFF = 6
}
interface BluetoothInfo {
  state: number
}
const MockBluetoothManager: Record<string, Object> = {
  'getBluetoothInfo': () => {
    return { state : BluetoothState.STATE_BLE_TURNING_ON } as BluetoothInfo;
  },
};
export default MockBluetoothManager;
```
 在Mock配置文件src/mock/mock-config.json5中定义目标模块与Mock实现的映射关系。```
"@ohos.enterprise.bluetoothManager": {  // 待替换的模块名
  "source": "src/mock/bluetooth_manager.mock.ets"  // Mock代码的路径，相对于模块根目录
}
```
 在测试文件中编写如下代码。```
// bluetoothManager.test.ets
import { describe, it, expect } from '@ohos/hypium';
import { bluetoothManager } from '@kit.MDMKit';

export default function mock_system_api() {   
  describe('mock_system_api', () => {
    /* mock系统API */
    it('mock_system_api', 0, () => {
      let bluetoothInfo = bluetoothManager.getBluetoothInfo({
        bundleName: "com.example.myapplication"
      })
      expect(bluetoothInfo.state).assertEqual(4)
    });
  });
}
```
 如果测试文件是手动创建的，需要将用例类mock_system_api添加到List.test.ets文件中。```
import mock_system_api from './bluetoothManager.test';

export default function testsuite() {
  mock_system_api();
}
```
 - 执行测试，用例通过。

  #### 本地模块Mock

有两种方式可以对本地模块进行Mock，一是使用hamock/hypium插件包的mock接口，二是使用import mock。

  #### [h2]使用hamock/hypium插件包的mock接口

以下例子通过mock接口模拟本地模块的某个方法，关于Mock的更多说明可以参考[mock能力](https://gitcode.com/openharmony/testfwk_arkxtest#mock能力)。

 
在src/main/ets目录下新建一个ArkTS文件，例如ClassForMock.ets，并在其中导出一个类。```
export class ClassForMock {
  constructor() {
  }
  method_1(arg: string) {
    return '888888';
  }
  method_2(arg: string) {
    return '999999';
  }
}
```
 在测试文件中编写如下代码。```
// afterReturnTest.test.ets
import { describe, expect, it, MockKit, when } from '@ohos/hypium';
import { ClassForMock } from '../../../main/ets/ClassForMock';

export default function afterReturnTest() {
  describe('afterReturnTest', () => {
    it('afterReturnTest', 0, () => {
      console.info("it begin");
      // 1.创建一个mock能力的对象MockKit
      let mocker: MockKit = new MockKit();
      // 2.定义类ClassForMock，里面两个函数，然后创建一个对象classForMock
      let classForMock: ClassForMock = new ClassForMock();
      // 3.进行mock操作,比如需要对ClassForMock类的method_1函数进行mock
      let mockFunc: Function = mocker.mockFunc(classForMock, classForMock.method_1);
      // 4.期望classForMock.method_1函数被mock后, 以'test'为入参时调用函数返回结果'1'
      when(mockFunc)('test').afterReturn('1');
      // 5.对mock后的函数进行断言，看是否符合预期
      // 执行成功案例，参数为'test'
      expect(classForMock.method_1('test')).assertEqual('1'); // 执行通过
    })
  })
}
```
 如果测试文件是手动创建的，需要将用例类afterReturnTest添加到List.test.ets文件中。```
import afterReturnTest from './afterReturnTest.test';

export default function testsuite() {
  afterReturnTest();
}
```
 - 执行测试，用例通过。

  #### [h2]使用import mock

使用import mock对本地模块进行Mock，操作步骤和系统模块/依赖模块的Mock类似，在mock-config.json5配置文件中定义目标模块和Mock实现代码文件的映射关系，运行时import目标模块都将指向Mock实现代码。以下例子对本地模块entry/src/main/ets/common/calc.ets中的sum函数进行Mock。

 
在src/mock目录下新建一个common目录并创建一个ArkTS文件，例如calc.mock.ets，在这个文件内定义目标模块的Mock实现。```
// src/mock/common/calc.mock.ets
export function sum() {
  return "this is mock sum";
}
```
 calc.ets的原始实现如下：

 ```
// src/main/ets/common/calc.ets
export function sum() {
  return 1;
}
```
 在Mock配置文件src/mock/mock-config.json5中定义目标模块与Mock实现的映射关系。```
{
  "common/calc.ets": { // 本地模块只支持ets/xxx的相对路径，并需明确文件后缀
    "source": "src/mock/common/calc.mock.ets"  // Mock代码的路径，相对于模块根目录
  },
}
```
 在测试文件中编写如下代码。```
// test_mock_local_method.test.ets
import { describe, it, expect } from '@ohos/hypium'
import { sum } from '../../../main/ets/common/calc';

export default function test_mock_local_method() {
  describe('test_mock_local_method', () => {
    it("test_mock_local_method", 0, () => {
      expect(sum()).assertEqual("this is mock sum")
    })
  })
}
```
 如果测试文件是手动创建的，需要将用例类test_mock_local_method添加到List.test.ets文件中。```
import test_mock_local_method from './test_mock_local_method.test';

export default function testsuite() {
  test_mock_local_method();
}
```
 - 执行测试，用例通过。

---
*Updated: 2026-04-22 01:08:20*
