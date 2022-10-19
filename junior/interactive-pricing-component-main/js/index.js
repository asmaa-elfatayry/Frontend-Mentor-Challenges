let btnToggle = document.querySelector(".toggle");
let range = document.getElementById("range");
let price = document.querySelector(".price");
let count = document.querySelector(".count");
let dis = document.querySelector(".discount");
btnToggle.addEventListener("click", function () {
  btnToggle.classList.toggle("clicked");
});
let discount = 0;
update();

if (btnToggle.classList.contains("clicked")) {
  discount = 0.25;
} else {
  discount = 0;
}
range.oninput = function () {
  update();
};
function update() {
  if (range.value < 50000) {
    count.innerHTML = fotmatCount(range.value);
    price.textContent = `$${calcPrice(16)}.00`;
  } else if (range.value < 10000) {
    count.innerHTML = fotmatCount(range.value);
    price.textContent = `$${calcPrice(14)}.00`;
  } else if (range.value < 1000000 - 10000) {
    count.innerHTML = fotmatCount(range.value);
    price.textContent = `$${calcPrice(26)}.00`;
  } else {
    count.innerHTML = fotmatCount(range.value);
    price.textContent = `$${calcPrice(38)}.00`;
  }
  range.onchange = function () {
    value = (range.value - range.min) / (range.max - range.min);
    range.style.backgroundImage = [
      "-webkit-gradient(",
      "linear, ",
      "left top, ",
      "right top, ",
      "color-stop(" + value + ",hsl(174, 77%, 80%)), ",
      "color-stop(" + value + ", hsl(224, 65%, 95%))",
      ")",
    ].join("");
  };

  range.onchange = function () {
    value = (range.value - range.min) / (range.max - range.min);
    range.style.backgroundImage = [
      "-webkit-gradient(",
      "linear, ",
      "left top, ",
      "right top, ",
      "color-stop(" + value + ",hsl(174, 77%, 80%)), ",
      "color-stop(" + value + ", hsl(224, 65%, 95%))",
      ")",
    ].join("");
  };
}
function fotmatCount(num) {
  num = Math.floor(num / 1000);
  if (num < 1000) {
    return `${num}K Pageviews`;
  } else if (num < 100000) {
    return `${num / 1000}M Pageviews`;
  }
}
function calcPrice(price) {
  return price * (1 - discount);
}
if (window.innerWidth < 375) {
  dis.innerHTML = "-25%";
}
