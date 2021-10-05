
	
	function el(css){
		return document.querySelector(css);
	};

	// die 'gewünschten' keys
	let legalKeys = 'qwertzui';

	const allSounds = {
		'q' : 'sound/piano/A0.mp3',
		'w' : 'sound/piano/A1.mp3',
		'e' : 'sound/piano/A2.mp3',
		'r' : 'sound/piano/A3.mp3',
		't' : 'sound/piano/A4.mp3',
		'z' : 'sound/piano/A5.mp3',
		'u' : 'sound/piano/A6.mp3',
		'i' : 'sound/piano/A7.mp3'
	};

	function playAudio(path){

		let sound = new Audio();
		sound.src = path;
		sound.play();

	};


	function keyDown(e){

		if (legalKeys.includes(e.key)){

			let tCode = e.key;
			let myId = `#${tCode}`;
			el(myId).className = 'aktiv';
			playAudio(allSounds[tCode]);

		};
	
	};

	function keyUp(e){

		if (legalKeys.includes(e.key)){

			let tCode = e.key;
			let myId = `#${tCode}`;
			el(myId).className = 'passiv';	

		};
	};

	document.addEventListener('keydown',keyDown);
	document.addEventListener('keyup',keyUp);
