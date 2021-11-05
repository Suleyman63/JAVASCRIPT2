function el(css){
	return document.querySelector(css);
};



let sammler = [];

let co = el('#canvas');
let ctx = co.getContext('2d');
let max = 500;

class Proto {
	constructor() {
		this.x = 10;
		this.y = 10;
		this.r = 30;
		this.rx = 0;
		this.ry = 0;
		this.col = 0;
		this.w = 60;
		this.h = 60;
	}

	init(){
		this.col =  color();
		this.x = Math.ceil(Math.random()*co.width);
		this.y = Math.ceil(Math.random()*co.height);
		this.randomSpeed(15);
		sammler.push(this);
	}
	move(){
		
			if (this.x > co.width){this.x = -100;this.randomSpeed(10);}
			if (this.y > co.height){this.y = -100;this.randomSpeed(10);}
			
			this.x += this.spX
			this.y += this.spY
			
			this.draw();
		}
	randomSpeed(n){
		this.spX = (Math.ceil(Math.random()*5)+2) / n;
		this.spY = (Math.ceil(Math.random()*5)+ 4) / n;
	}
}
class Circle extends Proto {
		constructor() {
		super();
	 
	}
	draw(){
		ctx.fillStyle = this.col;
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,2 * Math.PI,false);
		ctx.fill();
		ctx.stroke()
	}	
}
class Rect extends Proto {
	constructor() {
	 super();
	 
	}
	draw(){
		ctx.fillStyle = this.col;
		
		ctx.fillRect(this.x,this.y,this.w,this.h);
		ctx.strokeRect(this.x,this.y,this.w,this.h);
	}	
  }
  
function klonFabrik(){

let klon;
for (let i = 0; i < max/2; i ++){
		if (i < 50){
 			klon = new Circle();
		}else{
			klon = new Rect();
		}
		
		klon.init()
}

}
function color(){
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	let a = (Math.floor(Math.random()*10))/100;
	//return `rgb(0,${g},${b})`;
	 return `rgba(${r},${g},${b},${a})`;
}
function render(){
	requestAnimationFrame(render);
	// ctx.clearRect(0,0,co.width,co.height);
	ctx.fillStyle = 'rgba(255,255,255,0.1)'
	ctx.fillRect(0,0,co.width,co.height);

		sammler.forEach((val)=>{
			val.move();
		});
	
}


klonFabrik();
render();




