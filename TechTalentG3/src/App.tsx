import { useState, useEffect } from 'react';

import './App.css';
import 'leaflet/dist/leaflet.css';
import MapComponent from './componentes/MapComponent';
import Header from './componentes/HeaderInteractivo';
import EventList from './componentes/EventList';
import EventModeButton from './componentes/EventModeButton'; // Importa el botón de cambio de modo
import BotonMute from './componentes/BotonMute';

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [mode, setMode] = useState<'cine' | 'mapa'>('cine'); // Establece el modo inicial como 'mapa'
  const [showFavorites, setShowFavorites] = useState(false); // Estado para mostrar solo favoritos
    // Función para leer texto usando la API de SpeechSynthesis
    const readText = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';  // Configura el idioma en español
      speechSynthesis.speak(utterance);
    };

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'cine' ? 'mapa' : 'cine')); // Cambia entre 'cine' y 'mapa'
  };

  const toggleFavorites = () => {
    setShowFavorites((prev) => !prev); // Cambiar el estado de favoritos
  };

   // Uso de useEffect para leer al cargar el componente (opcional, para leer los datos iniciales)
   useEffect(() => {
    if (startDate || endDate || showFavorites) {
      const initialText = `Aplicación cargada. Fecha de inicio: ${startDate}, Fecha de fin: ${endDate}. `;
      const favoritesStatus = showFavorites ? 'Mostrando favoritos.' : 'Mostrando todos los elementos.';
      readText(initialText + favoritesStatus);  // Lee el estado inicial
    }
  }, [startDate, endDate, showFavorites]);

  return (
    <div className="mapComponent">

      <Header 
        startDate={startDate} 
        endDate={endDate} 
        onStartDateChange={handleStartDateChange} 
        onEndDateChange={handleEndDateChange}
        toggleFavorites={toggleFavorites} // Pasamos la función al Header
      />
      
      <EventModeButton mode={mode} onToggleMode={toggleMode} /> {/* Agrega el botón para cambiar el modo */}

      {mode === 'mapa' ? (
        <MapComponent 
          startDate={startDate} 
          endDate={endDate} 
          showFavorites={showFavorites} // Pasamos el estado de favoritos al MapComponent
      />
      ) : (
        <div className="cineContainer">
    
      <EventList />
        </div>
      )}

    </div>
  );
}

export default App;