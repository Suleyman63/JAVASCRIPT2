function el(css){
	return document.querySelector(css)
}


function create(css){
	return document.createElement(css)
}


async function imgDom(){
	let data = await (await fetch('data/data.json')).json()

	let imgs=showImgToDom(data)
	el('#images').appendChild(imgs)
	
	imgCanvas(data)
}


function showImgToDom(array){
	let div=create('div')
	array.map((path) => {
	let img =create('img')
		img.setAttribute('src',path)
		div.appendChild(img)
	})
	return div;
}



/***********************************/
//canvas icin olusturduk
async function imgCanvas(array){

	let ctx = el('#canvas').getContext('2d')

	let x=10;

	array.map((path) => {

	let	img =create('img')
		img.src = path;
		img.onload = () => {
			ctx.drawImage(img,x,10)
			x += img.width + 10
	}})

}


imgDom()