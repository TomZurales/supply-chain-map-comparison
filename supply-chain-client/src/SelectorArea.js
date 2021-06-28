import React from 'react';
import './index.css';
import 'react-dropdown/style.css';
import MyComponent from "./MyComponent";
import ComponentCategory from "./ComponentCategory";
import Company from "./Company";
import { Col, Container, Row } from 'react-bootstrap';
import MapComponent from './MapComponent';

class SelectorArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      address: null,
      addresses: Array(0),
      polyline: []
    };
  }

  handleProductCategorySelect(event) {
    fetch("http://localhost:8080/api/company/" + event.value)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.map((i) => { return { 'label': i.name, value: i.address } }),
            address: result[0].address
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  addAddressToMap(event) {
    const decodePolyline = require('decode-google-map-polyline');

    fetch("http://localhost:8080/api/maps/", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.addresses.concat(this.state.address))
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ polyline: decodePolyline(result.overview_polyline.points) });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    this.setState({
      addresses: this.state.addresses.concat(this.state.address)
    });
  }

  render() {
    const polyline1 = this.state.polyline;
    return (
      <Container fluid>
        <Row>
          <Col xs={2}>
            <ComponentCategory componentCategorySelect={this.handleProductCategorySelect.bind(this)} />
            {this.state.isLoaded &&
              <div>
                <Company companies={this.state.items} companySelected={(event) => this.setState({ address: event.value })} />
                <button onClick={this.addAddressToMap.bind(this)}>
                  Add
                </button>
              </div>
            }
          </Col>
          <Col xs={10}>
            <MyComponent polyline={polyline1}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SelectorArea;