/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Main extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Main/costumes/costume1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound("cloth1.ogg", "./Main/sounds/cloth1.ogg.wav"),
      new Sound("grass1.ogg", "./Main/sounds/grass1.ogg.wav"),
      new Sound("gravel1.ogg", "./Main/sounds/gravel1.ogg.wav"),
      new Sound("stone1.ogg", "./Main/sounds/stone1.ogg.wav"),
      new Sound("wood1.ogg", "./Main/sounds/wood1.ogg.wav"),
      new Sound("water.ogg", "./Main/sounds/water.ogg.wav"),
      new Sound("glass3.ogg", "./Main/sounds/glass3.ogg.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.x1 = 1.5640473660772538;
    this.vars.y1 = 90.7092967105706;
    this.vars.z1 = 54.3037375524044;
    this.vars.operation = 4;
    this.vars.rotx = -69.99756339704618;
    this.vars.roty = -124.99023459968156;
    this.vars.sinx = -0.9396780749330694;
    this.vars.siny = -0.8192497918340415;
    this.vars.cosx = 0.3420601050840053;
    this.vars.cosy = -0.5734368130665136;
    this.vars.between = 53.3153086264614;
    this.vars.worldelement = 1;
    this.vars.l = 0;
    this.vars.f = 0;
    this.vars.r = 0;
    this.vars.b = 1;
    this.vars.scx = 46.362505407078515;
    this.vars.scy = 20;
    this.vars.scz = 14.799407853611;
    this.vars.grx = 21;
    this.vars.gry = 12;
    this.vars.grz = 22;
    this.vars.blocktype = 1;
    this.vars.vely = -9;
    this.vars.l2 = 0;
    this.vars.r2 = 0;
    this.vars.b2 = 1;
    this.vars.f2 = 0;
    this.vars.hrotx = -70;
    this.vars.hroty = -125;
    this.vars.velx = -0.6780359865498835;
    this.vars.velz = 1.4094365414152286;
    this.vars.broadcastjump = 0;
    this.vars.lastcamx = 1097.2439521895933;
    this.vars.lastcamz = 1112.9671403497712;
    this.vars.walk = 1.4076426294695286;
    this.vars.walkforce = 1.806894121337657e-7;
    this.vars.pickaxex = 0.2604982464965937;
    this.vars.pickaxey = -2.325896797190433;
    this.vars.pickaxez = -1.0095512814689838;
    this.vars.pickaxemovement = -0.5;
    this.vars.pickaxeforward = -0.5;
    this.vars.red = 0;
    this.vars.green = 120;
    this.vars.blue = 15;
    this.vars.shade = 0.9460784158312996;
    this.vars.light = 15;
    this.vars.xvel = -0.2886281123168396;
    this.vars.yvel = -0.9378169476671484;
    this.vars.zvel = -0.19285534850942224;
    this.vars.ground = 0;
    this.vars.dogpos = 20021;
    this.vars.id = 16863;
    this.vars.dog = 0;
    this.vars.dogvely = 2;
    this.vars.rotdog = -40;
    this.vars.dogGround = 11;
    this.vars.tail = 4120;
    this.vars.wateranimation = 4120;
    this.vars.waterscreen = 4.393985628414115;
    this.vars.fps = "FPS: 0";
    this.vars.panorama = 0;
    this.vars.sunY = 0.9360595357389732;
    this.vars.sunX = 0.35184164840470217;
    this.vars.x2 = -137.09775388535567;
    this.vars.y2 = 79.1600433764789;
    this.vars.z2 = 50.09959688499275;
    this.vars.x3 = -96.1352642936536;
    this.vars.y3 = 52.21774334657411;
    this.vars.z3 = 40.29210405816431;
    this.vars.yp = 50;
    this.vars.zp = 50;
    this.vars.xp = 50;
    this.vars.x = 20.606880012264416;
    this.vars.y = 12.659272580910496;
    this.vars.z = 6.990448718531017;
    this.vars.x4 = -137.09775388535567;
    this.vars.y4 = 79.1600433764789;
    this.vars.z4 = 50.09959688499275;
    this.vars.xx = -96.1352642936536;
    this.vars.yy = 52.21774334657411;
    this.vars.zz = 40.29210405816431;
    this.vars.xxx = -112.5164560086029;
    this.vars.yyy = -51.70766341132369;
    this.vars.zzz = 2.4613442428557057;
    this.vars.dot = 0.3961534691684659;
    this.vars.lena = 45.11991329822152;
    this.vars.lenb = 120.3357405893062;
    this.vars.lenc = 149.6898645027416;
    this.vars.peri = 315.14551839026933;
    this.vars.incx = -235.6076678787712;
    this.vars.incy = 145.80581554566228;
    this.vars.ind = 28.94709353678883;
    this.vars.aox = -111.3741865733194;
    this.vars.aoy = -21.234798598132073;
    this.vars.box = 38.042745317313944;
    this.vars.boy = -12.199534393971987;
    this.vars.cox = 2.9881228867743346;
    this.vars.coy = 16.207859402209607;
    this.vars.td = 0.03619376197926564;
    this.vars.rate = 0.43617265164563296;
    this.vars.alpha = 255;
    this.vars.broadcastJumpDog = 0;
    this.vars.under = 0;
    this.vars.worldHeight = [
      14.5,
      14.5,
      6.5,
      6.5,
      6.5,
      15.5,
      7.5,
      7.5,
      7.5,
      14.5,
      10.5,
      10.5,
      7.5,
      15.5,
      14.5,
      13.5
    ];
    this.vars.trees = [
      924,
      1463,
      994,
      171,
      404,
      1173,
      339,
      110,
      595,
      870,
      515,
      1282,
      1318,
      1473,
      1533,
      1369,
      1591,
      126,
      991,
      1159,
      1598,
      1217,
      700,
      151,
      1237,
      1407,
      591,
      747,
      476,
      1082,
      103,
      579,
      224,
      332,
      1078,
      913,
      1580,
      1249,
      189,
      82,
      1062,
      1293,
      239,
      422,
      156,
      1341,
      1106,
      1271,
      1336,
      877,
      402,
      1019,
      543,
      390,
      310,
      1013,
      371,
      1028
    ];
    this.vars.shadow = [
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      10,
      10,
      9,
      9,
      9,
      8,
      8,
      8,
      7,
      7,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      10,
      17,
      17,
      17,
      11,
      11,
      11,
      11,
      12,
      12,
      10,
      10,
      10,
      9,
      9,
      8,
      8,
      7,
      7,
      7,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      10,
      17,
      18,
      17,
      10,
      11,
      17,
      11,
      11,
      12,
      10,
      10,
      10,
      9,
      9,
      8,
      8,
      8,
      7,
      7,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      5,
      4,
      5,
      5,
      5,
      4,
      4,
      4,
      4,
      9,
      17,
      17,
      17,
      10,
      17,
      18,
      17,
      11,
      12,
      10,
      17,
      10,
      9,
      9,
      9,
      8,
      8,
      7,
      7,
      4,
      5,
      4,
      4,
      4,
      4,
      5,
      4,
      5,
      5,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      5,
      5,
      4,
      9,
      10,
      10,
      10,
      10,
      10,
      17,
      11,
      11,
      11,
      17,
      18,
      17,
      9,
      9,
      8,
      8,
      8,
      7,
      7,
      5,
      4,
      5,
      4,
      4,
      4,
      5,
      4,
      5,
      4,
      4,
      4,
      4,
      5,
      4,
      4,
      5,
      4,
      4,
      5,
      9,
      10,
      9,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      10,
      17,
      10,
      9,
      9,
      9,
      8,
      8,
      7,
      7,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      5,
      5,
      4,
      4,
      5,
      5,
      5,
      5,
      4,
      5,
      5,
      5,
      5,
      9,
      9,
      10,
      10,
      10,
      10,
      10,
      10,
      11,
      11,
      11,
      10,
      10,
      9,
      9,
      9,
      8,
      8,
      7,
      7,
      4,
      5,
      4,
      5,
      5,
      5,
      5,
      5,
      4,
      4,
      4,
      5,
      5,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      9,
      9,
      9,
      10,
      9,
      10,
      10,
      10,
      11,
      11,
      11,
      10,
      16,
      10,
      9,
      9,
      8,
      8,
      7,
      7,
      4,
      5,
      4,
      5,
      4,
      4,
      5,
      5,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      8,
      9,
      9,
      9,
      9,
      10,
      10,
      10,
      10,
      11,
      17,
      17,
      17,
      16,
      9,
      9,
      8,
      8,
      8,
      7,
      5,
      5,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      8,
      9,
      9,
      9,
      9,
      9,
      10,
      10,
      10,
      10,
      17,
      18,
      17,
      10,
      9,
      9,
      8,
      8,
      7,
      7,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      17,
      17,
      17,
      10,
      9,
      9,
      9,
      9,
      8,
      8,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      7,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      10,
      10,
      10,
      10,
      9,
      9,
      9,
      9,
      8,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      7,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      10,
      10,
      10,
      10,
      9,
      9,
      8,
      8,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      6,
      5,
      5,
      5,
      5,
      7,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      11,
      11,
      10,
      10,
      10,
      9,
      9,
      9,
      9,
      8,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      6,
      5,
      5,
      6,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      10,
      10,
      10,
      10,
      9,
      9,
      9,
      8,
      8,
      6,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      6,
      5,
      7,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      11,
      10,
      10,
      10,
      9,
      9,
      9,
      8,
      6,
      7,
      6,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      7,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      11,
      11,
      10,
      10,
      10,
      9,
      9,
      9,
      9,
      8,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      11,
      11,
      11,
      10,
      10,
      10,
      9,
      9,
      9,
      8,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      11,
      11,
      10,
      10,
      10,
      10,
      9,
      9,
      9,
      9,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      7,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      11,
      11,
      11,
      10,
      10,
      10,
      9,
      9,
      9,
      9,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      10,
      10,
      10,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      8,
      7,
      7,
      7,
      6,
      6,
      6,
      5,
      5,
      4,
      7,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      10,
      10,
      10,
      9,
      8,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      8,
      8,
      7,
      7,
      6,
      6,
      6,
      5,
      5,
      4,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      12,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      10,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      8,
      7,
      7,
      6,
      6,
      6,
      5,
      5,
      5,
      4,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      12,
      11,
      12,
      11,
      11,
      11,
      11,
      11,
      11,
      10,
      10,
      10,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      8,
      7,
      7,
      6,
      6,
      5,
      5,
      5,
      4,
      4,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      10,
      12,
      12,
      11,
      18,
      11,
      11,
      11,
      11,
      11,
      17,
      10,
      10,
      10,
      10,
      10,
      10,
      9,
      9,
      16,
      10,
      7,
      7,
      7,
      6,
      6,
      5,
      5,
      5,
      4,
      4,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      10,
      12,
      12,
      18,
      19,
      18,
      11,
      11,
      11,
      17,
      18,
      17,
      17,
      17,
      17,
      10,
      10,
      10,
      16,
      17,
      16,
      8,
      7,
      7,
      6,
      6,
      5,
      5,
      4,
      4,
      4,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      12,
      12,
      12,
      18,
      11,
      11,
      11,
      11,
      11,
      17,
      10,
      17,
      18,
      17,
      10,
      16,
      16,
      16,
      16,
      10,
      7,
      7,
      7,
      6,
      6,
      5,
      5,
      5,
      4,
      4,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      12,
      12,
      12,
      12,
      12,
      12,
      11,
      11,
      11,
      11,
      10,
      17,
      17,
      17,
      10,
      16,
      17,
      16,
      10,
      10,
      7,
      7,
      6,
      6,
      6,
      5,
      5,
      4,
      4,
      3,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      9,
      10,
      11,
      12,
      12,
      12,
      18,
      12,
      12,
      12,
      11,
      11,
      11,
      10,
      10,
      10,
      10,
      10,
      16,
      16,
      16,
      10,
      10,
      7,
      7,
      6,
      6,
      6,
      5,
      5,
      4,
      4,
      3,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      10,
      13,
      12,
      18,
      19,
      18,
      12,
      12,
      12,
      11,
      11,
      11,
      10,
      11,
      10,
      11,
      11,
      11,
      10,
      11,
      11,
      7,
      7,
      6,
      6,
      5,
      5,
      5,
      4,
      4,
      3,
      5,
      5,
      5,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      9,
      9,
      9,
      18,
      9,
      9,
      9,
      9,
      9,
      9,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      4,
      4,
      4,
      3,
      3,
      2,
      2,
      2,
      2,
      1,
      5,
      5,
      5,
      5,
      5,
      6,
      6,
      6,
      6,
      6,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      4,
      4,
      3,
      3,
      2,
      2,
      2,
      2,
      1,
      1,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      6,
      7,
      6,
      7,
      6,
      4,
      3,
      3,
      3,
      2,
      2,
      2,
      1,
      1,
      1,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      7,
      7,
      7,
      7,
      7,
      6,
      7,
      6,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      3,
      3,
      3,
      2,
      2,
      2,
      1,
      1,
      1,
      0,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      5,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      3,
      3,
      2,
      2,
      2,
      1,
      1,
      1,
      0,
      0,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      4,
      4,
      5,
      5,
      4,
      4,
      3,
      2,
      2,
      2,
      1,
      1,
      1,
      0,
      0,
      0,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      2,
      2,
      2,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      3,
      4,
      4,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      2,
      2,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      2,
      2,
      3,
      2,
      3,
      2,
      2,
      2,
      2,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
  }

  *y2() {
    this.vars.yp = 50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange); i++) {
      yield* this.x2();
      this.vars.yp -= 50;
      yield;
    }
    this.vars.yp = -50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange) + 1; i++) {
      yield* this.x2();
      this.vars.yp += 50;
      yield;
    }
  }

  *x2() {
    this.vars.xp = 50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange); i++) {
      yield* this.z2();
      this.vars.xp -= 50;
      yield;
    }
    this.vars.xp = -50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange) + 1; i++) {
      yield* this.z2();
      this.vars.xp += 50;
      yield;
    }
  }

  *z2() {
    this.vars.zp = 50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange); i++) {
      yield* this.block2(this.vars.xp, this.vars.yp, this.vars.zp);
      this.vars.zp -= 50;
      yield;
    }
    this.vars.zp = -50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange) + 1; i++) {
      yield* this.block2(this.vars.xp, this.vars.yp, this.vars.zp);
      this.vars.zp += 50;
      yield;
    }
  }

  *whenIReceivePlay() {
    this.stage.vars.camx =
      (this.toNumber(this.stage.vars.worldwidth) +
        1 *
          this.toNumber(this.toNumber(this.stage.vars.worldwidth) % 2 === 0)) *
      25;
    this.stage.vars.camy =
      (this.toNumber(this.stage.vars.worldheight) + 1) * 50;
    this.stage.vars.camz =
      (this.toNumber(this.stage.vars.worldwidth) +
        1 *
          this.toNumber(this.toNumber(this.stage.vars.worldwidth) % 2 === 0)) *
      25;
    this.vars.rotx = 0;
    this.vars.roty = 0;
    this.vars.vely = 0;
    this.vars.velx = 0;
    this.vars.velz = 0;
    this.vars.hrotx = 0;
    this.vars.hroty = 0;
    this.vars.walk = 0;
    this.vars.walkforce = 0;
    this.vars.pickaxex = 0;
    this.vars.pickaxey = 0;
    this.vars.pickaxez = 0;
    this.vars.panorama = 0;
    yield* this.staticvalues();
    yield* this.randomizeworld();
    this.stage.vars.sunDirection = 0;
    this.stage.vars.dogx = this.stage.vars.camx;
    this.stage.vars.dogy = this.stage.vars.camy;
    this.stage.vars.dogz = this.stage.vars.camz;
    this.vars.dogvely = 0;
    this.vars.rotdog = 0;
    this.vars.dog = 0;
    this.vars.tail = 0;
    this.stage.vars.pause = 0;
    this.vars.wateranimation = 0;
    this.broadcast("done");
    while (true) {
      if (this.toNumber(this.stage.vars.pause) === 0) {
        yield* this.control();
        yield* this.renderworld();
        this.vars.fps = "FPS: " + this.toString(Math.round(1 / this.timer));
        this.vars.wateranimation += 20;
        yield* this.wait(0);
      }
      yield;
    }
  }

  *control() {
    if (this.compare(this.stage.vars.camy, 0) < 0) {
      this.stage.vars.camx = this.toNumber(this.stage.vars.worldwidth) * 25;
      this.stage.vars.camy = 1000;
      this.stage.vars.camz = this.toNumber(this.stage.vars.worldwidth) * 25;
      this.vars.rotx = 0;
      this.vars.roty = 0;
      this.vars.vely = 0;
      this.vars.velx = 0;
      this.vars.velz = 0;
      this.vars.hrotx = 0;
      this.vars.hroty = 0;
      this.vars.walk = 0;
      this.vars.walkforce = 0;
      this.vars.pickaxex = 0;
      this.vars.pickaxey = 0;
      this.vars.pickaxez = 0;
    }
    this.vars.ground = 0;
    yield* this.worldelementplayer(0, -61 + this.toNumber(this.vars.vely), 0);
    if (this.toNumber(this.vars.worldelement) === 0) {
      yield* this.worldelementplayer(0, -11 + this.toNumber(this.vars.vely), 0);
      yield* this.legs(60);
    } else {
      yield* this.legs(10);
    }
    yield* this.worldelementplayer(0, 21 + this.toNumber(this.vars.vely), 0);
    if (this.compare(0, this.vars.worldelement) < 0) {
      this.vars.vely = 0;
      this.stage.vars.camy =
        Math.round(
          (21 +
            (this.toNumber(this.stage.vars.camy) +
              this.toNumber(this.vars.vely))) /
            50
        ) *
          50 -
        20;
      if (this.compare(this.vars.waterscreen, 0) < 0) {
        yield* this.groundsound(this.vars.worldelement, 70);
      }
    }
    if (this.keyPressed("d")) {
      this.vars.velz += 0 - this.toNumber(this.vars.siny);
      this.vars.velx += this.toNumber(this.vars.cosy);
    }
    if (this.keyPressed("a") || this.keyPressed("q")) {
      this.vars.velz += this.toNumber(this.vars.siny);
      this.vars.velx += 0 - this.toNumber(this.vars.cosy);
    }
    if (this.keyPressed("w") || this.keyPressed("z")) {
      this.vars.velz += this.toNumber(this.vars.cosy);
      this.vars.velx += this.toNumber(this.vars.siny);
    }
    if (this.keyPressed("s")) {
      this.vars.velz += 0 - this.toNumber(this.vars.cosy);
      this.vars.velx += 0 - this.toNumber(this.vars.siny);
    }
    this.vars.velx = this.toNumber(this.vars.velx) * 0.8;
    this.vars.velz = this.toNumber(this.vars.velz) * 0.8;
    this.vars.lastcamx = this.stage.vars.camx;
    this.vars.lastcamz = this.stage.vars.camz;
    this.stage.vars.camx += this.toNumber(this.vars.velx) * 1.3;
    this.stage.vars.camz += this.toNumber(this.vars.velz) * 1.3;
    if (this.toNumber(this.stage.vars.mousecontrol) === 1) {
      this.vars.hrotx = this.vars.rotx;
      this.vars.hroty = this.vars.roty;
      if (this.compare(84, this.mouse.y) < 0) {
        this.vars.rotx = (this.toNumber(this.vars.rotx) + 89) / 2;
      } else {
        if (this.compare(-84, this.mouse.y) > 0) {
          this.vars.rotx = (this.toNumber(this.vars.rotx) - 89) / 2;
        } else {
          this.vars.rotx = (this.toNumber(this.vars.rotx) + this.mouse.y) / 2;
        }
      }
      if (this.compare(200, this.mouse.x) < 0) {
        this.vars.panorama += (this.mouse.x - 200) * 0.2;
      }
      if (this.compare(-200, this.mouse.x) > 0) {
        this.vars.panorama += (this.mouse.x + 200) * 0.2;
      }
      this.vars.roty =
        (this.toNumber(this.vars.roty) +
          this.toNumber(this.vars.panorama) +
          this.mouse.x) /
        2;
    } else {
      if (this.keyPressed("right arrow")) {
        this.vars.hroty += 5;
      }
      if (this.keyPressed("left arrow")) {
        this.vars.hroty -= 5;
      }
      if (this.keyPressed("up arrow")) {
        if (this.compare(84, this.vars.hrotx) > 0) {
          this.vars.hrotx += 5;
        }
      }
      if (this.keyPressed("down arrow")) {
        if (this.compare(-84, this.vars.hrotx) < 0) {
          this.vars.hrotx -= 5;
        }
      }
      this.vars.rotx =
        (this.toNumber(this.vars.rotx) + this.toNumber(this.vars.hrotx)) / 2;
      this.vars.roty =
        (this.toNumber(this.vars.roty) + this.toNumber(this.vars.hroty)) / 2;
    }
    this.vars.broadcastjump = 0;
    yield* this.worldelementplayer(15, 0, 0);
    if (this.compare(0, this.vars.worldelement) < 0) {
      this.stage.vars.camx =
        (this.toNumber(this.stage.vars.camx) +
          (Math.round(this.toNumber(this.stage.vars.camx) / 50) * 50 - 15)) /
        2;
    } else {
      yield* this.worldelementplayer(15, -50, 0);
      if (this.compare(0, this.vars.worldelement) < 0) {
        this.stage.vars.camx =
          (this.toNumber(this.stage.vars.camx) +
            (Math.round(this.toNumber(this.stage.vars.camx) / 50) * 50 - 15)) /
          2;
        if (this.compare(this.vars.velx, 0) > 0) {
          this.vars.broadcastjump = 1;
          this.vars.velx = 0;
        }
      }
    }
    yield* this.worldelementplayer(-15, 0, 0);
    if (this.compare(0, this.vars.worldelement) < 0) {
      this.stage.vars.camx =
        (this.toNumber(this.stage.vars.camx) +
          (Math.round(this.toNumber(this.stage.vars.camx) / 50) * 50 + 15)) /
        2;
    } else {
      yield* this.worldelementplayer(-15, -50, 0);
      if (this.compare(0, this.vars.worldelement) < 0) {
        this.stage.vars.camx =
          (this.toNumber(this.stage.vars.camx) +
            (Math.round(this.toNumber(this.stage.vars.camx) / 50) * 50 + 15)) /
          2;
        if (this.compare(this.vars.velx, 0) < 0) {
          this.vars.broadcastjump = 1;
          this.vars.velx = 0;
        }
      }
    }
    yield* this.worldelementplayer(0, 0, 15);
    if (this.compare(0, this.vars.worldelement) < 0) {
      this.stage.vars.camz =
        (this.toNumber(this.stage.vars.camz) +
          (Math.round(this.toNumber(this.stage.vars.camz) / 50) * 50 - 15)) /
        2;
    } else {
      yield* this.worldelementplayer(0, -50, 15);
      if (this.compare(0, this.vars.worldelement) < 0) {
        this.stage.vars.camz =
          (this.toNumber(this.stage.vars.camz) +
            (Math.round(this.toNumber(this.stage.vars.camz) / 50) * 50 - 15)) /
          2;
        if (this.compare(this.vars.velz, 0) > 0) {
          this.vars.broadcastjump = 1;
          this.vars.velz = 0;
        }
      }
    }
    yield* this.worldelementplayer(0, 0, -15);
    if (this.compare(0, this.vars.worldelement) < 0) {
      this.stage.vars.camz =
        (this.toNumber(this.stage.vars.camz) +
          (Math.round(this.toNumber(this.stage.vars.camz) / 50) * 50 + 15)) /
        2;
    } else {
      yield* this.worldelementplayer(0, -50, -15);
      if (this.compare(0, this.vars.worldelement) < 0) {
        this.stage.vars.camz =
          (this.toNumber(this.stage.vars.camz) +
            (Math.round(this.toNumber(this.stage.vars.camz) / 50) * 50 + 15)) /
          2;
        if (this.compare(this.vars.velz, 0) < 0) {
          this.vars.broadcastjump = 1;
          this.vars.velz = 0;
        }
      }
    }
    if (
      this.compare(
        10000,
        (this.toNumber(this.stage.vars.camx) -
          this.toNumber(this.stage.vars.dogx)) *
          (this.toNumber(this.stage.vars.camx) -
            this.toNumber(this.stage.vars.dogx)) +
          (this.toNumber(this.stage.vars.camz) -
            this.toNumber(this.stage.vars.dogz)) *
            (this.toNumber(this.stage.vars.camz) -
              this.toNumber(this.stage.vars.dogz))
      ) < 0
    ) {
      this.vars.dogGround = 11;
      this.stage.vars.dogx +=
        -3 * Math.sin(this.degToRad(this.toNumber(this.vars.rotdog)));
      this.stage.vars.dogz +=
        3 * Math.cos(this.degToRad(this.toNumber(this.vars.rotdog)));
    } else {
      this.vars.dogGround = 0;
    }
    yield* this.dogControl();
  }

  *legs(h) {
    if (this.compare(0, this.vars.worldelement) < 0) {
      this.vars.ground = this.vars.worldelement;
      if (
        this.keyPressed("space") ||
        this.toNumber(this.vars.broadcastjump) === 1
      ) {
        if (this.compare(this.vars.vely, 0) < 0) {
          yield* this.groundsound(this.vars.worldelement, 100);
        }
        this.vars.vely = 11;
        this.stage.vars.camy =
          Math.floor(
            (this.toNumber(this.stage.vars.camy) +
              (this.toNumber(h) + this.toNumber(this.vars.vely))) /
              50
          ) *
            50 +
          10;
      } else {
        if (this.compare(this.vars.vely, 0) < 0) {
          this.vars.vely = 0;
          yield* this.groundsound(this.vars.worldelement, 100);
          this.stage.vars.camy =
            Math.floor(
              (this.toNumber(this.stage.vars.camy) +
                (this.toNumber(h) + this.toNumber(this.vars.vely))) /
                50
            ) *
              50 +
            10;
        } else {
          this.stage.vars.camy =
            (this.toNumber(this.stage.vars.camy) +
              (Math.floor(
                (this.toNumber(this.stage.vars.camy) +
                  (this.toNumber(h) + this.toNumber(this.vars.vely))) /
                  50
              ) *
                50 +
                10)) /
            2;
        }
      }
    } else {
      this.vars.vely--;
      if (this.compare(this.vars.vely, -20) < 0) {
        this.vars.vely = -20;
      }
      this.stage.vars.camy += this.toNumber(this.vars.vely);
    }
  }

  *shadow(x, y, z) {
    if (this.compare(0.2, this.stage.vars.diffusionLighting) < 0) {
      this.vars.operation = 4;
      yield* this.worldelementcam(0, -50, 0);
      if (this.compare(0, this.vars.worldelement) < 0) {
        this.penColor = Color.num(
          (255 -
            Math.round(
              (this.toNumber(this.vars.scy) + 50) *
                (1.5 * (this.toNumber(this.stage.vars.diffusionLighting) - 0.2))
            )) *
            16777216
        );
        yield* this._3dTo2d(this.vars.scx, -50, this.vars.scz);
      } else {
        yield* this.worldelementcam(0, -100, 0);
        if (this.compare(0, this.vars.worldelement) < 0) {
          this.penColor = Color.num(
            (255 -
              Math.round(
                (this.toNumber(this.vars.scy) + 100) *
                  (1.5 *
                    (this.toNumber(this.stage.vars.diffusionLighting) - 0.2))
              )) *
              16777216
          );
          yield* this._3dTo2d(this.vars.scx, -100, this.vars.scz);
        } else {
          yield* this.worldelementcam(0, -150, 0);
          if (this.compare(0, this.vars.worldelement) < 0) {
            this.penColor = Color.num(
              (255 -
                Math.round(
                  (this.toNumber(this.vars.scy) + 150) *
                    (1.5 *
                      (this.toNumber(this.stage.vars.diffusionLighting) - 0.2))
                )) *
                16777216
            );
            yield* this._3dTo2d(this.vars.scx, -150, this.vars.scz);
          }
        }
      }
    }
  }

  *groundsound(snd, loud) {
    this.audioEffects.volume =
      this.toNumber(loud) *
      (this.toNumber(this.sprites["Loudness"].costume.name) * 0.01);
    if (1 === this.toNumber(snd) || 5 === this.toNumber(snd)) {
      yield* this.startSound("grass1.ogg");
    } else {
      if (
        2 === this.toNumber(snd) ||
        4 === this.toNumber(snd) || 7 === this.toNumber(snd)
      ) {
        yield* this.startSound("stone1.ogg");
      } else {
        if (3 === this.toNumber(snd)) {
          yield* this.startSound("gravel1.ogg");
        } else {
          if (8 === this.toNumber(snd)) {
            yield* this.startSound("glass3.ogg");
          } else {
            yield* this.startSound("wood1.ogg");
          }
        }
      }
    }
  }

  *renderworld() {
    yield* this.staticvalues();
    yield* this.background();
    if (this.toNumber(this.stage.vars.mode) === 1) {
      yield* this.y1();
    } else {
      yield* this.y2();
    }
    yield* this.shadow(
      this.stage.vars.camx,
      this.stage.vars.camy,
      this.stage.vars.camz
    );
    yield* this.pickaxe();
    this.penSize = 2;
    this.penColor = Color.rgb(255, 255, 255);
    this.penDown = false;
    this.goto(-5, 0);
    this.penDown = true;
    this.goto(5, 0);
    this.penDown = false;
    this.goto(0, 5);
    this.penDown = true;
    this.goto(0, -5);
    yield* this.water();
  }

  *dog(x1, y1, z1, x2, y2, z2) {
    yield* this.jointWithout(
      this.toNumber(x1) *
        Math.cos(this.degToRad(this.toNumber(this.vars.rotdog))) -
        this.toNumber(z1) *
          Math.sin(this.degToRad(this.toNumber(this.vars.rotdog))) +
        this.toNumber(this.stage.vars.dogx),
      this.toNumber(y1) + this.toNumber(this.stage.vars.dogy),
      this.toNumber(z1) *
        Math.cos(this.degToRad(this.toNumber(this.vars.rotdog))) +
        this.toNumber(x1) *
          Math.sin(this.degToRad(this.toNumber(this.vars.rotdog))) +
        this.toNumber(this.stage.vars.dogz),
      this.toNumber(x2) *
        Math.cos(this.degToRad(this.toNumber(this.vars.rotdog))) -
        this.toNumber(z2) *
          Math.sin(this.degToRad(this.toNumber(this.vars.rotdog))) +
        this.toNumber(this.stage.vars.dogx),
      this.toNumber(y2) + this.toNumber(this.stage.vars.dogy),
      this.toNumber(z2) *
        Math.cos(this.degToRad(this.toNumber(this.vars.rotdog))) +
        this.toNumber(x2) *
          Math.sin(this.degToRad(this.toNumber(this.vars.rotdog))) +
        this.toNumber(this.stage.vars.dogz)
    );
  }

  *randomizeworld() {
    this.vars.worldHeight = [];
    this.vars.trees = [];
    this.stage.vars.points3d = [];
    this.vars.cosy =
      this.toNumber(this.stage.vars.worldwidth) *
        this.toNumber(this.stage.vars.worldwidth) +
      (this.toNumber(this.stage.vars.worldheight) *
        (this.toNumber(this.stage.vars.worldwidth) *
          this.toNumber(this.stage.vars.worldwidth)) +
        this.toNumber(this.stage.vars.treesdensity) *
          ((this.toNumber(this.stage.vars.worldwidth) - 2) *
            (this.toNumber(this.stage.vars.worldwidth) - 2)) +
        (Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) - 1) +
        (Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) +
          Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) *
            Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10)));
    this.vars.cosx = 0;
    yield* this.fast1();
    this.vars.y1 = 0;
    yield* this.fast2();
    this.vars.y1 = 1;
    yield* this.fast3();
    this.vars.y1 = 0;
    for (let i = 0; i < this.toNumber(this.stage.vars.worldheight); i++) {
      this.vars.y1++;
      this.vars.x1 = 0;
      yield* this.fast4();
      yield;
    }
    yield* this.fast5();
    yield* this.fast6();
  }

  *ground() {
    this.vars.ground =
      this.random(0.2, -0.2) +
      (this.toNumber(
        this.itemOf(
          this.vars.worldHeight,
          (Math.floor(this.toNumber(this.vars.x1) / 10) + 1) *
            Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) +
            (Math.floor(this.toNumber(this.vars.z1) / 10) + 1) -
            1
        )
      ) *
        (((this.toNumber(this.vars.x1) / 10) % 1) +
          (1 - ((this.toNumber(this.vars.z1) / 10) % 1))) +
        this.toNumber(
          this.itemOf(
            this.vars.worldHeight,
            Math.floor(this.toNumber(this.vars.x1) / 10) *
              Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) +
              (Math.floor(this.toNumber(this.vars.z1) / 10) + 1) -
              1
          )
        ) *
          (2 -
            (((this.toNumber(this.vars.x1) / 10) % 1) +
              ((this.toNumber(this.vars.z1) / 10) % 1))) +
        (this.toNumber(
          this.itemOf(
            this.vars.worldHeight,
            Math.floor(this.toNumber(this.vars.x1) / 10) *
              Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) +
              (Math.floor(this.toNumber(this.vars.z1) / 10) + 2) -
              1
          )
        ) *
          (1 -
            ((this.toNumber(this.vars.x1) / 10) % 1) +
            ((this.toNumber(this.vars.z1) / 10) % 1)) +
          this.toNumber(
            this.itemOf(
              this.vars.worldHeight,
              (Math.floor(this.toNumber(this.vars.x1) / 10) + 1) *
                Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) +
                (Math.floor(this.toNumber(this.vars.z1) / 10) + 2) -
                1
            )
          ) *
            (((this.toNumber(this.vars.x1) / 10) % 1) +
              ((this.toNumber(this.vars.z1) / 10) % 1)))) /
        4;
  }

  *addtree(x, y, z, type) {
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) - 3) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      6
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) - 2) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      6
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) - 1) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      6
    );
    this.stage.vars.points3d.splice(
      (this.toNumber(y) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      6
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) + 1) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      6
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) + 2) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      6
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) + 3) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      6
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) + 4) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      6
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) + 5) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      5
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) + 6) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      5
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) + 5) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(z) -
        1,
      1,
      5
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) + 5) * this.toNumber(this.stage.vars.worldwidth) +
        this.toNumber(x)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 2) -
        1,
      1,
      5
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) + 5) * this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(x) + 1)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      5
    );
    this.stage.vars.points3d.splice(
      ((this.toNumber(y) + 5) * this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(x) - 1)) *
        this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1) -
        1,
      1,
      5
    );
    if (this.toNumber(type) === 2) {
      this.stage.vars.points3d.splice(
        ((this.toNumber(y) + 5) * this.toNumber(this.stage.vars.worldwidth) +
          (this.toNumber(x) - 1)) *
          this.toNumber(this.stage.vars.worldwidth) +
          this.toNumber(z) -
          1,
        1,
        5
      );
      this.stage.vars.points3d.splice(
        ((this.toNumber(y) + 5) * this.toNumber(this.stage.vars.worldwidth) +
          (this.toNumber(x) - 1)) *
          this.toNumber(this.stage.vars.worldwidth) +
          (this.toNumber(z) + 2) -
          1,
        1,
        5
      );
      this.stage.vars.points3d.splice(
        ((this.toNumber(y) + 5) * this.toNumber(this.stage.vars.worldwidth) +
          (this.toNumber(x) + 1)) *
          this.toNumber(this.stage.vars.worldwidth) +
          this.toNumber(z) -
          1,
        1,
        5
      );
      this.stage.vars.points3d.splice(
        ((this.toNumber(y) + 5) * this.toNumber(this.stage.vars.worldwidth) +
          (this.toNumber(x) + 1)) *
          this.toNumber(this.stage.vars.worldwidth) +
          (this.toNumber(z) + 2) -
          1,
        1,
        5
      );
    }
  }

  *pickaxeRender(x, y, z) {
    yield* this.pickaxeXyz(
      this.toNumber(this.vars.pickaxex) + this.toNumber(x),
      this.toNumber(this.vars.pickaxey) + this.toNumber(y),
      this.toNumber(this.vars.pickaxez) + this.toNumber(z)
    );
  }

  *water() {
    if (this.toNumber(this.stage.vars.waterOn) === 1) {
      this.penSize = 1;
      this.penColor = Color.num(
        (9830400 +
          Math.round(this.toNumber(this.stage.vars.diffusionLighting) * 100)) *
          256 +
          Math.round(this.toNumber(this.stage.vars.diffusionLighting) * 255)
      );
      this.penDown = false;
      if (this.compare(0, this.vars.waterscreen) > 0) {
        this.goto(-240, 90);
      } else {
        this.goto(
          -240,
          this.toNumber(this.vars.waterscreen) *
            (-5 * this.toNumber(this.stage.vars.fov)) +
            90
        );
      }
      this.penDown = true;
      this.penSize = 180;
      this.x = 240;
      this.penDown = false;
      if (this.compare(0, this.vars.waterscreen) > 0) {
        this.goto(-240, -90);
      } else {
        this.goto(
          -240,
          this.toNumber(this.vars.waterscreen) *
            (-5 * this.toNumber(this.stage.vars.fov)) -
            90
        );
      }
      this.penSize = 1;
      this.penDown = true;
      this.penSize = 180;
      this.x = 240;
    }
  }

  *rotatey(x, y, z) {
    yield* this.rotatex(
      this.toNumber(x) * this.toNumber(this.vars.cosy) -
        this.toNumber(z) * this.toNumber(this.vars.siny),
      y,
      this.toNumber(z) * this.toNumber(this.vars.cosy) +
        this.toNumber(x) * this.toNumber(this.vars.siny)
    );
  }

  *_3dOnScreen(x, y, z) {
    if (this.toNumber(this.vars.operation) === 1) {
      yield* this.jointCalculatedDots(
        this.vars.x,
        this.vars.y,
        this.vars.z,
        x,
        y,
        z
      );
    } else {
      if (this.compare(this.vars.operation, 1) < 0) {
        if (this.toNumber(this.vars.operation) === 0) {
          this.vars.x = x;
          this.vars.y = y;
          this.vars.z = z;
        } else {
          if (this.toNumber(this.vars.operation) === -1) {
            this.vars.x4 = x;
            this.vars.y4 = y;
            this.vars.z4 = z;
          } else {
            if (this.toNumber(this.vars.operation) === -2) {
              this.vars.xx = x;
              this.vars.yy = y;
              this.vars.zz = z;
            } else {
              this.penColor = Color.num(
                Math.floor(
                  (this.toNumber(this.vars.alpha) * 256 +
                    Math.floor(
                      this.toNumber(this.vars.red) *
                        this.toNumber(this.vars.light)
                    )) *
                    256 +
                    this.toNumber(this.vars.green) *
                      this.toNumber(this.vars.light)
                ) *
                  256 +
                  this.toNumber(this.vars.blue) * this.toNumber(this.vars.light)
              );
              this.vars.x1 = this.vars.x;
              this.vars.y1 = this.vars.y;
              this.vars.z1 = this.vars.z;
              this.vars.x2 = this.vars.x4;
              this.vars.y2 = this.vars.y4;
              this.vars.z2 = this.vars.z4;
              this.vars.x3 = x;
              this.vars.y3 = y;
              this.vars.z3 = z;
              yield* this.drawTriangle(0);
              this.vars.x1 = x;
              this.vars.y1 = y;
              this.vars.z1 = z;
              this.vars.x2 = this.vars.x4;
              this.vars.y2 = this.vars.y4;
              this.vars.z2 = this.vars.z4;
              this.vars.x3 = this.vars.xx;
              this.vars.y3 = this.vars.yy;
              this.vars.z3 = this.vars.zz;
              yield* this.drawTriangle(0);
            }
          }
        }
      } else {
        if (this.toNumber(this.vars.operation) === 2) {
          this.penDown = false;
          this.penSize = 201;
          if (
            this.compare(
              90,
              this.toNumber(y) *
                (this.toNumber(this.stage.vars.fov) / this.toNumber(z)) -
                100
            ) < 0
          ) {
            this.goto(-240, 90);
          } else {
            this.goto(
              -240,
              this.toNumber(y) *
                (this.toNumber(this.stage.vars.fov) / this.toNumber(z)) -
                100
            );
          }
          this.penDown = true;
          this.x = 240;
          this.y -= 200;
          this.x = -240;
        } else {
          if (this.toNumber(this.vars.operation) === 3) {
            if (this.compare(0.1, z) < 0) {
              this.penDown = false;
              this.goto(
                this.toNumber(x) *
                  (this.toNumber(this.stage.vars.fov) / this.toNumber(z)),
                this.toNumber(y) *
                  (this.toNumber(this.stage.vars.fov) / this.toNumber(z))
              );
              this.penColor = Color.num(Math.round(16777190));
              this.penSize =
                40 * (this.toNumber(this.stage.vars.fov) / this.toNumber(z));
              this.penDown = true;
              this.penColor = Color.num(Math.round(1694498815));
              this.penSize =
                70 * (this.toNumber(this.stage.vars.fov) / this.toNumber(z));
              this.penDown = false;
              this.goto(this.x * 1.02, this.y * 1.02);
              this.penDown = true;
            }
          } else {
            if (this.compare(0.1, z) < 0) {
              this.penDown = false;
              this.penSize =
                50 * (this.toNumber(this.stage.vars.fov) / this.toNumber(z));
              this.goto(
                this.toNumber(x) *
                  (this.toNumber(this.stage.vars.fov) / this.toNumber(z)),
                this.toNumber(y) *
                  (this.toNumber(this.stage.vars.fov) / this.toNumber(z))
              );
              this.penDown = true;
            }
          }
        }
      }
    }
  }

  *staticvalues() {
    this.vars.sinx = Math.sin(this.degToRad(this.toNumber(this.vars.rotx)));
    this.vars.siny = Math.sin(this.degToRad(this.toNumber(this.vars.roty)));
    this.vars.cosx = Math.cos(this.degToRad(this.toNumber(this.vars.rotx)));
    this.vars.cosy = Math.cos(this.degToRad(this.toNumber(this.vars.roty)));
    this.vars.scx = this.toNumber(this.stage.vars.camx) % 50;
    this.vars.scy = this.toNumber(this.stage.vars.camy) % 50;
    this.vars.scz = this.toNumber(this.stage.vars.camz) % 50;
    this.vars.grx = Math.floor(this.toNumber(this.stage.vars.camx) / 50);
    this.vars.gry = Math.floor(this.toNumber(this.stage.vars.camy) / 50);
    this.vars.grz = Math.floor(this.toNumber(this.stage.vars.camz) / 50);
    this.stage.vars.sunDirection +=
      this.toNumber(this.stage.vars.daynightcycle) * 0.05;
    this.vars.sunX = Math.sin(
      this.degToRad(this.toNumber(this.stage.vars.sunDirection))
    );
    this.vars.sunY = Math.cos(
      this.degToRad(this.toNumber(this.stage.vars.sunDirection))
    );
    if (this.compare(this.vars.sunY, 0) < 0) {
      this.stage.vars.diffusionLighting = 0.2;
    } else {
      this.stage.vars.diffusionLighting =
        this.toNumber(this.vars.sunY) * 0.8 + 0.2;
    }
  }

  *loading() {
    this.vars.cosx++;
    this.stage.vars.loading =
      "LOADING " +
      (this.toString(
        Math.round(
          100 * (this.toNumber(this.vars.cosx) / this.toNumber(this.vars.cosy))
        )
      ) +
        "%");
  }

  *fast5() {
    for (
      let i = 0;
      i <
      this.toNumber(this.stage.vars.treesdensity) *
        ((this.toNumber(this.stage.vars.worldwidth) - 2) *
          (this.toNumber(this.stage.vars.worldwidth) - 2));
      i++
    ) {
      this.vars.x1 = this.random(
        2,
        this.toNumber(this.stage.vars.worldwidth) - 1
      );
      this.vars.z1 = this.random(
        2,
        this.toNumber(this.stage.vars.worldwidth) - 1
      );
      while (
        !(
          !this.arrayIncludes(
            this.vars.trees,
            this.toNumber(this.vars.x1) *
              this.toNumber(this.stage.vars.worldwidth) +
              this.toNumber(this.vars.z1)
          ) &&
          !this.arrayIncludes(
            this.vars.trees,
            (this.toNumber(this.vars.x1) + 1) *
              this.toNumber(this.stage.vars.worldwidth) +
              this.toNumber(this.vars.z1)
          ) &&
            !this.arrayIncludes(
              this.vars.trees,
              this.toNumber(this.vars.x1) *
                this.toNumber(this.stage.vars.worldwidth) +
                (this.toNumber(this.vars.z1) + 1)
            ) &&
            !this.arrayIncludes(
              this.vars.trees,
              (this.toNumber(this.vars.x1) - 1) *
                this.toNumber(this.stage.vars.worldwidth) +
                this.toNumber(this.vars.z1)
            ) &&
              !this.arrayIncludes(
                this.vars.trees,
                this.toNumber(this.vars.x1) *
                  this.toNumber(this.stage.vars.worldwidth) +
                  (this.toNumber(this.vars.z1) - 1)
              )
        )
      ) {
        this.vars.x1 = this.random(
          2,
          this.toNumber(this.stage.vars.worldwidth) - 1
        );
        this.vars.z1 = this.random(
          2,
          this.toNumber(this.stage.vars.worldwidth) - 1
        );
        yield;
      }
      this.vars.trees.push(
        this.toNumber(this.vars.x1) *
          this.toNumber(this.stage.vars.worldwidth) +
          this.toNumber(this.vars.z1)
      );
      yield* this.ground();
      if (
        this.compare(
          this.vars.ground,
          this.toNumber(this.stage.vars.worldheight) / 2 - 0.5
        ) > 0
      ) {
        yield* this.addtree(
          this.vars.x1,
          Math.round(this.toNumber(this.vars.ground)),
          this.vars.z1,
          this.random(1, 2)
        );
      }
      yield* this.loading();
      yield;
    }
    for (let i = 0; i < 40; i++) {
      yield* this.control();
      yield;
    }
  }

  *fast1() {
    for (
      let i = 0;
      i <
      Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) *
        Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10);
      i++
    ) {
      this.vars.worldHeight.push(
        0.5 * this.toNumber(this.stage.vars.worldheight) + this.random(3, -2)
      );
      yield* this.loading();
      yield;
    }
  }

  *fast2() {
    for (
      let i = 0;
      i < Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10);
      i++
    ) {
      this.vars.y1++;
      this.vars.worldHeight.splice(
        this.toNumber(this.vars.y1) *
          Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10),
        1,
        0.5 * this.toNumber(this.stage.vars.worldheight) + this.random(-5, -6)
      );
      this.vars.worldHeight.splice(
        1 +
          Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) +
          this.toNumber(this.vars.y1) *
            Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) -
          1,
        1,
        0.5 * this.toNumber(this.stage.vars.worldheight) + this.random(-5, -6)
      );
      yield* this.loading();
      yield;
    }
  }

  *block2(x, y, z) {
    this.vars.operation = 0;
    yield* this._3dTo2d(
      this.toNumber(x) + 25,
      this.toNumber(y) + 25,
      this.toNumber(z) + 25
    );
    if (this.compare(-20, this.vars.z) < 0) {
      yield* this.worldelementcam(x, y, z);
      this.vars.shade =
        this.toNumber(this.stage.vars.diffusionLighting) *
        (200000 /
          (200000 +
            (this.toNumber(this.vars.x) * this.toNumber(this.vars.x) +
              this.toNumber(this.vars.y) * this.toNumber(this.vars.y) +
              this.toNumber(this.vars.z) * this.toNumber(this.vars.z))));
      if (0 === this.toNumber(this.vars.worldelement)) {
        if (this.compare(this.vars.dogpos, this.vars.id) === 0) {
          yield* this.renderDog();
        }
        if (
          this.toNumber(this.stage.vars.waterOn) === 1 &&
          this.compare(
            Math.round(this.toNumber(y) / 50 + this.toNumber(this.vars.gry)),
            Math.round(this.toNumber(this.stage.vars.worldheight) / 2 - 3)
          ) === 0
        ) {
          this.vars.light = this.vars.shade;
          this.vars.red = 0;
          this.vars.green = 100;
          this.vars.blue = 255;
          this.vars.alpha = 100;
          yield* this.renderFace(
            x,
            this.toNumber(y) +
              (35 +
                3 *
                  Math.sin(
                    this.degToRad(
                      this.toNumber(this.vars.wateranimation) +
                        (this.toNumber(x) / 50 + this.toNumber(this.vars.grx)) *
                          90
                    )
                  )),
            z,
            this.toNumber(x) + 50,
            this.toNumber(y) +
              (35 +
                3 *
                  Math.cos(
                    this.degToRad(
                      this.toNumber(this.vars.wateranimation) +
                        (this.toNumber(x) / 50 + this.toNumber(this.vars.grx)) *
                          90
                    )
                  )),
            z,
            this.toNumber(x) + 50,
            this.toNumber(y) +
              (35 +
                3 *
                  Math.cos(
                    this.degToRad(
                      this.toNumber(this.vars.wateranimation) +
                        (this.toNumber(x) / 50 + this.toNumber(this.vars.grx)) *
                          90
                    )
                  )),
            this.toNumber(z) + 50,
            x,
            this.toNumber(y) +
              (35 +
                3 *
                  Math.sin(
                    this.degToRad(
                      this.toNumber(this.vars.wateranimation) +
                        (this.toNumber(x) / 50 + this.toNumber(this.vars.grx)) *
                          90
                    )
                  )),
            this.toNumber(z) + 50
          );
        }
      } else {
        yield* this.midColor();
        if (this.compare(x, this.vars.scx) > 0) {
          yield* this.worldelementcam(this.toNumber(x) - 50, y, z);
          if (0 === this.toNumber(this.vars.worldelement)) {
            this.vars.light = 0.75 * this.toNumber(this.vars.shade);
            yield* this.renderFace(
              x,
              y,
              z,
              x,
              y,
              this.toNumber(z) + 50,
              x,
              this.toNumber(y) + 50,
              this.toNumber(z) + 50,
              x,
              this.toNumber(y) + 50,
              z
            );
          }
        }
        if (this.compare(z, this.vars.scz) > 0) {
          yield* this.worldelementcam(x, y, this.toNumber(z) - 50);
          if (0 === this.toNumber(this.vars.worldelement)) {
            this.vars.light = 0.7 * this.toNumber(this.vars.shade);
            yield* this.renderFace(
              x,
              y,
              z,
              this.toNumber(x) + 50,
              y,
              z,
              this.toNumber(x) + 50,
              this.toNumber(y) + 50,
              z,
              x,
              this.toNumber(y) + 50,
              z
            );
          }
        }
        if (this.compare(this.toNumber(x) + 50, this.vars.scx) < 0) {
          yield* this.worldelementcam(this.toNumber(x) + 50, y, z);
          if (0 === this.toNumber(this.vars.worldelement)) {
            this.vars.light = 0.75 * this.toNumber(this.vars.shade);
            yield* this.renderFace(
              this.toNumber(x) + 50,
              y,
              z,
              this.toNumber(x) + 50,
              y,
              this.toNumber(z) + 50,
              this.toNumber(x) + 50,
              this.toNumber(y) + 50,
              this.toNumber(z) + 50,
              this.toNumber(x) + 50,
              this.toNumber(y) + 50,
              z
            );
          }
        }
        if (this.compare(this.toNumber(z) + 50, this.vars.scz) < 0) {
          yield* this.worldelementcam(x, y, this.toNumber(z) + 50);
          if (0 === this.toNumber(this.vars.worldelement)) {
            this.vars.light = 0.8 * this.toNumber(this.vars.shade);
            yield* this.renderFace(
              x,
              y,
              this.toNumber(z) + 50,
              this.toNumber(x) + 50,
              y,
              this.toNumber(z) + 50,
              this.toNumber(x) + 50,
              this.toNumber(y) + 50,
              this.toNumber(z) + 50,
              x,
              this.toNumber(y) + 50,
              this.toNumber(z) + 50
            );
          }
        }
        if (this.compare(y, this.vars.scy) > 0) {
          yield* this.worldelementcam(x, this.toNumber(y) - 50, z);
          if (0 === this.toNumber(this.vars.worldelement)) {
            this.vars.light = 0.6 * this.toNumber(this.vars.shade);
            yield* this.bottomColor();
            yield* this.renderFace(
              x,
              y,
              z,
              this.toNumber(x) + 50,
              y,
              z,
              this.toNumber(x) + 50,
              y,
              this.toNumber(z) + 50,
              x,
              y,
              this.toNumber(z) + 50
            );
          }
        }
        if (this.compare(this.toNumber(y) + 50, this.vars.scy) < 0) {
          yield* this.worldelementcam(x, this.toNumber(y) + 50, z);
          if (0 === this.toNumber(this.vars.worldelement)) {
            yield* this.getShadow(x, y, z);
            if (this.toNumber(this.vars.under) === 0) {
              this.vars.light = this.vars.shade;
            } else {
              this.vars.light = 0.75 * this.toNumber(this.vars.shade);
            }
            yield* this.topColor();
            yield* this.renderFace(
              x,
              this.toNumber(y) + 50,
              z,
              this.toNumber(x) + 50,
              this.toNumber(y) + 50,
              z,
              this.toNumber(x) + 50,
              this.toNumber(y) + 50,
              this.toNumber(z) + 50,
              x,
              this.toNumber(y) + 50,
              this.toNumber(z) + 50
            );
          }
        }
      }
    }
  }

  *jointCalculatedDots(x1, y1, z1, x2, y2, z2) {
    if (this.compare(5, z1) < 0 && this.compare(5, z2) < 0) {
      if (this.toNumber(this.vars.dog) === 1) {
        if (this.toNumber(this.stage.vars.dogcolor) === 1) {
          this.penColor = Color.rgb(0, 0, 0);
        } else {
          if (this.toNumber(this.stage.vars.dogcolor) === 2) {
            this.penColor = Color.rgb(153, 89, 0);
          } else {
            if (this.toNumber(this.stage.vars.dogcolor) === 3) {
              this.penColor = Color.rgb(213, 155, 29);
            } else {
              if (this.toNumber(this.stage.vars.dogcolor) === 4) {
                this.penColor = Color.rgb(220, 222, 219);
              } else {
                if (this.toNumber(this.stage.vars.dogcolor) === 5) {
                  this.penColor = Color.rgb(132, 115, 87);
                } else {
                  this.penColor = Color.rgb(255, 153, 229);
                }
              }
            }
          }
        }
        this.penSize =
          (this.toNumber(this.vars.light) *
            this.toNumber(this.stage.vars.fov)) /
          (30 + (this.toNumber(z1) + this.toNumber(z2)));
      } else {
        this.vars.shade =
          this.toNumber(this.stage.vars.diffusionLighting) *
          this.toNumber(this.vars.light) *
          (500 / (500 + (this.toNumber(z1) + this.toNumber(z2))));
        this.penColor = Color.num(
          Math.floor(
            Math.floor(
              this.toNumber(this.vars.red) * this.toNumber(this.vars.shade)
            ) *
              256 +
              this.toNumber(this.vars.green) * this.toNumber(this.vars.shade)
          ) *
            256 +
            this.toNumber(this.vars.blue) * this.toNumber(this.vars.shade)
        );
        this.penSize =
          (23 * this.toNumber(this.stage.vars.fov)) /
          (5 + (this.toNumber(z1) + this.toNumber(z2)));
      }
      this.penDown = false;
      this.goto(
        this.toNumber(x1) *
          (this.toNumber(this.stage.vars.fov) / this.toNumber(z1)),
        this.toNumber(y1) *
          (this.toNumber(this.stage.vars.fov) / this.toNumber(z1))
      );
      this.penDown = true;
      this.goto(
        this.toNumber(x2) *
          (this.toNumber(this.stage.vars.fov) / this.toNumber(z2)),
        this.toNumber(y2) *
          (this.toNumber(this.stage.vars.fov) / this.toNumber(z2))
      );
    } else {
      if (this.compare(5, z1) < 0) {
        this.vars.between =
          (this.toNumber(z1) - 5.01) / (this.toNumber(z1) - this.toNumber(z2));
        yield* this.jointCalculatedDots(
          x1,
          y1,
          z1,
          this.toNumber(x2) * this.toNumber(this.vars.between) +
            this.toNumber(x1) * (1 - this.toNumber(this.vars.between)),
          this.toNumber(y2) * this.toNumber(this.vars.between) +
            this.toNumber(y1) * (1 - this.toNumber(this.vars.between)),
          5.01
        );
      } else {
        if (this.compare(5, z2) < 0) {
          this.vars.between =
            (this.toNumber(z2) - 5.01) /
            (this.toNumber(z2) - this.toNumber(z1));
          yield* this.jointCalculatedDots(
            this.toNumber(x1) * this.toNumber(this.vars.between) +
              this.toNumber(x2) * (1 - this.toNumber(this.vars.between)),
            this.toNumber(y1) * this.toNumber(this.vars.between) +
              this.toNumber(y2) * (1 - this.toNumber(this.vars.between)),
            5.01,
            x2,
            y2,
            z2
          );
        }
      }
    }
  }

  *_3dTo2d(x, y, z) {
    yield* this.rotatey(
      this.toNumber(x) - this.toNumber(this.vars.scx),
      this.toNumber(y) - this.toNumber(this.vars.scy),
      this.toNumber(z) - this.toNumber(this.vars.scz)
    );
  }

  *pickaxeXyz(x, y, z) {
    this.penSize =
      (2 * this.toNumber(this.stage.vars.fov)) /
      (this.toNumber(z) + this.toNumber(this.vars.z));
    this.goto(
      this.toNumber(x) *
        (this.toNumber(this.stage.vars.fov) / this.toNumber(z)),
      this.toNumber(y) * (this.toNumber(this.stage.vars.fov) / this.toNumber(z))
    );
    this.vars.z = z;
  }

  *getelementid(x, y, z) {
    if (
      this.compare(
        Math.floor(
          (this.toNumber(this.stage.vars.camx) + this.toNumber(x)) / 50
        ),
        0
      ) < 0 ||
      this.compare(
        this.toNumber(this.stage.vars.worldwidth) - 1,
        Math.floor(
          (this.toNumber(this.stage.vars.camx) + this.toNumber(x)) / 50
        )
      ) < 0 ||
      this.compare(
        Math.floor(
          (this.toNumber(this.stage.vars.camy) + this.toNumber(y)) / 50
        ),
        0
      ) < 0 ||
        this.compare(
          this.toNumber(this.stage.vars.worldheight) - 1,
          Math.floor(
            (this.toNumber(this.stage.vars.camy) + this.toNumber(y)) / 50
          )
        ) < 0 ||
        this.compare(
          Math.floor(
            (this.toNumber(this.stage.vars.camz) + this.toNumber(z)) / 50
          ),
          0
        ) < 0 ||
          this.compare(
            this.toNumber(this.stage.vars.worldwidth) - 1,
            Math.floor(
              (this.toNumber(this.stage.vars.camz) + this.toNumber(z)) / 50
            )
          ) < 0
    ) {
      this.vars.worldelement = 0;
    } else {
      this.vars.worldelement =
        (Math.floor(
          (this.toNumber(this.stage.vars.camy) + this.toNumber(y)) / 50
        ) *
          this.toNumber(this.stage.vars.worldwidth) +
          Math.floor(
            (this.toNumber(this.stage.vars.camx) + this.toNumber(x)) / 50
          )) *
          this.toNumber(this.stage.vars.worldwidth) +
        (Math.floor(
          (this.toNumber(this.stage.vars.camz) + this.toNumber(z)) / 50
        ) +
          1);
    }
  }

  *worldid(x, y, z) {
    if (
      this.compare(Math.floor(this.toNumber(x) / 50), 0) < 0 ||
      this.compare(
        this.toNumber(this.stage.vars.worldwidth) - 1,
        Math.floor(this.toNumber(x) / 50)
      ) < 0 ||
      this.compare(Math.floor(this.toNumber(y) / 50), 0) < 0 ||
        this.compare(
          this.toNumber(this.stage.vars.worldheight) - 1,
          Math.floor(this.toNumber(y) / 50)
        ) < 0 ||
        this.compare(Math.floor(this.toNumber(z) / 50), 0) < 0 ||
          this.compare(
            this.toNumber(this.stage.vars.worldwidth) - 1,
            Math.floor(this.toNumber(z) / 50)
          ) < 0
    ) {
      this.vars.worldelement = 0;
    } else {
      this.vars.worldelement =
        (Math.floor(this.toNumber(y) / 50) *
          this.toNumber(this.stage.vars.worldwidth) +
          Math.floor(this.toNumber(x) / 50)) *
          this.toNumber(this.stage.vars.worldwidth) +
        (Math.floor(this.toNumber(z) / 50) + 1);
    }
  }

  *renderFace(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) {
    this.vars.operation = 0;
    yield* this._3dTo2d(x1, y1, z1);
    this.vars.operation = -1;
    yield* this._3dTo2d(x2, y2, z2);
    this.vars.operation = -2;
    yield* this._3dTo2d(x3, y3, z3);
    this.vars.operation = -3;
    yield* this._3dTo2d(x4, y4, z4);
  }

  *rotatex(x, y, z) {
    yield* this._3dOnScreen(
      x,
      this.toNumber(y) * this.toNumber(this.vars.cosx) -
        this.toNumber(z) * this.toNumber(this.vars.sinx),
      this.toNumber(z) * this.toNumber(this.vars.cosx) +
        this.toNumber(y) * this.toNumber(this.vars.sinx)
    );
  }

  *jointWithout(x1, y1, z1, x2, y2, z2) {
    this.vars.operation = 0;
    yield* this.rotatey(
      this.toNumber(x1) - this.toNumber(this.stage.vars.camx),
      this.toNumber(y1) - this.toNumber(this.stage.vars.camy),
      this.toNumber(z1) - this.toNumber(this.stage.vars.camz)
    );
    this.vars.operation = 1;
    yield* this.rotatey(
      this.toNumber(x2) - this.toNumber(this.stage.vars.camx),
      this.toNumber(y2) - this.toNumber(this.stage.vars.camy),
      this.toNumber(z2) - this.toNumber(this.stage.vars.camz)
    );
  }

  *joint3dDots(x1, y1, z1, x2, y2, z2) {
    this.vars.operation = 0;
    yield* this._3dTo2d(x1, y1, z1);
    this.vars.operation = 1;
    yield* this._3dTo2d(x2, y2, z2);
  }

  *renderDog() {
    this.vars.tail += 20;
    this.vars.dog = 1;
    this.vars.light = 50;
    yield* this.dog(0, 10, 20, 0, 7, 25);
    this.vars.light = 45;
    yield* this.dog(0, 0, 20, 0, 0, -20);
    this.vars.light = 25;
    yield* this.dog(5, 0, -20, 8, -20, -20);
    yield* this.dog(-5, 0, -20, -8, -20, -20);
    yield* this.dog(5, 0, 20, 8, -20, 20);
    yield* this.dog(-5, 0, 20, -8, -20, 20);
    this.vars.light = 15;
    yield* this.dog(
      0,
      5,
      -20,
      (15 - this.toNumber(this.vars.dogGround)) *
        Math.sin(this.degToRad(this.toNumber(this.vars.tail))),
      10,
      -40
    );
    this.vars.dog = 0;
  }

  *flat3d(x, y, z) {
    if (this.toNumber(this.vars.operation) === 0) {
      this.vars.x = x;
      this.vars.y = y;
      this.vars.z = z;
    } else {
      if (this.toNumber(this.vars.operation) === -1) {
        this.vars.x4 = x;
        this.vars.y4 = y;
        this.vars.z4 = z;
      } else {
        if (this.toNumber(this.vars.operation) === -2) {
          this.vars.xx = x;
          this.vars.yy = y;
          this.vars.zz = z;
        } else {
          this.penColor = Color.num(
            Math.floor(
              (this.toNumber(this.vars.alpha) * 256 +
                Math.floor(
                  this.toNumber(this.vars.red) * this.toNumber(this.vars.light)
                )) *
                256 +
                this.toNumber(this.vars.green) * this.toNumber(this.vars.light)
            ) *
              256 +
              this.toNumber(this.vars.blue) * this.toNumber(this.vars.light)
          );
          this.vars.x1 = this.vars.x;
          this.vars.y1 = this.vars.y;
          this.vars.z1 = this.vars.z;
          this.vars.x2 = this.vars.x4;
          this.vars.y2 = this.vars.y4;
          this.vars.z2 = this.vars.z4;
          this.vars.x3 = x;
          this.vars.y3 = y;
          this.vars.z3 = z;
          yield* this.drawTriangle(!0);
          this.vars.x1 = x;
          this.vars.y1 = y;
          this.vars.z1 = z;
          this.vars.x2 = this.vars.x4;
          this.vars.y2 = this.vars.y4;
          this.vars.z2 = this.vars.z4;
          this.vars.x3 = this.vars.xx;
          this.vars.y3 = this.vars.yy;
          this.vars.z3 = this.vars.zz;
          yield* this.drawTriangle(!0);
        }
      }
    }
  }

  *intersect() {
    if (this.compare(this.vars.pickaxemovement, 0) < 0) {
      if (this.toNumber(this.stage.vars.mousecontrol) === 1) {
        if (this.mouse.down) {
          this.vars.pickaxemovement = 0.5;
          this.vars.pickaxeforward = 0.5;
        }
      } else {
        if (this.keyPressed("m")) {
          this.vars.pickaxemovement = 0.5;
          this.vars.pickaxeforward = 0.5;
        }
      }
    } else {
      if (this.compare(this.vars.pickaxemovement, 2) > 0) {
        this.vars.pickaxeforward = -0.5;
        this.vars.pickaxemovement = 2;
        this.vars.x = this.stage.vars.camx;
        this.vars.y = this.stage.vars.camy;
        this.vars.z = this.stage.vars.camz;
        this.vars.xvel =
          this.toNumber(this.vars.siny) * this.toNumber(this.vars.cosx);
        this.vars.yvel = this.vars.sinx;
        this.vars.zvel =
          this.toNumber(this.vars.cosy) * this.toNumber(this.vars.cosx);
        this.vars.worldelement = 0;
        while (
          !(
            this.compare(
              0,
              this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1)
            ) < 0 ||
            this.compare(
              12000 +
                15000 *
                  this.toNumber(
                    this.compare(1, this.sprites["Sprite3"].costumeNumber) < 0
                  ),
              (this.toNumber(this.stage.vars.camx) -
                this.toNumber(this.vars.x)) *
                (this.toNumber(this.stage.vars.camx) -
                  this.toNumber(this.vars.x)) +
                ((this.toNumber(this.stage.vars.camy) -
                  this.toNumber(this.vars.y)) *
                  (this.toNumber(this.stage.vars.camy) -
                    this.toNumber(this.vars.y)) +
                  (this.toNumber(this.stage.vars.camz) -
                    this.toNumber(this.vars.z)) *
                    (this.toNumber(this.stage.vars.camz) -
                      this.toNumber(this.vars.z)))
            ) < 0
          )
        ) {
          if (this.compare(0, this.vars.xvel) > 0) {
            this.vars.x1 =
              (-0.001 - (this.toNumber(this.vars.x) % 50)) /
              this.toNumber(this.vars.xvel);
          } else {
            this.vars.x1 =
              (50 - (this.toNumber(this.vars.x) % 50)) /
              this.toNumber(this.vars.xvel);
          }
          if (this.compare(0, this.vars.yvel) > 0) {
            this.vars.y1 =
              (-0.001 - (this.toNumber(this.vars.y) % 50)) /
              this.toNumber(this.vars.yvel);
          } else {
            this.vars.y1 =
              (50 - (this.toNumber(this.vars.y) % 50)) /
              this.toNumber(this.vars.yvel);
          }
          if (this.compare(0, this.vars.zvel) > 0) {
            this.vars.z1 =
              (-0.001 - (this.toNumber(this.vars.z) % 50)) /
              this.toNumber(this.vars.zvel);
          } else {
            this.vars.z1 =
              (50 - (this.toNumber(this.vars.z) % 50)) /
              this.toNumber(this.vars.zvel);
          }
          if (
            this.compare(this.vars.x1, this.vars.y1) < 0 &&
            this.compare(this.vars.x1, this.vars.z1) < 0
          ) {
            this.vars.between = this.vars.x1;
          } else {
            if (
              this.compare(this.vars.y1, this.vars.x1) < 0 &&
              this.compare(this.vars.y1, this.vars.z1) < 0
            ) {
              this.vars.between = this.vars.y1;
            } else {
              this.vars.between = this.vars.z1;
            }
          }
          this.vars.x +=
            this.toNumber(this.vars.xvel) * this.toNumber(this.vars.between);
          this.vars.y +=
            this.toNumber(this.vars.yvel) * this.toNumber(this.vars.between);
          this.vars.z +=
            this.toNumber(this.vars.zvel) * this.toNumber(this.vars.between);
          yield* this.worldid(this.vars.x, this.vars.y, this.vars.z);
          yield;
        }
        if (
          this.compare(
            0,
            this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1)
          ) < 0
        ) {
          if (this.sprites["Sprite3"].costumeNumber === 1) {
            this.stage.vars.backpack.splice(
              this.itemOf(
                this.stage.vars.points3d,
                this.vars.worldelement - 1
              ) - 1,
              1,
              this.toNumber(
                this.itemOf(
                  this.stage.vars.backpack,
                  this.itemOf(
                    this.stage.vars.points3d,
                    this.vars.worldelement - 1
                  ) - 1
                )
              ) + 1
            );
            yield* this.groundsound(
              this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1),
              100
            );
            this.stage.vars.points3d.splice(this.vars.worldelement - 1, 1, 0);
            this.stage.vars.displayblock = this.itemOf(
              this.stage.vars.backpack,
              this.sprites["Sprite3"].costumeNumber - 2
            );
          } else {
            if (
              this.compare(
                0,
                this.itemOf(
                  this.stage.vars.backpack,
                  this.sprites["Sprite3"].costumeNumber - 2
                )
              ) < 0
            ) {
              this.vars.x +=
                0 -
                this.toNumber(this.vars.xvel) *
                  this.toNumber(this.vars.between);
              this.vars.y +=
                0 -
                this.toNumber(this.vars.yvel) *
                  this.toNumber(this.vars.between);
              this.vars.z +=
                0 -
                this.toNumber(this.vars.zvel) *
                  this.toNumber(this.vars.between);
              yield* this.worldid(this.vars.x, this.vars.y, this.vars.z);
              this.vars.between = this.vars.worldelement;
              yield* this.worldid(
                this.stage.vars.camx,
                this.stage.vars.camy,
                this.stage.vars.camz
              );
              if (
                !(
                  this.compare(this.vars.between, this.vars.worldelement) === 0
                ) &&
                !(this.compare(this.vars.dogpos, this.vars.between) === 0)
              ) {
                yield* this.worldid(
                  this.stage.vars.camx,
                  this.toNumber(this.stage.vars.camy) - 50,
                  this.stage.vars.camz
                );
                if (
                  !(
                    this.compare(this.vars.between, this.vars.worldelement) ===
                    0
                  )
                ) {
                  this.stage.vars.points3d.splice(
                    this.vars.between - 1,
                    1,
                    this.sprites["Sprite3"].costumeNumber - 1
                  );
                  this.stage.vars.backpack.splice(
                    this.sprites["Sprite3"].costumeNumber - 2,
                    1,
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars.backpack,
                        this.sprites["Sprite3"].costumeNumber - 2
                      )
                    ) - 1
                  );
                  this.stage.vars.displayblock = this.itemOf(
                    this.stage.vars.backpack,
                    this.sprites["Sprite3"].costumeNumber - 2
                  );
                  yield* this.groundsound(
                    this.sprites["Sprite3"].costumeNumber - 1,
                    100
                  );
                  this.broadcast("check");
                }
              }
            }
          }
          yield* this.updateRow(
            this.toNumber(this.vars.x) / 50,
            this.toNumber(this.vars.z) / 50
          );
        }
      } else {
        this.vars.pickaxemovement += this.toNumber(this.vars.pickaxeforward);
      }
    }
  }

  *fast3() {
    for (
      let i = 0;
      i < Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) - 1;
      i++
    ) {
      this.vars.y1++;
      this.vars.worldHeight.splice(
        this.toNumber(this.vars.y1),
        1,
        0.5 * this.toNumber(this.stage.vars.worldheight) + this.random(-5, -6)
      );
      this.vars.worldHeight.splice(
        1 +
          Math.ceil(this.toNumber(this.stage.vars.worldwidth) / 10) +
          this.toNumber(this.vars.y1) -
          1,
        1,
        0.5 * this.toNumber(this.stage.vars.worldheight) + this.random(-5, -6)
      );
      yield* this.loading();
      yield;
    }
  }

  *background() {
    this.penSize = 181;
    /* TODO: Implement pen_setPenHueToNumber */ null;
    /* TODO: Implement pen_setPenShadeToNumber */ null;
    this.penDown = false;
    this.goto(-240, 90);
    this.penDown = true;
    this.goto(240, 90);
    this.penDown = false;
    this.goto(-240, -90);
    this.penDown = true;
    this.goto(240, -90);
    this.vars.operation = 3;
    yield* this.rotatey(
      this.toNumber(this.vars.sunX) * 150,
      this.toNumber(this.vars.sunY) * 150,
      50
    );
    /* TODO: Implement pen_setPenHueToNumber */ null;
    /* TODO: Implement pen_setPenShadeToNumber */ null;
    this.vars.operation = 2;
    yield* this.rotatex(0, 0, 1);
    yield* this.worldid(
      this.stage.vars.dogx,
      this.stage.vars.dogy,
      this.stage.vars.dogz
    );
    this.vars.dogpos = this.vars.worldelement;
  }

  *getShadow(x, y, z) {
    if (
      this.compare(
        this.toNumber(y) / 50 + this.toNumber(this.vars.gry),
        this.itemOf(
          this.vars.shadow,
          Math.round(this.toNumber(x) / 50 + this.toNumber(this.vars.grx)) *
            this.toNumber(this.stage.vars.worldwidth) +
            (Math.round(this.toNumber(z) / 50 + this.toNumber(this.vars.grz)) +
              1) -
            1
        )
      ) < 0
    ) {
      this.vars.under = 1;
    } else {
      this.vars.under = 0;
    }
  }

  *bottomColor() {
    if (this.toNumber(this.vars.blocktype) === 6) {
      this.vars.red = 150;
      this.vars.green = 100;
      this.vars.blue = 50;
    }
  }

  *fast6() {
    this.vars.shadow = [];
    this.vars.x1 = 0;
    for (let i = 0; i < this.toNumber(this.stage.vars.worldwidth); i++) {
      this.vars.z1 = 0;
      for (let i = 0; i < this.toNumber(this.stage.vars.worldwidth); i++) {
        this.vars.y1 = this.stage.vars.worldheight;
        this.vars.worldelement = 0;
        while (
          !(
            this.compare(
              0,
              this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1)
            ) < 0 || this.compare(this.vars.y1, 1) < 0
          )
        ) {
          yield* this.shortWorldId(this.vars.x1, this.vars.y1, this.vars.z1);
          this.vars.y1--;
          yield;
        }
        this.vars.shadow.push(this.vars.y1);
        yield* this.loading();
        this.vars.z1++;
        yield;
      }
      this.vars.x1++;
      yield;
    }
  }

  *updateRow(x, z) {
    this.vars.y1 = this.stage.vars.worldheight;
    this.vars.worldelement = 0;
    while (
      !(
        this.compare(
          0,
          this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1)
        ) < 0 || this.compare(this.vars.y1, 1) < 0
      )
    ) {
      yield* this.shortWorldId(
        Math.floor(this.toNumber(x)),
        this.vars.y1,
        Math.floor(this.toNumber(z))
      );
      this.vars.y1--;
      yield;
    }
    this.vars.shadow.splice(
      Math.floor(this.toNumber(x)) * this.toNumber(this.stage.vars.worldwidth) +
        (Math.floor(this.toNumber(z)) + 1) -
        1,
      1,
      this.vars.y1
    );
  }

  *worldelementcam(x, y, z) {
    if (
      this.compare(
        Math.round(this.toNumber(y) / 50 + this.toNumber(this.vars.gry)),
        0
      ) < 0 ||
      this.compare(
        this.toNumber(this.stage.vars.worldheight) - 1,
        Math.round(this.toNumber(y) / 50 + this.toNumber(this.vars.gry))
      ) < 0 ||
      this.compare(
        Math.round(this.toNumber(x) / 50 + this.toNumber(this.vars.grx)),
        0
      ) < 0 ||
        this.compare(
          this.toNumber(this.stage.vars.worldwidth) - 1,
          Math.round(this.toNumber(x) / 50 + this.toNumber(this.vars.grx))
        ) < 0 ||
        this.compare(
          Math.round(this.toNumber(z) / 50 + this.toNumber(this.vars.grz)),
          0
        ) < 0 ||
          this.compare(
            this.toNumber(this.stage.vars.worldwidth) - 1,
            Math.round(this.toNumber(z) / 50 + this.toNumber(this.vars.grz))
          ) < 0
    ) {
      this.vars.worldelement = 0;
      this.vars.id = 0;
    } else {
      this.vars.worldelement =
        0 +
        this.toNumber(
          this.itemOf(
            this.stage.vars.points3d,
            (Math.round(this.toNumber(y) / 50 + this.toNumber(this.vars.gry)) *
              this.toNumber(this.stage.vars.worldwidth) +
              Math.round(
                this.toNumber(x) / 50 + this.toNumber(this.vars.grx)
              )) *
              this.toNumber(this.stage.vars.worldwidth) +
              (Math.round(
                this.toNumber(z) / 50 + this.toNumber(this.vars.grz)
              ) +
                1) -
              1
          )
        );
      this.vars.id =
        (Math.round(this.toNumber(y) / 50 + this.toNumber(this.vars.gry)) *
          this.toNumber(this.stage.vars.worldwidth) +
          Math.round(this.toNumber(x) / 50 + this.toNumber(this.vars.grx))) *
          this.toNumber(this.stage.vars.worldwidth) +
        (Math.round(this.toNumber(z) / 50 + this.toNumber(this.vars.grz)) + 1);
    }
  }

  *pickaxe() {
    this.vars.x1 = Math.sqrt(
      this.toNumber(this.vars.velx) * this.toNumber(this.vars.velx) +
        this.toNumber(this.vars.velz) * this.toNumber(this.vars.velz)
    );
    if (this.toNumber(this.stage.vars.waterOn) === 1) {
      if (
        this.compare(
          this.toNumber(this.stage.vars.camy) / 50,
          this.toNumber(this.stage.vars.worldheight) / 2 - 1.7
        ) < 0
      ) {
        this.vars.vely =
          0.8 +
          0.8 * this.toNumber(this.vars.vely) +
          (0.5 * this.toNumber(this.vars.x1) +
            this.toNumber(this.compare(this.vars.vely, 5) < 0) *
              (13 * this.toNumber(this.vars.broadcastjump)));
      }
      if (
        this.compare(
          this.toNumber(this.stage.vars.camy) / 50,
          this.toNumber(this.stage.vars.worldheight) / 2 - 0.8
        ) < 0
      ) {
        this.vars.velx = 0.8 * this.toNumber(this.vars.velx);
        this.vars.velz = 0.8 * this.toNumber(this.vars.velz);
        if (
          this.toNumber(this.vars.wateranimation) % 200 === 0 &&
          this.compare(1, this.vars.x1) < 0
        ) {
          this.audioEffects.volume = this.toNumber(
            this.sprites["Loudness"].costume.name
          );
          yield* this.startSound("water.ogg");
        }
      }
      if (
        this.compare(
          this.toNumber(this.stage.vars.dogy) / 50,
          this.toNumber(this.stage.vars.worldheight) / 2 - 2
        ) < 0
      ) {
        this.vars.dogvely =
          1.2 +
          this.toNumber(this.compare(this.vars.dogvely, 5) < 0) *
            (13 * this.toNumber(this.vars.broadcastJumpDog)) +
          0.8 * this.toNumber(this.vars.dogvely);
      }
      this.vars.waterscreen =
        ((this.toNumber(this.stage.vars.camy) / 50 -
          (Math.ceil(this.toNumber(this.stage.vars.worldheight) / 2 - 2) -
            0.45)) *
          2) /
        (0.5 + this.toNumber(this.vars.cosx));
    }
    if (
      this.compare(
        Math.cos(
          this.degToRad(
            5 * (this.toNumber(this.vars.walk) + this.toNumber(this.vars.x1))
          )
        ) * Math.cos(this.degToRad(5 * this.toNumber(this.vars.walk))),
        0
      ) < 0
    ) {
      if (this.compare(0, this.vars.ground) < 0) {
        yield* this.groundsound(this.vars.ground, 50);
      }
    }
    if (this.compare(0, this.vars.ground) < 0) {
      this.vars.walk += this.toNumber(this.vars.x1);
    } else {
      this.vars.walk = (this.toNumber(this.vars.x1) % 72) * 0.9;
    }
    this.vars.walkforce =
      this.toNumber(this.vars.walkforce) * 0.5 +
      this.toNumber(this.compare(0, this.vars.ground) < 0) *
        (0.05 * this.toNumber(this.vars.x1));
    this.vars.pickaxex =
      (this.toNumber(this.vars.pickaxex) -
        this.toNumber(this.vars.pickaxemovement) +
        0.05 *
          (this.toNumber(this.vars.roty) - this.toNumber(this.vars.hroty)) +
        this.toNumber(this.vars.walkforce) *
          Math.sin(this.degToRad(5 * this.toNumber(this.vars.walk)))) /
      2;
    this.vars.pickaxey =
      (this.toNumber(this.vars.pickaxey) -
        4 -
        0.1 * this.toNumber(this.vars.vely) * this.toNumber(this.vars.cosx) +
        (0.03 * this.toNumber(this.vars.rotx) -
          0.05 * this.toNumber(this.vars.hrotx)) +
        this.toNumber(this.vars.walkforce) *
          Math.abs(
            Math.cos(this.degToRad(5 * this.toNumber(this.vars.walk)))
          )) /
      2;
    this.vars.pickaxez =
      (this.toNumber(this.vars.pickaxez) +
        this.toNumber(this.vars.pickaxemovement) +
        -0.1 * this.toNumber(this.vars.vely) * this.toNumber(this.vars.sinx)) /
      2;
    yield* this.intersect();
    if (this.sprites["Sprite3"].costumeNumber === 1) {
      this.penColor = Color.rgb(95, 71, 0);
      this.penDown = false;
      this.vars.z = 100;
      yield* this.pickaxeRender(5, 4, 6);
      this.penDown = true;
      yield* this.pickaxeRender(5, -3, 4);
      this.penColor = Color.rgb(193, 196, 199);
      this.penDown = false;
      this.vars.z = 100;
      yield* this.pickaxeRender(6, 3, 4);
      this.penDown = true;
      yield* this.pickaxeRender(5, 4, 6);
      yield* this.pickaxeRender(4, 3, 8);
    } else {
      if (this.toNumber(this.stage.vars.mode) === 1) {
        this.vars.worldelement = this.sprites["Sprite3"].costumeNumber - 1;
        yield* this.midColor();
        this.vars.light =
          this.toNumber(this.stage.vars.diffusionLighting) * 0.8;
        this.penColor = Color.num(
          (Math.round(
            this.toNumber(this.vars.red) * this.toNumber(this.vars.light)
          ) *
            256 +
            Math.round(
              this.toNumber(this.vars.green) * this.toNumber(this.vars.light)
            )) *
            256 +
            Math.round(
              this.toNumber(this.vars.blue) * this.toNumber(this.vars.light)
            )
        );
        this.penDown = false;
        this.vars.z = 100;
        yield* this.pickaxeRender(2, 2, 6);
        this.penDown = true;
        yield* this.pickaxeRender(2, -1, 6);
        yield* this.pickaxeRender(2, -1, 3);
        this.vars.light =
          this.toNumber(this.stage.vars.diffusionLighting) * 0.9;
        this.penColor = Color.num(
          (Math.round(
            this.toNumber(this.vars.red) * this.toNumber(this.vars.light)
          ) *
            256 +
            Math.round(
              this.toNumber(this.vars.green) * this.toNumber(this.vars.light)
            )) *
            256 +
            Math.round(
              this.toNumber(this.vars.blue) * this.toNumber(this.vars.light)
            )
        );
        this.penDown = false;
        this.vars.z = 100;
        yield* this.pickaxeRender(5, 2, 3);
        this.penDown = true;
        yield* this.pickaxeRender(5, -1, 3);
        yield* this.pickaxeRender(2, -1, 3);
        yield* this.pickaxeRender(2, 2, 3);
        yield* this.topColor();
        this.vars.light = this.stage.vars.diffusionLighting;
        this.penColor = Color.num(
          (Math.round(
            this.toNumber(this.vars.red) * this.toNumber(this.vars.light)
          ) *
            256 +
            Math.round(
              this.toNumber(this.vars.green) * this.toNumber(this.vars.light)
            )) *
            256 +
            Math.round(
              this.toNumber(this.vars.blue) * this.toNumber(this.vars.light)
            )
        );
        yield* this.pickaxeRender(5, 2, 3);
        yield* this.pickaxeRender(5, 2, 6);
        yield* this.pickaxeRender(2, 2, 6);
        yield* this.pickaxeRender(2, 2, 3);
      } else {
        this.vars.worldelement = this.sprites["Sprite3"].costumeNumber - 1;
        yield* this.midColor();
        this.vars.light =
          this.toNumber(this.stage.vars.diffusionLighting) * 0.8;
        yield* this.faceFlat(2, -1, 3, 1.7, -1, 5.9, 1.7, 2, 5.9, 2, 2, 3);
        this.vars.light =
          this.toNumber(this.stage.vars.diffusionLighting) * 0.9;
        yield* this.faceFlat(2, -1, 3, 5.9, -1, 3.5, 5.9, 2, 3.5, 2, 2, 3);
        yield* this.topColor();
        this.vars.light = this.stage.vars.diffusionLighting;
        yield* this.faceFlat(5, 2, 6.1, 5.9, 2, 3.5, 2, 2, 3, 1.7, 2, 5.9);
      }
    }
  }

  *topColor() {
    if (this.toNumber(this.vars.blocktype) === 1) {
      this.vars.red = 0;
      this.vars.green = 120;
      this.vars.blue = 15;
    } else {
      if (this.toNumber(this.vars.blocktype) === 6) {
        this.vars.red = 150;
        this.vars.green = 100;
        this.vars.blue = 50;
      }
    }
  }

  *faceFlat(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) {
    this.vars.operation = 0;
    yield* this.flat3d(
      this.toNumber(x1) + this.toNumber(this.vars.pickaxex),
      this.toNumber(y1) + this.toNumber(this.vars.pickaxey),
      this.toNumber(z1) + this.toNumber(this.vars.pickaxez)
    );
    this.vars.operation = -1;
    yield* this.flat3d(
      this.toNumber(x2) + this.toNumber(this.vars.pickaxex),
      this.toNumber(y2) + this.toNumber(this.vars.pickaxey),
      this.toNumber(z2) + this.toNumber(this.vars.pickaxez)
    );
    this.vars.operation = -2;
    yield* this.flat3d(
      this.toNumber(x3) + this.toNumber(this.vars.pickaxex),
      this.toNumber(y3) + this.toNumber(this.vars.pickaxey),
      this.toNumber(z3) + this.toNumber(this.vars.pickaxez)
    );
    this.vars.operation = -3;
    yield* this.flat3d(
      this.toNumber(x4) + this.toNumber(this.vars.pickaxex),
      this.toNumber(y4) + this.toNumber(this.vars.pickaxey),
      this.toNumber(z4) + this.toNumber(this.vars.pickaxez)
    );
  }

  *shortWorldId(x, y, z) {
    if (
      this.compare(x, 0) < 0 ||
      this.compare(this.toNumber(this.stage.vars.worldwidth) - 1, x) < 0 ||
      this.compare(y, 0) < 0 ||
        this.compare(this.toNumber(this.stage.vars.worldheight) - 1, y) < 0 ||
        this.compare(z, 0) < 0 ||
          this.compare(this.toNumber(this.stage.vars.worldwidth) - 1, z) < 0
    ) {
      this.vars.worldelement = 0;
    } else {
      this.vars.worldelement =
        (this.toNumber(y) * this.toNumber(this.stage.vars.worldwidth) +
          this.toNumber(x)) *
          this.toNumber(this.stage.vars.worldwidth) +
        (this.toNumber(z) + 1);
    }
  }

  *worldelementplayer(x, y, z) {
    if (
      this.compare(
        Math.floor(
          (this.toNumber(this.stage.vars.camx) + this.toNumber(x)) / 50
        ),
        0
      ) < 0 ||
      this.compare(
        this.toNumber(this.stage.vars.worldwidth) - 1,
        Math.floor(
          (this.toNumber(this.stage.vars.camx) + this.toNumber(x)) / 50
        )
      ) < 0 ||
      this.compare(
        Math.floor(
          (this.toNumber(this.stage.vars.camy) + this.toNumber(y)) / 50
        ),
        0
      ) < 0 ||
        this.compare(
          this.toNumber(this.stage.vars.worldheight) - 1,
          Math.floor(
            (this.toNumber(this.stage.vars.camy) + this.toNumber(y)) / 50
          )
        ) < 0 ||
        this.compare(
          Math.floor(
            (this.toNumber(this.stage.vars.camz) + this.toNumber(z)) / 50
          ),
          0
        ) < 0 ||
          this.compare(
            this.toNumber(this.stage.vars.worldwidth) - 1,
            Math.floor(
              (this.toNumber(this.stage.vars.camz) + this.toNumber(z)) / 50
            )
          ) < 0
    ) {
      this.vars.worldelement = 0;
    } else {
      this.vars.worldelement =
        0 +
        this.toNumber(
          this.itemOf(
            this.stage.vars.points3d,
            (Math.floor(
              (this.toNumber(this.stage.vars.camy) + this.toNumber(y)) / 50
            ) *
              this.toNumber(this.stage.vars.worldwidth) +
              Math.floor(
                (this.toNumber(this.stage.vars.camx) + this.toNumber(x)) / 50
              )) *
              this.toNumber(this.stage.vars.worldwidth) +
              (Math.floor(
                (this.toNumber(this.stage.vars.camz) + this.toNumber(z)) / 50
              ) +
                1) -
              1
          )
        );
    }
  }

  *fast4() {
    for (let i = 0; i < this.toNumber(this.stage.vars.worldwidth); i++) {
      this.vars.z1 = 0;
      for (let i = 0; i < this.toNumber(this.stage.vars.worldwidth); i++) {
        yield* this.ground();
        if (
          this.compare(this.vars.y1, this.toNumber(this.vars.ground) - 2) < 0
        ) {
          if (this.random(1, 10) === 1) {
            this.stage.vars.points3d.push(this.random(7, 8));
          } else {
            this.stage.vars.points3d.push(this.random(2, 4));
          }
        } else {
          if (this.compare(this.vars.y1, this.vars.ground) < 0) {
            this.stage.vars.points3d.push(1);
          } else {
            this.stage.vars.points3d.push(0);
          }
        }
        this.vars.z1++;
        yield* this.loading();
        yield;
      }
      this.vars.x1++;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *block1(x, y, z) {
    this.vars.operation = 0;
    yield* this._3dTo2d(
      this.toNumber(x) + 25,
      this.toNumber(y) + 25,
      this.toNumber(z) + 25
    );
    if (this.compare(-10, this.vars.z) < 0) {
      yield* this.worldelementcam(x, y, z);
      if (0 === this.toNumber(this.vars.worldelement)) {
        if (this.compare(this.vars.dogpos, this.vars.id) === 0) {
          yield* this.renderDog();
        }
        if (
          this.toNumber(this.stage.vars.waterOn) === 1 &&
          this.compare(
            Math.round(this.toNumber(y) / 50 + this.toNumber(this.vars.gry)),
            Math.round(this.toNumber(this.stage.vars.worldheight) / 2 - 3)
          ) === 0
        ) {
          this.vars.light = 1;
          this.vars.red = 0;
          this.vars.green = 100;
          this.vars.blue = 255;
          yield* this.joint3dDots(
            this.toNumber(x) + 5,
            this.toNumber(y) +
              (35 +
                5 *
                  Math.cos(
                    this.degToRad(
                      this.toNumber(this.vars.wateranimation) -
                        (this.toNumber(x) / 50 + this.toNumber(this.vars.grx)) *
                          90
                    )
                  )),
            this.toNumber(z) + 5,
            this.toNumber(x) + 45,
            this.toNumber(y) +
              (35 +
                5 *
                  Math.sin(
                    this.degToRad(
                      this.toNumber(this.vars.wateranimation) -
                        (this.toNumber(x) / 50 + this.toNumber(this.vars.grx)) *
                          90
                    )
                  )),
            this.toNumber(z) + 45
          );
          yield* this.joint3dDots(
            this.toNumber(x) + 45,
            this.toNumber(y) +
              (35 +
                5 *
                  Math.sin(
                    this.degToRad(
                      this.toNumber(this.vars.wateranimation) -
                        (this.toNumber(x) / 50 + this.toNumber(this.vars.grx)) *
                          90
                    )
                  )),
            this.toNumber(z) + 5,
            this.toNumber(x) + 5,
            this.toNumber(y) +
              (35 +
                5 *
                  Math.cos(
                    this.degToRad(
                      this.toNumber(this.vars.wateranimation) -
                        (this.toNumber(x) / 50 + this.toNumber(this.vars.grx)) *
                          90
                    )
                  )),
            this.toNumber(z) + 45
          );
        }
      } else {
        this.vars.blocktype = this.vars.worldelement;
        this.vars.light = 0.8;
        yield* this.midColor();
        this.vars.l2 = 0;
        this.vars.f2 = 0;
        this.vars.r2 = 0;
        this.vars.b2 = 0;
        this.vars.l = 0;
        this.vars.f = 0;
        this.vars.r = 0;
        this.vars.b = 0;
        yield* this.worldelementcam(this.toNumber(x) - 50, y, z);
        if (0 === this.toNumber(this.vars.worldelement)) {
          if (this.compare(x, this.vars.scx) > 0) {
            if (this.compare(y, this.vars.scy) < 0) {
              yield* this.joint3dDots(
                this.toNumber(x) + 5,
                this.toNumber(y) + 5,
                this.toNumber(z) + 5,
                this.toNumber(x) + 5,
                this.toNumber(y) + 5,
                this.toNumber(z) + 45
              );
            }
            this.vars.l2 = 1;
          }
          this.vars.l = 1;
        }
        yield* this.worldelementcam(x, y, this.toNumber(z) - 50);
        if (0 === this.toNumber(this.vars.worldelement)) {
          if (this.compare(z, this.vars.scz) > 0) {
            if (this.compare(y, this.vars.scy) < 0) {
              yield* this.joint3dDots(
                this.toNumber(x) + 5,
                this.toNumber(y) + 5,
                this.toNumber(z) + 5,
                this.toNumber(x) + 45,
                this.toNumber(y) + 5,
                this.toNumber(z) + 5
              );
            }
            this.vars.b2 = 1;
          }
          this.vars.b = 1;
        }
        yield* this.worldelementcam(this.toNumber(x) + 50, y, z);
        if (0 === this.toNumber(this.vars.worldelement)) {
          if (this.compare(this.toNumber(x) + 50, this.vars.scx) < 0) {
            if (this.compare(y, this.vars.scy) < 0) {
              yield* this.joint3dDots(
                this.toNumber(x) + 45,
                this.toNumber(y) + 5,
                this.toNumber(z) + 5,
                this.toNumber(x) + 45,
                this.toNumber(y) + 5,
                this.toNumber(z) + 45
              );
            }
            this.vars.r2 = 1;
          }
          this.vars.r = 1;
        }
        yield* this.worldelementcam(x, y, this.toNumber(z) + 50);
        if (0 === this.toNumber(this.vars.worldelement)) {
          if (this.compare(this.toNumber(z) + 50, this.vars.scz) < 0) {
            if (this.compare(y, this.vars.scy) < 0) {
              yield* this.joint3dDots(
                this.toNumber(x) + 5,
                this.toNumber(y) + 5,
                this.toNumber(z) + 45,
                this.toNumber(x) + 45,
                this.toNumber(y) + 5,
                this.toNumber(z) + 45
              );
            }
            this.vars.f2 = 1;
          }
          this.vars.f = 1;
        }
        if (
          this.toNumber(this.vars.b2) === 1 ||
          this.toNumber(this.vars.l2) === 1
        ) {
          yield* this.joint3dDots(
            this.toNumber(x) + 5,
            this.toNumber(y) + 5,
            this.toNumber(z) + 5,
            this.toNumber(x) + 5,
            this.toNumber(y) + 45,
            this.toNumber(z) + 5
          );
        }
        if (
          this.toNumber(this.vars.f2) === 1 ||
          this.toNumber(this.vars.l2) === 1
        ) {
          yield* this.joint3dDots(
            this.toNumber(x) + 5,
            this.toNumber(y) + 5,
            this.toNumber(z) + 45,
            this.toNumber(x) + 5,
            this.toNumber(y) + 45,
            this.toNumber(z) + 45
          );
        }
        if (
          this.toNumber(this.vars.f2) === 1 ||
          this.toNumber(this.vars.r2) === 1
        ) {
          yield* this.joint3dDots(
            this.toNumber(x) + 45,
            this.toNumber(y) + 5,
            this.toNumber(z) + 45,
            this.toNumber(x) + 45,
            this.toNumber(y) + 45,
            this.toNumber(z) + 45
          );
        }
        if (
          this.toNumber(this.vars.r2) === 1 ||
          this.toNumber(this.vars.b2) === 1
        ) {
          yield* this.joint3dDots(
            this.toNumber(x) + 45,
            this.toNumber(y) + 5,
            this.toNumber(z) + 5,
            this.toNumber(x) + 48,
            this.toNumber(y) + 45,
            this.toNumber(z) + 5
          );
        }
        this.vars.worldelement = 0;
        yield* this.worldelementcam(x, this.toNumber(y) - 50, z);
        if (0 === this.toNumber(this.vars.worldelement)) {
          this.vars.light = 0.6;
          yield* this.bottomColor();
          if (this.compare(y, this.vars.scy) > 0) {
            if (this.toNumber(this.vars.b) === 0) {
              yield* this.joint3dDots(
                this.toNumber(x) + 5,
                this.toNumber(y) + 5,
                this.toNumber(z) + 5,
                this.toNumber(x) + 45,
                this.toNumber(y) + 5,
                this.toNumber(z) + 5
              );
            }
            if (this.toNumber(this.vars.l) === 0) {
              yield* this.joint3dDots(
                this.toNumber(x) + 5,
                this.toNumber(y) + 5,
                this.toNumber(z) + 5,
                this.toNumber(x) + 5,
                this.toNumber(y) + 5,
                this.toNumber(z) + 45
              );
            }
            if (this.toNumber(this.vars.r) === 0) {
              yield* this.joint3dDots(
                this.toNumber(x) + 45,
                this.toNumber(y) + 5,
                this.toNumber(z) + 5,
                this.toNumber(x) + 45,
                this.toNumber(y) + 5,
                this.toNumber(z) + 45
              );
            }
            if (this.toNumber(this.vars.f) === 0) {
              yield* this.joint3dDots(
                this.toNumber(x) + 5,
                this.toNumber(y) + 5,
                this.toNumber(z) + 45,
                this.toNumber(x) + 45,
                this.toNumber(y) + 5,
                this.toNumber(z) + 45
              );
            }
          }
        }
        if (this.toNumber(this.vars.b) === 1) {
          if (
            this.compare(z, this.vars.scz) > 0 ||
            (this.compare(y, this.vars.scy) > 0 &&
              this.toNumber(this.vars.light) === 0.6)
          ) {
            yield* this.joint3dDots(
              this.toNumber(x) + 5,
              this.toNumber(y) + 5,
              this.toNumber(z) + 5,
              this.toNumber(x) + 45,
              this.toNumber(y) + 5,
              this.toNumber(z) + 5
            );
          }
        }
        if (this.toNumber(this.vars.f) === 1) {
          if (
            this.compare(this.toNumber(z) + 50, this.vars.scz) < 0 ||
            (this.compare(y, this.vars.scy) > 0 &&
              this.toNumber(this.vars.light) === 0.6)
          ) {
            yield* this.joint3dDots(
              this.toNumber(x) + 5,
              this.toNumber(y) + 5,
              this.toNumber(z) + 45,
              this.toNumber(x) + 45,
              this.toNumber(y) + 5,
              this.toNumber(z) + 45
            );
          }
        }
        if (this.toNumber(this.vars.l) === 1) {
          if (
            this.compare(x, this.vars.scx) > 0 ||
            (this.compare(y, this.vars.scy) > 0 &&
              this.toNumber(this.vars.light) === 0.6)
          ) {
            yield* this.joint3dDots(
              this.toNumber(x) + 5,
              this.toNumber(y) + 5,
              this.toNumber(z) + 5,
              this.toNumber(x) + 5,
              this.toNumber(y) + 5,
              this.toNumber(z) + 45
            );
          }
        }
        if (this.toNumber(this.vars.r) === 1) {
          if (
            this.compare(this.toNumber(x) + 50, this.vars.scx) < 0 ||
            (this.compare(y, this.vars.scy) > 0 &&
              this.toNumber(this.vars.light) === 0.6)
          ) {
            yield* this.joint3dDots(
              this.toNumber(x) + 45,
              this.toNumber(y) + 5,
              this.toNumber(z) + 5,
              this.toNumber(x) + 45,
              this.toNumber(y) + 5,
              this.toNumber(z) + 45
            );
          }
        }
        yield* this.worldelementcam(x, this.toNumber(y) + 50, z);
        if (0 === this.toNumber(this.vars.worldelement)) {
          this.vars.light = 1;
          yield* this.topColor();
          if (this.compare(50 + this.toNumber(y), this.vars.scy) < 0) {
            yield* this.joint3dDots(
              this.toNumber(x) + 5,
              this.toNumber(y) + 45,
              this.toNumber(z) + 5,
              this.toNumber(x) + 45,
              this.toNumber(y) + 45,
              this.toNumber(z) + 45
            );
            yield* this.joint3dDots(
              this.toNumber(x) + 45,
              this.toNumber(y) + 45,
              this.toNumber(z) + 5,
              this.toNumber(x) + 5,
              this.toNumber(y) + 45,
              this.toNumber(z) + 45
            );
          }
        } else {
          this.vars.light = 0.8;
          yield* this.bottomColor();
        }
        if (this.toNumber(this.vars.b) === 1) {
          if (
            this.compare(z, this.vars.scz) > 0 ||
            (this.compare(50 + this.toNumber(y), this.vars.scy) < 0 &&
              this.toNumber(this.vars.light) === 1)
          ) {
            yield* this.joint3dDots(
              this.toNumber(x) + 5,
              this.toNumber(y) + 45,
              this.toNumber(z) + 5,
              this.toNumber(x) + 45,
              this.toNumber(y) + 45,
              this.toNumber(z) + 5
            );
          }
        }
        if (this.toNumber(this.vars.f) === 1) {
          if (
            this.compare(this.toNumber(z) + 50, this.vars.scz) < 0 ||
            (this.compare(50 + this.toNumber(y), this.vars.scy) < 0 &&
              this.toNumber(this.vars.light) === 1)
          ) {
            yield* this.joint3dDots(
              this.toNumber(x) + 5,
              this.toNumber(y) + 45,
              this.toNumber(z) + 45,
              this.toNumber(x) + 45,
              this.toNumber(y) + 45,
              this.toNumber(z) + 45
            );
          }
        }
        if (this.toNumber(this.vars.l) === 1) {
          if (
            this.compare(x, this.vars.scx) > 0 ||
            (this.compare(50 + this.toNumber(y), this.vars.scy) < 0 &&
              this.toNumber(this.vars.light) === 1)
          ) {
            yield* this.joint3dDots(
              this.toNumber(x) + 5,
              this.toNumber(y) + 45,
              this.toNumber(z) + 5,
              this.toNumber(x) + 5,
              this.toNumber(y) + 45,
              this.toNumber(z) + 45
            );
          }
        }
        if (this.toNumber(this.vars.r) === 1) {
          if (
            this.compare(this.toNumber(x) + 50, this.vars.scx) < 0 ||
            (this.compare(50 + this.toNumber(y), this.vars.scy) < 0 &&
              this.toNumber(this.vars.light) === 1)
          ) {
            yield* this.joint3dDots(
              this.toNumber(x) + 45,
              this.toNumber(y) + 45,
              this.toNumber(z) + 5,
              this.toNumber(x) + 45,
              this.toNumber(y) + 45,
              this.toNumber(z) + 45
            );
          }
        }
      }
    }
  }

  *dogControl() {
    this.vars.broadcastJumpDog = 0;
    yield* this.worldid(
      this.stage.vars.dogx,
      this.toNumber(this.stage.vars.dogy) -
        21 +
        this.toNumber(this.vars.dogvely),
      this.stage.vars.dogz
    );
    if (
      this.compare(
        0,
        this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1)
      ) < 0
    ) {
      this.stage.vars.dogy =
        Math.round(
          (this.toNumber(this.stage.vars.dogy) +
            this.toNumber(this.vars.dogvely) -
            20) /
            50
        ) *
          50 +
        20;
      if (
        this.compare(this.vars.dogvely, 1) < 0 &&
        this.compare(0, this.vars.dogGround) < 0
      ) {
        this.broadcast("bark");
      }
      this.vars.dogvely = this.vars.dogGround;
    } else {
      this.vars.dogvely--;
      if (this.compare(this.vars.dogvely, -20) < 0) {
        this.vars.dogvely = -20;
      }
      this.stage.vars.dogy += this.toNumber(this.vars.dogvely);
    }
    yield* this.worldid(
      this.stage.vars.dogx,
      this.toNumber(this.stage.vars.dogy) +
        21 +
        this.toNumber(this.vars.dogvely),
      this.stage.vars.dogz
    );
    if (
      this.compare(
        0,
        this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1)
      ) < 0
    ) {
      this.stage.vars.dogy =
        Math.round(
          (this.toNumber(this.stage.vars.dogy) +
            this.toNumber(this.vars.dogvely) +
            20) /
            50
        ) *
          50 -
        20;
      this.vars.dogvely = 0;
    }
    yield* this.worldid(
      this.toNumber(this.stage.vars.dogx) + 15,
      this.stage.vars.dogy,
      this.stage.vars.dogz
    );
    if (
      this.compare(
        0,
        this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1)
      ) < 0
    ) {
      this.stage.vars.dogx =
        Math.round((this.toNumber(this.stage.vars.dogx) + 15) / 50) * 50 - 15;
      this.vars.broadcastJumpDog = this.toNumber(this.vars.dogGround) / 11;
    }
    yield* this.worldid(
      this.toNumber(this.stage.vars.dogx) - 15,
      this.stage.vars.dogy,
      this.stage.vars.dogz
    );
    if (
      this.compare(
        0,
        this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1)
      ) < 0
    ) {
      this.stage.vars.dogx =
        Math.round((this.toNumber(this.stage.vars.dogx) - 15) / 50) * 50 + 15;
      this.vars.broadcastJumpDog = this.toNumber(this.vars.dogGround) / 11;
    }
    yield* this.worldid(
      this.stage.vars.dogx,
      this.stage.vars.dogy,
      this.toNumber(this.stage.vars.dogz) + 15
    );
    if (
      this.compare(
        0,
        this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1)
      ) < 0
    ) {
      this.stage.vars.dogz =
        Math.round((this.toNumber(this.stage.vars.dogz) + 15) / 50) * 50 - 15;
      this.vars.broadcastJumpDog = this.toNumber(this.vars.dogGround) / 11;
    }
    yield* this.worldid(
      this.stage.vars.dogx,
      this.stage.vars.dogy,
      this.toNumber(this.stage.vars.dogz) - 15
    );
    if (
      this.compare(
        0,
        this.itemOf(this.stage.vars.points3d, this.vars.worldelement - 1)
      ) < 0
    ) {
      this.stage.vars.dogz =
        Math.round((this.toNumber(this.stage.vars.dogz) - 15) / 50) * 50 + 15;
      this.vars.broadcastJumpDog = this.toNumber(this.vars.dogGround) / 11;
    }
    if (this.compare(this.stage.vars.dogy, 0) < 0) {
      this.stage.vars.dogx = this.toNumber(this.stage.vars.worldwidth) * 25;
      this.stage.vars.dogy = 1000;
      this.stage.vars.dogz = this.toNumber(this.stage.vars.worldwidth) * 25;
    }
    if (
      this.compare(
        190,
        (this.radToDeg(
          Math.atan(
            (this.toNumber(this.stage.vars.camx) -
              this.toNumber(this.stage.vars.dogx)) /
              (this.toNumber(this.stage.vars.camz) -
                this.toNumber(this.stage.vars.dogz))
          )
        ) +
          180 *
            this.toNumber(
              this.compare(this.stage.vars.camz, this.stage.vars.dogz) < 0
            ) +
          this.toNumber(this.vars.rotdog)) %
          360
      ) < 0
    ) {
      this.vars.rotdog += 4;
    }
    if (
      this.compare(
        170,
        (this.radToDeg(
          Math.atan(
            (this.toNumber(this.stage.vars.camx) -
              this.toNumber(this.stage.vars.dogx)) /
              (this.toNumber(this.stage.vars.camz) -
                this.toNumber(this.stage.vars.dogz))
          )
        ) +
          180 *
            this.toNumber(
              this.compare(this.stage.vars.camz, this.stage.vars.dogz) < 0
            ) +
          this.toNumber(this.vars.rotdog)) %
          360
      ) > 0
    ) {
      this.vars.rotdog -= 4;
    }
  }

  *drawTriangle(cut) {
    if (
      this.compare(5, this.vars.z1) < 0 ||
      this.compare(5, this.vars.z2) < 0 || this.compare(5, this.vars.z3) < 0 ||
      cut
    ) {
      if (
        (this.compare(5, this.vars.z1) < 0 &&
          this.compare(5, this.vars.z2) < 0 &&
            this.compare(5, this.vars.z3) < 0) ||
        cut
      ) {
        yield* this.tri(
          (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x1)) /
            this.toNumber(this.vars.z1),
          (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y1)) /
            this.toNumber(this.vars.z1),
          (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x2)) /
            this.toNumber(this.vars.z2),
          (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y2)) /
            this.toNumber(this.vars.z2),
          (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x3)) /
            this.toNumber(this.vars.z3),
          (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y3)) /
            this.toNumber(this.vars.z3)
        );
      } else {
        if (
          this.compare(5, this.vars.z1) < 0 &&
          this.compare(5, this.vars.z2) < 0 && this.compare(5, this.vars.z3) > 0
        ) {
          this.vars.xxx = this.vars.x3;
          this.vars.yyy = this.vars.y3;
          this.vars.zzz = this.vars.z3;
          this.vars.dot =
            (this.toNumber(this.vars.z1) - 5) /
            (this.toNumber(this.vars.z1) - this.toNumber(this.vars.zzz));
          this.vars.x3 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x1);
          this.vars.y3 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y1);
          this.vars.z3 = 5;
          yield* this.tri(
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x3)) /
              this.toNumber(this.vars.z3),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y3)) /
              this.toNumber(this.vars.z3)
          );
          this.vars.dot =
            (this.toNumber(this.vars.z2) - 5) /
            (this.toNumber(this.vars.z2) - this.toNumber(this.vars.zzz));
          this.vars.x1 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x2);
          this.vars.y1 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y2);
          this.vars.z1 = 5;
          yield* this.tri(
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x3)) /
              this.toNumber(this.vars.z3),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y3)) /
              this.toNumber(this.vars.z3)
          );
        }
        if (
          this.compare(5, this.vars.z1) < 0 &&
          this.compare(5, this.vars.z2) > 0 && this.compare(5, this.vars.z3) < 0
        ) {
          this.vars.xxx = this.vars.x2;
          this.vars.yyy = this.vars.y2;
          this.vars.zzz = this.vars.z2;
          this.vars.dot =
            (this.toNumber(this.vars.z3) - 5) /
            (this.toNumber(this.vars.z3) - this.toNumber(this.vars.zzz));
          this.vars.x2 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x3);
          this.vars.y2 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y3);
          this.vars.z2 = 5;
          yield* this.tri(
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x3)) /
              this.toNumber(this.vars.z3),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y3)) /
              this.toNumber(this.vars.z3)
          );
          this.vars.dot =
            (this.toNumber(this.vars.z1) - 5) /
            (this.toNumber(this.vars.z1) - this.toNumber(this.vars.zzz));
          this.vars.x3 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x1);
          this.vars.y3 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y1);
          this.vars.z3 = 5;
          yield* this.tri(
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x3)) /
              this.toNumber(this.vars.z3),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y3)) /
              this.toNumber(this.vars.z3)
          );
        }
        if (
          this.compare(5, this.vars.z1) > 0 &&
          this.compare(5, this.vars.z2) < 0 && this.compare(5, this.vars.z3) < 0
        ) {
          this.vars.xxx = this.vars.x1;
          this.vars.yyy = this.vars.y1;
          this.vars.zzz = this.vars.z1;
          this.vars.dot =
            (this.toNumber(this.vars.z2) - 5) /
            (this.toNumber(this.vars.z2) - this.toNumber(this.vars.zzz));
          this.vars.x1 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x2);
          this.vars.y1 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y2);
          this.vars.z1 = 5;
          yield* this.tri(
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x3)) /
              this.toNumber(this.vars.z3),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y3)) /
              this.toNumber(this.vars.z3)
          );
          this.vars.dot =
            (this.toNumber(this.vars.z3) - 5) /
            (this.toNumber(this.vars.z3) - this.toNumber(this.vars.zzz));
          this.vars.x2 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x3);
          this.vars.y2 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y3);
          this.vars.z2 = 5;
          yield* this.tri(
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x3)) /
              this.toNumber(this.vars.z3),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y3)) /
              this.toNumber(this.vars.z3)
          );
        }
        if (
          this.compare(5, this.vars.z1) < 0 &&
          this.compare(5, this.vars.z2) > 0 && this.compare(5, this.vars.z3) > 0
        ) {
          this.vars.dot =
            (this.toNumber(this.vars.z1) - 5) /
            (this.toNumber(this.vars.z1) - this.toNumber(this.vars.z3));
          this.vars.x3 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.x3) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x1);
          this.vars.y3 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.y3) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y1);
          this.vars.z3 = 5;
          this.vars.dot =
            (this.toNumber(this.vars.z1) - 5) /
            (this.toNumber(this.vars.z1) - this.toNumber(this.vars.z2));
          this.vars.x2 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.x2) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x1);
          this.vars.y2 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.y2) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y1);
          this.vars.z2 = 5;
          yield* this.tri(
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x3)) /
              this.toNumber(this.vars.z3),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y3)) /
              this.toNumber(this.vars.z3)
          );
        }
        if (
          this.compare(5, this.vars.z1) > 0 &&
          this.compare(5, this.vars.z2) > 0 && this.compare(5, this.vars.z3) < 0
        ) {
          this.vars.dot =
            (this.toNumber(this.vars.z3) - 5) /
            (this.toNumber(this.vars.z3) - this.toNumber(this.vars.z1));
          this.vars.x1 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.x1) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x3);
          this.vars.y1 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.y1) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y3);
          this.vars.z1 = 5;
          this.vars.dot =
            (this.toNumber(this.vars.z3) - 5) /
            (this.toNumber(this.vars.z3) - this.toNumber(this.vars.z2));
          this.vars.x2 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.x2) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x3);
          this.vars.y2 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.y2) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y3);
          this.vars.z2 = 5;
          yield* this.tri(
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x3)) /
              this.toNumber(this.vars.z3),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y3)) /
              this.toNumber(this.vars.z3)
          );
        }
        if (
          this.compare(5, this.vars.z1) > 0 &&
          this.compare(5, this.vars.z2) < 0 && this.compare(5, this.vars.z3) > 0
        ) {
          this.vars.dot =
            (this.toNumber(this.vars.z2) - 5) /
            (this.toNumber(this.vars.z2) - this.toNumber(this.vars.z1));
          this.vars.x1 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.x1) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x2);
          this.vars.y1 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.y1) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y2);
          this.vars.z1 = 5;
          this.vars.dot =
            (this.toNumber(this.vars.z2) - 5) /
            (this.toNumber(this.vars.z2) - this.toNumber(this.vars.z3));
          this.vars.x3 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.x3) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x2);
          this.vars.y3 =
            this.toNumber(this.vars.dot) * this.toNumber(this.vars.y3) +
            (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y2);
          this.vars.z3 = 5;
          yield* this.tri(
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y1)) /
              this.toNumber(this.vars.z1),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y2)) /
              this.toNumber(this.vars.z2),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.x3)) /
              this.toNumber(this.vars.z3),
            (this.toNumber(this.stage.vars.fov) * this.toNumber(this.vars.y3)) /
              this.toNumber(this.vars.z3)
          );
        }
      }
    }
  }

  *y1() {
    this.vars.yp = 50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange); i++) {
      yield* this.x1();
      this.vars.yp -= 50;
      yield;
    }
    this.vars.yp = -50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange) + 1; i++) {
      yield* this.x1();
      this.vars.yp += 50;
      yield;
    }
  }

  *z1() {
    this.vars.zp = 50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange); i++) {
      yield* this.block1(this.vars.xp, this.vars.yp, this.vars.zp);
      this.vars.zp -= 50;
      yield;
    }
    this.vars.zp = -50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange) + 1; i++) {
      yield* this.block1(this.vars.xp, this.vars.yp, this.vars.zp);
      this.vars.zp += 50;
      yield;
    }
  }

  *x1() {
    this.vars.xp = 50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange); i++) {
      yield* this.z1();
      this.vars.xp -= 50;
      yield;
    }
    this.vars.xp = -50 * this.toNumber(this.stage.vars.viewrange);
    for (let i = 0; i < this.toNumber(this.stage.vars.viewrange) + 1; i++) {
      yield* this.z1();
      this.vars.xp += 50;
      yield;
    }
  }

  *tri(ax, ay, bx, by, cx, cy) {
    this.penDown = false;
    this.vars.lena = Math.sqrt(
      (this.toNumber(bx) - this.toNumber(cx)) *
        (this.toNumber(bx) - this.toNumber(cx)) +
        (this.toNumber(by) - this.toNumber(cy)) *
          (this.toNumber(by) - this.toNumber(cy))
    );
    this.vars.lenb = Math.sqrt(
      (this.toNumber(ax) - this.toNumber(cx)) *
        (this.toNumber(ax) - this.toNumber(cx)) +
        (this.toNumber(ay) - this.toNumber(cy)) *
          (this.toNumber(ay) - this.toNumber(cy))
    );
    this.vars.lenc = Math.sqrt(
      (this.toNumber(ax) - this.toNumber(bx)) *
        (this.toNumber(ax) - this.toNumber(bx)) +
        (this.toNumber(ay) - this.toNumber(by)) *
          (this.toNumber(ay) - this.toNumber(by))
    );
    this.vars.peri =
      this.toNumber(this.vars.lena) +
      this.toNumber(this.vars.lenb) +
      this.toNumber(this.vars.lenc);
    this.vars.incx =
      (this.toNumber(this.vars.lena) * this.toNumber(ax) +
        this.toNumber(this.vars.lenb) * this.toNumber(bx) +
        this.toNumber(this.vars.lenc) * this.toNumber(cx)) /
      this.toNumber(this.vars.peri);
    this.vars.incy =
      (this.toNumber(this.vars.lena) * this.toNumber(ay) +
        this.toNumber(this.vars.lenb) * this.toNumber(by) +
        this.toNumber(this.vars.lenc) * this.toNumber(cy)) /
      this.toNumber(this.vars.peri);
    this.vars.ind = Math.sqrt(
      ((this.toNumber(this.vars.lenb) +
        this.toNumber(this.vars.lenc) -
        this.toNumber(this.vars.lena)) *
        (this.toNumber(this.vars.lenc) +
          this.toNumber(this.vars.lena) -
          this.toNumber(this.vars.lenb)) *
        (this.toNumber(this.vars.lena) +
          this.toNumber(this.vars.lenb) -
          this.toNumber(this.vars.lenc))) /
        this.toNumber(this.vars.peri)
    );
    this.vars.aox = this.toNumber(this.vars.incx) - this.toNumber(ax);
    this.vars.aoy = this.toNumber(this.vars.incy) - this.toNumber(ay);
    this.vars.box = this.toNumber(this.vars.incx) - this.toNumber(bx);
    this.vars.boy = this.toNumber(this.vars.incy) - this.toNumber(by);
    this.vars.cox = this.toNumber(this.vars.incx) - this.toNumber(cx);
    this.vars.coy = this.toNumber(this.vars.incy) - this.toNumber(cy);
    if (
      this.compare(this.vars.lena, this.vars.lenb) < 0 &&
      this.compare(this.vars.lena, this.vars.lenc) < 0
    ) {
      this.vars.td = Math.sqrt(
        this.toNumber(this.vars.aox) * this.toNumber(this.vars.aox) +
          this.toNumber(this.vars.aoy) * this.toNumber(this.vars.aoy)
      );
    } else {
      if (
        !(
          this.compare(this.vars.lenb, this.vars.lena) > 0 ||
          this.compare(this.vars.lenb, this.vars.lenc) > 0
        )
      ) {
        this.vars.td = Math.sqrt(
          this.toNumber(this.vars.box) * this.toNumber(this.vars.box) +
            this.toNumber(this.vars.boy) * this.toNumber(this.vars.boy)
        );
      } else {
        this.vars.td = Math.sqrt(
          this.toNumber(this.vars.cox) * this.toNumber(this.vars.cox) +
            this.toNumber(this.vars.coy) * this.toNumber(this.vars.coy)
        );
      }
    }
    this.vars.rate =
      (this.toNumber(this.vars.td) * 2 - this.toNumber(this.vars.ind)) /
      (this.toNumber(this.vars.td) * 4);
    this.goto(this.toNumber(this.vars.incx), this.toNumber(this.vars.incy));
    this.penSize = this.toNumber(this.vars.ind);
    this.penDown = true;
    this.penDown = false;
    this.vars.td = 1;
    for (
      let i = 0;
      i <
      Math.ceil(
        Math.log10(2 / this.toNumber(this.vars.ind)) /
          Math.log10(this.toNumber(this.vars.rate)) +
          0.5
      );
      i++
    ) {
      this.vars.td =
        this.toNumber(this.vars.rate) * this.toNumber(this.vars.td);
      this.penSize =
        1 + this.toNumber(this.vars.td) * this.toNumber(this.vars.ind);
      this.penDown = false;
      this.goto(
        this.toNumber(this.vars.aox) * this.toNumber(this.vars.td) +
          this.toNumber(ax),
        this.toNumber(this.vars.aoy) * this.toNumber(this.vars.td) +
          this.toNumber(ay)
      );
      this.penDown = true;
      this.goto(
        this.toNumber(this.vars.box) * this.toNumber(this.vars.td) +
          this.toNumber(bx),
        this.toNumber(this.vars.boy) * this.toNumber(this.vars.td) +
          this.toNumber(by)
      );
      this.goto(
        this.toNumber(this.vars.cox) * this.toNumber(this.vars.td) +
          this.toNumber(cx),
        this.toNumber(this.vars.coy) * this.toNumber(this.vars.td) +
          this.toNumber(cy)
      );
      this.goto(
        this.toNumber(this.vars.aox) * this.toNumber(this.vars.td) +
          this.toNumber(ax),
        this.toNumber(this.vars.aoy) * this.toNumber(this.vars.td) +
          this.toNumber(ay)
      );
      yield;
    }
  }

  *midColor() {
    this.vars.alpha = 255;
    this.vars.blocktype = this.vars.worldelement;
    if (this.toNumber(this.vars.blocktype) === 1) {
      this.vars.red = 120;
      this.vars.green = 60;
      this.vars.blue = 0;
    } else {
      if (this.toNumber(this.vars.blocktype) === 2) {
        this.vars.red = 100;
        this.vars.green = 100;
        this.vars.blue = 100;
      } else {
        if (this.toNumber(this.vars.blocktype) === 3) {
          this.vars.red = 200;
          this.vars.green = 180;
          this.vars.blue = 0;
        } else {
          if (this.toNumber(this.vars.blocktype) === 4) {
            this.vars.red = 50;
            this.vars.green = 50;
            this.vars.blue = 50;
          } else {
            if (this.toNumber(this.vars.blocktype) === 5) {
              this.vars.red = 0;
              this.vars.green = 140;
              this.vars.blue = 0;
            } else {
              if (this.toNumber(this.vars.blocktype) === 6) {
                this.vars.red = 80;
                this.vars.green = 40;
                this.vars.blue = 0;
              } else {
                if (this.toNumber(this.vars.blocktype) === 7) {
                  this.vars.red = 150;
                  this.vars.green = 50;
                  this.vars.blue = 30;
                } else {
                  this.vars.red = 100;
                  this.vars.green = 255;
                  this.vars.blue = 255;
                  this.vars.alpha = 50;
                }
              }
            }
          }
        }
      }
    }
  }
}
