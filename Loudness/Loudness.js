/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Loudness extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("100", "./Loudness/costumes/100.svg", { x: 14, y: 15 }),
      new Costume("0", "./Loudness/costumes/0.svg", { x: 14, y: 15 })
    ];

    this.sounds = [
      new Sound(
        "189567__brookmorgan__finger-click",
        "./Loudness/sounds/189567__brookmorgan__finger-click.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "*click*" },
        this.whenIReceiveClick
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.costumeNumber++;
    this.broadcast("*click*");
  }

  *whenIReceiveClick() {
    this.audioEffects.volume = this.toNumber(
      this.sprites["Loudness"].costume.name
    );
    yield* this.startSound("189567__brookmorgan__finger-click");
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = 100;
    this.audioEffects.volume = 100;
  }
}
