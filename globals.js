import { Key } from "./js/classes/Key.js";
import { Player } from "./js/classes/Player.js";

export const canvas = document.querySelector('canvas');
export const c = canvas.getContext('2d');

c.imageSmoothingEnabled = false

export const scale = 1.2

export const camera = {
    x: 0,
    y: 0
}


// Update canvas dimensions to match 40x22 tiles
canvas.width = window.innerWidth - 20; // Adjust for potential scrollbar width
canvas.height = window.innerHeight - 20; // Adjust for potential scrollbar height

export const keys = {
    w: new Key(),
    a: new Key(),
    s: new Key(),
    d: new Key(),
    i: new Key({isAttack: true}),
}

const animations = {
    idleDown: {
        frameRate: 2,
        frameBuffer: 9,
        frameRateH: 1,
        currentFrameH: 2,
        loop: true,
        imageSrc: './gameAssets/wizard/wizard_idle.png',
    },
    walkDown: {
        frameRate: 2,
        frameBuffer: 9,
        frameRateH: 4,
        currentFrameH: 2,
        loop: true,
        imageSrc: './gameAssets/wizard/wizard_walk.png', 
    },
    idleUp: {
        frameRate: 2,
        frameBuffer: 9,
        frameRateH: 1,
        currentFrameH: 0,
        loop: true,
        imageSrc: './gameAssets/wizard/wizard_idle.png',
    },
    walkUp: {
        frameRate: 2,
        frameBuffer: 9,
        frameRateH: 4,
        currentFrameH: 0,
        loop: true,
        imageSrc: './gameAssets/wizard/wizard_walk.png', 
    },
    walkLeft: {
        frameRate: 2,
        frameBuffer: 9,
        frameRateH: 4,
        currentFrameH: 1,
        loop: true,
        imageSrc: './gameAssets/wizard/wizard_walk.png', 
    },
    idleLeft: {
        frameRate: 2,
        frameBuffer: 9,
        frameRateH: 1,
        currentFrameH: 1,
        loop: true,
        imageSrc: './gameAssets/wizard/wizard_idle.png',
    },
    walkRight: {
        frameRate: 2,
        frameBuffer: 9,
        frameRateH: 4,
        currentFrameH: 3,
        loop: true,
        imageSrc: './gameAssets/wizard/wizard_walk.png', 
    },
    idleRight: {
        frameRate: 2,
        frameBuffer: 9,
        frameRateH: 1,
        currentFrameH: 3,
        loop: true,
        imageSrc: './gameAssets/wizard/wizard_idle.png',
    },
    thrustRight: {
        frameRate: 7,
        frameBuffer: 5,
        frameRateH: 1,
        currentFrameH: 3,
        loop: true,
        imageSrc: './gameAssets/wizard/wizard_thrust.png',
    }
};


export const player = new Player({
    imageSrc: './gameAssets/wizard/wizard_idle.png',
    frameRate: 2,
    frameRateH: 4,
    currentFrameH: 3,
    animations: animations
})

// player.switchSprite('idleRight')