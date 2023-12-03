const start = document.querySelector('button');
const input = document.querySelector('input');
const dates = document.querySelectorAll('value');
let days = dates[0],
  hours = dates[1],
  miutes = dates[2],
  seconds = dates[3],
  today = new Date().getTime();
console.log(today);
console.log('\n');
start.addEventListener('click', () => {
  console.log(new Date(input.value).getTime());
});

// start.disabled = true;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);