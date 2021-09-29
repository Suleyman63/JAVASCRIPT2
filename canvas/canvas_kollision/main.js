(function(){
    function el(cssSelector){
        return document.querySelector(cssSelector);
    };

    let co =el('#canvas');
    let ctx = co.getContext('2d')

    let animate = false;
    let klonSammler = {};
    let prop = 0;


    let counterKoll=0;

    let propto ={
        x:100,
        y:100,
        r:50,
        spX:2,
        spY:3,
        col:'rgba(255,0,0,0.4)',
        rx:0,
        ry:0,
        id:0,
        init:function(){
            this.x = Math.ceil(Math.random() * co.width);
            this.y = Math.ceil(Math.random() * co.height);


            this.spX = Math.ceil(Math.random() * 4)+1;
            this.spY = Math.ceil(Math.random() * 4)+1;

            this.id=prop;
            klonSammler[prop] = this;
            prop++;
        },
        move:function(){
            // prufung recht
            if(this.x > co.width - this.r){this.rx = 1;};
            // prufun links
            if(this.x < 0 + this.r){this.rx =0;}

            // prüfung unten
            if(this.y > co.height - this.r){this.ry =1;}

            // prufung oben
            if(this.y < 0 + this.r){this.ry =0;}


            // bewegung
            if(this.rx === 0){this.x += this.spX;};
            if(this.rx === 1){this.x -= this.spX;};
            if(this.ry === 0){this.y += this.spY;};
            if(this.ry === 1){this.y -= this.spY;};
          

            this.draw();


        },
        draw:function(){
            ctx.fillStyle = this.col;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.stroke(); // outline
        }
    };
    
    /**************************************/
            // nur zum testen!!!!!
           // propto.draw()
    /************************************/


    function klonFabrik(){
        let klon;
        for(let i=0; i<2; i++){
            klon = Object.create(propto);
            klon.init();
        }
        console.log(klonSammler);
    };



    function render(){
       animate = requestAnimationFrame(render);
        ctx.clearRect(0,0,co.width,co.height);

        for(let i in klonSammler){
            klonSammler[i].move();
        };


         // kollision check
        if(kollisionCircleCircle(klonSammler['0'],klonSammler['1'])){
            counterKoll ++;
            el('#canvas').style.background = 'blue';
        }else{
            el('#canvas').style.backgroundColor = 'green';    
        }     
    };



    function kollisionCircleCircle(c1,c2){
        let dx = c2.x - c1.x;
        let dy = c2.y - c1.y;
        let rSum = c1.r + c2.r;

        return(dx*dx + dy*dy <= rSum*rSum);


    };


klonFabrik();

el('#btn').addEventListener('click', function(){
    if(!animate){
        render();
        this.innerHTML='animate stop';
    }
    else{
        cancelAnimationFrame(animate);
        animate=false;
        this.innerHTML ='animate start';
    };
});



}());

/***************************************************/
// let obj1={
//     a:1,
//     b:2
// };

// console.log(obj1.a);
// console.log(obj1['a']);

// let props = Object.keys(obj1);
// console.log(props);
// let obj2={
//     1:1,
//     2:2
// };

// console.log(obj2[1]);
// console.log(obj2[2]);