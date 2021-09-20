var mouseEventb = "empty";
var last_x_position, last_y_position;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color= "black";
var width= 1;

canvas.addEventListener("mousedown", checkmousedown)
function checkmousedown(e){
    mouseEventb= "mouseDown";
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
}
canvas.addEventListener("mousemove", checkmousemove);
function checkmousemove(e){
    var current_x_position=e.clientX-canvas.offsetLeft;
    var current_y_position=e.clientY-canvas.offsetTop;

    if(mouseEventb=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth= width;

        console.log("The Last Position of the x and y coordinates is:");
        console.log("x ="+current_x_position + "y ="+current_y_position );
        ctx.arc(current_x_position , current_y_position, 20, 0, 2*Math.PI);
        ctx.stroke();
    }
    last_x_position=current_x_position;
    last_y_position=current_y_position;
}
canvas.addEventListener("mouseleave", checkmouseleave);
function checkmouseleave(e){
    mouseEventb = "mouseLeave";
}
canvas.addEventListener("mouseup", checkmouseup);
function checkmouseup(e){
    mouseEventb = "mouseUp";
}
function clearall(){
    ctx.clearRect(0 , 0, canvas.width, canvas.height);
}
