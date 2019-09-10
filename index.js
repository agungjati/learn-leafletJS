(function(){
    const dataSource = [
        {
            coordinate : [1.15287, 104.0562544],
            title : "Komedi putar Ocarina",
            image : "./images/ocarina/mega-wisata-ocarina-batam.dib"
        },
        {
            coordinate : [1.152256, 104.056712],
            title : "Tulisan dinding Ocarina",
            image : "./images/ocarina/Ocarina-Batam-Theme-Park.jpg"
        },
        {
            coordinate : [1.1524658, 104.0563039],
            title : "Waterpark putar Ocarina",
            image : "./images/ocarina/Top-100-Waterpark-Batam-640x480.jpg"
        }

    ]

    const actionOnClickMarker = (data) => {
        console.log(data)
    }


    const mainCoordinate = new L.LatLng( 1.0812166, 103.9991899)
    let mymap = L.map("MyMap").setView( mainCoordinate, 11);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
    }).addTo(mymap);

    dataSource.forEach(data => {
        L.marker(data.coordinate).addTo(mymap)
        .bindPopup(`<center><b>${data.title}</b><br /><br />
        <img src='${data.image}' width='100' onClick='actionOnClickMarker' /></center>`).openPopup();
    })


    setTimeout(() => { mymap.setView( [1.152256, 104.056712], 18);  }, 1500)

// L.marker([1.15287, 104.0562544]).addTo(mymap)
// .bindPopup(`<center><b>Komedi putar Ocarina</b><br /><br />
//     <img src='./images/ocarina/mega-wisata-ocarina-batam.dib' width='100' /></center>`).openPopup();

//     L.marker([1.152256, 104.056712]).addTo(mymap)
// .bindPopup(`<center><b>Tulisan dinding Ocarina</b><br /><br />
//     <img src='./images/ocarina/Ocarina-Batam-Theme-Park.jpg' width='100' /></center>`).openPopup();

//     L.marker([1.1524658, 104.0563039]).addTo(mymap)
// .bindPopup(`<center><b>Tulisan dinding Ocarina</b><br /><br />
//     <img src='./images/ocarina/Top-100-Waterpark-Batam-640x480.jpg' width='100' /></center>`).openPopup();
    
// setTimeout(() => { mymap.setView( [1.152256, 104.056712], 18);  }, 1500)

   
// var popup = L.popup();

// function onMapClick(e) {
// popup
// .setLatLng(e.latlng)
// .setContent("You clicked the map at " + e.latlng.toString())
// .openOn(mymap);
// }

// mymap.on('click', onMapClick);


    
})()

