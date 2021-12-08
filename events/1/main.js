function message(){
    alert('ben calistim')
}


let myelement = document.querySelector('#btn');
myelement.addEventListener('click', function1)

function function1(){
    document.write('merhaba')
}


let element = document.querySelector('#btn2');
element.addEventListener('click', func2)
function func2(a,b){
   alert(9+10)

}

function Focus(){
    document.querySelector('#key').style.borderColor='red'
}

function Blur(){
    document.querySelector('#key').style.borderColor='green'
}

function Keydown(){
    alert('tusa bastin')
}

function Keyup(){
    alert('elini cektin')
}

function select(){
    alert('metin sectin')
}

/*********************************************/
let num1 = document.getElementById('num1');
        let num2 = document.getElementById('num2');
        let sum = document.getElementById('sum')

        num1.addEventListener('input', topla);
        num2.addEventListener('input', topla);

        function topla() {
            let one = parseInt(num1.value);
            let two = parseInt(num2.value);

            sum.innerHTML = 'toplam :' + (one + two);
            
        }

/**************************************************************/
        let square = document.querySelector('#square');
        let rectangle = document.querySelector('#rectangle');

        square.addEventListener('click', clikSquare);
        rectangle.addEventListener('click', clikRectangle);


        function clikSquare(event){
            console.log(event.target);
            event.target.style.backgroundColor = 'black';
            event.clientX, event.clientY;
            event.stopPropagation();
            alert('square')

        }
        function clikRectangle(event){
            alert('rectangle')

        }