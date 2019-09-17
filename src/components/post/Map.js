import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import FormSearch from './FormSearch'
import { getLocationsBySearch } from '../../controllers/PostController'
class MapPost extends React.Component {

  state = {
    lat: 1.0812166,
    lon: 103.9991899,
    zoom: 12,
    attribution: `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
    map: `https://{s}.tile.osm.org/{z}/{x}/{y}.png`,
    search : "",
    markers: [
      {
        display_name: "Batam",
        lat: 1.0812166,
        lon: 103.9991899
      }
    ]
  }

  onHandleChangeSearch = (e) => {
    this.setState({ search : e.target.value })
  }

  onHandleSearching = (ev) => {
    ev.preventDefault()
    
    getLocationsBySearch(this.state.search)
    .then(markers => {
      if(markers.length > 0){
        this.setState({ markers : markers })
        this.setState({ zoom : 15  })
      }
    })
  }


  render() {
    
      const marker = this.state.markers[0];
      const center =  [marker.lat, marker.lon]
    
    return (
      <div className="card border-0 shadow-sm">
      <div className="card-body">
        <FormSearch 
        search={this.state.search}
        onChange={this.onHandleChangeSearch}
        onSubmit={this.onHandleSearching}/>

        <hr />
        <Map center={center} zoom={this.state.zoom}>
          <TileLayer
            attribution={this.state.attribution}
            url={this.state.map}
          />
          {
            this.state.markers.map(({ display_name, lat, lon } , idx) => (
              <Marker position={[lat, lon]} key={idx} >
                <Popup >
                  {display_name}
                </Popup>
              </Marker>
            ))
          }

        </Map>
      </div>
      </div>  
    );
  }
}

export default MapPost;