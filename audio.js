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
    if(playBtn.className.includes('pause')){
        music.play();
    }
    else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})


const setAudio =(i) => {
    seekBar.value = 0;
    let audio = audios[i];
    currentAudio = i;
    audio.src = audio.path;

    audioName.innerHTML = audio.name;
    writer.innerHTML = audio.writer;
    disk.style.backgroundImage = `url('${audio.cover})`;

    currentTime.innerHTML = '00:00';
    setTimeout(() =>{
        seekBar.max = audio.duration;
        musicDuration.innerHTML = formatTime(audio.duration);
    }, 300);
}

setAudio(0);

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}