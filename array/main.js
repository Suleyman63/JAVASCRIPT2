let liste = ['apple', 'orange', 'banane', 'kiwi', 'kirsche'];

liste.pop()
liste.reverse()
liste.sort()
console.log(liste);



const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push('Birne')
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);
console.log(fruits[1][1]);



const fruits2 = [
    ["Banana", "Orange", "Apple", "Mango"],
    ['Ananas', 'Birne', '', 'Kiwi', 'Kirsche']
];

document.getElementById("demo").innerHTML = fruits2;
console.log(fruits2[0][2]);
console.log(fruits2[1][1]);


const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

console.log(cars);



const fruits3 = ["Banana", "Orange", "Apple", "Mango"];

let fLen = fruits.length;

text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits3[i] + "</li>";
}
text += "</ul>";

document.write(text)


/*************************************************************/
// (function(){

//     function el(cssSelector){
//         return document.querySelector(cssSelector);
//     };

//     let arr = [
//         [1,3,5,7,6,8],
//         [9,5,4,12,8,7]

//     ];
//     console.table(arr);
//     console.log(arr);
//     document.write(arr)
// }())

/**********************************************************/

let x='javascript, java, react';
let y='angular, node, vue'
console.log(x.length);
console.log(x.lastIndexOf('java'));
console.log(x.slice(10,20));
console.log(x.substring(12));

console.log(x.concat(' ',y));

console.log(x.split(',',2));


let liste2 = {'name1':'apple', 'name2':'orange', 'name3': 'banane', 'name4':'kiwi', 'name5':'kirsche'};


for(let i in liste2){
    console.log(i+' ->'+liste2[i]);
}



let liste3 = ['apple','orange','banane','kiwi','kirsche'];

 liste3.forEach(x => {console.log('->',x);
        
}); 


/*******************************/
