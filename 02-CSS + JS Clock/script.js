const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const period = document.querySelector("#meridiem")

const setTime = () => {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secDeg = ((sec / 60) * 360) + 90;
  const minDeg = ((min / 60) * 360) + ((sec / 60) * 6) + 90;
  const hourDeg = ((hour / 12) * 360) + ((min / 60) * 30) + 90;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  if (sec === 0) {
    secHand.style.transition = 'none';
  } else {
    secHand.style.transition = 'all 0.05s';
  }

  // Detecting AM or PM
  hour >= 12 ? period.innerText = "PM" : period.innerText = "AM"
};

// Run Immediately
setTime();

// Run after 1 second
setInterval(setTime, 1000);