import PlayerPet from "./player_pet";
import OpponentPet from "./opponent_pet";
import UserInputs from "./user_inputs";
import ComputerInputs from "./computer_inputs";

class MainGame {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.playerPet = new PlayerPet(this);
        this.opponentPet = new OpponentPet(this);
        this.computerInputs = new ComputerInputs(this, this.playerPet, this.opponentPet);
        this.userInputs = new UserInputs(this, this.playerPet, this.opponentPet);
        this.shouldContinue = true;
        this.wins = 0;
        this.losses = 0;
        this.turn = 0;                // Game starts out with turn being 0 so the user can make the first choice
        
    }
    display(context){
    
        this.playerPet.draw(context);
        this.opponentPet.draw(context);
        
        
    }
    play(){
        while (this.shouldContinue){ //((this.wins < 3) && (this.losses === 0) && (this.playerLeave === false)){
            // console.log(this.turn);
            // this.shouldContinue = false;

            if(this.wins >= 3){
                this.shouldContinue = false;
            }
            if(this.losses > 0){
                this.shouldContinue = false;
            }

            if(this.playerLeave === true){
                this.shouldContinue = false;
            }

            if(this.playerPet.hp > 300){
                this.losses += 1;
            }
            if(this.opponentPet.hp > 300){
                this.roundReset();
                this.wins += 1;
            }
            // if (this.turn % 2 === 0){     // If the current turn is even, the user can make a move
            //     // console.log(this.turn);
            //     // shouldContinue = true;
                
            //     console.log(this.shouldContinue);
            //     // this.userMakeMove()    // The code is not pausing here to listen for user click
            
            //     console.log(this.shouldContinue);
            //     // console.log(this.shouldContinue);
            //     console.log("hey");
                
            //     // this.userClearOptions();
            //     // this.turn += 1;
            // } else {                      // If the current turn is odd, the computer can make a move
            //     // this.userClearOptions();
            
            //     console.log("Computer's turn is: " + this.turn);
            //     this.computerMakeMove();
            //     console.log(this.shouldContinue);
            //     console.log(this.turn);
               
            //     // this.turn += 1;
            // }
            
        }

        alert("Game over!");    
    }

    userMakeMove(){    // Encapsulates ONE turn for the user. 
        // setTimeout(, 10000);  
        
        this.userInputs.pickDecision(); 

        // this.userInputs = new UserInputs(this, this.playerPet, this.opponentPet);
    }

    userClearOptions(){
        this.userInputs.clear();
    }

    computerMakeMove(){
        this.computerInputs.pickDecision();
    }

    // roundReset(){
    //     this.playerPet.hp = 0;
    //     this.opponentPet.hp = 0;
    // }

}

export default MainGame;