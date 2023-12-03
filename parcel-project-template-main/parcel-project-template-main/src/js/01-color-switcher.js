const buttons = document.querySelectorAll('button');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let interval,
  ok = 0;
const start = function () {
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};
const stoop = function () {
  clearInterval(interval);
};

buttons[0].addEventListener('click', () => {
  if (!ok) {
    start();
    ok = 1;
  }
});

buttons[1].addEventListener('click', () => {
  ok = 0;
  stoop();
});
