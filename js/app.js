const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.style.backgroundColor = "rgba(158, 167, 184, 0.2)";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#66ff66';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 40;
ctx.globalCompositeOperation = 'overlay';

let isDrawing = false;
let lastX = null;
let lastY = null;
let hue = 0;
let direction = true;


// Funkanvas function

const draw = e => {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 90%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 5) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}
//Adding event listeners for mouse movement
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]

});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


//Opening popup
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});
