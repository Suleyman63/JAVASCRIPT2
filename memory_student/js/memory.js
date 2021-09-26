(function(){
	 
    let imgMix,klicks,spielStart,max,erfolg,z,img1,img2;

    function initVaris(){

        max = 16;
        klicks = 0;
        spielStart =null;
        erfolg =0;
        let tempMix = loadImgSet();
        imgMix = shuffleArray(tempMix)
        z = 0;


        el('#zeit').innerHTML='';
        el('#klicks').innerHTML='';

    };

    
    let allSounds = {
        'atmen':'sound/mp3/atmen.mp3',
        'bomb1':'sound/mp3/bomb1.mp3',
        'bomb2':'sound/mp3/bomb2.mp3',
        'break':'sound/mp3/break.mp3',
        'death':'sound/mp3/death.mp3',
        'dudel':'sound/mp3/dudel.mp3',
        'music':'sound/mp3/music.mp3',
        'pfeif':'sound/mp3/pfeif.mp3',
        'pong':'sound/mp3/pong.mp3',
        'shot':'sound/mp3/shot.mp3',
        'spawn':'sound/mp3/spawn.mp3',
        'winner':'sound/mp3/winner.mp3',
    };

    function playSound(path,vol){
        let audio = new Audio();
        if(vol){
        audio.src = path;
        audio.play();
        }
    }

    function createField(){
        let img;
        for(let i=0; i<max; i++){
            img= document.createElement("img"); 
            img.setAttribute('src', 'img_1/memory_1.gif');
            img.setAttribute('data-index',i);
            img.addEventListener('click', checkImg);
            el('#game').appendChild(img);

        // let img;
        // for(let i=0; i<max; i++){
        //     img = create('img');
        //     img.setAttribute('data-index',i);
        //     img.src ='img_1/memory_1.gif';
        //     img.addEventListener('click', checkImg);
        //     el('#game').appendChild(img);
         
     
         };

    };

    function shuffleArray(array){
        let copy=[...array];
        let mix =[];

        let n=copy.length;
        for(let i=0; i<n; i++){
            let index =Math.floor(Math.random() * copy.length);
            let wert =copy.splice(index,1)[0];
            mix.push(wert);
        };
        return mix;
    };


    function loadImgSet(){
        let start =Math.ceil(Math.random()*18);
        let set = [];

        for(let i=start; i<start +(max/2); i++) {
         let path = `img_1/p_${i+1}.gif`;
         set.push(path);
         set.push(path); 
        }

        return set;
    };

    function klickCounter(){
        klicks++;
        let ausgabe='Klick';
        if(klicks>1){ausgabe='Klicks'}
        el('#klicks').innerHTML =`${klicks} ${ausgabe}`;
    };


    function time(){
        if(klicks===max/2){
            spielStart = new Date()
        };
    };

    function checkImg(){
        klickCounter();
        time()
        playSound(allSounds['pong']);

        z++;
        if(z===1){

            img1 =this;

            let index = parseInt(img1.getAttribute('data-index'));
            img1.src =imgMix[index];

            img1.removeEventListener('click',checkImg)
        }
        if(z===2){

            img2=this;

            let index = parseInt(img2.getAttribute('data-index'));
            img2.src =imgMix[index];

            img2.removeEventListener('click',checkImg)

            if(img1.src===img2.src){
                gleich();
                gameOver();

            }else{
                setTimeout(ungleich,500)

            };
        };
        
    };

    function gameOver(){
        erfolg++;
        if(erfolg===max/2){
            group('#game img').forEach((bild,index) => {
                bild.src=imgMix[index];
            });
            zeitMessen();
            el('#start').style.display ='block';
        };
    };

    function zeitMessen(){
        let spielEnde = new Date();
        let diff = Math.floor((spielEnde-spielStart) / 1000);
        let ausgabe=`du hast ${diff} sekunden gepilet`;
        el('#zeit').innerHTML =ausgabe;
    }

    function ungleich(){
        img1.src='img_1/memory_1.gif';
        img2.src='img_1/memory_1.gif';
        img1.addEventListener('click',checkImg)
        img2.addEventListener('click',checkImg)
        z=0;

    }

    function gleich(){
        img1.src ='img_1/wow.gif';
        img2.src ='img_1/wow.gif';
        z=0;

    }

    function newGame(){
        this.style.display ='none';
        initVaris();
        group('#game img').forEach((bild) => {
            bild.src = 'img_1/memory_1.gif';
            bild.addEventListener('click',checkImg);
        });
    };
	
    initVaris();	
    createField();
    el("#start").addEventListener('click', newGame)

}());






