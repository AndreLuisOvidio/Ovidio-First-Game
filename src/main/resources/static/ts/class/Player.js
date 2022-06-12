export default class Player {
    constructor({ playerPng, altura, largura }) {
        this.posicaoX = 0;
        this.posicaoY = 0;
        this.altura = altura;
        this.largura = largura;
        this.playerPng = playerPng;
    }
    inputEvent(_e) {
        return;
    }
    mover() {
        return;
    }
    get getPosicaoX() {
        return this.posicaoX;
    }
    set setPosicaoX(posicaoX) {
        this.posicaoX = posicaoX;
    }
    get getPosicaoY() {
        return this.posicaoY;
    }
    set setPosicaoY(posicaoY) {
        this.posicaoY = posicaoY;
    }
    get getAltura() {
        return this.altura;
    }
    set setAltura(altura) {
        this.altura = altura;
    }
    get getLargura() {
        return this.largura;
    }
    set setLargura(largura) {
        this.largura = largura;
    }
    get getPlayerPng() {
        return this.playerPng;
    }
    set setPlayerPng(playerPng) {
        this.playerPng = playerPng;
    }
}
