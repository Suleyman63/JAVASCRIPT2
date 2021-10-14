(function(){
    function el(cssSelector){
        return document.querySelector(cssSelector);
    };


    function create(html){
        return document.createElement(html)
    };


    let w = window.innerWidth;
    let h = window.innerHeight;


    function init(){
        let max = 5;
        let divW, divH;

        for(let i=0; i<max*max; i++){
            divH =Math.floor(w/max)-5;
            divW =Math.floor(h/max)-5;

            let div = create('div');

            div.addEventListener('mouseenter', machVier);
            div.style.width = `${divW}px`;
            div.style.height = `${divH}px`;
            div.style.background = colors();

            el('#con3').appendChild(div)
        }
    };
    
    
    function machVier(){
        let max = 2;
        let divW, divH;

        for(let i=0; i<max*max; i++){
            divW=Math.floor(this.offsetWidth / max);
            divH=Math.floor(this.offsetHeight / max);
            let div = create('div');
            div.style.width = `${divW}px`;
            div.style.height = `${divH}px`;
            div.style.background = colors();

            div.addEventListener('mouseenter',machVier)
            this.appendChild(div);
        };
        this.removeEventListener('mouseenter',machVier);
        this.style.background = 'black'
    };


    function colors(){
        let r = Math.floor(Math.random() * 200)+56;
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
       // return `rgb(${r},${g},${b})`;
       return `rgb(${r} 0 0`;
    };
        
    init();
    
}());