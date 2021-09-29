(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector);
    };

    let co = el('#canvas');
    let ctx = co.getContext('2d');
    let klonSamler = [];


    let proto = {
        x:10,
        y:10,
        w:3,
        h:10,
        rx:0,
        ry:0,
        col:'red',
        spX:1.5,
        spY:1,
        init:function(){
            this.col = color();

            this.x=Math.ceil(Math.random() * co.width);
            this.y=Math.ceil(Math.random() * co.height);

            this.spX=Math.ceil(Math.random() * 2);
            this.spY=Math.ceil(Math.random() * 2);

            klonSamler.push(this);
        },
        move:function(){
                 
            // sag pos x
            if(this.x > co.width - this.w){this.rx = 1;}
            //sol pos x
            if(this.x < 0){this.rx = 0;};


            // sag pos y
           if(this.y > co.height - this.h){this.ry = 1;}
           //sol pos y
           if(this.y < 0){this.ry = 0;};


            // X position
            // saga gonder
            if(this.rx === 0){this.x += this.spX;};
            // sola gonder
            if(this.rx === 1){this.x -= this.spX;};


            // Y position
            // saga gonder
            if(this.ry === 0){this.y += this.spY};
            // sola gonder
            if(this.ry === 1){this.y -= this.spY};
            this.draw();
        },


        draw:function(){
            ctx.fillStyle = this.col;
            ctx.fillRect(this.x,this.y,this.w,this.h)
        }
        
    };

    function color(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
    
   
    

        return `rgb(${r},${g},${b})`;
    }

    function klonFabrik(){
        let klon;
        for(let i=0; i<500; i++){
            klon = Object.create(proto);
            klon.init();
        }
    }

    function render(){
        requestAnimationFrame(render);
       //ctx.clearRect(0,0,co.width,co.height);
       ctx.fillStyle = `rgba(255,255,256,0.01)`;
       ctx.fillRect(0,0,co.width,co.height);
       klonSamler.forEach((klon) => {
        klon.move();
       });
         
       
    };

    klonFabrik()
    render();

}());