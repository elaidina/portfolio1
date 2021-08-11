const notes = document.getElementById("notes");
const addNote = document.getElementById("addNote");
const darkBtn = document.getElementById("darkBtn");
const darkPic = document.querySelector(".dark");
const navbar = document.querySelector("Nav");
const timeEl = document.querySelector(".time");
const time = new Date();
console.log(time);
timeEl.innerText = time;
setTimeout(() => {
  const time = new Date();
  console.log(time);
  timeEl.innerText = time;
}, 1000);
let isDark = false;
darkBtn.addEventListener("click", toggleColor);

function toggleColor() {
  if (isDark) {
    navbar.style.backgroundColor = "aliceblue";
    navbar.style.color = "black";
    darkPic.src = "dark.png";
    console.log("click");
    isDark = false;
  } else {
    navbar.style.backgroundColor = "grey";
    navbar.style.color = "white";
    darkPic.src = "girl.png";
    console.log("click2");
    isDark = true;
  }
}
