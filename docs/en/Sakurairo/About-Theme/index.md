---
title: About the Theme
---

# About the Theme <Badge type="tip" text="v3.0" />

## Version Info

![](/about_theme/ver_info.png)

You can view the version logo and version number.

## Update Related

### Theme Update Source

![](/about_theme/upgrade_source.png)

You can check and update the theme directly from the WordPress dashboard.

- If your server is located in mainland China and has difficulty accessing GitHub, you can switch to an alternative update source.

- When using the official source, you can choose the update channel.

## Resource Control

### Provide Key Frontend Resources Locally

Enabled by default. Key resources refer to those whose loading performance significantly affects user experience.

### Provide Other Frontend Resources Locally

Less important frontend resources in the theme folder.

### Load Third-Party Libraries via Public CDN

If disabled, third-party dependencies bundled with the theme scripts will be loaded from the same source as the key frontend resources.

### Public CDN Path

![](/about_theme/public_cdn.png)

You can choose **wafpro** or **jsDeliver** as the public CDN path for your theme.

### Visual Resource Path

The directory structure of this link must match the structure provided by Fuukei’s public repository ([Sakurairo Vision](https://github.com/Fuukei/Sakurairo_Vision)), otherwise, some resources may return 404. The default mirror source is provided by **UPYUN**.

::: tip Public visual paths provided by third parties (Provider - URL):

- Xiaowan: [https://cdn.nyat.icu/sakurairo_vision/@2.7/](https://cdn.nyat.icu/sakurairo_vision/@2.7/)
- Xiaoqi: [https://iro.yateam.cc/2.5/](https://iro.yateam.cc/2.5/)
- Xiaozhi: [https://api.kuroko.cn/sakurairo_vision/@2.7/](https://api.kuroko.cn/sakurairo_vision/@2.7/)
- Xiaozhi (Genshin Special Edition): [https://api.kuroko.cn/Sakurairo_Vision_Genshin/](https://api.kuroko.cn/Sakurairo_Vision_Genshin/)
- CircleCrop: [https://vision-public.aiccrop.com/@2.7/](https://aiccrop.com/2023/sakurairo-vision-public/)

If you use the **Genshin Special Edition**, go to `Homepage Settings → Cover Social Section Settings` and change the `Social Icon Style` to **Coral Vermilion**.

For theme versions **2.7 and above**, set the `Social Icon Style` to **Flat Colorful**.
:::

## Privacy Information

This theme respects your privacy.

However, if you use services provided by Chinese mainland service providers pre-configured in the theme, those providers may collect visitor data and statistics.  
You can reduce data sent to third parties by localizing theme resources — configuration options are provided in the theme.

**You can choose whether to enable "Send theme version info to Fuukei Official" here.**

::: tip
The theme only sends the time and version information to Fuukei Official.  
The data is regularly purged and used solely for version tracking and statistics.
:::
