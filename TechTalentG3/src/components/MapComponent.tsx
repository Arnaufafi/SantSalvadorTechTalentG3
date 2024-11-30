import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const MapComponent = () => {
  const position: LatLngExpression = [51.505, -0.09]; // Coordenadas iniciales

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
    >
      {/* Capa de mosaico base */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marcador en el mapa */}
      <Marker position={position}>
        <Popup>
          ¡Hola! Este es un marcador de ejemplo. 🚀
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
