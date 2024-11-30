import React, { useState } from 'react';

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
      style={{
        padding: '10px 20px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {isMuted ? 'Unmute' : 'Mute'}
    </button>
  );
};

export default MuteButton;
