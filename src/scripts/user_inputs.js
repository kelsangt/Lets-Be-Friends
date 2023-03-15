import Canvas from "./canvas";
import ComputerInputs from "./computer_inputs";

class UserInputs {
    constructor(mainGame, playerPet, opponentPet){
        this.mainGame = mainGame;
        this.playerPet = playerPet;
        this.opponentPet = opponentPet;
        this.pickDecision();
        this.computerInputs = new ComputerInputs(mainGame, playerPet, opponentPet);
        this.gamescreen = document.querySelector(".gamescreen");
        this.textbox = document.querySelector(".textbox");
        const roundComplete = document.getElementById("roundComplete");
        const victory = document.getElementById("victory");
        const defeat = document.getElementById("defeat");
        const playerLeaveScreen = document.getElementById("playerLeaveScreen");
        const canvas2 = document.querySelector(".canvas2");
        let canvasSecond = new Canvas(canvas2);
    }
    pickDecision(){
        const whatsnext = document.getElementById("whatsnext");

        // MOVES TEXT

        const danceText = document.getElementById("danceText");
        const playfulBarkText = document.getElementById("playfulBarkText");
        const singText = document.getElementById("singText");
        const sleepText = document.getElementById("sleepText");

        // MOVES DESCRIPTION

        const danceDescription = document.getElementById("danceDescription");
        const playfulBarkDescription = document.getElementById("playfulBarkDescription");
        const singDescription = document.getElementById("singDescription");
        const sleepDescription = document.getElementById("sleepDescription");

        // TREATS TEXT 

        const jerkyText = document.getElementById("jerkyText");
        const chewyBeefText = document.getElementById("chewyBeefText");
        const milkBoneText = document.getElementById("milkBoneText");
        const chickenSticksText = document.getElementById("chickenSticksText");

        // TREATS DESCRIPTION

        const jerkyDescription = document.getElementById("jerkyDescription");
        const chewyBeefDescription = document.getElementById("chewyBeefDescription");
        const milkBoneDescription = document.getElementById("milkBoneDescription");
        const chickenSticksDescription = document.getElementById("chickenSticksDescription");

        // TOYS TEXT

        const frisbeeText = document.getElementById("frisbeeText");
        const squeakyBallText = document.getElementById("squeakyBallText");
        const giraffePlushText = document.getElementById("giraffePlushText");
        const rubberBoneText = document.getElementById("rubberBoneText");

        // TOYS DESCRIPTION

        const frisbeeDescription = document.getElementById("frisbeeDescription");
        const squeakyBallDescription = document.getElementById("squeakyBallDescription");
        const giraffePlushDescription = document.getElementById("giraffePlushDescription");
        const rubberBoneDescription = document.getElementById("rubberBoneDescription");

        this.show(whatsnext);

        // DECISIONS

        let moves = document.getElementById("moves");
        this.show(moves);
        moves.addEventListener("click", e => {
            this.hide(moves);
            this.hide(treats);
            this.hide(toys);
            this.hide(leave);
            this.show(dance);
            this.show(playfulBark);
            this.show(sing);
            this.show(sleep);
            this.hide(whatsnext);
            // logic for changing main text box to all interaction moves belong here
        });

        let treats = document.getElementById("treats");
        this.show(treats);
        treats.addEventListener("click", e => {
            console.log("jerky");
            this.hide(moves);
            this.hide(treats);
            this.hide(toys);
            this.hide(leave);
            this.hide(whatsnext);
            this.show(jerky);
            this.show(chewyBeef);
            this.show(milkBone);
            this.show(chickenSticks);
        });

        let toys = document.getElementById("toys");
        this.show(toys);
        toys.addEventListener("click", e => {
            console.log("toys");
            this.hide(moves);
            this.hide(treats);
            this.hide(toys);
            this.hide(leave);
            this.hide(whatsnext);
            this.show(frisbee);
            this.show(squeakyBall);
            this.show(giraffePlush);
            this.show(rubberBone);
        });

        let leave = document.getElementById("leave");
        this.show(leave);
        leave.addEventListener("click", e => {
            console.log("leave");
            this.renderLeave();
            // this.mainGame.playerLeave = true;
            // this.hide(whatsnext);
        });

        // MOVES

        let dance = document.getElementById("dance");
        dance.addEventListener("click", e => {
            // Dance logic (how it affects opponent HP)
            this.hide(dance);
            this.hide(playfulBark);
            this.hide(sing);
            this.hide(sleep);
            this.show(danceText);
            this.hide(danceDescription);
            this.opponentPet.hp += 50;  
            console.log("Opponent HP: " + this.opponentPet.hp);
            // console.log("Current turn: " + this.mainGame.turn);
            // this.mainGame.turn += 1;
            // this.mainGame.shouldContinue = true;
            // console.log("Current turn: " + this.mainGame.turn);
            // console.log(this.mainGame.shouldContinue);
            
            
            // canvasSecond.ctx. = ; this will do animation for dancing    
        });

        danceText.addEventListener("click", e => {
            this.hide(danceText);
            this.computerInputs.pickDecision(this);
        });


        dance.addEventListener("mouseover", e => {
            this.hide(playfulBarkDescription);
            this.hide(singDescription);
            this.hide(sleepDescription);
            this.show(danceDescription);
        });


        let playfulBark = document.getElementById("playfulBark");
        playfulBark.addEventListener("click", e => {
            this.hide(dance);
            this.hide(playfulBark);
            this.hide(sing);
            this.hide(sleep);
            this.show(playfulBarkText);
            this.hide(playfulBarkDescription);
            this.opponentPet.hp += 700;  
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        playfulBarkText.addEventListener("click", e => {
            this.hide(playfulBarkText);
            this.computerInputs.pickDecision(this);
        });

        playfulBark.addEventListener("mouseover", e => {
            this.hide(danceDescription);
            this.hide(singDescription);
            this.hide(sleepDescription);
            this.show(playfulBarkDescription);
        })

        let sing = document.getElementById("sing");
        sing.addEventListener("click", e => {
            this.hide(dance);
            this.hide(playfulBark);
            this.hide(sing);
            this.hide(sleep);
            this.show(singText);
            this.hide(singDescription);
            this.opponentPet.hp += 30;
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        singText.addEventListener("click", e => {
            this.hide(singText);
            this.computerInputs.pickDecision(this);
        });

        sing.addEventListener("mouseover", e => {
            this.hide(danceDescription);
            this.hide(playfulBarkDescription);
            this.hide(sleepDescription);
            this.show(singDescription);
        })

        let sleep = document.getElementById("sleep");
        sleep.addEventListener("click", e => {
            this.hide(dance);
            this.hide(playfulBark);
            this.hide(sing);
            this.hide(sleep);
            this.show(sleepText);
            this.hide(sleepDescription);
            this.opponentPet.hp += 40;
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        sleepText.addEventListener("click", e => {
            this.hide(sleepText);
            this.computerInputs.pickDecision(this);
        });

        sleep.addEventListener("mouseover", e => {
            this.hide(danceDescription);
            this.hide(playfulBarkDescription);
            this.hide(singDescription);
            this.show(sleepDescription);
        })

        // TREATS

        let jerky = document.getElementById("jerky");
        jerky.addEventListener("click", e => {
            this.hide(chewyBeef);
            this.hide(milkBone);
            this.hide(chickenSticks);
            this.hide(jerky);
            this.show(jerkyText);
            this.hide(jerkyDescription);
            this.opponentPet.hp += 30;
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        jerkyText.addEventListener("click", e => {
            this.hide(jerkyText);
            this.computerInputs.pickDecision(this);
        });

        jerky.addEventListener("mouseover", e => {
            this.hide(chickenSticksDescription);
            this.hide(milkBoneDescription);
            this.hide(chewyBeefDescription);
            this.show(jerkyDescription);
        });

        let chewyBeef = document.getElementById("chewyBeef");
        chewyBeef.addEventListener("click", e => {
            this.hide(chewyBeef);
            this.hide(milkBone);
            this.hide(chickenSticks);
            this.hide(jerky);
            this.show(chewyBeefText);
            this.hide(chewyBeefDescription);
            this.opponentPet.hp += 40;
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        chewyBeefText.addEventListener("click", e => {
            this.hide(chewyBeefText);
            this.computerInputs.pickDecision(this);
        });

        chewyBeef.addEventListener("mouseover", e => {
            this.hide(chickenSticksDescription);
            this.hide(milkBoneDescription);
            this.hide(jerkyDescription);
            this.show(chewyBeefDescription);
        });

        let milkBone = document.getElementById("milkBone");
        milkBone.addEventListener("click", e => {
            this.hide(chewyBeef);
            this.hide(milkBone);
            this.hide(chickenSticks);
            this.hide(jerky);
            this.show(milkBoneText);
            this.hide(milkBoneDescription);
            this.opponentPet.hp += 50;
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        milkBoneText.addEventListener("click", e => {
            this.hide(milkBoneText);
            this.computerInputs.pickDecision(this);
        });

        milkBone.addEventListener("mouseover", e => {
            this.hide(chickenSticksDescription);
            this.hide(chewyBeefDescription);
            this.hide(jerkyDescription);
            this.show(milkBoneDescription);
        });

        let chickenSticks = document.getElementById("chickenSticks");
        chickenSticks.addEventListener("click", e => {
            this.hide(chewyBeef);
            this.hide(milkBone);
            this.hide(chickenSticks);
            this.hide(jerky);
            this.show(chickenSticksText);
            this.hide(chickenSticksDescription);
            this.opponentPet.hp += 20;
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        chickenSticksText.addEventListener("click", e => {
            this.hide(chickenSticksText);
            this.computerInputs.pickDecision(this);
        });

        chickenSticks.addEventListener("mouseover", e => {
            this.hide(milkBoneDescription);
            this.hide(chewyBeefDescription);
            this.hide(jerkyDescription);
            this.show(chickenSticksDescription);
        });


        // TOYS


        let frisbee = document.getElementById("frisbee");
        frisbee.addEventListener("click", e => {
            this.hide(frisbee);
            this.hide(squeakyBall);
            this.hide(giraffePlush);
            this.hide(rubberBone);
            this.show(frisbeeText);
            this.hide(frisbeeDescription);
            this.opponentPet.hp += 50;  
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        frisbeeText.addEventListener("click", e => {
            this.hide(frisbeeText);
            this.computerInputs.pickDecision(this);
        });

        frisbee.addEventListener("mouseover", e => {
            this.hide(squeakyBallDescription);
            this.hide(giraffePlushDescription);
            this.hide(rubberBoneDescription);
            this.show(frisbeeDescription);
        });

        let squeakyBall = document.getElementById("squeakyBall");
        squeakyBall.addEventListener("click", e => {
            this.hide(frisbee);
            this.hide(squeakyBall);
            this.hide(giraffePlush);
            this.hide(rubberBone);
            this.show(squeakyBallText);
            this.hide(squeakyBallDescription);
            this.opponentPet.hp += 30;  
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        squeakyBallText.addEventListener("click", e => {
            this.hide(squeakyBallText);
            this.computerInputs.pickDecision(this);
        });

        squeakyBall.addEventListener("mouseover", e => {
            this.hide(frisbeeDescription);
            this.hide(giraffePlushDescription);
            this.hide(rubberBoneDescription);
            this.show(squeakyBallDescription);
        });

        let giraffePlush = document.getElementById("giraffePlush");
        giraffePlush.addEventListener("click", e => {
            this.hide(frisbee);
            this.hide(squeakyBall);
            this.hide(giraffePlush);
            this.hide(rubberBone);
            this.show(giraffePlushText);
            this.hide(giraffePlushDescription);
            this.opponentPet.hp += 20;  
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        giraffePlushText.addEventListener("click", e => {
            this.hide(giraffePlushText);
            this.computerInputs.pickDecision(this);
        });

        giraffePlush.addEventListener("mouseover", e => {
            this.hide(frisbeeDescription);
            this.hide(squeakyBallDescription);
            this.hide(rubberBoneDescription);
            this.show(giraffePlushDescription);
        });

        let rubberBone = document.getElementById("rubberBone");
        rubberBone.addEventListener("click", e => {
            this.hide(frisbee);
            this.hide(squeakyBall);
            this.hide(giraffePlush);
            this.hide(rubberBone);
            this.show(rubberBoneText);
            this.hide(rubberBoneDescription);
            this.opponentPet.hp += 40;  
            console.log("Opponent HP: " + this.opponentPet.hp);
        });

        rubberBoneText.addEventListener("click", e => {
            this.hide(rubberBoneText);
            this.computerInputs.pickDecision(this);
        });

        rubberBone.addEventListener("mouseover", e => {
            this.hide(frisbeeDescription);
            this.hide(squeakyBallDescription);
            this.hide(giraffePlushDescription);
            this.show(rubberBoneDescription);
        });

        roundComplete.addEventListener("click", e => {
            this.hide(roundComplete);
            this.resetRound();
            this.renderAll();
        })
    }
    hide(ele){
        ele.style.display = "none";
    }

    show(ele){
        ele.style.display = "block";
    }

    clear(){
        this.hide(whatsnext);
        this.hide(moves);
        this.hide(treats);
        this.hide(toys);
        this.hide(leave);
    }

    renderAll(){
        this.show(this.gamescreen);
        this.show(this.textbox);
        this.show(whatsnext);
        this.show(moves);
        this.show(treats);
        this.show(toys);
        this.show(leave);
    }
    checkEverything(){
        if(this.playerPet.hp >= 300){
            this.renderDefeat();
            this.mainGame.losses += 1;
        }
        if(this.opponentPet.hp >= 300){
            if (this.mainGame.wins < 2){
                this.renderFade();
            }
            this.mainGame.wins += 1;
        }
        if(this.mainGame.wins >= 3){
            this.renderVictory();
        }
    }

    renderFade(){
        this.hide(this.gamescreen);
        this.hide(this.textbox);
        this.show(roundComplete);
    }

    
    resetRound(){
        this.playerPet.hp = 0;
        this.opponentPet.hp = 0;
    }

    renderRoundWin(){
        // const textbox = document.getElementById("maintextpng");
        // const background1 = document.querySelector(".canvas");
        // this.background1.style.display = "block";
        this.hide(whatsnext);
        this.hide(moves);
        this.hide(treats);
        this.hide(toys);
        this.hide(leave);
    }

    renderVictory(){
        this.hide(this.gamescreen);
        this.hide(this.textbox);
        this.show(victory);
    }

    renderDefeat(){
        this.hide(this.gamescreen);
        this.hide(this.textbox);
        this.show(defeat);
    }

    renderLeave(){
        this.hide(this.gamescreen);
        this.hide(this.textbox);
        this.clear();
        this.show(playerLeaveScreen);
    }

}

export default UserInputs;