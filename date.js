const dateContainer = document.querySelector(".js-clock"),
  dateTitle = dateContainer.querySelector("h2");

function getDate() {
  const date = new Date();
  const years = date.getFullYear();
  const months = date.getMonth();
  const dates = date.getDate();
  const daysString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = daysString[date.getDay()];
  dateTitle.innerText = `${years}/${
    months < 9 ? `0${months + 1}` : `${months + 1}`
  }/${dates} (${days})`;
}

function init() {
  getDate();
  setInterval(getTime, 1000);
}
init();
