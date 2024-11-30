import React from "react";
import BotonFiltroMeses from "./BotonFiltroMeses"; // Importar el componente del filtro
import BotonVerFavs from "./BotonVerFavsONo";
import BarraBusqueda from "./BarraDeBusqueda";
import BotonMute from "./BotonMute";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>Eventos Tarragona</h1>
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
