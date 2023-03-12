class OpponentPet {
    constructor(mainGame){
        this.mainGame = mainGame;
        this.width = 100;
        this.height = 100;
        this.x = 340;
        this.y = 60;
        this.hp = 0;
        // this.image = document.getElementById("corgi");
    }

    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
        // context.drawImage(this.image, 100, 250, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}

export default OpponentPet;