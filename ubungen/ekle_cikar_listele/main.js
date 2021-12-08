const list = ['anakart','ram','ekran karti','mouse']

let degisim = document.getElementsByClassName('degisim')[0]

let input1=document.getElementById('input1')
let ekle1=document.getElementById('ekle1')
let kaldir1=document.getElementById('kaldir1')

let input2=document.getElementById('input2')
let ekle2=document.getElementById('ekle2')
let kaldir2=document.getElementById('kaldir2')

list.forEach((element,index) => {
    degisim.innerHTML +=
    `<div class="alert alert-danger role="alert>${index} ${element}</div>`

})

// ekle - push
ekle1.addEventListener('click', function(){
    list.push(input1.value)
  
    degisim.innerHTML='';

    list.forEach((element,index) => {
        degisim.innerHTML +=
        `<div class="alert alert-danger role="alert>${index} ${element}</div>`
    
    })


    // kaldir - pop
    kaldir1.addEventListener('click', function(){
        list.pop()

        degisim.innerHTML='';

        list.forEach((element,index) => {
            degisim.innerHTML +=
            `<div class="alert alert-danger role="alert>${index} ${element}</div>`
        
        })
    })
    
})

/************************************************* */
// ekle2 - unshift
ekle2.addEventListener('click', function(){
    list.unshift(input2.value)
  
    degisim.innerHTML='';

    list.forEach((element,index) => {
        degisim.innerHTML +=
        `<div class="alert alert-danger role="alert>${index} ${element}</div>`
    
    })
})

// kaldir2 - shift
kaldir2.addEventListener('click', function(){
    list.shift()

    degisim.innerHTML='';

    list.forEach((element,index) => {
        degisim.innerHTML +=
        `<div class="alert alert-danger role="alert>${index} ${element}</div>`
    
    })
})

/************* bölüm 2  *******************/

const veri = ['mehmet', 'ahmet','veli','ayse','murat']

let sort=document.getElementById('sort')
let concat = document.getElementById('concat')
let slice = document.getElementById('slice')



// sort
sort.addEventListener('click', function(){

    degisim.innerHTML='';

veri.sort().forEach((element) => {
    degisim.innerHTML += 
    `<div class="alert alert-danger role="alert>${element}</div>`
    
})

})


// slice
slice.addEventListener('click', function(){

    degisim.innerHTML='';

veri.slice(1,3).forEach((element) => {
    degisim.innerHTML += 
    `<div class="alert alert-danger role="alert>${element}</div>`
    
})

})


// concat
concat.addEventListener('click', function(){

    degisim.innerHTML='';

veri.concat(list).forEach((element) => {
    degisim.innerHTML += 
    `<div class="alert alert-danger role="alert>${element}</div>`
    
    })

})