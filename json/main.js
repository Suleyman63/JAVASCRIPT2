
const el =(par) => document.querySelector(par)
    


// let obj ={"firstname": "zeynep","lastname": "kerme"};

// let Json =JSON.stringify(obj);

// localStorage.setItem("storegeJSON", JSON);

// let txt =localStorage.getItem("storegeJSON");

// let strogeObj = JSON.parse(txt);


// el("#result").innerHTML = strogeObj.firstname+' '+strogeObj.lastname;



/*************** json array kullanimi *********************/
let obj2 =
{
    "firstname": "zeynep",
    "lastname": "kerme",
    'age':15,
    'cars':[
        {'carname':'ford','models':['fiesta','focus','connect']},
        {'carname':'bwmw','models':['320','520','x6']},
        {'carname':'audi','models':['a6','a3','a4']},
    ]
};

for(let i in obj2['cars']){
    result += '<h2>'+obj2['cars'][i]['carname']+'</h2>';

    for(let j in obj2['cars'][i]['models']){
        result += obj2['cars'][i]['models'][j]+'<br>';
    }

}
el('#result2').innerHTML = result;


/******************* JSON-AJAX KULLANIMI *****************/

function run(){
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
           let obj3=JSON.parse(this.responseText);
           el("#result3").innerHTML = 
           obj3["cars"][0]["models"][0]+"<br>"+
           obj3["cars"][0]["models"][1]+"<br>"+
           obj3["cars"][0]["models"][2]+"<br>";
        }

    }
    xmlRequest.open("GET","info.json",true);
    xmlRequest.send();
}