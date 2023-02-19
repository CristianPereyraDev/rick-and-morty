import "./css/Card.css"

export default function Card(props) {
   return (
      <div className="card">
         <button onClick={props.onClose}>X</button>
         <h3>{props.name}</h3>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <img  src={props.image} alt="" />
      </div>
   );
}
