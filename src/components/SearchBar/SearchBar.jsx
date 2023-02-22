//import { useState } from "react";

export default function SearchBar({ onSearch }) {
  //const [search, setSearch] = useState("");

  return (
    <div>
      <input type="search" />
      <button onClick={onSearch}>Agregar</button>
    </div>
  );
}
