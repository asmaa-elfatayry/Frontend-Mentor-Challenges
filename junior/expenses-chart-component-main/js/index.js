all_bars = document.querySelectorAll(".day div");
display_num = document.querySelector(".display");
console.log(all_bars);
all_bars.forEach((element) => {
  element.onmouseover = function (e) {
    element.style.cursor = "pointer";
    element.style.opacity = ".8";
    element.nextElementSibling.style.display = "block";
  };
  element.onmouseleave = function () {
    element.style.opacity = "1";
    element.nextElementSibling.style.display = "none";
  };
});
