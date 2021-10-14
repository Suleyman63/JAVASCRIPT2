(function(){
    function el(css){
        return document.querySelector(css)
    }

    function create(html){
        return document.createElement(html)
    }



    function parseCSV(data, trennzeichen){
        data =data.replace(/"/g,"");

        let dataTable = [];

        let alleZeilen = data.split(/\n/);

        let tempZeile;

        for(let i=0; i<alleZeilen.length; i++){
            tempZeile = alleZeilen[i].split(trennzeichen);

            if(tempZeile[tempZeile.length-1]==""){
                tempZeile.pop();
            }
            if(tempZeile.length > 1){
                dataTable.push(tempZeile);
            }
        }
        return dataTable;
    }



// csv den datalari aldik
function loadCSV(url){
    fetch(url)
    .then(res => res.text())
    .then((data)=> {
        let arr = parseCSV(data,';')
        
        el('#tabelle').appendChild(tabGenerator(arr))
    })
}


// html table generator
function tabGenerator(array){
    el('#tabelle').innerHTML='';
    let table,tHead,tBody,tr,zelle;
    table=create('table')
    tHead=create('tHead')
    tBody=create('tBody')


    table.appendChild(tHead);
    table.appendChild(tBody)

    array.forEach((row,index) => {

        setTimeout(()=>{

            tr=create('tr');
            row.forEach((text)=>{
                if(index===0){
                    zelle=create('th')
                }else{
                    zelle=create('td')
                }
                zelle.innerHTML=text;
                tr.appendChild(zelle)
    
            });
    
            if(index===0){
                tHead.appendChild(tr)
            }else{
                tBody.appendChild(tr)
            }

        },250)
        // tr=create('tr');
        // row.forEach((text)=>{
        //     if(index===0){
        //         zelle=create('th')
        //     }else{
        //         zelle=create('td')
        //     }
        //     zelle.innerHTML=text;
        //     tr.appendChild(zelle)

        // });

        // if(index===0){
        //     tHead.appendChild(tr)
        // }else{
        //     tBody.appendChild(tr)
        // }
    });

    return table
}

el('#tableselect').addEventListener('change',function(){

    if(this.value === '0'){
        return;
    }

    let url = 'data/' + this.value;
    loadCSV(url)
})


}())