import React from 'react';

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
  return (
    <div>
      <div>
        <label htmlFor="start-date">Fecha de inicio: </label>
        <input
          type="date"
          id="start-date"
          value={startDate}
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
