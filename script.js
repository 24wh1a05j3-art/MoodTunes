console.log("MoodTunes Started");

const moodData = {
    Happy: {
        songs: ["Butta Bomma","Ramuloo Ramulaa","Mind Block","Oo Antava","Seeti Maar"],
        quote: "Happiness is contagious. Keep smiling!",
        wallpaper: "https://picsum.photos/id/1025/900/400"
    },
    Sad: {
        songs: ["Adiga Adiga","Nee Kannu Neeli Samudram","Samajavaragamana Sad Version","Life Of Ram"],
        quote: "Every storm eventually runs out of rain.",
        wallpaper: "https://picsum.photos/id/1018/900/400"
    },
    Love: {
        songs: ["Inthandham","Samajavaragamana","Nee Kannu Neeli Samudram","Sirivennela","Adiga Adiga"],
        quote: "Love is the music of the heart.",
        wallpaper: "https://picsum.photos/id/1067/900/400"
    },
    Relaxed: {
        songs: ["Life of Ram Telugu","Vintunnava","Oohale"],
        quote: "Relax. Recharge. Repeat.",
        wallpaper: "https://picsum.photos/id/1015/900/400"
    },
    Energetic: {
        songs: ["Saami Saami","Top Lesi Poddi","Blockbuster"],
        quote: "Energy flows where attention goes.",
        wallpaper: "https://picsum.photos/id/1043/900/400"
    },
    Angry: {
        songs: ["Pushpa Title Song","Dhruva Dhruva","Baitikochi Chuste"],
        quote: "Turn your anger into motivation.",
        wallpaper: "https://picsum.photos/id/1003/900/400"
    }
};

// Mood Buttons
const buttons = document.querySelectorAll(".mood-buttons button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const mood = button.innerText.split(" ")[1];
        showMood(mood);
        speak(mood + " Mood Selected"); // ✅ Speak after selecting mood
    });
});

// Show Mood
function showMood(mood){
    const data = moodData[mood];
    const songList = document.getElementById("songList");
    songList.innerHTML = "";

    data.songs.forEach(song=>{
        const li = document.createElement("li");
        li.innerHTML = `
        <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(song + " Telugu Song")}"
        target="_blank">🎵 ${song}</a>
        <button class="favBtn">❤️</button>
        `;
        songList.appendChild(li);
    });

    document.getElementById("quote").innerText = data.quote;
    document.getElementById("wallpaper").src = data.wallpaper;

    // Save History
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(mood);
    localStorage.setItem("history", JSON.stringify(history));
}

// AI Mood Detection (English + Telugu)
document.getElementById("findMood").addEventListener("click",()=>{
    const text=document.getElementById("moodInput").value.toLowerCase();

    if(text.includes("happy") || text.includes("happiness") || text.includes("సంతోషం")){
        showMood("Happy"); speak("Happy Mood Selected");
    }
    else if(text.includes("sad") || text.includes("బాధ")){
        showMood("Sad"); speak("Sad Mood Selected");
    }
    else if(text.includes("love") || text.includes("ప్రేమ")){
        showMood("Love"); speak("Love Mood Selected");
    }
    else if(text.includes("relax") || text.includes("శాంతి")){
        showMood("Relaxed"); speak("Relaxed Mood Selected");
    }
    else if(text.includes("energy") || text.includes("excited") || text.includes("ఉత్సాహం")){
        showMood("Energetic"); speak("Energetic Mood Selected");
    }
    else if(text.includes("angry") || text.includes("కోపం")){
        showMood("Angry"); speak("Angry Mood Selected");
    }
    else{
        alert("Mood not recognized. Try Happy, Sad, Love, Relaxed, Energetic or Angry.");
    }
});

// Favorites
document.addEventListener("click",function(e){
    if(e.target.classList.contains("favBtn")){
        const song=e.target.previousElementSibling.innerText;
        let favs=JSON.parse(localStorage.getItem("favorites")) || [];
        if(!favs.includes(song)){
            favs.push(song);
            localStorage.setItem("favorites",JSON.stringify(favs));
            alert("❤️ Song Added to Favorites");
        }else{
            alert("Already in Favorites");
        }
    }
});

// Search Song
document.getElementById("searchBtn").addEventListener("click",()=>{
    const song=document.getElementById("searchSong").value;
    if(song.trim()==""){
        alert("Enter a song name");
        return;
    }
    window.open(
        "https://www.youtube.com/results?search_query="+encodeURIComponent(song+" Telugu Song"),
        "_blank"
    );
});

// Dark Mode
const themeBtn=document.getElementById("themeBtn");
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    themeBtn.innerText=document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Voice Input (✅ Cross-browser)
if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    document.getElementById("voiceBtn").onclick = () => {
        recognition.start();
    };

    recognition.onresult = function(event) {
        document.getElementById("moodInput").value = event.results[0][0].transcript;
    };
} else {
    document.getElementById("voiceBtn").style.display = "none";
}

// Voice Welcome (✅ Better)
window.onload = function(){
    speak("Welcome to MoodTunes");
};

// Speak Function
function speak(text){
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
}
