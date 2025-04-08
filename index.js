import { canvas, player, c, camera, scale, projectiles } from "./globals.js"



function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);

    // const centerOffsetX = canvas.width / 2 - (player.width * scale) / 2
    // const centerOffsetY = canvas.height / 2 - (player.height * scale) / 2

    // camera.x = player.position.x - centerOffsetX
    // camera.y = player.position.y - centerOffsetY

    player.update()

    for (let i = projectiles.length - 1; i >= 0; i--) {
        projectiles[i].update()
    
        if (projectiles[i].shouldDestroy) {
            projectiles.splice(i, 1)
        }
    }
    
    
}

animate()