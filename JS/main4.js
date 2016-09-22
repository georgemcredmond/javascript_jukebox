window.onload = function() {

	/* --- VARIABLES --- */
	var songList = [];
	var currentSongIndex = 0;
	var audio = document.getElementById('currentAudio');
	var songInfoText = document.getElementById('songInfo');


	/* --- OBJECTS --- */

	// jukebox object - will hold information about the music
	function Jukebox(songList, currentSongIndex) {
		this.addSong = function(src, track, artist) {
			songList.push([src, track, artist]);
		};

		this.initializeJuke = function() {
	    	audio.innerHTML = "<source src=\"" + songList[0][0] + "\" type=\"audio/mp3\">";
	    	songInfoText.innerText = songList[0][1] + " - " + songList[0][2];	
	    	currentSongIndex = 0;
		};

		document.getElementById("stop").addEventListener("click", function(){ 
				// pause the audio
				audio.pause();
				// set audio time to 0
				audio.currentTime = 0;
		});

		// play the audio
		document.getElementById("play").addEventListener("click", function(){ 
				audio.play();
		});

		// pause the audio
		document.getElementById("pause").addEventListener("click", function(){ 
				audio.pause();
		});		

		document.getElementById("next").addEventListener("click", function(){ 
				if (songList[currentSongIndex+1] != null) {
					currentSongIndex++;
					songInfoText.innerText = songList[currentSongIndex][1] + " - " + songList[currentSongIndex][2];
					audio.innerHTML = "<source src=\"" + songList[currentSongIndex][0] + "\" type=\"audio/mp3\">";
					// load song
					audio.load(); 
					// auto play song
					audio.play();

				} else {
					currentSongIndex = 0;
					audio.innerHTML = "<source src=\"" + songList[0][0] + "\" type=\"audio/mp3\">";
					songInfoText.innerText = songList[0][1] + " - " + songList[0][2];
					// load song
					audio.load(); 
					// auto play song
					audio.play();
				}
		});

		document.getElementById("previous").addEventListener("click", function(){ 
				if (songList[currentSongIndex-1] != null) {
					currentSongIndex--;
					songInfoText.innerText = songList[currentSongIndex][1] + " - " + songList[currentSongIndex][2];
					audio.innerHTML = "<source src=\"" + songList[currentSongIndex][0] + "\" type=\"audio/mp3\">";
					// load song
					audio.load(); 
					// auto play song
					audio.play();

				} else {
					currentSongIndex = songList.length-1;
					audio.innerHTML = "<source src=\"" + songList[songList.length-1][0] + "\" type=\"audio/mp3\">";
					songInfoText.innerText = songList[songList.length-1][1] + " - " + songList[songList.length-1][2];
					console.log(currentSongIndex);
					// loads song
					audio.load(); 
					audio.play();
				}
		});
	}

	/* --- FUNCTION CALLS --- */

	
var juke = new Jukebox(songList);

	juke.addSong("audio/mipso_marianne.mp3", "Marianne", "Mipso");
	juke.addSong("audio/Stealing_Jane-Outside.mp3", "Outside", "Stealing Jane");
	juke.addSong("audio/toots-pressure.mp3", "Pressure Drop", "Toots and the Maytals");
	juke.addSong("audio/Acceptance-So.mp3", "So Contagious", "Acceptance");

	juke.initializeJuke();
}