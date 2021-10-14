(function(){
    function el(cssSelector){
        return document.querySelector(cssSelector);
    };


    function create(html){
        return document.createElement(html);
    };


    let imgs = ['img/1.jpeg','img/2.jpeg','img/3.jpeg'];

    let text = [
    'beschreibung des bild 1',
    'beschreibung des bild 2',
    'beschreibung des bild 3']

    let figText =[
        'untertext fur bild 1',
        'untertext fur bild 2',
        'untertext fur bild 3',
    ]


// tek resim  icin func
   /*  function einBild(){

    let img = create('img');

    img.setAttribute('src', imgs[0]);
    img.setAttribute('alt', text[0]);
    img.setAttribute('width', '600');
    img.setAttribute('height', '400');

    el('#images').appendChild(img);

    };
    einBild(); */



// butun resimler icin func
    function alleBild(){
        imgs.forEach((pfad,index)=>{
            let figure = create('figure');
            let figCaption = create('figcaption');
            figCaption.innerHTML = figText[index];
            let img = create('img');
            img.setAttribute('src',pfad);
            img.setAttribute('alt', text[index]);
            img.setAttribute('width', '600');
            img.setAttribute('height', '400');

            figure.appendChild(img);
            figure.appendChild(figCaption);

            el('#images').appendChild(figure);
        });
    };
    alleBild();
    


}());