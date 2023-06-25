const allButtons = document.querySelectorAll(".circle");
const triangle = document.querySelector(".bg-traingle");
const gameBody = document.querySelector(".game-body");
let theScore = document.querySelector("#score-no");
const overlay = document.querySelector(".overlay");
const closeRules = document.querySelector(".close");
let gameInProgress = true; // Flag to track game state
let score = Number(localStorage.getItem("score")) || 0;
theScore.textContent = score.toString();
document.addEventListener("DOMContentLoaded", () => {
  // handle DOMContentLoaded event
  GetUserChoosed();
});

function GetUserChoosed() {
  allButtons.forEach((ele) => {
    ele.addEventListener("click", () => {
      if (gameInProgress) {
        // Disable buttons during game
        allButtons.forEach((btn) => {
          btn.classList.add("disabled", "no-hover");
        });

        ele.classList.add("choosed");
        triangle.style.display = "none";
        StartGame(ele);
        gameInProgress = false; // Set game in progress flag to false
      }
    });
  });
}

function StartGame(item) {
  console.log(item);
  if (window.innerWidth > 399) {
    item.style.left = "125px";
    item.style.top = "-45px";
  } else {
    item.style.left = "10px";
    item.style.top = "-110px";
  }

  allButtons.forEach((btn) => {
    if (!btn.classList.contains("choosed")) {
      btn.style.display = "none";
      btn.ariaDisabled = null;
    } else {
      btn.ariaDisabled = null;
    }
  });
  setTimeout(HousePicked, 1000);
  // tell the user what he picked
  const picked = document.createElement("p");
  const pickedText = document.createTextNode("you picked");
  picked.appendChild(pickedText);
  if (window.innerWidth > 399) {
    picked.classList.add("picked");
  } else {
    picked.classList.add("picked-sm");
  }

  item.parentElement.append(picked);
  // computer choosed
  const housePickedContiner = document.createElement("div");
  if (window.innerWidth > 399) {
    housePickedContiner.classList.add("house-picked-container");
  } else {
    housePickedContiner.classList.add("house-picked-container-sm");
  }

  item.parentElement.append(housePickedContiner);
  const housePicked = document.createElement("p");
  const housePickedText = document.createTextNode("the house picked");
  housePicked.appendChild(housePickedText);
  if (window.innerWidth > 399) {
    housePicked.classList.add("house-picked");
  } else {
    housePicked.classList.add("house-picked-sm");
  }
  item.parentElement.append(housePicked);
}

function HousePicked() {
  let randomint = Math.floor(Math.random() * 3) + 1 - 1;

  if (!allButtons[randomint].classList.contains("choosed")) {
    allButtons[randomint].style.left = "auto";
    allButtons[randomint].style.zIndex = "2";
    allButtons[randomint].style.display = "block";
    allButtons[randomint].classList.add("house-choosed");
    if (window.innerWidth > 399) {
      allButtons[randomint].style.right = "44px";
      allButtons[randomint].style.top = "-48px";
      document.querySelector(".house-picked-container").style.display = "none";
      setTimeout(WinORLose, 2000);
    } else {
      allButtons[randomint].style.right = "-10px";
      allButtons[randomint].style.top = "-110px";
      document.querySelector(".house-picked-container-sm").style.display =
        "none";
      setTimeout(WinORLose, 2000);
    }
  } else {
    HousePicked();
  }
}

function WinORLose() {
  let state = 0;
  const userChoosed = document.querySelector(".choosed");
  const houseChoosed = document.querySelector(".house-choosed");
  if (userChoosed.classList.contains("rock-container")) {
    if (houseChoosed.classList.contains("scissor-container")) {
      state = 1;
    } else {
      state = 0;
    }
  } else if (userChoosed.classList.contains("scissor-container")) {
    if (houseChoosed.classList.contains("rock-container")) {
      state = 0;
    } else {
      state = 1;
    }
  } else if (userChoosed.classList.contains("paper-container")) {
    if (houseChoosed.classList.contains("rock-container")) {
      state = 1;
    } else {
      state = 0;
    }
  }
  Styling(state, userChoosed, houseChoosed);
}

