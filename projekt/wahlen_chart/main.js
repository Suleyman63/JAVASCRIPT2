(function() {
     
    function el(cssSelector){
        return document.querySelector(cssSelector)

    }
    
    let myChart;

    // verileri json dan cektik
   async function loadJson(){

        let data = await(await fetch('wahl.json')).json()

    //     let parteien=[]
    //     let prozente=[]
    //     let stimmen=[]
    //     let backColor=['red','yellow','green','gold','grey']
        
        
    //     for(let i in data){

    //         if(i !=="0"){
    //             parteien.push(data[i][0])
    //             prozente.push(data[i][1])
    //             stimmen.push(data[i][2])
            
    //     }
    // }
    // console.log(parteien);
    // console.log(prozente);
    // console.log(stimmen);


    // buton olmadan yapmak istersek
    //drawChart(parteien,prozente,backColor,'prozent-Wahl')

     let daten=filter(data)
    el('#prozent').addEventListener('click',()=>{
    drawChart(
        daten.parteien,
        daten.prozente,
        daten.backColor,
        'prozent-Wahl',
        'bar')
   })

   el('#stimmen').addEventListener('click',()=>{
    drawChart(
        daten.parteien,
        daten.stimmen,
        daten.backColor,
        'prozent-Wahl',
        'doughnut')
   }
   
   )
}

  

   function filter(obj){
       let objBack = {}
        let parteien=[]
        let prozente=[]
        let stimmen=[]
        let backColor=['red','yellow','green','blue','grey']
    
    
    for(let i in obj){

        if(i !=="0"){
            parteien.push(obj[i][0])
            prozente.push(obj[i][1])
            stimmen.push(obj[i][2])
        
    }
}
        objBack.parteien=parteien;
        objBack.prozente=prozente;
        objBack.stimmen=stimmen;
        objBack.backColor=backColor;
        return objBack;

   }



    function drawChart(labels,data,backColor,label,type){

        let ctx = el('#canvas').getContext('2d')

        if(myChart){myChart.destroy()}
            myChart = new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: backColor,
                    //borderColor: [],
                    borderWidth: 5
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                }
            }
        }
    });
        }

        loadJson()

}())