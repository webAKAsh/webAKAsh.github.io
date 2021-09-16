//Background random colors.....
var y = document.getElementById("color");

y.addEventListener("click",mycolor);

function mycolor(){

    var x = Math.floor(Math.random() * 16777215).toString(16);
    
    document.body.style.backgroundColor = '#' + x;
}
mycolor();
//On Mouse moving drawing.....
var z = document.getElementById("mousemovement");

z.addEventListener("click",onmove);

function onmove(){

    var moving = Math.floor(Math.random() * 16777215).toString(16);
    
    document.body.style.backgroundColor = '#' + moving;
}
onmove();