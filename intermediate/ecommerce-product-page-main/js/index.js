// get all varibles
let mainImg = document.querySelector(".main");
let allProducts = document.querySelectorAll(".products ul li img");
let bodyOverlay = document.querySelector(".overlay-main");
let closeBodyOverlay = document.querySelector(".close");
let openProducts = document.querySelector(".openProduct");
let myCart = document.querySelector(".mycart");
let nextBtn = document.querySelector(".next");
let prevtBtn = document.querySelector(".prev");
let openCart = document.querySelector(".seeCart");
let plusProduct = document.querySelector(".plus");
let removeProduct = document.querySelector(".minus");
let numberofProduct = document.querySelector(".No-p");
let addToCartBtn = document.querySelector(".addtocart");
let productname = document.querySelector(".productName");
let cartEmpty = document.querySelector(".mycart .container p");
let cartContainer = document.querySelector(".mycart .container");
let toggleMenue = document.querySelector(".toggle");
let menue = document.querySelector(".toggle-mune");
let price;
let discount;
let res;
let exprestion;

// loop on all product image and activate the image when selected it
allProducts.forEach((img) => {
  img.parentElement.addEventListener("click", () => {
    activeImage();
    //  resetb athor product image
    allProducts.forEach((img) => {
      img.classList.remove("active");
      img.previousElementSibling.style.display = "none";
    });
    // change main image when select anthor product
    let newSrc = img.getAttribute("src").replace("-thumbnail", "");
    // console.log(newSrc);
    // change main image and popup image
    mainImg.setAttribute("src", newSrc);
    openProducts.setAttribute("src", newSrc);
    // activate image
    img.classList.add("active");
    // make the overlay on the image block -> show it
    img.previousElementSibling.style.display = "block";
    // console.log(img.previousElementSibling);
  });
});

// when click on the main image open a gallery image
// and display overlay behind my gallery
openProducts.addEventListener("click", () => {
  mainImg.style.cursor = "pointer";
  bodyOverlay.style.display = "flex";
});

// when click next button in gallery product
nextBtn.addEventListener("click", () => {
  // get src of current image
  src = mainImg.getAttribute("src");
  // console.log(mainImg.getAttribute("src"));
  // slice the fixed string of products -> ./images/image-product
  s = src.slice(0, 23);
  // slice the number of product -> 1 | 2 | 3| 4
  i = parseInt(src.slice(23, 24));

  // check if its the last image if it the last start from 0 again and in large screen or in small screen

  if (i !== 4 && window.innerWidth > 375) {
    mainImg.setAttribute("src", `${s}${i + 1}.jpg`);
  } else if (i == 4 && window.innerWidth > 375) {
    i = 0;
    mainImg.setAttribute("src", `${s}${i + 1}.jpg`);
  } else if (i !== 4 && window.innerWidth <= 375) {
    mainImg.setAttribute("src", `${s}${i + 1}.jpg`);
    openProducts.setAttribute("src", `${s}${i + 1}.jpg`);
  } else if (i == 4 && window.innerWidth <= 375) {
    i = 0;
    mainImg.setAttribute("src", `${s}${i + 1}.jpg`);
    openProducts.setAttribute("src", `${s}${i + 1}.jpg`);
  }

  // console.log(`${s}${i + 1}.jpg`);
  // activate the current  image
  activeImage();
});

// when click prevouse button in gallery product
prevtBtn.addEventListener("click", () => {
  // get src of current image
  src = mainImg.getAttribute("src");
  // slice the fixed string of products -> ./images/image-product
  s = src.slice(0, 23);
  // slice the number of product -> 1 | 2|3 | 4

  i = parseInt(src.slice(23, 24));
  // check if its the first image if it the first start from 4 again and in large screen or in small screen

  if (i !== 1 && window.innerWidth > 375) {
    mainImg.setAttribute("src", `${s}${i - 1}.jpg`);
  } else if (i == 1 && window.innerWidth > 375) {
    i = 5;
    mainImg.setAttribute("src", `${s}${i - 1}.jpg`);
  } else if (i !== 1 && window.innerWidth <= 375) {
    mainImg.setAttribute("src", `${s}${i - 1}.jpg`);
    openProducts.setAttribute("src", `${s}${i - 1}.jpg`);
  } else if (i == 1 && window.innerWidth <= 375) {
    i = 5;
    mainImg.setAttribute("src", `${s}${i - 1}.jpg`);
    openProducts.setAttribute("src", `${s}${i - 1}.jpg`);
  }

  activeImage();
});

