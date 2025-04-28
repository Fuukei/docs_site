---
title: Built-in Random Image API Usage Guide
---

# Built-in Random Image API <Badge type="tip" text="v3.0" />

The theme comes with a built-in random image API, seamlessly integrated with the theme settings and supporting WebP image optimization for reduced file size.

## Overview

To use for the first time, go to  
`iro Theme Settings > Homepage Settings > Cover Settings > Built-in API Controller`  
and click **Initialize**.

After initialization, a folder named `iro_gallery` will be created under `wp-contents/uploads` as the working directory.  
Directory structure explanation:
```
.
├── iro_gallery       // Working directory
│   ├── img           // Store images to be served
│   ├── backup        // Backup folder for original images
|   ├── imglist.json  // Image index
```

To improve performance, the API uses a file index instead of scanning the directory each time.  
**Make sure to rebuild the index every time you modify the contents of the `img` folder,** or it may return invalid image links.

The `backup` directory stores original versions of images before WebP optimization.  
Make sure this folder is empty before using features that may conflict with timeout or breakpoint recovery.

## How to Use:

### Random Images

Put your favorite images in the `img` folder under `iro_gallery`.  
You can organize them into subfolders as needed.  
After placing the images, go back to the dashboard and click **Rebuild Index**.  
Then, switch the homepage cover image setting to use the **Built-in API** and you're good to go!

> [!TIP]
> The API relies on the file index for performance.  
> Remember to **rebuild the index** after making changes!

> [!TIP]
> The built-in API is integrated with the theme's CDN settings.  
> Refer to the **Image CDN** configuration to have the images loaded via your CDN.

### WebP Optimization

WebP is a web-optimized image format that significantly reduces file size while maintaining quality.  
However, compatibility with some older browsers may be limited.

Before optimizing:

- Ensure the `img` folder is writable by PHP.
- If the images were uploaded by an admin user, adjust the file permissions to match those created by the system.

Once ready, click **WebP Optimization** in the admin panel.  
**Don't forget to rebuild the index afterward!**

> [!TIP]
> Long loading, white/black screens during the process are normal.  
> If you haven’t changed PHP’s `max_execution_time`,  
> wait up to 30–60 seconds (depending on image count and server performance).  
> You may also use tools like FFmpeg to convert locally and upload manually.

> [!TIP]
> After the page loads, verify whether all files were successfully converted.  
> If not (due to server performance or PHP limits), you can refresh the page to continue.  
> Conversion resumes until each file in `backup` has a corresponding WebP version in `img`.  
> Alternatively, convert locally and upload to `img`, then click **Rebuild Index**.

> [!TIP]
> The API automatically categorizes images based on a 9:10 width/height standard (currently not customizable).  
> Return logic:
> - Mobile: prioritizes portrait images  
> - PC: prioritizes landscape images  
> - If none match, fallback images from other categories will be returned