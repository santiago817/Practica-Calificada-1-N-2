import { Photos } from "./components/Photos";
import "./App.css";
function App() {
  return (
    <div>
      <div className="app-container">
        <h1>The Creative Crew</h1>
        <p>
          <strong>Who we are </strong>
          <br />
          We are a team of creatively diverse. Driven. <br />
          Innovative individuals working in various <br />
          locations around the world.
        </p>
      </div>

      
      <div className="cards-container">
        {Photos.map((person) => (
          <div key={person.id}>
            <img src={person.image} alt={person.name} className="photo" />
            <h3 className="nombre">{person.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
