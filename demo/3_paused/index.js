import {gsap} from "../../node_modules/gsap/index.js";

const tween = window.tween = gsap.to(".green", {
    duration: 2, x: 200, scale: 2, paused: true,
    onComplete() {
        console.log(tween)
    }
});

document.getElementById("play").addEventListener("click", () => {
    tween.play();
    setTimeout(() => {
        tween.pause()
        console.log('当前进度', tween.progress())
    }, 300)
});
document.getElementById("resume").addEventListener("click", () => {
    tween.resume()
});
document.getElementById("restart").addEventListener("click", () => {
    tween.restart()
});
document.getElementById("time0").addEventListener("click", () => {
    // tween.time(0)
    tween.render(0, true, false)
});