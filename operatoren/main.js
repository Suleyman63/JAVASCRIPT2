/********************** OPERATOREN **********************/
function arttir(){
 
    let sonuc=document.getElementById("sonuc");
    sonuc.value=Number(sonuc.value)+1;
    }
     

    function azalt(){
     
    let sonuc=document.getElementById("sonuc");
    sonuc.value=Number(sonuc.value)-1;
    }


    /******************************************************/

   (function(){
       function el(cssSelector){
           return document.querySelector(cssSelector)

       };

       let myfontsize = 1;

       function fontSize(){
        el('#web').style.fontSize = myfontsize + 'rem';
        el('#ausgabe').innerHTML = 'Die großte schrifte ist : ${myfontsize}rem';

       };

       function bigger(){
           myfontsize += 0.2;
           fontSize();
           
       };


       function smaller(){
           myfontsize -= 0.2;
           fontSize();
           //el('#ausgabe').style.fontSize = myfontsize + 'rem';
       };

       el('#plus').addEventListener('click',bigger);
       el('#minus').addEventListener('click',smaller);


    }());