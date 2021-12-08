/***************** for loop ************************/
let cars = ['toyota', 'auidi', 'bmw', 'opel']

for (let i = 0; i<cars.length; i++) {
    console.log(cars[i]);
    document.getElementById('demo').innerHTML =cars;
  }




 let zahlen = [4,5,7,8,9,12,45,78,65]

 let sum=0;

 for(let i=0; i<zahlen.length; i++){
     sum += zahlen[i]
    console.log(zahlen[i]);
 }
 console.log(sum)
 




let num=0;
for(let i=0; i<20; i++){
    num=i;
    console.log(i)
}



/************ for in ******************/
 const person = {fname:"John", lname:"Doe", age:25};

for (let x in person) {
    console.log(person[x]);
  
}


const numbers = [45, 4, 9, 16, 25];

for(let a in numbers){
    console.log(numbers[a]);
}


/***************************************/
let zahlen2 = [4,5,7,8,9,12,45,78,65,88,99,101];

function arraySum(array){
    let sum = 0;
    let n = array.length;

    for(let i =0; i<n; i++){
        sum += array[i];
    };

    return sum;
}

console.log(arraySum(zahlen2))


let text='',t=1;

for(let i=1; i<14; i++){
    if(i<=7){
        for(x=1; x<=i; x++){
        text += x +' ';
    }   
    }else if(i>7){
        for(let x=1; x<(i-t); x++){
        text += x +' ';
    }
    t += 2;
}
text += '<br>'
}
document.querySelector('#result').innerHTML=text;