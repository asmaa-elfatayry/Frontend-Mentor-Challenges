let all_cards = document.querySelectorAll(".my-cards .card");
let all_links = document.querySelectorAll("ul li a");
let all_hours = document.querySelectorAll(".card h2");
let all_pre_hours = document.querySelectorAll(".card p");

function Daily(id) {
  let daily_data_hours = ["5hrs", "1hr", "0hrs", "1hr", "1hr", "0hrs"];
  let Prev_data_hours = ["7hrs", "2hrs", "1hr", "1hr", "3hrs", "1hr"];

  // remove active
  all_links.forEach((element) => {
    element.classList.remove("active");
  });
  console.log(id);
  let clickedAnchor = document.getElementById(id);
  clickedAnchor.classList.add("active");

  //  for daily data
  for (var j = 0; j < 6; j++) {
    for (var i = 0; i < 6; i++) {
      if (j === i) {
        all_hours[j].innerText = daily_data_hours[i];
      }
    }
  }
  //  for prevous daily data
  for (var j = 0; j < 6; j++) {
    for (var i = 0; i < 6; i++) {
      if (j === i) {
        all_pre_hours[j].innerText = "Last Day " + Prev_data_hours[i];
      }
    }
  }
}

function Weekly(id) {
  let week_data_hours = ["32hrs", "10hrs", "4hrs", "4hrs", "5hrs", "2hrs"];
  let prev_week_hours = ["36hrs", "8hrs", "7hrs", "5hrs", "10hrs", "2hrs"];
  // remove active
  all_links.forEach((element) => {
    element.classList.remove("active");
  });

  let clickedAnchor = document.getElementById(id);
  clickedAnchor.classList.add("active");

  //  for daily data
  for (var j = 0; j < 6; j++) {
    for (var i = 0; i < 6; i++) {
      if (j === i) {
        all_hours[j].innerText = week_data_hours[i];
      }
    }
  }
  //  for prevous daily data
  for (var j = 0; j < 6; j++) {
    for (var i = 0; i < 6; i++) {
      if (j === i) {
        all_pre_hours[j].innerText = "Last Week " + prev_week_hours[i];
      }
    }
  }
}

function Monthy(id) {
  let month_data_hours = ["103hrs", "23hrs", "13hrs", "11hrs", "21hrs", "7hrs"];
  let prev_month_hours = [
    "128hrs",
    "29hrs",
    "19hrs",
    "18hrs",
    "23hrs",
    "11hrs",
  ];
  // remove active
  all_links.forEach((element) => {
    element.classList.remove("active");
  });

  let clickedAnchor = document.getElementById(id);
  clickedAnchor.classList.add("active");

  //  for daily data
  for (var j = 0; j < 6; j++) {
    for (var i = 0; i < 6; i++) {
      if (j === i) {
        all_hours[j].innerText = month_data_hours[i];
      }
    }
  }
  //  for prevous daily data
  for (var j = 0; j < 6; j++) {
    for (var i = 0; i < 6; i++) {
      if (j === i) {
        all_pre_hours[j].innerText = "Last Month " + prev_month_hours[i];
      }
    }
  }
}
