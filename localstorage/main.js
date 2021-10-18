(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector)

    }


    let key = "test";
    let index =1;

    function kaydet(){
        let data = el('#eingabe').value;

        //let data = {a:1,b:2,c:[2,5,8]};

        //let temp = JSON.stringify(data)

        key = key + index;
        index++;
        localStorage.setItem(key,data)
       

    }



    function listele(){

        el('#ausgabe').innerHTML='';

        let data = localStorage.getItem(key)

        if(!data){
            el('#ausgabe').innerHTML='data bos'
            return;
        }

        //let temp = JSON.parse(data)
        console.log(temp);
        el('#ausgabe').innerHTML=data

    }


    function sil(){
        localStorage.removeItem(key)
    }


    el('#kaydet').addEventListener('click', kaydet)
    el('#listele').addEventListener('click', listele)
    el('#sil').addEventListener('click', sil)


}())