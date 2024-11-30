import React, { useState } from "react";
import "../estilos/BotonMute.css";

const MuteButton: React.FC = () => {
  // Estado para controlar si el audio está muteado o no
  const [isMuted, setIsMuted] = useState(false);

  // Función para cambiar el estado de mute
  const toggleMute = () => {
    setIsMuted(!isMuted);

    // Lógica para mutear o desmutear el audio en el documento
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach((audio) => {
      if (audio instanceof HTMLAudioElement) {
        audio.muted = !audio.muted;
      }
    });
  };

  return (
    <div>
    <button
      className={`mute-button ${
        isMuted ? "mute-button-muted" : "mute-button-unmuted"
      }`}
      onClick={toggleMute}
    >
      {/* El contenido del botón ahora se maneja con pseudo-elementos en CSS */}
    </button>´
    </div>
  );
};

export default MuteButton;
