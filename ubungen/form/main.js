/*Seçim İşlemleri*/
let genislik = document.getElementById("genislik");
let yukseklik = document.getElementById("yukseklik");
let arka_renk = document.getElementById("arka_renk");
let kalinlik = document.getElementById("kalinlik");
let tip = document.getElementById("tip");
let cerceve_renk = document.getElementById("cerceve_renk");
let dis_bosluk = document.getElementById("dis_bosluk");
let ic_bosluk = document.getElementById("ic_bosluk");
let dondur = document.querySelector("#rotate");
let olustur = document.querySelector("#olustur");
let sag_taraf = document.querySelector(".sag");


olustur.addEventListener("click", div_olustur);

function div_olustur() {
//   sag_taraf.style.width = genislik.value + "px";
//   sag_taraf.style.height = yukseklik.value + "px";
//   sag_taraf.style.backgroundColor = arka_renk.value;
//   sag_taraf.style.borderWidth = kalinlik.value;
//   sag_taraf.style.borderStyle = tip.value;
//   sag_taraf.style.borderColor = cerceve_renk.value;
//   sag_taraf.style.margin = dis_bosluk.value + "px";
//   sag_taraf.style.padding = ic_bosluk.value + "px";
//   sag_taraf.style.transform = "rotate(" + dondur.value + "deg)";



  /* Template Literals */

  sag_taraf.style.cssText = 
  `width:${genislik.value}px;
  height:${yukseklik.value}px;
  background-color:${arka_renk.value};
  border-width:${kalinlik.value};
  border-style:${tip.value};
  border-color:${cerceve_renk.value};
  margin:${dis_bosluk.value}px;
  padding:${ic_bosluk.value}px;
  transform:rotate(${dondur.value}deg);`;

}
