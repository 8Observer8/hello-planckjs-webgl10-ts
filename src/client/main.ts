import { mat4 } from "gl-matrix";
import { Vec2 } from "planck-js";

let gl: WebGLRenderingContext;
let output: HTMLDivElement;

function init()
{
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    gl = canvas.getContext("webgl");
    gl.clearColor(0.2, 0.2, 0.2, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
 
    output = document.getElementById("output") as HTMLDivElement;

    const vec = Vec2(1, 2);
    output.innerHTML = `vec = (${vec.x}, ${vec.y})<br>`;

    const matrix = mat4.create();
    output.innerHTML += `matrix = [${matrix}]`;
}

function main()
{
    init();
}

// Debug
main();

// Release
// window.onload = () => main();
