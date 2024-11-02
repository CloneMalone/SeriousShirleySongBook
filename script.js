const songData = {
    "Hate my Life": {
        Chords: "D, A, G",
        Key: "C Major / A Minor",
    },
    "Kids Aren't Alright": {
        Chorus: "A#, F#, C#, G#",
        Verse: "A#, F# (low), C#, G#"
    },
    "Tainted Love": {
        Chords: "G, A#, D#, A#, C",
        Key: "D# Major / C Minor",
    },
    "You Belong to 69": {
        Parts: [
            "Taylor Swift A x2: D, A, E minor, G",
            "Taylor Swift B x1: E minor, G, D, A, E minor, G, A",
            "Summer of 69 Chorus x2: D Major picked, A Major picked",
            "Summer of 69 Pre-Chorus 2.5x: B minor picked, A Major picked, D Major picked, G Major picked",
            "Summer of 69 Bridge: F, A#, C; End on D",
            "Pause, Zach plays",
            "Mixed Chorus: D Major picked, A Major picked, E minor, G",
            "End on D to end the song!"
        ]
    },
    "Down to the Bottom": {
        Ending_Chords: "F#, E, D#, A, B",
    },
    "Toxic": {
        Chords: "C#, E minor, F#, G#",
        Key: "C# minor"
    },
    "ABCDEFU-FU": {
        Chords: "E minor, G#, C#, A Major",
        Key: "E Major/C# Minor"
    },
    "Self Esteem": {
        Main_Chords: "A, F, C, G",
        Bridge: "D, A#, F, C",
        Last_Measure_Of_Bridge: "D, A#, C, G, F, G",
    },
    "So What": {
        Chorus: "A, C#, F#, D",
        Key: "A Major/F# Minor"
    },
    "Here for the Party - Drop D": {
        Solo_Chords: "D, G, F"
    },
    "Call me When You're Sober - Drop D": {
        Chorus: "2 Bar, C, 2 Bar, 1 Bar, 5 Bar, 1 Bar, 5 Bar, C"
    },
    "Twilight Zone": {
        Key: "B Minor/D Major",
        Verse_Chords: "B Minor, E Minor, F# Minor, B Minor",
        Chorus: "B Minor, A Major, G, F#",
        Chorus_Two: "G, E Minor, B Minor"
    },
    "Separate Ways": {
        Bridge_Chords: "E Minor, G, C, A",
        Key: "E Minor/G Major"
    },
    "I see Red": {
        Key: "E Minor/G Major"
    },
    "Hit me Baby": {
        Chords: "B Minor, F# Major, D Major, E Major, F# Major"
    },
    "Since U Been Gone": {
        Image: "Images/Since-U-Been-Gone-Bridge.png"
    },
    "Scars - Drop D": {
        Key: "C Major/A Minor",
        Chorus: "C, 5 Bar, D, 3 Bar, 5 Bar",
        Verse: "7 Bar, 2 Bar, 3 Bar, 5 Bar"
    },
    "Fully Alive - Drop D": {
        Key: "D Minor/F Major",
        Bridge: "3 Bar, C, A#"
    },
    "What's Up": {
        Chords: "A Major, B Minor, D Major, A Major"
    },
    "Santeria Case": {
        Verse: "E Minor, B, C#, G#, A, E Minor, B"
    },
    "Missing Key": {
        Key: "E Minor/G Major",
        Pre_Chorus: "A Minor, C Major, A Minor, D Major"
    },
    "White Rabbit": {
        Verse: "F# Major, G Major",
        Chorus: "A Major, C Major, D Major, A Major",
        Bridge: "E Minor, A Major, E Minor, A Major, F# Major",
        Outro_Chorus: "A Major, C Major, D Major, A Major, E Minor, A Major, E Minor, A Major"
    }
    // Additional songs can be added here...
};

function showSong() {
    const songSelect = document.getElementById("song-select");
    const songTitle = document.getElementById("song-title");
    const songDetails = document.getElementById("song-details");
    const songImage = document.getElementById("song-image");

    const selectedSong = songSelect.value;
    if (selectedSong && songData[selectedSong]) {
        songTitle.textContent = selectedSong;
        const details = songData[selectedSong];
        let detailHTML = "<div>";

        for (const [section, content] of Object.entries(details)) {
            if (section === "Image") continue; // Skip the image property in the details section

            if (Array.isArray(content)) {
                detailHTML += `<h3>${section}</h3><ul>`;
                content.forEach(item => {
                    detailHTML += `<li>${item}</li>`;
                });
                detailHTML += "</ul>";
            } else {
                detailHTML += `<p><strong>${section}:</strong> ${content}</p>`;
            }
        }
        detailHTML += "</div>";
        songDetails.innerHTML = detailHTML;

        // Display image if available
        if (details.Image) {
            songImage.src = details.Image;
            songImage.alt = `${selectedSong} tabs`;
            songImage.style.display = "block";
        } else {
            songImage.style.display = "none";
        }
    } else {
        songTitle.textContent = "Choose a song to view details";
        songDetails.innerHTML = "";
        songImage.style.display = "none";
    }
}

