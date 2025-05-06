---
title: 关于主题
---

# 关于主题 <Badge type="tip" text="v3.0" />

## 版本信息

![](/about_theme/ver_info.png)

可以查看版本 LOGO 和版本号

## 更新相关

### 主题更新源

![](/about_theme/upgrade_source.png)

可以直接在 WordPress 后台检查并更新

- 如服务器在国内，访问 GitHub 不畅时，则可以更换其他更新源

- 使用官方源时可以选择更新通道

## 资源控制

### 本地提供关键前端资源

默认开启。关键资源是指那些其加载性能将对用户体验产生重大影响的资源。

### 本地提供其他前端资源

主题文件夹中不太重要的前端资源。

### 从公共 CDN 提供第三方库

当禁用时，与主题脚本一起被构建打包的第三方依赖，将从与关键前端资源完全相同的来源加载。

### 公共 CDN 路径

![](/about_theme/public_cdn.png)
您可以选择 **wafpro** 或者 **jsDeliver** 作为您主题的公共 CDN 路径

### 视觉资源路径

此链接目录结构需要与 Fuukei 官方提供的 （[Sakurairo Vision](https://github.com/Fuukei/Sakurairo_Vision)） 公共仓库保持一致，否则可能会出现一些资源 404。默认采用 **又拍云** 提供的镜像源。

::: tip 第三方提供的公开视觉地址（提供方-地址）：

- 筱烷：[https://cdn.nyat.icu/sakurairo_vision/@2.7/](https://cdn.nyat.icu/sakurairo_vision/@2.7/)
- 小七：[https://iro.yateam.cc/2.5/](https://iro.yateam.cc/2.5/)
- 小智：[https://api.kuroko.cn/sakurairo_vision/@2.7/](https://api.kuroko.cn/sakurairo_vision/@2.7/)
- 小智（原神特供版）：[https://api.kuroko.cn/Sakurairo_Vision_Genshin/](https://api.kuroko.cn/Sakurairo_Vision_Genshin/)
- CircleCrop：[https://vision-public.aiccrop.com/@2.7/](https://aiccrop.com/2023/sakurairo-vision-public/)

如使用 `原神特供版` 需要在 `主页设置 → 封面社交区域设置` 中，将 `社交网络图标` 更换为`珊瑚朱色` 

若使用主题版本大于等于2.7，则将 `社交网络图标` 更换为`扁平多彩` 
:::

## 隐私信息

主题尊重您的隐私

但是，当您使用主题预置的中国大陆服务商提供的服务时，服务商可能会收集有关您的访问者的数据并统计数据
您可以通过本地化与主题相关的资源来减少发送给第三方的信息，主题提供相关选项配置

**可以在此处设置是否开启“发送主题版本到 Fuukei 官方”**

::: tip
主题只会向 Fuukei 官方发送时间和版本信息，数据将定期清理并仅用于统计版本更新。
:::
