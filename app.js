const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadline');
const item = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// let futureDate = new Date(2024, 3, 24, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth,tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

const month = months[futureDate.getMonth()];

const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const secs = futureDate.getSeconds();

giveaway.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year}, ${hours}:${mins}am`;

// future time in ms
let futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1d = 24hr

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // Calculate all value
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t / oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

   // set value Array
  const values = [days,hours,minutes,seconds];

  function format(item){
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  item.forEach(function(item,index){
    item.innerHTML = values[index]
  });
  if (t < 0) {
    clearInterval(countdown);
    deadLine.innerHTML = `<h4 class="expired">sorry this giveaway is expired</h4>`
  }
}
// countDown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();