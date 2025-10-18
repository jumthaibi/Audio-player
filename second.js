let audio = document.getElementById("audio");
let title = document.getElementById("title");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let play = document.getElementById("play");
let play_img = document.getElementById("play_img");
let progress = document.getElementById("progress");
let timeUpdate = document.getElementById("time");
let current = 0;
let img = document.getElementById("img_1");
let sounds = [{title:"rain",img:"images/six.jpg",src:"sounds/rain.wav"},
    {title:"birds",img:"images/three.jpg",src:"sounds/birds.wav"},
    {title:"thunderstorm",img:"images/five.jpg",src:"sounds/thunderstorm.wav"},
    {title:"sea",img:"images/four.jpg",src:"sounds/sea.wav"}];


play.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
        play_img.src = "play.jpg";
    }
    else{
        audio.pause();
        play_img.src="pause.jpg";
    }
});

next.addEventListener("click",()=>{
    audio.pause();
    current = (current+1)%sounds.length;
    audio.src = sounds[current].src;
    title.textContent = sounds[current].title;
    img.src = sounds[current].img;
    audio.play();
    play_img.src = "play.jpg";
});

prev.addEventListener("click",()=>{
    audio.pause();
    current = (current-1+sounds.length)%sounds.length;
    audio.src = sounds[current].src;
    title.textContent = sounds[current].title;
    img.src = sounds[current].img;
    audio.play();
    play_img.src = "play.jpg";
});

audio.addEventListener("timeupdate",()=>{
    progress.max = audio.duration;
    progress.value = audio.currentTime;
    let totalSeconds = Math.floor(audio.currentTime);
    let minutes = Math.floor(totalSeconds / 60); 
    let seconds = totalSeconds % 60;
    timeUpdate.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    audio.loop = true;
});

progress.addEventListener("input",()=>{
    audio.currentTime = progress.value;

});
