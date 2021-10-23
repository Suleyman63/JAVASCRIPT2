
/************** OBJECT  ***************/
const person ={
    name :'ali',
    surname:'kar',
    age:25,
    languages:['Türkish', 'English', 'Spanish'],
    fullname:function(){
        return this.name +' '+this.surname
    },
    adress:{
        city:'Adana',
        district:'Kozan'
    }
}

// object literal ile nesneye ulasma 
console.log(person);



// dot notaion ile nesneye ulsama
console.log(person.name);
console.log(person.age);
console.log(person.adress);


// bracket notaion ile nesneye ulasma
console.log(person['fullname']());

console.log(person['age']);


// ojbecte yeni özellik ekliyoruz

person.note ={}

console.log(person);

person.note=90;

console.log(person.note);




/**************** CONSTRUCTOR *********************/

function Student(firstname, surname, age){
         const obj ={}

         obj.firstname = firstname;
         obj.surname = surname;
         obj.age = age;
         obj.fullname =function(){
             return this.firstname+' '+this.surname+' '+this.age
         }

         return obj;
    
}

const student1 = new Student('kemal','alaz',25)
console.log(student1);

const student2 = new Student('alex','müller',29)
console.log(student2);




/************** object constructor *************/

const insan = new Object()

insan.name='murat'
insan.surname='dost'
insan.age =26
insan.fullname = function(){
    return this.name+' '+this.surname
}

console.log(insan);
console.log(insan.fullname());



/************** object create *************/
const isci = {
    name:'fatih',
    surname:'ince',
    age:45,
    fullname:function(){
        return this.name+' '+this.surname
    }
}

console.log(isci);

const isci1 = Object.create(isci)
isci1.name = 'asim';
isci1.surname='mert'
isci1.age=36

console.log(isci1);
console.log(isci1.fullname());



