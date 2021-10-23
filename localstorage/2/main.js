const inp = document.querySelector('#inp')
const ausgabe = document.querySelector('#ausgabe')
const btn = document.querySelector('#btn')


const str = localStorage.getItem('textInput')

if(inp){
    ausgabe.innerHTML=str
}


inp.addEventListener('input', (e) =>{
    ausgabe.innerHTML = e.target.value
})


const saveToLocalStorage = () => {
    localStorage.setItem('textInput', ausgabe.innerHTML)

}


btn.addEventListener('click', saveToLocalStorage)
