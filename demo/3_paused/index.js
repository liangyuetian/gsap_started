import {gsap} from "../../node_modules/gsap/index.js";

const handlePlay = document.getElementById("play");

const tween = gsap.to(".green", {
    duration: 2, x: 200, scale: 2, paused: true,
    onComplete() {
        console.log(tween)
    }
});

handlePlay.addEventListener("click", () => {
    tween.play();
    setTimeout(() => {
        tween.pause()
        console.log('当前进度', tween.progress())
    }, 300)
});