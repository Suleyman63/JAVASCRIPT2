(function(){
    function el(cssSelector){
        return document.querySelector(cssSelector);
    };

    console.log(document);

    let obj = {
        a:20,
        b:30,
        c:{
            a:40,
            b:60,
            c:[
                1,
                4,
                6
            ]
        }
    }

    let x = obj.a + obj.c.b;
    console.log(x);
    console.log(obj.c.c[1]);



    let obj1 = {
        a:25,
        b:44,
        add: function(){
            return this.a + this.b;

        }
    }
    console.log(obj1.add());

    obj1.add();


    function foo(){
        this.innerHTML='tralala';

    }

    let p = el('#test1');
    console.log(p);
    p.addEventListener('click', foo)


/*********************************************************/
//start-stop button

//1. button selektieren
//2. function anlegen fur beschriftung des button
//3. function an den button binden

    let btn = el('#btn');
    let flag = true;

    function startStop(){
        if(flag){
            this.innerHTML = 'stop';
        }else{
            this.innerHTML = 'start';
        };
        flag = !flag;
    };
    btn.addEventListener('click',startStop)





let startzeit;
let animate = false;


function timer(){
    let zeit = new Date();
    let diff = Math.floor((zeit-startzeit)/1000);


    let minuten = Math.floor(diff/60);
    let sekunden = diff-minuten * 60;


    if(minuten<10){minuten = `0${minuten}`;
    if(sekunden<10){sekunden = `0${sekunden}`;

    let time = '${minuten}:${sekunden}';

    el('#uhr').innerHTML = time;

    animate=setTimeout(timer,1000);

};

el('#stop').addEventListener('click', function(){
    
    if(!animate){
        startzeit=new Date();
        this.innerHTML ='stop';
        timer();
    }else{
        this.innerHTML='start';
        clearTimeout(animate);
    };
});


}());