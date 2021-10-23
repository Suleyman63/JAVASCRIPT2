
function Person(name,age){
    this.name=name
    this,age=age

}

Person.prototype.fullname = function(){
    return this.name+' '+this.age
}

Person.prototype.surname = 'ömür';

const person1 = new Person('alev',38)

const person2 = new Person('zeynep',38)

console.log(person1);
console.log(person2);