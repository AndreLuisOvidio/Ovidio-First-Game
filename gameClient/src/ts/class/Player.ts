
export interface PlayerProp {
    playerPng: HTMLImageElement;
    altura: number;
    largura: number;
}

export default class Player {
    private posicaoX: number;
    private posicaoY: number;
    private altura: number;
    private largura: number;
    private playerPng: HTMLImageElement;

    constructor({ playerPng, altura, largura }: PlayerProp) {
        this.posicaoX = 0;
        this.posicaoY = 0;
        this.altura = altura;
        this.largura = largura;
        this.playerPng = playerPng;
    }

    inputEvent(_e: KeyboardEvent) {
        return;
    }

    mover() {
        return;
    }

    
    public get getPosicaoX(): number {
        return this.posicaoX;
    }

    public set setPosicaoX(posicaoX: number){
        this.posicaoX = posicaoX;
    }

    public get getPosicaoY(): number {
        return this.posicaoY;
    }

    public set setPosicaoY(posicaoY: number){
        this.posicaoY = posicaoY;
    }

    public get getAltura(): number {
        return this.altura;
    }

    public set setAltura(altura: number){
        this.altura = altura;
    }

    public get getLargura(): number {
        return this.largura;
    }

    public set setLargura(largura: number){
        this.largura = largura;
    }

    public get getPlayerPng(): HTMLImageElement {
        return this.playerPng;
    }

    public set setPlayerPng(playerPng: HTMLImageElement){
        this.playerPng = playerPng;
    }

}