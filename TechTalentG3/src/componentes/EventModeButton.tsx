import React from "react";

interface EventModeButtonProps {
  mode: "cine" | "mapa"; // Modo actual
  onToggleMode: () => void; // Función para alternar modos
}

const EventModeButton: React.FC<EventModeButtonProps> = ({ mode, onToggleMode }) => {
  return (
    <button onClick={onToggleMode}>
      {mode === "cine" ? "Modo Mapa" : "Modo Cine"}
    </button>
  );
};

export default EventModeButton;