---
title: Homepage Settings
---

# Homepage Settings <Badge type="tip" text="v3.0" />

## Cover Settings

### Cover Toggle  
Enable or disable the cover section.  
> If disabled, all settings in the Cover section will have no effect. (Default: enabled)

- **Disabled**: only the showcase/posts area is shown.  
  ![](/homepage/cover_close.png)

- **Enabled**: cover, showcase, and posts areas are all displayed.  
  ![](/homepage/cover_enable.png)

### Fullscreen Cover  
Toggle whether the cover spans the full screen. (Default: enabled)  
> If disabled, the cover will not fill the entire viewport.

- **Fullscreen Off**  
  ![](/homepage/fulls_close.png)

- **Fullscreen On**  
  ![](/homepage/fulls_on.png)

### Curved Cover Mask  
Apply an arc-shaped mask to the bottom of the cover.  
![](/homepage/curve.png)

### Cover Animation  
Set the duration of the cover transition animation.  
> Drag the slider; recommended range: **1–2 seconds**.

- **Animation On**  
  ![](/homepage/anime_on.gif)

- **Animation Off**  
  ![](/homepage/anime_off.gif)

### Cover Info Bar  
Toggle the display of avatar, slogan text, signature, and social icons on the cover. (Default: enabled)  
> If disabled, only the cover image shows.  
![](/homepage/cover_off.png)

### Info Bar Style  
Choose layout for the cover info bar:

- **Separated**  
  ![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/nav_menu_style_Island.webp)

- **Merged**  
  ![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/infor_bar_style_v2.webp)

### Info Bar Background Opacity  
Adjust the transparency of the info bar background.

### Avatar Border Radius  
Set the corner radius of the cover avatar.  
> Drag the slider; recommended: **100** (fully round).

- **Radius = 0**  
  ![](/homepage/avatar0.png)

- **Radius = 100**  
  ![](/homepage/avatar100.png)

### Signature Text  
Enter the text for your cover signature line.  
![](/homepage/signature.png)

### Signature Font  
Specify the font name for the signature text.  
> Example: `Ma Shan Zheng`

### Signature Font Size  
Set the font size for the signature text.  
> Drag the slider; recommended: **15–18px**.

### Typed-Text Effect for Signature  
Enable the built-in typing animation for your signature.  
![](/homepage/typedjs.gif)

- **Add Quotes**: wrap the typed text in quotation marks.  
- **Placeholder**: text shown before typing begins.  
- **Typed.js Options**: customize the typing effect parameters.

### Cover “Shuoshuo” Section  
When enabled, your latest “shuoshuo” (short status) and your signature will alternate on the cover.

## Random Image Settings

By default the theme uses external random image APIs. To use your local library, switch to **Built-in API**. See [Built-in Random Image API](/en/Sakurairo/Gallery/) for details.

- **External API URL**: enter an external random-image endpoint.  
  Examples:  
  - [Btstu API](https://api.btstu.cn/doc/sjbz.php)  
  - [Mtyqx API](https://api.mtyqx.cn/)  
  - [Kuroko API](https://api.kuroko.cn/rand/ecy-img/pc.php)

- **Separate API by Device**: use different APIs for desktop vs. mobile.

- **Mobile API URL**: endpoint for mobile images.  
  Examples:  
  - [Btstu API](https://api.btstu.cn/doc/sjbz.php)  
  - [Mtyqx API](https://api.mtyqx.cn/)  
  - [Kuroko API (mobile)](https://api.kuroko.cn/rand/ecy-img/pe.php)

### Cover Image Cache  
Enable local caching of the first random cover image to speed up initial load. (Default: on)  

::: warning
Requires the cover API to support CORS.
:::

### Unified Cover & Background  
When enabled, the cover becomes transparent and the frontend background uses the same random-API images.

### Featured-Image as Background  
If a post has a featured image and no widget override is active, that image will be used as the homepage background. Returning home resets the background.

### Cover Image Filters  
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz37.png) None (default)  
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz38.png) Light  
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz39.png) Dim  
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz40.png) Grid  
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz41.png) Dots

### Cover Wave Effect  
Enable the built-in wave animation on the cover. (Default: off)  
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz42.png)  

::: warning
Hidden in dark mode by default.
:::

### Pull-Down Arrow  
Show a down-arrow button on the cover to scroll to content.  
![](/homepage/pull_down.png)

- **Mobile Display**: toggle whether the arrow appears on mobile.  
- **Arrow Color**: pick a light color for light mode.  
- **Dark Mode Arrow Color**: pick a darker color for dark mode.

## Cover Video Settings

Toggle a video background on the cover.

- **Loop Video** (requires PJAX).  
- **Resume on Return** (requires PJAX).  
- **Base URL**: the folder path for your video files (no trailing slash; use `./` for root).  
- **File Names**: comma-separated list (e.g. `intro,loop`). Default: random.

