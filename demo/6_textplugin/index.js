import {gsap} from "../../node_modules/gsap/index.js";
import {TextPlugin} from "../../node_modules/gsap/TextPlugin.js";

gsap.registerPlugin(TextPlugin)

gsap.to('.text0', {duration: 2, text: "This is the new text"});
gsap.to('.text1', {
    duration: 2,
    text: {
        value: "This is the new text"
    },
    ease: 'power2'
});
gsap.to('.text2', {
    duration: 2,
    text: {
        value: "This is the new text",
        newClass: "class2",
        oldClass: "class1"
    },
    ease: 'power4'
});