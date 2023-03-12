import Canvas from "./scripts/canvas";
import MainGame from "./scripts/main_game";
import PlayerPet from "./scripts/player_pet";
import OpponentPet from "./scripts/opponent_pet";
import UserInputs from "./scripts/user_inputs";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector(".canvas");
    let canvasMain = new Canvas(canvas)

    const mainGame = new MainGame(canvas.width, canvas.height);

    mainGame.display(canvasMain.ctx);
    // mainGame.play();
    mainGame.play();
})

