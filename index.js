import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Main from "./Main/Main.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Duszek1 from "./Duszek1/Duszek1.js";
import Loudness from "./Loudness/Loudness.js";
import Duszek5 from "./Duszek5/Duszek5.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Duszek4 from "./Duszek4/Duszek4.js";
import Duszek3 from "./Duszek3/Duszek3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Duszek2 from "./Duszek2/Duszek2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Main: new Main({
    x: 240,
    y: -2286.9928142070576,
    direction: 90,
    costumeNumber: 1,
    size: 3000,
    visible: false,
    layerOrder: 1
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Sprite6: new Sprite6({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Sprite7: new Sprite7({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Sprite3: new Sprite3({
    x: 0,
    y: 160,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: false,
    layerOrder: 5
  }),
  Sprite9: new Sprite9({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 400,
    visible: true,
    layerOrder: 6
  }),
  Duszek1: new Duszek1({
    x: -155,
    y: -10,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Loudness: new Loudness({
    x: 221.05,
    y: 161.05,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: true,
    layerOrder: 14
  }),
  Duszek5: new Duszek5({
    x: 35,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 65,
    visible: false,
    layerOrder: 9
  }),
  Sprite5: new Sprite5({
    x: 100,
    y: -10,
    direction: 90,
    costumeNumber: 5,
    size: 120,
    visible: false,
    layerOrder: 13
  }),
  Duszek4: new Duszek4({
    x: 60,
    y: 60,
    direction: 90,
    costumeNumber: 1,
    size: 112.22222222222223,
    visible: false,
    layerOrder: 11
  }),
  Duszek3: new Duszek3({
    x: -145,
    y: 60,
    direction: 90,
    costumeNumber: 1,
    size: 90,
    visible: false,
    layerOrder: 12
  }),
  Sprite4: new Sprite4({
    x: 112,
    y: 26,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  Sprite8: new Sprite8({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Duszek2: new Duszek2({
    x: -155,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 50.5,
    visible: false,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
