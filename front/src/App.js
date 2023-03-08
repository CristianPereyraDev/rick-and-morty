import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

const URLCHARACTER = "http://localhost:3001/rickandmorty/character";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "cr@gmail.com";
  const password = "123456";
  let location = useLocation();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    // Cada vez que se actualice el estado access o se llame a navigate se verifica
    // si se tiene permitido el acceso y en caso de no permitirse redirige a la ruta "/".
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (character) => {
    fetch(`${URLCHARACTER}/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        {location.pathname !== "/" ? <NavBar onSearch={onSearch} /> : null}
      </div>
      <hr />
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
      <hr />
    </div>
  );
}

export default App;
