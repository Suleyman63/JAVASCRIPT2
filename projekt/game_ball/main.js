(function(){

    function el(css){
        return document.querySelector(css);
    };


    let co=el('#canvas');
    let ctx = co.getContext('2d');


    let brickSammler = {};
    let brickIndex = 0;

    let animate = false;

    let tCode;

    let protoBrick = {
        x:10,
        y:10,
        w:60,
        h:20,
        id:0,
        col:'rgb(255,0,0)',
        init:function(){
            brickSammler[brickIndex] = this;
            this.id = brickIndex;
            brickIndex++;

        },
        draw:function(){
            if(kollision(ball,this)){
                ball.ry = 0;
                delete brickSammler[this.id];


                //prufung wieviele bricks sind noch da
                let props = Object.keys(brickSammler);
                if(props.length === 0){klonFabrik()};
            }
            ctx.fillStyle = this.col;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        },
    };

    let ball={
        x:100,
        y:150,
        r:15,
        spX:5,
        spY:3,
        col:'rgb(0,255,0',
        rx:0,
        ry:0,
        move:function(){

            if(this.x < 0){this.rx = 0};
            if(this.x > co.width){this.rx = 1};

            if(kollision(this, paddle)){this.ry = 1;};

            if(this.y  < 0){this.ry =0;};
            if(this.y > co.height){
                this.y =150
                this.x = Math.ceil(Math.random() * co.width)
                this.ry=0;
            
            };
            //bewegung
            if(this.rx === 0){this.x += this.spX};
            if(this.rx === 1){this.x -= this.spX};

            if(this.ry === 0){this.y += this.spY};
            if(this.ry === 1){this.y -= this.spY};

            this.draw()

        },
        draw:function(){

            ctx.fillStyle = this.col;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    };

    let paddle = {
        x:410,
        y:350,
        w:80,
        h:20,
        col:'rgb(0,0,255)',
        spX:10,
        move:function(){
            if(tCode==='ArrowLeft' && this.x > 0){
                this.x -= this.spX;
            }
            if(tCode==='ArrowRight' && this.x < co.width - this.w){
                this.x += this.spX;
            }
            this.draw();
        },
        draw:function(){
            ctx.fillStyle = this.col;
            ctx.fillRect(this.x,this.y,this.w,this.h);
        },
    }

    

    function klonFabrik(){
        let klon;
        let x=10, y=10;

        for(let i=0; i<40; i++){
            klon=Object.create(protoBrick);
            klon.init();

            klon.x = x;
            klon.y = y;

            x += 90;
            if(x > co.width){
                x = 10;
                y += 30;
            };
        };

    console.log(brickSammler);

    }

    function render(){
        requestAnimationFrame(render);
        ctx.clearRect(0,0,co.width, co.height);
        paddle.move();
       // protoBrick.draw();

       for(let i in brickSammler){
           brickSammler[i].draw();
       }
       ball.move();
    };

    function kollision(circle,rect){
        var distX = Math.abs(circle.x - rect.x-rect.w/2);
        var distY = Math.abs(circle.y - rect.y-rect.h/2);

        if (distX > (rect.w/2 + circle.r)) { return false; }
        if (distY > (rect.h/2 + circle.r)) { return false; }

        if (distX <= (rect.w/2)) { return true; } 
        if (distY <= (rect.h/2)) { return true; }

        var dx=distX-rect.w/2;
        var dy=distY-rect.h/2;

        return (dx*dx+dy*dy<=(circle.r*circle.r));

    }; // ENDE kollision


    render();


    function checkDown(e){
        tCode=e.key;
        //e.preventDefault()
        console.log(tCode);
    };


    function checkUp(){
        tCode=false;
    }


    klonFabrik()


    document.addEventListener('keydown', checkDown);
    document.addEventListener('keyup', checkUp);

    el('#start').addEventListener('click', function(){})

}());

