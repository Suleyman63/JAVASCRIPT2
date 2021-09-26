(function(){
    function el(cssSelector){
        return document.querySelector(cssSelector)
    };

    let p=document.querySelector('#p3');
    let div =document.querySelector('#parent');

function ekle(){ 
    let p=document.createElement('p');
    let text=document.createTextNode('JAVA');
    p.appendChild(text);
    div.insertBefore(p,p1);
}
el('#ekle').addEventListener('click', ekle);


function sil(){  
    //div.removeChild(p3);
    p1.parentNode.removeChild(p1)
}
el('#sil').addEventListener('click', sil);



function degistir(){
    let p=document.createElement('p');
    let text=document.createTextNode('YENI DEGISTIM');
    p.appendChild(text);
    div.replaceChild(p,p1);
}
el('#degistir').addEventListener('click', degistir);


}());