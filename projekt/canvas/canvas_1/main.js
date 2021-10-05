(function(){
    function el(cssSelector){
        return document.querySelector(cssSelector);
    };


    let co=el('#canvas');
    let ctx=co.getContext('2d');


    function drawRect(col,x,y,w,h){

        ctx.fillStyle = col;

        ctx.fillRect(col,x,y,w,h)

    }

    function drawCircle(){
        ctx.fillStyle = 'rgba(200,0,200,0.5)';

        ctx.beginPath();

        ctx.arc(co.width/2, co.height/2,200,0,2 * Math.PI, false);
        ctx.fill();
    }


    function drawMyImage(){
        let img = new Image();

        img.src = 'child.jpeg';
        img.onload=function(){
            ctx.drawImage(img,200,100)
            drawAllForms()
        }

    }

    function drawAllForms(){
        drawRect('red',50,50,100,100);
        drawRect('blue',200,50,100,100);
        drawRect('green',350,50,100,100);

        drawRect('gold',50,250,100,100);
        drawRect('orange',200,250,100,100);
        drawRect('lightblue',350,250,100,100);
        drawCircle();
    }
  
  drawMyImage();
   



}());