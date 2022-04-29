# Animating Canvas

## Creating and Resizing Your Canvas
A Canvas can be easy created by putting the following tag <canvas></canvas>

## Drawing Elements
Once the Canvas is created, the next thing to do is manipulate the DOM using JavaScript.
So, a canvas.js file is created and select the canvas using 'querySelector'

### Canvas Objects which can be created:
- Rectangles --> fillRect(x, y, width, heigth)
- Lines --> moveTo(x, y) / lineTo(x, y)
- Arcs / Circles --> arc()
- Bezier curves
- Images
- Text

## Animating Elements
First of all, the following function can be created:

function animate() {
    requestAnimationFrame(animate);
}

Within the requestAnimationFrame() function a loop is created for all the time being that the program is running.

Animation works by refreshing the page, and each time the page is refreshing the elements will be moving in 'x' and 'y' incrementally directions. This will it be doing over and over again, and this will give illussion of animations.

let x => Object position in width
let y => Object position in height

let dx => Velocity of the object in x
let dy => Velocity of the object in y

clearRect => Clear the Canva every time we draw something on top of it


## Interacting with Elements