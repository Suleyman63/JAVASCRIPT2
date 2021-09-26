/****** object literal *******/

const person={
    name:'mehtap',
    surname:'yildiz',
    age:18,
    languages:['turkish', 'english', 'spanish'],
    fullname: function(){
        return this.name +' '+ this.surname
    },
    adress:{
        city: 'adana',
        district:'karatas'
    }
};

// dot notaion

console.log(person.name);


person.job = 'student';
console.log(person);
console.log(person.age);


// Bracket Notaion
console.log(person['name']);
console.log(person['surname']);
console.log(person['fullname']());





const kisi = {
    ad:'mahmut',
    soyad:'kazma',
    yas:25,
    tamisim: function(){
        return this.ad +' '+this.soyad;
    }
}

kisi.adres ={};

console.log(kisi);

kisi.adres.sehir = 'urfa';
kisi.adres.ilce = 'suruc';
console.log(kisi);



/***************** CONSTRUCTOR *****************/

function Eleman(name, surname, age){
    const obj ={};
    obj.name =name;
    obj.surname=surname;
    obj.age=age;
    obj.fullname = function(){
        return obj.name +' '+ obj.surname;
    }
    return obj;
}

const eleman1 = new Eleman('lale', 'mutlu', 40);
console.log(eleman1);


const eleman2 = new Eleman('feride', 'inan', 26);
console.log(eleman2);


/*****************************************/
function Calisan(ad, soyad, yas){
    const obje ={};
    obje.ad =ad;
    obje.soyad=soyad;
    obje.yas=yas;
    obje.fullname = function(){
        return obje.ad +' '+ obje.soyad;
    }
    return obje;
}

const calisan1 = new Calisan('abbas', 'yigit', 35)
const calisan2 = new Calisan('atakan', 'cinar', 25)

console.log(calisan1);
console.log(calisan2);


/************* object constructor ***************/
const per1 = new Object();

per1.name = 'murat';
per1.surname = 'kara';
per1.age = 32;
per1.fullname = function(){
    console.log(this);
    return this.name +' '+this.surname;
}
console.log(per1);
console.log(per1.age);



/************ object.create() ile nesne olusturmak ***********/

const insan={
    name:'mujde',
    surname:'altin',
    yas: 44,
    fullname:function(){
        return this.name +' '+this.surname;
    }

}
console.log(insan);



const akif = Object.create(insan);
akif.name ='bilal';
akif.surname='alim';
akif.yas = 8;

console.log(akif);
console.log(akif.fullname());




/********** object Prototeype **************/
function birey(name,surname,age){
    this.name=name,
    this.surname=surname,
    this.age=age,
    this.fullname=function(){
        this.name +' '+this.surname;
    }
}

console.log(birey);
console.log(birey.name);
console.log(birey.surname);

console.log(birey.toString());

console.log(birey.hasOwnProperty('name'));



const myob={};
console.log(myob);
console.log(myob.toString());


const elif = new birey("temel", "kasap", 8);
console.log(elif);


console.log(elif.toString());
console.log(elif.hasOwnProperty('age'));
console.log(elif.__proto__);


const anil = new birey('anil', 'cekic', 9);
console.log(anil);
anil.job='child';
console.log(anil);


function eleman(name,age){
    this.name=name,
    this.age=age,



eleman.prototype.fullname=function(){
       return this.name +' '+this.surname;
}

eleman.prototype.surname='cekic';

const meral = new eleman('meral', 44);

const mahmut = new eleman('mahmut', 25)

console.log(meral);
}