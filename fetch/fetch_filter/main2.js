(function(){
    function el(css){
        return document.querySelector(css)
    }


    async function loadJson(url){
        let data = await (await fetch(url)).json();
        return data;
    };

    function loadAllJson(){
        let url1 ='data/charlottenburg.min.json';
        let url2 ='data/friedrichshain_kreuzberg.min.json';
        let url3 ='data/marzahn_hellerdorf.min.json';

        Promise.all(
            [
                loadJson(url1),
                loadJson(url2),
                loadJson(url3)
            ]
        )
        .then((data)=> {
            console.log(data);
        })
   

    }


    
    loadAllJson()

}())