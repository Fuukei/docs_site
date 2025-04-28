---
title: Frequently Asked Questions
---

# Frequently Asked Questions

If you're experiencing issues, we recommend checking previously closed issues first to find potential solutions. [Click here to search](https://github.com/mirai-mamori/Sakurairo/issues?q=is%3Aissue+is%3Aclosed)  
If this document doesn't solve your problem, try using a search engine with “keywords + site:docs.fuukei.org” to find relevant information you might have missed.  

Still stuck? You can [submit a new issue](https://github.com/mirai-mamori/Sakurairo/issues/new/choose) using the template provided.

## What should I do if theme settings are not being saved?

::: tip
If you are using optimization plugins (such as static caching), try clearing the plugin cache after saving theme settings. If it still doesn't work, please submit an issue.
:::

## Some images in the theme aren't loading?

::: tip
First, check your network connection and cache. If those are fine, go to Theme Settings → "About Theme" → "Resource Control" → "Visual Resource Path" to update the URL!  
[- > > > Click here to view the visual resource settings! < < < -](/en/Sakurairo/About-Theme/#%E8%A7%86%E8%A7%89%E8%B5%84%E6%BA%90%E8%B7%AF%E5%BE%84)
:::

## Will I lose anything after updating the theme?

::: tip
Any settings made through the theme panel or WordPress's built-in custom CSS will be preserved. However, any direct edits to theme core files will be lost.
:::

## My server is in mainland China and cannot detect updates. What should I do?

::: tip
Before using the update feature, manually go to Theme Settings → About Theme and switch the update source to something other than GitHub.
:::

## My browser can't display or interact with elements correctly on a site using this theme—is it a theme issue?

::: tip
Unsupported mobile browsers: UC Browser, Quark, QQ Browser, Android QQ WebView, Android WeChat WebView.  
Desktop: IE is not supported, and Edge with the legacy HTML engine has limited support.  
If your browser isn’t listed here, please report the issue on GitHub for further help.
:::

## Why do some pages return 404 errors?

::: tip
1. Check if the redirected URL looks like `.../xxx.php/xxx/...` with plain text (not styled 404 page).  
If so, your server may not be correctly configured for URL rewriting (pretty permalinks). Look for a guide matching your server (Apache, Nginx, etc.).  
After configuring, we recommend backing up important data and reinstalling WordPress to remove faulty links.

2. If that’s not the case, make sure the target page/post/category exists and has been published.
:::

## My custom images, fonts, etc., are not working. What should I do?

::: tip
Open your site in a desktop browser, press F12, go to the Network tab, and use Ctrl+F5 to refresh cache.  
After the page loads, check if your resources are loading.  
If any resource appears in red, right-click to open it in a new tab. If it doesn’t load, check your resource path.

If using mobile resources, shrink the page width below 860px. Use dev tools or a plugin to simulate a mobile device.

If your browser can access the resource:
Go to the Console tab and look for links with the keyword `Access-Control-Allow-Origin`. If it shows up, you need to configure your server like this (Nginx/OpenResty):
```
server {
    listen 80 ; 
    listen [::]:80 ; 
    listen 443 ssl http2 ; 
    listen [::]:443 ssl http2 ; 
    server_name docs.fuukei.org; 
    index index.php index.html index.htm default.php default.htm default.html; 
    add_header Access-Control-Allow-Origin '*' always;
    add_header Access-Control-Allow-Methods '*' always;
    add_header Access-Control-Allow-Headers '*' always;
    if ($request_method = 'OPTIONS') {
        return 200;
    }
    ...
}
```
If your site uses HTTPS, make sure all linked resources also use HTTPS—mixed content will be blocked.
:::

## Why is there strange audio on my homepage? (Version 2.7.2 and below)

::: tip
Check if your browser tab has a 🔊 icon—if yes, it's coming from your site.  
Try turning off "Global Settings → Additional Settings → Music Note Effects" and refresh the page.
:::

## How do I configure CDN? How to use image CDN?

::: tip
Go to "Other Settings → Low Usage Settings → Image CDN".  
This setting rewrites media URLs—it's not just for images.

Example:  
If your site is `fuukei.org`, you can create `files.fuukei.org` as a CDN.  
Your main site directory might be:  
`/opt/openresty/www/sites/fuukei.org/index`

For CDN, point it to:  
`/opt/openresty/www/sites/fuukei.org/index/wp-content/uploads`

Create a new site, assign the subdomain `files.fuukei.org`, and use symlinks or hard links to map directories.

If using Docker, mount your WordPress directory locally, and mount `uploads` to the CDN index path.

Example mapping:  
`/opt/openresty/www/sites/fuukei.org/index/wp-content/uploads`  
→  
`/www/sites/files.fuukei.org/index/wp-content/uploads`  
Set:  
`https://files.fuukei.org/wp-content/uploads`
:::

## Why doesn’t my background image appear?

::: tip
The theme uses automatic dark mode switching. From 22:00 to 07:00 (Beijing time), the theme switches to dark mode.

If that’s not the reason:
- Did you accidentally change style via the widget panel?
- Did your random image API fail?
- Is there a CORS issue with your image?
- If none of these apply, please open an issue for support.
:::

## How do I set a custom preview image for article cards instead of random images?

::: tip
In your admin panel, go to the post you want to edit, click "Edit".  
On the right-hand sidebar of the editor, you can set the preview image.  
![image](/qa/article_image.png)
:::

## I can't update or publish posts, or change settings—what should I do?

::: tip
Try disabling site protection, WAF, anti-tampering, XSS protection, or SQL injection protection, then try again.
:::

## Why is there no footer music player on mobile?

::: tip
Because it's unnecessary on mobile devices.  
![image](/qa/no_ess.png)
:::

## My SVG animations, maps, or draggable elements are acting weird—what now?

::: tip
The theme applies default animations to all elements, which might interfere with things like SVGs or drag behavior.

You can try this:
![image](/qa/class.png)

Right-click the affected element → Inspect → drag to highlight the element in DevTools → look for its class.

Example:
```
.leaflet-map-pane {
    transition: none !important;
}
```

Paste that CSS in: Admin Panel → Other Settings → Low Usage Settings → Custom CSS

Note: This may not fix all issues—it only helps in known cases. Diagnose your case accordingly.
:::