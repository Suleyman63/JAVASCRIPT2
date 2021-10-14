function tamamlanmis(){
let list = document.getElementsByTagName('li')
for(let i=0; i<list.length; i++){
    list[i].addEventListener('click',function(){
        this.classList.toggle('tamamlanmis')
        })
    }
}
tamamlanmis()


function silinen(){
let sil = document.getElementsByTagName('span')
for(let i=0; i<sil.length; i++){
    sil[i].addEventListener('click',function(){
        let silinicek=this.parentElement;
        silinicek.remove()
        })
    }
}
silinen()



let görev=document.getElementsByTagName('input')[0]
görev.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        let yeniLi=document.createElement('li')
        yeniLi.innerHTML=görev.value;

        let yeniSpan=document.createElement('span')
        let yeniI=document.createElement('i')
        yeniI.setAttribute('class', 'fa fa-window-close')

        yeniSpan.insertBefore(yeniI, yeniSpan.firstChild)
        yeniLi.insertBefore(yeniSpan, yeniLi.firstChild)

        let görevler=document.getElementsByTagName('ul')[0]
        görevler.insertBefore(yeniLi,görevler.lastChild)

        silinen()
        tamamlanmis()
        görev.value=""

    }
})
