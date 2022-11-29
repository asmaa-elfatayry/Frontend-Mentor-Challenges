const menue = document.querySelector(".menue");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const hiddenUl = document.querySelector(".hidden");
document.addEventListener("load", function () {
  //window inner width ?
  if (window.innerWidth < 375) {
    menue.style.display = "flex";
    document.querySelector(".about-interactive img").src =
      "./images/mobile/image-interactive.jpg";
  } else {
    menue.style.display = "none";
    nav.style.display = "flex";
    document.querySelector(".about-interactive img").src =
      "./images/desktop/image-interactive.jpg";
  }
});

// add event on resize screen ?
window.addEventListener(
  "resize",
  function (event) {
    if (window.innerWidth < 375) {
      menue.style.display = "flex";
      document.querySelector(".about-interactive img").src =
        "./images/mobile/image-interactive.jpg";
    } else {
      menue.style.display = "none";
      close.style.display = "none";
      document.querySelector(".about-interactive img").src =
        "./images/desktop/image-interactive.jpg";
    }
  },
  true
);

menue.addEventListener("click", () => {
  menue.style.display = "none";
  close.style.display = "flex";
  nav.classList.add("sm");
  hiddenUl.style.display = "flex";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  menue.style.display = "flex";
  nav.classList.remove("sm");
  hiddenUl.style.display = "none";
});
