import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  useEffect(() => {
    // Verificar si la geolocalización está disponible en el navegador
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Obtener latitud y longitud y establecer el estado
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
        },
        (error) => {
          console.error("Error al obtener la ubicación: ", error);
          // Si no se puede obtener la ubicación, establecer una ubicación predeterminada
          setPosition([51.505, -0.09]);
        }
      );
    } else {
      console.error("Geolocalización no soportada");
      // Si la geolocalización no está disponible, usar una ubicación predeterminada
      setPosition([51.505, -0.09]);
    }
  }, []);

  if (position === null) {
    // Mostrar un cargando hasta que se obtenga la ubicación
    return <div>Cargando ubicación...</div>;
  }

  return (
    <MapContainer
      center={position} // Usar la posición actual
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
    >
      {/* Capa de mosaico base */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marcador en la ubicación actual */}
      <Marker position={position}>
        <Popup>
          ¡Hola! Esta es tu ubicación actual. 🚀
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
