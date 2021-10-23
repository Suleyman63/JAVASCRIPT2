

(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector);
    };


    function showMap(){
        let berlin = [ 52.539286920086013,13.405134295149891];
        let map = L.map('map')
        .setView(berlin, 6);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

       async function loadJson (){
        let url ='https://opendata.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0.geojson';
        let data = await (await fetch(url)).json();
        console.log(data)
        showLayer(data);
       };

       function showLayer(data){

            L.geoJson(data,{

                style: function(feature){
                    let col = 256 - feature.properties.cases7_per_100k ;
                  return{
                      weight:0.5,
                      fillColor:`rgb(${col},0,0)`,
                      fillOpacity:1,
                      color:'black'
                  }
                },
                 onEachFeature: function(feature,layer){
                    layer.bindPopup(`
                        <h3>Landkreis: ${feature.properties.GEN}</h3>
                        <p>7 Tage Inzidenz: ${Math.round(feature.properties.cases7_per_100k)}</p>
                    `)
                 }
            }).addTo(map);
           
           
            
       }


       loadJson ()
    };


    showMap();
}());