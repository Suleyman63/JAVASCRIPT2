// *********** VAR-LET-CONST - HOISTING ***************//

let age = 40;
console.log(age);

age=42;
console.log(age);

const name = 'ali';
console.log(name);



let name2 = 'murat';
console.log(name2);

name2 = 'elif';
console.log(name2);


const myArr = [1,5,8];
myArr.pop();

console.log(myArr);

const student = {
    name:'fatih',
    lastname: 'ince',
    age:15
}


console.log(student);
student.name='mehmet';
console.log(student);



var x =1;
console.log(x);

if(x===1){
    var x =10;
    console.log(x);
}
console.log(x);



let y=1;
console.log(y);

if(y===1){
    let y=20;
    console.log(y);
}
console.log(y);


let a=10;
console.log(a);




var b;
console.log(b);
