export default class Mapa {
    constructor({ imagemFundo, altura, largura }) {
        this.mapaPng = imagemFundo;
        this.altura = altura;
        this.largura = largura;
    }
    get getMapaPng() {
        return this.mapaPng;
    }
    get getAltura() {
        return this.altura;
    }
    get getLargura() {
        return this.largura;
    }
}
