/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
CANVAS_WITDH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 20;
const enemyArrays = [];

let gameFrame = 0;

class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = './img/enemies/enemy4.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.frame = 0;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.flapSpeed = Math.floor(Math.random() * 4 + 2);
        // this.curve = Math.random() * 200 + 50;
        // this.path1 = Math.random() * 110 + 250;
        // this.path2 = Math.random() * 110 + 250;
        this.path1 = 90;
        this.path2 = 270;
        this.newX = Math.random() * canvas.width;
        this.newY = Math.random() * canvas.height;
        this.interval = Math.floor(Math.random() * 250 + 50);
    }
    update(){
        if(gameFrame % this.interval === 0){
            this.newX = Math.random() * (canvas.width - this.width);
            this.newY = Math.random() * (canvas.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/70;
        this.y -= dy/70;


        // Horizontal Movement
        // this.x = this.curve * Math.sin(this.angle * Math.PI/180) + (canvas.width/2 - this.width/2);

        // Vertical Movement
        // this.y = this.curve * Math.cos(this.angle * Math.PI/180) + (canvas.height/2 - this.height/2);
        
        // Circle Movement Does not Travel the entire Canvas
        // this.x = this.curve * Math.sin(this.angle * Math.PI/180) + (canvas.width/2 - this.width/2);
        // this.y = this.curve * Math.cos(this.angle * Math.PI/180) + (canvas.height/2 - this.height/2);
        // Circle Movement

        // Movement Does Travel the Canvas
        // this.x = canvas.width/2 * Math.cos(this.angle * Math.PI/this.path1 ) + (canvas.width/2 - this.width/2);
        // this.y = canvas.height/2 * Math.sin(this.angle * Math.PI/this.path2 ) + (canvas.height/2 - this.height/2);
        // Circle Movement


        // this.y += this.curve * Math.sin(this.angle); 
        if(this.x + this.width < 0) this.x = canvas.width

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