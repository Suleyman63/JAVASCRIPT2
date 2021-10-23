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

/**************************************************/

let car={
    name:"nissan",
    model:"400a",
    color:"black",
    start:function(){
        return this.name+' '+this.model+' '+this.color+' '+'calisti';
    },
    drive:function(){
        return this.name+' '+this.model+' '+this.color+' '+'kullaniliyor';
    },
    brake:function(){
        return this.name+' '+this.model+' '+this.color+' '+'frene basildi';
    },
    stop:function(){
        return this.name+' '+this.model+' '+this.color+' '+'araba durdu';
    },
};


for(let i in car){
    document.querySelector('#result').innerHTML=
    car.start()+'<br>'+
    car.brake()+'<br>'+
    car.stop();
}