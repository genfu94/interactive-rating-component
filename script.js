function onRateClick(rateButtonID) {
  for (let i = 1; i <= 5; i++) {
    const btn = document.getElementById("rate-button-" + i);

    btn.classList.remove("active");
    if (i === rateButtonID) btn.classList.add("active");
  }
}

function showThankYouState() {
  document.getElementById("feedback-prompt").classList.toggle('hidden');
  document.getElementById("feedback-thanks").classList.toggle('hidden');
}

function onSubmitClick() {
  const activeElement = document.getElementsByClassName("active");
  if (activeElement.length > 0) {
    const selectedRate = activeElement[0].innerHTML;
    const selectedRatingEl = document.getElementById("selected-rating");
    selectedRatingEl.innerHTML =
      "You selected " + selectedRate + " out of 5";
    showThankYouState();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const feedbackRateChoices = document.getElementById(
    "feedback-rate-choices"
  );
  for (let i = 1; i <= 5; i++) {
    feedbackRateChoices.innerHTML +=
      "<div id='rate-button-" +
      i +
      "' class='feedback-score' onclick=onRateClick(" +
      i +
      ")>" +
      i +
      "</div>\n";
  }
});