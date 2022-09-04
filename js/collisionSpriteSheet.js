// draw canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 700;
const explosions = []
let canvasPosition = canvas.getBoundingClientRect();

class Explosion {
    constructor(x, y){
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth * 0.7;
        this.height = this.spriteHeight * 0.7;
        this.x = x;
        this.y = y;
        // this.width = this.spriteWidth/2;
        // this.height = this.spriteHeight/2;
        // value * 0.5 = value /2 - Multiplication is faster then division on JS
        this.image = new Image();
        this.image.src = './img/collision/boom.png';
        this.frame = 0;
        this.timer = 0;
        this.angle = Math.random() * 6.2;
        this.sound = new Audio();
        this.sound.src = 'audio/blast.wav';
    }
    update(){
        if (this.frame === 0) this.sound.play();
        this.timer++;
        // run timer every 10 frames
        if(this.timer % 10 === 0){
            this.frame++;
        }
    }
    draw(){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, 0 - this.width/2, 0 - this.height/2, this.width, this.height);
        ctx.restore();
    }
}


window.addEventListener('click', function(event){
    createAnimation(event);
});
// window.addEventListener('mousemove', function(event){
//     createAnimation(event);
// });

function createAnimation(event){
    let positionX = event.x - canvasPosition.left;
    let positionY = event.y - canvasPosition.top;
    explosions.push(new Explosion(positionX,positionY));
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for(let a = 0; a < explosions.length; a++){
        explosions[a].update();
        explosions[a].draw();
        if(explosions[a].frame > 5){
            explosions.splice(a,1);
            a--;
        }
    }
    requestAnimationFrame(animate);
}

animate();