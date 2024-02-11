import React from 'react';
import './style.scss';
// import Character from '../character';

const Filter = ({ setSelectedOption, selectedOption }) => {
  return (
    <menu>
    <div>
    <label>Filter By:</label>
    <select value={selectedOption} onChange={event => setSelectedOption(event.target.value)} data-testid="test-selectFilter">
      <option value="id">All</option>
      <option value="name">Name</option>
      <option value="homeworld">Homeworld</option>
    </select>
    </div>
    <button onClick={() => setSelectedOption('id')} disabled={selectedOption === 'id'} data-testid="test-buttonSearch">
      Clear all
    </button>
    </menu>
  );
};

export default Filter;
