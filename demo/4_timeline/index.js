import {gsap} from "../../node_modules/gsap/index.js";
// https://greensock.com/docs/v3/GSAP/Timeline

let tl = gsap.timeline({
    repeat: 0,
    repeatDelay: 1,
    yoyo: true,
    defaults: {
        // ease: "elastic",
        duration: 1
    },
    onComplete: myFunction
});
tl.to('.grey', {x: 100}, "someLabel")
    .to('.green', {x: 200, duration: 1}, "+=0.5")
    .to('.wheat', {x: 200}, "-=0.5")
    .to('.saddlebrown', {x: 200})
    .to('.aqua', {x: 200}, "someLabel+=2")
    .to('.cornflowerblue', {x: 200})
    .to('.purple', {x: 200})

// tl.pause()

function myFunction() {
    console.log(tl)
}