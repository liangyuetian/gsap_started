import {gsap} from "../../node_modules/gsap";

const obj = {prop: 10, name: 'string'};
const a = []
gsap.to(obj, {
    duration: 1,
    prop: 200,
    name: 'boolean',
    //onUpdate fires each time the tween updates; we'll explain callbacks later.
    onUpdate: function() {
        a.push(obj.prop)
        console.log('补间大小', a[a.length - 1] - a[a.length - 2]); //logs the value on each update.
        document.getElementById('gsap_obj_box').innerText = obj.prop
    },
    onComplete() {
        console.log('桢数', a.length)
        console.log('补间结束', a)
    }
});