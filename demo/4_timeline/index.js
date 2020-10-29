import {gsap} from "../../node_modules/gsap/index.js";

gsap.staggerTo('.box', 1, {
    cycle: {
        backgroundColor: ["#ff3366", "#692233", "#692233", "#4326AA", "#4326AA", "#26AA4B"],
        y: function(index, target) {
            console.log(index, target)
            //目标target &lt; div class = "box" &gt; &lt; /div&gt;
            // 目标数组的动画索引值index
            return index * 20;
        },
    }
})