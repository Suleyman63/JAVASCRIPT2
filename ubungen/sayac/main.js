let deger = document.getElementById('degeri_al')
let programla = document.getElementById('programla')
let baslat = document.getElementById('baslat')
let durdur = document.getElementById('durdur')

let kutu = document.getElementsByClassName('kutu')[0]
let durum = document.getElementsByClassName('durum')[0]
let saniye = document.getElementsByClassName('deger')[0]


programla.addEventListener('click', () => {
    saniye.innerHTML =deger.value
    durum.classList.remove('gorun')
})


let x;
baslat.addEventListener('click', () => {
  x=  setInterval(gerisay,1000)
    function gerisay(){
        let degeriAl = Number(saniye.textContent)

        if(degeriAl>0){
            degeriAl -= 1
            saniye.innerHTML = degeriAl.toString()
            kutu.classList.toggle('tetik')
        }else{
            clearInterval(x)
            durum.classList.add('gorun')
        }
    }
})


durdur.addEventListener('click', () => {
    clearInterval(x)
})