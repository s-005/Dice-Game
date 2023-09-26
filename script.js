var randomnum = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomnum + ".png";
var imgsrc = "Image/" + randomImage;
var I1 = document.querySelectorAll("img")[0];
I1.setAttribute("src", imgsrc);

var randomnum2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomnum2 + ".png";
var imgsrc2 = "Image/" + randomImage2;
var I2 = document.querySelectorAll("img")[1];
I2.setAttribute("src", imgsrc2);

if (randomnum > randomnum2) {
  document.getElementById("answer").innerHTML = "Player1 Wins"
}
else if (randomnum < randomnum2) {
  document.getElementById("answer").innerHTML = "Player2 Wins"
}