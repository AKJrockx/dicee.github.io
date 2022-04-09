var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").src = "/images/dice" + randomNum1 + ".png";
document.querySelector(".img2").src = "/images/dice" + randomNum2 + ".png";

if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
}
else if (randomNum2 > randomNum1) {
    document.querySelector("h1").textContent = "Player 2 Wins!"
} else {
    document.querySelector("h1").textContent = "Draw!"
}
