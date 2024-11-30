/*import React, { useState, useCallback } from "react";
import { debounce } from "lodash"; 
import { events } from "../data.ts"; // Importa los eventos correctamente

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // Estado para la búsqueda
  const [filteredEvents, setFilteredEvents] = useState(events); // Eventos filtrados

  // Debounce para evitar múltiples filtros por segundo
  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      const filtered = events.filter((event) =>
        event.name.toLowerCase().includes(searchQuery)
      );
      setFilteredEvents(filtered); // Actualizamos los eventos filtrados
    }, 500), // El debounce será de 500ms
    []
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase(); // Convertimos a minúsculas para evitar problemas con mayúsculas
    setQuery(searchQuery);
    debouncedSearch(searchQuery); // Llamamos al debounce
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar eventos..."
        value={query}
        onChange={handleSearch}
        style={{
          padding: "8px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
     
      {query && (
        <div
          style={{
            marginTop: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.name}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {event.name}
              </div>
            ))
          ) : (
            <div style={{ padding: "8px" }}>No hay eventos que coincidan.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;*/
import React, { useState, useCallback } from "react";
import { debounce } from "lodash"; 
import { events } from "../data"; // Importa los eventos correctamente
import "../estilos/searchbar.css"; // Importa el archivo CSS

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // Estado para la búsqueda
  const [filteredEvents, setFilteredEvents] = useState(events); // Eventos filtrados

  // Debounce para evitar múltiples filtros por segundo
  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      const filtered = events.filter((event) =>
        event.name.toLowerCase().includes(searchQuery)
      );
      setFilteredEvents(filtered); // Actualizamos los eventos filtrados
    }, 500), // El debounce será de 500ms
    []
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase(); // Convertimos a minúsculas para evitar problemas con mayúsculas
    setQuery(searchQuery);
    debouncedSearch(searchQuery); // Llamamos al debounce
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar eventos..."
        value={query}
        onChange={handleSearch}
        className="search-bar"
      />
      {/* Mostrar recomendaciones si hay coincidencias */}
      {query && (
        <div className="search-dropdown">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.name} className="search-item">
                {event.name}
              </div>
            ))
          ) : (
            <div className="search-no-results">No hay eventos que coincidan.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;


