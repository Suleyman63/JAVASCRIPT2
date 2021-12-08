(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector)
    }


    /*************** function inheritance **************/
    // prototype ist ein Tier
    // Tier hat einem Namen
    // tier hat eine sprache
    // tier hat eine lieblingsnahrung

function funcBeispiel(){

    function Tier(name,sprache,nahrung){
        this.name = name
        this.sprache=sprache
        this.nahrung=nahrung
    };


    Tier.prototype.spricht = function(){
        return `${this.name} ${this.sprache}`;
    };

    Tier.prototype.isstGerne = function(){
        return `${this.name} ${this.nahrung}`
    };



    let hund= new Tier('wolfi', 'bellt', 'Hundesnacks');
    el('#info1').innerHTML =hund.spricht()

    let katze= new Tier('Minnie', 'miaut', 'Katzensnacks');
    el('#info2').innerHTML =katze.isstGerne()

    let maus= new Tier('Mausie', 'piepst', 'speck');
    el('#info3').innerHTML =maus.spricht()
 



}

funcBeispiel()




/*********************** object inheritance ***************************/

    // objects
    // prototype ist ein tier
    // Tier hat einem Namen
    // tier hat eine sprache
    // tier hat eine lieblingsnahrung


    function objBeispiel(){

        let Tier = {

            name:0,
            sprache:0,
            nahrung:0,
            init:function(name,sprache,nahrung){
                this.name=name
                this.sprache=sprache
                this.nahrung=nahrung
            }

        };

        // weitere methoden anfügen
        Tier.spricht = function(){
            return `${this.name} ${this.sprache}`
        };

        Tier.isstGerne = function(){
            return `${this.name} ${this.nahrung}`
        };


        let hund = Object.create(Tier);
        hund.init('wolfi','bellt','hundesnacks');
        el('#info4').innerHTML=hund.isstGerne();

        let katze = Object.create(Tier);
        katze.init('Minnie','miaut','katzesnacks');
        el('#info5').innerHTML=katze.spricht();


        let maus = Object.create(Tier);
        maus.init('mausi','piepst','käse');
        el('#info6').innerHTML=maus.isstGerne();


    }

    objBeispiel()




    /*********************** class inheritance ***************************/


    function classBeispiel(){

        class Tier {
            constructor(name,spricht,nahrung){
                this.name=name
                this.spricht=spricht
                this.nahrung=nahrung


            }
            spricht(){
                return `${this.name} ${this.sprache}`
            }
        }

        class TierKomplett extends Tier{
            constructor(name,spricht,nahrung){
                super(name,spricht,nahrung)
            }
            isstGerne(){
                return `${this.name} ${this.nahrung}`
            }
        }

        let hund = new TierKomplett('wolfi','bellt','hundesnacks')
        el('#info7').innerHTML = hund.isstGerne()
        el('#info8').innerHTML = hund.spricht()


        let katze = new TierKomplett('Minnie','miaut','Katzensncaks')
        el('#info9').innerHTML = katze.isstGerne()

    };


    
    classBeispiel()

}())