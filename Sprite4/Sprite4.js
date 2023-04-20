/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite4/costumes/kostium1.svg", {
        x: 71,
        y: 18
      })
    ];

    this.sounds = [
      new Sound("Minecraft Muzyka", "./Sprite4/sounds/Minecraft Muzyka.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "hide" }, this.whenIReceiveHide),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "*click*" },
        this.whenIReceiveClick
      )
    ];

    this.vars.loud = 1;
  }

  *whenthisspriteclicked() {
    this.broadcast("*click*");
    this.broadcast("hide");
    for (let i = 0; i < 20; i++) {
      this.size += 0.1 * (190 - this.size);
      yield;
    }
    this.stage.vars.mode = 2;
    this.broadcast("play");
    this.visible = false;
    this.stage.vars.backpack = [];
    for (let i = 0; i < 8; i++) {
      this.stage.vars.backpack.push(5);
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveHide() {
    for (let i = 0; i < 20; i++) {
      this.vars.loud -= 5;
      this.audioEffects.volume =
        this.toNumber(this.vars.loud) *
        this.toNumber(this.sprites["Loudness"].costume.name);
      this.effects.ghost += 5;
      yield;
    }
    this.stopAllSounds();
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.vars.loud = 1;
    this.stage.vars.daynightcycle = 2;
    this.audioEffects.volume = 100;
    this.visible = true;
    this.size = 100;
    this.costume = "kostium1";
    while (true) {
      yield* this.playSoundUntilDone("Minecraft Muzyka");
      yield;
    }
  }

  *whenIReceiveClick() {
    this.audioEffects.volume =
      0.75 * this.audioEffects.volume +
      0.25 *
        (this.toNumber(this.vars.loud) *
          this.toNumber(this.sprites["Loudness"].costume.name));
    yield* this.wait(0.1);
    this.audioEffects.volume =
      0.5 * this.audioEffects.volume +
      0.5 *
        (this.toNumber(this.vars.loud) *
          this.toNumber(this.sprites["Loudness"].costume.name));
    yield* this.wait(0.1);
    this.audioEffects.volume =
      0.25 * this.audioEffects.volume +
      0.75 *
        (this.toNumber(this.vars.loud) *
          this.toNumber(this.sprites["Loudness"].costume.name));
    yield* this.wait(0.1);
    this.audioEffects.volume =
      this.toNumber(this.vars.loud) *
      this.toNumber(this.sprites["Loudness"].costume.name);
  }
}
