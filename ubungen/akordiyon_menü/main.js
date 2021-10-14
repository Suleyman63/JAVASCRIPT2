let btn = document.getElementsByClassName('akordiyon')
let ok = document.getElementsByClassName('fa-arrow-circle-down')


for(let i=0; i<btn.length; i++){
   
    btn[i].onclick = function(){
        let panel=this.nextElementSibling;
        this.lastElementChild.classList.toggle('fa-arrow-circle-up')
        console.log(panel);
        if(panel.style.maxHeight){
            panel.style.maxHeight=null
        }else{
            panel.style.maxHeight=panel.scrollHeight+'px'
        }
    }
}