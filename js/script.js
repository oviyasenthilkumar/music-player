const images = document.querySelectorAll(".image");
const pre_btn = document.querySelectorAll(".pre-btn");
const play_btn = document.querySelectorAll(".play-btn");
const next_btn = document.querySelectorAll(".next-btn");
let audio = document.querySelectorAll(".audios");
let trackName = document.getElementById("trackName");
let trackArtist = document.getElementById("trackArtist");
let pic = document.getElementById("image");
let presentTime = document.getElementById("current-time");
let totalDuration = document.getElementById("totalDuration");
let slideRange= document.getElementById("slideRange")
let new_track = document.createElement("audio");
let loop = document.getElementById("loop");
let current_timer;
let trackIndex = 0;
let track_list = [
    {
        name:"Munba Vaa bgm",
        artist:"Naresh Iyer, Shreya Ghoshal",
        path: "audio/1.mp3",
        image:"img/music1.jpeg"
    },
    {
        name:"Darshana bgm" ,
        artist:"Hesham Abdul Wahab.",
        path: "audio/2.mp3",
        image:"img/music2.jpeg"
    },
    {
        name:"Oru Paadhi Kadhavum bgm" ,
        artist:"G. V. Prakash Kumar ",
        path: "audio/3.mp3",
        image:"img/music3.jpeg"
    },
    {
        name:"Un Paarvaiyil bgm" ,
        artist:"Karthik, Sumangaly, Kabilan",
        path: "audio/4.mp3",
        image:"img/music4.jpeg"
    },
    {
        name:"Newyork Nagaram bgm" ,
        artist:"A.R.Rahman",
        path: "audio/6.mp3",
        image:"img/music1.jpeg"
    },
    {
        name:"Nee Kavithaigala bgm" ,
        artist:"Dhibu Ninan Thomas, Pradeep Kumar",
        path: "audio/5.mp3",
        image:"img/music2.jpeg"
    },
    {
        name:"kadhaippoma bgm" ,
        artist:"Leon James",
        path: "audio/7.mp3",
        image:"img/music3.jpeg"
    },
    {
        name:"urugi urugi bgm" ,
        artist:"siddhu kumar",
        path: "audio/8.mp3",
        image:"img/music4.jpeg"
    },
    {
        name:"nee paartha bgm" ,
        artist:"Anirudh Ravichander",
        path: "audio/9.mp3",
        image:"img/music1.jpeg"
    },
    {
        name:"pularaa kadhaley bgm" ,
        artist:"Justin Prabhakaran",
        path: "audio/10.mp3",
        image:"img/music3.jpeg"
    },
];

function loadTrack(trackIndex){

    clearInterval(current_timer);
    resetValues();

    //new audios
    new_track.src = track_list[trackIndex].path;
    new_track.load();  
   //set the track details
    trackName.innerText = track_list[trackIndex].name;
    //console.log(trackName);
    trackArtist.textContent = track_list[trackIndex].artist;
   // console.log(trackArtist);
    pic.style.backgroundImage = "url(" + track_list[trackIndex].image+ ") ";
   // console.log(pic);

    current_timer = setInterval(slideUpdate,1000);

    new_track.addEventListener("ended",nextTrack);
}
let music = document.getElementById("music");
let isPlaying = false;
let isLoop = false;
function switchLoop(){
    if(!isLoop){
       new_track.setAttribute("loop","loop") 
       loop.innerHTML = ('<i class="bi bi-repeat-1"></i>');
    }
}

function switchTrack(){
        if(!isPlaying){
             playBtn(); 
        }else{
            pauseBtn();
        }
}

function playBtn(){
    isPlaying = true;
    new_track.play();
}
function pauseBtn(){
    new_track.pause();
    isPlaying = false;
}
function iconChange(x){
    x.classList.toggle("fa-circle-pause");
}

function resetValues(){
    presentTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    slideRange.value = 0;
}
function previousTrack(){
    new_track.removeAttribute("loop","loop");
    loop.innerHTML = ('<i class="bi bi-repeat"></i>');
    if(trackIndex > 0){
        trackIndex -= 1;
    }else{
        trackIndex = track_list.length - 1;
    }

    loadTrack(trackIndex);
    playBtn();
}

function nextTrack(){
    new_track.removeAttribute("loop","loop");
    loop.innerHTML = ('<i class="bi bi-repeat"></i>');
    if(trackIndex < track_list.length - 1){
        trackIndex += 1;
    }else{
        trackIndex = 0;
    }
    loadTrack(trackIndex);
    playBtn();
}
let slides;
function slideChange(){
    slides = new_track.duration * (slideRange.value / 100);
    new_track.currentTime = slides;
}
function slideUpdate(){
    let slidePosition = 0;

    if(!isNaN(new_track.duration)){
        slidePosition = (new_track.currentTime * (100 / new_track.duration)).toFixed(2);
        slideRange.value = slidePosition;

    let currentMinutes = Math.floor(new_track.currentTime / 60);
    let currentSeconds = Math.floor(new_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(new_track.duration / 60);
    let durationSeconds = Math.floor(new_track.duration - durationMinutes * 60);

    currentMinutes =  currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
    currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
    durationMinutes = durationMinutes < 10 ? "0" + durationMinutes : durationMinutes;
    durationSeconds = durationSeconds < 10 ? "0" + durationSeconds : durationSeconds;
    
    presentTime.textContent = currentMinutes + ":" + currentSeconds;
    totalDuration.textContent = durationMinutes + ":" + durationSeconds;
}
}

loadTrack(trackIndex);
