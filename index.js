import {gsap} from "./node_modules/gsap";

gsap.to("h2.title", {duration: 1, display: 'block', opacity: 1});
gsap.to(".box", {duration: 2, x: 300});

gsap.to(".green", {
    duration: 3,
    // rotation: "170_cw", // 顺时针
    // rotation: "170_ccw", // 逆时针
    // rotation: "60_short", // 最短路径
    rotation: "300_short", // 最短路径
    scale: 1.8,
    left: 20,
    autoAlpha: 0.5,
    autoRound: true // 自动创建补间
    // opacity: 0.5,
    // clearProps: "scale,left"
});
