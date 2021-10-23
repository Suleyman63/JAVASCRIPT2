

(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector);
    };


    function showMap(){

        let berlin = [ 52.539286920086013,13.405134295149891];
        let map = L.map('map')
        .setView(berlin, 11);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);



        async function loadJson(){
            let data = await (await fetch('data/berliner-bezirke.geojson')).json();
            showLayer(data);
        };

        function showLayer(data){
            // L.geoJSON(data,{
            //     style: function(feature){
            //         return {
            //             color:'blue'
                      
            //         }
            //     }

            // })
            // .bindPopup(function(layer){
            //     console.log(layer)
            //   return `Bezirk: ${layer.feature.properties.Name} `;
            // })
            // .addTo(map)
            L.geoJSON(data,{}).addTo(map);


        };


        loadJson();
    };


    showMap();
}());