

// function renk(){
//     document.getElementById("kutu1").style.backgroundColor="red";
// }

// function renkyok(){
//     document.getElementById("kutu1").style.backgroundColor="green";
// }



/////////////////////////////////////////////////////////////////////////////
// let p1 = 5;

// let p2 = 7;

// document.getElementById("btn").addEventListener("click", function() {

//     myFunction(p1, p2);
// });

// function myFunction(a, b) {

//     let sonuc = a * b;

//     document.getElementById("text").innerHTML = sonuc;
// }


/////////////////////////////////////////////////////////////////////

// var kutu2= document.getElementById("kutu2");
// var kutu3= document.getElementById("kutu3");
// var kutu4= document.getElementById("kutu4");


// kutu2.addEventListener("click",function(e){ 
// alert("kutu 2 çalıştı"); 
// },false);
// kutu3.addEventListener("click",function(e){ 
// alert("kutu 3 çalıştı"); 
// },false);
// kutu4.addEventListener("click",function(e){ 
// e.stopPropagation() ; 
// alert("kutu 4 çalıştı");
// },false);

/////////////////////////////////////////////////////////////////////


// function el(cssSelector){
//     return document.querySelector(cssSelector);

// };


// function rec(){
//     let zahl = el('#inp').value;
//     let erg = zahl * 5;

//     el('#liste').innerHTML =erg;

    
// };
// el('#ekle').addEventListener('click', rec)


/////////////////////////////////////////////////////////////////////

// document.querySelector("#ekle").onclick = function () {

//   const liste = document.querySelector("#liste");

//   const satir = document.querySelector("#inp").value;

//   const yeniLi = document.createElement("li");

//   const textNode = document.createTextNode(satir);

//   yeniLi.appendChild(textNode);

//   liste.appendChild(yeniLi);
// };


// document.querySelector("#sil").onclick = function () {
//   const liste = document.querySelector("#liste");
//   liste.removeChild(liste.lastElementChild);
// };
	
 


// var Kisi = {
//     ad:"Ahmet",
//     soyad:"Gezer",
//     hobiler: undefined ,
//     [Symbol("id")]: 75, 
//     adSoyad() { 
//         return this.ad+ this.soyad;
//     }
// };
  
// alert( JSON.stringify(Kisi) ); 


////////////////////// sayfa yonledirme /////////////////////////
// function yonlendir(){ 
//     window.location.href="https://www.google.com";
//   }
//   yonlendir();


/////////////////////////////////////////////////////7

// (function(){
//     function el(){
//         return document.querySelector(cssSelector);
//     };
// }());