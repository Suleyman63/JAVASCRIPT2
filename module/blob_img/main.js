import {db} from "./modules/db.js";


function el(css){return document.querySelector(css)}


async function makeAndStoreBlob(){
    let blob = await (await fetch('img/child.jpeg')).blob()
    //console.log(blob);
    db.updateDB(blob,'myimg')
}


async function showInsertBlob(){

    let obj = await db.readDB()

    let blob = obj.img;

    let src = URL.createObjectURL(blob);
    let img = new Image();
    img.src = src;
    el('#imgs').append(img);

}


function foo(){
    console.log('foo');
}

makeAndStoreBlob()
el('#btn').addEventListener('click',showInsertBlob)
el('#btn').addEventListener('click',foo)

// el('#btn').onclick = showInsertBlob;
// el('#btn').onclick = foo;