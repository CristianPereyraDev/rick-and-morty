import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "cr@gmail.com";
  const password = "123456";
  let location = useLocation();

  function login(userData) {
    // if (userData.password === password && userData.username === username) {
    //   setAccess(true);
    //   navigate("/home");
    // }
    setAccess(true);
    navigate("/home");
  }

  useEffect(() => {
    // Cada vez que se actualice el estado access o se llame a navigate se verifica
    // si se tiene permitido el acceso y en caso de no permitirse redirige a la ruta "/".
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (character) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/onsearch/${character}`
      );
      if (response.data) {
        setCharacters((oldChars) => [...oldChars, response.data]);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    } catch (error) {}
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      <div>
        {location.pathname !== "/" ? <NavBar onSearch={onSearch} /> : null}
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
