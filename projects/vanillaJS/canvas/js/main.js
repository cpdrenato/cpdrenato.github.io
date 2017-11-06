const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = (window.innerWidth);
  canvas.height = (window.innerHeight);
  ctx.lineJoin = 'round ';
  ctx.lineCap = 'round';
}

resizeCanvas();

ctx.strokeStyle = `#bada55`;

let hue = 0;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
function draw(e) {

    if (!isDrawing) return;
    ctx.lineWidth=50;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath()
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
    hue++;

}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

window.addEventListener('resize', resizeCanvas)
