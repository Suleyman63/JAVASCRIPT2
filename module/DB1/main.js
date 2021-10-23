import {get, set} from 'https://cdn.jsdelivr.net/npm/idb-keyval@6/+esm'


function el(cssSelector){
    return document.querySelector(cssSelector)

}


function setValue(key,value){
    return set(key, value)
}



function getValue(key){
    return get(key)  // promise
}



function writeDB(){

    let content = el('#eingabe').value || 'NIX!';
    setValue('test', content)
};


// 1. yontem promise
// function readDB(){
//     getValue('test').then((val) => {
//         el('#ausgabe').innerHTML=val
//     })
// }

// 2.yontem async await
async function readDB1(){
  let data = await getValue('test');
  el('#ausgabe').innerHTML = data
}


el('#speichern').addEventListener('click', writeDB);
el('#lesen').addEventListener('click', readDB1)