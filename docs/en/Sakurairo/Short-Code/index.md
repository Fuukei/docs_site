---
title: Shortcodes
---

# Shortcodes <Badge type="tip" text="v3.0" />

This theme provides several built-in shortcodes you can use in posts and pages:

## Alert Boxes

Wrap text in these tags to show styled alerts:

- **Prohibited**  
  ```markdown
  [noway]This is a “no way” alert[/noway]
  ```  
  ![](/short-code/noway.png)

- **Allowed**  
  ```markdown
  [buy]This is an “allowed” alert[/buy]
  ```  
  ![](/short-code/buy.png)

- **Task**  
  ```markdown
  [task]This is a task alert[/task]
  ```  
  ![](/short-code/task.png)

- **Warning**  
  ```markdown
  [warning]This is a warning alert[/warning]
  ```  
  ![](/short-code/warn.png)

## Collapsible Sections

Hide content behind a toggle:

```markdown
[collapse title="Click to expand"]Here is the hidden content[/collapse]
```

![](/short-code/collapse1.png)  
![](/short-code/collapse2.png)

## GitHub Repository Card

Insert a GitHub repo summary card:

```markdown
[ghcard path="username/repo"][/ghcard]
```

Or use a full URL:

```markdown
[ghcard path="https://github.com/username/repo"][/ghcard]
```

![](/short-code/ghcard.png)

## Custom Info Card

Display a colored info card with icon, title, image, and link:

```markdown
[showcard icon="fa-regular fa-bookmark" title="Title"
  img="https://example.com/image.jpg" color="#cce1eb"]
https://example.com
[/showcard]
```

![](/short-code/showc.png)

## Chat Bubbles

Create left/right chat bubbles:

```markdown
[conversations avatar="https://example.com/avatar.jpg" direction="row"]
Hello
[/conversations]

[conversations avatar="https://example.com/avatar.jpg" direction="row-reverse"]
World
[/conversations]
```

![](/short-code/dis.png)

## Bilibili Video Embed

Embed a Bilibili video by its BV number:

```markdown
[vbilibili]BV_NUMBER[/vbilibili]
```

![](/short-code/bvcode.png)

## Steam Status Card

Requires Steam API setup as described in the [Steam Library Template Usage](/Sakurairo/Steam/).  
Use your Steam UID:

```markdown
[steamuser]YOUR_STEAM_UID[/steamuser]
```

Offline example:  
![steamuser](/short-code/offonline.png)  
Online example:  
![steamuser](/short-code/online.png)