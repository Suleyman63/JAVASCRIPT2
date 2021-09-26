function el(id){
	return document.getElementById(id);
	};


	const myObj = {
		index: 0,
		arr : ['info1','info2','info3'],
		ausgabe:function(){
				return arr;
				
		}
		

	}

	

// Button mit ausgabe über click Event verbinden

// code hier
 el('b1').addEventListener('click', myObj.ausgabe);
