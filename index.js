(function(){
    const coordinate = new L.LatLng( 1.0812166, 103.9991899)
    let mymap = L.map("MyMap").setView( coordinate, 11);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
    }).addTo(mymap);

L.marker([1.15287, 104.0562544]).addTo(mymap)
.bindPopup(`<center><b>Komedi putar Ocarina</b><br /><br />
    <img src='./images/ocarina/mega-wisata-ocarina-batam.dib' width='100' /></center>`).openPopup();

    L.marker([1.152256, 104.056712]).addTo(mymap)
.bindPopup(`<center><b>Tulisan dinding Ocarina</b><br /><br />
    <img src='./images/ocarina/Ocarina-Batam-Theme-Park.jpg' width='100' /></center>`).openPopup();

    L.marker([1.1524658, 104.0563039]).addTo(mymap)
.bindPopup(`<center><b>Tulisan dinding Ocarina</b><br /><br />
    <img src='./images/ocarina/Top-100-Waterpark-Batam-640x480.jpg' width='100' /></center>`).openPopup();
    

    setTimeout(() => { mymap.setView( [1.152256, 104.056712], 18);  }, 1500)
// var popup = L.popup();

// function onMapClick(e) {
// popup
// .setLatLng(e.latlng)
// .setContent("You clicked the map at " + e.latlng.toString())
// .openOn(mymap);
// }

// mymap.on('click', onMapClick);

})()