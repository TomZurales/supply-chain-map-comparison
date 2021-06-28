

import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';
import { Button } from 'bootstrap';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 39.08,
  lng: -98.58
};

const uluru = { lat: -25.363, lng: 131.044 };

function MyComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCUwbUSTvJiXetmMztzm2NdWhubUQq1WPM"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const pline = props.polyline;

  const reportbounds = function(){
    console.log();
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={1}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onDblClick={reportbounds}
    >
      <Polyline
              path={pline}
              geodesic={true}
          />
      <></>
    </GoogleMap>
  ) : <></>;
}

export default MyComponent;