import { useState } from "react";

function SearchBar(props) {
  // States
  const [character, setCharacter] = useState("");

  // Handlers
  const handleChange = (e) => {
    const { value } = e.target;
    setCharacter(value);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => props.onSearch(character)}>Agregar</button>
    </div>
  );
}

export default SearchBar;
