(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector);
    };


    let klonSamler = [];

    let proto={
        a:10,
        b:20,
        add:function(n){return (this.a +' '+this.b) * n},
        init:function(){
            this.a = Math.ceil(Math.random() * 100) + 50;
            this.b = Math.ceil(Math.random() * 100) + 50;
            klonSamler.push(this)
        }
        
    };


    function klonFabrik(){
        for(let i=0; i<100; i++){
        let klon = Object.create(proto);
        klon.init();
        };
    }
    klonFabrik();

   
   
console.log(klonSamler);
   


}());