/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite5/costumes/kostium1.svg", {
        x: 23,
        y: 21
      }),
      new Costume("kostium2", "./Sprite5/costumes/kostium2.svg", {
        x: 23,
        y: 21
      }),
      new Costume("kostium3", "./Sprite5/costumes/kostium3.svg", {
        x: 23,
        y: 21
      }),
      new Costume("kostium4", "./Sprite5/costumes/kostium4.svg", {
        x: 23,
        y: 21
      }),
      new Costume("kostium5", "./Sprite5/costumes/kostium5.svg", {
        x: 23,
        y: 21
      }),
      new Costume("kostium6", "./Sprite5/costumes/kostium6.svg", {
        x: 23,
        y: 21
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite5/sounds/pop.wav"),
      new Sound(
        "Friendly DOG Bark & Whine Sound Effects.mp3",
        "./Sprite5/sounds/Friendly DOG Bark & Whine Sound Effects.mp3.wav"
      ),
      new Sound(
        "Friendly DOG Bark & Whine Sound Effects.mp2",
        "./Sprite5/sounds/Friendly DOG Bark & Whine Sound Effects.mp2.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "bark" }, this.whenIReceiveBark),
      new Trigger(Trigger.BROADCAST, { name: "pause" }, this.whenIReceivePause)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = this.random(1, 5);
    this.stage.vars.dogcolor = this.costumeNumber;
  }

  *whenIReceiveBark() {
    this.audioEffects.volume =
      this.toNumber(this.sprites["Loudness"].costume.name) *
      (10000 /
        (10000 +
          ((this.toNumber(this.stage.vars.camx) -
            this.toNumber(this.stage.vars.dogx)) *
            (this.toNumber(this.stage.vars.camx) -
              this.toNumber(this.stage.vars.dogx)) +
            (this.toNumber(this.stage.vars.camz) -
              this.toNumber(this.stage.vars.dogz)) *
              (this.toNumber(this.stage.vars.camz) -
                this.toNumber(this.stage.vars.dogz)))));
    if (this.random(1, 0) === 1) {
      yield* this.startSound("Friendly DOG Bark & Whine Sound Effects.mp3");
    } else {
      yield* this.startSound("Friendly DOG Bark & Whine Sound Effects.mp2");
    }
  }

  *whenIReceivePause() {
    this.goto(100, -10);
    yield* this.goTo();
  }

  *goTo() {
    this.visible = true;
    this.size = 120;
    this.effects.ghost = 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    while (!(this.toNumber(this.stage.vars.pause) === 0)) {
      if (this.touching("mouse")) {
        this.say("Change dog's color");
        if (this.mouse.down) {
          this.broadcast("*click*");
          this.costumeNumber++;
          this.stage.vars.dogcolor = this.costumeNumber;
          while (!!(this.touching("mouse") && this.mouse.down)) {
            yield;
          }
        }
      } else {
        this.say("");
      }
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.effects.ghost += 20;
      yield;
    }
    this.visible = false;
    this.deleteThisClone();
  }
}
