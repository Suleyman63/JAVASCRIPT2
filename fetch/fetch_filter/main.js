
(function(){
	function el(css){
		return document.querySelector(css)

	}

async function loadJson(){
	let url1 ='data/charlottenburg.min.json';
	let url2 ='data/friedrichshain_kreuzberg.min.json';
	let url3 ='data/marzahn_hellerdorf.min.json';
   
	
	let cBurg = await(await fetch(url1)).json()
	let fHain = await(await fetch(url2)).json()
	let marz = await(await fetch(url3)).json()


	// filtern
	let cBurgM = filter(cBurg,'m')
	let cBurgW = filter(cBurg,'w')
	

	let fHainM = filter(fHain,'m')
	let fHainW = filter(fHain,'w')
	

	let marzM = filter(marz,'m')
	let marzW = filter(marz,'w')
	


	/*************** manlich ***********/
	el('#m').addEventListener('click',()=> {ausgabe(cBurgM,'#burg')});
	el('#m').addEventListener('click',()=> {ausgabe(fHainM,'#kreuz')});
	el('#m').addEventListener('click',()=> {ausgabe(marzM,'#marz')});

	/*************** weblich ***********/
	el('#w').addEventListener('click',()=> {ausgabe(cBurgW,'#burg')});
	el('#w').addEventListener('click',()=> {ausgabe(fHainW,'#kreuz')});
	el('#w').addEventListener('click',()=> {ausgabe(marzW,'#marz')});
		
	};




	function filter(data, gender){
		
		let filterData = data.filter((obj) => 
		obj.anzahl >= 10 && obj.geschlecht ===gender);

		return filterData.splice(0,10)

	}
	

	function ausgabe(array,elementId){
		let ausgabeString = '';
		array.forEach(obj => {
			ausgabeString += `${obj.anzahl} : ${obj.vorname} <br>`;
		});
		el(elementId).innerHTML = ausgabeString;

	}
	
   
	loadJson()
}())


		
