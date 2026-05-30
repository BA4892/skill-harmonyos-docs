# 使用picker管理联系人

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `contacts-addcontactviaui`  |  **DocID**: `38f6035d4b1e45fe9542fcd15eb233c2`  |  **NodeID**: `0002017757956490856448baeff57373`

---

# 使用picker管理联系人

  #### 接口说明

 
| 接口名  | 描述  
  | addContactViaUI(context: Context, contact: Contact): Promise<number>  | 调用新建联系人接口，打开新建联系人UI界面，新建完成。使用Promise异步回调。  
 | saveToExistingContactViaUI(context: Context, contact: Contact): Promise<number>  | 调用保存至已有联系人接口，选择联系人UI界面并完成编辑。使用Promise异步回调。  
  

    #### 使用picker新建联系人

调用新建联系人接口，打开新建联系人UI界面，用户可在UI界面中填写并新建联系人。

 ```
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
    
  build() {
    Column() {
      Text(this.message)
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .onClick(() => {
          let contactInfo: contact.Contact = {
            name: {
              fullName: 'xxx'
            },
            phoneNumbers: [{
              phoneNumber: '138xxxxxx'
            }]
          }
          let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
          let promise = contact.addContactViaUI(context, contactInfo);
          promise.then((data) => {
              console.info(`Succeeded in add Contact via UI.data->${JSON.stringify(data)}`);
            }).catch((err: BusinessError) => {
              console.error(`Failed to add Contact via UI. Code: ${err.code}, message: ${err.message}`);
            });
        })
    }
  }
}
```
   #### 使用picker更新联系人信息

可以通过拉起picker，将选中的联系人信息更新到现有联系人中。

 ```
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
    
  build() {
    Column() {
      Text(this.message)
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .onClick(() => {
          let contactInfo: contact.Contact = {
            id: 1,
            name: {
              fullName: 'xxx'
            },
            phoneNumbers: [{
              phoneNumber: '138xxxxxx'
            }]
          }
          let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
          let promise = contact.saveToExistingContactViaUI(context, contactInfo);
          promise.then((data) => {
              console.info(`Succeeded in save to existing Contact via UI.data->${JSON.stringify(data)}`);
            }).catch((err: BusinessError) => {
              console.error(`Failed to save to existing Contact via UI. Code: ${err.code}, message: ${err.message}`);
            });
        })
    }
  }
}
```

---
*Updated: 2026-04-20 01:50:17*
