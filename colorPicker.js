console.log("CONNECTED");
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor(numSquares);
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
easyBtn.addEventListener("click", function() {
  numSquares = 3;
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  //generalte all new colors
  colors = generateRandomColors(numSquares);
  //pick new colors
  pickedColor = pickColor(numSquares);
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  for (var i = 3; i < squares.length; i++) {
    squares[i].style.display = "none";
  }
  h1.style.backgroundColor = "steelblue";
});
hardBtn.addEventListener("click", function() {
  numSquares = 6;
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  //generalte all new colors
  colors = generateRandomColors(numSquares);
  //pick new colors
  pickedColor = pickColor(numSquares);
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  for (var i = 3; i < squares.length; i++) {
    squares[i].style.display = "block";
  }
  h1.style.backgroundColor = "steelblue";
});
resetButton.addEventListener("click", function() {
  //generalte all new colors
  colors = generateRandomColors(6);
  //pick new colors
  pickedColor = pickColor(numSquares);
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  //change color display
  colorDisplay.textContent = pickedColor;
  //change background
  h1.style.backgroundColor = "steelblue";
});
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  //add listener to squares
  squares[i].addEventListener("click", function() {
    //console.log("Clicked a square");
    //grab color of clicked
    var clickedColor = this.style.backgroundColor;
    console.log(pickedColor);
    console.log(clickedColor);
    //compare color to picked one
    if (clickedColor == pickedColor) {
      console.log("Correct");
      messageDisplay.textContent = "Correct";
      changeColors(pickedColor);
      h1.style.backgroundColor = pickedColor;
    } else {
      console.log("Wrong");
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop all square
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  //change all match color
}

function pickColor(length) {
  var random = Math.floor(Math.random() * length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push intp array
    arr[i] = randomColor();
  };
  //return that array
  return arr;
}

function randomColor() {
  // pick a red
  var red = Math.floor(Math.random() * 256);
  // pick a green
  var green = Math.floor(Math.random() * 256);
  // pick a blue
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
