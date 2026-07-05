 console.log("MoodTunes Started");

const moodData = {
    Happy: {
        songs: [
            "Happy - Pharrell Williams",
            "Can't Stop The Feeling",
            "Good Life"
        ],
        quote: "Happiness is contagious. Keep smiling!",
        wallpaper: "https://picsum.photos/id/1025/900/400"
    },

    Sad: {
        songs: [
            "Someone Like You",
            "Fix You",
            "Let Her Go"
        ],
        quote: "Every storm eventually runs out of rain.",
        wallpaper: "https://picsum.photos/id/1018/900/400"
    },

    Love: {
        songs: [
            "Perfect",
            "All Of Me",
            "Until I Found You"
        ],
        quote: "Love is the music of the heart.",
        wallpaper: "https://picsum.photos/id/1067/900/400"
    },

    Relaxed: {
        songs: [
            "Weightless",
            "Sunset Lover",
            "Bloom"
        ],
        quote: "Relax. Recharge. Repeat.",
        wallpaper: "https://picsum.photos/id/1015/900/400"
    },

    Energetic: {
        songs: [
            "Believer",
            "Thunder",
            "Stronger"
        ],
        quote: "Energy flows where attention goes.",
        wallpaper: "https://picsum.photos/id/1043/900/400"
    },

    Angry: {
        songs: [
            "Numb",
            "In The End",
            "Whatever It Takes"
        ],
        quote: "Turn your anger into motivation.",
        wallpaper: "https://picsum.photos/id/1003/900/400"
    }
};

const buttons = document.querySelectorAll(".mood-buttons button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const mood = button.innerText.split(" ")[1];

        const data = moodData[mood];

        const songList = document.getElementById("songList");

        songList.innerHTML = "";

        data.songs.forEach(song => {

            const li = document.createElement("li");

            li.textContent = "🎵 " + song;

            songList.appendChild(li);

        });

        document.getElementById("quote").innerText = data.quote;

        document.getElementById("wallpaper").src = data.wallpaper;

    });
    document.getElementById("findMood").addEventListener("click", () => {

    const text = document
        .getElementById("moodInput")
        .value
        .toLowerCase();

    if (text.includes("happy")) {

        showMood("Happy");

    } else if (text.includes("sad")) {

        showMood("Sad");

    } else if (text.includes("love")) {

        showMood("Love");

    } else if (text.includes("relax")) {

        showMood("Relaxed");

    } else if (text.includes("energy") || text.includes("excited")) {

        showMood("Energetic");

    } else if (text.includes("angry")) {

        showMood("Angry");

    } else {

        alert("Mood not recognized. Try words like happy, sad, love, relaxed, energetic or angry.");

    }

});

function showMood(mood){

    const data = moodData[mood];

    const songList = document.getElementById("songList");

    songList.innerHTML = "";

    data.songs.forEach(song=>{

        const li = document.createElement("li");

        li.innerHTML = `
<a target="_blank"
href="https://www.youtube.com/results?search_query=${encodeURIComponent(song)}">
🎵 ${song}
</a>

<button class="favBtn">
❤️
</button>
`;

        songList.appendChild(li);

    });

    document.getElementById("quote").innerText = data.quote;

    document.getElementById("wallpaper").src = data.wallpaper;

}
document.addEventListener("click",function(e){

    if(e.target.classList.contains("favBtn")){

        const song=e.target.previousElementSibling.innerText;

        let favs=JSON.parse(localStorage.getItem("favorites")) || [];

        if(!favs.includes(song)){

            favs.push(song);

            localStorage.setItem("favorites",JSON.stringify(favs));

            alert("Song Added to Favorites ❤️");

        }

    }

});
document.getElementById("searchBtn").addEventListener("click",()=>{

    const song=document.getElementById("searchSong").value;

    window.open(

"https://www.youtube.com/results?search_query="+encodeURIComponent(song),

"_blank"

);

});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerText="☀️ Light Mode";

    }else{

        themeBtn.innerText="🌙 Dark Mode";

    }

});
const recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";

voiceBtn.onclick = () => {

    recognition.start();

};

recognition.onresult = function(event){

    moodInput.value = event.results[0][0].transcript;

};

let history = JSON.parse(localStorage.getItem("history")) || [];

history.push(mood);

localStorage.setItem("history",JSON.stringify(history));


});