# Calendar Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-calendarkit-6101`  |  **DocID**: `d40eb78fba8641e391a3f145d3298147`

---

# Calendar Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  新增错误码 |  类名：CalendarManager；

 API声明：createCalendar(calendarAccount: CalendarAccount): Promise<Calendar>;

 差异内容：NA

  |  类名：CalendarManager；

 API声明：createCalendar(calendarAccount: CalendarAccount): Promise<Calendar>;

 差异内容：23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：CalendarManager；

 API声明：createCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void;

 差异内容：NA

  |  类名：CalendarManager；

 API声明：createCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void;

 差异内容：23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：CalendarManager；

 API声明：deleteCalendar(calendar: Calendar): Promise<void>;

 差异内容：NA

  |  类名：CalendarManager；

 API声明：deleteCalendar(calendar: Calendar): Promise<void>;

 差异内容：23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：CalendarManager；

 API声明：deleteCalendar(calendar: Calendar, callback: AsyncCallback<void>): void;

 差异内容：NA

  |  类名：CalendarManager；

 API声明：deleteCalendar(calendar: Calendar, callback: AsyncCallback<void>): void;

 差异内容：23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：CalendarManager；

 API声明：getCalendar(calendarAccount?: CalendarAccount): Promise<Calendar>;

 差异内容：NA

  |  类名：CalendarManager；

 API声明：getCalendar(calendarAccount?: CalendarAccount): Promise<Calendar>;

 差异内容：23900003,23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：CalendarManager；

 API声明：getCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void;

 差异内容：NA

  |  类名：CalendarManager；

 API声明：getCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void;

 差异内容：23900003,23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：CalendarManager；

 API声明：getCalendar(callback: AsyncCallback<Calendar>): void;

 差异内容：NA

  |  类名：CalendarManager；

 API声明：getCalendar(callback: AsyncCallback<Calendar>): void;

 差异内容：23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：CalendarManager；

 API声明：getAllCalendars(): Promise<Calendar[]>;

 差异内容：NA

  |  类名：CalendarManager；

 API声明：getAllCalendars(): Promise<Calendar[]>;

 差异内容：23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：CalendarManager；

 API声明：getAllCalendars(callback: AsyncCallback<Calendar[]>): void;

 差异内容：NA

  |  类名：CalendarManager；

 API声明：getAllCalendars(callback: AsyncCallback<Calendar[]>): void;

 差异内容：23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：Calendar；

 API声明：addEvent(event: Event): Promise<number>;

 差异内容：NA

  |  类名：Calendar；

 API声明：addEvent(event: Event): Promise<number>;

 差异内容：201,23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：Calendar；

 API声明：addEvent(event: Event, callback: AsyncCallback<number>): void;

 差异内容：NA

  |  类名：Calendar；

 API声明：addEvent(event: Event, callback: AsyncCallback<number>): void;

 差异内容：201,23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：Calendar；

 API声明：addEvents(events: Event[]): Promise<void>;

 差异内容：NA

  |  类名：Calendar；

 API声明：addEvents(events: Event[]): Promise<void>;

 差异内容：201,23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：Calendar；

 API声明：addEvents(events: Event[], callback: AsyncCallback<void>): void;

 差异内容：NA

  |  类名：Calendar；

 API声明：addEvents(events: Event[], callback: AsyncCallback<void>): void;

 差异内容：201,23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：Calendar；

 API声明：getEvents(eventFilter?: EventFilter, eventKey?: (keyof Event)[]): Promise<Event[]>;

 差异内容：NA

  |  类名：Calendar；

 API声明：getEvents(eventFilter?: EventFilter, eventKey?: (keyof Event)[]): Promise<Event[]>;

 差异内容：201,23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：Calendar；

 API声明：getEvents(eventFilter: EventFilter, eventKey: (keyof Event)[], callback: AsyncCallback<Event[]>): void;

 差异内容：NA

  |  类名：Calendar；

 API声明：getEvents(eventFilter: EventFilter, eventKey: (keyof Event)[], callback: AsyncCallback<Event[]>): void;

 差异内容：201,23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：Calendar；

 API声明：getEvents(callback: AsyncCallback<Event[]>): void;

 差异内容：NA

  |  类名：Calendar；

 API声明：getEvents(callback: AsyncCallback<Event[]>): void;

 差异内容：201,23900004

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：Calendar；

 API声明：setConfig(config: CalendarConfig): Promise<void>;

 差异内容：NA

  |  类名：Calendar；

 API声明：setConfig(config: CalendarConfig): Promise<void>;

 差异内容：23900001

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：Calendar；

 API声明：setConfig(config: CalendarConfig, callback: AsyncCallback<void>): void;

 差异内容：NA

  |  类名：Calendar；

 API声明：setConfig(config: CalendarConfig, callback: AsyncCallback<void>): void;

 差异内容：23900001

  |  api/@ohos.calendarManager.d.ts |  
 新增错误码 |  类名：Calendar；

 API声明：queryEventInstances(start: number, end: number, ids?: number[], eventKey?: (keyof Event)[]): Promise<Event[]>;

 差异内容：NA

  |  类名：Calendar；

 API声明：queryEventInstances(start: number, end: number, ids?: number[], eventKey?: (keyof Event)[]): Promise<Event[]>;

 差异内容：201,23900004

  |  api/@ohos.calendarManager.d.ts |  
 权限变更 |  类名：Calendar；

 API声明：addEvent(event: Event): Promise<number>;

 差异内容：NA

  |  类名：Calendar；

 API声明：addEvent(event: Event): Promise<number>;

 差异内容：ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

  |  api/@ohos.calendarManager.d.ts |  
 权限变更 |  类名：Calendar；

 API声明：addEvent(event: Event, callback: AsyncCallback<number>): void;

 差异内容：NA

  |  类名：Calendar；

 API声明：addEvent(event: Event, callback: AsyncCallback<number>): void;

 差异内容：ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

  |  api/@ohos.calendarManager.d.ts |  
 权限变更 |  类名：Calendar；

 API声明：addEvents(events: Event[]): Promise<void>;

 差异内容：NA

  |  类名：Calendar；

 API声明：addEvents(events: Event[]): Promise<void>;

 差异内容：ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

  |  api/@ohos.calendarManager.d.ts |  
 权限变更 |  类名：Calendar；

 API声明：addEvents(events: Event[], callback: AsyncCallback<void>): void;

 差异内容：NA

  |  类名：Calendar；

 API声明：addEvents(events: Event[], callback: AsyncCallback<void>): void;

 差异内容：ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

  |  api/@ohos.calendarManager.d.ts |  
 权限变更 |  类名：Calendar；

 API声明：getEvents(eventFilter?: EventFilter, eventKey?: (keyof Event)[]): Promise<Event[]>;

 差异内容：NA

  |  类名：Calendar；

 API声明：getEvents(eventFilter?: EventFilter, eventKey?: (keyof Event)[]): Promise<Event[]>;

 差异内容：ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

  |  api/@ohos.calendarManager.d.ts |  
 权限变更 |  类名：Calendar；

 API声明：getEvents(eventFilter: EventFilter, eventKey: (keyof Event)[], callback: AsyncCallback<Event[]>): void;

 差异内容：NA

  |  类名：Calendar；

 API声明：getEvents(eventFilter: EventFilter, eventKey: (keyof Event)[], callback: AsyncCallback<Event[]>): void;

 差异内容：ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

  |  api/@ohos.calendarManager.d.ts |  
 权限变更 |  类名：Calendar；

 API声明：getEvents(callback: AsyncCallback<Event[]>): void;

 差异内容：NA

  |  类名：Calendar；

 API声明：getEvents(callback: AsyncCallback<Event[]>): void;

 差异内容：ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

  |  api/@ohos.calendarManager.d.ts |  
 权限变更 |  类名：Calendar；

 API声明：queryEventInstances(start: number, end: number, ids?: number[], eventKey?: (keyof Event)[]): Promise<Event[]>;

 差异内容：NA

  |  类名：Calendar；

 API声明：queryEventInstances(start: number, end: number, ids?: number[], eventKey?: (keyof Event)[]): Promise<Event[]>;

 差异内容：ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

  |  api/@ohos.calendarManager.d.ts |