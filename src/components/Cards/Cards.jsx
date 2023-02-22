import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  const charactersList = characters.map((character) => (
    <Card
      key={character.id}
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      onClose={() => window.alert("Emulamos que se cierra la card")}
    />
  ));
  return <div className={styles.cardList}>{charactersList}</div>;
}
