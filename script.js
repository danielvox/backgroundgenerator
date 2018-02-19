var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer: ', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

color1.value = "#FF0000";
color2.value = "#FFFF00";
body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
css.textContent = body.style.background;

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function randomNumber() {
	return Math.floor(Math.random() * 256);
}

function changeColor() {
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent = body.style.background + ";";
}

function generateColor() {
	var r1 = randomNumber();
	var g1 = randomNumber();
	var b1 = randomNumber();

	var r2 = randomNumber();
	var g2 = randomNumber();
	var b2 = randomNumber();

	var random1 = "rgb("+r1+", "+g1+", "+b1+")";
	var random2 = "rgb("+r2+", "+g2+", "+b2+")";

	body.style.background = "linear-gradient(to right, "+random1+", "+random2+")";
	color1.value = rgbToHex(randomNumber(), randomNumber(), randomNumber());
	color2.value = rgbToHex(randomNumber(), randomNumber(), randomNumber());
}



color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

random.addEventListener("click", generateColor);


