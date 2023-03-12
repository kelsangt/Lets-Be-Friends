import Canvas from "./canvas";

class UserInputs {
    constructor(mainGame, playerPet, opponentPet){
        this.mainGame = mainGame;
        this.playerPet = playerPet;
        this.opponentPet = opponentPet;

        const canvas2 = document.querySelector(".canvas2");
        let canvasSecond = new Canvas(canvas2);

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
            // this.mainGame.playerLeave = true;
            this.hide(whatsnext);
        });

        // MOVES

        let dance = document.getElementById("dance");
        dance.addEventListener("click", e => {
            console.log("DANCING IN USER INPUT CLASS");
            // Dance logic (how it affects opponent HP)
            this.hide(dance);
            this.hide(playfulBark);
            this.hide(sing);
            this.hide(sleep);
            this.show(danceText);
            this.hide(danceDescription);
            console.log(this.opponentPet.hp);
            this.opponentPet.hp += 50;  // This is the move logic working (need it to persist, however)
            console.log(this.opponentPet.hp);
            // canvasSecond.ctx. = ; this will do animation for dancing    
        });
        dance.addEventListener("mouseover", e => {
            this.hide(playfulBarkDescription);
            this.hide(singDescription);
            this.hide(sleepDescription);
            this.show(danceDescription);
        });


        let playfulBark = document.getElementById("playfulBark");
        playfulBark.addEventListener("click", e => {
            console.log("bark!!");
            this.hide(dance);
            this.hide(playfulBark);
            this.hide(sing);
            this.hide(sleep);
            this.show(playfulBarkText);
            console.log(this.opponentPet.hp);
            this.opponentPet.hp += 70;  
            console.log(this.opponentPet.hp);
            this.hide(playfulBarkDescription);
        });

        playfulBark.addEventListener("mouseover", e => {
            this.hide(danceDescription);
            this.hide(singDescription);
            this.hide(sleepDescription);
            this.show(playfulBarkDescription);
        })

        let sing = document.getElementById("sing");
        sing.addEventListener("click", e => {
            console.log("singing!!");
            this.hide(dance);
            this.hide(playfulBark);
            this.hide(sing);
            this.hide(sleep);
            this.show(singText);
            this.opponentPet.hp += 30;
            this.hide(singDescription);
        });

        sing.addEventListener("mouseover", e => {
            this.hide(danceDescription);
            this.hide(playfulBarkDescription);
            this.hide(sleepDescription);
            this.show(singDescription);
        })

        let sleep = document.getElementById("sleep");
        sleep.addEventListener("click", e => {
            console.log("zzzzz!!");
            this.hide(dance);
            this.hide(playfulBark);
            this.hide(sing);
            this.hide(sleep);
            this.show(sleepText);
            console.log(playerPet.hp);
            this.playerPet.hp -= 40;
            console.log(playerPet.hp);
            this.hide(sleepDescription);
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
        });

        let chewyBeef = document.getElementById("chewyBeef");
        chewyBeef.addEventListener("click", e => {
            this.hide(chewyBeef);
            this.hide(milkBone);
            this.hide(chickenSticks);
            this.hide(jerky);
            this.show(chewyBeefText);
        });

        let milkBone = document.getElementById("milkBone");
        milkBone.addEventListener("click", e => {
            this.hide(chewyBeef);
            this.hide(milkBone);
            this.hide(chickenSticks);
            this.hide(jerky);
            this.show(milkBoneText);
        });

        let chickenSticks = document.getElementById("chickenSticks");
        chickenSticks.addEventListener("click", e => {
            this.hide(chewyBeef);
            this.hide(milkBone);
            this.hide(chickenSticks);
            this.hide(jerky);
            this.show(chickenSticksText);
        });

        // TOYS


        let frisbee = document.getElementById("frisbee");
        frisbee.addEventListener("click", e => {
            this.hide(frisbee);
            this.hide(squeakyBall);
            this.hide(giraffePlush);
            this.hide(rubberBone);
            this.show(frisbeeText);
        });

        let squeakyBall = document.getElementById("squeakyBall");
        squeakyBall.addEventListener("click", e => {
            this.hide(frisbee);
            this.hide(squeakyBall);
            this.hide(giraffePlush);
            this.hide(rubberBone);
            this.show(squeakyBallText);
        });

        let giraffePlush = document.getElementById("giraffePlush");
        giraffePlush.addEventListener("click", e => {
            this.hide(frisbee);
            this.hide(squeakyBall);
            this.hide(giraffePlush);
            this.hide(rubberBone);
            this.show(giraffePlushText);
        });

        let rubberBone = document.getElementById("rubberBone");
        rubberBone.addEventListener("click", e => {
            this.hide(frisbee);
            this.hide(squeakyBall);
            this.hide(giraffePlush);
            this.hide(rubberBone);
            this.show(rubberBoneText);
        });
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
}

export default UserInputs;