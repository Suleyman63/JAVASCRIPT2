function Person(name, surname, age){
    this.name=name;
    this.surname=surname;
    this.age=age;

    }



Person.prototype.fullname=function(){
    return this.name+' '+this.surname

}

Person.prototype.friends=['asli','ruzgar']

const ali = new Person('ali','kilic',20);
const arda = new Person('arda','keriz',30);

console.log(ali);
console.log(arda.fullname());

console.log(arda.friends);
console.log(ali.friends);


arda.friends.push('cinar')
console.log(arda.friends);
console.log(ali.friends);

/******************** class ************************************/

class Kisi{
    constructor(name, surname, age){
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.friends =['bulut','erhan']
        
}
    fullname(){
    return this.name+' '+this.surname

    }
}
const fatih = new Kisi('fatih','kilic',20);
const murat = new Kisi('murat','keriz',30);

console.log(murat);
console.log(fatih);
console.log(murat.fullname());
console.log(fatih.fullname());

fatih.friends.push('mikail')
console.log(fatih.friends);

