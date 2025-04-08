import { c, player, keys } from "./globals.js";

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = true;
            player.handleInput();
            break;

        case 's':
            keys.s.pressed = true;
            player.handleInput();
            break;

        case 'a':
            keys.a.pressed = true;
            player.handleInput();
            break;

        case 'd':
            keys.d.pressed = true;
            player.handleInput();
            break;

        case 'i':
            player.setZeroVelocity()
            player.preventInput = true
            keys.i.pressed = true;

            player.switchSprite('thrustRight')

            setTimeout(() => {
                
                player.setIdle()
                player.preventInput = false
            }, 1000)

            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = false;
            player.handleInput();
            break;

        case 's':
            keys.s.pressed = false;
            player.handleInput();
            break;

        case 'a':
            keys.a.pressed = false;
            player.handleInput();
            break;

        case 'd':
            keys.d.pressed = false;
            player.handleInput();
            break;
        case 'i':
            break;
    }
});

