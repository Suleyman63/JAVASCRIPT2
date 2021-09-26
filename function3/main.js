function square(num){
    return (num*num);
}
console.log(square(8));


const dev = function(a){
    return (a+a)

}
console.log(dev(9));



const myArr = ['kemal', 7, function() {console.log('array element');}];

myArr[2]();

const myObj = {
    name:'ebru',
    age:9,
    func:function() {console.log('object element');}
};

myObj.func();
console.log(20 + (function(){
    return 10;
})());




const kare = function(v, func){
    console.log(v+func());
}

kare(10, function(){
    return 5;
});



const myFunc = function(m){
    return function toDouble(){
        console.log(m*2);
    }
}
const result = myFunc(6);

result();


const sum = function(){
    console.log(5+12);
}();
