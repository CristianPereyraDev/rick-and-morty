import "./css/Cards.css"
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   const charactersList = characters.map(character => 
      <div key={character.id}>
         <Card 
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      </div>
   );
   return <div className="cardList">{charactersList}</div>;
}
