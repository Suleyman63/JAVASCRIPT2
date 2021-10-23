
(function(){
	


	let map = L.map('map', {
		 center: [52.505495, 13.299271],
		 zoom:3,
		 fullscreenControl: true,
		 fullscreenControlOptions: { // optional
			 title:"Karte im Fullscreen Modus",
			 titleCancel:"Fullscreen verlassen"	 
		 }
	 
	 });
 
	 // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	 // 		zoom:{maxZoom:18},
	 // 		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	 // 	}).addTo(map);
 
	 L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		 zoom:{maxZoom:19},
		 subdomains:['mt0','mt1','mt2','mt3']
		 }).addTo(map);
 
		 
	 async function loadJson(){
		 let data = await (await fetch('data/all_countrys.geojson')).json();
		 addLayer(data);
	 };
 
	 function addLayer(data){
 
		 data.forEach((obj) => {
			 
			 let pos = obj.latlng;
			 if(pos.length > 1 ){
				  let marker = L.marker(pos).addTo(map);
				  let imgPath = `data/${obj.cca3.toLowerCase()}.svg`;
				 // console.log(imgPath)
				  let content = `
				  <h3>${obj.name.official}</h3>
				 <img src = ${imgPath} class = "flagge">
				 <p>Capitol: ${obj.capital}</p>
				  `;
 
				  marker.bindPopup(content);
			 };
		   
 
		 });
 
	 };
	 loadJson();
 })();			
			  
			  
			 
				 
				 
 
		
	
	 
	 
	 
		 
		 
	 
 
 
 
 
 
 
 