(function(){
    function el(cssSelecetor){
        return document.querySelector(cssSelecetor)
    }

function loadHTML(){
    fetch('test.html')
    .then(response => 
        response.text())
    .then(data => {
        console.log(data);
        el('#ausgabe1').innerHTML=data;
    })
    .catch((error) => {
        console.log(error);
    })
}


function loadText(){
    fetch('test.txt')
    .then(response => response.text())
    .then(data =>{
        console.log(data);
        el('#ausgabe2').innerHTML=data;
    })
    .catch((error) => {console.log(error);})
}


function loadAjax(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload=function(){
      
    el("#ausgabe3").innerHTML = this.responseText
       
    }
    xhttp.open("GET","ajax.txt",true);
    xhttp.send();

    }




el('#btn1').addEventListener('click',loadHTML)
el('#btn2').addEventListener('click',loadText)
el('#btn3').addEventListener('click',loadAjax)


}())