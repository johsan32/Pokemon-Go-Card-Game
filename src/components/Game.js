import React from 'react';
import Pokedex from './Pokedex';

const Game = () => {
  const defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };

  let hand1 = [];
  let hand2 = [...defaultProps.pokemon];
  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randomPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randomPokemon);
  }
  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div className="container-fluid vh-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row h-100">
        <div className="col-md-5">
          <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}
            title="Alan 1" />
        </div>
        <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
            <i class="bi bi-arrow-bar-left fw-bolder fs-1 text-info"></i>
            <p className={exp1 > exp2  ? 'fw-bold fs-3  text-success mt-3' : "fw-bold fs-3  text-danger mt-3"}>Sol El</p>
            {exp1 > exp2 ? (
            <span className='text-success fw-bold'>"Kazandı"</span>
              ) : (
            <span className='text-danger  fw-bold'>"Kaybetti"</span>
            )}
            <i class="bi bi-playstation fs-1 fw-bolder text-danger"></i>
            <p className={exp1 < exp2  ? 'fw-bold fs-3  text-success mt-3' : "fw-bold fs-3  text-danger mt-3"}
            >Sağ El</p>
            {exp1 < exp2 ? (
            <span className='text-success fw-bold'>"Kazandı"</span>
              ) : (
            <span className='text-danger fw-bold'>"Kaybetti"</span>
            )}
            <i class="bi bi-arrow-bar-right  fw-bolder fs-1 text-warning"></i>
        </div>
        <div className="col-md-5">
          <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}
            title="Alan 2" />
        </div>
      </div>
    </div>
  );
};

export default Game;
