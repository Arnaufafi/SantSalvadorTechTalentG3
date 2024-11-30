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
}

const Header: React.FC<HeaderProps> = ({ startDate, endDate, onStartDateChange, onEndDateChange }) => {
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
        <BotonFiltroMeses monthsToShow={1} />
        <BotonFiltroMeses monthsToShow={3} />
        <BotonVerFavs />
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
    alignItems: "center", // Alinea el logo verticalmente al centro
    marginLeft: "5%", // Aplica margen del 5% a la izquierda
  },
  logoImage: {
    width: "50px", // Ajusta el tamaño del logo
    height: "50px", // Ajusta el tamaño del logo
    marginRight: "10px", // Espaciado entre el logo y el texto
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
};

export default Header; // Exportamos el componente como "default"
