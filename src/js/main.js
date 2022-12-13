/** @format */

var int;
function setInt() {
  clearInterval(int);
  int = setInterval(function () {
    var btns = document.getElementsByName("carousel");
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].checked) {
        btns[i].checked = false;
        if (i + 1 == btns.length) {
          btns[0].checked = true;
        } else {
          btns[i + 1].checked = true;
        }
        return;
      }
    }
  }, 5000);
}
setInt();


// Eyebrow switch
const imgElement = document.getElementById("eyebrow");

// the two links to switch between
const imgSrc1 = "images/left1.png";
const imgSrc2 = "images/left2.png";

// function to switch the img src
function switchImgSrc() {
  // generate a random number between 0 and 1
  const randomNumber = Math.random();

  // if the random number is less than 0.5, switch to the first link, otherwise switch to the second link
  imgElement.src = randomNumber < 0.5 ? imgSrc1 : imgSrc2;
}

// switch the img src every 500-1500ms
setInterval(switchImgSrc, 200 + Math.random() * 500);

// Call the function to start switching images
switchImages();


