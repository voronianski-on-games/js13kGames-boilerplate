var loop = require('./loop');
var rand = require('./rand');
var key = require('./key');

var canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 480;
canvas.style.backgroundColor = '#000';
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');

// demo entity
var mob = {
  x: rand.int(canvas.width),
  y: rand.int(canvas.height),
  width: 25,
  height: 25,
  speed: 150,
  color: 'rgba(236, 94, 103, 1)'
};

// game loop
loop.start(function (dt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // update mob
  if (key.isDown(key.LEFT)) {
    mob.x = mob.x - (mob.speed * dt);
  }
  if (key.isDown(key.RIGHT)) {
    mob.x = mob.x + (mob.speed * dt);
  }
  if (key.isDown(key.UP)) {
    mob.y = mob.y - (mob.speed * dt);
  }
  if (key.isDown(key.DOWN)) {
    mob.y = mob.y + (mob.speed * dt);
  }

  // check bounds collisions
  if (mob.x < 0) {
    mob.x = canvas.width;
  } else if (mob.x > canvas.width) {
    mob.x = 0;
  }
  if (mob.y < 0) {
    mob.y = canvas.height;
  } else if (mob.y > canvas.height) {
    mob.y = 0;
  }

  // draw mob
  ctx.fillStyle = mob.color;
  ctx.fillRect(mob.x, mob.y, mob.width, mob.height);

  console.log('game update fn %s', dt);
});
