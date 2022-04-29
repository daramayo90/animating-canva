let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Super object passing a tons of methods and functions to draw within our canvas
let c = canvas.getContext('2d');

// (x, y, width, height)
c.fillRect(100, 100, 100, 100);
c.fillRect(250, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(550, 100, 100, 100);