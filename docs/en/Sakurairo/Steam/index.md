---
title: Steam Library Template Usage
---

# Steam Library Template Usage Help <Badge type="tip" text="v3.0" />

## How to Use

1. Create a new page and under **Page Attributes → Template**, select **Steam Library Template**.  
   ![](https://tangbao-1301296093.cos.ap-shanghai.myqcloud.com/iro_docs/e20f33ca9934d3078b516126bf837116.png)

2. In **Dashboard → iRO Theme Options → Page Options → Template Page Options → Steam Library Template**, enter your Steam 64-bit ID (the numeric part of your profile URL, e.g. `76561199029689067`).

3. Obtain your Steam Web API key:  
   - Visit https://steamcommunity.com/dev/apikey/ and log in.  
   - Complete mobile authenticator setup if required.  
   - Enter your site’s domain and generate a key.  
   - *(If you have trouble in China, you may need VPN or other tools.)*  
   - Download the Steam mobile app (Android: [Play Store], iOS: [App Store]) to verify.
  
   [Play Store]: https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community
   [App Store]: https://apps.apple.com/cn/app/steam-mobile/id495369748


4. Choose a CDN for game-cover images:  
   - **Steam China** (`shared.cdn.steamchina.queniuam.com`) – China (Jiangsu)  
   - **Steam Akamai** (`shared.akamai.steamstatic.com`) – Los Angeles  
   - **Steam Fastly** (`shared.fastly.steamstatic.com`) – Tokyo  
   - **Steam Cloudflare** (`shared.cloudflare.steamstatic.com`) – Global

5. Select your preferred store link type: Steam Store, Xiaohēibāo (CN), or SteamDB. Use Xiaohēibāo if the official store is blocked.

6. Once configured, your page will display your Steam library:  
   ![](https://tangbao-1301296093.cos.ap-shanghai.myqcloud.com/iro_docs/7cac6fa51b454af7b1cb53db85e7cb07.png)  
   ![](https://tangbao-1301296093.cos.ap-shanghai.myqcloud.com/iro_docs/dc92b37b02db0994bb6d55327d39af96.png)
