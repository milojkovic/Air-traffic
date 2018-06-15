import React from 'react';
import {geolocated} from 'react-geolocated';

class Geolocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable //indicating that the browser supports the Geolocation API
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled //indicating user has allowed the use of the Geolocation API
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
                <tbody>
                  <tr><td>Latitude: </td><td>{this.props.coords.latitude}</td></tr>
                  <tr><td>Longitude:</td><td>{this.props.coords.longitude}</td></tr>
                </tbody>
            </table>
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geolocation);