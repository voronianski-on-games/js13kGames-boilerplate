/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("var loop = __webpack_require__(1);\nvar rand = __webpack_require__(3);\nvar key = __webpack_require__(4);\n\nvar canvas = document.createElement('canvas');\ncanvas.width = 640;\ncanvas.height = 480;\ncanvas.style.backgroundColor = '#000';\ndocument.body.appendChild(canvas);\n\nvar ctx = canvas.getContext('2d');\n\n// demo entity\nvar mob = {\n  x: rand.int(canvas.width),\n  y: rand.int(canvas.height),\n  width: 25,\n  height: 25,\n  speed: 150,\n  color: 'rgba(236, 94, 103, 1)'\n};\n\n// game loop\nloop.start(function (dt) {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  // update mob\n  if (key.isDown(key.LEFT)) {\n    mob.x = mob.x - (mob.speed * dt);\n  }\n  if (key.isDown(key.RIGHT)) {\n    mob.x = mob.x + (mob.speed * dt);\n  }\n  if (key.isDown(key.UP)) {\n    mob.y = mob.y - (mob.speed * dt);\n  }\n  if (key.isDown(key.DOWN)) {\n    mob.y = mob.y + (mob.speed * dt);\n  }\n\n  // check bounds collisions\n  if (mob.x < 0) {\n    mob.x = canvas.width;\n  } else if (mob.x > canvas.width) {\n    mob.x = 0;\n  }\n  if (mob.y < 0) {\n    mob.y = canvas.height;\n  } else if (mob.y > canvas.height) {\n    mob.y = 0;\n  }\n\n  // draw mob\n  ctx.fillStyle = mob.color;\n  ctx.fillRect(mob.x, mob.y, mob.width, mob.height);\n\n  console.log('game update fn %s', dt);\n});\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/main.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./src/main.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("var lastTime = timestamp();\nvar stats;\n\nif (true) {\n  stats = __webpack_require__(2)(0);\n  document.body.appendChild(stats.dom);\n}\n\nfunction timestamp () {\n  return window.performance && window.performance.now ?\n    window.performance.now() :\n    Date.now();\n}\n\nfunction raf (fn) {\n  return window.requestAnimationFrame(function () {\n    stats && stats.begin();\n\n    var now = timestamp();\n    var dt = now - lastTime;\n\n    if (dt > 999) {\n      dt = 1 / 60;\n    } else {\n      dt /= 1000;\n    }\n\n    lastTime = now;\n\n    fn(dt);\n\n    stats && stats.end();\n  });\n}\n\nexports.start = function (fn) {\n  return raf(function tick (dt) {\n    fn(dt);\n    raf(tick);\n  });\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/loop.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./src/loop.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// stats.js - http://github.com/mrdoob/stats.js\nvar Stats=function(){function h(a){c.appendChild(a.dom);return a}function k(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?\"block\":\"none\";l=a}var l=0,c=document.createElement(\"div\");c.style.cssText=\"position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000\";c.addEventListener(\"click\",function(a){a.preventDefault();k(++l%c.children.length)},!1);var g=(performance||Date).now(),e=g,a=0,r=h(new Stats.Panel(\"FPS\",\"#0ff\",\"#002\")),f=h(new Stats.Panel(\"MS\",\"#0f0\",\"#020\"));\nif(self.performance&&self.performance.memory)var t=h(new Stats.Panel(\"MB\",\"#f08\",\"#201\"));k(0);return{REVISION:16,dom:c,addPanel:h,showPanel:k,begin:function(){g=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();f.update(c-g,200);if(c>e+1E3&&(r.update(1E3*a/(c-e),100),e=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){g=this.end()},domElement:c,setMode:k}};\nStats.Panel=function(h,k,l){var c=Infinity,g=0,e=Math.round,a=e(window.devicePixelRatio||1),r=80*a,f=48*a,t=3*a,u=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement(\"canvas\");q.width=r;q.height=f;q.style.cssText=\"width:80px;height:48px\";var b=q.getContext(\"2d\");b.font=\"bold \"+9*a+\"px Helvetica,Arial,sans-serif\";b.textBaseline=\"top\";b.fillStyle=l;b.fillRect(0,0,r,f);b.fillStyle=k;b.fillText(h,t,u);b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(f,\nv){c=Math.min(c,f);g=Math.max(g,f);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=k;b.fillText(e(f)+\" \"+h+\" (\"+e(c)+\"-\"+e(g)+\")\",t,u);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,e((1-f/v)*p))}}};\"object\"===typeof module&&(module.exports=Stats);\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/stats.js/build/stats.min.js\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./~/stats.js/build/stats.min.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("var seed = 0;\n\nfunction random () {\n  var x = Math.sin(.8765111159592828 + seed++) * 10000;\n\n  return x - Math.floor(x);\n}\n\n/**\n * Return an integer within [0, max).\n *\n * @param  {int} [max]\n * @return {int}\n */\nexports.int = function (max) {\n  return random() * (max || 0xfffffff) | 0;\n};\n\n/**\n * Return a float within [0.0, 1.0).\n *\n * @return {float}\n */\nexports.float = function () {\n  return random();\n};\n\n/**\n * Return a boolean.\n *\n * @return {Boolean}\n */\nexports.bool = function () {\n  return random() > 0.5;\n};\n\n/**\n * Return an integer within [min, max).\n *\n * @param  {int} min\n * @param  {int} max\n * @return {int}\n */\nexports.range = function (min, max) {\n  return this.int(max - min) + min;\n};\n\n/**\n * Pick an element from the source.\n *\n * @param  {mixed[]} source\n * @return {mixed}\n */\nexports.pick = function (source) {\n  return source[this.range(0, source.length)];\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/rand.js\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./src/rand.js?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("var _pressed = {};\nvar key = {};\n\nkey.LEFT = 37;\nkey.UP = 38;\nkey.RIGHT = 39;\nkey.DOWN = 40;\n\nkey.isDown = function (keyCode) {\n  return _pressed[keyCode];\n};\n\nkey.onKeydown = function (event) {\n  _pressed[event.keyCode] = true;\n};\n\nkey.onKeyup = function  (event) {\n  _pressed[event.keyCode] = null;\n};\n\nwindow.addEventListener('keyup', function (e) {\n  key.onKeyup(e);\n}, false);\nwindow.addEventListener('keydown', function (e) {\n  key.onKeydown(e);\n}, false);\n\nmodule.exports = key;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/key.js\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:///./src/key.js?");

/***/ }
/******/ ]);