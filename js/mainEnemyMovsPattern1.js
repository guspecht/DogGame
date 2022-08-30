/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
CANVAS_WITDH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 10;
const enemyArrays = [];

let gameFrame = 0;

class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = './img/enemies/enemy1.png';
        // this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.frame = 0;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);

        this.flapSpeed = Math.floor(Math.random() * 4 + 2);
    }
    update(){
        // this.x += this.speed;
        this.x += Math.random() * 5 -2.5;
        // this.y += this.speed;
        this.y += Math.random() * 5 -2.5;
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,this.x, this.y, this.width, this.height);
    }
}

for (let a = 0; a < numberOfEnemies; a++){
    enemyArrays.push(new Enemy)
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WITDH, CANVAS_HEIGHT);
    enemyArrays.forEach(enemy => {
        enemy.update();
        enemy.draw()
    });
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();