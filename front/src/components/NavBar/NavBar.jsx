import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

function NavBar(props) {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.linksContainer}>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
        <NavLink to="/favorites">
          <button>Favoritos</button>
        </NavLink>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

export default NavBar;
