import { useSelector } from "react-redux";

function Favorites(props) {
  const { myFavorites } = useSelector((state) => state);
  return (
    <div>
      <h1>Favoritos</h1>
      <div>
        {myFavorites.map((fav) => (
          <div key={fav.id}>
            <h3>{fav.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
