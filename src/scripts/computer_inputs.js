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
            ["Dance", 50],
            ["Sing", 30],
            ["Sleep", 40],
            ["PlayfulBark", 50]
        ];

        let randomIndex = (Math.floor(Math.random() * movesArray.length));
        let pickedMoveName = movesArray[randomIndex][0];
        let pickedMoveVal = movesArray[randomIndex][1];

        this.playerPet.hp += pickedMoveVal;
        // console.log(this.playerPet.hp);
        console.log("HEY IM A COMPUTER");
        let element = document.getElementById("computer" + pickedMoveName + "Text");
        element.style.display = "block";
        element.addEventListener("click", e => {
            element.style.display = "none";
        })
        // this.mainGame.userInputs.clear();
        this.mainGame.turn += 1;
        this.mainGame.shouldContinue = true;
    }

}

export default ComputerInputs;