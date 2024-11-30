import React, { useState } from "react";
import { neighborhoods } from "../data.ts"; // Importa tus datos

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

  // Filtrar las zonas favoritas
  const filteredNeighborhoods = showFavorites
    ? neighborhoods.filter((neighborhood) => favorites.includes(neighborhood.name))
    : neighborhoods;

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

      <div>
        {filteredNeighborhoods.map((neighborhood) => (
          <div key={neighborhood.name}>
            <div
              style={{
                backgroundColor: neighborhood.color,
                padding: "10px",
                margin: "5px",
              }}
            >
              <h3>{neighborhood.name}</h3>
              <button onClick={() => toggleFavorite(neighborhood.name)}>
                {favorites.includes(neighborhood.name) ? "Quitar de Favoritos" : "Añadir a Favoritos"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
