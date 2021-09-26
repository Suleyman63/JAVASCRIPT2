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
(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector);
    };

    let arr = [
        [1,3,5,7,6,8],
        [9,5,4,12,8,7]

    ];
    console.table(arr);
    console.log(arr);
    document.write(arr)
}())

/**********************************************************/


