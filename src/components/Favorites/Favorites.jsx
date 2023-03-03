import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";

function Favorites(props) {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOrderCards = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilterCards = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <h1>Favoritos</h1>
      <div>
        <select name="" onChange={handleOrderCards}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="" onChange={handleFilterCards}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
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
