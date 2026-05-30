# 基于Dockerfile部署ohpm-repo私仓

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-dockerfile`  |  **DocID**: `78576b300fd943edbf30c5ecee5637bc`  |  **NodeID**: `00020177579006653304947fa58274f5`

---

# 基于Dockerfile部署ohpm-repo私仓

 Dockerfile是构建Docker镜像的文本文件，其中包含了构建镜像的命令和说明，可以实现如下功能：

 
- 指定基础镜像。
- 创建项目目录。
- 修改config.yaml配置。
- 设置环境变量。
- 创建用户，设置文件权限。
- 运行install命令，更新环境变量。
- 运行start命令，启动私仓服务。

 本文档介绍在Linux系统中如何使用Docker命令搭建ohpm-repo私仓。

 **环境准备**

 
- 下载[Docker镜像](https://www.docker.com/)，并进行环境搭建。
- 下载ohpm-repo工具包，将下载的工具包重命名为ohpm-repo.zip，[点击链接获取](https://developer.huawei.com/consumer/cn/download/ohpm-repo)。
将Dockerfile文件和ohpm-repo.zip放在同一目录下。Dockerfile文件模板如下：```
*# 使用官方 Node.js 18 镜像*
FROM node:18
COPY ./ohpm-repo.zip /tmp/ohpm-repo.zip
RUN mkdir -p /opt/ohpm-repo && \
    unzip /tmp/ohpm-repo.zip -d /opt/ohpm-repo && \
    rm -f /tmp/ohpm-repo.zip
*# 修改conf/config.yaml的listen配置，不能用localhost和127.0.0.1，必须使用0.0.0.0*
RUN if [ -f /opt/ohpm-repo/conf/config.yaml ]; then \
      sed -i 's/listen: [^ ]*/listen: 0.0.0.0:8088/g' /opt/ohpm-repo/conf/config.yaml; \
    fi
ENV OHPM_REPO_BIN_DIR="/opt/ohpm-repo/bin"
ENV PATH="${OHPM_REPO_BIN_DIR}:${PATH}"
*# 创建用户，不允许使用root用户来运行ohpm-repo install和ohpm-repo start命令*
RUN useradd -m myuser && \
    chown -R myuser:myuser /opt/ohpm-repo && \ 
    chmod -R 755 /opt/ohpm-repo
USER myuser
RUN ohpm-repo install
ENV OHPM_REPO_DEPLOY_ROOT="/home/myuser/ohpm-repo"
CMD ["ohpm-repo", "start"]
```
  
 **搭建私仓服务**

 
- 在当前Dockerfile文件目录下，构建镜像。```
docker build -t ohpm-repo .
```
 
启动服务，包括前台运行命令、后台运行命令两种形式。```
*# *前台运行命令
docker run -it -p 8088:8088 ohpm-repo
*# *后台运行命令
docker run -d --restart=unless-stopped --name ohpm-repo -p 8088:8088 ohpm-repo
```
 - 浏览器访问IP地址8088，使用私仓服务。

---
*Updated: 2026-04-22 01:07:30*
