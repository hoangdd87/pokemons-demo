import React, { useEffect, useState } from 'react';
import PokemonsPage from "./PokemonsPage";
import axios from 'axios';
import usePagePagination from '../../shared/helpers/usePagePagination/usePagePagination';

const CancelToken = axios.CancelToken;

const PokemonsPageConnector = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsCount, setPokemonsCount] = useState(0);
  const [isLoadingPokemons, setIsLoadingPokemons] = useState(true);
  const {
    page,
    perPage,
    gotoPrevPage,
    gotoNextPage,
    totalPages,
    changePerPage,
    changePage,
    gotoLast,
    gotoFirst
  } = usePagePagination(pokemonsCount);

  useEffect(() => {
    let cancelRequest = null;
    let delay = null;
    setIsLoadingPokemons(true);

    axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
      params: {
        limit: perPage,
        offset: (page - 1) * perPage
      },
      cancelToken: new CancelToken(c => {
        cancelRequest = c;
      })
    })
      .then(response => {
      delay = setTimeout(() => {
        const { count, results } = response.data;
        setIsLoadingPokemons(false);
        setPokemonsCount(count);
        setPokemons([...results]);
      }, 1500)
    }).catch(err => {
      if(!axios.isCancel(err)) {
        setIsLoadingPokemons(false);
      }
      console.error(err);
    })

    /* clear all effects */
    return () => {
      cancelRequest();
      if (delay) {
        clearTimeout(delay);
      }
    }
  }, [page, perPage]);
  
  return (
    <PokemonsPage
      key={ page }
      pagePagination={ {
        page,
        perPage,
        handlePrevPage: gotoPrevPage,
        handleNextPage: gotoNextPage,
        handlePerPageChanged: changePerPage,
        handleDirectPageChange: changePage,
        handleGotoLast: gotoLast,
        handleGotoFirst: gotoFirst,
        totalPages
      } }
      pokemons={ pokemons }
      isLoadingPokemons={ isLoadingPokemons }
    />
  );
};

export default PokemonsPageConnector;
