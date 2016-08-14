var lastTime = timestamp();
var stats;

if (!PRODUCTION) {
  stats = require('stats.js')(0);
  document.body.appendChild(stats.dom);
}

function timestamp () {
  return window.performance && window.performance.now ?
    window.performance.now() :
    Date.now();
}

function raf (fn) {
  return window.requestAnimationFrame(function () {
    stats && stats.begin();

    var now = timestamp();
    var elapsed = now - lastTime;


    if (elapsed > 999) {
      elapsed = 1 / 60;
    } else {
      elapsed /= 1000;
    }

    lastTime = now;

    fn(elapsed);

    stats && stats.end();
  });
}

exports.start = function (fn) {
  return raf(function tick (elapsed) {
    fn(elapsed);
    raf(tick);
  });
};
