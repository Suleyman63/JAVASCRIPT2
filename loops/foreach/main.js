(function(){
    function el(cssSelector){
        return document.querySelector(cssSelector);
    };

    function test1(){
        let arr =[1,2,3,4,5,6,7,8,9,10];

        let erg=0;

        arr.forEach((x) => {
            erg += x;
        });
        console.log(erg);


        erg =0;
        let n=arr.length;
        for(let i=0; i<n; i++){
            if(arr[i]){
                erg += arr[i];
            };
        };
        console.log(erg);
        
    }
    test1()
    
/******************************************/

    function test2(){
        let obj ={
            a:1,
            b:2,
            c:3,
            d:4,
            e:5,
            f:6,
            g:7,
            i:8,
            j:9,
            k:10
        };

        let erg =0;
        for(let i in obj){
            erg += obj[i];
        }
        console.log(erg);

        erg=0;
        let keys = Object.keys(obj);
        keys.forEach((prop) => {
            erg += obj[prop];
        })
        console.log(keys);
        console.log(erg);

    }
    test2()

    /******************************************/

    function test3(){
        let arr =[
            [1,2,5,7,8],
            [3,4,11,5,9]

        ];

        let erg =0;
        arr.forEach((value) => {
            console.log(value);

            value.forEach((value) => {
                erg += value
            });
        });
        console.log(erg);

        

        erg =0;
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<arr[i].length; j++){
                erg += arr[i][j];
            };
        };
        console.log(erg);
    };
    test3()

    /******************************************/

    function test4(){
        let obj = {
            a: {a:1,b:2,c:4,d:7,e:9},
            b: {a:8,b:3,c:5,d:6,e:11}
        };

        let erg =0;
        for(let i in obj){
            console.log(i);
            for(let j in obj[i]){
                console.log(obj[i][j]);
                erg += obj[i][j];
            };
        };
        console.log(erg);
    };
    test4()


    /****************************************************/
    let langs = [
        'ali',
        'veli',
        'ceylan',
        'mahmut',
        'kamil',
        'alev'
    ]
    
    langs.forEach(function(par,index){
        ++index;
        el('#result').innerHTML += index+' '+par+'<br>'
    
    })

}());

  

