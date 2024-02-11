import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Loader from '../../components/loader';
import Filter from '../../components/filter';
import Characters from '../../components/characters'
import { getPlanets, getPeople } from '../../services';

import "./style.scss";

const StarWarsPeople = () => {
  const [selectedOption, setSelectedOption] = useState('id')
    const [chars, setChars] = useState([]);
    const [lastCharId, setLastCharId] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [pagePlanet, setPagePlanet] = useState(1);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadPlanets, setIsLoadPlanets] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

// exibe loader em tela toda, enquanto carrega toda a base de planetas, necessária para exibir a origem dos personagens    
    useEffect(() => {
      const loadPlanets = async () => {
        try {
          setIsLoading(true);
            const response = await getPlanets(pagePlanet);
            const filteredResults = response.results.map((item) => {
              return {
                name: item.name,
                url: item.url,
              };
            });
            setPlanets((planets) => [...planets, ...filteredResults]);
            if (response.count/10 > pagePlanet){setPagePlanet((pagePlanet) => pagePlanet + 1);}else{setIsLoadPlanets(false);}            
            setErrorMsg('');
        } catch (error) {
            setErrorMsg('negro lado força presente. de novo tentar.');
        } finally {
          setIsLoading(false);
        }
    };
    if(isLoadPlanets){loadPlanets();}
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [pagePlanet]);

//carrega os primeiros 10 personagens, adicionando um id em cada um, para posterior re-organização do estado inicial da lista      
     useEffect(() => {
      if(!isLoadPlanets){
      const loadChars = async (page) => {
        try {
            setIsLoading(true);
            const response = await getPeople(page);

            let index = lastCharId;
            const filteredResults = response.results.map((item) => {
              const homeworld = planets.find(planet => planet.url === item.homeworld);
              const nameHomeworld = homeworld ? homeworld.name : '';
              index=index+1;
              return {
                id: index,
                name: item.name,
                gender: item.gender,
                mass: item.mass,
                height: item.height,
                homeworld: nameHomeworld,
              };
            });
            setLastCharId(index);
            setChars((chars) => [...chars, ...filteredResults]);
            setErrorMsg('');
        } catch (error) {
            setErrorMsg('May the Force be with you.');
        } finally {
            setIsLoading(false);
        }
    };      
            loadChars(page);
  }
            // eslint-disable-next-line react-hooks/exhaustive-deps 
            }, [page, isLoadPlanets, planets]);
        
//ordena a lista de personagens, de acordo com a opção selecionada no filtro            
            useEffect(() => {
              const sortChars = (option) => {
                let sortedChars = [...chars];
                sortedChars.sort((a, b) => {
                  if (a[option] < b[option]) {
                    return -1;
                  }
                  if (a[option] > b[option]) {
                    return 1;
                  }
                  return 0;
                });
                setChars(sortedChars);
              };          
              sortChars(selectedOption);   
              // eslint-disable-next-line react-hooks/exhaustive-deps 
            }, [selectedOption]);

//carrega mais 10 personagens, a cada clique no botão "Load More"            
            const loadMore = () => {
              setPage((page) => page + 1);
            };
    
  return (
    <div>
      <Loader isLoadPlanets={isLoadPlanets} data-testid="test-loader"/>
      <Filter setSelectedOption={setSelectedOption} selectedOption={selectedOption} data-testid="test-filter"/>
      <Characters chars={chars} data-testid="test-chars"/>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className="load-more">
          <button onClick={loadMore} className="loadMore">
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>      
    </div>
  );
};

export default StarWarsPeople;