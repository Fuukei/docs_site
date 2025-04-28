---
title: Templates
---

# Templates <Badge type="tip" text="v3.0" />

This theme offers several page templates. To use one, create a new page in **Dashboard → Pages**, then under **Page Attributes** select your desired template:

- **Block Editor**  
  ![](/templates/tampletes.png)  
- **Classic Editor**  
  ![](/templates/temp.png)

## Friend Links Template

1. Create a new page and under **Page Attributes → Template**, choose **Friend Links Template**.  
2. In the Dashboard sidebar, go to **Links**.  
3. Click **Add New**, fill in **Name**, **URL**, **Description**, and under **Advanced**, enter an image URL in **Image Address**.  
4. Assign each link to one or more link categories to group them:  
   ![](/templates/fl_cate.png)  
5. View your page using the Friend Links template—the links will display in a list:  
   ![](/templates/flinks.png)

### Sorting Friend Links

To change how links are ordered, go to **Theme Settings → Page Settings → Template Page Settings** and choose your sort mode.

## Anime-Tracking Template

1. Create a new page and select **Anime-Tracking Template** under **Page Attributes → Template**.  
2. In **Dashboard → iRO Theme Settings → Page Settings → Template Page Settings → Anime-Tracking Source**, pick a source (Bilibili, MyAnimeList, or Bangumi).  
3. Configure the chosen source (see below). The page will then display your anime watchlist:  
   ![](https://s.nmxc.ltd/fuukei_docs/sakurairo/setting/tp-animelist.png)

### Bilibili Configuration

1. Enter your **Bilibili UID** in the settings.  
2. *(Optional)* To show progress, paste your Bilibili **cookies**:  
   - Go to Bilibili’s homepage and open DevTools (F12).  
   - In **Network**, filter by your UID and copy the **cookie** header from one request.  
     ![](/templates/cookie.png)

### MyAnimeList Configuration

- Enter your MyAnimeList username (the part after `/profile/`). You can also adjust the display order here.

### Bangumi Configuration

- Enter the numeric ID from your Bangumi profile URL.

## Bilibili “Watching” Template

1. Create a new page and choose **Bilibili “Watching” Template** under **Page Attributes → Template**.  
2. In **iRO Theme Settings → Page Settings → Template Page Settings → Bilibili UID**, enter your UID.  
3. (Optional) For episode progress, paste your Bilibili **cookies** using the same DevTools method as above.  
4. The page will show your current watching list:  
   ![](https://s.nmxc.ltd/fuukei_docs/sakurairo/setting/tp-movielist.png)

## Bilibili Favorites Template

1. Create a page and choose **Bilibili Favorites Template** under **Page Attributes → Template**.  
2. In **iRO Theme Settings → Page Settings → Template Page Settings → Bilibili UID**, enter your UID (cookies optional).  
3. The page will display your favorite videos:  
   ![](/templates/fav_demo.png)

## Steam Library Template

See the dedicated guide: [Steam Library Template Usage](/Sakurairo/Steam/).

## Timeline (Archive) Template

1. Create a new page and select **Timeline (Archive) Template** under **Page Attributes → Template**.  
2. The page will automatically display your yearly archive timeline:  
   ![](/templates/timeline_demo.png)
