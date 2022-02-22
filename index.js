// Dice 1
var randomNumber1 = Math.floor(Math.random()*6)+1; // 1 - 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;// images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0]; // using img tag and specify index 0
// select img attribute @ index 0 which is the first image
image1.setAttribute("src", randomImageSource); // first input att name change, to what change to

// Dice 2
var randomNumber2 = Math.round(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// 2nd one in arr @ index 1

// Title depending on result of dice roll - which player wins
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "❤️ Player 1 Wins!";
  //in this case one h1 so singular
} else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "❤️ Player 2 Wins!";
} else { // equal same num in case of tie/draw
  document.querySelector("h1").innerHTML = "Draw!";
}
