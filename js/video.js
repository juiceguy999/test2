const heroVideo = document.querySelector('#hero-video');
// const heroMuteBtn = document.querySelector('#hero-mute');
const heroPauseBtn = document.querySelector('#hero-pause');
let paused = false;
let muted = true;


heroPauseBtn.addEventListener('click', () => {

  heroPauseBtn.classList.toggle('hero__pause--active')

  if (!paused) {
    paused = true;
    heroVideo.pause();
  } else {
    paused = false;
    heroVideo.play();
  }
})


// heroMuteBtn.addEventListener('click', () => {
//   if (muted) {
//     muted = false;
//     heroVideo.muted = false;
//     heroVideo.volume = 1;
//   } else {
//     muted = true;
//     heroVideo.volume = 0;
//   }
// })