const toggle = document.querySelector(".toggle");
const xhour = document.querySelector(".hour");
const xminute = document.querySelector(".minute");
const xsecond = document.querySelector(".second");
console.log(toggle, xhour, xminute, xsecond);

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

function getTime() {
  const tTime = new Date();
  const tHour = tTime.getHours();
  const tSecond = tTime.getSeconds();
  const tMinute = tTime.getMinutes();
  const tClockHour = tHour % 12;
  xhour.style.transform = `translateY(-100%) rotate(${scale(tClockHour, 0, 12, 0, 360)}deg)`;
  const secondScale = scale(tSecond, 0, 60, 0, 100);
  console.log(secondScale);
  xsecond.style.background = `conic-gradient(#4caf50 0% ${secondScale}%, transparent ${secondScale}% 100%)`;
  xminute.style.transform = `translateY(-100%) rotate(${scale(tMinute, 0, 60, 0, 360)}deg)`;
}

setInterval(getTime, 1000);


