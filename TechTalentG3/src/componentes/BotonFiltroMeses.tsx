import React from "react";

interface EventFilterButtonProps {
  monthsToShow: number; // Número de meses a sumar
  startDate: string; // Fecha de inicio actual
  endDate: string; // Fecha de fin actual
  onStartDateChange: (date: string) => void; // Función para cambiar la fecha de inicio
  onEndDateChange: (date: string) => void; // Función para cambiar la fecha de fin
}

const EventFilterButton: React.FC<EventFilterButtonProps> = ({
  monthsToShow,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const updateDate = () => {
    const today = new Date(); // Fecha de hoy
    const daysToAdd = 30 * monthsToShow; // Calculamos los días a sumar (30 días por mes)
    
    // Calculamos la nueva fecha de inicio sumando los días a la fecha actual
    //today.setDate(today.getDate() + daysToAdd);
    const newStartDate = today.toISOString().split("T")[0]; // Nueva fecha de inicio
    
    // Calculamos la nueva fecha de fin sumando los mismos días a la fecha de inicio
    today.setDate(today.getDate() + daysToAdd); // Sumamos los días para la fecha de fin
    const newEndDate = today.toISOString().split("T")[0]; // Nueva fecha de fin

    // Actualizamos las fechas a través de las funciones pasadas
    onStartDateChange(newStartDate);
    onEndDateChange(newEndDate);
  };

  return (
    <button onClick={updateDate}>Próximos {monthsToShow * 30} Días</button>
  );
};

export default EventFilterButton;
