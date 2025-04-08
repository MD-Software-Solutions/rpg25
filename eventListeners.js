import { c, player, keys } from "./globals.js";

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      keys.w.pressed = true;
      player.handleInput();
      break;

    case "s":
      keys.s.pressed = true;
      player.handleInput();
      break;

    case "a":
      keys.a.pressed = true;
      player.handleInput();
      break;

    case "d":
      keys.d.pressed = true;
      player.handleInput();
      break;

    case "i":
      console.log(keys.i);
      keys.i.attack();

      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "w":
      keys.w.pressed = false;
      player.handleInput();
      break;

    case "s":
      keys.s.pressed = false;
      player.handleInput();
      break;

    case "a":
      keys.a.pressed = false;
      player.handleInput();
      break;

    case "d":
      keys.d.pressed = false;
      player.handleInput();
      break;
    case "i":
      break;
  }
});
