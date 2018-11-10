Listen 1 音乐播放器  
Windows Fluent 无边框版
=========================

Listen 1可以搜索和播放来自网易云音乐，虾米，QQ音乐三个主流音乐网站的歌曲，让你的曲库更全面。并支持收藏功能，方便的创建自己的歌单。
  
   
本版本和原版对比
----  
- 背景毛玻璃效果（relase也有旧版没有毛玻璃效果的）
- 去除菜单栏
- 去除标题栏及窗口边框
- 所有导航栏空白部分添加拖动控制方便移动窗口
- 所有导航栏空白部分双击最大化，单击出现窗口菜单（最大化、最小化、关闭）
- 修改了一些元素布局，更为美观
- 更改字体为无衬线字体
- 整体加深了透明面板以便更好地识别文字

<img src="https://i.imgur.com/rh937l2.png"/>
<img src="https://i.imgur.com/RFnJK53.png"/>

* 本版本只支持Windows平台，其他平台建议使用原版。
  
本版本新增依赖
----- 

新增依赖 <a href='https://github.com/sebascontre/windows10-fluently-vibrancy'>Windows10-fluently-vibrancy</a>：

    "windows10-fluently-vibrancy": "^0.9.2"


运行
----

    npm run start

生成安装包
---------
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


TODO
----
- 添加最大化/最小化按钮 （目前点击托盘图标就可以很方便地最小化/唤起窗口，不过按钮添加也在计划内。）
- UI 的细节调整
- 如有可能，修复虾米API