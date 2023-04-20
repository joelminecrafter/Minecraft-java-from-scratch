/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Duszek4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Duszek4/costumes/kostium1.svg", {
        x: 6,
        y: 16
      })
    ];

    this.sounds = [new Sound("pop", "./Duszek4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "pause" }, this.whenIReceivePause)
    ];

    this.vars.id = 2;
  }

  *startAsClone() {
    yield* this.goTo();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceivePause() {
    this.vars.id = 5;
    this.goto(124, 73);
    this.createClone();
    this.vars.id = 4;
    this.goto(107, 69);
    this.createClone();
    this.vars.id = 3;
    this.goto(85, 65);
    this.createClone();
    this.vars.id = 2;
    this.goto(60, 60);
    yield* this.goTo();
  }

  *goTo() {
    this.visible = true;
    this.size = 60;
    this.effects.ghost = 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield* this.size2();
      yield;
    }
    while (!(this.toNumber(this.stage.vars.pause) === 0)) {
      if (
        this.touching("mouse") &&
        (this.toNumber(this.stage.vars.first) === 0 ||
          this.compare(this.vars.id, this.stage.vars.first) === 0)
      ) {
        if (
          this.touching("mouse") &&
          this.toNumber(this.stage.vars.first) === 0
        ) {
          this.stage.vars.first = this.vars.id;
        }
        this.say("Set view range to " + this.toString(this.vars.id));
        if (this.mouse.down) {
          this.broadcast("*click*");
          this.stage.vars.viewrange = this.vars.id;
          while (!!this.mouse.down) {
            yield;
          }
        }
      } else {
        if (this.compare(this.vars.id, this.stage.vars.first) === 0) {
          this.stage.vars.first = 0;
        }
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

  *size2() {
    if (!(this.compare(this.stage.vars.viewrange, this.vars.id) < 0)) {
      this.size = (this.size + 90) / (1.5 + this.x * 0.005);
    } else {
      this.size = (this.size + 60) / (1.5 + this.x * 0.005);
    }
    this.effects.brightness =
      (this.size - (this.size + 90) / (1.5 + this.x * 0.005)) / 1.7;
  }
}
