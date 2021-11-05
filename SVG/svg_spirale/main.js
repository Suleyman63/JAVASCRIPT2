(function(){

    function el(css){
        return document.querySelector(css);
    };

    
    let sammler = [];
    let index =0; // spasVariable
    let max = 200; // anzahl der svg elemente

    // variablen für die Animate

    let alpha =0; // speed
    let vAlpha=0.001; // speed

    let vSin = 38;
    let vCos = 44;

    let kRadius = 5;


    // ende schiebeREgler
    // abstand zur  mitte
    let radiusSpirale = [];
    let rSpirale = 1;


    // svg element auf browserfenster grösse setzen
    // 1. browser ausmessen
    let w = window.innerWidth;
    let h = window.innerHeight;

    // 2.svg element auf browser anpassen
    el('#svg').setAttribute('width',w)
    el('#svg').setAttribute('height',h)


    let protoSVG = {
        cx:100,
        cy:100,
        r:30,
        id:0,
        el:0, // svg wird hier gespeichert
        col:`rgb(255,0,0)`,
        init:function(){
            this.id = index;
            index++;
            this.col = color()

            // svg kreis konstruieren und einfügen
            let xmlns = "http://www.w3.org/2000/svg"; // NameSpace
            this.el = document.createElementNS(xmlns, 'circle')
            this.el.setAttribute('cx',this.cx);
            this.el.setAttribute('cy',this.cy);
            this.el.setAttribute('r',this.r);
            this.el.setAttribute('style',`fill:${this.col}`);
            this.el.setAttribute('class','my_class')

            // svg element in das dom einfügen
            el('#svg').appendChild(this.el)

            sammler.push(this)

        },
        move:function(){

            // abstand zur mitte - teil 1
            let dist = radiusSpirale[this.id] + rSpirale;

            this.cx = w/2 + (dist * Math.sin(alpha + vSin * this.id));
            this.cy = h/2 + (dist * Math.cos(alpha + vCos * this.id));
            this.r = (kRadius/5 * this.id/20);


            this.el.setAttribute('cx',this.cx)
            this.el.setAttribute('cy',this.cy)
            this.el.setAttribute('r',this.r)

        }
    };


    function klonFabrik(){

        let klon;

        for(let i=0; i<max; i++){
            klon = Object.create(protoSVG);
            klon.init();
        }
        console.log(sammler);
    }


    function render(){
        requestAnimationFrame(render)

        sammler.forEach((klon) => {
            klon.move()
        });

        alpha -= vAlpha;

    }


    function color(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;

    }


    function abstandMittelPunkt(n){
        for(let i=0; i<max; i++){
            radiusSpirale.push(i * n)
        }
        

    };

    abstandMittelPunkt(0.5)
    klonFabrik()
    render()

}());