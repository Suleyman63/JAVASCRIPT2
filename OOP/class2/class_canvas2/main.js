// (function(){}());

(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector);
    };

    const co = el('#canvas');
    const ctx = co.getContext('2d');

    const max = 500;

    let sammler = []; // klonspeicher



    class Proto {

        constructor (){

            this.x      = 10;
            this.y      = 10;
            this.col    = 0; // wird später definiert
            this.r      = 30;
            this.w      = 60;
            this.h      = 60;
        }
        init () {
            this.col = color();
            this.randomSpeed();
            sammler.push(this);

        }
        move () {

            if(this.x > co.width){
                this.x = -100;
                this.randomSpeed();
            };

            if (this.y > co.height){
                this.y = - 100;
                this.randomSpeed();
            };
            this.x += this.spX;
            this.y += this.spY;


            this.draw();
        }
        randomSpeed(){
            this.spX = Math.ceil(Math.random() * 5) + 1;
            this.spY = Math.ceil(Math.random() * 5) + 1;
        }


    };
 //##################################################################
 // Erweiten des Proto --- rect - circle   

    class Rect extends Proto{
        constructor(){
            super();
        }
       draw (){
           ctx.fillStyle = this.col;
           ctx.fillRect(this.x,this.y,this.w,this.h);
           ctx.strokeRect(this.x,this.y,this.w,this.h);
       } 
    };


    class Circle extends Proto{
        constructor(){
            super();
        }
        draw(){
            ctx.fillStyle = this.col;
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.r,0,2 * Math.PI, false);
            ctx.fill();
            ctx.stroke();
        }
    }

//###################################################################
    function color (){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let a = Math.random();
        return `rgba( ${r} ,${g} ,${b} ,${a} )`;

    };


    function klonFabrik(){

        let klon;
        for (let i = 0; i < max; i ++){
            if (i <= max/2){
                klon = new Circle();
            }else{
                klon = new Rect();
            }

            klon.init();
        };
        console.log(sammler)
    };


    function render (){
        requestAnimationFrame(render);
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.fillRect(0,0,co.width,co.height);
        // ctx.clearRect(0,0,co.width,co.height);

        sammler.forEach((klon) => {
            klon.move();
        });

    };

    klonFabrik();
    render ();
}());


