import {gsap, Linear} from "../../node_modules/gsap/index.js";

// gsap.to() gsap.fromTo() gsap.from()
gsap.to("h2.title", {duration: 1, display: 'block', opacity: 1});
gsap.to(".box", {
    duration: 2, x: "+=300"
});

// 重复
gsap.to(".grey", {
    duration: 2,
    repeat: 10,
    yoyo: true, // 规定是否应该反向播放动画
    repeatDelay: 0.5,
    ease: Linear.easeNone,
    onRepeat() {
        gsap.set('.grey', {
            backgroundColor: "hsl(" + Math.random() * 255 + ", 90%, 60%)"
        })
    }
});

// TweenMax.to(".green", {
//     duration: 3,
//     // force3D: true,
//     // transformPerspective: 500,
//     rotation: "-170_short",
//     rotationX: 45,
//     scaleX: 0.8,
//     // transformOrigin: "left top",
//     // y: 50,
//     // z: -300
// });

// 方向
// gsap.to(".green", {
//     duration: 3,
//     // rotation: "170_cw", // 顺时针
//     // rotation: "170_ccw", // 逆时针
//     // rotation: "60_short", // 最短路径
//     rotation: "300_short", // 最短路径
// });

// 关键帧
// gsap.to(".green", {
//     keyframes: [
//         {x: 100, duration: 1},
//         {y: 200, duration: 1, delay: 0.5}, //create a 0.5 second gap
//         {rotation: 360, duration: 2, delay: -0.25} //overlap by 0.25 seconds
//     ], ease: "power3.inOut"
// });

// 基于函数的值
// gsap.to(".green", {
//     x: 100, //normal value
//     y: function (index, target, targets) { //function-based value
//         // 索引 - 数组中目标的索引; target 目标元素
//         return index * 100;
//     },
//     duration: 1
// });

// 随机值
// gsap.to(".green", {
//     duration: 5,
//     backgroundColor: "random([white, red; black])"
//     // x: "random([0, 100, 200, 500])" //chooses a random number between -100 and 100 for each target, rounding to the closest 5!
// });

// 修正补间值
// gsap.to(".green", {
//     modifiers: { // 修正补间值
//         x(x) {
//             console.log(x)
//             return parseFloat(x) * 2 + 'px'
//         }
//     }
// });