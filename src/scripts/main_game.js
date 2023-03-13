import PlayerPet from "./player_pet";
import OpponentPet from "./opponent_pet";
import UserInputs from "./user_inputs";

class MainGame {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.playerPet = new PlayerPet(this);
        this.opponentPet = new OpponentPet(this);
        // this.userInputs = new UserInputs(this, this.playerPet, this.opponentPet);
        this.wins = 0;
        this.losses = 0;
        this.turn = 0;
        this.playerLeave = false;
    }
    display(context){
        this.playerPet.draw(context);
        this.opponentPet.draw(context);
        
    }
    play(){
        while ((this.wins < 3) && (this.losses === 0) && (this.playerLeave === false)){
            if(this.playerPet.hp > 300){
                this.losses += 1;
            }
            if(this.opponentPet.hp > 300){
                this.roundReset();
                this.wins += 1;
            }
            if (this.turn % 2 === 0){
                this.userMakeMove();
                this.turn += 1;
                // this.userClearOptions();
                // this.turn += 1;
            } else {
                this.computerMakeMove();
                this.turn += 1;
            }
            
        }
    }
    userMakeMove(){
        this.userInputs = new UserInputs(this, this.playerPet, this.opponentPet);
    }

    userClearOptions(){
        this.userInputs.clear();
    }

    // computerMakeMove(){

    // }
    roundReset(){
        this.playerPet.hp = 0;
        this.opponentPet.hp = 0;
    }
}

export default MainGame;