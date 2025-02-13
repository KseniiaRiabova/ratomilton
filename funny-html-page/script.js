// This file contains JavaScript code that handles the color-changing functionality and video playback management.

let colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD", "#E74C3C", "#3498DB"];
let currentColorIndex = 0;
let colorChangeInterval;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

function startColorChange() {
    colorChangeInterval = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
    clearInterval(colorChangeInterval);
}

window.onload = function() {
    alert("Warning: This page contains flashing lights. Please proceed with caution!");
    startColorChange();
    
    const video = document.getElementById("funnyVideo");
    video.play();
};