function Styling(state, userChoosed, houseChoosed) {
  const circle1 = document.createElement("div");
  circle1.classList.add("circle1");
  const circle2 = document.createElement("div");
  circle2.classList.add("circle2");
  const circle3 = document.createElement("div");
  circle3.classList.add("circle3");
  if (state == 1) {
    score++;
    // userChoosed.classList.add("winner-one");
    userChoosed.parentElement.append(circle1, circle2, circle3);
    if (window.innerWidth > 399) {
      circle1.style.left = "-30px";
      circle1.style.top = "-85px";
      circle2.style.left = "-84px";
      circle2.style.top = "-139px";
      circle3.style.left = "-118px";
      circle3.style.top = "-173px";
    } else {
      circle1.classList.add("sm");
      circle2.classList.add("sm");
      circle3.classList.add("sm");
      circle1.style.left = "-6px";
      circle1.style.top = "-124px";
      circle2.style.left = "-31px";
      circle2.style.top = "-149px";
      circle3.style.left = "-55px";
      circle3.style.top = "-173px";
    }
    const winer = document.createElement("h2");
    winer.classList.add("winner");
    const winText = document.createTextNode("you win");
    winer.appendChild(winText);
    gameBody.append(winer);
    const playAgain = document.createElement("button");
    const btnText = document.createTextNode("play again");
    playAgain.appendChild(btnText);
    playAgain.classList.add("play-again");
    playAgain.style.color = "hsl(229, 25%, 31%)";
    gameBody.append(playAgain);
  } else if (state == 0) {
    if (score > 0) {
      score--;
    }
    // houseChoosed.classList.add("winner-one");
    houseChoosed.parentElement.append(circle1, circle2, circle3);
    if (window.innerWidth > 399) {
      circle1.style.right = "-100px";
      circle1.style.top = "-85px";
      circle2.style.right = "-156px";
      circle2.style.top = "-138px";
      circle3.style.right = "-192px";
      circle3.style.top = "-172px";
    } else {
      circle1.classList.add("sm");
      circle2.classList.add("sm");
      circle3.classList.add("sm");
      circle1.style.right = "-25px";
      circle1.style.top = "-125px";
      circle2.style.right = "-50px";
      circle2.style.top = "-150px";
      circle3.style.right = "-75px";
      circle3.style.top = "-173px";
    }

    const loser = document.createElement("h2");
    loser.classList.add("loser");
    const loseText = document.createTextNode("you lose");
    loser.appendChild(loseText);
    gameBody.append(loser);
    const playAgain = document.createElement("button");
    const btnText = document.createTextNode("play again");
    playAgain.appendChild(btnText);
    playAgain.classList.add("play-again");
    playAgain.style.color = "hsl(349, 71%, 52%)";
    gameBody.append(playAgain);
  } else {
    score = 0;
  }
  theScore.textContent = score.toString();
  localStorage.setItem("score", score); // Save the score in localStorage
  console.log(score);
  if (window.innerWidth > 399) {
    userChoosed.style.left = "10px";
    houseChoosed.style.right = "-60px";
    document.querySelector(".house-picked").style.right = "-44px";
    document.querySelector(".picked").style.left = "66px";
  }

  document.querySelector(".play-again").addEventListener("click", () => {
    window.location.reload();
  });
}

if (window.innerWidth < 399) {
  triangle.firstElementChild.setAttribute("src", "./images/bg-triangle.png");
}

function ShowRule() {
  overlay.style.display = "block";
  overlay.firstElementChild.style.display = "block";
}

closeRules.addEventListener("click", () => {
  overlay.style.display = "none";
  overlay.firstElementChild.style.display = "none";
});
