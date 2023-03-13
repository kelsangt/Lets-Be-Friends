class ComputerInputs {
    constructor(mainGame, playerPet, opponentPet){
        this.mainGame = mainGame;
        this.playerPet = playerPet;
        this.opponentPet = opponentPet;

        // Moves

    }
    pickDecision(){
        // const allArray = [movesArray, treatsArray, toysArray];
        this.shouldContinue = true;
        const movesArray = [
            ["dance", 50],
            ["sing", 30],
            ["wink", 40],
            ["bark", 50]
        ];

        let randomIndex = (Math.floor(Math.random() * movesArray.length));
        let pickedMoveName = movesArray[randomIndex][0];
        let pickedMoveVal = movesArray[randomIndex][1];

        this.playerPet.hp += pickedMoveVal;
        console.log(this.playerPet.hp);
        this.mainGame.turn += 1;
        this.mainGame.shouldContinue = true;
    }

}

export default ComputerInputs;