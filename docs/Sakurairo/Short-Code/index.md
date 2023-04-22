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

![](https://s.nmxc.ltd/fuukei_docs/sakurairo/setting/sc-noway.png)

### 允许提示块

```
[buy]这是允许提示块[/buy]
```

![](https://s.nmxc.ltd/fuukei_docs/sakurairo/setting/sc-buy.png)

### 任务提示块

```
[task]这是任务提示块[/task]
```

![](https://s.nmxc.ltd/fuukei_docs/sakurairo/setting/sc-task.png)

### 警告提示块

```
[warning]这是警告提示块[/warning]
```

![](https://s.nmxc.ltd/fuukei_docs/sakurairo/setting/sc-warning.png)

## 信息块

### 折叠信息块

```
[collapse title="这是收缩信息块，这里是标题"]这里是信息[/collapse]
```

![](https://s.nmxc.ltd/fuukei_docs/sakurairo/setting/sc-infobar.png)

### GitHub 仓库信息块

```
将 #GitHub 用户名# 替换为您的用户名、 #仓库名# 替换为您的仓库名：
[ghcard path="#GitHub 用户名#/#仓库名#"]/pin/?username=#GitHub 用户名#&amp;repo=#仓库名#[/ghcard]

例如：
[ghcard path="mirai-mamori/Sakurairo"]/pin/username=mirai-mamori&amp;repo=Sakurairo[/ghcard]
```

![](/img/short_code_ghcard_show.png)

### 卡片信息块

```
将 #标题# 替换为卡片标题、 #图片链接# 替换为图片 URL、 #链接# 替换为超链接：
[showcard icon="fa-address-card" title="#标题#" img="#图片链接#" color="#cce1eb"]#链接#[/showcard]

例如：
[showcard icon="fa-address-card" title="mirai-mamori" img="https://s.nmxc.ltd/sakurairo_vision/asuhe/avatar.jpg" color="#cce1eb"]https://kiseki.blog[/showcard]
```

![](/img/short_code_showcard_show.png)
