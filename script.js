const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const ecgVideo = document.getElementById("ecg-video");

startButton.addEventListener("click", () => {
    ecgVideo.style.display = "block";
    ecgVideo.play();
    startButton.classList.add("active");
    stopButton.classList.remove("active");
});

stopButton.addEventListener("click", () => {
    ecgVideo.pause();
    startButton.classList.remove("active");
    stopButton.classList.add("active");
});
