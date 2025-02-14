// This file contains JavaScript code that handles the color-changing functionality and video playback management.

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let colorChangeInterval;

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function startColorChange() {
  colorChangeInterval = setInterval(changeBackgroundColor, 500); // Faster flashing interval
}

function stopColorChange() {
  clearInterval(colorChangeInterval);
}

window.onload = function () {
  alert(
    'Warning: This page contains flashing lights. Please proceed with caution!'
  );
  startColorChange();

  const video = document.getElementById('funnyVideo');
  video.play();

  video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
  });
};
