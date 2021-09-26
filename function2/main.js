/*****************************************************/
(function(){
    function el(cssSelector){
        return document.querySelector(cssSelector)
    };

    let counter1 = 0;

    function universalCounter(){
        el('#ausgabe').innerHTML = counter1;
        counter1 +=counter1;
    }
    el('#btn').addEventListener('click', universalCounter);


    function special(n){
        el('#ausgabe').innerHTML = counter1;

    };
    el('#btn').addEventListener('click', function(){special(5)});
}())