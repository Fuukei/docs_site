---
title: 短代码
---

# 短代码 <Badge type="tip" text="v2.6.0" />

本主题预置了多种多代码，您可以在文章中使用他们：

## 提示块

### 禁止提示块

```
[noway]这是禁止提示块[/noway]
```

![](/user-images.githubusercontent.com/28827378/233880762-53bffdfb-7572-41f6-ba1e-1b67c2af6783.png)

### 允许提示块

```
[buy]这是允许提示块[/buy]
```

![](/user-images.githubusercontent.com/28827378/233880918-f8cdd380-3d0e-4371-ad7d-028904264572.png)

### 任务提示块

```
[task]这是任务提示块[/task]
```

![](/user-images.githubusercontent.com/28827378/233881168-1aa3eed2-2e8a-49d5-9729-f322d992ebde.png)

### 警告提示块

```
[warning]这是警告提示块[/warning]
```

![](/user-images.githubusercontent.com/28827378/233881362-8762ad15-e1f0-411b-9e5f-5adf04d0667f.png)

## 折叠信息块

```
[collapse title="这是收缩信息块，这里是标题"]这里是信息[/collapse]
```

![](/user-images.githubusercontent.com/28827378/233881489-ddcd8620-b467-4125-8ff8-316ff20d2022.png)
![](/user-images.githubusercontent.com/28827378/233881513-6ea51212-9aaa-4eda-9954-94f771bf06c9.png)

## GitHub 仓库信息块

```
将 #GitHub 用户名# 替换为您的用户名、 #仓库名# 替换为您的仓库名：
[ghcard path="#GitHub 用户名#/#仓库名#"][/ghcard]

例如：
[ghcard path="mirai-mamori/Sakurairo"][/ghcard]
或者：
[ghcard path="https://github.com/mirai-mamori/Sakurairo"][/ghcard]
```

![](/user-images.githubusercontent.com/28827378/233814342-f72871f7-0805-49dc-9092-78db04293fc7.png)

## 卡片信息块

```
#icon# 替换为 FontAwesome 6 icon
#标题# 替换为卡片标题
#图片链接# 替换为图片 URL
#链接# 替换为超链接
[showcard icon="#icon#" title="#标题#" img="#图片链接#" color="#cce1eb"]#链接#[/showcard]

例如：
[showcard icon="fa-regular fa-bookmark" title="mirai-mamori" img="https://s.nmxc.ltd/sakurairo_vision/asuhe/avatar.jpg" color="#cce1eb"]https://kiseki.blog[/showcard]
```

![](/user-images.githubusercontent.com/28827378/233882385-b847eddf-979d-4cae-8c31-6e1eafa7fa61.png)

## 聊天气泡

```
将 #头像# 替换为头像 URL、 #文本# 替换为聊天文本
#对齐方式# 为 row 时聊天气泡靠左，为 row-reverse 时聊天气泡靠右
[conversations avatar="#头像#" direction="#对齐方式#"]#文本#[/conversations]

例如：
[conversations avatar="https://s.nmxc.ltd/sakurairo_vision/asuhe/avatar.jpg" direction="row"]Hello[/conversations]
[conversations avatar="https://s.nmxc.ltd/sakurairo_vision/asuhe/avatar.jpg" direction="row-reverse"]World[/conversations]
```

![](/user-images.githubusercontent.com/28827378/233814341-ab9ba25a-f406-4b66-9e15-ff31cf13983f.png)

## bilibili视频

```
[vbilibili]视频的BV号[/vbilibili]

![filter](/shots/bvcode.png)
```