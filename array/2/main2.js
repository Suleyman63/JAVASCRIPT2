/******************************** max und min *****************************/
let arr =[1,-5,13486,12,42];

let min = arr[0];
let max = arr[0];

for(let i=0; i<arr.length ; i++){
    if(max < arr[i])
       max = arr[i];

    if(min > arr[i])
       min = arr[i];
}
document.getElementById("min").innerHTML = "min :" + min;
document.getElementById("max").innerHTML = "max :" + max;


/*************************** der zahl 42 finden und index *****************************/

let result42 = arr.find(function(value){
    return value==42;
});
document.getElementById("42").innerHTML = 'Array inhalt der zahl :'+ result42;


let resultIndex = arr.findIndex(function(value){
return value == 42;
});
document.getElementById("index").innerHTML ='der zahl 42 index :'+ resultIndex;

/********************************* wie viel 42 ***********************************/

let num = 42;
let zahl = 0;

for(let i = 0; i < arr.length; i++) {
    if(num == arr[i]) {
        zahl++;
    }
}
document.getElementById('zahl').innerHTML = num + " array inhalt " + zahl +" einmal";


// let arr1 = [];
// for(let i=0; i<1000; i++){
//     let zufall = Math.ceil(Math.random()*100);
//     arr.push(zufall);
//     console.log(arr1);
// }


function lottoPool(){
    let lotto = [];

    for(let i =1; i<50; i++){
        lotto.push(i);
        
    }
    return lotto;
};
console.log(lottoPool());


/*****************************************************/

let a = ['react', 'angular', 'vue', 'node', 'javascript', 'java'];

a.push('sql')

let text ='<ul>';
for(let i=0; i<a.length; i++){
    text+='<li>'+a[i]+'</li>';
}
text+='</ul>';
document.querySelector('#result').innerHTML=text;


function Add(){
    a.push('php')
    document.querySelector('#result').innerHTML=a;
}


function Del(){
    a.pop()
    document.querySelector('#result').innerHTML=a;
}

/*****************************************************/

let b = ['react', 'angular', 'vue', 'node', 'javascript', 'java'];

document.querySelector('#result2').innerHTML=b instanceof Array;


b.unshift('mysql')
b.shift()
b.splice(1,0,'C#')
b.splice(0,2)


let c = ['ali', 'veli', 'murat', 'canan', 'mahmut', 'alev'];

document.querySelector('#result3').innerHTML=c.slice(3,5);

document.querySelector('#result3').innerHTML=c.reverse();

document.querySelector('#result3').innerHTML=c.sort();

/*********************** objet ve array siralama *********************/

let numbers = [15,6,48,25,30,10];
    
function srt(){
    numbers.sort(function(x,y){
        return x-y;

    });   
}
el('#result4', numbers);


function findMax(take){
    return Math.max.apply(null,take)
}
el('#result5', findMax(numbers));


function findMin(take){
    return Math.min.apply(null,take)
}
el('#result6', findMin(numbers));


/************************************/

let pc = [
    {name:'asus', ram:'16gb', year:'2016'},
    {name:'sony', ram:'8gb', year:'2018'},
    {name:'mac', ram:'6gb', year:'2019'},
    {name:'hp', ram:'4gb', year:'2017'}
]

el('#result7', 
pc[0].name+' '+pc[0].ram+' '+pc[0].year+'<br>'+
pc[1].name+' '+pc[1].ram+' '+pc[1].year+'<br>'+
pc[2].name+' '+pc[2].ram+' '+pc[2].year+'<br>'+
pc[3].name+' '+pc[3].ram+' '+pc[3].year+'<br>'
);



function el(par,par2){
    document.querySelector(par).innerHTML=par2;

}