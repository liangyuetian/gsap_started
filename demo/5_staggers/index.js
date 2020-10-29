import {gsap} from "../../node_modules/gsap/index.js";

let grid = [7, 15] // [rows, columns]
let tl = gsap.timeline({repeat: 0, repeatDelay: 0.5});

function animateBoxes(from, axis, ease) {
    //one stagger call does all the animation:
    tl.to(".box", {
        duration: 1,
        scale: 0.1,
        y: 60,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        stagger: {
            amount: 1.5,
            grid: grid,
            axis: axis,
            ease: ease,
            from: from
        }
        }
    );
}

//builds a grid of <div class="box"> elements, dropped into #container (unrelated to animation code)
buildGrid({grid: grid, className: "box", width: 1000, gutter: 15, parent: "#container"});

document.getElementById('play').addEventListener('click', () => {
    gsap.set(".box", {rotation: 0.5, force3D: true});
    animateBoxes("center");
})
//helper function to build a grid of <div> elements
function buildGrid(vars) {
    vars = vars || {};
    var container = document.createElement("div"),
        rows = vars.grid[0] || 5,
        cols = vars.grid[1] || 5,
        width = vars.width || 100,
        gutter = vars.gutter || 1,
        className = vars.className || "",
        w = (width - cols * gutter) / cols,
        parent = (typeof (vars.parent) === "string") ? document.querySelector(vars.parent) : vars.parent ? vars.parent : document.body,
        css = "display: inline-block; margin: 0 " + (gutter / width * 100) + "% " + (gutter / width * 100) + "% 0; width: " + (w / width * 100) + "%;",
        l = rows * cols,
        i, box;
    for (i = 0; i < l; i++) {
        box = document.createElement("div");
        box.style.cssText = css;
        box.setAttribute("class", className);
        box.index = i;
        box.setAttribute("data-index", i);
        if (vars.onCellClick) {
            box.addEventListener("click", vars.onCellClick);
        }
        container.appendChild(box);
    }
    container.style.cssText = "width:" + width + "px; line-height: 0; padding:" + gutter + "px 0 0 " + gutter + "px; display:inline-block;";
    parent.appendChild(container);
    return container;
}

