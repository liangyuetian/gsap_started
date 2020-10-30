import {gsap} from "../../node_modules/gsap/index.js";
// https://greensock.com/docs/v3/GSAP/Timeline

let tl = gsap.timeline({repeat: 0, repeatDelay: 0.5});

tl.from('h1', 0.5, {
    left: 100,
    opacity: 0
});

tl.from('h2', 0.5, {
    left: -100,
    opacity: 0
});

tl.from('#feature', 0.5, {
    scale: .5,
    autoAlpha: 0
}, "+=0.5");

tl.from('#description', 0.5, {
    left: 100,
    autoAlpha: 0
}, "-=0.25");

// 添加一个时间节点
tl.addLabel("stagger", "+=0.5")

tl.staggerFrom('#nav img', 0.2, {
    scale: 0,
    autoAlpha: 0
}, 0.1, "stagger");