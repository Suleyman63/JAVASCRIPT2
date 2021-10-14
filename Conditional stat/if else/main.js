/***************************************/


// let x = 5;

// if(x==4){
//     alert('x 4 e esit')
// }
// else if(x<4){
//     alert('x 4 ten kucuk')
// }
// else if(x>4){
//     alert('x 4 ten buyuk')
// }
// else
// alert('yanlis secim')



let note=Number(prompt('not giriniz'));

function abc(){
 
        if(note>=60){
             return 'gectiniz';
        }else{
            return 'kaldiniz';
    }
    
   }
   
document.querySelector('#result').innerHTML=abc()


