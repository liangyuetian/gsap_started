# 学习 gsap 

学习 gsap ，记录一些简单用法

gsap.to

```js
import {gsap} from "gsap";

const tween = gsap.to(".green", {
    duration: 2,
    x: 200,
    scale: 2,
    rotation: "-170_short", // _cw 顺时针; _ccw 逆时针; _short 最短路径;
    paused: true,
    onComplete() {
        console.log(tween)
    }
});

setTimeout(() => {
    tween.play();
    console.log('当前进度', tween.progress())
}, 300)
```