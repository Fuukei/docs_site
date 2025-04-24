---
title: 短代码
---

# 短代码 <Badge type="tip" text="v3.0" />

本主题预置了多种多代码，您可以在文章中使用他们：

## 提示块

### 禁止提示块

```
[noway]这是禁止提示块[/noway]
```

![](/short-code/noway.png)

### 允许提示块

```
[buy]这是允许提示块[/buy]
```

![](/short-code/buy.png)

### 任务提示块

```
[task]这是任务提示块[/task]
```

![](/short-code/task.png)

### 警告提示块

```
[warning]这是警告提示块[/warning]
```

![](/short-code/warn.png)

## 折叠信息块

```
[collapse title="这是收缩信息块，这里是标题"]这里是信息[/collapse]
```

![](/short-code/collapse1.png)
![](/short-code/collapse2.png)

## GitHub 仓库信息块

```
将 #GitHub 用户名# 替换为您的用户名、 #仓库名# 替换为您的仓库名：
[ghcard path="#GitHub 用户名#/#仓库名#"][/ghcard]

例如：
[ghcard path="mirai-mamori/Sakurairo"][/ghcard]
或者：
[ghcard path="https://github.com/mirai-mamori/Sakurairo"][/ghcard]
```

![](/short-code/ghcard.png)

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

![](/short-code/showc.png)

## 聊天气泡

```
将 #头像# 替换为头像 URL、 #文本# 替换为聊天文本
#对齐方式# 为 row 时聊天气泡靠左，为 row-reverse 时聊天气泡靠右
[conversations avatar="#头像#" direction="#对齐方式#"]#文本#[/conversations]

例如：
[conversations avatar="https://s.nmxc.ltd/sakurairo_vision/asuhe/avatar.jpg" direction="row"]Hello[/conversations]
[conversations avatar="https://s.nmxc.ltd/sakurairo_vision/asuhe/avatar.jpg" direction="row-reverse"]World[/conversations]
```

![](/short-code/dis.png)

## bilibili视频

```
[vbilibili]视频的BV号[/vbilibili]

```

![vbilibili](/short-code/bvcode.png)

## steam状态卡片

```
[steamuser]76561199545444502[/steamuser]  

```

![steamuser](/short-code/offonline.png)  
![steamuser](/short-code/online.png)
