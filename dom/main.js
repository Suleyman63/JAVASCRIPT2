let i =0;
let images =['https://images.unsplash.com/photo-1631799154498-5f36aa7cc127?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
'https://images.unsplash.com/photo-1631539498508-c0fdf0f6b171?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
'https://images.unsplash.com/photo-1631750005736-88ef98d34643?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
'https://images.unsplash.com/photo-1631789280074-43455a024705?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
];

let duration = 2000;

function slideImg(){
document.slide.src = images[i];

if (i<images.length-1){
    i++;
}else{
    i = 0;
}

setTimeout('slideImg()', duration);

}

window.onload = slideImg;



/************************************************/
(function(){
    function el(cssSelector){
        return document.querySelector(cssSelector);
    };

    function group(cssSelector){
        return document.querySelectorAll(cssSelector);
    };

    //console.log(el('#container2 .blau').className = 'fett');

    let pGroup = group('#container3 p');
    console.log(pGroup);

    let n = pGroup.length;
    for(let i=0; i<n; i++){
        pGroup[i].className = 'fett';
    }

/*******************************/
let arr = [1,2,3,4,5,6,7,8,9,10];
let x=arr.length;

for(let i=0; i<x; i++){
    arr[i] =arr[i]*2;
}

console.log(arr);


let arr1 = [1,2,3,4,5];
y = arr1.length;
for(let i=0; i<y; i++){
    arr1[i]=arr1[i]*2;

}
console.log(arr1);



let pGroup2 =group('#container2 p');

pGroup2.forEach((value,index,array)=> {
    value.className = 'fett';
})
    
}());