//  when click on close icon close the gallery
closeBodyOverlay.addEventListener("click", () => {
  bodyOverlay.style.display = "none";
});
// acivate image function
function activeImage() {
  allProducts.forEach((img) => {
    // reset other image
    let src = mainImg.getAttribute("src");
    img.classList.remove("active");
    img.previousElementSibling.style.display = "none";
    if (img.getAttribute("src").slice(0, 24) === src.slice(0, 24)) {
      img.classList.add("active");
      img.previousElementSibling.style.display = "block";
    }
  });
}

// cart section
// when click on the cart disply my order
openCart.addEventListener("click", () => {
  myCart.style.display = "block";
});

// add the number of product
plusProduct.addEventListener("click", () => {
  numberofProduct.textContent = parseInt(numberofProduct.textContent) + 1;
});
// reduce the number of product
removeProduct.addEventListener("click", () => {
  if (parseInt(numberofProduct.textContent) > 0) {
    numberofProduct.textContent = parseInt(numberofProduct.textContent) - 1;
  }
});

//  to handle the number of create orders whithout changes
let makeOrder = true;
// clicked on add to cart btn
addToCartBtn.addEventListener("click", () => {
  // get the price and discount and calc the rest and how the expression will be
  price = document.querySelector(".price").textContent.slice(1);
  discount = document.querySelector(".discount").textContent.slice(0, 2);
  res =
    (parseFloat(price) *
      parseInt(numberofProduct.textContent) *
      parseFloat(discount)) /
    100;
  exprestion = `$${
    (parseFloat(price) * parseFloat(discount)) / 100
  }.00 x ${parseInt(numberofProduct.textContent)}`;

  // check if user choose number of order
  if (numberofProduct.textContent > 0 && makeOrder) {
    cartEmpty.style.display = "none";
    // change the number of order on cart icon
    createSpanNomber();
    // create order
    createOrder();
    // the user orderd
    makeOrder = false;
    // if the user already made order before just change the number of order because we have one product
  } else if (numberofProduct.textContent > 0 && !makeOrder) {
    // update
    document.querySelector(".exp").textContent = exprestion;
    document.querySelector(
      ".exp"
    ).nextElementSibling.textContent = `$${res}.00`;
    document.querySelector(".spanNo").textContent = numberofProduct.textContent;
  }
});

// create the number of orders on cart icon
function createSpanNomber() {
  let spanNo = document.createElement("span");
  let textNo = document.createTextNode(numberofProduct.textContent);
  spanNo.appendChild(textNo);
  spanNo.classList.add("spanNo");
  openCart.parentElement.insertBefore(
    spanNo,
    openCart.parentElement.children[0]
  );
}
// create order function
function createOrder() {
  // the main continer div
  let div = document.createElement("div");
  // img of the product
  let img = document.createElement("img");
  img.setAttribute("alt", "selected product");
  // inner div will contain text details
  let innerDiv = document.createElement("div");
  // p contain name of product
  let p = document.createElement("p");
  p.textContent = productname.textContent;
  //  spanex contain number of order * price per one
  let spanEx = document.createElement("span");
  spanEx.textContent = exprestion;
  spanEx.classList.add("exp");
  //  span res contain last result price
  let spanRes = document.createElement("span");
  spanRes.textContent = `$${res}.00`;
  // icon delete to delete order
  let iconDelete = document.createElement("img");
  iconDelete.setAttribute("src", "./images/icon-delete.svg");
  iconDelete.setAttribute("alt", "delete");
  // checkout button
  let button = document.createElement("button");
  let textBtn = document.createTextNode("Checkout");
  // append all child to parents
  button.append(textBtn);
  innerDiv.appendChild(p);
  innerDiv.appendChild(spanEx);
  innerDiv.appendChild(spanRes);
  div.appendChild(img);
  div.appendChild(innerDiv);
  div.appendChild(iconDelete);
  // add main class to stle
  div.classList.add("orderStyle");
  cartContainer.appendChild(div);
  cartContainer.appendChild(button);
  // get active image of product on cart section
  for (i = 0; i < allProducts.length; i++) {
    if (allProducts[i].className === "active") {
      img.setAttribute("src", allProducts[i].getAttribute("src"));
    }
  }
  // when click on icon delete delete my order and disply that the card is empty !
  iconDelete.addEventListener("click", () => {
    iconDelete.style.cursor = "pointer";
    iconDelete.parentElement.remove();
    numberofProduct.textContent = 0;
    makeOrder = true;
    cartEmpty.style.display = "block";
    document.querySelector(".spanNo").style.display = "none";
    cartContainer.lastChild.style.display = "none";
  });
}
//  to close the opend cart click anywhere
document.body.addEventListener(
  "click",
  () => {
    myCart.style.display = "none";
  },
  true
);
// toggle navbar on small screen
toggleMenue.addEventListener("click", () => {
  menue.style.display = "flex";
});
//  when click close button close the toggle navbar
menue.firstElementChild.addEventListener("click", () => {
  menue.style.display = "none";
});
