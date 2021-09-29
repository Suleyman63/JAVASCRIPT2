(function(){

let StudentPlan =
[
	["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"], 
	["Mathe", "Kunst", "Chemie", "Englisch", "Französisch"], 
	["Mathe", "Kunst", "Biologie", "Englisch", "Französisch"], 
	["Sport", "IT", "Deutsch", "IT", "Deutsch"],
	["Sport", "IT", "Deutsch", "IT", "Deutsch"],
	["Sport", "Sport", "Deutsch", "Sport", "Sport"],
	["Sport", "Sport", "Deutsch", "Sport", "Sport"]
];


    function el(cssSelector){
        return document.querySelector(cssSelector)
    };


    function create(html){
        return document.createElement(html);
 
    };


    function tabella(array){
        let table,tHead,tBody,tr,zelle;

        table=create("table");
        tHead=create('tHead');
        tBody=create('tBody');
        table.appendChild(tHead);
        table.appendChild(tBody);



        

        array.forEach((arr,i) => {
            tr = create('tr');
            if(i===0){
                tHead.appendChild(tr);
            }else{
                tBody.appendChild(tr);
            }
            arr.forEach((text) =>{
                if(i===0){
                        zelle=create('th');
                }else{
                    zelle=create('td')
                }
                zelle.innerHTML =text;
                tr.appendChild(zelle);
            });
            
        });
        return table;

        
    }
    el('#ausgabe').appendChild(tabella(StudentPlan));

}());