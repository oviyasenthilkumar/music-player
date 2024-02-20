const images = document.querySelectorAll(".image");
const pre_btn = document.querySelectorAll(".pre-btn");
const play_btn = document.querySelectorAll(".play-btn");
const next_btn = document.querySelectorAll(".next-btn");
let trackName = document.getElementById("trackName");
let trackArtist = document.getElementById("trackArtist");
let pic = document.getElementById("image");
let slideRange= document.querySelectorAll(".slideRange")
//create a new audio element
let new_track = document.createElement("audio");

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
    //new audios
    new_track.src = track_list[trackIndex].path;
    new_track.load();

   //set the track details
    trackName.innerText = track_list[trackIndex].name;  
    trackArtist.textContent = track_list[trackIndex].artist;
    pic.style.backgroundImage = "url(" + track_list[trackIndex].image+ ") "; 
    new_track.addEventListener("ended",nextTrack);
}

let isPlaying = false;

function switchTrack(){
        if(!isPlaying){
            return playBtn();
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

function previousTrack(){
    if(trackIndex > 0){
        trackIndex -= 1;
    }else{
        trackIndex = track_list.length - 1;
    }

    loadTrack(trackIndex);
    playBtn();
}

function nextTrack(){
    if(trackIndex < track_list.length - 1){
        trackIndex += 1;
    }else{
        trackIndex = 0;
    }
    loadTrack(trackIndex);
    playBtn();
}
loadTrack(trackIndex);
