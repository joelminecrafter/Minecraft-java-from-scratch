/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite2/costumes/kostium1.svg", {
        x: 240,
        y: 180.15
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
    this.stage.watchers.backpack.visible = false;
    this.clearPen();
    this.visible = true;
    this.stage.watchers.worldwidth.visible = true;
    this.stage.watchers.worldheight.visible = true;
    this.stage.watchers.treesdensity.visible = true;
    this.stage.vars.worldwidth = 40;
    this.stage.vars.worldheight = 25;
    this.stage.vars.viewrange = 3;
    this.stage.vars.treesdensity = 0.04;
    this.stage.vars.mousecontrol = 0;
    this.stage.vars.fov = 100;
    this.stage.watchers.loading.visible = false;
    this.stage.vars.loading = "LOADING 0%";
    this.stage.vars.waterOn = 1;
  }

  *whenIReceiveHide() {
    this.stage.watchers.worldwidth.visible = false;
    this.stage.watchers.worldheight.visible = false;
    this.stage.watchers.treesdensity.visible = false;
    this.stage.watchers.loading.visible = true;
    this.stage.watchers.copyCtrlC.visible = false;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.visible = false;
  }
}
