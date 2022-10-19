// my variables
let tip_amount_per = document.querySelector(".tip-per");
let tip_total = document.querySelector(".total-per");
let btn_reseat = document.querySelector(".reset");
let allTips = document.querySelectorAll(".col-sm-4 button");
let custoInput = document.querySelector(".custome");
let err = document.querySelectorAll(".error");
let bill_inp_val;
let no_people;
let selctedTips = 0;
let tipAmountPer = 0;

// start coding

function calcTipAmount(price, tip, num) {
  if (price != "" && num != "" && price > 0 && num > 0 && tip > 0) {
    res = `$${(price * (tip / 100)) / num}`;
    return res.slice(0, 7);
  } else {
    if (num == "" && price != "") {
      res = `$${price * (tip / 100)}`;
      return res.slice(0, 7);
    }

    return 0;
  }
}
function calcTotal(price, tip) {
  if (price != "" && price > 0 && tip > 0) {
    res = `$${price * (tip / 100)}`;
    return res.slice(0, 7);
  } else {
    return 0;
  }
}

// reseat all
btn_reseat.addEventListener("click", function () {
  reseat_values();
  reseat_style();
});

const When_Clicked_Btns = (selctTip) => {
  bill_inp_val = document.querySelector(".bill").value;
  no_people = document.querySelector(".number").value;

  // add style to selcted button tips
  selctTip.style.backgroundColor = "rgb(159,232,223";
  selctTip.style.color = "hsl(183, 100%, 15%)";
  // selcted tips by user
  selctedTips = selctTip.name;
  //  call function calc amount tips per person
  tip_amount_per.innerText = calcTipAmount(
    bill_inp_val,
    selctedTips,
    no_people
  );
  //  call function calc total tips
  tip_total.innerHTML = calcTotal(bill_inp_val, selctedTips);
};

const When_Clicked_Custome = () => {
  allTips.forEach((ele) => {
    ele.style.backgroundColor = "hsl(183, 100%, 15%)";
    ele.style.color = "#fff";
  });
  bill_inp_val = document.querySelector(".bill").value;
  no_people = document.querySelector(".number").value;
  Cust_Tips = custoInput.value;
  if (Cust_Tips > 0) {
    tip_amount_per.innerText = calcTipAmount(
      bill_inp_val,
      Cust_Tips,
      no_people
    );
    tip_total.innerHTML = calcTotal(bill_inp_val, Cust_Tips);
  } else {
    tip_amount_per.innerText = 0;
    tip_total.innerHTML = 0;
  }
};

allTips.forEach((selctTip) => {
  selctTip.addEventListener("click", function () {
    reseat_style();
    When_Clicked_Btns(selctTip);
  });
  reseat_style();
});
// calc tips when user select custome tips
custoInput.addEventListener("keyup", When_Clicked_Custome);

function checkValidation() {
  bill_inp_val = document.querySelector(".bill");
  no_people = document.querySelector(".number");
  custoInput.addEventListener("keyup", function () {
    if (custoInput.value > 0) {
      custoInput.style.border = "2px solid hsl(172, 67%, 45%)";
    } else if (custoInput.value == 0 && custoInput.value != "") {
      error_msg_zero(custoInput);
    } else if (custoInput.value < 0) {
      error_msg(custoInput);
    } else if (custoInput.value == "") {
      custoInput.style.border = "none";
      rem_error(custoInput);
    }
  });

  bill_inp_val.addEventListener("keyup", function () {
    if (bill_inp_val.value > 0) {
      bill_inp_val.style.border = "2px solid hsl(172, 67%, 45%)";
    } else if (bill_inp_val.value == 0 && bill_inp_val.value != "") {
      error_msg_zero(bill_inp_val);
    } else if (bill_inp_val.value < 0) {
      error_msg(bill_inp_val);
    } else if (bill_inp_val.value == "") {
      bill_inp_val.style.border = "none";
      rem_error(bill_inp_val);
    }
  });

  no_people.addEventListener("keyup", function () {
    if (no_people.value > 0) {
      no_people.style.border = "2px solid hsl(172, 67%, 45%)";
      rem_error(no_people);
    } else if (no_people.value == 0 && no_people.value != "") {
      error_msg_zero(no_people);
    } else if (no_people.value < 0) {
      error_msg(no_people);
    } else if (no_people.value == "") {
      no_people.style.border = "none";
      rem_error(no_people);
    }
  });
}

function reseat_style() {
  document.querySelectorAll("input").forEach((input) => {
    input.style.border = "none";
  });
  allTips.forEach((selctTip) => {
    selctTip.style.backgroundColor = "hsl(183, 100%, 15%)";
    selctTip.style.color = "hsl(0, 0%, 100%)";
  });
  err.forEach((err) => {
    err.style.display = "none";
  });
  custoInput.value = "";
}

function reseat_values() {
  let bill_inp_val = document.querySelector(".bill");
  let no_people = document.querySelector(".number");
  custoInput.value = "";
  tip_amount_per.innerText = 0;

  tip_total.innerHTML = 0;
  bill_inp_val.value = "";
  no_people.value = "";
}

// functions abou set and remove msg error
function error_msg_zero(ele) {
  ele.parentElement.querySelector(".error").style.display = "block";
  ele.style.border = "2px solid #ff6d6d";
  ele.parentElement.querySelector(".error").innerHTML = "Can't be zero ";
}
function error_msg(ele) {
  ele.parentElement.querySelector(".error").style.display = "block";
  ele.style.border = "2px solid #ff6d6d";
  ele.parentElement.querySelector(".error").innerHTML =
    "Can't be negative number";
}
function rem_error(ele) {
  ele.parentElement.querySelector(".error").style.display = "none";
}

checkValidation();
