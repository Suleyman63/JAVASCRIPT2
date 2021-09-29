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
