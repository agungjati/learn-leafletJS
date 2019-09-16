import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class MapPost extends React.Component {

    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
        attribution : `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
        map : `https://{s}.tile.osm.org/{z}/{x}/{y}.png`
    }
    
  
    render() {
      const position = [this.state.lat, this.state.lng];
      return (
        
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution={this.state.attribution}
            url={this.state.map}
          />
          <Marker position={position}>
            <Popup >
              A pretty CSS3 popup. <br/> Easily customizable.
            </Popup>
          </Marker>
        </Map>
        
      );
    }
  }
  
export default MapPost;