

let btn = document.getElementsByTagName('button')
let input=document.getElementsByClassName('input')[0]
let hesapla=document.getElementById('hesapla')
let temizle = document.getElementById('temizle')

for(let i=0; i<17; i++){

    if(i !=0 && i !=17 && i !=1){
    btn[i].addEventListener('click', yazdir)
}
}

function yazdir(){
    input.value=input.value + this.value;
}


hesapla.addEventListener('click', hesap)
function hesap(){
    input.value = eval(input.value);
}


temizle.addEventListener('click', temiz)
function temiz(){
    input.value='';
}