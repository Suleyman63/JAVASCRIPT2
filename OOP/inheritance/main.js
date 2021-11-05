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


/************************ super - extends ***********************************/
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



/******************************************************************/

class Person{
    constructor(name,surname,age){
        this.name=name
        this.surname=surname
        this.age=age
    }
    fullname(){
        return this.name+' '+this.surname
    }
}

const person1=new Person('alex','müller',25)
console.log(person1);



class Engineer extends Person{
    constructor(name,surname,age,job){
        super(name,surname,age);
        this.job=job
    }
    getMoney(){
        console.log('para kazan');
    }
}

const engineer1 = new Engineer('mahmut','yilmaz',36,'engineer')
console.log(engineer1);


/**************************************************************/
class ExtendedArray extends Array {
    shuffle(){
        this.sort(()=>Math.random() - 0.5)
    }
}

let myArr = new ExtendedArray(1,2,5,4,6)

console.log(myArr);

myArr.shuffle();
console.log(myArr);