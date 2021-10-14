
const oyuncuSkor = document.getElementsByClassName('oyuncu_skor')[0]
const bilgisayarSkor = document.getElementsByClassName('bilgisayar_skor')[0]
const tas = document.getElementById('tas')
const kagit = document.getElementById('kagit')
const makas = document.getElementById('makas')
const oyuncuSecimi = document.getElementById('oyuncu_secimi')
const bilgisayarSecimi = document.getElementById('bilgisayar_secimi')
const mesaj = document.getElementsByClassName('mesaj')[0]
let oyuncu =0;
let bilgisayar=0;


function blgsyrSecim(){
    const secim = ['tas','kagit','makas']
    const rndm = Math.floor(Math.random()*3)

    bilgisayarSecimi.setAttribute('src', `res/${secim[rndm]}.png`)

    return secim[rndm]
}


function eventList(){
    tas.addEventListener('click', function(){
        oyuncuSecimi.setAttribute('src',`res/tas.png`)
        let com = blgsyrSecim()
        return sonuc('tas', com)

    })

    kagit.addEventListener('click', function(){
        oyuncuSecimi.setAttribute('src',`res/kagit.png`)
        let com = blgsyrSecim()
        return sonuc('kagit', com)


    })

    makas.addEventListener('click', function(){
        oyuncuSecimi.setAttribute('src',`res/makas.png`)
        let com = blgsyrSecim()
        sonuc('makas', com)


    })
}
eventList()


function sonuc(oyuncu, bilgisayar){

    switch(oyuncu+bilgisayar){
        case 'tasmakas':
        case 'kagittas':
        case 'makaskagit':
            kazan()
        break;

        case 'taskagit':
        case 'kagitmakas':
        case 'makastas':
            kaybet()
        break;

        case 'tastas':
        case 'kagitkagit':
        case 'makasmakas':
            berabere()
        break;

        default:'ERROR'
        break;
    }
}

function kazan(){
    oyuncu =oyuncu+1;
    mesaj.innerHTML='KAZANDIN'
    oyuncuSkor.innerHTML =oyuncu.toString()

}


function kaybet(){
    bilgisayar =bilgisayar+1;
    mesaj.innerHTML='BILGISAYAR KAZANDI ):'
    bilgisayarSkor.innerHTML =bilgisayar.toString()

}


function berabere(){

    mesaj.innerHTML='BERABERE'
 
}