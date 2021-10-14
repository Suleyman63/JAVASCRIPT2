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
const o1 = new Kisi('fatih','kilic',20);
const o2 = new Kisi('murat','keriz',30);

console.log(o2);
console.log(o1);
console.log(o1.fullname());
console.log(o2.fullname());

o1.friends.push('mikail')
console.log(o1.friends);

/***************************************************/
 /*
        let player1 ={
            name: 'ahmet',
            surname: 'kara',
            age: 33
        }
        console.log(player1);

        let player2 ={
            name: 'cemil',
            surname: 'cin',
            age: 25
        }
        console.log(player2);
        */

        function Player(name, surname, age){
            this.name = name;
            this.surname = surname;
            this.age = age;
            
        }

       // let player1 = new Player('ali', 'inan',34);
        //let player2 = new Player('cenk', 'tatli',24);
        //let player3 = new Player('gokhan', 'unal',28);

        // console.log(player1);
        // console.log(player2);
        // console.log(player3);

        let Players=[
        new Player('ali', 'inan',34),
        new Player('cenk', 'tatli',24),
        new Player('gokhan', 'unal',28)

        ];
         console.log(Players);
         console.log(Players[2]);
         console.log(Players[1].surname);