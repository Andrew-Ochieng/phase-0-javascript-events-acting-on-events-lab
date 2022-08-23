// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";


// moveDogerLeft
function moveDodgerLeft() {
	let leftValue = dodger.style.left.replace("px", "");
	let leftInt = parseInt(leftValue, 10);

	if (leftInt > 0) {
		dodger.style.left = `${leftInt - 1}px`;
	}
}




// moveDogerRight
function moveDodgerRight() {
	const rightvalue = dodger.style.left.replace("px", "");
	const rightInt = parseInt(rightvalue, 10);

	if (rightInt < 360) {
		dodger.style.left = `${rightInt + 1}px`;
	}
}


// var x = event.which || event.keyCode;
// use either which or keyCode, depending on browser support

//listener
document.addEventListener("keydown", function (event) {
	if (event.keyCode === 37) {
		moveDodgerLeft();
	}
	if (event.keyCode === 39) {
		moveDodgerRight();
	}
});







