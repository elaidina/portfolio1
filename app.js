const darkBtn = document.getElementById("darkBtn");
const darkPic = document.querySelector(".dark");
const navbar = document.querySelector("Nav");
const timeEl = document.querySelector(".time");

const notes = document.getElementById("notes");
const addNote = document.getElementById("addNote");
const form = document.querySelector(".notesForm");
let newNote = document.getElementById("newNote");
// console.log(newNote);
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let note = event.target[0].value;

    if (note) {
      const noteLi = document.createElement("li");
      // noteLi.classList.add("")
      noteLi.innerHTML = note;
      notes.appendChild(noteLi);
      event.target[0].value = "";
    }
  });
}

setInterval(() => {
  const time = new Date();
  // console.log(time);
  if (timeEl) {
    timeEl.innerText = time;
  }
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
