const dateDiv = document.getElementById("date");
const timeDiv = document.getElementById("time");

const dayWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getTime() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const week = today.getDay();

  const hour = String(today.getHours()).padStart(2, 0);
  const min = String(today.getMinutes()).padStart(2, 0);
  const second = String(today.getSeconds()).padStart(2, 0);

  dateDiv.innerText = `${year}. ${month}. ${day}. (${dayWeek[week]})`;

  timeDiv.innerText = `${hour}:${min}:${second}`;
}

getTime();

setInterval(getTime, 1000);

/*
setInterval(getTime(), 1000);
이렇게 하면 안 됨

setInterval(getTime, 1000);
이렇게 써야 getTIme함수 호출
*/
