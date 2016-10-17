// TODO: get the dom element of the logo so we can use it later

var width = window.innerWidth;
var height = window.innerHeight;

// TODO: attach handleMouseMove to the mouse move function of the document

function handleMouseMove(event) {
    setTimeout(function() {
        event = event || window.event;

        var x = event.pageX;
        var y = event.pageY;

        var r, g, b;

        var r = Math.floor((x / width) * 255) + 5;
        var g = Math.floor((y / height) * 255) + 5;
        var b = Math.floor((r + g)/2);

        var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';

        logo.style.color = rgb;
    }, 100);
}