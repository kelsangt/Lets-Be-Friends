class ComputerInputs {
    constructor(mainGame, playerPet, opponentPet){
        this.mainGame = mainGame;
        this.playerPet = playerPet;
        this.opponentPet = opponentPet;
        let playerScore = document.getElementById("playerScore");
        // Moves

    }
    pickDecision(userInput){
        // const allArray = [movesArray, treatsArray, toysArray];

        // this.shouldContinue = true;
        const choicesArray = [
            ["Dance", 50],
            ["Sing", 30],
            ["Sleep", 40],
            ["PlayfulBark", 50],
            ["Jerky", 30],
            ["ChewyBeef", 40],
            ["MilkBone", 50],
            ["ChickenSticks", 20],
            ["Frisbee", 50],
            ["SqueakyBall", 30],
            ["GiraffePlush", 20],
            ["RubberBone", 40]
        ];
        let randomIndex = (Math.floor(Math.random() * choicesArray.length));
        let pickedChoiceName = choicesArray[randomIndex][0];
        let pickedChoiceVal = choicesArray[randomIndex][1];
        
        if(this.opponentPet.hp <300){
            this.playerPet.hp += pickedChoiceVal;
            playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
            console.log("Player HP: " + this.playerPet.hp);
        }
        if ((this.opponentPet.hp < 300) && (this.playerPet.hp < 300)){

        
            let element = document.getElementById("computer" + pickedChoiceName + "Text");
            element.style.display = "block";
            element.addEventListener("click", e => {
                element.style.display = "none";
                if((this.playerPet.hp < 300) ){
                    userInput.hide(nextarrow);
                    userInput.show(moves);
                    userInput.show(treats);
                    userInput.show(toys);
                    userInput.show(leave);
                    userInput.show(whatsnext);
                }
            });
            // this.mainGame.userInputs.clear();
            // this.mainGame.turn += 1;
            // this.mainGame.shouldContinue = true;
        }
        userInput.checkEverything();     // Tracking all game conditions 
        console.log("LOSSES: " + this.mainGame.losses);
        console.log("WINS: " + this.mainGame.wins);
    }

}

export default ComputerInputs;