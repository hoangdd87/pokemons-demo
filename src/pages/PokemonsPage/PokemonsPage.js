import React, { useEffect, useMemo, useState } from 'react';
import TablePagePagination from "../../shared/components/TablePagePagination/TablePagePagination";
import Table from '../../shared/components/Table/Table';
import './PokemonPage.css';

const columns = [
  {
    id: '1',
    title: 'Name',
    render: content => content.name
  },
  {
    id: '2',
    title: 'Detail URL',
    render: content => <a href={ content.url }>{ content.url }</a>
  }
];

const PokemonsPage = ({ pagePagination, pokemons, isLoadingPokemons }) => {
  const [inputValue, setInputValue] = useState('');
  const [textSearch, setTextSearch] = useState('');
  
  const rows = useMemo(() => pokemons.map(pokemon => ({
    id: pokemon.name,
    name: pokemon.name,
    url: pokemon.url
  })), [pokemons]);
  
  const rowsFiltered = useMemo(() =>
    rows.filter(row => row.name.toLowerCase().includes(textSearch.toLowerCase())), [rows, textSearch]);
  
  useEffect(() => {
    const  delay = setTimeout(() => {
        setTextSearch(inputValue)
    }, 250);
    return () => {
      clearTimeout(delay);
    }
  }, [inputValue]);

  return (
    <div>
      <TablePagePagination
        pagePagination={ pagePagination }
      />
      <input
        placeholder="Filter on the current page..."
        value={ inputValue }
        onChange={ evt => setInputValue(evt.target.value) }
      />
      <Table
        rows={ rowsFiltered }
        columns={ columns }
        isLoading={ isLoadingPokemons }
      />
    </div>
  );
};

export default PokemonsPage;
