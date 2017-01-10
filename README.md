# <img src="http://2016.js13kgames.com/img/logo.png" height="50" /> [js13kGames boilerplate](http://js13kgames.com/#rules)

> Minimum game starter kit, perfect for [js13kGames](http://js13kgames.com) compo.

## What's inside?

- [raf](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) based game loop
- [stats](https://github.com/mrdoob/stats.js) in development mode
- basic utility for randomization
- basic utility for handling keyboard interactions

Everything else is up to you and your needs. If you will participate in _js13kGames_ competition then it's better to draw your game entities directly with [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) to save some bytes and fit the [rules](http://js13kgames.com/#rules). If it's not a case this project perfectly fits as a starter kit for a regular HTML5 game and you're welcome to use some complex rendering solutions like [PIXI.js](https://github.com/pixijs/pixi.js). 

## Development

```bash
npm install
npm run watch
# open ./build/index.html in browser
```

## Packaging

```bash
npm run package
# share ./build.zip with the world 
```

---

**MIT Licensed**
