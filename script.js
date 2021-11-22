const api = {
  key: "6b61c688fca75c5f989061621bd541ad",
  baseurl: "https://api.openweathermap.org/data/2.5/",
};
const serachBox = document.querySelector(".serach-box");

serachBox.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.keyCode == 13) {
    getResults(serachBox.value);
    console.log(serachBox.value);
  }
}
function getResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location  .city");
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location  .date");
  date.innerHTML = dateBulder(now);

  let temp = document.querySelector('.temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`

  let weatherEl = document.querySelector('.weather');
  weatherEl.innerHTML = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c` 


}
function dateBulder(s) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[s.getDay()];
  let date = s.getDate();
  let month =months[s.getMonth()];
  let year = s.getFullYear()
  return `${day} ${date} ${month} ${year}`
}
