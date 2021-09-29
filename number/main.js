// function sayi(){

//     let x=128;
//     let y='128';

// document.getElementById('result').innerHTML=(x==y);
// //document.getElementById('result').innerHTML=(x===y);
   
// }

// sayi();


/********************************************/
// function abc(){

//     let x=12.65398;
//     let y=new Number(7)
   
// console.log(x.toFixed());
// console.log(x.toPrecision());
// console.log(x.toExponential());

// console.log(y);
// console.log(y.valueOf());

// document.getElementById('result').innerHTML=
// Number(true)+'<br>'+
// Number(false)+'<br>'+
// Number(new Date())+'<br>'+
// Number('7')+'<br>'+
// Number(' 50')+'<br>'+
// parseInt('js')+'<br>'+
// parseInt('3.14')+'<br>'+
// parseInt('day 22')+'<br>'+
// Number('day 12')+'<br>'+
// Number('4 25')+'<br>'+
// parseInt('4 25')+'<br>'+
// parseFloat('4 25')+'<br>'+
// parseFloat('3.14')+'<br>'+
// parseFloat('day 22')+'<br>'+
// parseFloat('4 day')+'<br>';
   
// }

// abc();


/*************************** MATEMATIK **************/

function abc(){

    let x=Math.round(6.5);
    let y=Math.round(8.49999999)

document.getElementById('result').innerHTML=x+'<br>'+y;

console.log(Math.pow(2,4));
console.log(Math.pow(4,3));

console.log(Math.sqrt(9));
console.log(Math.sqrt(100));

console.log(Math.abs(64));
console.log(Math.abs(16));


console.log(Math.ceil(9.3));
console.log(Math.ceil(11.9));

console.log(Math.round(9.2));
console.log(Math.round(9.5));

console.log(Math.floor(9.9));
console.log(Math.floor(9.1));
   

console.log(Math.sin(90*(Math.PI/180)));
console.log(Math.sin(25*(Math.PI/180)));


console.log(Math.cos(0*(Math.PI/180)));
console.log(Math.cos(5*(Math.PI/180)));

console.log(Math.max(7,85,98,-7));
console.log(Math.max(7,8,4,-4));
console.log(Math.max());

console.log(Math.min(7,8,4,-4));
console.log(Math.min(7,28,14,-25));


console.log(Math.floor(Math.random()*10)+1);

}

abc();