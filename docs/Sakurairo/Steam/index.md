---
title: Steam库模版使用帮助
---

# Steam库模版使用帮助 <Badge type="tip" text="v3.0" />

## 使用方法

1. 新建页面，并在**页面属性**的模板选项中 `Steam库模板` ：

   ![](https://tangbao-1301296093.cos.ap-shanghai.myqcloud.com/iro_docs/e20f33ca9934d3078b516126bf837116.png)

2. 在 WordPress 后台中选择 **iro 主题设置**，在 页面设置-模板页面设置-Steam库模板设置 中，填写您账号的64ID，例如：https://steamcommunity.com/profiles/76561199029689067/, 只需填写数字 "76561199029689067" 部分。

3. 前往 https://steamcommunity.com/dev/apikey/ 申请密钥，输入你网站的域名即可。申请过程必须要开启手机验证器以及安装移动端Steam程序，国内可能无法正常访问，可能需要借助工具才能正常使用。如果接收的验证码输入到手机端验证失败，请更新移动端Steam程序。填写申请得到的API Key。

   - [Play Store](https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community)
   - [APP Store](https://apps.apple.com/cn/app/steam-mobile/id495369748)

5. 选择您需要的游戏封面CDN，如下为各个封面CDN的链接及服务器属地。国内推荐使用Steam China，延迟基本在20ms以内。

   - Steam China (shared.cdn.steamchina.queniuam.com) 中国江苏
   - Steam akamai (shared.akamai.steamstatic.com) 美国洛杉矶
   - Steam fastly (shared.fastly.steamstatic.com) 日本东京
   - Steam cloudflare (shared.cloudflare.steamstatic.com) Cloudflare

6. 商店跳转有`Steam`、`小黑盒`、`SteamDB`，国内如果Steam商店无法正常访问可选择小黑盒。

7. 完成对应的配置后，使用 Steam库模板的页面将会显示您的游戏列表：
   ![](https://tangbao-1301296093.cos.ap-shanghai.myqcloud.com/iro_docs/7cac6fa51b454af7b1cb53db85e7cb07.png)
   ![](https://tangbao-1301296093.cos.ap-shanghai.myqcloud.com/iro_docs/dc92b37b02db0994bb6d55327d39af96.png)