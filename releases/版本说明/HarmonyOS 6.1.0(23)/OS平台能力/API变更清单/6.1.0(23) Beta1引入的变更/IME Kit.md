# IME Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-imekit-6101`  |  **DocID**: `62bdce023fdc4243a964b6af2c0ec5c2`

---

# IME Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  API废弃版本变更 |  类名：inputMethodEngine；

 API声明：interface InputMethodEngine

 差异内容：NA

  |  类名：inputMethodEngine；

 API声明：interface InputMethodEngine

 差异内容：23

  |  api/@ohos.inputMethodEngine.d.ts |  
 API废弃版本变更 |  类名：InputMethodEngine；

 API声明：on(type: 'inputStart', callback: (kbController: KeyboardController, textInputClient: TextInputClient) => void): void;

 差异内容：NA

  |  类名：InputMethodEngine；

 API声明：on(type: 'inputStart', callback: (kbController: KeyboardController, textInputClient: TextInputClient) => void): void;

 差异内容：23

  |  api/@ohos.inputMethodEngine.d.ts |  
 API废弃版本变更 |  类名：InputMethodEngine；

 API声明：off(type: 'inputStart', callback?: (kbController: KeyboardController, textInputClient: TextInputClient) => void): void;

 差异内容：NA

  |  类名：InputMethodEngine；

 API声明：off(type: 'inputStart', callback?: (kbController: KeyboardController, textInputClient: TextInputClient) => void): void;

 差异内容：23

  |  api/@ohos.inputMethodEngine.d.ts |  
 API废弃版本变更 |  类名：InputMethodEngine；

 API声明：on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;

 差异内容：NA

  |  类名：InputMethodEngine；

 API声明：on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;

 差异内容：23

  |  api/@ohos.inputMethodEngine.d.ts |  
 API废弃版本变更 |  类名：InputMethodEngine；

 API声明：on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;

 差异内容：NA

  |  类名：InputMethodEngine；

 API声明：on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;

 差异内容：23

  |  api/@ohos.inputMethodEngine.d.ts |  
 API废弃版本变更 |  类名：InputMethodEngine；

 API声明：off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void;

 差异内容：NA

  |  类名：InputMethodEngine；

 API声明：off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void;

 差异内容：23

  |  api/@ohos.inputMethodEngine.d.ts |  
 API废弃版本变更 |  类名：InputMethodEngine；

 API声明：off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void;

 差异内容：NA

  |  类名：InputMethodEngine；

 API声明：off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void;

 差异内容：23

  |  api/@ohos.inputMethodEngine.d.ts |  
 新增API |  NA |  类名：inputMethodEngine；

 API声明：const ENTER_KEY_TYPE_NEWLINE: number;

 差异内容：const ENTER_KEY_TYPE_NEWLINE: number;

  |  api/@ohos.inputMethodEngine.d.ts |  
 新增API |  NA |  类名：InputMethodController；

 API声明：attachWithUIContext(uiContext: UIContext, textConfig: TextConfig, attachOptions?: AttachOptions): Promise<void>;

 差异内容：attachWithUIContext(uiContext: UIContext, textConfig: TextConfig, attachOptions?: AttachOptions): Promise<void>;

  |  api/@ohos.inputMethod.d.ts |  
 新增API |  NA |  类名：InputWindowInfo；

 API声明：displayId?: number;

 差异内容：displayId?: number;

  |  api/@ohos.inputMethod.d.ts |  
 新增API |  NA |  类名：inputMethod；

 API声明：export interface AttachOptions

 差异内容：export interface AttachOptions

  |  api/@ohos.inputMethod.d.ts |  
 新增API |  NA |  类名：AttachOptions；

 API声明：showKeyboard?: boolean;

 差异内容：showKeyboard?: boolean;

  |  api/@ohos.inputMethod.d.ts |  
 新增API |  NA |  类名：AttachOptions；

 API声明：requestKeyboardReason?: RequestKeyboardReason;

 差异内容：requestKeyboardReason?: RequestKeyboardReason;

  |  api/@ohos.inputMethod.d.ts |  
 删除API |  类名：inputMethodEngine；

 API声明：const ENTER_KEY_TYPE_NEWLINE: 8;

 差异内容：const ENTER_KEY_TYPE_NEWLINE: 8;

  |  NA |  api/@ohos.inputMethodEngine.d.ts |