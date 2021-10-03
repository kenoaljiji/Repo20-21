const button = document.querySelectorAll(".button");
const button2 = document.querySelectorAll(".button2");
const textArea = document.getElementById("display");
const capsLock = document.getElementById("capsLock");
const shift = document.getElementById("shift");

let text = "";

//Change a character on specific breakpoint

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth < 700) {
  button2[0].innerHTML = "&larr;";
  button2[1].innerHTML = "&#8682;";
}

window.addEventListener(
  "resize",
  function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 700) {
      button2[0].innerHTML = "&larr;";
      button2[1].innerHTML = "&#8682;";
    } else {
      button2[0].textContent = "Back Space";
      button2[1].innerHTML = "Caps Lock";
    }
  },
  false
);
//End of Change a character on specific breakpoint

// Functions //

function buttonClick(id) {
  const uppText = id.toUpperCase();
  const lowText = id.toLowerCase();

  if (
    capsLock.classList.contains("active") ||
    shift.classList.contains("active")
  ) {
    textArea.innerHTML += uppText;
    shift.classList.remove("active");
  } else {
    textArea.innerHTML += lowText;
  }
}

function specialButton(id) {
  text = textArea.textContent;

  if (id === "backSpace") {
    const str = textArea.value.substring(0, text.length - 1);
    textArea.innerHTML = str;
  }

  if (id === "capsLock") {
    capsLock.classList.toggle("active");
  }

  if (id === "shift") {
    shift.classList.toggle("active");
  }
  if (id === "enter") {
    textArea.innerHTML += "\n";
  }

  if (id === "submit") {
    alert(textArea.value);
  }
  if (id === "space") {
    textArea.innerHTML += "&nbsp;";
  }
}
