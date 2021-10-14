const el =(par) => document.querySelector(par);

let ms = Date.parse('01 April 1992')

let d=new Date(ms);

let days = ['pazar', 'pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'c.tesi', 'pazar']


el('#result').innerHTML=d.getDay();
el('#result').innerHTML=d.getHours();
el('#result').innerHTML=d.getFullYear();
el('#result').innerHTML=d.getMilliseconds();
el('#result').innerHTML=d.getMonth();
el('#result').innerHTML=days[3];
el('#result').innerHTML=d;


/********************** time *********************************/
let result2 = document.querySelector('#result2');

        let result3 = document.querySelector('#result3');

        //let times = setInterval(process, 1000);

        let times = setInterval(process,100)

        function process(){
           //result.innerHTML='setTimeout kullanimi'

           //let date=new Date();
           //result.innerHTML=date.toLocaleTimeString();

           
           let data1 = Number(document.getElementById('data1').value);
           let data2= Number(document.getElementById('data2').value);
            let resultValue = data1*data2;
            result2.innerHTML=resultValue;

        }

/*********************** yas hesapla ********************/

let zaman = new Date()

let yil=zaman.getFullYear()
let ay=zaman.getMonth()
let gun=zaman.getDay()

console.log(yil+' '+ay+' '+gun);


let dogum_yil=prompt('lutfen dogum yil gir')


let yas=yil - dogum_yil
console.log(yas);