const button = document.querySelector(".js-flash-button");
const rotation = document.querySelector(".image-light-container");
const openLight = document.querySelector(".light");
let On = 0;
button.onclick = () => {
  let i;
  rotation.classList.toggle("try-open-light");
  i = (Math.random() * 10).toFixed();
  if (On === 0 && i < 2) {
    On = 1;
    rotation.classList.remove("try-open-light");
    openLight.classList.add("open-light");
  } else {
    On = 0;
    openLight.classList.remove("open-light");
  }
};
