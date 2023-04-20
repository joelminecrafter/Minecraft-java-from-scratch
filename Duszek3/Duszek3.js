/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Duszek3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium2", "./Duszek3/costumes/kostium2.svg", {
        x: -1,
        y: 21
      }),
      new Costume("kostium1", "./Duszek3/costumes/kostium1.svg", {
        x: 40,
        y: 22
      })
    ];

    this.sounds = [new Sound("pop", "./Duszek3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "pause" }, this.whenIReceivePause),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceivePause() {
    this.costume = "kostium1";
    this.createClone();
    this.costume = "kostium2";
    yield* this.goTo(-145, 60);
  }

  *goTo(x, y) {
    this.visible = true;
    this.goto(this.toNumber(x), this.toNumber(y));
    this.size = 90;
    this.effects.ghost = 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield* this.size2();
      yield;
    }
    while (!(this.toNumber(this.stage.vars.pause) === 0)) {
      if (this.touching("mouse")) {
        if (this.costumeNumber === 1) {
          this.say("Wireframe");
        } else {
          this.say("Fill blocks");
        }
        if (this.mouse.down) {
          this.broadcast("*click*");
          this.stage.vars.mode = this.costumeNumber;
          while (!!this.mouse.down) {
            yield;
          }
        }
      } else {
        this.say("");
      }
      yield* this.size2();
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.effects.ghost += 20;
      yield;
    }
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone() {
    yield* this.goTo(-25, 60);
  }

  *size2() {
    if (this.compare(this.stage.vars.mode, this.costumeNumber) === 0) {
      this.size = (this.size + 140) / 2;
    } else {
      this.size = (this.size + 90) / 2;
    }
    this.effects.brightness = (this.size - 140) / 1.7;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
