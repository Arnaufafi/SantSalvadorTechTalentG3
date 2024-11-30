import { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import MapComponent from './componentes/MapComponent';
import Header from './componentes/HeaderInteractivo';

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showFavorites, setShowFavorites] = useState(false); // Estado para mostrar solo favoritos

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
  };

  const toggleFavorites = () => {
    setShowFavorites((prev) => !prev); // Cambiar el estado de favoritos
  };

  return ( 
    <div className="mapComponent">
      <Header 
        startDate={startDate} 
        endDate={endDate} 
        onStartDateChange={handleStartDateChange} 
        onEndDateChange={handleEndDateChange}
        toggleFavorites={toggleFavorites} // Pasamos la función al Header
      />
      <MapComponent 
        startDate={startDate} 
        endDate={endDate} 
        showFavorites={showFavorites} // Pasamos el estado de favoritos al MapComponent
      />
    </div>
  );
}

export default App;
