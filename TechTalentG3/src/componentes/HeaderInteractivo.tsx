import React from "react";
import BotonFiltroMeses from "./BotonFiltroMeses";
import BotonVerFavs from "./BotonVerFavsONo";
import BarraBusqueda from "./BarraDeBusqueda";
import BotonMute from "./BotonMute";
import DateRangePicker from "./RangoFecha";

interface HeaderProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  toggleFavorites: () => void; // Nueva prop para controlar el botón de favoritos
}

const Header: React.FC<HeaderProps> = ({ startDate, endDate, onStartDateChange, onEndDateChange, toggleFavorites }) => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>Eventos Tarragona</h1>
        <DateRangePicker 
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
        />
      </div>
      <nav style={styles.nav}>
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
        <BotonMute />
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
};

export default Header;
