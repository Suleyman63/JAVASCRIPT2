(function(){
    
    function el (css){
        return document.querySelector(css);
    };


    function uhrZeit(){

        let time = new Date()

        let s = time.getSeconds();
        let m = time.getMinutes();
        let h = (time.getHours() % 12 + m/60)

        let sW = s*6;
        let mW = m*6;
        let hW = h*30;

        el('#sekundenzeiger').setAttribute('transform', `rotate(${sW},50,50)`)
        el('#minutenzeiger').setAttribute('transform', `rotate(${mW},50,50)`)
        el('#stundenzeiger').setAttribute('transform', `rotate(${hW},50,50)`)
        setTimeout(uhrZeit,1000)

    }


   uhrZeit()

})();

	
	
