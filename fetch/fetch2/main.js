(function(){
    function el(cssSelecetor){
        return document.querySelector(cssSelecetor)
    }

function loadHTML(){
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
       
    })
}


el('#btn').addEventListener('click',loadHTML)

}())