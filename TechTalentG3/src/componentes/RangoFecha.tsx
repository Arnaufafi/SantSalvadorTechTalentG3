import React from 'react';

interface RangoFechaProps {
  startDate: string;  // startDate es de tipo string, ya que es una fecha en formato "YYYY-MM-DD"
  endDate: string;    // endDate también es de tipo string
  onStartDateChange: (date: string) => void;  // onStartDateChange es una función que recibe una cadena de texto (la nueva fecha)
  onEndDateChange: (date: string) => void;    // onEndDateChange es una función similar
}

const RangoFecha: React.FC<RangoFechaProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="start-date">Fecha de inicio: </label>
        <input
          type="date"
          id="start-date"
          value={startDate}  // El valor es una cadena de texto que representa la fecha
          onChange={(e) => onStartDateChange(e.target.value)}  // Al cambiar, se pasa el valor de la fecha como string
        />
      </div>
      
      <div>
        <label htmlFor="end-date">Fecha de fin: </label>
        <input
          type="date"
          id="end-date"
          value={endDate}  // Similarmente, el valor es una cadena de texto que representa la fecha
          onChange={(e) => onEndDateChange(e.target.value)}  // Al cambiar, se pasa el valor de la fecha como string
        />
      </div>
    </div>
  );
};

export default RangoFecha;
