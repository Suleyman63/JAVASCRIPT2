
function error(){
    let message, inputValue;

    inputValue=document.querySelector('#data').value;
    message = document.querySelector('#result');
    message.innerHTML='';

    try{
        if(inputValue=='') throw 'bu elemani bos birakamazsin';
        if(isNaN(inputValue)) throw 'bu alana sadece sayi girmelisin';
        inputValue=Number(inputValue);
       
        if(inputValue<5){
            throw 'girilen sayi 5 ten kucuk olamaz';
        }else if(inputValue>15){
            throw 'girilen sayi 15 ten buyuk olamaz';
        }
        }catch(e){
            message.innerHTML=e;
        }finally{
            document.querySelector('#data').value='';
        }
        document.querySelector('#p').textContent=inputValue;
    }

/****************************************************/
// let num=7;
// try{
//     eval("alert('javaScript');");
// }catch(e){
//     document.querySelector('#yeni').innerHTML=e;

// }

/****************************************************/



