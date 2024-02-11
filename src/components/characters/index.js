import React from 'react';
import './style.scss';
// import Character from '../character';

const Characters = ({ chars }) => {
  return (
    <div className="chars-list">
      { chars && chars.map((char) => <section key={char.id}>
       <header>
       <div className="logo">
        <img src={'https://picsum.photos/300/'+char.height} alt={char.name} />
        </div>  
        <h3>{char.name}
        </h3>
        </header>
        <strong>{char.homeworld}</strong>
        <span>{"HEIGHT - "+char.height}</span>
        <span>{"MASS - "+char.mass}</span>
        <span>{"GENDER - "+char.gender}</span>
        </section>)}
    </div>
  );
};

export default Characters;
