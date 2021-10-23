const input = document.querySelector('#input')
const btn = document.querySelector('#btn')


let value;


input.addEventListener('input', (e)=>{
    e.preventDefault()
    value=e.target.value
})



btn.addEventListener('click',()=> {

    if(input.value===""){return}
    
    input.value='';
    addToLocalStrorage(value.toUppercase())
})



function addToLocalStrorage(myList){
    let myList;
    if(localStorage.getItem('myList')===null){
    myList=[]

    }else{
        myList = JSON.parse(localStorage.getItem('myList'))
    }
    myList.push(myList)
    localStorage.setItem('myList', JSON.stringify('myList'))
    document.querySelector('ol').innerHTML='';

    myList.forEach((item) => {
        let listdiv = document.createElement('div')
        listdiv.innerHTML = `<li>${item}</li><input id=delete>`
        
    });
}
