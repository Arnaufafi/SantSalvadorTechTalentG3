import React from "react";
import EventCard from "./EventCard"; // Asegúrate de importar correctamente el componente
import { events } from "../data"; // Importa los datos mock
import "./EventList.css"

const EventList: React.FC = () => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.name} event={event} />
      ))}
    </div>
  );
};

export default EventList;
