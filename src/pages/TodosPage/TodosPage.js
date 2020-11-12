import React, { useMemo, useState } from 'react';
import TablePagePagination from "../../shared/components/TablePagePagination/TablePagePagination";
import Table from '../../shared/components/Table/Table';
import './TodosPage.css';
import usePagePagination from '../../shared/helpers/usePagePagination/usePagePagination';
import { FIRST_PAGE } from '../../shared/helpers/usePagePagination/usePagePaginationConsts';
import HighLightSearchText from '../../shared/components/HightLightSearchText/HighLightSearchText';

const getStatus = completed => completed ? 'Completed' : 'Open';
const getColumns = (searchText, editAction) => [
  {
    id: '1',
    title: 'Id',
    render: content => (
      <HighLightSearchText
        text={ content.id.toString() }
        highlight = { searchText }
      />
    )
  },
  {
    id: '2',
    title: 'title',
    render: content => (
      <HighLightSearchText
        text={ content.title }
        highlight = { searchText }
      />
    )
  },
  {
    id: '3',
    title: 'Status',
    render: content => (
      <HighLightSearchText
        text={ getStatus(content.completed) }
        highlight = { searchText }
      />
    )
  },
  {
    id: '4',
    title: 'Actions',
    render: content => <button onClick = { () => editAction(content.id) } >Edit</button>
  }
];

const TodosPage = ({ todos, isLoadingTodos, gotoAddNewTodo, gotoEditTodo }) => {
  const [textSearch, setTextSearch] = useState('');
  const rowsFiltered = useMemo(() => todos.filter(({ id, title, completed }) => {
      return id.toString().toLowerCase().includes(textSearch.toLowerCase())
        || title.toLowerCase().includes(textSearch.toLowerCase())
        || getStatus(completed).toLowerCase().includes(textSearch.toLowerCase())
    }
  ), [todos, textSearch]);
  const pagePagination = usePagePagination(rowsFiltered.length);
  const { page, perPage, handleDirectPageChange } = pagePagination;
  const rowsPaged = useMemo(() => rowsFiltered.slice((page-1) * perPage, (page-1) * perPage + perPage), [rowsFiltered, page, perPage]);
  const columns = useMemo(() => getColumns(textSearch, gotoEditTodo), [textSearch, gotoEditTodo]);
  return (
    <div>
      <TablePagePagination
        pagePagination={ pagePagination }
      />
      <input
        placeholder="Filter by id or title or status..."
        value={ textSearch }
        onChange={ evt => {
          setTextSearch(evt.target.value);
          handleDirectPageChange(FIRST_PAGE);
        } }
      />
      <button onClick={ gotoAddNewTodo }>Add new</button>
      <Table
        rows={ rowsPaged }
        columns={ columns }
        isLoading={ isLoadingTodos }
      />
    </div>
  );
};

export default React.memo(TodosPage);
