import React from 'react';
import "./Card.css"

const POKE_API =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const Card = (props) => {
  const imgSrc = `${POKE_API}${props.id}.png`;
  return (
    <div className='card'>
      <h3 className='card-title'>{props.name}</h3>
      <div className='card-image'>
        <img src={imgSrc} alt={props.name} />
      </div >
      <div className='d-flex justify-content-between mx-3 fs-6 fw-bold'>
        <p className='card-data text-white'><span className='text-danger fw-bold'>Type: </span> {props.type}</p>
        <p className='card-data text-white'><span className='text-danger fw-bold'> Exp: </span>{props.exp}</p>
      </div>
    </div>
  );
};

export default Card;