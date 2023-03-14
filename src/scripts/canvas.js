class Canvas {
    constructor(ele) {
        this.ele = ele;
        this.ctx = ele.getContext("2d");
        this.width = ele.width = 500;
        this.height = ele.height = 280;

        // const corgi = document.getElementById("corgi");
        // this.ctx.drawImage(corgi);
        
        // this.ctx.fillStyle = "rgb(234, 42, 233)";
        // this.ctx.fillRect(0, 0, this.width, this.height);


        // this.handleClick1 = this.handleClick1.bind(this);
        // this.ele.addEventListener("click", this.handleClick1)
    }

    // handleClick1() {
    //     this.ctx.fillStyle = "rgb(183, 43, 230)";
    //     this.ctx.fillRect(0, 0, this.width, this.height);
    // }

    // handleClick1 is the event handler, where the logic of the click event will occur
    // During my game logic implementation, this is where the text box choices 
    // logic will occur. A click on a particular box object ("Treats") will 
    // lead to the next available choices, such as which treats to display 
}

export default Canvas;



