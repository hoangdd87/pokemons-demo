import React, { useEffect, useMemo, useState } from 'react';
import TablePagePagination from "../../shared/components/TablePagePagination/TablePagePagination";
import Table from '../../shared/components/Table/Table';
import './TodosPage.css';

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

const TodosPage = ({ pagePagination, pokemons, isLoadingPokemons }) => {
  const [textSearch, setTextSearch] = useState('');
  const rows = useMemo(() => pokemons.map(pokemon => ({
    id: pokemon.name,
    name: pokemon.name,
    url: pokemon.url
  })), [pokemons]);
  const [rowsFiltered, setRowsFiltered] = useState(rows);

  useEffect(() => {
    const delay = setTimeout(() => {
      setRowsFiltered(rows.filter(row => row.name.toLowerCase().includes(textSearch.toLowerCase())));
    }, 250);
    return () => {
      clearTimeout(delay);
    }
  }, [rows, textSearch]);

  return (
    <div>
      <TablePagePagination
        pagePagination={ pagePagination }
      />
      <input
        placeholder="Filter on the current page..."
        value={ textSearch }
        onChange={ evt => setTextSearch(evt.target.value) }
      />
      <Table
        rows={ rowsFiltered }
        columns={ columns }
        isLoading={ isLoadingPokemons }
      />
    </div>
  );
};

export default TodosPage;
