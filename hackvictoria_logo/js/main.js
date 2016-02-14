var logo = document.getElementById("logo");

var width = window.innerWidth;
var height = window.innerHeight;

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
    event = event || window.event;

    var x = event.pageX;
    var y = event.pageY;

    var r, g, b;

    var r = Math.floor((x / width) * 255) + 5;
    var g = Math.floor((y / height) * 255) + 5;
    var b = Math.floor((r + g)/2);

    var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    logo.style.color = rgb;
}