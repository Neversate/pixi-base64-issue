import imageDataURL from "./image";
import * as PIXI from "pixi.js";

let app = new PIXI.Application({
  width: 256,
  height: 256,
  antialiasing: true,
  transparent: false,
  resolution: 1
});

document.body.appendChild(app.view);

//To change the background color
app.renderer.backgroundColor = "0x000000";

function onSpriteLoad(sprite, callback) {
  if (sprite.texture.baseTexture.hasLoaded !== true) {
    sprite.texture.baseTexture.on("loaded", callback);
  } else {
    callback();
  }
}

var sprite = PIXI.Sprite.from(imageDataURL);

onSpriteLoad(sprite, () => {
  sprite.width = 50;
  sprite.height = 50;
});

app.stage.addChild(sprite);
