import { useState } from 'react';
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

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'cine' ? 'mapa' : 'cine')); // Cambia entre 'cine' y 'mapa'
  };

  return (
    <div className="mapComponent">

      <Header 
        startDate={startDate} 
        endDate={endDate} 
        onStartDateChange={handleStartDateChange} 
        onEndDateChange={handleEndDateChange}
      />
      
      <EventModeButton mode={mode} onToggleMode={toggleMode} /> {/* Agrega el botón para cambiar el modo */}

      {mode === 'mapa' ? (
        <MapComponent 
          startDate={startDate} 
          endDate={endDate} 
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