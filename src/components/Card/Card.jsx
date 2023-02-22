import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <button onClick={props.onClose}>X</button>
      <div className={styles.cardImage}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.cardText}>
        <h3>{props.name}</h3>
        <h4>{props.species}</h4>
        <h4>{props.gender}</h4>
      </div>
    </div>
  );
}
