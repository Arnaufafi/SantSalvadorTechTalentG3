import { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import MapComponent from './componentes/MapComponent';
import Header from './componentes/HeaderInteractivo';

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
  };

  return ( 
    <div className="mapComponent">
      <h1>My Map View</h1>
      <Header 
        startDate={startDate} 
        endDate={endDate} 
        onStartDateChange={handleStartDateChange} 
        onEndDateChange={handleEndDateChange}
      />
      <MapComponent 
        startDate={startDate} 
        endDate={endDate} 
      />
    </div>
  );
}

export default App;
