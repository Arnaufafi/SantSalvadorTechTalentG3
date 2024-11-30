import React, { useState } from "react";
import EventList from "../componentes/EventList";
import AddEventForm from "../componentes/AddEvent";
import { Event } from "../componentes/Event"; // Importa la interfaz
import "./App.css";

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); // Estado de los eventos
  const [showForm, setShowForm] = useState(false);

  const handleAddEvent = (newEvent: Event) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]); // Agrega el nuevo evento
  };

  return (
    <div>
      <h1>Modo Cine</h1>
      <button className="add-event-btn" onClick={() => setShowForm(true)}>
        Añadir Evento
      </button>
      {showForm && (
        <AddEventForm
          onAddEvent={handleAddEvent}
          onClose={() => setShowForm(false)}
        />
      )}
      <EventList events={events} />
    </div>
  );
};

export default App;
