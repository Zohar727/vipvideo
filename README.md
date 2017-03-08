# vipvideo
### 一个在线解析视频的chrome插件
目前只能解析爱奇艺，优酷，乐视三个平台的视频，可以去广告观看vip视频
其实这个插件并没有什么技术含量，视频解析接口是别人的，我只是写了个插件能够使用户便捷的跳到视频播放界面
#### 为什么写这个插件
之前看别人分享了一个视频在线解析网站，我很好奇然后查了下原理，发现其实挺简单的（毕竟我们都是用的一样的视频解析接口T_T），然后我便自己动手写了一个类似的网页。后来发现这样复制网址再观看，交互太不友好了，于是我便想到了写一个这样的插件，可以一键获取源视频链接然后跳转到新的窗口直接解析视频。
#### Last
写这个插件时，其实我并不想直接跳到解析网址的，本来是打算跳到我自己之前写的那个网页再自动加载视频的。可是作为一名初级的前端er（功力还不太深厚- -），我试了各种办法都没有做到跨域传值，包括用了h5的`window.postmessage`,`window.opener`,`window.name`等方法都没有生效，于是只能暂时放弃过几天再想想吧


