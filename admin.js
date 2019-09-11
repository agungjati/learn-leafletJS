(function(){
nominatim api
    const mainCoordinate = new L.LatLng( 1.0812166, 103.9991899)
    let mymap = L.map("MyMap").setView( mainCoordinate, 11);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
    }).addTo(mymap);
   
    L.marker(mainCoordinate).addTo(mymap)
.bindPopup(`<b>Batam Island</b>`).openPopup();


    var popup = L.popup();

    function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
    }

    mymap.on('click', onMapClick);


    
})()

