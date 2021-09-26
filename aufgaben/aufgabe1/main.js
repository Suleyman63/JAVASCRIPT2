
let datenbank = [
				 ["Mieter1"] , 
				 ["Fritz", "Fischer"]
				
				];
				
				
function ausgabe(){
	datenbank.map((a, b)=>{
		console.log(a,b);})

	
	
};	
					
document.querySelector('#info').innerHTML = ausgabe();

