var dice_array = ["./images/one.png", "./images/two.png", "./images/three.png", 
                    "./images/four.png", "./images/five.png", "./images/six.png"];
var dice_roll1, dice_roll2;

function handleClick() {
    dice_roll1 = Math.floor(Math.random() * 5);
    dice_roll2 = Math.floor(Math.random() * 5);
    console.log(dice_roll1, dice_roll2);
    document.querySelector("#dice-1").textContent = dice_roll1 + 1;
    document.querySelector("#dice-2").textContent = dice_roll2 + 1;
    if(dice_roll1 > dice_roll2 ) {
        document.querySelector(".player-name").textContent = "Player 1 HAS WONNNN !!!!!"
    }
    else if (dice_roll1 < dice_roll2 ) {
        document.querySelector(".player-name").textContent = "Player 2 HAS WONNNN !!!!!"
    }
    else {
        document.querySelector(".player-name").textContent = "IT IS A TIE !!!!!"
    }
    document.querySelector("#dice-img-1").src = dice_array[dice_roll1];
    document.querySelector("#dice-img-2").src = dice_array[dice_roll2];
}

