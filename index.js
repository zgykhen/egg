let opened = false;
const scene = document.querySelector(".postal");
const eggshell = document.querySelector(".casca");
const help = document.querySelector(".texto");

const toggleEggShell = () => {
  if (opened) {
    opened = false;
    eggshell.classList.remove("casca--opened");
    help.classList.remove("texto--opened");
  } else {
    opened = true;
    eggshell.classList.add("casca--opened");
    help.classList.add("texto--opened");
  }
};

scene.addEventListener("click", toggleEggShell);
