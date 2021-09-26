(function(){
    function el(cssSelector){
        return document.querySelector(cssSelector)
    };

    let counter1 = 0;

    function arttir(){
        counter1++;
        el('#ausgabe').innerHTML = counter1;
        
    }
    el('#btn1').addEventListener('click', arttir);


    function azalt(){
        counter1--;
        el('#ausgabe').innerHTML = counter1;

    };
    el('#btn2').addEventListener('click', azalt);


    function degistir(){
        let elem = document.querySelector('#parent').children;
       // el.style.color='red';
       // el('#text').innerHTML = 'JAVA';


        let i;
        for(i=0; i<el.length; i++){
            elem[i].style.color ='red';

            document.write(elem[1].innerHTML,'<br>')
            document.write(elem[0].textContent, '<br>')

        }
         
    }
    degistir()


    


}())