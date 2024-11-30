import React, { useState } from "react";
import { events } from "../data.ts"; // Importa tus datos
import "../estilos/Botonfavs.css"
const App: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]); // Estado para zonas favoritas
  const [showFavorites, setShowFavorites] = useState(false); // Estado para mostrar solo favoritas

  // Función para manejar el cambio de favorito
  const toggleFavorite = (name: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(name)
        ? prevFavorites.filter((item) => item !== name) // Si ya es favorito, lo quitamos
        : [...prevFavorites, name] // Si no es favorito, lo añadimos
    );
  };

  // Filtrar las zonas favoritas y modificar el campo isVisible
  const updatedEvents = events.map((event) => {
    if (showFavorites) {
      // Si estamos mostrando solo las zonas favoritas
      if (event.isFavorite) {
        // Si el evento es favorito, lo hacemos visible
        return {
          ...event,
          isVisible: true,
        };
      } else {
        // Si el evento no es favorito, lo hacemos invisible
        return {
          ...event,
          isVisible: false,
        };
      }
    } else {
      // Si no estamos mostrando solo favoritos, todos los eventos son visibles
      return {
        ...event,
        isVisible: true,
      };
    }
  });

  // Cambiar el estado para mostrar todas las zonas o solo las favoritas
  const handleButtonClick = () => {
    setShowFavorites((prev) => !prev);
  };

  return (
    <div>
      <header>
        <button onClick={handleButtonClick}>
          {showFavorites ? "Ver Todas" : "Ver Favoritas"}
        </button>
      </header>
    </div>
  );
};

export default App;
