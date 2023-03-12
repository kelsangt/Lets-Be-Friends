import PlayerPet from "./player_pet";
import OpponentPet from "./opponent_pet";
import UserInputs from "./user_inputs";

class MainGame {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.playerPet = new PlayerPet(this);
        this.opponentPet = new OpponentPet(this);
        this.userInputs = new UserInputs(this, this.playerPet, this.opponentPet);
        this.wins = 0;
        this.losses = 0;
        this.playerLeave = false;
    }
    display(context){
        this.playerPet.draw(context);
        this.opponentPet.draw(context);
        
    }
    // begin(context){
    //     while ((this.wins < 3) && (this.losses === 0) && (this.playerLeave === false)){
    //         this.display(context);
    //     }
    // }
}

export default MainGame;