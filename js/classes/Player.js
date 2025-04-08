import { c, keys } from "../../globals.js";
import { Sprite } from "./Sprite.js";

export class Player extends Sprite {
    
    constructor({
        imageSrc,
        frameRate,
        frameRateH,
        currentFrameH,
        animations,
        loop
    }) {
        
        super({
            imageSrc,
            frameRate,
            frameRateH,
            animations,
            loop
        })
        this.position = {
            x:0,
            y:0
        }

        this.velocity = {
            x:0,
            y:0,
        }

        this.velConst = 6

        this.width = 64
        this.height = 64
        this.image = new Image()
        this.image.src = './gameAssets/wizard/wizard_idle.png'
        this.lastDirection = 'Left'
        this.currentFrameH = currentFrameH
        this.hitbox
        this.animations = animations
        this.preventInput = false
    

        setTimeout(() => {
            this.switchSprite('idleRight')
        }, 100)
        
    
    }

    switchSprite(name) {
        if (this.image === this.animations[name].image) return
        console.log(name)
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameRateH = this.animations[name].frameRateH
        this.currentFrameH = this.animations[name].currentFrameH
        this.frameBuffer = this.animations[name].frameBuffer
        this.loop = this.animations[name].loop
        this.currentAnimation = this.animations[name]
    }

    // draw() {
    //     // c.fillStyle = 'red';
    //     // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    //     c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    // }

    update() {
        this.updateHitbox();
        // c.fillStyle = 'rgba(0, 0, 255, 0.5)'
        // c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)

        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.draw();
    }

    updateHitbox() {
        this.hitbox = {
            position: {
              x: this.position.x + 80,
              y: this.position.y + 72,
            },
            width: 40,
            height: 62,
        }
    }

    handleInput(isAttack = false) {

        if (this.preventInput && isAttack === false) {
            console.log("PREVENT")
            return
        }

        if (keys.w.pressed) {
            this.switchSprite('walkUp')
            this.velocity.y = -this.velConst
            this.lastDirection = 'Up'
        } 
        
        if (keys.s.pressed) {
            this.switchSprite('walkDown')
            this.velocity.y = this.velConst
            this.lastDirection = 'Down'
        } 
         
        if (keys.a.pressed) {
            console.log("yes")
            this.switchSprite('walkLeft')
            this.velocity.x = -this.velConst
            this.lastDirection = 'Left'
        } 
        
        if (keys.d.pressed) {
            this.switchSprite('walkRight')
            this.velocity.x = this.velConst
            this.lastDirection = 'Right'
        } 

        if (!keys.w.pressed && !keys.s.pressed) {
            this.velocity.y = 0

            if (this.lastDirection === 'Down') {
                this.switchSprite('idleDown')
            }

            if (this.lastDirection === 'Up') {
                this.switchSprite('idleUp')
            }
        }

        if (!keys.a.pressed && !keys.d.pressed) {
            this.velocity.x = 0

            if (this.lastDirection === 'Left') {
                this.switchSprite('idleLeft')
            }

            if (this.lastDirection === 'Right') {
                this.switchSprite('idleRight')
            }
        }
    }

    setIdle() {
        this.setZeroVelocity();
        this.switchSprite('idleRight')
    }

    setZeroVelocity() {
        this.velocity.x = 0
        this.velocity.y = 0
    }
}