const person={
    name:'xxxxx',
    surname:'xxxxx',
    age:0,
    fullname:function(){
        return this.name + ' '+this.surname
    }
}

const ali = Object.create(person);
console.log(ali);
console.log(ali.name);

ali.name='ali';
console.log(ali);

ali.age=8;
console.log(ali);


console.log(ali.hasOwnProperty('age'));
console.log(ali.hasOwnProperty('surname'));

console.log('surname' in ali);