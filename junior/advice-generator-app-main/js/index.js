const adviceNo = document.querySelector(".advice-container span");
const advice = document.querySelector(".advice-container q");
const newAdv = document.querySelector(".advice-container div");
const api_url = "https://api.adviceslip.com/advice";
async function getAdvice() {
  // Making an API call (request)
  // and getting the response back
  const response = await fetch(api_url);

  // Parsing it to JSON format
  const data = await response.json();
  //   console.log(data.slip.id);
  //   console.log(data.slip.advice);

  // Retrieving data from JSON
  adviceNo.textContent = `ADVICE #${data.slip.id}`;
  advice.textContent = data.slip.advice;
}
getAdvice();

newAdv.addEventListener("click", () => {
  //   window.onload;
  getAdvice();
});
