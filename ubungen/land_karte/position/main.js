

(function(){

    function el(cssSelector){
        return document.querySelector(cssSelector);
    };


    function showMap(){

        let map = L.map('map')
        .setView([52.49931089798846 , 13.418179750442507], 20);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        map.on('click',function(e){
            

            let pos = e.latlng;
            L.popup()
            .setLatLng([pos.lat,pos.lng])
            .setContent(`Position: ${pos.lat} , ${pos.lng}`)
            .openOn(map)
            console.log(pos);
        
        });

    };





    showMap();
}());