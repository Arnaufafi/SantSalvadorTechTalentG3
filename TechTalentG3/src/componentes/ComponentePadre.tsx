import React, { useState, useEffect } from 'react';
import RangoFecha from './RangoFecha'; // Importamos el componente RangoFecha
import MapComponent from './MapComponent'; // Importamos el componente MapComponent
import EventFilterButton from './BotonFiltroMeses';

const ComponentePadre = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Establecer la fecha de inicio a la fecha actual al montar el componente
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
    setStartDate(today);
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  const handleStartDateChange = (newStartDate: string) => {
    setStartDate(newStartDate);
  };

  const handleEndDateChange = (newEndDate: string) => {
    setEndDate(newEndDate);
  };

  return (
    <div>
      {/* Componente para seleccionar el rango de fechas */}
      <RangoFecha
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
      />
      
      {/* Componente del mapa que muestra los eventos filtrados */}
      <MapComponent
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default ComponentePadre;
