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
        const nextarrow = document.getElementById("nextarrow");
        let playerScore = document.getElementById("playerScore");
        let opponentScore = document.getElementById("opponentScore");
        let currentRound = document.getElementById("currentRound");
        const canvas2 = document.querySelector(".canvas2");
        let canvasSecond = new Canvas(canvas2);
        this.playerPet2 = document.getElementById("playerpet2");
        this.corgi2 = document.getElementById("corgi2");
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
            this.show(nextarrow);
            this.hide(danceDescription);
            this.opponentPet.hp += 50;
            opponentScore.innerHTML = "Spot's Happiness: " + this.opponentPet.hp;

            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )

            
            // canvasSecond.ctx. = ; this will do animation for dancing    
        });

        danceText.addEventListener("click", e => {
            this.hide(danceText);
            this.computerInputs.pickDecision(this);

            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(playfulBarkDescription);
            this.opponentPet.hp += 70;  
            opponentScore.innerHTML = "Spot's Happiness: " + this.opponentPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        playfulBarkText.addEventListener("click", e => {
            this.hide(playfulBarkText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(singDescription);
            this.opponentPet.hp += 30;
            opponentScore.innerHTML = "Spot's Happiness: " + this.opponentPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        singText.addEventListener("click", e => {
            this.hide(singText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(sleepDescription);
            this.opponentPet.hp += 40;
            opponentScore.innerHTML = "Spot's Happiness: " + this.opponentPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        sleepText.addEventListener("click", e => {
            this.hide(sleepText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(jerkyDescription);
            let calculatedHappinessPlayer = Math.floor(this.opponentPet.hp * 0.2);
            if(this.playerPet.hp >= calculatedHappinessPlayer){
                this.playerPet.hp -= calculatedHappinessPlayer;
            } 
            playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        jerkyText.addEventListener("click", e => {
            this.hide(jerkyText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(chewyBeefDescription);
            let calculatedHappinessPlayer = Math.floor(this.opponentPet.hp * 0.3);
            if(this.playerPet.hp >= calculatedHappinessPlayer){
                this.playerPet.hp -= calculatedHappinessPlayer;
            } 
            playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        chewyBeefText.addEventListener("click", e => {
            this.hide(chewyBeefText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(milkBoneDescription);
            let calculatedHappinessPlayer = Math.floor(this.opponentPet.hp * 0.1);
            if(this.playerPet.hp >= calculatedHappinessPlayer){
                this.playerPet.hp -= calculatedHappinessPlayer;
            } 
            playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        milkBoneText.addEventListener("click", e => {
            this.hide(milkBoneText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(chickenSticksDescription);
            let calculatedHappinessPlayer = Math.floor(this.opponentPet.hp * 0.5);
            if(this.playerPet.hp >= calculatedHappinessPlayer){
                this.playerPet.hp -= calculatedHappinessPlayer;
            } 
            playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        chickenSticksText.addEventListener("click", e => {
            this.hide(chickenSticksText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(frisbeeDescription);
            if (this.playerPet.hp >= 50){
                this.playerPet.hp -= 50;
            }  
            playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        frisbeeText.addEventListener("click", e => {
            this.hide(frisbeeText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(squeakyBallDescription);
            if (this.playerPet.hp >= 30){
                this.playerPet.hp -= 30;
            }  
            playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        squeakyBallText.addEventListener("click", e => {
            this.hide(squeakyBallText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(giraffePlushDescription);
            if (this.playerPet.hp >= 20){
                this.playerPet.hp -= 20;
            }  
            playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        giraffePlushText.addEventListener("click", e => {
            this.hide(giraffePlushText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
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
            this.show(nextarrow);
            this.hide(rubberBoneDescription);
            if (this.playerPet.hp >= 40){
                this.playerPet.hp -= 40;
            }  
            playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
            this.playerPet2.setAttribute('style',
                'animation: shake 0.2s;'
            )
        });

        rubberBoneText.addEventListener("click", e => {
            this.hide(rubberBoneText);
            this.computerInputs.pickDecision(this);
            this.playerPet2.setAttribute('style',
                'animation: none;'
            )
            if (this.opponentPet.hp < 300) {
                this.corgi2.setAttribute('style',
                    'animation: shake 0.2s;'
                )
            }
        });

        rubberBone.addEventListener("mouseover", e => {
            this.hide(frisbeeDescription);
            this.hide(squeakyBallDescription);
            this.hide(giraffePlushDescription);
            this.show(rubberBoneDescription);
        });

        roundComplete.addEventListener("click", e => {
            this.hide(roundComplete);
            this.hide(nextarrow);
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
        playerScore.innerHTML = "Fido's Happiness: " + this.playerPet.hp;
        opponentScore.innerHTML = "Spot's Happiness: " + this.opponentPet.hp;
        this.mainGame.currentRoundVal += 1;
        currentRound.innerHTML = "Round: " + this.mainGame.currentRoundVal;
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