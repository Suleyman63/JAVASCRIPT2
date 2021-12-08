import {
	get,
	set,
	del,
  
  
  } from 'https://cdn.jsdelivr.net/npm/idb-keyval@6/+esm';
  
	


(function(){


	const db = {
		myKey : "meineBilder",
		readDB: function(){
			return	get(this.myKey);
		},
		writeDB: function(data){
			return	set ( this.myKey,data ) 
		},
		deleteDB: function(){
			del(this.myKey);
		},
		updateDB: async function(newMember){
			let tempData = await this.readDB();
			if(!tempData){tempData = []}
			tempData.push(newMember);
			this.writeDB(tempData);
		}
	};

// #############  Helper #######################

			function el(css){
				return document.querySelector(css);
				}
				
			function group(css){
				return document.querySelectorAll(css);
				}
				
			function create(html){
					return  document.createElement(html);
				
			}		
					
	// ############# ENDE Helper ######################################
	
		
	let co = el('#canvas');
	let ctx = co.getContext('2d');
	// console.log(ctx)		
	function clearCanvas(){
		ctx.clearRect(0,0,co.width,co.height);
	}	
	
	function loadImgToCanvas(){
	
		clearCanvas();  // Alle Pixel im Canvas tranparent

		let img = new Image();

		img.onload = function(){ 
			console.log(this)
			let faktor 	= img.width / co.width;
			let w 		= img.width  / faktor; 	// Skalierung des Bildes
			let h 		= img.height / faktor;	// Skalierung des Bildes

			// ctx.drawImage(img,x,y,w,h);
			// Bild in das Canvas zeichnen
			ctx.drawImage(this,0,0,w,h); 
			
		}
		// Blob erzeugen
		let blob =  URL.createObjectURL(this.files[0]);
		// Blob als Bildquelle zuweisen
		img.src = blob;
	};

	function downLoadMyPic(){
		let img = co.toDataURL('image/png'); // ScreenShot vom Canvas
		this.href = img;
	};

	async function bildSpeichern (){
		let title = window.prompt('Bild Titel eingeben');
		if(!title){
			// Hinweis für den User
			return;
		}

		co.toBlob(function(blob){
			let blobObject = {};     // Obj für die db
			blobObject.titel = title;
			blobObject.blob = blob;
			blobObject.id = Date.now();
			db.updateDB(blobObject);  // in db speichern
		});
	};

	async function erzeugeBildAuswahlAusDB(){
		let headline = '<h3>Meine gespeicherten Bilder</h3>';
		el('#auswahl').innerHTML = headline;
		// await nur in async !!!!!
		//db auslesen
		let data = await db.readDB(); 
		if(!data){return;} // Wenn DB leer - Abbruch

		// datentyp prüfen
		if (!Array.isArray(data)){return}

		// div buttons erzeugen
		// pro Bild ein div
		data.forEach((obj) => {

			let div = create('div');
			div.className ='div-auswahl';
			div.setAttribute('data-id',obj.id);
			div.addEventListener('click',bildAusWahlToCanvas);
			div.innerHTML = `Bildtitel: ${obj.titel}`;
			el('#auswahl').append(div);
		});
	};

	async function bildAusWahlToCanvas(){
		clearCanvas();
		let data = await db.readDB();
		let id = this.getAttribute('data-id');
		
		// Das richtige Bild - Blob aus dem Array suchen
		let myBlob = data.find((obj) => obj.id == id);

		let img = new Image();

		img.onload = function(){
			ctx.drawImage(img,0,0);
		};

		img.src = URL.createObjectURL(myBlob.blob);


	};

	el('#upload').addEventListener('change',loadImgToCanvas);
	el('#b1').addEventListener('click',clearCanvas);
	el('#download').addEventListener('click',downLoadMyPic);
	el('#speichern').addEventListener('click',bildSpeichern);
	el('#ausgabe').addEventListener('click',erzeugeBildAuswahlAusDB);

})();

	
	
	