let $allh2 = document.querySelectorAll(".box h2");
console.log($allh2);
let $days = $allh2[0];
let $hours = $allh2[1];
let $minutes = $allh2[2];
let $seconds = $allh2[3];
let intervalVar;
console.log($days);
console.log($hours);
console.log($seconds);

// countDownSeconds($seconds);
countDownSeconds($seconds);

function countDownSeconds($seconds) {
  intervalVar = setInterval(() => {
    if ($seconds.textContent >= 2) {
      $seconds.textContent = $seconds.textContent - 1;
    } else {
      countDownMunetes($minutes);
      $seconds.textContent = 59;
    }
  }, 1000);
}

function countDownMunetes($minutes) {
  if ($minutes.textContent >= 2) {
    $minutes.textContent = $minutes.textContent - 1;
    console.log($minutes.textContent);
  } else {
    countDownHourse($hours);
    $minutes.textContent = 59;
  }
}

function countDownHourse($hours) {
  if ($hours.textContent >= 2) {
    $hours.textContent = $hours.textContent - 1;
  } else {
    countDownDays($days);
    $hours.textContent = 59;
  }
}

function countDownDays($days) {
  if ($days.textContent >= 2) {
    $days.textContent = $days.textContent - 1;
  } else {
    clearInterval(intervalVar);
    $days.textContent = 0;
    $hours.textContent = 0;
    $minutes.textContent = 0;
    $seconds.textContent = 0;
  }
}
