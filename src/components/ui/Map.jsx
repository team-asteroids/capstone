import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_API_KEY',
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapCreate />;
}

function MapCreate() {
  const center = useMemo(() => ({ lat: 40.712776, lng: -74.005974 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}

export default Map;
