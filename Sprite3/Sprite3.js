/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium11", "./Sprite3/costumes/kostium11.svg", {
        x: 65,
        y: 7
      }),
      new Costume("kostium12", "./Sprite3/costumes/kostium12.svg", {
        x: 65,
        y: 7
      }),
      new Costume("kostium13", "./Sprite3/costumes/kostium13.svg", {
        x: 65,
        y: 7
      }),
      new Costume("kostium2", "./Sprite3/costumes/kostium2.svg", {
        x: 65,
        y: 7
      }),
      new Costume("kostium3", "./Sprite3/costumes/kostium3.svg", {
        x: 65,
        y: 7
      }),
      new Costume("kostium4", "./Sprite3/costumes/kostium4.svg", {
        x: 65,
        y: 7
      }),
      new Costume("kostium5", "./Sprite3/costumes/kostium5.svg", {
        x: 65,
        y: 7
      }),
      new Costume("kostium6", "./Sprite3/costumes/kostium6.svg", {
        x: 65,
        y: 7
      }),
      new Costume("kostium7", "./Sprite3/costumes/kostium7.svg", {
        x: 65,
        y: 7
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed),
      new Trigger(Trigger.BROADCAST, { name: "check" }, this.whenIReceiveCheck),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "5" }, this.whenKey5Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "4" }, this.whenKey4Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "8" }, this.whenKey8Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "9" }, this.whenKey9Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "7" }, this.whenKey7Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "6" }, this.whenKey6Pressed),
      new Trigger(Trigger.BROADCAST, { name: "done" }, this.whenIReceiveDone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "*click*" },
        this.whenIReceiveClick
      )
    ];
  }

  *whenKey1Pressed() {
    yield* this.pop(1);
  }

  *whenKey2Pressed() {
    yield* this.pop(2);
  }

  *whenKey3Pressed() {
    yield* this.pop(3);
  }

  *whenIReceiveCheck() {
    if (
      this.toNumber(
        this.itemOf(this.stage.vars.backpack, this.costumeNumber - 2)
      ) === 0
    ) {
      this.costume = "kostium11";
      this.stage.watchers.displayblock.visible = false;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(0, 160);
    this.costume = "kostium11";
    this.stage.watchers.displayblock.visible = false;
    this.visible = false;
  }

  *whenKey5Pressed() {
    yield* this.pop(5);
  }

  *whenKey4Pressed() {
    yield* this.pop(4);
  }

  *whenKey8Pressed() {
    yield* this.pop(8);
  }

  *whenKey9Pressed() {
    yield* this.pop(9);
  }

  *whenKey7Pressed() {
    yield* this.pop(7);
  }

  *whenKey6Pressed() {
    yield* this.pop(6);
  }

  *whenIReceiveDone() {
    this.stage.watchers.loading.visible = false;
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
  }

  *whenIReceiveClick() {
    this.audioEffects.volume = this.toNumber(
      this.sprites["Loudness"].costume.name
    );
  }

  *pop(num) {
    if (this.toNumber(this.stage.vars.pause) === 0) {
      yield* this.startSound("pop");
      if (this.toNumber(num) === 1) {
        this.costume = "kostium11";
        this.stage.watchers.displayblock.visible = false;
      } else {
        if (
          this.compare(
            this.itemOf(this.stage.vars.backpack, this.toNumber(num) - 2),
            0
          ) > 0
        ) {
          this.costume = num;
          this.stage.vars.displayblock = this.itemOf(
            this.stage.vars.backpack,
            this.toNumber(num) - 2
          );
          this.stage.watchers.displayblock.visible = true;
        }
      }
    }
  }
}
