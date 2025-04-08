import { player, projectiles } from "../../globals.js";
import { Projectile } from "./Projectile.js";

export class Key {
  constructor({ attackName = null } = {}) {
    this.pressed = false;
    this.attackName = attackName;
  }

  attack() {
    if (this.pressed) return;

    player.setZeroVelocity();
    player.preventInput = true;
    this.pressed = true;

    player.switchSprite(`${this.attackName + player.lastDirection}`);

    // Only thrust horizontally
    if (player.lastDirection === "Left" || player.lastDirection === "Right") {
      const offsetX = player.lastDirection === "Right" ? player.width : -16;

      projectiles.push(
        new Projectile({
          position: {
            x: player.position.x + offsetX,
            y: player.position.y + player.height / 2 - 16,
          },
          direction: player.lastDirection,
          imageSrc: "./gameAssets/effects/orb.png",
          speed: 8,
          lifetime: 800,
        })
      );
    }

    setTimeout(() => {
      player.switchSprite(`idle${player.lastDirection}`);
      player.preventInput = false;
      this.pressed = false;
    }, 610);
  }
}
