import { useMemo, useEffect, useState } from 'react';
import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import mapStyles from './mapStyles';
const dogMarker = require('../../../src/img/dog.png');
const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
function Map(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';
  return <MapCreate zip={props.zip} />;
}
function MapCreate(props) {
  const [latLng, setLatLng] = React.useState(null);
  const [marker, setMarker] = useState([]);
  const [selected, setSelected] = useState(null);
  // TODO: Fetch address and event name from Single Event slice
  // TODO: OnClick populate InfoWindow with event name and address
  useEffect(() => {
    const address = props.zip;
    const eventName = 'Dog Concert in Central Park';
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&address=${address}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { lat, lng } = data.results[0].geometry.location;
        setLatLng({ lat, lng });
        const marker = {
          lat,
          lng,
          time: new Date(),
        };
        setMarker(marker);
      })
      .catch((error) => console.log(error));
  }, []);
  const center = useMemo(() => latLng, [latLng]);
  // Reference to map instance
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (marker.length === 0) return null;
  return (
    <div>
      <GoogleMap
        zoom={13}
        center={center}
        mapContainerStyle={mapContainerStyle}
        options={options}
        onLoad={onMapLoad}
      >
        <MarkerF
          key={1}
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={{
            url: dogMarker,
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
        />
      </GoogleMap>
    </div>
  );
}
export default Map;
/*       onClick={() => {
            setSelected(marker);
          }}
        />
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>eventName</h2>
              <p>address</p>
            </div>
          </InfoWindow>
        ) : null}
                />
        */
