import Mapa from "./Mapa.js";
import Player from "./Player.js";
export default class GameState {
    constructor({ mapa, players, canvas }) {
        this.mapa = mapa;
        this.players = players;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.nada = "varius nada";
    }
    static startTeste() {
        var mapaPng = new Image();
        mapaPng.src = "/img/scene.png";
        var playerPng = new Image();
        playerPng.src = "/img/img.png";
        var mapa = new Mapa({
            imagemFundo: mapaPng,
            altura: mapaPng.height,
            largura: mapaPng.width
        });
        var players = [new Player({
                playerPng: playerPng,
                altura: playerPng.height,
                largura: playerPng.width
            })];
        window.onkeydown = players[0].inputEvent;
        var gameState = new GameState({
            mapa,
            players,
            canvas: document.querySelector("canvas")
        });
        mapaPng.onload = gameState.init;
        return gameState;
    }
    init() {
        this.loop;
    }
    update() {
        this.players.forEach(player => {
            player.mover();
        });
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.mapa.getMapaPng, 0, 0, this.mapa.getAltura, this.mapa.getLargura, 0, 0, this.canvas.width, this.canvas.height);
        this.players.forEach(player => {
            this.ctx.drawImage(player.getPlayerPng, player.getPosicaoX, player.getPosicaoY, player.getAltura, player.getLargura);
        });
    }
    loop() {
        window.requestAnimationFrame(this.loop);
        this.update();
        this.draw();
    }
}
