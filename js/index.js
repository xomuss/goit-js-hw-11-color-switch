const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const min = 0;
const max = colors.length - 1;
let timerActiv = false;
let timerId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', () => {
  if (timerActiv) {
    return;
  }
  timerActiv = true;
  timerId = setInterval(() => {
    onStartBtnClick();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerActiv = false;
});

function onStartBtnClick() {
  const colorIndex = colors[randomIntegerFromInterval(min, max)];
  document.body.style = `background: ${colorIndex}`;
}
