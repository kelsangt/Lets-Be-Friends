class ComputerInputs {
    constructor(mainGame, playerPet, opponentPet){
        this.mainGame = mainGame;
        this.playerPet = playerPet;
        this.opponentPet = opponentPet;
        let playerScore = document.getElementById("playerScore");
        let opponentScore = document.getElementById("opponentScore");
        // Moves
        this.corgi2 = document.getElementById("corgi2");

    }
    pickDecision(userInput){
        // const allArray = [movesArray, treatsArray, toysArray];

        // this.shouldContinue = true;
        const choicesArray = [
            ["Dance", 50],
            ["Sing", 30],
            ["Sleep", 40],
            ["PlayfulBark", 50],
            ["Jerky", 0.2],
            ["ChewyBeef", 0.3],
            ["MilkBone", 0.1],
            ["ChickenSticks", 0.5],
            ["Frisbee", -50],
            ["SqueakyBall", -30],
            ["GiraffePlush", -20],
            ["RubberBone", -40]
        ];
        let randomIndex = (Math.floor(Math.random() * choicesArray.length));
        let pickedChoiceName = choicesArray[randomIndex][0];
        let pickedChoiceVal = choicesArray[randomIndex][1];
        
        if(this.opponentPet.hp < 300){
            if(pickedChoiceName === "Jerky" || pickedChoiceName === "ChewyBeef" || pickedChoiceName === "MilkBone" || pickedChoiceName === "ChickenSticks"){
                let calculatedHappiness = Math.floor(this.playerPet.hp * pickedChoiceVal);
                if (this.opponentPet.hp >= calculatedHappiness){
                    this.opponentPet.hp -= calculatedHappiness;
                    opponentScore.innerHTML = "Spot's Happiness: " + this.opponentPet.hp;
                }
            } else if(pickedChoiceVal < 0) {
                if(this.opponentPet.hp >= Math.abs(pickedChoiceVal)){
                    this.opponentPet.hp += pickedChoiceVal;
                    opponentScore.innerHTML = "Spot's Happiness: " + this.opponentPet.hp;
                }
            } else {
                this.playerPet.hp += pickedChoiceVal;
                playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
            }
            
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
                this.corgi2.setAttribute('style',
                    'animation: none;'
                )
            });
            // this.mainGame.userInputs.clear();
            // this.mainGame.turn += 1;
            // this.mainGame.shouldContinue = true;
        }
        userInput.checkEverything();     // Tracking all game conditions 
        
    }

}

export default ComputerInputs;