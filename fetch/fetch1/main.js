function el(css){
    return document.querySelector(css)}


function create(html){
    return document.createElement(html)
}


/******************* fetch *****************************/
fetch('data.json')
.then((response)=> {return response.json()})
.then((data)=>{
    let temp = tabellaGen(data)
    el('#tabella').appendChild(temp)
})




function tabellaGen(array){
    let table,tBody,td,tr;
    let col;

        table =create('table')
        tBody =create('tbody')
        table.appendChild(tBody)
  
   

    array.forEach(element => {
        tr=create('tr')
        element.forEach((content) => {
            col = 255-content
            td=create('td');
            td.style.background = `rgb(${col},100,100)`
            td.innerHTML=content;
            tr.appendChild(td)
        })
        tBody.appendChild(tr)
    });

    return table;

}


// fake dimensionale array
function makeArr(){
    let outer = [];
    let inner = [];

    for(let i=1; i<=250; i++){
        let n=Math.floor(Math.random()*256);
        inner.push(n);
        if(i%25===0){
            outer.push(inner);
            inner =[]
        }
    }
    console.log(outer);
 

}
makeArr()



