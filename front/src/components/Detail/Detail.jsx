import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/detail/${detailId}`
      );
      if (response.data.name) {
        setCharacter(response.data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    } catch (error) {
      window.alert("No hay personajes con ese ID");
      return setCharacter({});
    }
  }, [detailId]);

  return (
    <div>
      <Link to="/home">
        <button>Go Back</button>
      </Link>
      <h3>{character.name}</h3>
      <img src={character.image} />
    </div>
  );
}

export default Detail;
