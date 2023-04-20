/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite9/costumes/kostium1.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium2", "./Sprite9/costumes/kostium2.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium3", "./Sprite9/costumes/kostium3.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium4", "./Sprite9/costumes/kostium4.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium5", "./Sprite9/costumes/kostium5.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium6", "./Sprite9/costumes/kostium6.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium7", "./Sprite9/costumes/kostium7.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium8", "./Sprite9/costumes/kostium8.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium9", "./Sprite9/costumes/kostium9.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium10", "./Sprite9/costumes/kostium10.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium11", "./Sprite9/costumes/kostium11.png", {
        x: 81,
        y: 81
      }),
      new Costume("kostium12", "./Sprite9/costumes/kostium12.png", {
        x: 81,
        y: 81
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "hide" }, this.whenIReceiveHide)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.size = 400;
    this.costume = "kostium1";
    this.visible = true;
    while (true) {
      for (let i = 0; i < 12; i++) {
        this.costumeNumber++;
        yield* this.wait(0.05);
        yield;
      }
      yield* this.wait(2);
      yield;
    }
  }

  *whenIReceiveHide() {
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
