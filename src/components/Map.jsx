import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.2812,
      lng: -123.114843
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBzUa58duivm90HMoCzjaj02ow0krsvkn8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={49.2812}
            lng={-123.114843}
            text={'CURRENT LOCATION'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;