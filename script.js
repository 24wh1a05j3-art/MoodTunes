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

});