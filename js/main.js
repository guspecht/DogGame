let playerState = 'fall';
let dropdownPlayerState = document.getElementById('animations');
dropdownPlayerState.addEventListener('change', (event)=> {
    playerState = event.target.value;
})

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_HEIGHT = canvas.height = 600;
const CANVAS_WIDTH = canvas.width = 600;

const playgerImage = new Image();
playgerImage.src = '/img/sprite/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const StaggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'gethit',
        frames: 4,
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let a = 0; a < state.frames; a++){
        let positionX = a * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/StaggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playgerImage, frameX, frameY, spriteWidth, spriteHeight, 0 , 0, spriteWidth, spriteHeight)

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();