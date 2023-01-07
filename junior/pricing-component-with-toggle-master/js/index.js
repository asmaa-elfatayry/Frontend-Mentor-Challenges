let toggleBtn = document.querySelector(".toggle");
let allHeading = document.querySelectorAll(".card h2");

let oldHeading = [199.99, 249.99, 399.99];
let newHeading = [19.99, 24.99, 39.99];

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("clicked");

  if (toggleBtn.classList.contains("clicked")) {
    for (let i = 0; i < allHeading.length; i++) {
      for (let j = 0; j < newHeading.length; j++) {
        allHeading[i].innerHTML = `&dollar;${newHeading[j]}`;
      }
    }
  } else {
    for (let i = 0; i < allHeading.length; i++) {
      for (let j = 0; j < oldHeading.length; j++) {
        allHeading[i].innerHTML = `&dollar;${oldHeading[j]}`;
      }
    }
  }
});
