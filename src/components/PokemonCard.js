import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [showBack, setShowBack] = useState (false)

  const toggleClick = () => {
    setShowBack(!showBack)
  }
  const front = pokemon.sprites.front
  const back = pokemon.sprites.back

  return (
    <Card>
      <div>
        <div className="image">
          <img src = {showBack ? back : front}
          alt="oh no!"
          onClick ={toggleClick}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
