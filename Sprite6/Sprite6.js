/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite6/costumes/kostium1.svg", {
        x: 100,
        y: 90
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "done" }, this.whenIReceiveDone),
      new Trigger(Trigger.BROADCAST, { name: "hide" }, this.whenIReceiveHide)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "kostium1";
    this.visible = true;
    this.effects.ghost = 100;
  }

  *whenIReceiveDone() {
    this.costume = "kostium2";
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveHide() {
    yield* this.wait(0.2);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
  }
}
