import { c, player, scale, camera } from "../../globals.js"

export class Sprite {
    constructor({
        imageSrc,
        loop = true,
        animations = null,
        frameRate = null,
        frameRateH = null,
        frameBuffer = 0,
        autoplay = true,
        position
    }) {

        this.position = position
        this.imageSrc = imageSrc
        this.loop = loop
        this.frameRate = frameRate
        this.frameRateH = frameRateH
        this.animations = animations
        this.autoplay = autoplay
        this.frameBuffer = frameBuffer
        this.currentFrame = 0
        this.elapsedFrames = 0



        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / this.frameRate
            this.height = this.image.height / this.frameRateH
        }

        this.image.src = this.imageSrc
        this.loaded = false

        if (this.animations) {
            for (let key in this.animations) {
              const image = new Image()
              image.src = this.animations[key].imageSrc
              this.animations[key].image = image
            }
        }
    }

    draw() {
      if (!this.loaded) return

      const cropbox = {
          position: {
              x: this.width * this.currentFrame,
              y: this.height * player.currentFrameH,
          },
          width: this.width,
          height: this.height,
      }

      // 👇 Apply camera offset here
      c.drawImage(
          this.image,
          cropbox.position.x,
          cropbox.position.y,
          cropbox.width,
          cropbox.height,
          this.position.x - camera.x,
          this.position.y - camera.y,
          cropbox.width * scale,
          cropbox.height * scale
      )

      this.updateFrames()
    }
  

    updateFrames() {
        // console.log("father")
        if (!this.autoplay) return
    
        this.elapsedFrames++
    
        if (this.elapsedFrames % this.frameBuffer === 0) {
          if (this.currentFrame < this.frameRate - 1) this.currentFrame++
          else if (this.loop) this.currentFrame = 0
        }
    
        if (this.currentAnimation?.onComplete) {
          if (
            this.currentFrame === this.frameRate - 1 &&
            !this.currentAnimation.isActive
          ) {
            this.currentAnimation.onComplete()
            this.currentAnimation.isActive = true
          }
        }
      }
}