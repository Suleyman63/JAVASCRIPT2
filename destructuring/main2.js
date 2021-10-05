let result = document.querySelector('#result');
let langs = [
    'java',
    'pyhton',
    'react',
    'sql',
    'php',
    'css3',
    'node'
];

let [l1,l2,l3,l4,l5,l6,l7] = langs;

result.innerHTML=
l1+'<br>'+l2+'<br>'+l3+'<br>'+l4+'<br>'+l5+'<br>'+l6+'<br>'+l7;



const kull = {name:'alex', age:25, city:'berlin', job:'tester'};

const{name, age, ...geriKalan} =kull;
console.log(kull);




const num = [5,8,9,56,45];

const[bir,iki,uc,dort,bes] = num;

console.log(bir,iki,uc,dort,bes);


const[x,...kalan] = num;

console.log(x);
console.log(kalan);





let kisi = {isim:'mehmet', surname:'mulk', yas:35};

kisi = {...kisi, sehir:'ankara'};

console.log(kisi);




INITIAL_STATE={
    yukleniyor: false,
    hataMesaji:'',
    arabalar:['audi', 'bmw', 'mercedes']

};



/*********** react icin spread **************/

// const reducer = (state = INITIAL_STATE, action) => {
//     switch(action.type){
//         case 'ARABA_EKLE':
//             return {...state, arabalar: [...state.arabalar, 'tofas']}
//             default: return state;
//     }

// }


// state.arabalar(...arabalar,'Tofas');


/****************************************/
function topla(sayi1, sayi2, sayi3){
    return sayi1+sayi2+sayi3;
}

const sayilar1 = [5,8,6];

console.log(topla(...sayilar1));

const sayilar2 = [8,5,7];

const birlestir = [...sayilar1, sayilar2]
console.log(birlestir);

/******************************************/
const person = {isim:'fatih', soyisim:'turgut', yas:25};
const adres = {sehir:'berlin', ilce:'treptow'}

const birlestirObj = {...person,...adres};
console.log(birlestirObj);
