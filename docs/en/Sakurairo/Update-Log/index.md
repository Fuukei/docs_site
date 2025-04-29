---
title: Changelog
---

# Changelog <Badge type="tip" text="By Kanochan, AstroNomen, nicocat"/>

## 3.0.2  

**Release Date**: [April 24, 2025](https://github.com/mirai-mamori/Sakurairo/releases/tag/3.0.2)  

![img](https://s.nmxc.ltd/sakurairo_vision/@3.0/readme/banner-cn.webp)

### Bug Fixes  

- Corrected an issue where the latest post’s cover image was not propagated in the post list.  
- Resolved a console error when the “Dynamic Island” style was active without the random-cover toggle (rendering unaffected).  
- Fixed default code-block styling not adapting to dark mode.  
- Patched display anomalies for `<ul>` and `<ol>` elements.  
- Addressed mobile search bar misbehavior when not following configuration.  
- Fixed misaligned pagination controls.  
- Prevented errors when the homepage is set to hide all theme components.  
- Theoretically resolved same-origin restrictions on template pages.

### Enhancements  

- Refactored the archive-page template for improved maintainability.  
- Updated GitHub repository cards to correctly adapt to dark mode.

---

## 3.0.1  

**Release Date**: [April 16, 2025](https://github.com/mirai-mamori/Sakurairo/releases/tag/3.0.1)  

![img](https://s.nmxc.ltd/sakurairo_vision/@3.0/readme/banner-cn.webp)

### New Features  

- Introduced a new navigation style: **“Dynamic Island.”**  
- Integrated the WordPress Customizer for live theme editing.  
- Added friend-link status management.  
- Implemented a self-service friend-link application workflow.  
- Introduced AI-powered article annotations.  
- Added a Steam library template and Steam status cards.  
- Enhanced search capabilities: now supports filtering by posts, pages, and “shuoshuo,” excluding content, and pinning sticky posts.  
- “Anime Tracking” templates now support **Bangumi**.  
- Launched a new built-in random-image API with WebP optimization, aspect-ratio filtering, and subdirectory management.  
- Added optional server-proxy support for GitHub repo cards.  
- Homepage now supports embedding static pages.  
- Added a Bilibili embed shortcode: `[vbilibili]BV_ID[/vbilibili]`.

### Bug Fixes  

- Resolved search functionality failures.  
- Fixed white-screen issue on first theme activation.  
- Made Table of Contents scrollable when post titles exceed viewport height.  
- Adjusted dark-mode cover-image contrast to follow the global “Dark Mode Image Brightness” setting.  
- Fixed toggling of “shuoshuo” on the homepage.  
- Resolved child-theme creation errors.  
- Improved compatibility with newer WordPress versions.  
- Fixed timeline merging anomalies when combining entries from the same month across different years.  
- Patched an issue allowing password-protected post images to display before password entry when navigating prev/next.  
- Corrected particle-effect layering so particles are visible in dark mode.

### Optimizations  

- Significantly reduced overall bundle size; removed unused functions and styles.  
- Rebuilt the mobile navigation bar for performance and UX.  
- Refactored the comments section for visual and functional improvements.  
- Overhauled the footer and 404 page designs.  
- Restyled the admin interface, login, and registration pages.  
- Added CSS and asset minification.  
- Enhanced theme-color extraction logic.  
- Improved social-icon configuration and infinite looping display.  
- Logged custom-emoticon additions to facilitate debugging.  
- Tweaked PHP-level log suppression to hide noncritical messages.  
- Refined ticket-style UI elements.  
- Improved in-page anchor behavior.  
- Updated numerous mouse-cursor icons for better intuitiveness.  
- Pager now honors the WordPress “Posts per page” setting.  
- Enhanced blockquote styling.  
- Added page numbers when using “Prev/Next” pagination.  
- Enforced `lv6` rank display for admins in comments.  
- Enhanced the second showcase layout.  
- Simplified toggling of lightbox effects.  
- Allowed dynamic adjustment of showcase item count.  
- Improved GitHub shortcode parsing: supports both `user/repo` and full URLs.  
- Auto-switched site language based on user preference.  
- Upgraded built-in CAPTCHA.  
- Optimized secondary-menu behavior and several setting descriptions.  
- Added an installation-directory check to streamline setup.  
- Hardened some permission checks.  
- Enhanced category-listing display.  
- Applied custom-resource paths to image-selection settings.  
- Removed undocumented `download` and `ip` shortcodes.  
- Refined filter effects.

---

## 2.7.2  

**Release Date**: [November 3, 2024](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.7.2)  

![img](https://p.sda1.dev/19/8fb19c945f83abb12cdeecceeb5413ce/image.png)

### New Features  

- Added support for custom playlists via MetingAPI or static JSON playlist files.

### Bug Fixes  

- Fixed the site-wide search engine.

### Optimizations  

- Improved compatibility with Alpine Linux.

---

## 2.7.1.1  

**Release Date**: [October 20, 2024](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.7.1.1)  

![img](https://p.sda1.dev/19/8fb19c945f83abb12cdeecceeb5413ce/image.png)

### Bug Fixes  

- Corrected duplicate post cards on the homepage.

---

## 2.7.1  

**Release Date**: [October 20, 2024](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.7.1)  

![img](https://p.sda1.dev/19/8fb19c945f83abb12cdeecceeb5413ce/image.png)

### New Features  

- “Shuoshuo” entries can now include mood tags via the block editor.  
- Per-post sharing license overrides in the block editor.  
- Per-post title CSS customizations via the block editor.  
- Refactored copy-citation functionality.  

### Bug Fixes  

- Standardized license prompts vs. clipboard reminders [#934].  
- Ensured sticky posts remain pinned [#936].  
- Restored the cover wave effect [#942].  
- Fixed homepage card caption clipping [#942].  
- Patched Bilibili tracking-template requests.  

### Optimizations  

- Disabled lazy loading for avatars.  
- Removed white borders from post backgrounds.  
- Prevented loading of the first list item by default.

---

## 2.7.0  

**Release Date**: [October 13, 2024](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.7.0)  

![img](https://p.sda1.dev/19/8fb19c945f83abb12cdeecceeb5413ce/image.png)

### New Features  

- Redesigned homepage post-listing layout.  
- Updated social-icon set.  
- Introduced “shuoshuo” and mood-tag functionality.  
- Visual refresh of author profile pages.  
- Added AI self-test and model-swap capabilities.  
- Refactored article licensing to support custom CC protocols.  
- Exposed custom post-meta fields.

### Bug Fixes  

- Addressed numerous bugs (and introduced a few new ones).

### Optimizations  

- Enhanced overall theme performance and stability.

---

## 2.6.3.1  

**Release Date**: [November 1, 2023](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.6.3.1)  

![img](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)

### Bug Fixes  

- Fixed unexpected errors on initial activation [#801].  
- Corrected overlapping text in the “shuoshuo” template [#799].  
- Patched Typed.js failure when loading from public CDN [#803].

### New Features  

- None – maintenance release.

### Optimizations  

- Improved image-SEO metadata.

---

## 2.6.3  

**Release Date**: [October 11, 2023](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.6.3)  

![img](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)

### Bug Fixes  

- Corrected style errors in prev/next post navigation.  
- Fixed “shuoshuo” template styling.  
- Restored QQ user-info retrieval in comments.  
- Suppressed PHP deprecated warnings [#760].  
- Enhanced compatibility with security plugins.  
- Resolved intermittent login-form input failure on reload [#773].  
- Fixed invalid CAPTCHA on password-reset page [#777].

### New Features  

- Added custom-emoticon packs to comments ([usage guide](/en/Sakurairo/Pages/#custom-emoticon-pack)).

### Optimizations  

- Streamlined settings panel.  
- Refined comment-section styling.  
- Added timestamps to uploaded images.  
- Avoided Vaptcha if keys are unset.

---

## 2.6.2  

**Release Date**: [June 13, 2023](https://github.com/mirai-mamori/Sakurairo/releases/tag/2.6.2)  

[![img](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)

### Bug Fixes  

- Fixed nested list styling errors in posts [#729].  
- Patched Bilibili favorites-template errors [#699], [#700].  
- Corrected 404-page asset paths.  
- Ensured empty search results return 404 status ([details](https://ivampiresp.com/2023/05/31/fix-the-issue-of-wordpress-returning-200-when-no-content)).  
- Patched Typed.js loading failures from public CDN [#741].

### New Features  

- Added pagination for “shuoshuo” pages.

### Optimizations  

- Unified “shuoshuo” styling with post content.  
- Removed redundant settings; refined grouping.  
- Switched Google Fonts API to [Tianli](https://tianli-blog.club/).  
- Changed default Gravatar proxy to [WeAvatar](https://weavatar.com/).

---

## 2.6.1.1  

**Release Date**: [May 15, 2023](https://github.com/mirai-mamori/Sakurairo/tree/2.6.1.1)

[![img](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)

### Bug Fixes  

- Resolved inline‐code and code‐block background color conflict [#722].  
- Fixed malformed `<a>` tags in “shuoshuo” content.  
- Excluded hidden categories when determining prev/next posts.  
- Patched `check_title_tags()` errors on empty content (affecting friend-links).  
- Added usage hints for certain widgets.  
- Prevented navbar overflow in edge cases.

### New Features  

- Enabled custom sorting modes for friend-link lists (name, rating, update time, random).

---

## 2.6.1  

**Release Date**: [May 12, 2023](https://github.com/mirai-mamori/Sakurairo/tree/2.6.1)

[![img](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)](https://image.kanochan.net/2023/05/15/2023051515095264f5fa4589cc8d7bf.png)

### Bug Fixes  

- Fixed persistent TOC on friend-links when no headings exist.  
- Prevented overflow of `<a>` link text in content.  
- Restored missing visual-resource path setting.  
- Corrected view-count format setting.  
- Excluded hidden categories from prev/next navigation.  
- Improved mobile-menu tap targets.

### New Features  

- Rebuilt the bottom-right widget panel.  
- Enabled comments on “shuoshuo” entries with count display.  
- Switched to a new Gravatar proxy; removed legacy proxies.  
- Global ChatGPT toggle added.  
- Option to exclude posts from AI summaries.  
- Reworked expand/collapse with internationalization.  
- Honor `<!--more-->` tags in post content.  
- Enhanced admin-panel UX; replaced hidden settings with masked overlays ([demo](https://github.com/mirai-mamori/Sakurairo/pull/705)).  
- Auto-update visual-resource paths.  
- Custom Gravatar proxy URL.  
- Custom inline-code background colors per mode.  
- Custom Google Fonts API URL.
