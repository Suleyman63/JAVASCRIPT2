
// function Person(name,surname,age){
//     this.name=name;
//     this.surname=surname;
//     this.age=age;
// }


// Person.prototype.fullname = function(){
//     return this.name+' '+this.surname

// }

// Person.prototype.friends = ['rüzgar','eda']

// const person1 = new Person('alex','müller',26)
// const person2 = new Person('theressa','lehmann',56)

// console.log(person1);
// console.log(person2);


// console.log(person1.fullname());
// console.log(person2.fullname());

// console.log(person1.friends);

// person1.friends.push('zeynep')
// console.log(person1.friends);

// console.log(person2.friends);




// class declaration

class Person {
    constructor(name,surname,age){
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.friends = ['ela', 'zeynep']
    }
    fullname(){
        return this.name+' '+this.surname
    }

}


const person1 = new Person('alex','müller',26)
const person2 = new Person('theressa','lehmann',56)

console.log(person1);
console.log(person2);


console.log(person1.fullname());
console.log(person2.fullname());

console.log(person1.friends);



// class expression

const Person2 =class{
    constructor(name,surname,age){
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.friends = ['ela', 'zeynep']
    }
    fullname(){
        return this.name+' '+this.surname
    }

}

const person3 = new Person('alex','müller',26)
const person4 = new Person('theressa','lehmann',56)

console.log(person3);
console.log(person4);


console.log(person3.fullname());
console.log(person4.fullname());

console.log(person4.friends);
