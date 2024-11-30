import { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import MapComponent from './components/MapComponent';

function App() {
  return ( 
    <div className="mapComponent">
        <h1>My Map View</h1>
        <MapComponent />
    </div>
  );
}

export default App;
