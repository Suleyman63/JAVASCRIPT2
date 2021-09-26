function el(css){
	return document.querySelector(css);
	};



	let mannschaft = [
		{
			name:"Franz",
			alter: 23,
			tore:3,
	
		},
		{
			name:"Xaver",
			alter: 19,
			tore:1,
	
		},
		{
			name:"Egon",
			alter: 28,
			tore:5,
	
		},	
		{
			name:"Alex",
			alter: 24,
			tore:7,
	
		}
	
	
	];
	
	console.log(mannschaft[0].tore);
	
	
	function findeTore1(){
		let name, alter, tore;

		tore=mannschaft[0].tore;
		console.log(tore);

			tore=mannschaft[0].tore;
			alter=mannschaft[0].tore;
			name=mannschaft[0].tore;


		let n=mannschaft.length;
		for(let i=0; i<n; i++){
			if(mannschaft[i].tore>tore){
			tore=mannschaft[i].tore;
			alter=mannschaft[i].tore;
			name=mannschaft[i].tore;

		}
	
	}
	let ausgabe=`${name} (${alter} (${tore}))`;
	el('#info').innerHTML =ausgabe;
		
	
	}; 


	function findeTore2(){

	let spilerMax = mannschaft[0];
	mannschaft.forEach((spiler) => {
		if(spiler.tore>spilerMax.tore){
			spilerMax=spiler

		};

	});
	let ausgabe=`${spilerMax.name} (${spilerMax.alter} (${spilerMax.tore}))`;

	el('#info').innerHTML=ausgabe;
	}


	el('#btn').addEventListener('click',findeTore1);





let arr1 =[1,2,5,8,4,6]

arr1.forEach(console.log(arr1));
	



	
	





