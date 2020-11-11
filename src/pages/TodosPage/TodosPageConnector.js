import React, { useEffect, useState } from 'react';
import TodosPage from "./TodosPage";
import axios from 'axios';
import usePagePagination from '../../shared/helpers/usePagePagination/usePagePagination';

const CancelToken = axios.CancelToken;

const TodosPageConnector = () => {
  const [todos, setTodos] = useState([]);
  const [isLoadingTodos, setIsLoadingTodos] = useState(true);
  useEffect(() => {
    let cancelRequest = null;
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos',
      cancelToken: new CancelToken(c => {
        cancelRequest = c;
      })
    })
      .then(response => {
       setTodos(response.data);
       setIsLoadingTodos(false);
    }).catch(err => {
      if(axios.isCancel(err)) return;
      setIsLoadingTodos(false);
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
    <TodosPage
      key={ page }
      pagePagination={ pagePagination }
      pokemons={ pokemons }
      isLoadingPokemons={ isLoadingPokemons }
    />
  );
};

export default TodosPageConnector;
