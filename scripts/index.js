import { radioPlayerInit } from "./radioPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";
import { audioPlayerInit } from "./audioPlayer.js";

const playerBtns = document.querySelectorAll(".player-btn");
const playerBlocks = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");

const deactivatePlayer = () => {
  temp.style.display = "none";
  playerBtns.forEach((item) => item.classList.remove("active"));
  playerBlocks.forEach((item) => item.classList.remove("active"));
};

playerBtns.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    deactivatePlayer();
    btn.classList.add("active");
    playerBlocks[i].classList.add("active");
  })
);
radioPlayerInit();
audioPlayerInit();
videoPlayerInit();
