
const navs = document.querySelectorAll(".head-nav ");
const menue = document.querySelector(".toggle-munue");
const close_menue = document.querySelector(".toggle-close");
const navTog = document.querySelector(".bloger-nav");
navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    // remove all style first
    navs.forEach((check) => {
      check.nextElementSibling.style.display = "none";
      check.style.textDecoration = "none";
      nav.childNodes[1].style.transform = "rotate(0deg)";
    });
    nav.style.textDecoration = "underline";

    nav.nextElementSibling.style.display = "block";

    nav.childNodes[1].style.transform = "rotate(180deg)";
  });

  nav.nextElementSibling.addEventListener("mouseleave", () => {
    nav.nextElementSibling.style.display = "none";
    nav.style.textDecoration = "none";
    nav.childNodes[1].style.transform = "rotate(0deg)";
  });
});

menue.addEventListener("click", () => {
  navs.forEach((nav) => {
    nav.childNodes[1].src = "./images/icon-arrow-dark.svg";
    nav.addEventListener("click", () => {
      nav.nextElementSibling.style.backgroundColor = "rgb(239,239,241)";
    });
  });
  menue.style.display = "none";
  close_menue.style.display = "flex";
  close_menue.style.cursor = "pointer";
  navTog.classList.add("toggle-bloger-nav");
});

close_menue.addEventListener("click", () => {
  menue.style.display = "flex";
  close_menue.style.display = "none";
  navTog.classList.remove("toggle-bloger-nav");
});

if (document.innerWidth > 375) {
  menue.style.display = "none";
  close_menue.style.display = "none";
}
