
let arrr1=["zeppelin","besen","darius","garten"]

console.log(arrr1.sort());


let copy1=["alex","melisa",...arrr1]

console.log(copy1.sort((a,b)=>a.localeCompare(b)));


let arr2=[23,25,36,12,8,-6]
console.log(arr2.sort((a,b)=>a-b));


let copy2=[9,17,-7,...arr2]
console.log(copy2.sort((a,b)=>a-b));


let arr3=[
    {name:"klaus",surname:"müller",age:25},
    {name:"alex",surname:"lehmann",age:45},
    {name:"melissa",surname:"dommas",age:35},
    {name:"sabrina",surname:"schneider",age:15},
]

console.log(arr3.sort());

let copy3=[...arr3]


let deepCopy1=JSON.parse(JSON.stringify(arr3))
console.log(deepCopy1.sort((a,b)=>a.age-b.age));


let deepCopy2=JSON.parse(JSON.stringify(arr3))
console.log(deepCopy2.sort((a,b)=>a.name.localeCompare(b.name)));
console.log(deepCopy2.sort((a,b)=>b.name.localeCompare(a.name)));


let deepCopy3=JSON.parse(JSON.stringify(arr3))
console.log(deepCopy3.sort((a,b)=>a.surname.localeCompare(b.surname)));