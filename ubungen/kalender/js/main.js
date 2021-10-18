(function(){

	function el(css){
		return document.querySelector(css);
	}
	function create(html){
		return document.createElement(html);
	}	


	function load(){

	fetch('data/advent_2019.json')
	.then((response)=> {return response.json()})
	.then((data)=>{
		elementGen(data)
	});
}


function elementGen(array){

    let h2,p,audio,img,audioSrc,imgSrc;

	array.map((index) => {

		h2 =create('h2');
		p =create('p');
		audio =create('audio');
		img=create("img");		
		

		h2.innerHTML=index['h2']['innerHTML']
		p.innerHTML=index['p']['innerHTML']
		imgSrc = index['img']['attributes']['src']
		audioSrc=index['audio']['attributes']['src']
		img.setAttribute('src',imgSrc)
		audio.setAttribute('src',audioSrc)
		

		el('#kalender').appendChild(h2)
		el('#kalender').appendChild(audio)
		el('#kalender').appendChild(img)
		el('#kalender').appendChild(p)
		
	});

}

load()

})();

















	
