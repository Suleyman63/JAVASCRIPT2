(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector)

    
    }

    function showMap(){

        let content =   `<h5 class ="popupheader">Willkommen in Berlin</h5>
                        <p>Wir haben sehr gutes Herbstwetter in Berlin</p>`;

        let berlin = [52.49678, 13.41679]

        let map = L.map('map').setView([52.49678, 13.41679], 15);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    
        // import json datei
        async function loadJson(){
            let data = await (await fetch('data/berlin_baeder.geojson')).json()
        //console.log(data);

        data.features.forEach((feature)=> {
            const pos = feature.geometry.coordinates;
            let content = ` <p><strong>${feature.properties.title}</strong></p>
                            <p><strong>${feature.properties.data.sicht}</strong></p>
                            <p><strong>${feature.properties.data.bezirk}</strong></p>
                            <p><strong>${feature.properties.data.wasserqualitaet}</strong></p>
                            <p><strong>${feature.properties.data.ente}</strong></p>`;

            const marker = L.marker(pos).addTo(map)
            marker.bindPopup(content)
            
        });
    }

        loadJson()
    }

    showMap()


}())