/*************** create element  *******************/
   let btn = document.querySelector('#btn');
   btn.onclick=function(){
       let scriptCreate = document.createElement('script');
       scriptCreate.scr = 'message.js';
       scriptCreate.type = 'javascript';
       document.getElementsByTagName('head')[0].appendChild(scriptCreate);
   }



/****************** window open close *************************************/

let result, newWin;

result=document.querySelector('#result');

function openWin(){
    newWin= window.open('', 'newWin', 'width=600', 'height=400');
    newWin.document.write('yeni pencere acildi')
}

function resizeWin(){
    newWin.resizeTo(1000, 800);
}


function movieWin(){
    newWin.moveTo(450,150)
}

function closeWin(){
    newWin.close();
}


/***************************** window history- window nawigator ************/

function goForward(){
    window.history.forward();
}


function goBack(){
    window.history.back();
}


/***************************** popup boxes *********************************************/
let sonuc=document.querySelector('sonuc');
function boxes(){
    
    let message, getValue;

    
    if(confirm('silmek istediginize emin misiniz')){
    message='secilen öge silindi';
    }else{
        message='iptal';
    }
    sonuc.innerHTML=message;


}



let son=document.querySelector('son');
function onayla(){
    
    let mes, getValue;

    getValue=prompt('ders adi')
    if(getValue==null || getValue==''){
    mes='bu alan bos olamaz';
    }else if(getValue=='javascript'){
        mes=getValue+'dogru giris';
    }else{
        mes='yanlis giris'
    }
    sonuc.innerHTML=mes;


}

