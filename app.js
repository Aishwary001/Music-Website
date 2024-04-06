const music = new Audio('1.mp3');
// music.play();

const songs = [
    {
        id : 1,
        songName : `Mere Ghar Ram <br />
        <div class="subtitle">Jubin-Nautiyal</div>`,
        poster : "1.jpg"
    },
    {
        id : 2,
        songName : `Meri MA <br />
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster : "2.jpg"
    },
    {
        id : 3,
        songName : `Tun hai to<br />
        <div class="subtitle">Arjit Singh</div>`,
        poster : "3.jpg"
    },
    { 
        id : 4,
        songName : `Meri Ma<br />
        <div class="subtitle">ShriSitaRam</div>`,
        poster : "4.jpg"
    },
    {
        id : 5,
        songName : `arjan vaily <br />
        <div class="subtitle">Bhupinder Babbal</div>`,
        poster : "5.jpg"
    },
    {
        id : 6,
        songName : `Ram Aanyege <br />
        <div class="subtitle">Swati Mishra</div>`,
        poster : "6.jpg"
    },
    {
        id : 7,
        songName : `JAI SHREE RAM <br />
        <div class="subtitle">Hansraj Raghuvanshi</div>`,
        poster : "7.jpg"
    },
    {
        id : 8,
        songName : `Jai Shree Ram <br />
        <div class="subtitle">Agam ft. Narci</div>`,
        poster : "8.jpg"
    },
    {
        id : 9,
        songName : `Yug Ram Raj Ka<br />
        <div class="subtitle">Hansraj Raghuwanshi</div>`,
        poster : "9.jpg"
    },
    {
        id : 10,
        songName : `Agar tujhe ho gaya<br />
        <div class="subtitle">B Praak</div>`,
        poster : "10.jpg"
    },
    {
        id : 11,
        songName : `Likhe jo khat tumhe<br />
        <div class="subtitle">Mohammad Rafi</div>`,
        poster : "11.jpg"
    },
    {
        id : 12,
        songName : `Heeriye <br />
        <div class="subtitle">jasleen Royal</div>`,
        poster : "12.jpg"
    },
    {
        id : 13,
        songName : `Raatan Lambiyan<br />
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster : "13.jpg"
    },
    {
        id : 14,
        songName : `Sari Duniya Jala Denge<br />
        <div class="subtitle">b.Praak</div>`,
        poster : "14.jpg"
    },
    {
        id : 15,
        songName : `Kabhi Sham Dhale<br />
        <div class="subtitle">Mohammad Faiz</div>`,
        poster : "15.jpg"
    },
    {
        id : 16,
        songName : `Tere Hawale<br />
        <div class="subtitle">Arjit Singh</div>`,
        poster : "16.jpg"
    },
    {
        id : 17,
        songName : `Apne to apne hote hain<br />
        <div class="subtitle">B Praak</div>`,
        poster : "17.jpg"
    },
    {
        id : 18,
        songName : `O Re Piya<br />
        <div class="subtitle">Rahat Fateh ali khan/div>`,
        poster : "18.jpg"
    },
    {
        id : 19,
        songName : `Accha sela diya<br />
        <div class="subtitle">B praak</div>`,
        poster : "19.jpg"
    },
    {
        id : 20,
        songName : `Galat Karam<br />
        <div class="subtitle">Raftar</div>`,
        poster : "20.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].setAttribute('src', songs[i].poster);
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active1');
    }
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',function(){
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click',function(){
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click',function(){
    Artists_bx.scrollLeft += 330;
})

pop_art_left.addEventListener('click',function(){
    Artists_bx.scrollLeft -= 330;
})

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.classList.remove('active');
    });
};
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
      e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src = `${songs[index-1].id}.mp3`;
        music.play();
        poster_master_play.src = `${index}.jpg`
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `${index}.mp3`;

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        })

        songTitles.forEach(elss =>{
            let{songName} = elss;
            title.innerHTML = songName;
            // poster_master_play.src = poster;
        })
         
        makeAllBackground();
        // Add the 'active' class to the specific song item
        el.target.closest('.songItem').classList.add('active');
      })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_dur / 60);
    let sec2 = Math.floor(music_dur % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentEnd.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('input', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    } else if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    } else {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `${songs[index-1].id}.mp3`;
    music.play();
    poster_master_play.src = `${index}.jpg`
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els)=>{
        return els.id == index;
    })

    songTitles.forEach(elss =>{
        let{songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('href', '/path/to/your/music/' + songName + '.mp3');
        download_music.setAttribute('download', songName + '.mp3');
        // poster_master_play.src = poster;
    })
     
    makeAllBackground();
    // Add the 'active' class to the specific song item
    el.target.closest('.songItem').classList.add('active');
})

next.addEventListener('click',()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `${songs[index-1].id}.mp3`;
    music.play();
    poster_master_play.src = `${index}.jpg`
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els)=>{
        return els.id == index;
    })

    songTitles.forEach(elss =>{
        let{songName} = elss;
        title.innerHTML = songName;
        // poster_master_play.src = poster;
    })
     
    makeAllBackground();
    // Add the 'active' class to the specific song item
    el.target.closest('.songItem').classList.add('active');
})