::: warning
Since v2.2.1.1, the URL must end with `/` and file names must include the `.mp4` extension.
:::

::: tip
Videos do not autoplay; a play button appears in the lower-right corner of the cover.
:::

## Social Icons on Cover

### Social Section Toggle  
Show or hide the cover’s social icons and the random-image dice button.

### Icon Style  
Choose from three icon sets:  
![](/homepage/icons.png)

### Social Section Radius  
Set the corner radius of the social-icons container.  
> Drag slider; recommended **10–20**.

- **Radius = 0**  
  ![](/homepage/icons0.png)

- **Radius = 30**  
  ![](/homepage/icons30.png)

### Dice Button Toggle  
Show the random-cover-image toggle (dice icon).

### Social Links  
Enter URLs for your profiles. To find them, copy your browser’s address bar while viewing your public page. Supported networks:  
WeChat, QQ, Bilibili, NetEase Cloud Music, Weibo, GitHub, Telegram, Steam, YouTube, Instagram, TikTok, Xiaohongshu, Discord, Zhihu, LinkedIn, Twitter, Facebook, Email (user & domain), or a custom icon+URL.

## Homepage Layout

### Layout Order  
Drag to reorder which sections appear on the homepage. Only sections you add here will display (default: Posts only).

### Section Icons & Titles

#### Showcase Section  
- **Icon**: choose a FontAwesome icon (default: `fa-solid fa-laptop`) from [FontAwesome](https://fontawesome.com.cn/faicons/).  
- **Title**: default “Display”.

![](/homepage/exh_title.png)

#### Posts Section  
- **Icon**: default `fa-regular fa-bookmark`.  
- **Title**: default “Article”.

![](/homepage/art_title.png)

#### Title Font  
Specify a font name (e.g. `Ma Shan Zheng`).

#### Title Alignment  
Choose left, center, or right alignment.  
![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/area_title_text_left.webp) Left  
![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/area_title_text_center.webp) Center  
![](https://s.nmxc.ltd/sakurairo_vision/@3.0/options/area_title_text_right.webp) Right

## Announcement Bar

![](/homepage/not_title.png)

- **Style**:  
  - **Image Background**: enter an image URL.  
  - **Solid Color**: choose a border color (light shade matching your theme).

### Border Color  
Pick a color for the announcement bar border.

### Text  
Enter your announcement message (HTML allowed).

### Text Alignment  
Left, center, or right.  
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz46.png) Left  
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz47.png) Right  
![](https://s.nmxc.ltd/sakurairo_wiki/help/sz48.png) Center

### Text Color  
Choose a text color that stands out against your background.

## Showcase Section Settings

### Toggle Showcase  
Enable or disable the showcase area.

### Accent Color  
Pick a complementary color for the showcase.

### Layout Style  
- **Alternate Left/Right** (default)  
  ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz53.png)  
- **Stacked Bottom-to-Top**  
  ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz54.png)

### Compatibility Mode  
Toggle to fix alignment issues (if needed).

### Background Color  
Choose a light background color.

### Corner Radius  
Set the showcase card radius. (Recommended: **15**)

### Items  
Define each showcase item with:  
- **Image URL**  
- **Title**  
- **Description** (omit if using Bottom-to-Top style)  
- **Link URL**

Add or remove items using the `+` or `x` buttons.

## Posts Section Settings

### Info Elements  
![](/homepage/article_info.png)  
Toggle metadata badges (e.g. date, category) shown on post cards.

### Layout Style  
- **Image + Text** (default)  
  ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz55.png)  
  - **Image Alignment**: Alternate (default), Left, or Right.  
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz56.png) Alternate  
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz57.png) Left  
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz58.png) Right

- **Standard**  
  ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz59.png)  
  - **Image Shape**: Circle (default) or Square.  
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz60.png) Circle  
    ![](https://s.nmxc.ltd/sakurairo_wiki/help/sz61.png) Square

### Icon Color  
Set the color for any icons on post cards.

### Card Shadow Color  
Choose a subtle shadow color to add depth.

### Decorative Images on Cards  
- **Cover Random Image** (follows cover API)  
- **External API**: enter a custom endpoint for card images.

> [!TIP]  
> To set a unique image per post, edit its Featured Image in the post editor.  
> [Tutorial: Setting Post Featured Image](/en/first-step/q&a/#how-do-i-set-a-custom-preview-image-for-article-cards-instead-of-random-images)

### Card Corner Radius  
Adjust the corner radius of post cards.

### Info Readability Overlay  
Enable a dark overlay behind text to improve contrast.

### Info & Title Radius  
![](/homepage/thumb_card.jpg)  
Top badges (date/sticky) and title both get rounded corners here.

### Title Font Size  
Set the font size for post titles (recommended: **16–20px**).

### Show “Shuoshuo” on Home  
Enable displaying “shuoshuo” (short statuses) on the homepage. (Default: on)
