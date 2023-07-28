import React from 'react';
import Card from './Card';
import './Pokedex.css';

const Pokedex = (props) => {
  let title;
  if (props.isWinner) {
    title = <h2 className='Pokedex-winner text-white'>Winning Player <i class="bi bi-trophy-fill"></i></h2>;
    
  } else {
    title = <h2 className='Pokedex-loser'>Losing Player <i class="bi bi-emoji-frown"></i></h2>;
  }

  return (
    <div className={props.isWinner ? "Pokodex bg-success" : "Pokodex bg-warning"}>
      {title}
      <h5  className={props.isWinner ? "text-white" : "Pokedex-loser"}>Total Experience: {props.exp}</h5>
      <div className='Pokedex-cards'>
        {props.pokemon.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;

