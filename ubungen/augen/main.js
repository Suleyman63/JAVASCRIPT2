let bebekler=document.getElementsByClassName('bebek')



document.onmousemove = function(){
    let x=event.clientX*100/window.innerWidth+"%"
    let y=event.clientY*100/window.innerWidth+"%"
    
    
   for(let i =0; i<bebekler.length; i++){
    bebekler[i].style.top=y;
    bebekler[i].style.left=x
    bebekler[i].style.transform="translate(-"+x+", -"+y+")"
   }
}

