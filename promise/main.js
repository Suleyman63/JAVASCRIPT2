const promise = new Promise(function(resolve, reject){
    resolve('data')
    resolve('data2')
    reject('error')
    reject('error2')

})

console.log(promise);

// promise in 3 durumu vardir
// 2- pending : (undifened) -- bekleme
// 2- fullfilled -- gerceklestirme
// 3- rejected  -- redetme



const promise1 = new Promise(function(resolve, reject){
    resolve('DATA')
  

})
promise1.then(function(value){
    console.log(value);
})

promise1.then(value => console.log(value));
promise1.catch(reason => console.log(reason));


// genel kullanim
promise1.then(()=> {
    console.log('veriler alindi');
})
.catch(()=> {
    console.log('veriler alinmadi');
})
.finally(()=> {
    console.log('calis köle');
})



// //*******************************************/

const books =[
    {name:'ask', author:'veli'},
    {name:'mahur', author:'kenan'},
    {name:'zalim', author:'can'}
]


const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index);
    })
    return promise1
}


const addNewBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        resolve(books)
    })
}

// addNewBook({name:'savas', author:'mehmet'}).then(() => {
//     console.log('yeni liste');
//     listBooks();
// })
// .catch(()=> {
//     console.log('hata aldik');
// })


/************************************/
const addTwoNumbers = (num1,num2) =>{
    const promise3 = new Promise((resolve, reject) => {
        const sum = num1 +num2;
        (typeof num1 !== 'number' || typeof num2 !== 'number') 
        ? reject('2 sayi girmelisin') : resolve(sum)
    })
return promise3;
}

addTwoNumbers(4,8).then((value) => {
    console.log('toplam: ', value);
})
.catch((reason) => {
    console.log('hata: ', reason);
})

/********************************************/

const el =(par) => document.querySelector(par)


let show1 = new Promise(function(succes, reject){
    setTimeout(function(){
        succes('islem basarili');
    },1000);

});
let show2 = new Promise(function(succes, reject){
    setTimeout(function(){
        reject('islem basarisiz');
    },2000);
});

Promise.race([show1,show2]).then(function succes(par){
    el('#result').innerHTML=par;
}).catch(function reject(par){
    el('#result').innerHTML =par;
});


/***********************************************************/

const veriGetir = new Promise((resolve, reject) => {
    const veriGeldiMi =true;
    if(veriGeldiMi){
        resolve('basarili')
    }else{
        reject('basarisiz')
    }
});

veriGetir
.then((cevap) => console.log('sonuc', cevap))
.catch((hata) => console.log('sonuc', hata));


// /***************** axios ***************/
 const axios = require("axios");



// // function ulkeGetir(){
// //     axios
// //     .get('https://restcountries.eu/rest/v2/all')
// //     .then((response) => console.log(response.data[0]))
// //     .catch((err)=> console.log(err));
// // }

// // ulkeGetir()

async function ulkeGetir(){

    const ulkeListesi = await axios.get("https://restcountries.eu/rest/v2/all");
    console.log(ulkeListesi);
}

ulkeGetir();