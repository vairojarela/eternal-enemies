'use strict';

function Enemy(canvas,randomY){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.width = 10;
  this.height = 10;
  this.x = this.canvas.width;
  this.y = randomY;
  this.velocity = 3;
  this.direction = -1;
  this.color = 'red';
};

Enemy.prototype.move = function() {
  this.x = this.x + this.direction * this.velocity;
};

Enemy.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x,this.y,this.width,this.height);
};
