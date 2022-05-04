let currentAudio = 0;

const audio = document.getElementById('audio');
const seekBar = document.querySelector('.seek-bar');
const audioName = document.querySelector('.audio-name');
const writer = document.querySelector('.audio-writer');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');


playBtn.addEventListener('click', () =>{
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})