# GSAP 入门

## 简介

时至今日在Web中开发动效有很多种方式，有纯CSS的方式（Animations和Transitions），

也有Web Animation API和SVG Animation，还有很多优秀的JavaScript库（比如，Anime.js、KUTE.js、Mo.js等）。

在WebGL方面有Three.js、PixiJS、Babylon.js和PlayCanvas等。

除此之外，业内还有一个制作动画非常出色的平台，那就是GSAP（GreenSock Animation Platform的简称）


GSAP是GreenSock提供的一个制作动画的成熟的JavaScript库，该库源于Flash的动画。

这也意味着GreenSock背后的人对Web动画了如指掌，这个库已经存在很长的时间了，而且不会很快消失。

GSAP中有很多工具和插件，我们可以利用它们来快速开发Web动画和快速处理开发Web动画遇到的任何挑战。

除了GSAP具有强大的特性、工具和插件之外，而且学习曲线也相对较浅，因为它在所有不同的实现和插件中使用了直观且一致的语法。此外， [GSAP论坛](https://greensock.com/forums/) 还提供了很棒的文档、教程等。


## 为什么选择GSAP

* 速度快： GSAP专门优化了动画性能，使用实现和CSS一样的高性能动效
* 轻量和模块化： 模块化与插件式的结构保持了GSAP核心引擎的轻量，TweenLite包非常的小。GSAP还提供了 TweenLite、 TimelineLite、 TimelineMax、 TweenMax等功能动画模块，在使用的时候可以按需加载
* 没有依赖： 使用GSAP开发动效时不需要依赖于任何第三方库或插件
* 灵活控制： 不用受限于线性序列，可以重叠动画序列，你可以通过精确时间控制，灵活地使用最少的代码实现动效
* 任何对象都可以实现动画，只要能运行JavaScript脚本的地方就可以使用GSAP

GSAP也非常的灵活，可以适用于你给它的任何东西。也就是，GSAP可以让下面这些东东都动起来：

* CSS： CSS中的2D和3D方面的transform、color、width、opacity、border-radius、margin等，几乎所有的CSS属性都可以
* SVG： SVG中的一些属性，比如viewBox、width、height、fill、stroke、cx、r、opacity等，而且借助像 MorphSVG 和 DrawSVG这样的GSAP插件，还可以实现一些高级的效果
* 任何数值，比如<canvas>的对象，3D动画场景中的摄像机位置和滤镜值

一旦你学习了GSAP相关的基本语法，就能够在任何可运行JavaScript脚本的地方使用GSAP。
如果你也比较关注DOM元素的CSS属性的动画，在使用GSAP时，还可以在React、Vue等前端框架中使用。

## 文档

* [https://greensock.com/](https://greensock.com/)
* [https://greensock.com/gsap/](https://greensock.com/gsap/)

## GSAP核心模块

GSAP有几大核心模块，它们是：

* TweenLite：GSAP的基础，一个轻量级和快速的HTML5动画库
* TweenMax：TweenLite的扩展，除了包括TweenLite本身之外，还包括TimelineLite、TimelineMax、CSSPlugin、AttrPlugin、RoundPropsPlugin、DirectionalRotationPlugin、BezierPlugin和EasePack
* TimelineLite：一种轻量级的Timeline，用于控制多个Tween和（或）其他Timeline
* TimelineMax：一个增强版的TimelineLite，它提供了额外的、非必要的功能，如repeat、repeatDelay和yoyo等等

## [加载 GSAP 的方式](https://greensock.com/docs/v3/Installation#CDN)

使用 [CDN]() 方式

![](https://www.w3cplus.com/sites/default/files/blogs/2020/2007/greensock-beginner-2.gif)

图片出自 [w3cplus](https://www.w3cplus.com/animation/GSAP-for-beginner.html)

使用 [NPM](https://greensock.com/docs/v3/Installation?checked=core#modules) 方式

![](https://www.w3cplus.com/sites/default/files/blogs/2020/2007/greensock-beginner-3.gif)

图片出自 [w3cplus](https://www.w3cplus.com/animation/GSAP-for-beginner.html)

## 简单的小demo

html
```html
<h2 class="title">gsap.to() Basic Usage</h2>
<div class="box orange" data-wx-url="https://"></div>
<div class="box grey"></div>
<div class="box green"></div>
<script type="module" src="./index.js"></script>
```
js
```js
import {gsap} from "./node_modules/gsap";

gsap.to("h2.title", {duration: 1, display: 'block', opacity: 1});
gsap.to(".box", {duration: 2, x: 300});
gsap.to(".green", {duration: 3, rotation: 360, scale: 0.5});
```

开启3D
js
```js
gsap.to(".green", {
    duration: 3,
    rotation: "-170_short"
});
```

特定的旋转方向

特定方向的 CSS 属性的 Tweens 旋转可以是顺时针（后缀）、逆时针（后缀）或最短方向（后缀），
在这种情况下，插件会根据最短路径为你选择方向。

* "_cw" 顺时针
* "_ccw" 逆时针
* "_short" 最短方向

```js
gsap.to(".green", {
    duration: 3,
    // rotation: "170_cw", // 顺时针
    // rotation: "170_ccw", // 逆时针
    // rotation: "60_short", // 最短路径
    rotation: "300_short", // 最短路径
});
```

淡入淡出属性
```js
gsap.to(".green", {
    duration: 3,
    autoAlpha: 0 // autoAlpha: 1 
});
```

清除属性
```js
gsap.from(".green", {
    duration: 5, 
    scale: 0, 
    left: 200, 
    backgroundColor: "red", 
    clearProps: "scale,left" // note: "scale" (or any transform-related property) clears all transforms
});
```

## GSAP 不仅仅用于 DOM 元素，还可以为原始对象的自定义属性设置动画

```js
var obj = {prop: 10};
gsap.to(obj, {
  duration: 1,
  prop: 200, 
  //onUpdate fires each time the tween updates; we'll explain callbacks later.
  onUpdate: function() {
    console.log(obj.prop); //logs the value on each update.
  }
});

```