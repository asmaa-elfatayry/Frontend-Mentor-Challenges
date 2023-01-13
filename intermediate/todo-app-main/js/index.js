// ********************** our varaibales *************************
const theInput = document.querySelector("input");
const createCircle = document.querySelector(".create");
const listOfElement = document.querySelector(".todo-body");
const allElemBtn = document.querySelector(".all");
const activeElemBtn = document.querySelector(".waiting");
const completedElmBtn = document.querySelector(".complete");
const ClearcompletedElm = document.querySelector(".clearCom");
const theulParent = document.querySelector("#parent");
const changeTheme = document.querySelector("#theme");
const OptionsSpan = document.querySelector(".lastli .options");
const htmlElement = document.getElementsByTagName("html");
const topImgBg = document.querySelector(".main-bg .top");
const bottomBg = document.querySelector(".main-bg .bottom");
let allList;
let elementsNo = document.querySelector("#elements");
let liNum = 0;

// ********************** increment & decrement the number of element *************************

function addli() {
  liNum++;
  // chamge number of item when added
  elementsNo.textContent = liNum;
}
function removeli() {
  if (liNum > 0) {
    liNum--;
    elementsNo.textContent = liNum;
  }
}
// ********************** end increment & decrement the number of element *************************
// warn msg if input empty
function warnMsg() {
  alert("Please enter new task..");
}

// ********************** Radio button in create todo box  *************************
createCircle.addEventListener("click", function (e) {
  this.style.cursor = "pointer";
  // check if the input is empty -> alert the user
  // -> else call add function and increment the number of element and reset input
  if (theInput.value == "") {
    warnMsg();
  } else {
    addElement();
    addli();
    theInput.value = "";
  }
});
// ********************** end Radio button in create todo box  *************************
// ********************** start add new elemnt function  *************************/

function addElement() {
  // create and append the new list item
  let newLi = document.createElement("li");
  let checkcircle = document.createElement("div");
  let addedTask = document.createElement("h2");
  let del = document.createElement("img");
  del.setAttribute("src", "./images/icon-cross.svg");
  let containerdiv = document.createElement("div");
  addedTask.innerHTML = theInput.value;
  containerdiv.append(checkcircle, addedTask);
  newLi.append(containerdiv, del);
  theulParent.appendChild(newLi);
  // add classed and style
  del.classList.add("delete");
  newLi.classList.add("listyle");
  checkcircle.style.cursor = "pointer";
  checkcircle.classList.add("check-circle");
  checkcircle.setAttribute("onclick", "MakeDone(this)");
  // end created elemnt and styling

  /**************** delete the elemnt when click on the cross elemnt *****************/
  const allRem = document.querySelectorAll(".delete");
  for (let i = 0; i < allRem.length; i++) {
    allRem[i].addEventListener("click", function () {
      this.parentNode.remove();
      if (!this.parentNode.classList.contains("done")) {
        removeli();
      }
    });
  }
}
// ********************** end add new elemnt function  *************************/
// ********************** start function when completed my todo task   *************************/

function MakeDone(clickedEle) {
  removeli();
  clickedEle.parentElement.parentElement.classList.add("done");
}
// *************** function reset styles of the options all->active->completed  ******************/
function resetOptionsStyle() {
  allList = document.querySelectorAll(".listyle");
  for (let i = 0; i < 3; i++) {
    OptionsSpan.children[i].classList.remove("active");
  }
}
// ***************end function reset styles of the options   ******************/

/*our addEventListener handels */

// when click the all button will display all tasks completed and not completed
allElemBtn.addEventListener("click", () => {
  resetOptionsStyle();
  allElemBtn.classList.add("active");
  allList.forEach((li) => {
    li.style.display = "flex";
  });
});
// when click the completed button will display only tasks completed
completedElmBtn.addEventListener("click", () => {
  resetOptionsStyle();
  completedElmBtn.classList.add("active");
  allList.forEach((li) => {
    console.log(li);
    if (li.classList.contains("done")) {
      li.style.display = "flex";
    } else {
      li.style.display = "none";
    }
  });
});
// when click the active button will display only tasks not completed yet
activeElemBtn.addEventListener("click", () => {
  resetOptionsStyle();
  activeElemBtn.classList.add("active");
  allList.forEach((li) => {
    if (li.classList.contains("done")) {
      li.style.display = "none";
    } else {
      li.style.display = "flex";
    }
  });
});
// when click the clear completed button will clear all completed task
ClearcompletedElm.addEventListener("click", () => {
  allList = document.querySelectorAll(".listyle");
  for (let i = 0; i < allList.length; i++) {
    if (allList[i].classList.contains("done")) {
      allList[i].remove();
    }
  }
});

/************ change theme***************/
changeTheme.addEventListener("click", () => {
  changeTheme.classList.toggle("darkactive");
  changeMode();
});
function changeMode() {
  if (changeTheme.classList.contains("darkactive")) {
    if (window.innerWidth > 375) {
      topImgBg.style.backgroundImage = 'url("../images/bg-desktop-dark.jpg")';
    } else {
      topImgBg.style.backgroundImage = 'url("../images/bg-mobile-dark.jpg")';
    }
    document.body.setAttribute("data-theme", "dark");
    changeTheme.setAttribute("src", "./images/icon-sun.svg");
  } else {
    if (window.innerWidth > 375) {
      topImgBg.style.backgroundImage = 'url("../images/bg-desktop-light.jpg")';
    } else {
      topImgBg.style.backgroundImage = 'url("../images/bg-mobile-light.jpg")';
    }
    document.body.setAttribute("data-theme", "light");
    changeTheme.setAttribute("src", "./images/icon-moon.svg");
  }
}
