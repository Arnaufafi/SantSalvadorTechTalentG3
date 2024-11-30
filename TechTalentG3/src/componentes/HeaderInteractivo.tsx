import React from "react";
import BotonFiltroMeses from "./BotonFiltroMeses";
import BotonVerFavs from "./BotonVerFavsONo";
import BarraBusqueda from "./BarraDeBusqueda";
import BotonMute from "./BotonMute";
import DateRangePicker from "./RangoFecha";
import logo from '/logo_img.png';
import "../estilos/Header.css"

interface HeaderProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  toggleFavorites: () => void; // Nueva prop para controlar el botón de favoritos
}

const Header: React.FC<HeaderProps> = ({ startDate, endDate, onStartDateChange, onEndDateChange, toggleFavorites }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">Eventos Tarragona</h1>
        <DateRangePicker 
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
        />
      </div>
      <nav className="nav">
        <BotonFiltroMeses
          monthsToShow={1}
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
        />
        <BotonFiltroMeses
          monthsToShow={3}
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
        />
        <button onClick={toggleFavorites}>Ver Favoritas</button> {/* Botón de favoritos */}
        {/* <BotonVerFavs /> */}
        <BarraBusqueda />
      </nav>
      
    </header>
    
  );
};
export default Header;