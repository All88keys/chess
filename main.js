var c = document.getElementById("canvas");
var ctx = c.getContext('2d');

var board = [];

for (var y = 0; y < 8; y++) {
  board.push([]);
  for (var x = 0; x < 8; x++) {
    board[y].push(new tile(c.width/8*x,c.width/8*y, x%2-y%2 ==0 ? "black" : "#a8c9ff", c.width/8));
  }
}

function tile(x,y,color,size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
  this.occupied = null;
  this.update = function () {
    ctx.beginPath();
    ctx. fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.size,this.size);
  }
}

board.update = function () {
  for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 8; x++) {
      board[y][x].update();
    }
  }
}
board.update();
