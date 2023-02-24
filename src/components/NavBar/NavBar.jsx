import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

function NavBar(props) {
  return (
    <div>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

export default NavBar;
