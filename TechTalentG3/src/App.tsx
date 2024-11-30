import { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import MapComponent from './components/MapComponent';
import Header from './componentes/HeaderInteractivo';

function App() {
  return ( 
    <div className="mapComponent">
        <Header />
        <MapComponent />
    </div>
  );
}

export default App;
