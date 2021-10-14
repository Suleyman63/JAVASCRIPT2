let library = [
    {
        title : 'ince memed',
        autor : 'yasar kemal',
        status : true

    },
    {
        title : 'kuyucakli yusuf',
        autor : 'sabahattin ali',
        status : false

    },
    {
        title : 'insan manzaralari',
        autor : 'nazim hikmet',
        status : true

    },
    {
        title : 'sultan',
        autor : 'elif safak',
        status : false

    },
];

for(let i=0; i<library.length; i++){
    let book = library[i].title +' '+library[i].autor

    if(library[i].status){
        console.log(book +'okundu');
    }
    else{
        console.log(book +'okunmadi');
    }
}


/*********************************************************/
let message='';
 
function person(first,last,age,city){
    this.first=first;
    this.last=last;
    this.age=age;
    this.city=city
    this.fullname=function(){
        return this.first +' '+this.last;
    }
}

let people=new person('ali', 'uyar', 28, 'berlin');

for(let i in people){
    message += people[i]+'<br>';
}

document.querySelector('#result').innerHTML=people.fullname();




