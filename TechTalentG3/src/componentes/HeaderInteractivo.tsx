import React from "react";
import BotonFiltroMeses from "./BotonFiltroMeses"; // Importar el componente del filtro
import BotonVerFavs from "./BotonVerFavsONo";
import BarraBusqueda from "./BarraDeBusqueda";
import BotonMute from "./BotonMute";
import logo from "../assets/icons/logo.png"; // Importamos el logo desde la carpeta correspondiente

interface HeaderProps {
  monthsToShow: number;
}

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logoImage} /> {/* Mostramos el logo */}
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
