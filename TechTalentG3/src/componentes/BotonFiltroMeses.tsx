import React, { useState } from "react";

// Definimos el tipo para los eventos
export interface Event {
  imageUrl: string;
  name: string;
  description: string;
  date: string; // ISO string
  postalCode: string;
  coordinates: [number, number];
}

// Data mock
import { events } from "../data.ts";

interface EventFilterButtonProps {
  monthsToShow?: number; // Número de meses a mostrar
}

const EventFilterButton: React.FC<EventFilterButtonProps> = ({
  monthsToShow = 3,
}) => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  const handleFilter = () => {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setMonth(today.getMonth() + monthsToShow);

    //filtrar eventos
    const filtered = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= futureDate;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  

    setFilteredEvents(filtered);
  };

  return (
    <div>
      <button onClick={handleFilter}>Próximos {monthsToShow*30} Dias</button>
      <ul>
        {filteredEvents.map((event) => (
          <li key={event.name}>
            <img src={event.imageUrl} alt={event.name} width={50} />
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>
              <strong>Fecha:</strong> {new Date(event.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Ubicación:</strong> {event.postalCode}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventFilterButton;
