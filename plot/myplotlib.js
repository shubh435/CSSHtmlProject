function XYPlotter(id) {
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  let width = this.canvas.width ?? window.innerWidth;
  let height = this.canvas.height ?? window.innerHeight;

  this.xMin = 0;
  this.yMin = 0;
  this.xMax = width;
  this.yMax = height;

  // Plot Line Function
  this.plotLine = function (x0, y0, x, y, color) {
    this.ctx.moveTo(x0, y0);
    this.ctx.lineTo(x, y);
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
  };

  // Transform XY Function
  this.transformXY = function () {
    this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
  };

  // Pot Points Function
  this.plotPoints = function (n, xArr, yArr, color, radius = 3) {
    for (let i = 0; i < n; i++) {
      this.ctx.fillStyle = color;
      this.ctx.beginPath();
      this.ctx.ellipse(xArr[i], yArr[i], radius, radius, 0, 0, Math.PI * 2);
      this.ctx.fill();
    }
  };
} // End Plotter Object
  
const resizeCanvas = () => {
  console.log("------width------height------", width, height);
  //resize canvas
  if (window.innerHeight >= (9 * window.innerWidth) / 16) {
    this.canvas.width = window.innerWidth;
    this.canvas.width = Math.floor((9 * this.canvas.width) / 16);
  } else {
    this.canvas.width = window.innerHeight;
    this.canvas.width = Math.floor((16 * this.canvas.height) / 9);
  }
  XYPlotter(id)
};
window.addEventListener('resize', resizeCanvas, false);
