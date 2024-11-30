import React, { useState } from "react";
import "./AddEvent.css";
import { events } from "../../componentes/data"; // Importa el array de eventos desde data.ts

interface AddEventFormProps {
  onAddEvent: (event: {
    name: string;
    description: string;
    date: string;
    imageUrl: string;
  }) => void;
  onClose: () => void;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ onAddEvent, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && description && date && imageUrl) {
      const newEvent = {
        name,
        description,
        date,
        imageUrl,
        postalCode: "00000", // Puedes agregar lógica para el código postal
        coordinates: [0, 0], // O calcular las coordenadas basadas en la ubicación
      };

      // Agrega el nuevo evento al array en memoria
      events.push(newEvent);

      console.log("Nuevo evento añadido:", newEvent);
      console.log("Eventos actualizados:", events);

      // Llama al callback para actualizar la UI y cerrar el formulario
      onAddEvent(newEvent);
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Nuevo Evento</h2>
        <form onSubmit={handleSubmit}>
        <div className="Formulario">
          <div id="Nombre">
            <label>
              Nombre del Evento:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del evento"
              />
            </label>
          </div>
          <div id="Descripcion">
            <label>
              Descripción:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción del evento"
              ></textarea>
            </label>
          </div>
          <div id="Fecha">
            <label>
              Fecha:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
          <div id="URL">
            <label>
              URL de Imagen:
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="URL de la imagen"
              />
            </label>
          </div>
          </div>
          <div className="form-buttons">
            <button type="submit">Guardar Evento</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventForm;