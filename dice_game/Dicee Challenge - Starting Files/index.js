var randomNumber1 = Math.floor( Math.random() * 6) + 1;
var randomNumber2 = Math.floor( Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice"+randomNumber1+".png";
var randomDiceImage2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

var result = "";

if (randomNumber1 > randomNumber2) {
    result = "Player1 won !";
} else if(randomNumber1 < randomNumber2){ 
    result = "Player2 won !"
}else{
    result = "Draw";
}

document.querySelector("h1").textContent = result;