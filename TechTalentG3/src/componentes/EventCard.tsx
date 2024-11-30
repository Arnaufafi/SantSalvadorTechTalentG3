import React from "react";
import "./EventCard.css"; // Archivo CSS para estilos de las cards
import { Event } from "./Event.ts"

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.imageUrl} alt={event.name} className="event-image" />
      <div className="event-content">
        <h3>{event.name}</h3>
        <p>{event.description}</p>
        <p className="event-date">{event.date}</p>
          <div className="botones">
          <button className="favorite-btn">Añadir a favoritos</button>
          <button className="delete-btn">Elimina</button>
          </div>
      </div>
    </div>
  );
};

export default EventCard;
