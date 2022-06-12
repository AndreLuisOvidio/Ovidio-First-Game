import Sprite from './Sprite.js';
window.onload = function (){
    const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    var scene = new Image();
    scene.src = "/img/scene.png";


    var spriteSheet = new Image();
    spriteSheet.src = "/img/img.png";
    
    var zezim = new Sprite(spriteSheet);

    window.addEventListener("keydown", keydownHandler,false);
    window.addEventListener("keyup", keyupHandler,false);

    function keydownHandler(e){
        switch(e.keyCode){
            case RIGHT:
                zezim.mvRight = true;
                zezim.mvLeft = false;
                break;
            case LEFT:
                zezim.mvLeft = true;
                zezim.mvRight = false;
                break;
            case DOWN:
                zezim.mvDown = true;
                zezim.mvUp = false;
                break;
            case UP:
                zezim.mvUp = true;
                zezim.mvDown = false;
                break;
        }
    }

    function keyupHandler(e){
        switch(e.keyCode){
            case RIGHT:
                zezim.mvRight = false;
                break;
            case LEFT:
                zezim.mvLeft = false;
                break;
            case DOWN:
                zezim.mvDown = false;
                break;
            case UP:
                zezim.mvUp = false;
                break;
        }
    }

    spriteSheet.onload = function(){
        init();
    }

    function init(){
        zezim.posX = zezim.posY = 150;
        loop();
    }

    function update(){
        zezim.move();
    }

    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,canvas.width,canvas.height);
        zezim.draw(ctx);
    }

    function loop(){
        window.requestAnimationFrame(loop,canvas);
        update();
        draw();
    }

}