import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
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
