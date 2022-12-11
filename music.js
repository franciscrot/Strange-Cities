// ------------------------------------
// Play audio tracks randomly hopefully
// ------------------------------------

	// User interacts with web page
	window.alert("The Voyage of The Ink");

	// Define an array of music tracks
	const tracks = [ "thunder_step.mp3", "witches_dance.mp3", "old_ship_2.mp3", "triste_coeur.mp3"];

	// Create a new Audio element
	var audioElement = new Audio();

	// Define a function to play the next track
	function playNextTrack() {

		// Generate a random number between 0 and the number of tracks in the array
		var randomNumber = ((Math.floor(Math.random() * 4))+1);

		// Use the random number to select a track from the array
		const track = tracks[randomNumber];

		// Set the src property of the Audio element to the selected track
		audioElement.src = track;

		// Play the track
		audioElement.play();
		}

	// Set the onended event of the Audio element to call the playNextTrack function
	audioElement.onended = playNextTrack;

	// Start playing the first track
	playNextTrack();

