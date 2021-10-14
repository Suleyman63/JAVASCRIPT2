(function(){
    function el(){
        return document.querySelector(cssSelector)
    };


    function anders(){
        fetch('test1.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }

    
    async function loadJson(){
        let data1 = await (await fetch('test1.json')).json()
        console.log(data1);

        let data2 = await (await fetch('test2.json')).json()
        console.log(data2);
    }


    loadJson();
    anders();
}())