import React, { useState } from 'react';
import '../estilos/BotonMute.css';  // Correct path to the BotonMute.css file

const MuteButton: React.FC = () => {
  // Estado para controlar si el audio está muteado o no
  const [isMuted, setIsMuted] = useState(false);

  // Función para cambiar el estado de mute
  const toggleMute = () => {
    setIsMuted(!isMuted);

    // Aquí puedes agregar la lógica para mutear o desmutear el audio si estás usando un elemento de audio real
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach((audio) => {
      if (audio instanceof HTMLAudioElement) {
        audio.muted = !audio.muted;
      }
    });
  };

  return (
    <button
      onClick={toggleMute}
      className={`mute-button ${isMuted ? 'mute-button-muted' : 'mute-button-unmuted'}`}  // Apply CSS classes
    >
      {/* No text here, only the icon will be displayed */}
    </button>
  );
};

export default MuteButton;
