# Enums

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-image-e`

**DocID**: `085966adbe4b4e57a0f512ec8ede4676`

**NodeID**: `000201775795910761249ad505407132`

---

Enums

本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

PixelMapFormat
7+

枚举，图片像素格式。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

UNKNOWN

0

未知格式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

ARGB_8888
18+

1

颜色信息由透明度（Alpha）与R（Red），G（Green），B（Blue）四部分组成，每个部分占8位，总共占32位。 该格式当前仅支持PixelMap的接口。

RGB_565

2

颜色信息由R（Red），G（Green），B（Blue）三部分组成，R占5位，G占6位，B占5位，总共占16位。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

RGBA_8888

3

颜色信息由R（Red），G（Green），B（Blue）与透明度（Alpha）四部分组成，每个部分占8位，总共占32位。对应
相机服务CameraFormat中的CAMERA_FORMAT_RGBA_8888
。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

BGRA_8888
9+

4

颜色信息由B（Blue），G（Green），R（Red）与透明度（Alpha）四部分组成，每个部分占8位，总共占32位。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

RGB_888
9+

5

颜色信息由R（Red），G（Green），B（Blue）三部分组成，每个部分占8位，总共占24位。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

ALPHA_8
9+

6

颜色信息仅包含透明度（Alpha），每个像素占8位。一个或多个像素组成一行像素，每行像素数据按4字节对齐，如果一行像素所占的字节数不是4的整数倍，则在行末填充空白字节以满足对齐要求。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

RGBA_F16
9+

7

颜色信息由R（Red），G（Green），B（Blue）与透明度（Alpha）四部分组成，每个部分占16位，总共占64位。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

NV21
9+

8

YVU像素排列，V分量在U分量之前。颜色信息由亮度分量Y和交错排列的色度分量V和U组成，其中Y分量占8位，UV分量因4：2：0采样平均占4位，总共平均占12位。对应
相机服务CameraFormat中的CAMERA_FORMAT_YUV_420_SP
。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

NV12
9+

9

YUV像素排列，U分量在V分量之前。颜色信息由亮度分量Y和交错排列的色度分量U和V组成，其中Y分量占8位，UV分量因4：2：0采样平均占4位，总共平均占12位。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

RGBA_1010102
12+

10

颜色信息由R（Red），G（Green），B（Blue）与透明度（Alpha）四部分组成，其中R、G、B分别占10位，透明度占2位，总共占32位。

YCBCR_P010
12+

11

颜色信息由亮度分量Y和色度分量Cb与Cr组成，每个分量有效10位，实际存储时，Y平面每个像素占16位数据（10位有效），UV平面交错排列，每4个像素占32位数据（每色度分量10位有效），平均有效占15位。对应
相机服务CameraFormat中的CAMERA_FORMAT_YCBCR_P010
。

YCRCB_P010
12+

12

颜色信息由亮度分量Y和色度分量Cr与Cb组成，每个分量有效10位，实际存储时，Y平面每个像素占16位数据（10位有效），UV平面交错排列，每4个像素占32位数据（每色度分量10位有效），平均有效占15位。对应
相机服务CameraFormat中的CAMERA_FORMAT_YCRCB_P010
。

ASTC_4x4
18+

102

存储格式为ASTC 4x4格式，内存使用量仅为RGBA_8888的1/4。该格式仅用于直接显示场景，不支持像素访问或后期处理编辑，不支持仿射变换级联使用。

AlphaType
9+

枚举，图像的透明度类型。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

UNKNOWN

0

未知透明度。

OPAQUE

1

没有alpha或图片不透明。

PREMUL

2

RGB预乘alpha。

UNPREMUL

3

RGB非预乘alpha。

AuxiliaryPictureType
13+

枚举，辅助图的图像类型。

辅助图不直接参与图片显示，且并非所有图片中都含有辅助图。

在获取和使用特定辅助图前，应首先调用Picture的
getAuxiliaryPicture
方法尝试获取该辅助图。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

GAINMAP

1

增益图（Gain Map）。

用于更准确地生成HDR图像。

HDR合成通常需要同时使用SDR主图、增益图和
HDR元数据
共同计算亮度映射关系。

DEPTH_MAP

2

深度图（Depth Map）。

用于存储每个像素与摄像头之间的距离信息，提供场景的三维结构。

可用于3D重建、背景分离和场景理解等任务。

UNREFOCUS_MAP

3

未重对焦原图（UnReFocus Map）。

用于保存拍摄时未重对焦的图片像素内容。

可用于人像虚化等后期处理，便于用户自由选择焦点区域。

LINEAR_MAP

4

线性图（Linear Map）。

以线性方式记录光照、颜色或其他视觉要素，为图像处理提供补充信息。

可用于视觉效果增强与色彩后期处理。

FRAGMENT_MAP

5

水印裁剪图（Fragment Map）。

记录原图中被水印遮挡的区域，可能是从原图裁剪得到，也可能只是填充特定数值的像素数据作为占位符。

可用于水印移除、原图恢复等场景。

MetadataType
13+

枚举，图片元数据类型。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

EXIF_METADATA

1

exif数据。

FRAGMENT_METADATA

2

水印裁剪图元数据。

GIF_METADATA
20+

5

GIF图片元数据。

ScaleMode
9+

枚举，图像的缩放模式。

卡片能力：
 从API version 12开始，该接口支持在ArkTS卡片中使用。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

CENTER_CROP

1

缩放图像以填充目标图像区域并居中裁剪区域外的效果。

FIT_TARGET_SIZE

0

图像适合目标尺寸的效果。

PropertyKey
7+

枚举，Exif（Exchangeable image file format）图像信息。

格式示例中的key为：image.PropertyKey.XXX（XXX为枚举的名称，如：image.PropertyKey.NEW_SUBFILE_TYPE） 。

格式示例仅用于说明修改传值和读取结果的格式。具体接口使用方法请参考：
modifyImageProperty
（修改单个Exif字段）、
modifyImageProperties
（修改多个Exif字段）、
getImageProperty
（读取单个Exif字段）、
getImageProperties
（读取多个Exif字段）。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

格式示例

NEW_SUBFILE_TYPE
12+

"NewSubfileType"

在Exif中，"NewSubfileType"字段用于标识子文件的数据类型，如全分辨率图像、缩略图或多帧图像的一部分。其值是位掩码，0代表全分辨率图像，1代表缩略图，2代表多帧图像的一部分。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Primary image');

读取结果示例：
 "0"

SUBFILE_TYPE
12+

"SubfileType"

此标签指示此子文件中的数据类型。标签已弃用，请使用NewSubfileType替代。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Full-resolution image data');

读取结果示例：
 "1"

IMAGE_WIDTH

"ImageWidth"

图片宽度。单位为像素（px）。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'4096');

读取结果示例：
 "4096"

IMAGE_LENGTH

"ImageLength"

图片长度。单位为像素（px）。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'3072');

读取结果示例：
 "3072"

BITS_PER_SAMPLE

"BitsPerSample"

像素各分量的位数，如RGB，3分量，格式是8,8,8。

读写能力：
 可读写。

修改传参格式说明：
 三个非负整数字符串，空格或者英文逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'8 8 8');

或imageSource.modifyImageProperty(key,'8,8,8');

读取结果示例：
 "8,8,8"

COMPRESSION
12+

"Compression"

图像压缩方案。

1："Uncompressed"。

2："CCITT RLE"。

3："T4/Group 3 Fax"。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Uncompressed');

读取结果示例：
 "Uncompressed"

PHOTOMETRIC_INTERPRETATION
12+

"PhotometricInterpretation"

像素构成，例如RGB或YCbCr。

0："Reversed mono"。

1："Normal mono"。

2："RGB"。

3："Palette"。

5："CMYK"。

6："YCbCr"。

8："CieLAB"。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Normal mono');

读取结果示例：
 "Normal mono"

IMAGE_DESCRIPTION
10+

"ImageDescription"

图像信息描述。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Image description info');

读取结果示例：
 "Image description info"

MAKE
10+

"Make"

生产商。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Make');

读取结果示例：
 "Make"

MODEL
10+

"Model"

设备型号。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Model');

读取结果示例：
 "Model"

STRIP_OFFSETS
12+

"StripOffsets"

每个strip的字节偏移量。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'100');

读取结果示例：
 "100"

ORIENTATION

"Orientation"

图片方向。

1："Top-left"，图像未旋转。

2："Top-right"，镜像水平翻转。

3："Bottom-right"，图像旋转180°。

4："Bottom-left"，镜像垂直翻转。

5："Left-top"，镜像水平翻转再顺时针旋转270°。

6："Right-top"，顺时针旋转90°。

7："Right-bottom"，镜像水平翻转再顺时针旋转90°。

8："Left-bottom"，顺时针旋转270°。

如果读到未定义值x会返回"Unknown Value x"。获取该属性时会以字符串的形式返回。修改该属性时既可以以数字形式指定，也可以以字符串形式指定。

更多关于图片旋转角度的说明可参考：
如何获取图片的旋转角度信息
。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Top-left');

读取结果示例：
 "Top-left"

SAMPLES_PER_PIXEL
12+

"SamplesPerPixel"

每个像素的分量数。由于该标准适用于RGB和YCbCr图像，因此该标签的值设置为 3。在JPEG压缩数据中，使用JPEG标记代替该标签。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'3');

读取结果示例：
 "3"

ROWS_PER_STRIP
12+

"RowsPerStrip"

每个strip的图像数据行数。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'10');

读取结果示例：
 "10"

STRIP_BYTE_COUNTS
12+

"StripByteCounts"

每个图像数据带的总字节数。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1024');

读取结果示例：
 "1024"

X_RESOLUTION
12+

"XResolution"

图像宽度方向的分辨率。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'72');

读取结果示例：
 "72"

Y_RESOLUTION
12+

"YResolution"

图像高度方向的分辨率。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'72');

读取结果示例：
 "72"

PLANAR_CONFIGURATION
12+

"PlanarConfiguration"

表示像素组件的记录格式，chunky格式或是planar格式。

1："Chunky format"，chunky格式。

2："Planar format"，planar格式。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Chunky format');

读取结果示例：
 "Chunky format"

RESOLUTION_UNIT
12+

"ResolutionUnit"

用于测量XResolution和YResolution的单位，英寸或者厘米。

2："Inch"，英寸。

3："Centimeter"，厘米。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'2');

或imageSource.modifyImageProperty(key,'Inch');

读取结果示例：
 "Inch"

TRANSFER_FUNCTION
12+

"TransferFunction"

图像的传递函数，通常用于颜色校正。

读写能力：
 可读写。

该字段为特有格式，虽然支持读写，但目前版本不做解析。

SOFTWARE
12+

"Software"

用于生成图像的软件名称和版本。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Software name and version');

读取结果示例：
 "Software name and version"

DATE_TIME
10+

"DateTime"

日期时间。

读写能力：
 可读写。

修改传参格式说明：
 有两种格式，YYYY:MM:DD或者YYYY:MM:DD HH:MM:SS

修改示例：
imageSource.modifyImageProperty(key,'2024:07:07 13:45:59');

或imageSource.modifyImageProperty(key,'2024:07:07');

读取结果示例：
 "2024:07:07 13:45:59"或"2024:07:07"

ARTIST
12+

"Artist"

创建图像的用户名称。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'User name');

读取结果示例：
 "User name"

WHITE_POINT
12+

"WhitePoint"

用于指定图像的白点（white point）色度坐标，即图像颜色空间中被认为是“白色”的参考点。

读写能力：
 可读写。

修改传参格式说明：
 两个非负有理数字符串，空格或者英文逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'1,2');

或imageSource.modifyImageProperty(key,'1 2');

读取结果示例：
 "1,2"

PRIMARY_CHROMATICITIES
12+

"PrimaryChromaticities"

图像的主要颜色的色度。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'2/1');

读取结果示例：
 "0.5"

PHOTO_MODE
10+

"PhotoMode"

拍照模式。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

读取结果示例：
 "1"

JPEG_INTERCHANGE_FORMAT
12+

"JPEGInterchangeFormat"

JPEG压缩缩略图数据开始字节（SOI）的偏移。

读写能力：
 只读。

读取结果示例：
 "1024"

JPEG_INTERCHANGE_FORMAT_LENGTH
12+

"JPEGInterchangeFormatLength"

JPEG压缩缩略图数据的字节数。

读写能力：
 只读。

读取结果示例：
 "1024"

YCBCR_COEFFICIENTS
12+

"YCbCrCoefficients"

从RGB到YCbCr图像数据的转换矩阵系数，RGB→YCbCr转换时的加权系数。

读写能力：
 可读写。

修改传参格式说明：
 三个非负有理数字符串，和为1。

修改示例：
imageSource.modifyImageProperty(key,'0.299, 0.587, 0.114');

读取结果示例：
 "0.299, 0.587, 0.114"

YCBCR_SUB_SAMPLING
12+

"YCbCrSubSampling"

色度分量与亮度分量的采样比率。

读写能力：
 可读写。

修改传参格式说明：
 两个非负整数字符串，空格或者逗号分隔。

修改示例：
imageSource.modifyImageProperty(key,'2,2');

或imageSource.modifyImageProperty(key,'2 2');

读取结果示例：
 "2,2"

YCBCR_POSITIONING
12+

"YCbCrPositioning"

色度分量相对于亮度分量的位置。

1："Centered"，中心对齐（Centered），Cb/Cr分量的采样点相对于亮度像素点是居中对齐（常见）。

2："Co-sited"，左上对齐（Co-sited）Cb/Cr分量和 Y 分量的采样点对齐在左上角。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Centered');

读取结果示例：
 "Centered"

REFERENCE_BLACK_WHITE
12+

"ReferenceBlackWhite"

参考黑点值和白点值。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

读取结果示例：
 "1,255, 0,255, 0,255"

COPYRIGHT
12+

"Copyright"

图像的版权信息。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'desc');

读取结果示例：
 "desc (Photographer) - [None] (Editor)"

EXPOSURE_TIME
9+

"ExposureTime"

曝光时间。单位为秒（s）。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'1/2');

读取结果示例：
 "1/33 sec."

F_NUMBER
9+

"FNumber"

光圈值，例如f/1.8。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'1/2');

读取结果示例：
 "f/1.0"

EXPOSURE_PROGRAM
12+

"ExposureProgram"

拍照时相机用来设置曝光的程序的类别。

0："Not defined"。

1："Manual"。

2："Normal program"。

3："Aperture priority"。

4："Shutter priority"。

5："Creative program (biased toward depth of field)"。

6："Creative program (biased toward fast shutter speed)"。

7："Portrait mode (for closeup photos with the background out of focus)"。

8："Landscape mode (for landscape photos with the background in focus)"。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Not defined');

读取结果示例：
 "Not defined"

SPECTRAL_SENSITIVITY
12+

"SpectralSensitivity"

表示所用相机的每个通道的光谱灵敏度。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'SpectralSensitivity');

读取结果示例：
 "SpectralSensitivity"

GPS_VERSION_ID
12+

"GPSVersionID"

GPS信息版本号。

读写能力：
 可读写。

修改传参格式说明：
 四个以小数点分隔的非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'2.3.0.0');

读取结果示例：
 "2.3.0.0"

GPS_LATITUDE_REF

"GPSLatitudeRef"

用于标识图像拍摄地点的纬度方向（北半球或南半球）。

78："North"。

83："South"。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'78');

或imageSource.modifyImageProperty(key,'North');

读取结果示例：
 "N"或"78"

GPS_LATITUDE

"GPSLatitude"

图片纬度。修改时应按"度，分，秒"格式传入，如"39，54，7.542"

读写能力：
 可读写。

修改传参格式说明：
 三个非负有理数字符串，逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'39,54,7.542');

读取结果示例：
 "39,54,7.542"

GPS_LONGITUDE_REF

"GPSLongitudeRef"

经度引用，例如W或E， 用于标识图像拍摄地点的经度方向（东半球或西半球）。

69："East"。

87："West"。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'69');

或imageSource.modifyImageProperty(key,'East');

读取结果示例：
 "69"或"E"

GPS_LONGITUDE

"GPSLongitude"

图片经度。修改时应按"度，分，秒"格式传入，如"116，19，42.16"

读写能力：
 可读写。

修改传参格式说明：
 三个非负有理数字符串，逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'116,19,42.16');

读取结果示例：
 "116,19,42.16"

GPS_ALTITUDE_REF
12+

"GPSAltitudeRef"

用于GPS高度的参照高度。

0："Sea level"，海平面以上（Above Sea Level）。

1："Sea level reference"，海平面以下（Below Sea Level）。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Sea level');

读取结果示例：
 "Sea level"

GPS_ALTITUDE
12+

"GPSAltitude"

基于GPSAltitudeRef的高度。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'123.45');

读取结果示例：
 "123.45"

GPS_TIME_STAMP
10+

"GPSTimeStamp"

GPS时间戳。

读写能力：
 可读写。

修改传参格式说明：
 格式为"HH:mm:ss.ddd"。

修改示例：
imageSource.modifyImageProperty(key,'12:30:30.123');

读取结果示例：
 "12:30:30.123"

GPS_SATELLITES
12+

"GPSSatellites"

用于测量的GPS卫星。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'GPS Satellites');

读取结果示例：
 "GPSSatellites"

GPS_STATUS
12+

"GPSStatus"

录制图像时GPS接收器的状态。

'A'："Measurement in progress"，GPS有效，已成功锁定卫星信号，位置数据可信；

'V'："Measurement interrupted，GPS无效，当前未能定位，位置数据可能为空或不准。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入对应的字母或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'A');

或imageSource.modifyImageProperty(key,'Measurement in progress');

读取结果示例：
 "A"

GPS_MEASURE_MODE
12+

"GPSMeasureMode"

GPS测量模式。用于表示图像拍摄时GPS定位使用的测量模式，即是使用2D（平面）定位还是3D（含高度）定位。

2："2-dimensional measurement"，2D测量（纬度+经度）。

3："3-dimensional measurement"，3D测量（纬度+经度+高度）。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'2');

或imageSource.modifyImageProperty(key,'2-dimensional measurement');

读取结果示例：
 "2"

GPS_DOP
12+

"GPSDOP"

GPS DOP（数据精度等级），用于表示拍摄时GPS测量结果的定位精度水平。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1.5');

读取结果示例：
 "1.5"

GPS_SPEED_REF
12+

"GPSSpeedRef"

用来表示GPS接收器移动速度的单位。

'K'："km/h"。

'M'："mph"。

'N'："knots"。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入对应的字母或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'K');

或imageSource.modifyImageProperty(key,'km/h');

读取结果示例：
 "K"

GPS_SPEED
12+

"GPSSpeed"

GPS接收器的移动速度。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串

修改示例：
imageSource.modifyImageProperty(key,'123');

或imageSource.modifyImageProperty(key,'123.45');

读取结果示例：
 "123.45"

GPS_TRACK_REF
12+

"GPSTrackRef"

GPS接收机移动方向的参照，用于说明这个角度是以哪个“北”为参考。

'T'："True direction"，真北：地理极点方向，适合地图、导航。

'M'："Magnetic direction"， 磁北：受地磁影响，磁偏角因地区和时间不同而变化。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入对应的字母或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'T');

或imageSource.modifyImageProperty(key,'True direction');

读取结果示例：
 "T"

GPS_TRACK
12+

"GPSTrack"

GPS接收机的移动方向。用于记录拍摄设备在拍照时的移动方向（行进方向），单位是角度（度）

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'180');

读取结果示例：
 "180"

GPS_IMG_DIRECTION_REF
12+

"GPSImgDirectionRef"

图像方向的参照。

'T'："True direction"，真北：地理极点方向，适合地图、导航。

'M'："Magnetic direction"， 磁北：受地磁影响，磁偏角因地区和时间不同而变化。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入对应的字母或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'T');

或imageSource.modifyImageProperty(key,'True direction');

读取结果示例：
 "T"

GPS_IMG_DIRECTION
12+

"GPSImgDirection"

拍摄时图像的方向。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'120');

读取结果示例：
 "120"

GPS_MAP_DATUM
12+

"GPSMapDatum"

GPS接收器使用的大地测量数据。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'GPS Map Datum');

读取结果示例：
 "GPS Map Datum"

GPS_DEST_LATITUDE_REF
12+

"GPSDestLatitudeRef"

目的地点的纬度参照。

78："North"。

83："South"。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'78');

或imageSource.modifyImageProperty(key,'North');

读取结果示例：
 "78"

GPS_DEST_LATITUDE
12+

"GPSDestLatitude"

目的地点的纬度。

读写能力：
 可读写。

修改传参格式说明：
 三个非负整数字符串，空格或者英文逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'39,54,7');

或imageSource.modifyImageProperty(key,'39 54 7');

读取结果示例：
 "39,54,7"

GPS_DEST_LONGITUDE_REF
12+

"GPSDestLongitudeRef"

目的地点的经度参照。

69："East"。

87："West"。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'69');

或imageSource.modifyImageProperty(key,'East');

读取结果示例：
 "69"

GPS_DEST_LONGITUDE
12+

"GPSDestLongitude"

目的地点的经度。

读写能力：
 可读写。

修改传参格式说明：
 三个非负整数字符串，空格或者英文逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'116,19,42');

或imageSource.modifyImageProperty(key,'116 19 42');

读取结果示例：
 "116,19,42"

GPS_DEST_BEARING_REF
12+

"GPSDestBearingRef"

指向目的地点的方位参照。

'T'："True direction"，真北：地理极点方向，适合地图、导航。

'M'："Magnetic direction"，磁北：受地磁影响，磁偏角因地区和时间不同而变化。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入对应的字母或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'T');

或imageSource.modifyImageProperty(key,'True direction');

读取结果示例：
 "T"

GPS_DEST_BEARING
12+

"GPSDestBearing"

目的地方位。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'120');

读取结果示例：
 "120"

GPS_DEST_DISTANCE_REF
12+

"GPSDestDistanceRef"

目标点距离的测量单位。

'K'："km"，公里。

'M'："miles"，英里。

'N'："nautical miles"，海里。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入对应的字母或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'K');

或imageSource.modifyImageProperty(key,'km');

读取结果示例：
 "K"

GPS_DEST_DISTANCE
12+

"GPSDestDistance"

到目的地点的距离。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'100');

读取结果示例：
 "100"

GPS_PROCESSING_METHOD
12+

"GPSProcessingMethod"

记录定位方法名的字符串。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'GPS Processing Method');

读取结果示例：
 "GPS Processing Method"

GPS_AREA_INFORMATION
12+

"GPSAreaInformation"

记录GPS区域名的字符串。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'GPS Area Information');

读取结果示例：
 "GPS Area Information"

GPS_DATE_STAMP
10+

"GPSDateStamp"

GPS日期戳。

读写能力：
 可读写。

修改传参格式说明：
 格式为“YY:MM:DD”。

修改示例：
imageSource.modifyImageProperty(key,'2020:07:07');

读取结果示例：
 "2020:07:07"

GPS_DIFFERENTIAL
12+

"GPSDifferential"

此字段表示GPS数据是否应用了差分校正，对于精确的位置准确性至关重要。

0："Without correction"，没有使用差分校正。

1："Correction applied"，使用差分校正。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Without correction');

读取结果示例：
 "0"

GPS_H_POSITIONING_ERROR
12+

"GPSHPositioningError"

此标签指示水平定位误差，单位为米。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'100');

读取结果示例：
 "100"

ISO_SPEED_RATINGS
9+

"ISOSpeedRatings"

ISO感光度，例如400。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'3200');

读取结果示例：
 "3200"

PHOTOGRAPHIC_SENSITIVITY
12+

"PhotographicSensitivity"

用于表示图像拍摄时所用的感光度值（ISO 值），也叫ISO Speed。该字段是Exif 2.3后的推荐字段，ISOSpeedRatings（Tag 0x8827）是早期使用的字段，类型和含义相同，若两个字段都存在，以PhotographicSensitivity 为主。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'3200');

读取结果示例：
 "3200"

OECF
12+

"OECF"

表示ISO 14524中规定的光电转换函数（OECF）。

读写能力：
 可读写。

该字段为特有格式，虽然支持读写，但目前版本不做解析。

SENSITIVITY_TYPE
10+

"SensitivityType"

灵敏度类型。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Standard output sensitivity (SOS)');

读取结果示例：
 "Standard output sensitivity (SOS)"

STANDARD_OUTPUT_SENSITIVITY
10+

"StandardOutputSensitivity"

标准输出灵敏度。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'400');

读取结果示例：
 "400"

RECOMMENDED_EXPOSURE_INDEX
10+

"RecommendedExposureIndex"

推荐曝光指数。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'3200');

读取结果示例：
 "3200"

ISO_SPEED
10+

"ISOSpeedRatings"

ISO速度等级。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'3200');

读取结果示例：
 "3200"

ISO_SPEED_LATITUDE_YYY
12+

"ISOSpeedLatitudeyyy"

该标签指示摄像机或输入设备的ISO速度纬度yyy值，该值在ISO 12232中定义。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'3200');

读取结果示例：
 "3200"

ISO_SPEED_LATITUDE_ZZZ
12+

"ISOSpeedLatitudezzz"

该标签指示摄像机或输入设备的ISO速度纬度zzz值，该值在ISO 12232中定义。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'3200');

读取结果示例：
 "3200"

EXIF_VERSION
12+

"ExifVersion"

支持的Exif标准版本。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串，小数点分隔。

修改示例：
imageSource.modifyImageProperty(key,'2.3');

读取结果示例：
 "Exif Version 2.3"

DATE_TIME_ORIGINAL
9+

"DateTimeOriginal"

拍摄时间，例如2022:09:06 15:48:00。

读写能力：
 可读写。

修改传参格式说明：
 格式为“YY:MM:DD HH:mm:ss”或“YY:MM:DD”。

修改示例：
imageSource.modifyImageProperty(key,'2024:07:07 13:45:59');

或imageSource.modifyImageProperty(key,'2024:07:07');

读取结果示例：
 "2024:07:07"或"2024:07:07 13:45:59"

DATE_TIME_DIGITIZED
12+

"DateTimeDigitized"

图像作为数字数据存储的日期和时间，格式为YYYY:MM:DD HH:mm:ss。

读写能力：
 可读写。

修改传参格式说明：
 格式为“YY:MM:DD HH:mm:ss”或“YY:MM:DD”。

修改示例：
imageSource.modifyImageProperty(key,'2024:07:07 13:45:59');

或imageSource.modifyImageProperty(key,'2024:07:07');

读取结果示例：
 "2024:07:07"或"2024:07:07 13:45:59"

OFFSET_TIME
12+

"OffsetTime"

在Exif中，OffsetTime字段表示与UTC（协调世界时）的时间偏移，用于确定照片拍摄的本地时间。

读写能力：
 可读写。

修改传参格式说明：
 格式为“YY:MM:DD HH:mm:ss”或“YY:MM:DD”。

修改示例：
imageSource.modifyImageProperty(key,'2024:07:07 13:45:59');

或imageSource.modifyImageProperty(key,'2024:07:07');

读取结果示例：
 "2024:07:07"或"2024:07:07 13:45:59"

OFFSET_TIME_ORIGINAL
12+

"OffsetTimeOriginal"

此标签记录原始图像创建时的UTC偏移量，对于时间敏感的应用至关重要。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Offset Time Original');

读取结果示例：
 "Offset Time Original"

OFFSET_TIME_DIGITIZED
12+

"OffsetTimeDigitized"

此标签记录图像数字化时的UTC偏移量，有助于准确调整时间戳。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Offset Time Digitized');

读取结果示例：
 "Offset Time Digitized"

COMPONENTS_CONFIGURATION
12+

"ComponentsConfiguration"

压缩数据的特定信息。

读写能力：
 可读写。

修改传参格式说明：
 "Y Cb Cr -"。

修改示例：
imageSource.modifyImageProperty(key,'Y Cb Cr -');

读取结果示例：
 "Y Cb Cr -"

COMPRESSED_BITS_PER_PIXEL
12+

"CompressedBitsPerPixel"

用于压缩图像的压缩模式，单位为每像素位数。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'0.95');

读取结果示例：
 "0.95"

SHUTTER_SPEED
12+

"ShutterSpeedValue"

快门速度，以APEX（摄影曝光的加法系统）值表示。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

读取结果示例：
 "1.00 EV (1/2 sec.)"

APERTURE_VALUE
10+

"ApertureValue"

光圈值。格式如4/1。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'5.6');

读取结果示例：
 "5.60 EV (f/7.0)"

BRIGHTNESS_VALUE
12+

"BrightnessValue"

图像的亮度值，以APEX单位表示。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'2');

读取结果示例：
 "2.00 EV (13.71 cd/m^2)"

EXPOSURE_BIAS_VALUE
10+

"ExposureBiasValue"

曝光偏差值。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

读取结果示例：
 1.00 EV

MAX_APERTURE_VALUE
12+

"MaxApertureValue"

最小F数镜头。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

读取结果示例：
 "1.00 EV (f/1.4)"

SUBJECT_DISTANCE
12+

"SubjectDistance"

测量单位为米的主体距离。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'100');

读取结果示例：
 "100.0 m"

METERING_MODE
10+

"MeteringMode"

测光模式。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Average');

读取结果示例：
 "Average"

LIGHT_SOURCE
10+

"LightSource"

光源。例如Fluorescent。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Daylight');

读取结果示例：
 "Daylight"

FLASH
10+

"Flash"

闪光灯，记录闪光灯状态。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0x00');

或imageSource.modifyImageProperty(key,'Flash did not fire');

读取结果示例：
 "Flash did not fire"

FOCAL_LENGTH
10+

"FocalLength"

焦距。单位为毫米（mm）。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'50');

或imageSource.modifyImageProperty(key,'50/1');

读取结果示例：
 "50.0 mm"

SUBJECT_AREA
12+

"SubjectArea"

该标签指示整个场景中主要主体的位置和区域。

读写能力：
 可读写。

修改传参格式说明：
 两个非负有理数字符串，空格或者英文逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'50 50');

或imageSource.modifyImageProperty(key,'50,50');

读取结果示例：
 "(x,y) = (50,50)"

MAKER_NOTE
12+

"MakerNote"

Exif/DCF制造商使用的标签，用于记录任何所需信息。

在API version 12-19，该字段为只读；从API version 20开始，该字段可读写。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Maker Note');

读取结果示例：
 "Maker Note"

USER_COMMENT
10+

"UserComment"

用户注释。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'User Comment');

读取结果示例：
 "User Comment"

SUBSEC_TIME
12+

"SubsecTime"

用于为DateTime标签记录秒的分数的标签。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'629000');

读取结果示例：
 "629000"

SUBSEC_TIME_ORIGINAL
12+

"SubsecTimeOriginal"

用于为DateTimeOriginal标签记录秒的分数的标签。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'629000');

读取结果示例：
 "629000"

SUBSEC_TIME_DIGITIZED
12+

"SubsecTimeDigitized"

用于为DateTimeDigitized标签记录秒的分数的标签。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'62900');

读取结果示例：
 "62900"

FLASHPIX_VERSION
12+

"FlashpixVersion"

该标签表示FPXR文件支持的Flashpix格式版本，增强了设备兼容性。

读写能力：
 可读写。

修改传参格式说明：
 版本号格式“1.0”。

修改示例：
imageSource.modifyImageProperty(key,'1.0');

读取结果示例：
 "FlashPix Version 1.0"

COLOR_SPACE
12+

"ColorSpace"

色彩空间信息标签，通常记录为色彩空间指定符。

1："sRGB"，sRG标准色彩空间（常见默认值）。

2："Adobe RGB"，exif中未定义，但大量相机使用。

0xffff："Uncalibrated"，表示未校准，颜色空间不明确。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'sRGB');

读取结果示例：
 "sRGB"

PIXEL_X_DIMENSION
10+

"PixelXDimension"

像素X尺寸。单位为像素（px）。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'4096');

读取结果示例：
 "4096"

PIXEL_Y_DIMENSION
10+

"PixelYDimension"

像素Y尺寸。单位为像素（px）。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'3072');

读取结果示例：
 "3072"

RELATED_SOUND_FILE
12+

"RelatedSoundFile"

与图像数据相关的音频文件的名称。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Related Sound File');

读取结果示例：
 "Related Sound File"

FLASH_ENERGY
12+

"FlashEnergy"

图像捕获时的闪光能量，以BCPS表示。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'5.0');

或imageSource.modifyImageProperty(key,'5/1');

读取结果示例：
 "5"

SPATIAL_FREQUENCY_RESPONSE
12+

"SpatialFrequencyResponse"

相机或输入设备的空间频率表。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Spatial Frequency Response');

读取结果示例：
 "Spatial Frequency Response"

FOCAL_PLANE_X_RESOLUTION
12+

"FocalPlaneXResolution"

图像宽度中每FocalPlaneResolutionUnit的像素。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'500');

或imageSource.modifyImageProperty(key,'500.0');

读取结果示例：
 "500"

FOCAL_PLANE_Y_RESOLUTION
12+

"FocalPlaneYResolution"

图像高度中每FocalPlaneResolutionUnit的像素。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'500');

或imageSource.modifyImageProperty(key,'500.0');

读取结果示例：
 "500"

FOCAL_PLANE_RESOLUTION_UNIT
12+

"FocalPlaneResolutionUnit"

测量FocalPlaneXResolution和FocalPlaneYResolution的单位。

2："Inch"，英寸。

3："Centimeter"，厘米。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'2');

或imageSource.modifyImageProperty(key,'Inch');

读取结果示例：
 "Inch"

SUBJECT_LOCATION
12+

"SubjectLocation"

主要对象相对于左边缘的位置。

读写能力：
 可读写。

修改传参格式说明：
 两个非负整数字符串，空格或者英文逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'123 456');

或imageSource.modifyImageProperty(key,'123,456');

读取结果示例：
 "123,456"

EXPOSURE_INDEX
12+

"ExposureIndex"

捕获时选定的曝光指数。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

读取结果示例：
 "1"

SENSING_METHOD
12+

"SensingMethod"

相机上的图像传感器类型。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'2');

或imageSource.modifyImageProperty(key,'One-chip color area sensor');

读取结果示例：
 "One-chip color area sensor"

FILE_SOURCE
12+

"FileSource"

表明图像来源。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'DSC');

读取结果示例：
 "DSC"

SCENE_TYPE
9+

"SceneType"

拍摄场景模式，例如人像、风光、运动、夜景等。

1："Directly photographed"，图像传感器直接拍摄。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Directly photographed');

读取结果示例：
 "Directly photographed"

CFA_PATTERN
12+

"CFAPattern"

图像传感器的色彩滤光片（CFA）几何图案。

读写能力：
 可读写。

该字段为特有格式，虽然支持读写，但目前版本不做解析。

CUSTOM_RENDERED
12+

"CustomRendered"

指示图像数据上的特殊处理。

0："Normal process"，正常处理（未自定义渲染）。

1："Custom process"，自定义处理（如艺术效果、美颜、HDR）。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Custom process');

读取结果示例：
 "Custom process"

EXPOSURE_MODE
12+

"ExposureMode"

拍摄时设置的曝光模式。

0："Auto exposure"，自动曝光（Auto）。

1："Manual exposure"，手动曝光（Manual）。

2："Auto bracket"，自动曝光优先（Auto bracket）。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Auto exposure');

读取结果示例：
 "Auto exposure"

WHITE_BALANCE
10+

"WhiteBalance"

白平衡。

0："Auto white balance"，自动白平衡。

1："Manual white balance"，手动白平衡。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Auto white balance');

读取结果示例：
 "Auto white balance"

DIGITAL_ZOOM_RATIO
12+

"DigitalZoomRatio"

捕获时的数字变焦比率。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：
imageSource.modifyImageProperty(key,'1/2');

读取结果示例：
 "0.5"

FOCAL_LENGTH_IN_35_MM_FILM
10+

"FocalLengthIn35mmFilm"

换算成35mm等效焦距。单位为毫米（mm）。

读写能力：
 可读写。

修改传参格式说明：
 非负整数字符串。

修改示例：
imageSource.modifyImageProperty(key,'50');

读取结果示例：
 "50"

SCENE_CAPTURE_TYPE
12+

"SceneCaptureType"

捕获的场景类型。

0："Standard"，标准。

1："Landscape"，风景。

2："Portrait"，人像。

3："Night scene"，夜景。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Standard');

读取结果示例：
 "Standard"

GAIN_CONTROL
12+

"GainControl"

整体图像增益调整的程度。

0："Normal"，无增益控制。

1："Low gain up"，低增益提升。

2："High gain up"，高增益提升。

3："Low gain down"， 低增益降低。

4："High gain down"，高增益降低。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Normal');

读取结果示例：
 "Normal"

CONTRAST
12+

"Contrast"

相机应用的对比度处理方向。

0："Normal"，正常对比度。

1："Soft"，软对比度。

2："Hard"，硬对比度。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Normal');

读取结果示例：
 "Normal"

SATURATION
12+

"Saturation"

相机应用的饱和度处理方向。

0："Normal"，正常。

1："Low saturation"，低饱和度。

2："High saturation"，高饱和度。

读写能力：
 可读��。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Normal');

读取结果示例：
 "Normal"

SHARPNESS
12+

"Sharpness"

相机应用的锐度处理方向。

0："Normal"，正常（Normal）。

1："Soft"，柔和（Soft）。

2："Hard"，硬（Hard）。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'0');

或imageSource.modifyImageProperty(key,'Normal');

读取结果示例：
 "Normal"

DEVICE_SETTING_DESCRIPTION
12+

"DeviceSettingDescription"

特定相机模型的拍照条件信息。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Device Setting Description');

读取结果示例：
 "Device Setting Description"

SUBJECT_DISTANCE_RANGE
12+

"SubjectDistanceRange"

表示主体到相机的距离范围。

0："Unknown"，未知。

1："Macro"，宏观。

2："Close view"，近景。

3："Distant view"，远景。

读写能力：
 可读写。

修改传参格式说明：
 修改时传入相应的数字或者字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'Macro');

读取结果示例：
 "Macro"

IMAGE_UNIQUE_ID
12+

"ImageUniqueID"

为每张图片唯一分配的标识符。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Image Unique ID');

读取结果示例：
 "Image Unique ID"

CAMERA_OWNER_NAME
12+

"CameraOwnerName"

相机所有者的姓名。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Camera Owner Name');

读取结果示例：
 "Camera Owner Name"

BODY_SERIAL_NUMBER
12+

"BodySerialNumber"

相机机身的序列号。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Body Serial Number');

读取结果示例：
 "Body Serial Number"

LENS_SPECIFICATION
12+

"LensSpecification"

使用的镜头规格。

读写能力：
 可读写。

修改传参格式说明：
 四个非负有理数字符串，空格或者英文逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'12 12 12 12');或imageSource.modifyImageProperty(key,'12,12,12,12');

读取结果示例：
 "12,12,12,12"

LENS_MAKE
12+

"LensMake"

镜头的制造商。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Lens Make');

读取结果示例：
 "Lens Make"

LENS_MODEL
12+

"LensModel"

镜头的型号名称。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Lens Model');

读取结果示例：
 "Lens Model"

LENS_SERIAL_NUMBER
12+

"LensSerialNumber"

镜头的序列号。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Lens Serial Number');

读取结果示例：
 "Lens Serial Number"

COMPOSITE_IMAGE
12+

"CompositeImage"

表示图像是否为合成图像。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'1');

或imageSource.modifyImageProperty(key,'NonComposite');

读取结果示例：
 "1"

SOURCE_IMAGE_NUMBER_OF_COMPOSITE_IMAGE
12+

"SourceImageNumberOfCompositeImage"

用于合成图像的源图像数量。

读写能力：
 可读写。

修改传参格式说明：
 两个非负整数字符串，空格或者英文逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'1 5');

或imageSource.modifyImageProperty(key,'1,5');

读取结果示例：
 "1,5"

SOURCE_EXPOSURE_TIMES_OF_COMPOSITE_IMAGE
12+

"SourceExposureTimesOfCompositeImage"

合成图像的源图像曝光时间。

读写能力：
 可读写。

修改传参格式说明：
 字符串。

修改示例：
imageSource.modifyImageProperty(key,'Source Exposure Times Of CompositeImage');

读取结果示例：
 "Source Exposure Times Of CompositeImage"

GAMMA
12+

"Gamma"

表示系数伽马的值。

读写能力：
 可读写。

修改传参格式说明：
 非负有理数字符串。

修改示例：

imageSource.modifyImageProperty(key,'1');

读取结果示例：
 "1"

DNG_VERSION
12+

"DNGVersion"

DNG版本标签编码了符合DNG规范的四级版本号。

读写能力：
 可读写。

修改传参格式说明：
 四个非负整数字符串，空格或者英文逗号隔开。

修改示例：

imageSource.modifyImageProperty(key,'1 1 1 1');

或imageSource.modifyImageProperty(key,'1,1,1,1');

读取结果示例：
 "1,1,1,1"

DEFAULT_CROP_SIZE
12+

"DefaultCropSize"

DefaultCropSize指定了原始坐标中的最终图像大小，考虑了额外的边缘像素。单位为像素（px）。

读写能力：
 可读写。

修改传参格式说明：
 两个非负整数字符串，空格或者英文逗号隔开。

修改示例：
imageSource.modifyImageProperty(key,'400 400');

或imageSource.modifyImageProperty(key,'400,400');

读取结果示例：
 "400,400"

GIF_LOOP_COUNT
12+

"GIFLoopCount"

GIF图片循环次数。0表示无限循环，其他值表示循环次数。

读写能力：
 只读。

_

IS_XMAGE_SUPPORTED
12+

"HwMnoteIsXmageSupported"

是否支持XMAGE。

读写能力：
 可读写。

_

XMAGE_MODE
12+

"HwMnoteXmageMode"

XMAGE水印模式。

读写能力：
 可读写。

_

XMAGE_LEFT
12+

"HwMnoteXmageLeft"

水印区域X1坐标。

读写能力：
 可读写。

_

XMAGE_TOP
12+

"HwMnoteXmageTop"

水印区域Y1坐标。

读写能力：
 可读写。

_

XMAGE_RIGHT
12+

"HwMnoteXmageRight"

水印区域X2坐标。

读写能力：
 可读写。

_

XMAGE_BOTTOM
12+

"HwMnoteXmageBottom"

水印区域Y2坐标。

读写能力：
 可读写。

_

CLOUD_ENHANCEMENT_MODE
12+

"HwMnoteCloudEnhancementMode"

云增强模式。

读写能力：
 可读写。

_

WIND_SNAPSHOT_MODE
12+

"HwMnoteWindSnapshotMode"

运动快拍模式。

读写能力：
 只读。

_

SCENE_POINTER
12+

"HwMnoteScenePointer"

场景指针。

读写能力：
 只读。

_

SCENE_VERSION
12+

"HwMnoteSceneVersion"

场景算法版本信息。

读写能力：
 只读。

_

SCENE_FOOD_CONF
11+

"HwMnoteSceneFoodConf"

拍照场景：食物。

读写能力：
 只读。

_

SCENE_STAGE_CONF
11+

"HwMnoteSceneStageConf"

拍照场景：舞台。

读写能力：
 只读。

_

SCENE_BLUE_SKY_CONF
11+

"HwMnoteSceneBlueSkyConf"

拍照场景：蓝天。

读写能力：
 只读。

_

SCENE_GREEN_PLANT_CONF
11+

"HwMnoteSceneGreenPlantConf"

拍照场景：绿植。

读写能力：
 只读。

_

SCENE_BEACH_CONF
11+

"HwMnoteSceneBeachConf"

拍照场景：沙滩。

读写能力：
 只读。

_

SCENE_SNOW_CONF
11+

"HwMnoteSceneSnowConf"

拍照场景：下雪。

读写能力：
 只读。

_

SCENE_SUNSET_CONF
11+

"HwMnoteSceneSunsetConf"

拍照场景：日落。

读写能力：
 只读。

_

SCENE_FLOWERS_CONF
11+

"HwMnoteSceneFlowersConf"

拍照场景：花。

读写能力：
 只读。

_

SCENE_NIGHT_CONF
11+

"HwMnoteSceneNightConf"

拍照场景：夜晚。

读写能力：
 只读。

_

SCENE_TEXT_CONF
11+

"HwMnoteSceneTextConf"

拍照场景：文本。

读写能力：
 只读。

_

FACE_POINTER
12+

"HwMnoteFacePointer"

脸部指针。

读写能力：
 只读。

_

FACE_VERSION
12+

"HwMnoteFaceVersion"

人脸算法版本信息。

读写能力：
 只读。

_

FACE_COUNT
11+

"HwMnoteFaceCount"

人脸数量。

读写能力：
 只读。

_

FACE_CONF
12+

"HwMnoteFaceConf"

人脸置信度。

读写能力：
 只读。

_

FACE_SMILE_SCORE
12+

"HwMnoteFaceSmileScore"

FaceCount张人脸的笑脸分数。

读写能力：
 只读。

_

FACE_RECT
12+

"HwMnoteFaceRect"

脸部矩形。

读写能力：
 只读。

_

FACE_LEYE_CENTER
12+

"HwMnoteFaceLeyeCenter"

左眼中心。

读写能力：
 只读。

_

FACE_REYE_CENTER
12+

"HwMnoteFaceReyeCenter"

右眼中心。

读写能力：
 只读。

_

FACE_MOUTH_CENTER
12+

"HwMnoteFaceMouthCenter"

嘴中心。

读写能力：
 只读。

_

CAPTURE_MODE
10+

"HwMnoteCaptureMode"

捕获模式。

读写能力：
 可读写。

_

BURST_NUMBER
12+

"HwMnoteBurstNumber"

连拍次数。

读写能力：
 只读。

_

FRONT_CAMERA
12+

"HwMnoteFrontCamera"

是否是前置相机自拍。

读写能力：
 只读。

_

ROLL_ANGLE
11+

"HwMnoteRollAngle"

滚动角度。

读写能力：
 只读。

_

PITCH_ANGLE
11+

"HwMnotePitchAngle"

俯仰角度。

读写能力：
 只读。

_

PHYSICAL_APERTURE
10+

"HwMnotePhysicalAperture"

物理孔径，光圈大小。单位为毫米（mm）。

读写能力：
 只读。

_

FOCUS_MODE
11+

"HwMnoteFocusMode"

对焦模式。

读写能力：
 只读。

_

FragmentMapPropertyKey
13+

枚举，水印裁剪图图片信息。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

X_IN_ORIGINAL

"XInOriginal"

水印裁剪图左上角在原始图中的X坐标。

Y_IN_ORIGINAL

"YInOriginal"

水印裁剪图左上角在原始图中的Y坐标。

WIDTH

"FragmentImageWidth"

水印裁剪图的宽。单位为像素（px）。

HEIGHT

"FragmentImageHeight"

水印裁剪图的高。单位为像素（px）。

GifPropertyKey
20+

枚举，GIF图片信息。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

GIF_DELAY_TIME

"GifDelayTime"

GIF图片的每帧播放时长（单位为毫秒）。

GIF_DISPOSAL_TYPE

"GifDisposalType"

GIF图片每帧的帧过渡模式。

ImageFormat
9+

枚举，图片格式。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

YCBCR_422_SP

1000

YCBCR422半平面格式。

JPEG

2000

JPEG编码格式。

ComponentType
9+

枚举，图像的组件类型。

系统能力：
 SystemCapability.Multimedia.Image.ImageReceiver

名称

值

说明

YUV_Y

1

亮度信息。

YUV_U

2

色度信息。

YUV_V

3

色度信息。

JPEG

4

JPEG 类型。

DecodingDynamicRange
12+

描述解码时期望的图像动态范围。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

AUTO

0

自适应，根据图片信息处理。即如果图片本身为HDR图片，则会按照HDR内容解码；反之按照SDR内容解码。通过
CreateIncrementalSource
创建的ImageSource会解码为SDR内容。

SDR

1

按照标准动态范围处理图片。

HDR

2

按照高动态范围处理图片。通过
CreateIncrementalSource
创建的ImageSource会解码为SDR内容。

PackingDynamicRange
12+

描述编码时期望的图像动态范围。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

AUTO

0

自适应，根据
pixelmap
内容处理。即如果pixelmap本身为HDR，则会按照HDR内容进行编码；反之按照SDR内容编码。

SDR

1

按照标准动态范围处理图片。

CropAndScaleStrategy
18+

枚举，裁剪与缩放的先后策略。

如果在配置解码选项
DecodingOptions
时，未填入参数cropAndScaleStrategy，并且同时设置了参数desiredRegion和desiredSize，由于系统对于不同图片格式采用的解码算法不同，最终解码效果将略有差异。

例如原始图片大小为200x200，传入desiredSize:{width: 150, height: 150}，desiredRegion:{x: 0, y: 0, width: 100, height: 100}，即预期解码原图左上角1/4区域，最终将pixelMap大小缩放至150x150返回。

对于jpeg、webp图片（部分dng图片解码时会优先解码图片中的jpeg预览图，在此场景下也会被视为jpeg图片格式）会先进行下采样，例如按照7/8下采样，再基于175x175的图片大小进行区域裁剪，因此最终的区域内容稍大于原图的左上角1/4区域。

对于svg图片，由于是矢量图，可以任意缩放不损失清晰度，在解码时会根据desiredSize与原图Size的比例选择缩放比例，在基于缩放后的图片大小进行区域裁剪，因此最终返回的解码区域会有所差异。

针对该场景，建议在解码选项同时设置了desiredRegion与desiredSize时，参数cropAndScaleStrategy应传入CROP_FIRST保证效果一致。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

SCALE_FIRST

1

解码参数如果同时设置desiredRegion与desiredSize，先根据desiredSize进行缩放，再根据desiredRegion进行区域裁剪。

CROP_FIRST

2

解码参数如果同时设置desiredRegion与desiredSize，先根据desiredRegion进行区域裁剪，再根据desiredSize进行缩放。

HdrMetadataKey
12+

枚举，
pixelmap
使用的HDR相关元数据信息的关键字。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

HDR_METADATA_TYPE

0

pixelmap
使用的元数据类型。

HDR_STATIC_METADATA

1

静态元数据。

HDR_DYNAMIC_METADATA

2

动态元数据。

HDR_GAINMAP_METADATA

3

Gainmap使用的元数据。

HdrMetadataType
12+

枚举，
HdrMetadataKey
中HDR_METADATA_TYPE关键字对应的值。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

NONE

0

无元数据内容。

BASE

1

表示用于基础图的元数据。

GAINMAP

2

表示用于Gainmap图的元数据。

ALTERNATE

3

表示用于合成后HDR图的元数据。

AntiAliasingLevel
12+

缩放时的缩放算法。

元服务API
：从API version 14 开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

NONE

0

最近邻插值算法。

LOW

1

双线性插值算法。

MEDIUM

2

双线性插值算法，同时开启Mipmap。缩小图片时建议使用。

HIGH

3

三次插值算法。

AllocatorType
15+

枚举，用于图像解码的内存类型。

系统能力：
 SystemCapability.Multimedia.Image.Core

名称

值

说明

AUTO

0

系统决定内存申请方式。

DMA

1

使用DMA内存申请方式。

SHARE_MEMORY

2

使用SHARE_MEMORY的内存申请方式。

---
*2026-04-22T15:53:59.809Z*