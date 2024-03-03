// import { getWeatherValue } from "./weather";

const selectBg = document.getElementById("bg-select");
const options = selectBg.getElementsByTagName("option");

const 계절 = "bg-season";
const 날씨 = "bg-weather";
const 동물 = "bg-animal";
const 랜덤 = "bg-ranbg";

const image = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const bgImage = document.createElement("img");
const chosenImage = image[Math.floor(Math.random() * image.length)];
let nowSeason = "";
let bg = "";

const BG_THEME = "bg-theme";

function selectBgImage() {
  bg = selectBg.value;

  saveTheme();
  if (bg === 계절) {
    seasonBG("seasonImg");
  } else if (bg === 날씨) {
    weatherBG("weatherImg");
  } else if (bg === 동물) {
    randomBG("animalImg");
  } else if (bg === 랜덤) {
    randomBG("randomImg");
  }
}

function saveTheme() {
  const Theme = JSON.stringify(bg);
  localStorage.setItem(BG_THEME, Theme);
}

function seasonBG(theme) {
  const month = new Date().getMonth() + 1;

  if (month >= 3 && month <= 6) {
    nowSeason = "spring";
    console.log("봄");
  } else if (month === 7 || month === 8) {
    nowSeason = "summer";
    console.log("여름");
  } else if (month >= 9 && month <= 11) {
    nowSeason = "fall";
    console.log("가을");
  } else if (month <= 2 || month === 12) {
    nowSeason = "winter";
    console.log("겨울");
  }
  bgImage.src = `/img/${theme}/${nowSeason}/${chosenImage}`;
  window.document.body.style.backgroundImage = `url("${bgImage.src}")`;
}

// async function weatherBG(theme) {
//   const weatherValue = await getWeatherValue();
//   console.log(weatherValue);
//   bgImage.src = `/img/${theme}/${weatherValue}/${chosenImage}`;
//   window.document.body.style.backgroundImage = `url("${bgImage.src}")`;
// }

function randomBG(theme) {
  bgImage.src = `/img/${theme}/${chosenImage}`;
  window.document.body.style.backgroundImage = `url("${bgImage.src}")`;
}

const selectedBg = localStorage.getItem(BG_THEME);
console.log(selectedBg);
if (selectedBg !== null) {
  bg = JSON.parse(selectedBg);
  for (let option of options) {
    if (option.value == bg) {
      option.selected = true;
    } else {
      option.selected = false;
    }
  }
}
selectBgImage();

selectBg.addEventListener("change", selectBgImage);
