export const radioPlayerInit = () => {
  const radio = document.querySelector(".radio");
  const navigation = document.querySelector(".radio-navigation");
  const cover = document.querySelector(".radio-cover__img");
  const items = document.querySelectorAll(".radio-item");
  const header = document.querySelector(".radio-header__big");
  const stopBtn = document.querySelector(".radio-stop");

  const audio = new Audio();
  audio.type = "audio/aac";
  stopBtn.disabled = true;

  const changeIcon = () => {
    if (audio.paused) {
      radio.classList.remove("play");
      stopBtn.classList.add("fa-play");
      stopBtn.classList.remove("fa-stop");
    } else {
      radio.classList.add("play");
      stopBtn.classList.add("fa-stop");
      stopBtn.classList.remove("fa-play");
    }
  };
  const selectItem = (elem) => {
    items.forEach((item) => {
      item.classList.remove("select");
    });
    elem.classList.add("select");
  };
  navigation.addEventListener("change", (event) => {
    const target = event.target;
    const parent = target.closest(".radio-item");
    selectItem(parent);

    const title = parent.querySelector(".radio-name").textContent;
    header.textContent = title;

    const img = parent.querySelector(".radio-img").src;
    cover.src = img;

    audio.src = target.dataset.radioStantion;
    audio.play();
    stopBtn.disabled = false;
    changeIcon();
  });

  stopBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeIcon();
  });
};
