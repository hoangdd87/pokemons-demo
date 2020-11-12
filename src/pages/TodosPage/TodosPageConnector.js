import React, { useCallback, useEffect, useState } from 'react';
import TodosPage from "./TodosPage";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const CancelToken = axios.CancelToken;

const TodosPageConnector = () => {
  const [todos, setTodos] = useState([]);
  const [isLoadingTodos, setIsLoadingTodos] = useState(true);
  let history = useHistory();
  
  const gotoAddNewTodo = () => history.push('/add-todo');
  const gotoEditTodo = useCallback( id => history.push(`/edit-todo/${id}`), [history]);
  
  useEffect(() => {
    let cancelRequest = null;
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos',
      cancelToken: new CancelToken(c => {
        cancelRequest = c;
      })
    }).then(response => {
      setTodos(response.data);
      setIsLoadingTodos(false);
    }).catch(err => {
      if (!axios.isCancel(err)) {
        setIsLoadingTodos(false);
      }
      console.error(err);
    })
    /* clear all effects */
    return () => {
      cancelRequest();
    }
  }, []);
  
  return (
    <TodosPage
      todos={ todos }
      isLoadingTodos={ isLoadingTodos }
      gotoAddNewTodo={ gotoAddNewTodo }
      gotoEditTodo={ gotoEditTodo }
    />
  );
};

export default TodosPageConnector;
