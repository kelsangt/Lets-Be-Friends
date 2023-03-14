

class PlayerPet {
    constructor(mainGame){
        this.mainGame = mainGame;
        this.width = 100;
        this.height = 100;
        this.x = 60;
        this.y = 170;
        this.hp = 0;
        // this.image = document.getElementById("sprites");
    }

    draw(context){
        // context.fillRect(this.x, this.y, this.width, this.height);
    //  context.drawImage(this.image, 50, 250, this.width, this.height, this.x, this.y, this.width, this.height)
    }

    // dance(opponentPet){
    //     console.log("DANCING IN PLAYERPET CLASS");
    //     opponentPet.hp += 50;
    // }
}

export default PlayerPet;