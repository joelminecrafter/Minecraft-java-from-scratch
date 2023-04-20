/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Duszek1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Duszek1/costumes/kostium1.svg", {
        x: 1,
        y: 29
      }),
      new Costume("kostium2", "./Duszek1/costumes/kostium2.svg", {
        x: 77,
        y: 17
      })
    ];

    this.sounds = [new Sound("pop", "./Duszek1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "pause" }, this.whenIReceivePause),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceivePause() {
    this.costume = "kostium2";
    this.createClone();
    this.costume = "kostium1";
    yield* this.goTo(-155, -10);
  }

  *goTo(x, y) {
    this.visible = true;
    this.goto(this.toNumber(x), this.toNumber(y));
    this.size = 100;
    this.effects.ghost = 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield* this.size2();
      yield;
    }
    while (!(this.toNumber(this.stage.vars.pause) === 0)) {
      if (this.touching("mouse")) {
        if (this.costumeNumber === 1) {
          this.say("Turn around with ARROWS");
        } else {
          this.say("Turn around with MOUSE");
        }
        if (this.mouse.down) {
          this.broadcast("*click*");
          this.stage.vars.mousecontrol = this.costumeNumber - 1;
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
    yield* this.goTo(-30, -10);
  }

  *size2() {
    if (
      this.compare(this.stage.vars.mousecontrol, this.costumeNumber - 1) === 0
    ) {
      this.size = (this.size + 100) / 2;
    } else {
      this.size = (this.size + 70) / 2;
    }
    this.effects.brightness = this.size - 100;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
