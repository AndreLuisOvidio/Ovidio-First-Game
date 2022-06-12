
interface MapaProps{
    imagemFundo: HTMLImageElement;
    altura: number;
    largura: number;
}

export default class Mapa{

    private mapaPng:HTMLImageElement;
    private altura: number;
    private largura: number;

    
    
    constructor({imagemFundo, altura, largura} : MapaProps){
        this.mapaPng = imagemFundo;
        this.altura = altura;
        this.largura = largura;
    }
    
    
    public get getMapaPng() : HTMLImageElement{
        return this.mapaPng;
    }

    public get getAltura(): number {
        return this.altura;
    }

    public get getLargura(): number {
        return this.largura;
    }
    
    
}