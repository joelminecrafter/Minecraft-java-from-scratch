/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite7/costumes/kostium1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("kostium2", "./Sprite7/costumes/kostium2.svg", {
        x: 241,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "k" }, this.whenKeyKPressed),
      new Trigger(Trigger.BROADCAST, { name: "done" }, this.whenIReceiveDone)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.kik(0);
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = "kostium1";
    this.visible = false;
  }

  *kik(click) {
    if (this.compare(0.5, this.timer) < 0) {
      if (this.costumeNumber === 2) {
        if (
          (this.compare(this.mouse.x, -176) < 0 &&
            this.compare(164, this.mouse.y) < 0) ||
          click
        ) {
          this.stage.vars.pause = 0;
          this.effects.ghost = 0;
          this.costumeNumber++;
          this.restartTimer();
        }
      } else {
        this.stage.vars.pause = 1;
        this.broadcast("pause");
        this.effects.ghost = 40;
        this.costumeNumber++;
        this.restartTimer();
      }
    }
  }

  *whenKeyKPressed() {
    yield* this.kik(!0);
  }

  *whenIReceiveDone() {
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
  }
}
