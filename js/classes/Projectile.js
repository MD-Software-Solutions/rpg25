import { c, camera } from "../../globals.js";

export class Projectile {
    constructor({ position, direction, imageSrc, speed = 6, lifetime = 1000 }) {
        this.position = { ...position };
        this.velocity = {
            x: direction === 'Right' ? speed : -speed,
            y: 0
        };

        this.image = new Image();
        this.image.src = imageSrc;
        this.width = 32;
        this.height = 32;
        this.loaded = false;

        this.image.onload = () => {
            this.loaded = true;
        };

        this.shouldDestroy = false;

        setTimeout(() => {
            this.shouldDestroy = true;
        }, lifetime);
    }

    update() {
        this.position.x += this.velocity.x;
        this.draw();
    }

    draw() {
        if (!this.loaded) return;

        c.drawImage(
            this.image,
            this.position.x - camera.x,
            this.position.y - camera.y,
            this.width,
            this.height
        );
    }
}
