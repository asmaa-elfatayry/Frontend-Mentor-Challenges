const nav_drops = document.querySelectorAll(".drop");
const menue = document.querySelector(".toggle-menue");
const close = document.querySelector(".toggle-close");
const nav = document.querySelector("nav");

nav_drops.forEach((drop) => {
  drop.addEventListener("click", () => {
    // reseat the style
    nav_drops.forEach((res) => {
      res.nextElementSibling.nextElementSibling.style.display = "none";
      drop.nextElementSibling.src = "./images/icon-arrow-down.svg";
    });
    // drop the menue
    drop.nextElementSibling.nextElementSibling.style.display = "block";
    drop.nextElementSibling.src = "../images/icon-arrow-up.svg";
  });
});

nav_drops.forEach((drop) => {
  drop.nextElementSibling.nextElementSibling.addEventListener(
    "mouseleave",
    () => {
      // drop the menue
      drop.nextElementSibling.nextElementSibling.style.display = "none";
      drop.nextElementSibling.src = "./images/icon-arrow-down.svg";
    }
  );
});

// show nav in mobile
menue.addEventListener("click", () => {
  menue.style.display = "none";
  close.style.display = "flex";
  nav.classList.add("shownav");
});

close.addEventListener("click", () => {
  close.style.display = "none";
  menue.style.display = "flex";
  nav.classList.remove("shownav");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 375) {
    menue.style.display = "none";
    close.style.display = "none";
  } else {
    menue.style.display = "flex";
  }
});
