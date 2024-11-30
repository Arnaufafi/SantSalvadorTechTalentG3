import React, { useState, useRef, useEffect } from "react";
import "../estilos/BotonMute.css";

const NarratorButton: React.FC = () => {
  // Estado para controlar si el narrador está en mute o no
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Referencia para el narrador
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Función para obtener todo el texto de la página
  const getTextContent = () => {
    const bodyText = document.body.innerText;  // Obtener todo el texto de la página
    return bodyText;
  };

  // Función para iniciar la narración
  const startNarration = () => {
    const textToRead = getTextContent();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utteranceRef.current = utterance;

    // Configuración de las propiedades de la narración (opcional)
    utterance.rate = 1;   // Velocidad de la voz
    utterance.pitch = 1;  // Tono de la voz
    utterance.volume = 1; // Volumen (0 a 1)

    // Iniciar la narración
    speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  // Función para controlar la narración (Mute y Unmute)
  const toggleNarration = () => {
    if (isMuted) {
      // Si está en mute, reanudar la lectura
      if (utteranceRef.current) {
        speechSynthesis.resume(); // Reanudar la narración
      }
      setIsSpeaking(true);
    } else {
      // Si no está en mute, pausar la lectura
      if (utteranceRef.current) {
        speechSynthesis.pause(); // Pausar la narración
      }
      setIsSpeaking(false);
    }

    // Alternar entre Mute y Unmute
    setIsMuted(!isMuted);
  };

  // Iniciar la narración al cargar el componente
  useEffect(() => {
    if (!isSpeaking) {
      startNarration();  // Comienza la narración cuando el componente se monta
    }
  }, [isSpeaking]);

  return (
    <div>
      {/* Botón para controlar la narración */}
      <button
        onClick={toggleNarration}
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
    </div>
  );
};

export default NarratorButton;
