export default class Sprite {
    constructor(img) {
        this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;
        this.srcX = this.srcY = 0;
        this.width = 24;
        this.height = 32;
        this.posX = this.posY = 0;
        this.img = img;
        this.speed = 2;
        this.countAnim = 0;
    }
        
    draw(ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height);
        this.animation();
    }

    move() {
        if (this.mvUp) {
            this.posY -= this.speed;
            this.srcY = this.height * 1;
        }
        if (this.mvDown) {
            this.posY += this.speed;
            this.srcY = this.height * 0;
        }
        if (this.mvRight) {
            this.posX += this.speed;
            this.srcY = this.height * 3;
        }
        if (this.mvLeft) {
            this.posX -= this.speed;
            this.srcY = this.height * 2;
        }
    }

    animation() {
        if (this.mvLeft || this.mvDown || this.mvUp || this.mvRight) {
            this.countAnim++;
            
            if (this.countAnim >= 40) {
                this.countAnim = 0;
            }
            this.srcX = Math.floor(this.countAnim / 5) * this.width;
        } else {
            this.srcX = 0;
        }
    }
}