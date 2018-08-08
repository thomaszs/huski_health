import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import SimpleMap from "./Map.jsx";

class Vets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vets: []
    };
    this.getVetsId = this.getVetsId.bind(this);
  }

  componentDidMount() {
    this.getVetsId();
  }

  getVetsId() {
    const { mapEl } = this.refs;
    const google = window.google;

    if (mapEl) {
      var pyrmont = new google.maps.LatLng(49.2812, -123.114843);

      const map = new google.maps.Map(mapEl, {
        center: pyrmont,
        zoom: 15
      });

      var request = {
        location: pyrmont,
        radius: "1000",
        keyword: "veterinarian"
      };

      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, (results, status) => {
        var request2 = {
          placeId: results[0].place_id,
          fields: ["name", "rating", "formatted_phone_number", "geometry", "formatted_address"]
        };

        const service2 = new google.maps.places.PlacesService(map);
        service2.getDetails(request2, (results2, status) => {
          this.setState({ vets: results2 });
        });
      });
    }
  }

  render() {
    return (
      <div>
        <h1> Nearby Vets </h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="chart-wrapper">
                <div className="chart-title">
                  <h2>{this.state.vets.name} </h2>
                </div>
                <div className="chart-stage">
                  <div className="container-profile">
                    <div className="container-vets">
                      <p className="vets-label"> Phone Number: <a href="tel:+1(778)995-2295"> {this.state.vets.formatted_phone_number} </a></p>
                      <p className="vets-label">Rating: <a>{this.state.vets.rating} </a></p>
                      <p className="vets-label">Address:</p>
                      <p> {this.state.vets.formatted_address} </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-wrapper">
                <div className="chart-title">
                  <h2>Animal Medical Clinic </h2>
                </div>
                <div className="chart-stage">
                  <div className="container-profile">
                    <div className="container-vets">
                      <p className="vets-label"> Phone Number: <a href="tel:+1(778)995-2295"> (604)628-9699 </a></p>
                      <p className="vets-label">Rating: <a> 4.3 </a></p>
                      <p className="vets-label">Address:</p>
                      <p> 1338 W Georgia St, Vancouver, BC V6E 4S2 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-wrapper">
                <div className="chart-title">
                  <h2>Urban Animal Hospital </h2>
                </div>
                <div className="chart-stage">
                  <div className="container-profile">
                    <div className="container-vets">
                      <p className="vets-label"> Phone Number: <a href="tel:+1(778)995-2295"> (604)684-3632 </a></p>
                      <p className="vets-label">Rating: <a> 4.2 </a></p>
                      <p className="vets-label">Address:</p>
                      <p> 1032 Davie St, Vancouver, BC V6E 1M3 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="mapEl" />
            <div className="col-sm-8">
              <SimpleMap />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vets;
