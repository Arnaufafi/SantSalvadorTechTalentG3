import React from "react";
import EventCard from "./EventCard";
import { Event } from "./Event.ts"; // Ajusta la ruta según tu estructura de proyecto

const EventList: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventList;
