import React, { useEffect, useState } from 'react';

interface RangoFechaProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const RangoFecha: React.FC<RangoFechaProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  // Estado para la fecha de inicio por defecto
  const [defaultStartDate, setDefaultStartDate] = useState<string>('');

  useEffect(() => {
    // Obtener la fecha de hoy en formato YYYY-MM-DD
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    setDefaultStartDate(formattedDate);
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="start-date">Fecha de inicio: </label>
        <input
          type="date"
          id="start-date"
          value={startDate || defaultStartDate} // Si no hay startDate, usar la fecha por defecto
          onChange={(e) => onStartDateChange(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="end-date">Fecha de fin: </label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default RangoFecha;
