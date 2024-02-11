import React from 'react';
import './style.scss';
const Loader = ({ isLoadPlanets }) => {

  return (
    <section className={isLoadPlanets ? 'loader' : 'offLoader'} data-testid="test-loader" >
    <div className='container'>
    <div className="starwars-load">
    <img  src={'/star.svg'}  alt="Star" className="star" />
    <img src="/wars.svg" alt="Wars" className="wars" />
    </div>
    <h2 className="byline" id="byline"><strong>Aguardar Deeeeeeeve...</strong></h2>
    </div>
    </section>    
  );
};

export default Loader;
