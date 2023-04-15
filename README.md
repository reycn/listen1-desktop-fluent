# Listen 1 音乐播放器（Windows 毛玻璃版）

![](https://img.shields.io/github/languages/top/reycn/listen1_desktop_fluent.svg?color=blue)
![](https://img.shields.io/github/release/reycn/listen1_desktop_fluent.svg)
![](https://img.shields.io/static/v1.svg?label=design&message=fluent&color=blue)
![](https://img.shields.io/github/issues/reycn/listen1_desktop_fluent.svg)
[![](https://img.shields.io/static/v1.svg?label=upstream&message=listen1-chrome&color=green)](https://github.com/listen1/listen1_chrome_extension)

## 修改版的不同点

- Fluent Design Acrylic 毛玻璃

[![imgur](https://i.imgur.com/oj3MCKD.png)]()

## 最近更新

[2.28.0](https://github.com/reycn/listen1-desktop-fluent/releases/tag/v2.28.0) (2023.04.15)

- 同步 2.28.0 版本更新
- 彻底解决 Windows 1903 以上的 [毛玻璃窗口拖动缓慢问题](https://github.com/23phy/ewc/issues/22)

## 软件说明

Listen 1可以搜索和播放来自多个主流音乐网站的歌曲，让你的曲库更全面。并支持收藏功能，方便的创建自己的歌单。

支持音乐平台

* 网易云音乐
* 虾米
* QQ音乐
* 酷狗音乐
* 酷我音乐
* bilibili
* 咪咕音乐
* 支持Windows，Mac，Linux平台

生成完整代码
------------

项目中包含了listen1_chrome_extension的引用，在checkout后需要把引用库初始化

    git submodule update --init --recursive

运行
----

    npm run start

生成安装包
----------

全平台安装包

    npm run dist

Windows安装包

    npm run dist:win32
    npm run dist:win64

Mac安装包

    npm run dist:mac

Linux安装包

    npm run dist:linux32
    npm run dist:linux64
