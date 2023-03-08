import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";

export default function Card(props) {
  // Local states
  const [isFav, setIsFav] = useState(false);
  // Dispatch
  const dispatch = useDispatch();
  // Get global state
  const { myFavorites } = useSelector((state) => state);
  //
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) setIsFav(true);
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(props.id));
    } else {
      setIsFav(true);
      dispatch(
        addFavorite({
          id: props.id,
          name: props.name,
          species: props.species,
          gender: props.gender,
          image: props.image,
        })
      );
    }
  };

  return (
    <div className={styles.card}>
      <button onClick={props.onClose}>X</button>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className={styles.cardImage}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.cardText}>
        <Link to={`/detail/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
        <h4>{props.species}</h4>
        <h4>{props.gender}</h4>
      </div>
    </div>
  );
}
