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
        this.turn = 0;                // Game starts out with turn being 0 so the user can make the first choice
        this.playerLeave = false;
    }
    display(context){
        this.playerPet.draw(context);
        this.opponentPet.draw(context);
        
    }
    play(){
        let shouldContinue = true;
        while (shouldContinue){ //((this.wins < 3) && (this.losses === 0) && (this.playerLeave === false)){

            shouldContinue = false;

            if(this.wins >= 3){
                shouldContinue = false;
            }
            if(this.losses > 0){
                shouldContinue = false;
            }

            if(this.playerLeave === true){
                shouldContinue = false;
            }

            if(this.playerPet.hp > 300){
                this.losses += 1;
            }
            if(this.opponentPet.hp > 300){
                this.roundReset();
                this.wins += 1;
            }
            if (this.turn % 2 === 0){     // If the current turn is even, the user can make a move
                // console.log(this.turn);
                // shouldContinue = true;
                this.userMakeMove();
                // this.userClearOptions();
                // this.turn += 1;
            } else {                      // If the current turn is odd, the computer can make a move
                console.log("Computer's turn is: " + this.turn);
                this.computerMakeMove();
                // console.log(this.turn);
                // shouldContinue = true;
                // this.turn += 1;
            }
            
        }
        // renderEndScreen()    After the game ends, it should render an end screen
    }
    userMakeMove(){    // Encapsulates ONE turn for the user. 
        this.userInputs = new UserInputs(this, this.playerPet, this.opponentPet);
    }

    userClearOptions(){
        this.userInputs.clear();
    }

    // computerMakeMove(){
    //     console.log("hey");
    //  
    // }

    roundReset(){
        this.playerPet.hp = 0;
        this.opponentPet.hp = 0;
    }
}

export default MainGame;