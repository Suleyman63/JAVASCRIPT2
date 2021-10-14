(function(){

	function el(css){
		return document.querySelector(css);
	}
				
	function group(css){
		return document.querySelectorAll(css);
	}
	
	

	function loadJson(){
		fetch('https://www.berlin.de/lageso/gesundheit/infektionskrankheiten/corona/tabelle-altersgruppen/index.php/index/all.json?q=')
		.then((res) => res.json())
		.then((data) =>{
			console.log(data);
			let daten = datenKonverter(data)
			drawChart(
				daten.altersgruppen,
				daten.fallzahlen,
				daten.colors,
				daten.borders,
				daten.titel,
				daten.type
				);
		});
		
	};

	function datenKonverter(obj){

		let convertObj = {}

		let altersGruppen = [];
		let fallZahlen = [];
		let colors = [];
		let borderColors = [];
		let beschriftung = 'aktuelle covid fallzahlen berlin nach altersgruppen';
		let charType = 'bar';

		let daten = obj.index;
		
		daten.forEach((val,index,array) => {
			if(index===array.length-1){return;};

			altersGruppen.push(val.altersgruppe);
			fallZahlen.push(val.fallzahl);
			//colors.push('red');
			borderColors.push('black')

			/**************** renkler ***************************/
			let maxFallzahl = Math.max(...fallZahlen)
			let alpha;
			fallZahlen.forEach((elem,index) =>{
				if(elem < maxFallzahl / 5){
					colors[index] ="rgba(2555,0,0,"+alpha+")";
				}else{
					alpha=0.2 + elem / maxFallzahl * 0.8;
					colors[index] = "rgba(2555,0,0,"+alpha+")";
				}
			})

		});

		convertObj.altersgruppen = altersGruppen;
		convertObj.fallzahlen = fallZahlen;
		convertObj.colors = colors;
		convertObj.borders = borderColors;
		convertObj.titel = beschriftung;
		convertObj.type = charType;

		return convertObj;
	}


	
	function drawChart(altersgruppen,fallzahlen,colors,bordercolors,beschriftung,charttype){
		var ctx = document.getElementById('canvas1').getContext('2d');
		var myChart = new Chart(ctx, {
			type: charttype,
			data: {
				labels: altersgruppen,
				datasets: [{
					label: beschriftung,
					data: fallzahlen,
					backgroundColor: colors,
					borderColor: bordercolors,
				borderWidth: 0
			}]
    },
		// options: {
		// 	scales: {
		// 		yAxes: [{
		// 			ticks: {
		// 				beginAtZero: true
        //    			}
        // 		}]
    	// 	}
		// }
	});
}

	loadJson()

 
})();
	
	
	