# Interface (Metadata)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-image-metadata`

**DocID**: `5e53f17fee15410589eecd361b3cdaa8`

**NodeID**: `00020177579591076118962bc35f24be`

---

Interface (Metadata)

Metadata类，用于存储图像的元数据。目前支持的元数据类型可参考
MetadataType
。

本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface首批接口从API version 13开始支持。

导入模块

import { image } from '@kit.ImageKit';

getProperties
13+

getProperties(key: Array<string>): Promise<Record<string, string | null>>

获取图像中属性的值。使用Promise异步回调。

如要查询属性值信息请参考
PropertyKey
、
FragmentMapPropertyKey
和
GifPropertyKey
。

系统能力：
 SystemCapability.Multimedia.Image.Core

参数：

参数名

类型

必填

说明

key

Array<string>

是

要获取其值的属性的名称。

返回值：

类型

说明

Promise<Record<string, string | null>>

Promise对象，返回元数据要获取的属性的值，如获取失败则返回错误码。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Image错误码
。

错误码ID

错误信息

401

Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types;3.Parameter verification failed;

7600202

Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The metadata type does not match the auxiliary picture type.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

async function GetProperties(context: Context) {
 const resourceMgr = context.resourceManager;
 const rawFile = await resourceMgr.getRawFileContent("exif.jpg"); // 图片包含exif metadata。
 let ops: image.SourceOptions = {
 sourceDensity: 98,
 }
 let imageSource: image.ImageSource = image.createImageSource(rawFile.buffer as ArrayBuffer, ops);
 let commodityPixelMap: image.PixelMap = await imageSource.createPixelMap();
 let pictureObj: image.Picture = image.createPicture(commodityPixelMap);
 let metadataType: image.MetadataType = image.MetadataType.EXIF_METADATA;
 let metaData: image.Metadata | null = await pictureObj.getMetadata(metadataType);
 if (metaData != null) {
 await metaData.getProperties(["ImageWidth", "ImageLength"]).then((data2) => {
 console.info('Get properties ',JSON.stringify(data2));
 }).catch((error: BusinessError) => {
 console.error(`Get properties failed error.code is ${error.code}, error.message is ${error.message}`);
 });
 } else {
 console.error('Metadata is null.');
 }
}

setProperties
13+

setProperties(records: Record<string, string | null>): Promise<void>

批量设置图片元数据中的指定属性的值。使用Promise异步回调。

如要查询属性值信息请参考
PropertyKey
、
FragmentMapPropertyKey
和
GifPropertyKey
。

系统能力：
 SystemCapability.Multimedia.Image.Core

参数：

参数名

类型

必填

说明

records

Record<string, string | null>

是

要修改的属性和值的数组。

返回值：

类型

说明

Promise<void>

Promise对象，如获取失败则返回错误码。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
Image错误码
。

错误码ID

错误信息

401

Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types;3.Parameter verification failed;

7600202

Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The metadata type does not match the auxiliary picture type.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

async function SetProperties(context: Context) {
 const resourceMgr = context.resourceManager;
 const rawFile = await resourceMgr.getRawFileContent("exif.jpg"); // 图片包含exif metadata。
 let ops: image.SourceOptions = {
 sourceDensity: 98,
 }
 let imageSource: image.ImageSource = image.createImageSource(rawFile.buffer as ArrayBuffer, ops);
 let commodityPixelMap: image.PixelMap = await imageSource.createPixelMap();
 let pictureObj: image.Picture = image.createPicture(commodityPixelMap);
 let metadataType: image.MetadataType = image.MetadataType.EXIF_METADATA;
 let metaData: image.Metadata | null = await pictureObj.getMetadata(metadataType);
 if (metaData != null) {
 let setkey: Record<string, string | null> = {
 "ImageWidth": "200",
 "ImageLength": "300"
 };
 await metaData.setProperties(setkey).then(async () => {
 console.info('Set AuxPictureObj properties success.');
 }).catch((error: BusinessError) => {
 console.error(`Failed to set metadata Properties. code is ${error.code}, message is ${error.message}`);
 })
 } else {
 console.error('AuxPictureObj metadata is null. ');
 }
}

getAllProperties
13+

getAllProperties(): Promise<Record<string, string | null>>

获取图片中所有元数据的属性和值。使用Promise异步回调。

如要查询属性值信息请参考
PropertyKey
、
FragmentMapPropertyKey
和
GifPropertyKey
。

系统能力：
 SystemCapability.Multimedia.Image.Core

返回值：

类型

说明

Promise<Record<string, string | null>>

Promise对象，返回元数据拥有的所有属性的值。

示例：

import { BusinessError } from '@kit.BasicServicesKit';

async function GetAllProperties(context: Context) {
 const resourceMgr = context.resourceManager;
 const rawFile = await resourceMgr.getRawFileContent("exif.jpg"); // 图片包含exif metadata。
 let ops: image.SourceOptions = {
 sourceDensity: 98,
 }
 let imageSource: image.ImageSource = image.createImageSource(rawFile.buffer as ArrayBuffer, ops);
 let commodityPixelMap: image.PixelMap = await imageSource.createPixelMap();
 let pictureObj: image.Picture = image.createPicture(commodityPixelMap);
 let metadataType: image.MetadataType = image.MetadataType.EXIF_METADATA;
 let metaData: image.Metadata | null = await pictureObj.getMetadata(metadataType);
 if (metaData != null) {
 await metaData.getAllProperties().then((data2) => {
 const count = Object.keys(data2).length;
 console.info('Metadata have ', count, ' properties');
 console.info(`Get metadata all properties: ${data2}`);
 }).catch((error: BusinessError) => {
 console.error(`Get metadata all properties failed error.code is ${error.code}, error.message is ${error.message}`);
 });
 } else {
 console.error('Metadata is null.');
 }
}

clone
13+

clone(): Promise<Metadata>

对元数据进行克隆。使用Promise异步回调。

系统能力：
 SystemCapability.Multimedia.Image.Core

返回值：

类型

说明

Promise<
Metadata
>

Promise对象，成功返回元数据实例。

示例：

import { BusinessError } from '@kit.BasicServicesKit';

async function Clone(context: Context) {
 const resourceMgr = context.resourceManager;
 const rawFile = await resourceMgr.getRawFileContent("exif.jpg"); // 图片包含exif metadata。
 let ops: image.SourceOptions = {
 sourceDensity: 98,
 }
 let imageSource: image.ImageSource = image.createImageSource(rawFile.buffer as ArrayBuffer, ops);
 let commodityPixelMap: image.PixelMap = await imageSource.createPixelMap();
 let pictureObj: image.Picture = image.createPicture(commodityPixelMap);
 let metadataType: image.MetadataType = image.MetadataType.EXIF_METADATA;
 let metaData: image.Metadata | null = await pictureObj.getMetadata(metadataType);
 if (metaData != null) {
 let new_metadata: image.Metadata = await metaData.clone();
 new_metadata.getProperties(["ImageWidth"]).then((data1) => {
 console.info(`Clone new_metadata and get Properties: ${data1}`);
 }).catch((err: BusinessError) => {
 console.error(`Clone new_metadata failed, error : ${err}`);
 });
 } else {
 console.error('Metadata is null.');
 }
}

---
*2026-04-22T15:55:03.611Z*