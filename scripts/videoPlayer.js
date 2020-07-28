export const videoPlayerInit = () => {
  const player = document.querySelector(".video-player");
  const playBtn = document.querySelector(".video-button__play");
  const stopBtn = document.querySelector(".video-button__stop");
  const progress = document.querySelector(".video-progress");
  const timeTotal = document.querySelector(".video-time__total");
  const timePassed = document.querySelector(".video-time__passed");

  const toggleIcon = () => {
    if (player.paused) {
      playBtn.classList.remove("fa-pause");
      playBtn.classList.add("fa-play");
    } else {
      playBtn.classList.add("fa-pause");
      playBtn.classList.remove("fa-play");
    }
  };

  const togglePlay = () => {
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
    toggleIcon();
  };

  const stopPlay = () => {
    player.pause();
    player.currentTime = 0;
    toggleIcon();
  };

  const filterTime = (n) => (n < 10 ? "0" + n : n);

  player.addEventListener("click", togglePlay);
  playBtn.addEventListener("click", togglePlay);
  stopBtn.addEventListener("click", stopPlay);

  player.addEventListener("timeupdate", () => {
    const currentTime = player.currentTime;
    const duration = player.duration;

    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    let minutesTotal = Math.floor(duration / 60);
    let secondsTotal = Math.floor(duration % 60);

    timePassed.textContent = filterTime(minutes) + ":" + filterTime(seconds);
    timeTotal.textContent =
      filterTime(minutesTotal) + ":" + filterTime(secondsTotal);
    progress.value = (currentTime / duration) * 100;
  });

  progress.addEventListener("input", () => {
    const duration = player.duration;
    const val = progress.value;

    player.currentTime = (val * duration) / 100;
  });
};
