// object kullanimi

let prop1 = 'name';

let myobj ={}
myobj[prop1] ='akif';
console.log(myobj);


// yeni kullanim
let prop2 ='name';

let myobj2 ={
    [prop2]:'asim'
};
console.log(myobj2);


const person ={
    name:'john',
    surname:'doe',
    age:40,
    fullname:function(){
        return this.name +' '+this.surname
    }
}

// yeni kullanim
const person2 ={
    name:'john',
    surname:'doe',
    age:40,
    fullname(){
        return this.name +' '+this.surname
    }
}

console.log(person2.fullname());



let myvar =person.name;
console.log(myvar);

let myvar1 =person.age;
console.log(myvar1);


let {name:myad, age:myyas}=person;
console.log(myad);
console.log(myyas);


let {name, age}=person;
console.log(name);
console.log(age);




const movies= [
    {
      "name": "The Matrix 3",
      "rating": "8.1",
      "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
      "id": 7
    },
    {
      "name": "The Matrix Reloaded",
      "rating": "6.9",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
      "overview": "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition.",
      "id": 8
    },
    {
      "name": "Saw 3D",
      "rating": "7.5",
      "overview": "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
      "id": 11
    },
    {
      "name": "Blitz 007",
      "rating": "11",
      "overview": "A tough, renegade cop with a gay sidekick is dispatched to take down a serial killer who has been targeting police officers. AÇIKLAMA AÇIKLAMA",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
      "id": 12
    },
    {
      "name": "Hostage",
      "rating": "6.3",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
      "overview": "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob.",
      "id": 13
    }
  ]

  for(const{name, rating, id} of movies){
      console.log(name+ ' '+rating+' '+id);
  }


  /*********** spread operator ***********/

  const kisi ={
    name:'alex',
    surname:'muller',
    age:30,
    fullname(){
        return this.name +' '+this.surname
    }
}

let kisi2 ={...kisi};
console.log(kisi2);

myobj2 = {name:'mehmet', age:9};
myobj3 ={job:'student', gender:'female'};

const mehmet = {...myobj2, ...myobj3};
console.log(mehmet);



/******************* REST OPERATOR **************/
const insan ={
    name:'alex',
    surname:'muller',
    age:30,
    fullname(){
        return this.name +' '+this.surname
    }
}

const {surname, ...rest}=insan;

console.log(surname);
console.log(rest);



/******************** String ***********************/

const birey ={
    name:'alex',
    surname:'muller',
    age:30,
    fullname(){
        return this.name +' '+this.surname
    }
}

console.log(Object.keys(birey));
console.log(Object.values(birey));