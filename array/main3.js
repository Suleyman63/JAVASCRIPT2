let arr5 = [10,20,30,[1,2,3]];

        let x = arr5[0] + arr5[3][1];

        console.log(x);

        console.log(Math.min(0, 150, 30, 20, -8, -200));
        console.log(Math.max(0, 150, 30, 20, -8, -200));

        console.log(Math.floor(Math.random() * 100));


        let obj = {
            p1:'ali',
            p2:'veli',
            p3:'can'
        }
        console.log(obj);


        let obj2 = {
            a:10,
            b:20,
            c:[25,12,33]
        }
        console.log(obj2);

        obj2.d =44;
        console.log(obj2);


        let text = '{ "employees" : [' +
        '{ "firstName":"John" , "lastName":"Doe" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj3 = JSON.parse(text);

document.getElementById("demo").innerHTML =
obj3.employees[1].firstName + " " + obj3.employees[1].lastName;



const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById('person').innerHTML=person.firstName +' '+person.lastName;



function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo2").innerHTML = toCelsius(77);

/************************************************/

function verify(x=8,y=9){
   if(x==y){
       return true;
   }else{
       return false;
   }

}
el('#result', verify())



function el(par,par2){
    document.querySelector(par).innerHTML=par2;

}

/*************** includes() - toLowerCase() *********/

let isim = 'veli';

console.log(isim.includes('ve'));
console.log(isim.includes('l'));



const yeniIsim = isim.toLowerCase();
console.log(yeniIsim);

const yeniIsim2 = isim.toUpperCase();
console.log(yeniIsim2);


const product = [
  {id:1, name:'Computer', preise: 500},
  {id:2, name:'tablet', preise: 1000},
  {id:3, name:'phone', preise: 1500},
  {id:4, name:'laptop', preise: 2000},
];

console.log(product.filter((pro) => pro.name.toLowerCase().includes('computer')));
