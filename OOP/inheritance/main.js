(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector);
    };


    let klonSamler = [];

    let proto={
        a:10,
        b:20,
        add:function(n){return (this.a +' '+this.b) * n},
        init:function(){
            this.a = Math.ceil(Math.random() * 100) + 50;
            this.b = Math.ceil(Math.random() * 100) + 50;
            klonSamler.push(this)
        }
        
    };


    function klonFabrik(){
        for(let i=0; i<100; i++){
        let klon = Object.create(proto);
        klon.init();
        };
    }
    klonFabrik();

   
   
console.log(klonSamler);
   
}());


/*****************************************************/
function Sorular(soru,secim,cevap){
    this.soru=soru
    this.secim=secim
    this.cevap=cevap

}

Sorular.prototype.checkAnswer = function(cevap){
    return this.cevap === cevap
}



let s1 = new Sorular('what is the best programing language?', ['c#','javascript','pyhton','java'],'javascript')

let s2 = new Sorular('what is the best programing language?', ['Angular','javascript','SQL','Node'],'javascript')

let s3 = new Sorular('what is the best programing language?', ['c++','javascript','Typscript','React'],'javascript')

console.log(s1.checkAnswer('c#')); // false
console.log(s1.checkAnswer('javascript')); // true
console.log(s1.checkAnswer('java')); // false

